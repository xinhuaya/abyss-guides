# ThumbAI Generation Module

ThumbAI uses a provider wrapper for thumbnail generation. The UI can keep using local mock results while the backend is prepared for a real image model.

## Providers

### Mock

Use this for product design, copy, and layout testing:

```env
THUMBAI_GENERATION_PROVIDER=mock
```

Mock mode returns three A/B-ready directions immediately and does not call a paid model.

### Replicate

Use this when you are ready to call a real image model:

```env
THUMBAI_GENERATION_PROVIDER=replicate
REPLICATE_API_TOKEN=your-replicate-token
REPLICATE_IMAGE_MODEL=owner/model
THUMBAI_ALLOW_GUEST_LIVE_GENERATION=false
THUMBAI_LIVE_GUEST_LIMIT_PER_HOUR=1
THUMBAI_LIVE_USER_LIMIT_PER_HOUR=10
```

The adapter calls Replicate's model prediction endpoint:

```text
POST https://api.replicate.com/v1/models/{owner}/{model}/predictions
```

It sends a normalized prompt, aspect ratio, output format, requested output count, and the reference image URL when one is available. Different Replicate models can use slightly different input names, so verify the target model's input schema before launch.

## Request Shape

The generation API accepts normalized product fields:

```json
{
  "prompt": "I tried the 5AM routine for 30 days",
  "format": "16:9",
  "generationMode": "preview",
  "outputLanguage": "en",
  "source": "home",
  "strategy": "curiosity",
  "layout": "cleanText",
  "sourceUrl": "https://youtube.com/watch?v=...",
  "assets": [
    {
      "kind": "reference",
      "source": "upload",
      "url": "https://pub-xxx.r2.dev/thumbai/guest-assets/ref.png",
      "key": "thumbai/guest-assets/ref.png",
      "name": "ref.png",
      "mimeType": "image/png"
    }
  ]
}
```

## Response Shape

The API returns provider metadata, the normalized input, and three thumbnail variants:

```json
{
  "jobId": "mock-...",
  "status": "completed",
  "provider": {
    "id": "mock",
    "mode": "mock",
    "model": "local-thumbnail-director-v0"
  },
  "input": {},
  "results": [
    {
      "id": "curiosity",
      "headline": "WHAT HAPPENED NEXT?",
      "score": 94,
      "gradient": "from-[#64f0d2] via-[#ffcf56] to-[#20130d]",
      "imageUrl": "https://..."
    }
  ]
}
```

`imageUrl` is optional. Mock results use gradients. Live providers should return image URLs when the model output includes them.

In Replicate mode, ThumbAI downloads generated model images and stores them in R2 under:

```text
thumbai/generated
```

The returned `imageUrl` should be the R2 public URL. When available, `temporaryImageUrl` keeps the original model-hosted URL for debugging, and `storageKey` stores the R2 object key.

## Live Generation Safety

Generation requests can choose `generationMode`:

- `preview`: always returns local mock directions. Use this for the homepage and other low-friction guest flows.
- `live`: can call the configured paid provider. Use this for the workbench after login/credits are ready.

When `generationMode=live` and `THUMBAI_GENERATION_PROVIDER=replicate`, the API enables a safety guard before calling the paid model.

- Anonymous users are blocked by default.
- Set `THUMBAI_ALLOW_GUEST_LIVE_GENERATION=true` only when you intentionally want guest live generation.
- Guest and signed-in users have separate hourly IP/user limits.
- Preview mode ignores this guard so local product testing and the homepage stay fast and free.

## Launch Notes

- Keep mock mode on until Replicate billing and model choice are confirmed.
- Test with a low-cost model first before enabling guest access.
- Add rate limiting before allowing anonymous real generation.
- Keep R2 `STORAGE_PUBLIC_URL` configured so generated images can be rendered from your own storage.
