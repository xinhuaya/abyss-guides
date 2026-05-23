import { LinkedGuidePage } from '@/components/abyss/linked-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { ZapIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Where to Find Copper in Subnautica 2 - Early Battery Route',
    description:
      'Find Copper in Subnautica 2 with Lifepod cave route notes, early battery uses, scanner priorities, and farming caveats.',
    locale,
    pathname: Routes.Subnautica2Copper,
  });
}

export default function CopperGuidePage() {
  return (
    <LinkedGuidePage
      caution={{
        title: 'Do not spend the first Copper blindly',
        body: 'Copper feels common until every early recipe asks for electronics. Make batteries and scanning tools first, then stockpile enough for wiring and base setup.',
      }}
      description="Copper is the early electronics material that turns a stranded diver into a real explorer. Use this page to build a repeatable first route instead of hoping caves are kind."
      eyebrow="Early electronics route"
      icon={ZapIcon}
      pathname={Routes.Subnautica2Copper}
      quickAnswer="For early Copper, search the cave systems directly below and near the Lifepod. Current guides point to easy Copper close to the starting area, especially cave pockets within short swimming distance, so treat the Lifepod as your route anchor."
      related={[
        { href: Routes.Subnautica2Silver, label: 'Silver Location' },
        { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
        { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      ]}
      sections={[
        {
          title: 'Start under the Lifepod',
          body: 'Copper is reported in cave spaces close to the starting Lifepod. Dive below the pod, check cave walls and coral pockets, then return before turning the first trip into a risky oxygen test.',
        },
        {
          title: 'Sweep nearby cave pockets',
          body: 'Games.gg reports another early Copper spot roughly east of the Lifepod. Use visible landmarks and short loops so the route is easy to repeat in co-op.',
        },
        {
          title: 'Use Copper for progression first',
          body: 'Copper feeds early batteries and electronics, which means Scanner access and tool progress. Do not turn every piece into optional gear before the Scanner is handled.',
        },
        {
          title: 'Upgrade the route later',
          body: 'Once you have better oxygen, tools, and a base, return to the same cave network with more inventory space and fewer panic trips.',
        },
      ]}
      sources={[
        {
          href: 'https://games.gg/subnautica-2/guides/subnautica-2-where-to-find-copper/',
          label: 'Games.gg Copper guide',
        },
        {
          href: 'https://mobalytics.gg/news/guides/subnautica-2-how-to-get-copper',
          label: 'Mobalytics Copper guide',
        },
      ]}
      table={{
        headers: ['Use', 'Why it matters'],
        rows: [
          [
            'Basic Battery',
            'The battery chain unlocks the Scanner and other early tools.',
          ],
          [
            'Scanner progress',
            'Scanning is how you turn exploration into blueprints.',
          ],
          [
            'Wiring and electronics',
            'Copper remains relevant after the first tool rush.',
          ],
          [
            'Base setup',
            'Early power and utility chains can pull from the same Copper stock.',
          ],
        ],
        title: 'What Copper is used for',
      }}
      faqs={[
        {
          question: 'Where do you find Copper early in Subnautica 2?',
          answer:
            'Search cave systems below and near the Lifepod first, then expand to nearby cave pockets once you have oxygen margin.',
        },
        {
          question: 'What should you use Copper for first?',
          answer:
            'Prioritize batteries, scanner access, and early electronics before spending Copper on optional crafting.',
        },
      ]}
      title="Where to Find Copper in Subnautica 2"
    />
  );
}
