import Container from '@/components/layout/container';
import { buttonVariants } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { Routes } from '@/routes';
import {
  BookOpenIcon,
  BoxesIcon,
  CheckCircle2Icon,
  CompassIcon,
  MapIcon,
  RadioIcon,
  ScanLineIcon,
  ShieldIcon,
  WrenchIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Locale } from 'next-intl';

type GuideCard = {
  title: string;
  description: string;
  href: Routes;
  icon: LucideIcon;
};

type HomeCopy = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  guideCards: GuideCard[];
  missionStats: Array<[string, string]>;
  activeRoutes: string[];
  fieldCardLabel: string;
  fieldCardMode: string;
  scanQueueTitle: string;
  scanItems: string[];
  tags: string[];
  firstLaunchEyebrow: string;
  firstLaunchTitle: string;
  firstLaunchDescription: string;
  independentTitle: string;
  independentBody: string;
};

const copyByLocale: Record<'en' | 'zh', HomeCopy> = {
  en: {
    eyebrow: 'Subnautica 2 Early Access guide hub',
    title: 'Field notes from the alien deep.',
    description:
      'Abyss Guides publishes practical routes, resource tables, crafting notes, map planning, and update trackers for deep-sea survival games. We are starting with Subnautica 2 and building the pages players actually return to.',
    primaryCta: 'Open the guide hub',
    secondaryCta: 'Browse resources',
    guideCards: [
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
    ],
    missionStats: [
      ['88', 'guide routes'],
      ['8', 'search languages'],
      ['Hotfix 2', 'tracked'],
    ],
    activeRoutes: [
      'Copper, Silver, and O2 starter loop',
      'Hotfix 2 Silver and Troilite rechecks',
      'Tadpole, base power, and Alien Ruins chain',
    ],
    fieldCardLabel: 'Wiki field card',
    fieldCardMode: 'cute-mode',
    scanQueueTitle: 'Scan queue',
    scanItems: [
      'Route-first guides for beginner dives, crafting chains, and base planning.',
      'Original cute deep-sea art, no official screenshots or creature assets.',
    ],
    tags: ['resources', 'vehicles', 'bases', 'patches'],
    firstLaunchEyebrow: 'First launch',
    firstLaunchTitle: 'Subnautica 2 pages to publish first',
    firstLaunchDescription:
      'The site starts as a guide hub, then grows into calculators and update trackers once the Early Access data is verified.',
    independentTitle: 'Built as an independent fan guide.',
    independentBody:
      'Abyss Guides is not an official Subnautica 2 site. The goal is to publish original explanations, verified tables, and practical tools. Game names, trademarks, and assets belong to their respective owners.',
  },
  zh: {
    eyebrow: 'Subnautica 2 抢先体验攻略中心',
    title: '写给深海玩家的实用笔记。',
    description:
      'Abyss Guides 会整理可重复的探索路线、资源表、制作链、地图规划和版本更新。现在先从 Subnautica 2 做起，优先写玩家会反复回来查的内容。',
    primaryCta: '打开攻略中心',
    secondaryCta: '查看资源页',
    guideCards: [
      {
        title: '新手路线',
        description:
          '开局优先级、安全循环、扫描习惯，以及尽量少剧透的生存建议。',
        href: Routes.Subnautica2Beginner,
        icon: CompassIcon,
      },
      {
        title: '资源',
        description:
          '材料表、采集思路，以及等抢先体验数据确认后继续补的单项资源页。',
        href: Routes.Subnautica2Resources,
        icon: BoxesIcon,
      },
      {
        title: '制作',
        description:
          '配方、蓝图解锁、材料链路，以及后面做制作计算器需要的数据底子。',
        href: Routes.Subnautica2Crafting,
        icon: WrenchIcon,
      },
      {
        title: '地图和生态区',
        description:
          '按路线来记录安全区、资源区、建家点和危险标记，少走冤枉路。',
        href: Routes.Subnautica2Map,
        icon: MapIcon,
      },
    ],
    missionStats: [
      ['88', '攻略路线'],
      ['8', '搜索语言'],
      ['Hotfix 2', '已追踪'],
    ],
    activeRoutes: [
      '铜、银和氧气的开局循环',
      'Hotfix 2 后银和 Troilite 复查',
      'Tadpole、基地供电和外星遗迹链',
    ],
    fieldCardLabel: 'Wiki 现场卡片',
    fieldCardMode: '可爱模式',
    scanQueueTitle: '扫描队列',
    scanItems: [
      '先把路线讲清楚，再补新手潜水、制作链和建家规划。',
      '使用原创 Q 版深海画面，不直接搬官方截图、Logo 或生物素材。',
    ],
    tags: ['资源', '载具', '基地', '补丁'],
    firstLaunchEyebrow: '第一批内容',
    firstLaunchTitle: '先把 Subnautica 2 高频页面做扎实',
    firstLaunchDescription:
      '网站会先从攻略中心起步，等抢先体验版本的数据确认后，再逐步加入计算器和更新追踪。',
    independentTitle: '这是独立玩家攻略站。',
    independentBody:
      'Abyss Guides 不是 Subnautica 2 官方网站。这里会尽量写原创说明、核实过的表格和实用工具。游戏名、商标和素材归各自权利方所有。',
  },
};

const homeCopyOverrides: Record<string, Partial<HomeCopy>> = {
  ru: {
    eyebrow: 'Хаб гайдов Subnautica 2 Early Access',
    title: 'Практичные заметки из чужого океана.',
    description:
      'Abyss Guides собирает маршруты, таблицы ресурсов, заметки по крафту, планирование карты и трекер обновлений для Subnautica 2.',
    primaryCta: 'Открыть хаб гайдов',
    secondaryCta: 'Смотреть ресурсы',
    guideCards: [
      {
        title: 'Маршрут новичка',
        description:
          'Первые цели, безопасные циклы, сканирование и советы без лишних спойлеров.',
        href: Routes.Subnautica2Beginner,
        icon: CompassIcon,
      },
      {
        title: 'Ресурсы',
        description:
          'Таблицы материалов, заметки по фарму и страницы ресурсов после проверки данных.',
        href: Routes.Subnautica2Resources,
        icon: BoxesIcon,
      },
      {
        title: 'Крафт',
        description:
          'Рецепты, чертежи и основа для будущего калькулятора крафта.',
        href: Routes.Subnautica2Crafting,
        icon: WrenchIcon,
      },
      {
        title: 'Карта и биомы',
        description:
          'Планирование маршрутов, безопасные зоны, ресурсы, базы и опасности.',
        href: Routes.Subnautica2Map,
        icon: MapIcon,
      },
    ],
    firstLaunchTitle: 'Первые страницы по Subnautica 2',
    independentTitle: 'Независимый фанатский гайд.',
  },
  de: {
    eyebrow: 'Subnautica 2 Early-Access-Guide-Hub',
    title: 'Feldnotizen aus der fremden Tiefe.',
    description:
      'Abyss Guides sammelt praktische Routen, Ressourcentabellen, Crafting-Notizen, Kartenplanung und Update-Tracker fuer Subnautica 2.',
    primaryCta: 'Guide-Hub oeffnen',
    secondaryCta: 'Ressourcen ansehen',
    guideCards: [
      {
        title: 'Anfaengerroute',
        description:
          'Erste Ziele, sichere Schleifen, Scan-Gewohnheiten und spoilerarme Tipps.',
        href: Routes.Subnautica2Beginner,
        icon: CompassIcon,
      },
      {
        title: 'Ressourcen',
        description:
          'Materialtabellen, Farming-Notizen und einzelne Ressourcenseiten.',
        href: Routes.Subnautica2Resources,
        icon: BoxesIcon,
      },
      {
        title: 'Crafting',
        description:
          'Rezepte, Blueprint-Hinweise und Daten fuer einen Crafting-Rechner.',
        href: Routes.Subnautica2Crafting,
        icon: WrenchIcon,
      },
      {
        title: 'Karte und Biome',
        description:
          'Routenplanung fuer sichere Bereiche, Ressourcen, Basen und Gefahren.',
        href: Routes.Subnautica2Map,
        icon: MapIcon,
      },
    ],
    firstLaunchTitle: 'Die ersten Subnautica 2 Seiten',
    independentTitle: 'Ein unabhaengiger Fan-Guide.',
  },
  fr: {
    eyebrow: 'Hub de guides Subnautica 2 Early Access',
    title: 'Notes de terrain dans les abysses alien.',
    description:
      'Abyss Guides publie des routes utiles, des tableaux de ressources, du craft, de la carte et un suivi des mises a jour pour Subnautica 2.',
    primaryCta: 'Ouvrir le hub',
    secondaryCta: 'Voir les ressources',
    guideCards: [
      {
        title: 'Route debutant',
        description:
          'Priorites de depart, boucles sures, scan et conseils avec peu de spoilers.',
        href: Routes.Subnautica2Beginner,
        icon: CompassIcon,
      },
      {
        title: 'Ressources',
        description:
          'Tableaux de materiaux, notes de farm et pages detaillees par ressource.',
        href: Routes.Subnautica2Resources,
        icon: BoxesIcon,
      },
      {
        title: 'Craft',
        description:
          'Recettes, blueprints et base de donnees pour un futur calculateur.',
        href: Routes.Subnautica2Crafting,
        icon: WrenchIcon,
      },
      {
        title: 'Carte et biomes',
        description:
          'Routes, zones sures, ressources, emplacements de base et dangers.',
        href: Routes.Subnautica2Map,
        icon: MapIcon,
      },
    ],
    firstLaunchTitle: 'Les premieres pages Subnautica 2',
    independentTitle: 'Un guide de fan independant.',
  },
  'pt-BR': {
    eyebrow: 'Central de guias de Subnautica 2 Early Access',
    title: 'Notas de campo do oceano alienigena.',
    description:
      'Abyss Guides organiza rotas praticas, tabelas de recursos, fabricacao, mapas e atualizacoes para Subnautica 2.',
    primaryCta: 'Abrir central de guias',
    secondaryCta: 'Ver recursos',
    guideCards: [
      {
        title: 'Rota inicial',
        description:
          'Prioridades da primeira sessao, rotas seguras, scans e dicas com poucos spoilers.',
        href: Routes.Subnautica2Beginner,
        icon: CompassIcon,
      },
      {
        title: 'Recursos',
        description:
          'Tabelas de materiais, farm e paginas de recursos depois da verificacao.',
        href: Routes.Subnautica2Resources,
        icon: BoxesIcon,
      },
      {
        title: 'Fabricacao',
        description:
          'Receitas, blueprints e base para um futuro calculador de craft.',
        href: Routes.Subnautica2Crafting,
        icon: WrenchIcon,
      },
      {
        title: 'Mapa e biomas',
        description:
          'Planejamento de rotas, areas seguras, recursos, bases e perigos.',
        href: Routes.Subnautica2Map,
        icon: MapIcon,
      },
    ],
    firstLaunchTitle: 'Primeiras paginas de Subnautica 2',
    independentTitle: 'Um guia de fã independente.',
  },
  'es-419': {
    eyebrow: 'Centro de guias de Subnautica 2 Early Access',
    title: 'Notas de campo desde el oceano alienigena.',
    description:
      'Abyss Guides reune rutas practicas, tablas de recursos, fabricacion, mapas y seguimiento de actualizaciones para Subnautica 2.',
    primaryCta: 'Abrir centro de guias',
    secondaryCta: 'Ver recursos',
    guideCards: [
      {
        title: 'Ruta inicial',
        description:
          'Prioridades de la primera partida, rutas seguras, escaneo y consejos con pocos spoilers.',
        href: Routes.Subnautica2Beginner,
        icon: CompassIcon,
      },
      {
        title: 'Recursos',
        description:
          'Tablas de materiales, farmeo y paginas de recursos al verificar datos.',
        href: Routes.Subnautica2Resources,
        icon: BoxesIcon,
      },
      {
        title: 'Fabricacion',
        description:
          'Recetas, blueprints y base para un futuro calculador de craft.',
        href: Routes.Subnautica2Crafting,
        icon: WrenchIcon,
      },
      {
        title: 'Mapa y biomas',
        description:
          'Rutas, zonas seguras, recursos, bases y marcadores de peligro.',
        href: Routes.Subnautica2Map,
        icon: MapIcon,
      },
    ],
    firstLaunchTitle: 'Primeras paginas de Subnautica 2',
    independentTitle: 'Un guia independiente hecho por fans.',
  },
  ko: {
    eyebrow: 'Subnautica 2 얼리 액세스 공략 허브',
    title: '외계 심해를 위한 현장 노트.',
    description:
      'Abyss Guides는 Subnautica 2의 탐색 루트, 자원표, 제작 노트, 지도 계획, 업데이트 기록을 정리합니다.',
    primaryCta: '공략 허브 열기',
    secondaryCta: '자원 보기',
    guideCards: [
      {
        title: '초반 루트',
        description:
          '첫 플레이 우선순위, 안전 루프, 스캔 습관, 낮은 스포일러 팁.',
        href: Routes.Subnautica2Beginner,
        icon: CompassIcon,
      },
      {
        title: '자원',
        description: '재료표, 파밍 노트, 검증된 개별 자원 페이지.',
        href: Routes.Subnautica2Resources,
        icon: BoxesIcon,
      },
      {
        title: '제작',
        description: '레시피, 청사진 해금, 제작 계산기를 위한 데이터.',
        href: Routes.Subnautica2Crafting,
        icon: WrenchIcon,
      },
      {
        title: '지도와 생태계',
        description:
          '안전 구역, 자원 구역, 기지 후보, 위험 지점 중심의 루트 계획.',
        href: Routes.Subnautica2Map,
        icon: MapIcon,
      },
    ],
    firstLaunchTitle: '먼저 만들 Subnautica 2 페이지',
    independentTitle: '독립 팬 가이드입니다.',
  },
  ja: {
    eyebrow: 'Subnautica 2 早期アクセス攻略ハブ',
    title: '未知の深海を泳ぐための実用メモ。',
    description:
      'Abyss Guides は Subnautica 2 の探索ルート、資源表、クラフト、マップ計画、アップデート情報を整理します。',
    primaryCta: '攻略ハブを開く',
    secondaryCta: '資源を見る',
    guideCards: [
      {
        title: '初心者ルート',
        description:
          '最初にやること、安全な周回、スキャン、ネタバレ控えめの生存メモ。',
        href: Routes.Subnautica2Beginner,
        icon: CompassIcon,
      },
      {
        title: '資源',
        description: '素材表、集め方、検証済みの個別資源ページ。',
        href: Routes.Subnautica2Resources,
        icon: BoxesIcon,
      },
      {
        title: 'クラフト',
        description: 'レシピ、設計図、今後のクラフト計算機につながるデータ。',
        href: Routes.Subnautica2Crafting,
        icon: WrenchIcon,
      },
      {
        title: 'マップとバイオーム',
        description: '安全地帯、資源エリア、拠点候補、危険地点をルートで整理。',
        href: Routes.Subnautica2Map,
        icon: MapIcon,
      },
    ],
    firstLaunchTitle: '最初に公開する Subnautica 2 ページ',
    independentTitle: '独立したファンガイドです。',
  },
};

function getHomeCopy(locale?: Locale): HomeCopy {
  if (locale === 'zh') {
    return copyByLocale.zh;
  }

  return {
    ...copyByLocale.en,
    ...(locale ? homeCopyOverrides[locale] : {}),
  };
}

export function AbyssHome({ locale }: { locale?: Locale }) {
  const copy = getHomeCopy(locale);

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
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,12,18,.97)_0%,rgba(2,20,27,.88)_34%,rgba(2,20,27,.34)_62%,rgba(1,12,18,.10)_100%),linear-gradient(180deg,rgba(3,19,20,.06),rgba(1,9,12,.94))]"
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
          <div className="flex min-h-[590px] items-center">
            <div className="max-w-[760px]">
              <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
                <RadioIcon className="size-4" />
                {copy.eyebrow}
              </div>
              <h1 className="max-w-4xl text-balance font-semibold text-5xl leading-[1.02] tracking-normal text-[#e8fff9] md:text-7xl">
                {copy.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#a9c9c3]">
                {copy.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LocaleLink
                  href={Routes.Subnautica2}
                  className={cn(buttonVariants({ size: 'lg' }), 'rounded-md')}
                >
                  {copy.primaryCta}
                </LocaleLink>
                <LocaleLink
                  href={Routes.Subnautica2Resources}
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'rounded-md border-cyan-200/25 bg-cyan-100/5 text-cyan-50 hover:bg-cyan-100/10'
                  )}
                >
                  {copy.secondaryCta}
                </LocaleLink>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_270px]">
                <section className="border border-cyan-200/18 bg-[#041d22]/86 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur-md">
                  <div className="flex items-center justify-between border-b border-cyan-200/15 pb-3 text-xs uppercase tracking-[0.18em] text-[#9fe6d4]">
                    <span>{copy.fieldCardLabel}</span>
                    <span>{copy.fieldCardMode}</span>
                  </div>
                  <div className="mt-4 grid gap-3">
                    {copy.activeRoutes.map((route) => (
                      <div
                        className="flex items-center gap-3 border border-cyan-200/10 bg-cyan-300/5 px-3 py-2 text-sm text-[#d1e8e2]"
                        key={route}
                      >
                        <CheckCircle2Icon className="size-4 shrink-0 text-[#78ead7]" />
                        <span>{route}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {copy.missionStats.map(([value, label]) => (
                      <div
                        className="border border-cyan-200/10 bg-[#020d12]/60 p-3"
                        key={label}
                      >
                        <div className="text-xl font-semibold text-[#e8fff9]">
                          {value}
                        </div>
                        <div className="mt-1 text-xs leading-4 text-[#9fbdb6]">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="border border-cyan-200/18 bg-[#041d22]/82 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#9fe6d4]">
                    <ScanLineIcon className="size-4" />
                    {copy.scanQueueTitle}
                  </div>
                  <div className="mt-5 space-y-4 text-sm">
                    {copy.scanItems.map((item, index) => {
                      const Icon = index === 0 ? CompassIcon : ShieldIcon;
                      return (
                        <div className="flex items-start gap-3" key={item}>
                          <Icon
                            className={cn(
                              'mt-0.5 size-4 shrink-0',
                              index === 0 ? 'text-[#f08b4f]' : 'text-[#78ead7]'
                            )}
                          />
                          <p className="leading-6 text-[#bddbd5]">{item}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs text-[#d1e8e2]">
                    {copy.tags.map((tag) => (
                      <span
                        className="border border-cyan-200/15 bg-cyan-300/5 px-2 py-1"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>
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
                {copy.firstLaunchEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                {copy.firstLaunchTitle}
              </h2>
            </div>
            <p className="max-w-xl text-[#abc8c3]">
              {copy.firstLaunchDescription}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {copy.guideCards.map((item) => {
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
                {copy.independentTitle}
              </h2>
            </div>
            <p className="text-base leading-8 text-[#b5c9c4]">
              {copy.independentBody}
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
