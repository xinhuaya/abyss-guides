# Google OAuth For ThumbAI

ThumbAI uses Better Auth social login. Google login requires a Google OAuth Client ID and Client Secret.

## Local Base URL

For local development in this project, use:

```env
NEXT_PUBLIC_BASE_URL=http://127.0.0.1:3001
```

The local Google redirect URI is:

```text
http://127.0.0.1:3001/api/auth/callback/google
```

You can always check the exact value at:

```text
http://127.0.0.1:3001/api/auth/health
```

## Google Cloud Setup

1. Open Google Cloud Console.
2. Create or select a project for ThumbAI.
3. Go to **APIs & Services > OAuth consent screen**.
4. Configure the app name as `ThumbAI`.
5. Add your email as the support email and developer contact email.
6. During local testing, keep the app in testing mode and add yourself as a test user.
7. Go to **APIs & Services > Credentials**.
8. Create **OAuth client ID**.
9. Choose **Web application**.
10. Add an authorized redirect URI:

```text
http://127.0.0.1:3001/api/auth/callback/google
```

11. Copy the Client ID and Client Secret into `.env.local`:

```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

12. Restart the dev server.
13. Open `/api/auth/health` and confirm `google.ready` is `true`.

## Production Setup

When the domain is ready, change:

```env
NEXT_PUBLIC_BASE_URL=https://thumbai.com
```

Then add this production redirect URI in Google Cloud:

```text
https://thumbai.com/api/auth/callback/google
```

Keep the local redirect URI too if you still test locally.

## Notes

- Do not share `GOOGLE_CLIENT_SECRET`.
- The redirect URI must match exactly, including protocol, host, port, and path.
- If Google says `redirect_uri_mismatch`, compare its requested redirect URI with `/api/auth/health`.
