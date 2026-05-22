import {
  generateThumbnailDirections,
  normalizeThumbnailGenerationRequest,
} from '@/thumbnails/generation';
import { consumeCredits, hasEnoughCredits } from '@/credits/credits';
import { saveThumbnailGeneration } from '@/thumbnails/history';
import { guardLiveThumbnailGeneration } from '@/thumbnails/live-guard';
import { requireSession } from '@/lib/require-session';
import type { ThumbnailGenerationRequest } from '@/thumbnails/mock-results';
import { type NextRequest, NextResponse } from 'next/server';

function getLiveGenerationCreditCost() {
  const value = Number(process.env.THUMBAI_LIVE_GENERATION_CREDIT_COST || 1);
  return Number.isFinite(value) && value > 0 ? value : 1;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<ThumbnailGenerationRequest>;
    const normalized = normalizeThumbnailGenerationRequest(body);

    if (!normalized.ok) {
      return NextResponse.json(
        { error: normalized.error },
        { status: normalized.status }
      );
    }

    const isLiveGeneration = normalized.input.generationMode === 'live';
    const session = isLiveGeneration ? await requireSession(request) : null;

    if (isLiveGeneration) {
      const guard = await guardLiveThumbnailGeneration(request);
      if (!guard.ok) {
        return NextResponse.json(
          { error: guard.error },
          { status: guard.status }
        );
      }

      if (!session?.user) {
        return NextResponse.json(
          { error: 'Sign in to run live thumbnail generation.' },
          { status: 401 }
        );
      }

      const hasCredits = await hasEnoughCredits({
        userId: session.user.id,
        requiredCredits: getLiveGenerationCreditCost(),
      });

      if (!hasCredits) {
        return NextResponse.json(
          {
            error:
              'Not enough credits for live generation. Add credits or upgrade before trying again.',
          },
          { status: 402 }
        );
      }
    }

    const response = await generateThumbnailDirections(normalized.input);
    let generationId: string | undefined;

    if (isLiveGeneration && session?.user) {
      await consumeCredits({
        userId: session.user.id,
        amount: getLiveGenerationCreditCost(),
        description: `ThumbAI live thumbnail generation: ${response.jobId}`,
      });

      generationId = await saveThumbnailGeneration({
        userId: session.user.id,
        provider: response.provider,
        input: response.input,
        results: response.results,
      });
    }

    return NextResponse.json({ ...response, generationId });
  } catch (error) {
    console.error('Error generating thumbnails:', error);
    const message =
      error instanceof Error
        ? error.message
        : 'Something went wrong while generating thumbnails';
    const isRateLimit =
      message.includes('429') ||
      message.toLowerCase().includes('throttled') ||
      message.toLowerCase().includes('rate limit');

    return NextResponse.json(
      {
        error: isRateLimit
          ? 'Replicate is rate limiting this account. Wait a few seconds and try again.'
          : 'Something went wrong while generating thumbnails',
      },
      { status: isRateLimit ? 429 : 500 }
    );
  }
}
