'use client';

import Script from 'next/script';
import { useEffect } from 'react';

const adsenseClient = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT;
const adsenseEnabled =
  process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ENABLED === 'true' &&
  Boolean(adsenseClient);

type AdsenseSlotProps = {
  slot?: string;
  className?: string;
  label?: string;
};

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export function GoogleAdsenseScript() {
  if (!adsenseEnabled || !adsenseClient) {
    return null;
  }

  return (
    <Script
      async
      crossOrigin="anonymous"
      id="google-adsense-script"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
      strategy="afterInteractive"
    />
  );
}

export function AdsenseSlot({
  slot,
  className = '',
  label = 'Advertisement',
}: AdsenseSlotProps) {
  const shouldRender =
    adsenseEnabled && Boolean(adsenseClient) && Boolean(slot);

  useEffect(() => {
    if (!shouldRender) {
      return;
    }

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // Ad blockers and preview browsers can block AdSense; the page should keep rendering.
    }
  }, [shouldRender]);

  if (!shouldRender) {
    return null;
  }

  return (
    <aside
      aria-label={label}
      className={`overflow-hidden border border-cyan-200/10 bg-[#061d22]/70 p-3 ${className}`}
    >
      <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7baaa2]">
        {label}
      </p>
      <ins
        className="adsbygoogle block min-h-24"
        data-ad-client={adsenseClient}
        data-ad-format="auto"
        data-ad-slot={slot}
        data-full-width-responsive="true"
        style={{ display: 'block' }}
      />
    </aside>
  );
}
