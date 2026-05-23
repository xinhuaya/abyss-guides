import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type HubLink = {
  href: Routes;
  title: string;
  description: string;
};

type HubCopy = {
  metadata: {
    title: string;
    description: string;
  };
  updated: string;
  title: string;
  description: string;
  sections: HubLink[];
  priorityEyebrow: string;
  priorityTitle: string;
  priorityResources: HubLink[];
  editorialTitle: string;
  editorialBody: string;
  disclaimer: string;
};

const copyByLocale: Record<'en' | 'zh', HubCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Guide Hub - Beginner Tips, Resources, Crafting, Map, and Co-op',
      description:
        'Start here for Subnautica 2 beginner tips, resource locations, crafting recipes, map and biome notes, co-op help, settings fixes, and Early Access updates.',
    },
    updated: 'Last updated May 23, 2026',
    title: 'Subnautica 2 Guide Hub',
    description:
      'Subnautica 2 is in Early Access, so guides need to stay flexible. This hub organizes beginner routes, resources, crafting, map notes, co-op help, settings, and updates in one place.',
    sections: [
      {
        href: Routes.Subnautica2Beginner,
        title: 'Beginner Guide',
        description:
          'First-session priorities, safe routes, scanning habits, and base planning.',
      },
      {
        href: Routes.Subnautica2Resources,
        title: 'Resources',
        description:
          'Material tables, farming notes, and individual resource pages as data is verified.',
      },
      {
        href: Routes.Subnautica2Crafting,
        title: 'Crafting',
        description:
          'Recipe tracking, blueprint unlock notes, and calculator-ready recipe structure.',
      },
      {
        href: Routes.Subnautica2Map,
        title: 'Map & Biomes',
        description:
          'Route planning, safety notes, base-friendly areas, and danger markers.',
      },
      {
        href: Routes.Subnautica2Coop,
        title: 'Co-op',
        description:
          'Team roles, shared storage habits, setup checks, and multiplayer troubleshooting.',
      },
      {
        href: Routes.Subnautica2Updates,
        title: 'Roadmap',
        description:
          'Early Access changes, patch summaries, and guide pages that need updating.',
      },
    ],
    priorityEyebrow: 'High-demand resource pages',
    priorityTitle: 'Start with the materials players get stuck on',
    priorityResources: [
      {
        href: Routes.Subnautica2Copper,
        title: 'Where to Find Copper',
        description:
          'Early battery and electronics material with Lifepod cave route notes.',
      },
      {
        href: Routes.Subnautica2Silver,
        title: 'Where to Find Silver',
        description:
          'Early-game air tank and electronics bottleneck with patch-sensitive route notes.',
      },
      {
        href: Routes.Subnautica2AirTank,
        title: 'Air Tank and O2',
        description:
          'Oxygen upgrades, Air Bladders, bubble sources, and safe early dive planning.',
      },
      {
        href: Routes.Subnautica2Scanner,
        title: 'Scanner and Bioscanner',
        description:
          'Blueprint scanning, Bioscanner upgrade route, Biomod unlocks, and route priorities.',
      },
      {
        href: Routes.Subnautica2StrongAcid,
        title: 'Strong Acid',
        description:
          'Necrolei Cysts, Processor setup, Power Cell crafting, and Tadpole prep.',
      },
      {
        href: Routes.Subnautica2Tadpole,
        title: 'Tadpole Vehicle',
        description:
          'Fragment scanning, vehicle crafting, Power Cell prep, and upgrade planning.',
      },
      {
        href: Routes.Subnautica2BaseBuilding,
        title: 'Base Building',
        description:
          'First base priorities, power, storage, route placement, and expansion rules.',
      },
      {
        href: Routes.Subnautica2BestBaseLocations,
        title: 'Best Base Locations',
        description:
          'Early, mid-route, and deep-route base placement notes for safer progression.',
      },
      {
        href: Routes.Subnautica2Troilite,
        title: 'Where to Find Troilite',
        description:
          'Late-route rare material guide for Mangalloy, Metal Farms, and safer planning.',
      },
      {
        href: Routes.Subnautica2Atacamite,
        title: 'Where to Find Atacamite',
        description:
          'Alien Ruins route notes for the other rare material in Mangalloy Ingots.',
      },
      {
        href: Routes.Subnautica2MetalFarm,
        title: 'Metal Farm Guide',
        description:
          'Blueprint scans, power planning, and rare-metal duplication workflow.',
      },
    ],
    editorialTitle: 'Editorial rule',
    editorialBody:
      'Exact resource locations, recipes, and platform details should be published only after gameplay verification or official/current sources. Early Access pages should show a visible last-updated date.',
    disclaimer:
      'Abyss Guides is an independent fan-made guide site and is not affiliated with Unknown Worlds Entertainment, Krafton, or the official Subnautica 2 team. Game names, trademarks, and assets belong to their respective owners.',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 攻略中心 - 新手、资源、制作、地图和联机',
      description:
        'Subnautica 2 中文攻略入口，整理新手路线、资源位置、制作链、地图生态区、联机建议和抢先体验更新。',
    },
    updated: '最后更新：2026 年 5 月 23 日',
    title: 'Subnautica 2 攻略中心',
    description:
      'Subnautica 2 还在抢先体验阶段，数据会变，攻略也要跟着改。这个入口先把新手路线、资源、制作、地图、联机和更新放在一起，方便玩家快速跳到要查的内容。',
    sections: [
      {
        href: Routes.Subnautica2Beginner,
        title: '新手指南',
        description: '第一局该先做什么，怎么安全往外探索，什么时候开始建家。',
      },
      {
        href: Routes.Subnautica2Resources,
        title: '资源',
        description: '材料表、采集路线和后续会补齐的单项资源位置页。',
      },
      {
        href: Routes.Subnautica2Crafting,
        title: '制作',
        description: '配方、蓝图解锁、材料链，以及后续制作计算器的数据结构。',
      },
      {
        href: Routes.Subnautica2Map,
        title: '地图与生态区',
        description: '按路线记录安全区、资源区、建家点和危险区域。',
      },
      {
        href: Routes.Subnautica2Coop,
        title: '联机',
        description: '队伍分工、共享仓库、建家规则和多人游玩常见问题。',
      },
      {
        href: Routes.Subnautica2Updates,
        title: '路线图和更新',
        description: '抢先体验补丁、官方路线图，以及需要回头更新的页面。',
      },
    ],
    priorityEyebrow: '高需求资源页',
    priorityTitle: '先做玩家最容易卡住的材料',
    priorityResources: [
      {
        href: Routes.Subnautica2Copper,
        title: '铜在哪里找',
        description: '开局电池、电子元件和扫描器相关路线。',
      },
      {
        href: Routes.Subnautica2Silver,
        title: '银在哪里找',
        description: '前期常见卡点，和氧气、电子制作都有关系。',
      },
      {
        href: Routes.Subnautica2AirTank,
        title: '气瓶和氧气',
        description: '氧气升级、Air Bladder、气泡源和安全潜水节奏。',
      },
      {
        href: Routes.Subnautica2Scanner,
        title: '扫描器和生物扫描器',
        description: '蓝图扫描、升级路线、Biomod 解锁和探索优先级。',
      },
      {
        href: Routes.Subnautica2StrongAcid,
        title: 'Strong Acid',
        description: 'Necrolei Cyst、Processor、动力电池和蝌蚪号准备。',
      },
      {
        href: Routes.Subnautica2Tadpole,
        title: '蝌蚪号载具',
        description: '碎片扫描、载具制作、动力电池和升级准备。',
      },
      {
        href: Routes.Subnautica2BaseBuilding,
        title: '基地建造',
        description: '第一座基地、供电、仓库、路线位置和扩建节奏。',
      },
      {
        href: Routes.Subnautica2BestBaseLocations,
        title: '最佳建家位置',
        description: '前期、中期和深层路线的建家点选择。',
      },
      {
        href: Routes.Subnautica2Troilite,
        title: 'Troilite 在哪里找',
        description: 'Mangalloy、Metal Farm 和后期路线相关稀有材料。',
      },
      {
        href: Routes.Subnautica2Atacamite,
        title: 'Atacamite 在哪里找',
        description: '外星遗迹路线，以及 Mangalloy Ingot 相关材料。',
      },
      {
        href: Routes.Subnautica2MetalFarm,
        title: 'Metal Farm 指南',
        description: '扫描、供电、建造和稀有金属复制流程。',
      },
    ],
    editorialTitle: '收录规则',
    editorialBody:
      '中文页只放已经人工整理过的内容。没翻好的英文攻略不会进入中文 sitemap 和 hreflang。每篇正式攻略至少要有快速答案、表格或卡片、FAQ 或内链，以及清楚的最后更新时间。',
    disclaimer:
      'Abyss Guides 是独立玩家攻略站，和 Unknown Worlds Entertainment、Krafton 或 Subnautica 2 官方团队没有隶属关系。游戏名、商标和素材归各自权利方所有。',
  },
};

function getHubCopy(locale: Locale): HubCopy {
  return locale === 'zh' ? copyByLocale.zh : copyByLocale.en;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = getHubCopy(locale);

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2,
  });
}

export default async function Subnautica2HubPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getHubCopy(locale);

  return (
    <main className="bg-[#031314] text-[#dff8f0]">
      <Container className="px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#bf6f45]">
            {copy.updated}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal md:text-6xl">
            {copy.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#a9c9c3]">
            {copy.description}
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {copy.sections.map((section) => (
            <LocaleLink
              key={section.title}
              id={section.href.split('/').pop()}
              href={section.href}
              className="border border-cyan-200/12 bg-[#071f23] p-5 transition hover:-translate-y-1 hover:border-cyan-200/40"
            >
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                {section.description}
              </p>
            </LocaleLink>
          ))}
        </div>

        <section className="mt-12 border border-cyan-200/12 bg-[#082226] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#bf6f45]">
            {copy.priorityEyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[#effffb]">
            {copy.priorityTitle}
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {copy.priorityResources.map((item) => (
              <LocaleLink
                key={item.title}
                href={item.href}
                className="border border-cyan-200/12 bg-[#071f23] p-5 transition hover:-translate-y-1 hover:border-cyan-200/40"
              >
                <h3 className="text-xl font-semibold text-[#78ead7]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                  {item.description}
                </p>
              </LocaleLink>
            ))}
          </div>
        </section>

        <section
          id="updates"
          className="mt-12 border border-cyan-200/12 bg-[#082226] p-6"
        >
          <h2 className="text-2xl font-semibold">{copy.editorialTitle}</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#abc8c3]">
            {copy.editorialBody}
          </p>
        </section>

        <p className="mt-12 text-sm leading-6 text-[#8ba39e]">
          {copy.disclaimer}
        </p>
      </Container>
    </main>
  );
}
