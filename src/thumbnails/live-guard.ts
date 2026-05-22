import { requireSession } from '@/lib/require-session';
import type { NextRequest } from 'next/server';
import type { Session } from '@/lib/auth-types';

type RateLimitRecord = {
  count: number;
  resetAt: number;
};

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const DEFAULT_GUEST_LIMIT = 1;
const DEFAULT_USER_LIMIT = 10;
const liveGenerationLimits = new Map<string, RateLimitRecord>();

function isLiveProvider() {
  return process.env.THUMBAI_GENERATION_PROVIDER?.trim() === 'replicate';
}

function allowGuestLiveGeneration() {
  return process.env.THUMBAI_ALLOW_GUEST_LIVE_GENERATION?.trim() === 'true';
}

function getLimit(envName: string, fallback: number) {
  const value = Number(process.env[envName]);
  return Number.isFinite(value) && value >= 0 ? value : fallback;
}

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-real-ip') ||
    forwardedFor?.split(',')[0]?.trim() ||
    'unknown'
  );
}

function isRateLimited(key: string, limit: number) {
  const now = Date.now();
  const current = liveGenerationLimits.get(key);

  if (!current || current.resetAt <= now) {
    liveGenerationLimits.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (current.count >= limit) {
    return true;
  }

  current.count += 1;
  return false;
}

async function getSessionOrNull(request: NextRequest): Promise<Session | null> {
  try {
    return await requireSession(request);
  } catch (error) {
    console.error('Live generation session check failed:', error);
    return null;
  }
}

export async function guardLiveThumbnailGeneration(request: NextRequest) {
  if (!isLiveProvider()) {
    return { ok: true as const };
  }

  const session = await getSessionOrNull(request);
  const isSignedIn = Boolean(session?.user);

  if (!isSignedIn && !allowGuestLiveGeneration()) {
    return {
      ok: false as const,
      status: 401,
      error: 'Sign in to run live thumbnail generation.',
    };
  }

  const clientIp = getClientIp(request);
  const limit = isSignedIn
    ? getLimit('THUMBAI_LIVE_USER_LIMIT_PER_HOUR', DEFAULT_USER_LIMIT)
    : getLimit('THUMBAI_LIVE_GUEST_LIMIT_PER_HOUR', DEFAULT_GUEST_LIMIT);
  const rateLimitKey = isSignedIn
    ? `user:${session?.user.id}`
    : `guest:${clientIp}`;

  if (isRateLimited(rateLimitKey, limit)) {
    return {
      ok: false as const,
      status: 429,
      error: 'Live generation limit reached. Please try again later.',
    };
  }

  return { ok: true as const };
}
