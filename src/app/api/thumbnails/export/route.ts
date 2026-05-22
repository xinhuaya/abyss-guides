import { type NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

const SIZES = {
  '16:9': { width: 1280, height: 720 },
  '9:16': { width: 720, height: 1280 },
  '1:1': { width: 1080, height: 1080 },
} as const;

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function sanitizeFilename(value: string | null) {
  const fallback = 'thumbai-cover.png';
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
      // Optional config is validated by request handling below.
    }
  }

  return hosts;
}

function clampText(value: string | null, fallback: string) {
  const text = (value || '').trim() || fallback;
  return text.slice(0, 80);
}

function splitHeadline(value: string, maxLineLength: number) {
  const words = value.toUpperCase().split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxLineLength && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) lines.push(current);
  return lines.slice(0, 3);
}

function buildOverlaySvg({
  width,
  height,
  headline,
  badge,
}: {
  width: number;
  height: number;
  headline: string;
  badge: string;
}) {
  const isVertical = height > width;
  const margin = Math.round(width * 0.055);
  const headlineSize = isVertical ? 66 : 78;
  const badgeSize = isVertical ? 23 : 26;
  const watermarkSize = isVertical ? 23 : 24;
  const lineHeight = Math.round(headlineSize * 0.92);
  const maxLineLength = isVertical ? 11 : 18;
  const lines = splitHeadline(headline, maxLineLength);
  const headlineY = height - margin - lines.length * lineHeight + lineHeight;
  const escapedBadge = escapeXml(badge.toUpperCase());

  const lineNodes = lines
    .map((line, index) => {
      const y = headlineY + index * lineHeight;
      const escaped = escapeXml(line);
      return `
        <text x="${margin}" y="${y}" class="headline shadow">${escaped}</text>
        <text x="${margin}" y="${y}" class="headline">${escaped}</text>
      `;
    })
    .join('');

  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stop-color="#1b130d" stop-opacity="0.88"/>
          <stop offset="52%" stop-color="#1b130d" stop-opacity="0.16"/>
          <stop offset="100%" stop-color="#1b130d" stop-opacity="0.48"/>
        </linearGradient>
        <style>
          .badge { font-family: Arial, Helvetica, sans-serif; font-weight: 900; font-size: ${badgeSize}px; letter-spacing: 1px; fill: #241b13; }
          .headline { font-family: Arial Black, Impact, Arial, Helvetica, sans-serif; font-weight: 900; font-size: ${headlineSize}px; letter-spacing: 0; fill: white; }
          .shadow { fill: #111; opacity: 0.95; transform: translate(0, 8px); }
          .watermark { font-family: Arial, Helvetica, sans-serif; font-weight: 900; font-size: ${watermarkSize}px; letter-spacing: 2px; fill: #241b13; }
        </style>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#shade)"/>
      <rect x="${margin}" y="${margin}" width="${Math.min(width * 0.42, 520)}" height="${badgeSize * 2.15}" rx="${badgeSize}" fill="#fff8ea"/>
      <text x="${margin + badgeSize}" y="${margin + badgeSize * 1.45}" class="badge">${escapedBadge}</text>
      ${lineNodes}
      <rect x="${width - margin - 178}" y="${height - margin - 44}" width="178" height="44" rx="22" fill="#fff0bd" opacity="0.92"/>
      <text x="${width - margin - 146}" y="${height - margin - 16}" class="watermark">THUMBAI</text>
    </svg>
  `;
}

export async function GET(request: NextRequest) {
  const source = request.nextUrl.searchParams.get('url');
  const format = request.nextUrl.searchParams.get('format') || '16:9';
  const name = sanitizeFilename(request.nextUrl.searchParams.get('name'));
  const headline = clampText(
    request.nextUrl.searchParams.get('headline'),
    'WHAT HAPPENED NEXT?'
  );
  const badge = clampText(
    request.nextUrl.searchParams.get('badge'),
    'Curiosity Hook'
  );
  const size = SIZES[format as keyof typeof SIZES] ?? SIZES['16:9'];

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

  const image = Buffer.from(await response.arrayBuffer());
  const overlay = Buffer.from(
    buildOverlaySvg({
      width: size.width,
      height: size.height,
      headline,
      badge,
    })
  );

  const output = await sharp(image)
    .resize(size.width, size.height, { fit: 'cover' })
    .composite([{ input: overlay, top: 0, left: 0 }])
    .png()
    .toBuffer();

  return new NextResponse(new Uint8Array(output), {
    headers: {
      'Content-Disposition': `attachment; filename="${name}"`,
      'Content-Type': 'image/png',
      'Cache-Control': 'private, max-age=60',
    },
  });
}
