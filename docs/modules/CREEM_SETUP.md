# ThumbAI Creem Setup

ThumbAI uses MkSaaS' built-in Creem payment provider for subscriptions. The MVP pricing model is simple: subscription plans include monthly generation credits. We are not selling one-time lifetime access or separate credit packs in the first version.

## 1. Environment

Set the active payment provider:

```env
NEXT_PUBLIC_PAYMENT_PROVIDER="creem"
CREEM_DEBUG="true"
CREEM_API_KEY=""
CREEM_WEBHOOK_SECRET=""
```

Use `CREEM_DEBUG="true"` while testing in Creem sandbox. Set it to `false` only when the production products and webhook are ready.

## 2. Products To Create In Creem

Create these subscription products in Creem and copy their product IDs into `.env.local`:

```env
NEXT_PUBLIC_CREEM_PRODUCT_PRO_MONTHLY=""
NEXT_PUBLIC_CREEM_PRODUCT_PRO_YEARLY=""
NEXT_PUBLIC_CREEM_PRODUCT_MAX_MONTHLY=""
NEXT_PUBLIC_CREEM_PRODUCT_MAX_YEARLY=""
```

Suggested ThumbAI pricing:

- Pro Monthly: `$9.90/month`, includes `300` monthly live-generation credits.
- Pro Yearly: `$99/year`, includes `300` monthly live-generation credits.
- Max Monthly: `$19.90/month`, includes `1,000` monthly live-generation credits.
- Max Yearly: `$199/year`, includes `1,000` monthly live-generation credits.

## 3. Webhook

Add this endpoint in Creem:

```text
https://thumbai.app/api/webhooks/creem
```

For local webhook testing, use your tunnel domain instead of `https://thumbai.app`.

Required events:

- `checkout.completed`
- `subscription.paid`
- `subscription.active`
- `subscription.update`
- `subscription.canceled`
- `subscription.scheduled_cancel`
- `subscription.expired`
- `subscription.trialing`
- `subscription.past_due`
- `subscription.paused`

## 4. Health Check

After filling the values, open:

```text
/api/payment/health
```

The endpoint reports which variables are configured or missing. It never returns API keys, webhook secrets, or product IDs.
