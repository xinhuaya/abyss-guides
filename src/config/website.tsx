import { PaymentTypes, PlanIntervals } from '@/payment/types';
import type { PaymentConfig, WebsiteConfig } from '@/types';

// Payment provider controlled by env var: 'stripe' | 'creem'
const paymentProvider = (process.env.NEXT_PUBLIC_PAYMENT_PROVIDER ||
  'stripe') as PaymentConfig['provider'];
const isCreem = paymentProvider === 'creem';

// Resolve price/product IDs based on the active payment provider
const priceIds = {
  proMonthly: isCreem
    ? process.env.NEXT_PUBLIC_CREEM_PRODUCT_PRO_MONTHLY!
    : process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO_MONTHLY!,
  proYearly: isCreem
    ? process.env.NEXT_PUBLIC_CREEM_PRODUCT_PRO_YEARLY!
    : process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO_YEARLY!,
  maxMonthly: isCreem
    ? process.env.NEXT_PUBLIC_CREEM_PRODUCT_MAX_MONTHLY!
    : process.env.NEXT_PUBLIC_STRIPE_PRICE_MAX_MONTHLY!,
  maxYearly: isCreem
    ? process.env.NEXT_PUBLIC_CREEM_PRODUCT_MAX_YEARLY!
    : process.env.NEXT_PUBLIC_STRIPE_PRICE_MAX_YEARLY!,
  creditsBasic: isCreem
    ? process.env.NEXT_PUBLIC_CREEM_PRODUCT_CREDITS_BASIC!
    : process.env.NEXT_PUBLIC_STRIPE_PRICE_CREDITS_BASIC!,
  creditsStandard: isCreem
    ? process.env.NEXT_PUBLIC_CREEM_PRODUCT_CREDITS_STANDARD!
    : process.env.NEXT_PUBLIC_STRIPE_PRICE_CREDITS_STANDARD!,
  creditsPremium: isCreem
    ? process.env.NEXT_PUBLIC_CREEM_PRODUCT_CREDITS_PREMIUM!
    : process.env.NEXT_PUBLIC_STRIPE_PRICE_CREDITS_PREMIUM!,
  creditsEnterprise: isCreem
    ? process.env.NEXT_PUBLIC_CREEM_PRODUCT_CREDITS_ENTERPRISE!
    : process.env.NEXT_PUBLIC_STRIPE_PRICE_CREDITS_ENTERPRISE!,
};

/**
 * website config, without translations
 *
 * docs:
 * https://mksaas.com/docs/config/website
 */
export const websiteConfig: WebsiteConfig = {
  ui: {
    mode: {
      defaultMode: 'light',
      enableSwitch: true,
    },
  },
  metadata: {
    images: {
      ogImage: '/og.png',
      logoLight: '/logo.png',
      logoDark: '/logo-dark.png',
    },
    social: {
      github: 'https://github.com/xinhuaya/abyss-guides',
      twitter: '',
      blueSky: '',
      discord: '',
      mastodon: '',
      linkedin: '',
      youtube: '',
    },
  },
  features: {
    enableUpgradeCard: false,
    enableUpdateAvatar: true,
    enableDatafastRevenueTrack: false,
    enableCrispChat: process.env.NEXT_PUBLIC_DEMO_WEBSITE === 'true',
    enableTurnstileCaptcha: process.env.NEXT_PUBLIC_DEMO_WEBSITE === 'true',
  },
  affiliates: {
    enable: false,
    provider: 'affonso',
  },
  analytics: {
    enableVercelAnalytics: false,
    enableSpeedInsights: false,
  },
  apikeys: {
    enable: process.env.NEXT_PUBLIC_DEMO_WEBSITE === 'true',
  },
  auth: {
    enableGoogleLogin: false,
    enableGithubLogin: false,
    enableCredentialLogin: false,
    enableDeleteUser: true,
  },
  i18n: {
    defaultLocale: 'en',
    locales: {
      en: {
        flag: 'US',
        name: 'English',
        hreflang: 'en',
      },
      zh: {
        flag: 'CN',
        name: '中文',
        hreflang: 'zh-CN',
      },
    },
  },
  blog: {
    enable: false,
    paginationSize: 6,
    relatedPostsSize: 3,
  },
  docs: {
    enable: false,
  },
  mail: {
    enable: false,
    provider: 'resend',
    fromEmail: 'Abyss Guides <support@abyssguides.com>',
    supportEmail: 'support@abyssguides.com',
  },
  newsletter: {
    enable: false,
    provider: 'resend',
    autoSubscribeAfterSignUp: true,
  },
  notification: {
    enable: false,
    provider: 'discord',
  },
  storage: {
    enable: false,
    provider: 's3',
  },
  payment: {
    provider: paymentProvider,
  },
  price: {
    plans: {
      free: {
        id: 'free',
        prices: [],
        isFree: true,
        isLifetime: false,
        credits: {
          enable: true,
          amount: 10,
          expireDays: 30,
        },
      },
      pro: {
        id: 'pro',
        prices: [
          {
            type: PaymentTypes.SUBSCRIPTION,
            priceId: priceIds.proMonthly,
            amount: 990,
            currency: 'USD',
            interval: PlanIntervals.MONTH,
          },
          {
            type: PaymentTypes.SUBSCRIPTION,
            priceId: priceIds.proYearly,
            amount: 9900,
            currency: 'USD',
            interval: PlanIntervals.YEAR,
          },
        ],
        isFree: false,
        isLifetime: false,
        popular: true,
        credits: {
          enable: true,
          amount: 300,
          expireDays: 30,
        },
      },
      max: {
        id: 'max',
        prices: [
          {
            type: PaymentTypes.SUBSCRIPTION,
            priceId: priceIds.maxMonthly,
            amount: 1990,
            currency: 'USD',
            interval: PlanIntervals.MONTH,
          },
          {
            type: PaymentTypes.SUBSCRIPTION,
            priceId: priceIds.maxYearly,
            amount: 19900,
            currency: 'USD',
            interval: PlanIntervals.YEAR,
          },
        ],
        isFree: false,
        isLifetime: false,
        credits: {
          enable: true,
          amount: 1000,
          expireDays: 30,
        },
      },
    },
  },
  credits: {
    enableCredits: true,
    enablePackagesForFreePlan: false,
    registerGiftCredits: {
      enable: true,
      amount: 5,
      expireDays: 30,
    },
    packages: {
      basic: {
        id: 'basic',
        disabled: true,
        popular: false,
        amount: 20,
        expireDays: 30,
        price: {
          priceId: priceIds.creditsBasic,
          amount: 500,
          currency: 'USD',
          allowPromotionCode: true,
        },
      },
      standard: {
        id: 'standard',
        disabled: true,
        popular: true,
        amount: 60,
        expireDays: 30,
        price: {
          priceId: priceIds.creditsStandard,
          amount: 1200,
          currency: 'USD',
          allowPromotionCode: true,
        },
      },
      premium: {
        id: 'premium',
        disabled: true,
        popular: false,
        amount: 150,
        expireDays: 30,
        price: {
          priceId: priceIds.creditsPremium,
          amount: 2500,
          currency: 'USD',
          allowPromotionCode: true,
        },
      },
      enterprise: {
        id: 'enterprise',
        disabled: true,
        popular: false,
        amount: 500,
        expireDays: 30,
        price: {
          priceId: priceIds.creditsEnterprise,
          amount: 7900,
          currency: 'USD',
          allowPromotionCode: true,
        },
      },
    },
  },
};
