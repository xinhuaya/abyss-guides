import { websiteConfig } from '@/config/website';
import { Routes } from '@/routes';

type PaymentVariableStatus = {
  name: string;
  configured: boolean;
  required: boolean;
};

const provider = websiteConfig.payment.provider;

const creemProductVariables = [
  'NEXT_PUBLIC_CREEM_PRODUCT_PRO_MONTHLY',
  'NEXT_PUBLIC_CREEM_PRODUCT_PRO_YEARLY',
  'NEXT_PUBLIC_CREEM_PRODUCT_MAX_MONTHLY',
  'NEXT_PUBLIC_CREEM_PRODUCT_MAX_YEARLY',
] as const;

const stripePriceVariables = [
  'NEXT_PUBLIC_STRIPE_PRICE_PRO_MONTHLY',
  'NEXT_PUBLIC_STRIPE_PRICE_PRO_YEARLY',
  'NEXT_PUBLIC_STRIPE_PRICE_MAX_MONTHLY',
  'NEXT_PUBLIC_STRIPE_PRICE_MAX_YEARLY',
] as const;

function isConfigured(value: string | undefined) {
  return Boolean(value?.trim());
}

function toStatus(name: string, required = true): PaymentVariableStatus {
  return {
    name,
    configured: isConfigured(process.env[name]),
    required,
  };
}

function getBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_BASE_URL ||
    `http://localhost:${process.env.PORT ?? 3000}`
  ).replace(/\/$/, '');
}

export function getPaymentHealth() {
  const baseUrl = getBaseUrl();
  const isCreem = provider === 'creem';
  const required = isCreem
    ? [
        toStatus('CREEM_API_KEY'),
        toStatus('CREEM_WEBHOOK_SECRET'),
        ...creemProductVariables.map((name) => toStatus(name)),
      ]
    : [
        toStatus('STRIPE_SECRET_KEY'),
        toStatus('STRIPE_WEBHOOK_SECRET'),
        ...stripePriceVariables.map((name) => toStatus(name)),
      ];

  const optional = isCreem
    ? [toStatus('CREEM_DEBUG', false)]
    : [toStatus('NEXT_PUBLIC_PAYMENT_PROVIDER', false)];

  const missingRequired = required
    .filter((item) => !item.configured)
    .map((item) => item.name);

  return {
    provider,
    ready: missingRequired.length === 0,
    mode: isCreem
      ? process.env.CREEM_DEBUG === 'false'
        ? 'production'
        : 'sandbox'
      : 'stripe',
    checkoutReturnTargets: {
      subscriptions: `${baseUrl}${Routes.SettingsBilling}`,
    },
    webhookEndpoint: isCreem
      ? `${baseUrl}/api/webhooks/creem`
      : `${baseUrl}/api/webhooks/stripe`,
    required,
    optional,
    missingRequired,
    notes: [
      'This endpoint only reports whether payment variables are present.',
      'It never returns API keys, webhook secrets, or product IDs.',
      'Creem uses product IDs in the NEXT_PUBLIC_CREEM_PRODUCT_* variables.',
      'ThumbAI MVP uses subscription products only: Pro Monthly, Pro Yearly, Max Monthly, and Max Yearly.',
      'Set CREEM_DEBUG=true for sandbox testing and false for production.',
    ],
  };
}
