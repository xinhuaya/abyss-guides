import Container from '@/components/layout/container';
import { buttonVariants } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { Routes } from '@/routes';
import {
  BookOpenIcon,
  BoxesIcon,
  CompassIcon,
  MapIcon,
  RadioIcon,
  WrenchIcon,
} from 'lucide-react';

const guideCards = [
  {
    title: 'Beginner Route',
    description:
      'First-session priorities, safe loops, scanning habits, and spoiler-light survival notes.',
    href: Routes.Subnautica2Beginner,
    icon: CompassIcon,
  },
  {
    title: 'Resources',
    description:
      'Material tables, farming notes, and individual resource pages as Early Access data is verified.',
    href: Routes.Subnautica2Resources,
    icon: BoxesIcon,
  },
  {
    title: 'Crafting',
    description:
      'Recipe tracking, blueprint unlock notes, and the foundation for a crafting calculator.',
    href: Routes.Subnautica2Crafting,
    icon: WrenchIcon,
  },
  {
    title: 'Map & Biomes',
    description:
      'Route-first map planning for safe areas, resource zones, base spots, and danger markers.',
    href: Routes.Subnautica2Map,
    icon: MapIcon,
  },
];

export function AbyssHome() {
  return (
    <main className="min-h-screen bg-[#031314] text-[#dff8f0] dark:bg-[#031314] dark:text-[#dff8f0]">
      <section className="relative min-h-[720px] overflow-hidden border-b border-cyan-200/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center md:bg-right"
          style={{
            backgroundImage: "url('/abyss/chibi-deep-sea-hero.webp')",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,12,18,.96)_0%,rgba(2,20,27,.82)_37%,rgba(2,20,27,.34)_68%,rgba(1,12,18,.20)_100%),linear-gradient(180deg,rgba(3,19,20,.10),rgba(1,9,12,.96))]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(106, 240, 224, .16) 1px, transparent 1px), linear-gradient(90deg, rgba(106, 240, 224, .16) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        <Container className="relative px-4 py-16 md:py-24">
          <div className="grid min-h-[560px] items-center gap-12 lg:grid-cols-[1fr_390px]">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
                <RadioIcon className="size-4" />
                Subnautica 2 Early Access guide hub
              </div>
              <h1 className="max-w-4xl text-balance font-semibold text-5xl leading-[1.02] tracking-normal text-[#e8fff9] md:text-7xl">
                Field notes from the alien deep.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#a9c9c3]">
                Abyss Guides publishes practical routes, resource tables,
                crafting notes, map planning, and update trackers for deep-sea
                survival games. We are starting with Subnautica 2 and building
                the pages players actually return to.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LocaleLink
                  href={Routes.Subnautica2}
                  className={cn(buttonVariants({ size: 'lg' }), 'rounded-md')}
                >
                  Open the guide hub
                </LocaleLink>
                <LocaleLink
                  href={Routes.Subnautica2Resources}
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'rounded-md border-cyan-200/25 bg-cyan-100/5 text-cyan-50 hover:bg-cyan-100/10'
                  )}
                >
                  Browse resources
                </LocaleLink>
              </div>
            </div>

            <div className="relative min-h-[420px] border border-cyan-200/20 bg-[#041d22]/90 p-5 text-[#d9fff4] shadow-2xl shadow-cyan-950/40 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-[#d9fff4]/15 pb-4 text-xs uppercase tracking-[0.18em] text-[#9fe6d4]">
                <span>Wiki field card</span>
                <span>cute-mode</span>
              </div>
              <div className="relative mt-6 aspect-square overflow-hidden border border-[#d9fff4]/10 bg-[#020d12]">
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(95,232,214,.11),transparent_56%)]" />
                <div className="absolute inset-8 rounded-full border border-[#5ee1c6]/20" />
                <div className="absolute inset-16 rounded-full border border-[#5ee1c6]/20" />
                <div className="absolute inset-24 rounded-full border border-[#5ee1c6]/20" />
                <div className="absolute left-1/2 top-1/2 h-px w-[46%] origin-left bg-[#f0b35a]" />
                <div className="absolute left-[22%] top-[31%] size-2 bg-[#f0b35a]" />
                <div className="absolute right-[24%] top-[45%] size-2 bg-[#9fe6d4]" />
                <div className="absolute bottom-[24%] left-[41%] size-2 bg-[#ff8a6b]" />
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 text-[11px] text-[#b5d8d0]">
                  <span>resources</span>
                  <span>biomes</span>
                  <span>patches</span>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
                <div className="border border-[#d9fff4]/10 p-3">
                  <div className="text-2xl font-semibold">50</div>
                  <div className="text-[#9fbdb6]">page targets</div>
                </div>
                <div className="border border-[#d9fff4]/10 p-3">
                  <div className="text-2xl font-semibold">3</div>
                  <div className="text-[#9fbdb6]">tool ideas</div>
                </div>
                <div className="border border-[#d9fff4]/10 p-3">
                  <div className="text-2xl font-semibold">1</div>
                  <div className="text-[#9fbdb6]">game hub</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-cyan-200/10 bg-[#071f23]">
        <Container className="px-4 py-14">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#bf6f45]">
                First launch
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Subnautica 2 pages to publish first
              </h2>
            </div>
            <p className="max-w-xl text-[#abc8c3]">
              The site starts as a guide hub, then grows into calculators and
              update trackers once the Early Access data is verified.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {guideCards.map((item) => {
              const Icon = item.icon;
              return (
                <LocaleLink
                  key={item.title}
                  href={item.href}
                  className="group border border-cyan-200/12 bg-[#0a2a2f] p-5 transition hover:-translate-y-1 hover:border-cyan-200/40"
                >
                  <Icon className="mb-6 size-6 text-[#78ead7]" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#a8c6c0]">
                    {item.description}
                  </p>
                </LocaleLink>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#031314]">
        <Container className="px-4 py-14">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <BookOpenIcon className="mb-5 size-8 text-[#f08b4f]" />
              <h2 className="text-3xl font-semibold">
                Built as an independent fan guide.
              </h2>
            </div>
            <p className="text-base leading-8 text-[#b5c9c4]">
              Abyss Guides is not an official Subnautica 2 site. The goal is to
              publish original explanations, verified tables, and practical
              tools. Game names, trademarks, and assets belong to their
              respective owners.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
