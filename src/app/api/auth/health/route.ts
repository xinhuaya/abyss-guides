import { NextResponse } from 'next/server';

const GOOGLE_CALLBACK_PATH = '/api/auth/callback/google';

function configured(value: string | undefined) {
  return Boolean(value?.trim());
}

export function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    `http://localhost:${process.env.PORT ?? 3000}`;

  return NextResponse.json({
    ready:
      configured(process.env.BETTER_AUTH_SECRET) &&
      configured(process.env.DATABASE_URL),
    baseUrl,
    database: {
      ready: configured(process.env.DATABASE_URL),
      urlConfigured: configured(process.env.DATABASE_URL),
    },
    betterAuthSecretConfigured: configured(process.env.BETTER_AUTH_SECRET),
    google: {
      ready:
        configured(process.env.GOOGLE_CLIENT_ID) &&
        configured(process.env.GOOGLE_CLIENT_SECRET),
      clientIdConfigured: configured(process.env.GOOGLE_CLIENT_ID),
      clientSecretConfigured: configured(process.env.GOOGLE_CLIENT_SECRET),
      redirectUri: `${baseUrl.replace(/\/$/, '')}${GOOGLE_CALLBACK_PATH}`,
    },
    notes: [
      'This endpoint only reports whether auth variables are present.',
      'It never returns OAuth client secrets or auth secrets.',
      'The Google redirect URI must exactly match the URI shown here.',
      'Google sign-in also requires DATABASE_URL because sessions and users are stored in Postgres.',
    ],
  });
}
