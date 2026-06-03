import { LocaleLink } from '@/i18n/navigation';
import { Routes } from '@/routes';
import { ArrowRightIcon, BellRingIcon, MailIcon } from 'lucide-react';
import type { Locale } from 'next-intl';

type UpdateAlertCopy = {
  eyebrow: string;
  title: string;
  body: string;
  inputLabel: string;
  placeholder: string;
  status: string;
  cta: string;
};

const copyByLocale: Record<'en' | 'zh', UpdateAlertCopy> = {
  en: {
    eyebrow: 'Subnautica 2 update alerts',
    title: 'Patch notes change routes. Keep the checklist fresh.',
    body: 'Email alerts will open after the sending domain is verified. For now, this box marks the future subscription entry without collecting addresses or sending test mail.',
    inputLabel: 'Email address',
    placeholder: 'you@example.com',
    status: 'Waiting for RESEND_API_KEY and sender DNS',
    cta: 'Read the roadmap',
  },
  zh: {
    eyebrow: 'Subnautica 2 更新提醒',
    title: '补丁会改变路线，清单也要跟着更新。',
    body: '邮件提醒会在发信域名验证完成后开启。现在这里只做订阅入口占位，不收集邮箱，也不会发送测试邮件。',
    inputLabel: '邮箱地址',
    placeholder: 'you@example.com',
    status: '等待 RESEND_API_KEY 和发信域名 DNS 验证',
    cta: '查看 Roadmap',
  },
};

function getCopy(locale?: Locale) {
  return locale === 'zh' ? copyByLocale.zh : copyByLocale.en;
}

export function AbyssUpdateAlertCard({
  locale,
  compact = false,
}: {
  locale?: Locale;
  compact?: boolean;
}) {
  const copy = getCopy(locale);

  return (
    <section className="relative overflow-hidden border border-cyan-200/14 bg-[#061f24]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-right opacity-20"
        style={{ backgroundImage: "url('/abyss/chibi-update-console.webp')" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,19,20,.96),rgba(3,19,20,.76)),radial-gradient(circle_at_88%_18%,rgba(120,234,215,.16),transparent_28%)]"
      />
      <div
        className={`relative grid gap-5 ${compact ? 'p-5 md:grid-cols-[1fr_300px]' : 'p-6 md:grid-cols-[1fr_340px]'} md:items-center`}
      >
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#f08b4f]">
            <BellRingIcon className="size-4" />
            {copy.eyebrow}
          </div>
          <h2 className="mt-3 break-words text-2xl font-semibold text-[#effffb] md:text-3xl">
            {copy.title}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#abc8c3] md:text-base">
            {copy.body}
          </p>
          <LocaleLink
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#78ead7] hover:underline"
            href={Routes.Subnautica2Updates}
          >
            {copy.cta}
            <ArrowRightIcon className="size-4" />
          </LocaleLink>
        </div>
        <div className="min-w-0 border border-cyan-200/12 bg-[#031314]/70 p-4">
          <label
            className="flex items-center gap-2 text-sm font-semibold text-[#effffb]"
            htmlFor="subnautica-update-alert-email"
          >
            <MailIcon className="size-4 text-[#78ead7]" />
            {copy.inputLabel}
          </label>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row md:flex-col">
            <input
              className="min-h-11 min-w-0 flex-1 border border-cyan-200/15 bg-[#020b0d] px-3 text-sm text-[#dff8f0] outline-none placeholder:text-[#6f8f88]"
              disabled
              id="subnautica-update-alert-email"
              placeholder={copy.placeholder}
              type="email"
            />
            <button
              className="min-h-11 shrink-0 border border-[#f08b4f]/40 bg-[#f08b4f]/15 px-4 text-sm font-semibold text-[#ffc4a1] opacity-70"
              disabled
              type="button"
            >
              Soon
            </button>
          </div>
          <p className="mt-3 text-xs leading-5 text-[#8fb8b1]">{copy.status}</p>
        </div>
      </div>
    </section>
  );
}
