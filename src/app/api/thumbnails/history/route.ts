import { requireSession } from '@/lib/require-session';
import { listThumbnailGenerations } from '@/thumbnails/history';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const session = await requireSession(request);

  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const generations = await listThumbnailGenerations(session.user.id);

  return NextResponse.json({ generations });
}
