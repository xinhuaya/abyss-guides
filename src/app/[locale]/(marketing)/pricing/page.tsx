import FaqSection from '@/components/blocks/faqs/faqs';
import Container from '@/components/layout/container';
import { PricingTable } from '@/components/pricing/pricing-table';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { Routes } from '@/routes';
import { CheckCircle2Icon, SparklesIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export default async function PricingPage() {
  const t = await getTranslations('PricingPage');

  const trustItems = [
    t('hero.badgeFree'),
    t('hero.badgeCredits'),
    t('hero.badgeCancel'),
  ];

  return (
    <Container className="mt-8 max-w-6xl px-4 flex flex-col gap-14">
      <section className="overflow-hidden rounded-[28px] border bg-[#fffaf0] shadow-sm">
        <div className="relative px-5 py-10 text-center sm:px-8 md:py-14">
          <div className="-top-16 left-8 absolute size-40 rounded-full bg-teal-200/40 blur-3xl" />
          <div className="-bottom-16 right-8 absolute size-48 rounded-full bg-amber-200/60 blur-3xl" />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5">
            <span className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 font-bold text-amber-800 text-xs uppercase tracking-[0.22em] shadow-sm">
              <SparklesIcon className="size-3.5 text-teal-600" />
              {t('hero.eyebrow')}
            </span>
            <h1 className="text-balance font-black text-4xl tracking-tight sm:text-5xl md:text-6xl">
              {t('title')}
            </h1>
            <p className="max-w-2xl text-balance text-muted-foreground text-lg">
              {t('description')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {trustItems.map((item) => (
                <span
                  className="inline-flex items-center gap-1.5 rounded-full border bg-white px-3 py-1.5 font-semibold text-sm shadow-sm"
                  key={item}
                >
                  <CheckCircle2Icon className="size-4 text-teal-600" />
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button asChild size="lg" className="rounded-full">
                <LocaleLink href={Routes.ThumbnailMaker}>
                  {t('hero.primaryCta')}
                </LocaleLink>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full bg-white"
              >
                <LocaleLink href={Routes.ThumbnailMaker}>
                  {t('hero.secondaryCta')}
                </LocaleLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-bold text-primary text-sm uppercase tracking-[0.2em]">
            {t('plansEyebrow')}
          </p>
          <h2 className="mt-3 text-balance font-black text-3xl">
            {t('plansTitle')}
          </h2>
          <p className="mt-3 text-muted-foreground">{t('plansDescription')}</p>
        </div>
        <PricingTable />
      </section>

      <FaqSection />
    </Container>
  );
}
