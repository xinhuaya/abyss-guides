import { getUserCredits } from '@/credits/credits';
import { requireSession } from '@/lib/require-session';
import { type NextRequest, NextResponse } from 'next/server';

function getLiveGenerationCreditCost() {
  const value = Number(process.env.THUMBAI_LIVE_GENERATION_CREDIT_COST || 1);
  return Number.isFinite(value) && value > 0 ? value : 1;
}

export async function GET(request: NextRequest) {
  const session = await requireSession(request);

  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const balance = await getUserCredits(session.user.id);
  const cost = getLiveGenerationCreditCost();

  return NextResponse.json({
    balance,
    cost,
    canGenerate: balance >= cost,
  });
}
