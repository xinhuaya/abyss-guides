import Container from '@/components/layout/container';
import type { LucideIcon } from 'lucide-react';

type GuidePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  quickAnswer: string;
  sections: Array<{
    title: string;
    body: string;
    items?: string[];
  }>;
};

export function AbyssGuidePage({
  eyebrow,
  title,
  description,
  icon: Icon,
  quickAnswer,
  sections,
}: GuidePageProps) {
  return (
    <main className="min-h-screen bg-[#031314] text-[#dff8f0]">
      <section className="relative overflow-hidden border-b border-cyan-200/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(106, 240, 224, .15) 1px, transparent 1px), linear-gradient(90deg, rgba(106, 240, 224, .15) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(64,224,208,.20),transparent_34%),linear-gradient(180deg,rgba(3,19,20,.22),rgba(1,9,12,.96))]"
        />
        <Container className="relative px-4 py-16 md:py-20">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              <Icon className="size-4" />
              {eyebrow}
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#e8fff9] md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a9c9c3]">
              {description}
            </p>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-12">
        <section className="border border-cyan-200/15 bg-[#082226] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f08b4f]">
            Quick answer
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-[#d7eee8]">
            {quickAnswer}
          </p>
        </section>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {sections.map((section) => (
            <section
              key={section.title}
              className="border border-cyan-200/12 bg-[#071f23] p-6"
            >
              <h2 className="text-2xl font-semibold text-[#effffb]">
                {section.title}
              </h2>
              <p className="mt-4 leading-7 text-[#abc8c3]">{section.body}</p>
              {section.items ? (
                <ul className="mt-5 space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-[#f08b4f] pl-3 text-sm leading-6 text-[#d1e8e2]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <p className="mt-10 text-sm leading-6 text-[#8ba39e]">
          Abyss Guides is an independent fan-made guide site and is not
          affiliated with Unknown Worlds Entertainment, Krafton, or the official
          Subnautica 2 team. Game names, trademarks, and assets belong to their
          respective owners.
        </p>
      </Container>
    </main>
  );
}
