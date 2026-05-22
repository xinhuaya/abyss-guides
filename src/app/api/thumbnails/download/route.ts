import { type NextRequest, NextResponse } from 'next/server';

function sanitizeFilename(value: string | null) {
  const fallback = 'thumbai-thumbnail.png';
  if (!value) return fallback;
  const clean = value.replace(/[^a-zA-Z0-9._-]+/g, '-').slice(0, 96);
  return clean || fallback;
}

function getAllowedHosts() {
  const hosts = new Set<string>();
  const publicUrl = process.env.STORAGE_PUBLIC_URL;

  if (publicUrl) {
    try {
      hosts.add(new URL(publicUrl).hostname);
    } catch {
      // Ignore invalid optional config; request validation below will fail.
    }
  }

  return hosts;
}

export async function GET(request: NextRequest) {
  const source = request.nextUrl.searchParams.get('url');
  const name = sanitizeFilename(request.nextUrl.searchParams.get('name'));

  if (!source) {
    return NextResponse.json({ error: 'Missing image URL' }, { status: 400 });
  }

  let imageUrl: URL;
  try {
    imageUrl = new URL(source);
  } catch {
    return NextResponse.json({ error: 'Invalid image URL' }, { status: 400 });
  }

  const allowedHosts = getAllowedHosts();
  if (imageUrl.protocol !== 'https:' || !allowedHosts.has(imageUrl.hostname)) {
    return NextResponse.json(
      { error: 'Image host is not allowed' },
      { status: 400 }
    );
  }

  const response = await fetch(imageUrl);
  if (!response.ok) {
    return NextResponse.json(
      { error: 'Could not fetch image' },
      { status: response.status }
    );
  }

  const contentType = response.headers.get('content-type') || 'image/png';
  const body = await response.arrayBuffer();

  return new NextResponse(body, {
    headers: {
      'Content-Disposition': `attachment; filename="${name}"`,
      'Content-Type': contentType,
      'Cache-Control': 'private, max-age=60',
    },
  });
}
