import { LocaleLink } from '@/i18n/navigation';
import { Routes } from '@/routes';
import { ArrowRightIcon, ListChecksIcon } from 'lucide-react';
import type { Locale } from 'next-intl';

const copyByLocale = {
  en: {
    eyebrow: 'Player tool',
    title: 'Open the Resource Checklist before your next dive',
    body: 'Tick off early materials, base pieces, vehicle prep, and crafting blockers. The first version saves only in your browser, so it stays fast and does not require an account.',
    cta: 'Open checklist',
  },
  zh: {
    eyebrow: '玩家工具',
    title: '下潜前先打开资源清单',
    body: '勾选前期材料、基地部件、载具准备和制作卡点。第一版只保存在浏览器本地，不需要登录，也不会上传数据。',
    cta: '打开清单',
  },
};

function getCopy(locale?: Locale) {
  return locale === 'zh' ? copyByLocale.zh : copyByLocale.en;
}

export function AbyssResourceChecklistCallout({ locale }: { locale?: Locale }) {
  const copy = getCopy(locale);

  return (
    <section className="overflow-hidden border border-cyan-200/14 bg-[#071f23]">
      <div className="grid gap-0 md:grid-cols-[280px_1fr]">
        <div
          aria-hidden="true"
          className="min-h-52 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg,rgba(3,19,20,.1),rgba(3,19,20,.5)),url('/abyss/chibi-resource-checklist.webp')",
          }}
        />
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#f08b4f]">
            <ListChecksIcon className="size-4" />
            {copy.eyebrow}
          </div>
          <h2 className="mt-3 break-words text-2xl font-semibold text-[#effffb]">
            {copy.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#abc8c3] md:text-base">
            {copy.body}
          </p>
          <LocaleLink
            className="mt-5 inline-flex items-center gap-2 border border-[#f08b4f]/45 bg-[#f08b4f]/15 px-4 py-2 text-sm font-semibold text-[#ffc4a1] transition hover:bg-[#f08b4f]/25"
            href={Routes.Subnautica2ResourceChecklist}
          >
            {copy.cta}
            <ArrowRightIcon className="size-4" />
          </LocaleLink>
        </div>
      </div>
    </section>
  );
}
