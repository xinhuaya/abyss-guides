import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { getBaseUrl, getUrlWithLocale } from '@/lib/urls';
import { Routes } from '@/routes';
import {
  AlertTriangleIcon,
  CompassIcon,
  DropletsIcon,
  HelpCircleIcon,
  PickaxeIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type Step = {
  title: string;
  body: string;
};

type SilverCopy = {
  metadata: {
    title: string;
    description: string;
  };
  eyebrow: string;
  title: string;
  description: string;
  quickLabel: string;
  quickAnswer: string;
  fieldNotesTitle?: string;
  fieldNotes?: Step[];
  routeChecklistTitle?: string;
  routeChecklist?: string[];
  routeTitle: string;
  routeSteps: Step[];
  tableTitle: string;
  tableHeaders: [string, string];
  useRows: Array<[string, string]>;
  patchTitle: string;
  patchBody: string;
  checklistTitle: string;
  checklist: string[];
  faqTitle: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  readNextTitle: string;
  readNext: Array<{
    href: Routes;
    label: string;
  }>;
  sourceTitle: string;
  sourceBody: string;
  routeMindsetTitle: string;
  routeMindsetBody: string;
};

const PUBLISHED_AT = '2026-05-23';
const UPDATED_AT = '2026-05-28';

const silverCopy: Record<string, SilverCopy> = {
  en: {
    metadata: {
      title: 'Where to Find Silver in Subnautica 2 - Early Route and Uses',
      description:
        'Find Silver in Subnautica 2 with early route notes, crafting uses, farming advice, and Hotfix 2 patch caveats for Early Access.',
    },
    eyebrow: 'Subnautica 2 resource route',
    title: 'Where to Find Silver in Subnautica 2',
    description:
      'Silver is one of the first resources that turns a simple dive into real progression. This guide keeps the route practical, patch-aware, and spoiler-light for Early Access players.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'For early Silver, follow the northward route from the Lifepod toward the Old Habitat colony ruins and check the cave spaces around the black-box objective path. PC Gamer points players toward caves near the Old Habitat, about 350 meters north of the Lifepod, and Unknown Worlds Hotfix 2 added more Silver resource areas in the early-game region.',
    fieldNotesTitle: 'Field notes for Silver runs',
    fieldNotes: [
      {
        title: 'Caves matter more than open seabed',
        body: 'If you are sweeping flat ground and coming up empty, change the shape of the route. Silver is much easier to remember when the run is tied to cave mouths and ruins.',
      },
      {
        title: 'Do not stare at deposits you cannot mine',
        body: 'Small pieces solve early recipes. Larger blocks wait for the Sonic Resonator. If the tool is missing, mark the spot mentally and keep moving.',
      },
      {
        title: 'Hotfix 2 made old advice worth rechecking',
        body: 'Launch-week Silver complaints were real, but the early region has been adjusted. If a guide says the area is dry, test it against the current build before giving up.',
      },
    ],
    routeChecklistTitle: 'Silver run check',
    routeChecklist: [
      'Start from Lifepod and swim north with a landmark in mind.',
      'Check cave entrances near Old Habitat and the black-box path.',
      'Keep oxygen for the return instead of chasing one more glint.',
      'Save a few pieces before crafting side electronics.',
    ],
    routeTitle: 'Early Silver route',
    routeSteps: [
      {
        title: 'Use the Lifepod as your anchor',
        body: 'Start from the Lifepod and swim north instead of roaming in circles. A route you can repeat is more useful than one lucky Silver pickup.',
      },
      {
        title: 'Follow the Old Habitat direction',
        body: 'Look for the early colony ruins, Coral Dome landmarks, and cave entrances near the black-box path. Silver is much more reliable in caves than on open seabed.',
      },
      {
        title: 'Know the two Silver sources',
        body: 'Small Silver pieces can be grabbed by hand. Larger mineral blocks need the Sonic Resonator, so do not waste oxygen staring at a block you cannot mine yet.',
      },
      {
        title: 'Recheck old dry routes after patches',
        body: 'Hotfix 2 added more Silver resource areas in the early-game region. If launch-week guides or your first run felt too stingy, the route may be better now.',
      },
    ],
    tableTitle: 'What Silver is used for',
    tableHeaders: ['Use', 'Why it matters'],
    useRows: [
      [
        'Air tank progression',
        'Silver helps push oxygen upgrades, which makes every future resource run safer.',
      ],
      [
        'Wiring kits',
        'Silver feeds electronics chains and unlocks more advanced crafting steps.',
      ],
      [
        'Base and vehicle systems',
        'Keep a few pieces spare for base facilities and Tadpole-related crafting, since Early Access recipes can still move.',
      ],
      [
        'Scanner-assisted farming',
        'Once your tools improve, Silver becomes a route you can deliberately repeat instead of a memory test.',
      ],
    ],
    patchTitle: 'Patch note for Early Access',
    patchBody:
      'Silver was a launch-week pain point. GamesRadar reported that players were struggling to find it, and Unknown Worlds Hotfix 2 later added more Silver resource areas in the early-game region. Treat exact route text as patch-sensitive.',
    checklistTitle: 'Before you leave base',
    checklist: [
      'Empty a few inventory slots before the run.',
      'Bring food and water if you are combining Silver with a story objective.',
      'Use Lifepod, Coral Dome, ruins, and cave entrance as co-op callouts.',
      'Do not spend every Silver piece before checking your next recipe chain.',
    ],
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'Can I collect Silver by hand?',
        answer:
          'Yes. Small Silver pieces can be picked up directly. Large deposits need the Sonic Resonator.',
      },
      {
        question: 'Why does Silver feel so rare early on?',
        answer:
          'It is easy to miss because the reliable early spots are caves and route landmarks, not random open seabed.',
      },
      {
        question: 'Did Hotfix 2 change Silver?',
        answer:
          'Yes. Unknown Worlds says Hotfix 2 added more Silver resource areas in the early-game region.',
      },
    ],
    readNextTitle: 'Read next',
    readNext: [
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2SilverIngot, label: 'Silver Ingot Guide' },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Guide' },
    ],
    sourceTitle: 'Source note',
    sourceBody:
      'Checked May 28, 2026 against Unknown Worlds Hotfix 2 and current Silver route reporting. Early Access locations can change.',
    routeMindsetTitle: 'Route mindset',
    routeMindsetBody:
      'Treat Silver like a repeatable errand, not a lucky discovery. Once you can describe the cave entrance clearly, the material stops blocking every recipe chain.',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 银在哪里找 - 前期路线、用途和补丁说明',
      description:
        'Subnautica 2 银矿中文攻略，整理前期路线、采集方法、制作用途、出发清单和 Hotfix 2 之后的注意点。',
    },
    eyebrow: 'Subnautica 2 资源路线',
    title: 'Subnautica 2 银在哪里找',
    description:
      '银是前期开局最容易卡住的材料之一。它不难到离谱，但位置很挑路线，乱游通常很浪费氧气。',
    quickLabel: '快速答案',
    quickAnswer:
      '前期找银，从 Lifepod 往北，沿着 Old Habitat 殖民地遗迹和黑匣子任务路线附近的洞穴找。PC Gamer 提到，Old Habitat 附近、距离 Lifepod 大约 350 米的洞穴是早期银的重点区域；Unknown Worlds 的 Hotfix 2 也已经增加了前期区域的银资源点。',
    fieldNotesTitle: '找银路线笔记',
    fieldNotes: [
      {
        title: '洞穴比开放海底重要',
        body: '如果你一直在平坦海底扫来扫去还找不到，就换路线形状。把路线绑到洞口、遗迹和黑匣子方向上，银会更好记。',
      },
      {
        title: '不能采的大矿别硬盯',
        body: '小块银先解决早期配方，大型矿块等 Sonic Resonator。工具没到位时，记一下位置就走，氧气比面子重要。',
      },
      {
        title: 'Hotfix 2 后旧说法要复查',
        body: '首发阶段银确实难找，但前期区域已经调整过。如果旧攻略说某片区域很干，先按当前版本再跑一遍。',
      },
    ],
    routeChecklistTitle: '找银前检查',
    routeChecklist: [
      '从 Lifepod 出发往北，心里有一个地标。',
      '重点看 Old Habitat 和黑匣子路线附近的洞口。',
      '别为了多捡一块，把回程氧气花掉。',
      '做旁支电子件前，先留几块给气瓶和后续配方。',
    ],
    routeTitle: '前期找银路线',
    routeSteps: [
      {
        title: '用 Lifepod 当起点',
        body: '每次都从 Lifepod 出发往北走，不要在出生点周围随机乱翻。能重复的路线，比偶然捡到一块银更有价值。',
      },
      {
        title: '往 Old Habitat 方向找',
        body: '留意殖民地遗迹、Coral Dome 和黑匣子路线附近的洞口。银更常出现在洞穴里，不太适合只扫开放海底。',
      },
      {
        title: '分清两种银资源',
        body: '小块银可以直接捡，大型矿块需要 Sonic Resonator。工具没到位时，不要在不能采的矿块旁边硬耗氧气。',
      },
      {
        title: '旧路线可以重新跑一次',
        body: 'Hotfix 2 给前期区域加了更多银资源点。如果你之前觉得银少得离谱，更新后同一片区域可能已经好找一些。',
      },
    ],
    tableTitle: '银的主要用途',
    tableHeaders: ['用途', '为什么重要'],
    useRows: [
      [
        '氧气升级',
        '银会卡住气瓶相关进度，氧气上来后，之后每次资源跑图都会轻松很多。',
      ],
      ['Wiring Kit', '银会进入电子制作链，是很多进阶配方的前置材料。'],
      [
        '基地和载具系统',
        '至少先预留几块给基地设施和蝌蚪号相关制作链，抢先体验配方可能继续改。',
      ],
      [
        '后续扫描和采集',
        '工具升级后，银就会从“看运气”变成可以稳定复跑的材料路线。',
      ],
    ],
    patchTitle: '抢先体验补丁说明',
    patchBody:
      '银在首发那几天是明显痛点。GamesRadar 报道过玩家很难找到银；随后 Unknown Worlds 在 Hotfix 2 中给前期区域增加了更多银资源点。具体路线仍然要按版本更新来复查。',
    checklistTitle: '出发前检查',
    checklist: [
      '背包先空出几个格子。',
      '如果顺路做剧情任务，带好食物和水。',
      '联机时用 Lifepod、Coral Dome、遗迹、洞口这些词报点。',
      '不要把所有银一次性花光，先看下一条制作链需要什么。',
    ],
    faqTitle: '常见问题',
    faqs: [
      {
        question: '银可以直接捡吗？',
        answer: '小块银可以直接捡。大型矿块需要 Sonic Resonator 才能开采。',
      },
      {
        question: '为什么前期银这么难找？',
        answer:
          '因为可靠点位主要在洞穴和任务路线附近，不是在出生点开放海底随便刷。',
      },
      {
        question: 'Hotfix 2 改了银吗？',
        answer: '改了。Unknown Worlds 表示 Hotfix 2 增加了前期区域的银资源点。',
      },
    ],
    readNextTitle: '继续阅读',
    readNext: [
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2SilverIngot, label: 'Silver Ingot 指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
      { href: Routes.Subnautica2Beginner, label: '新手指南' },
    ],
    sourceTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 28 日核对 Unknown Worlds Hotfix 2 和当前银路线报道。抢先体验阶段的地点可能继续变化。',
    routeMindsetTitle: '路线思路',
    routeMindsetBody:
      '把银当成一条固定跑腿路线，不要当成碰运气。你能清楚描述洞口以后，银就不太会继续卡住制作链。',
  },
  ru: {
    metadata: {
      title: 'Где найти Silver в Subnautica 2 - ранний маршрут и применение',
      description:
        'Русский гайд по Silver в Subnautica 2: ранний маршрут, применение, чеклист и заметки Hotfix 2.',
    },
    eyebrow: 'Маршрут ресурса Subnautica 2',
    title: 'Где найти Silver в Subnautica 2',
    description:
      'Silver быстро становится первым настоящим стопором. Материал не спрятан навсегда, но искать его на открытом дне почти всегда хуже, чем идти по нормальному маршруту.',
    quickLabel: 'Короткий ответ',
    quickAnswer:
      'Идите от Lifepod на север к руинам Old Habitat и проверяйте пещеры рядом с маршрутом к black box. PC Gamer указывает на пещеры возле Old Habitat примерно в 350 метрах к северу от Lifepod, а Hotfix 2 добавил больше Silver в раннем регионе.',
    routeTitle: 'Ранний маршрут за Silver',
    routeSteps: [
      {
        title: 'Начинайте от Lifepod',
        body: 'Плывите на север от Lifepod. Повторяемый маршрут лучше, чем случайная находка.',
      },
      {
        title: 'Держитесь направления Old Habitat',
        body: 'Ищите руины, Coral Dome и входы в пещеры рядом с путем к black box. В пещерах Silver встречается надежнее.',
      },
      {
        title: 'Различайте маленькие и большие залежи',
        body: 'Мелкие куски можно забрать руками. Большие блоки требуют Sonic Resonator.',
      },
      {
        title: 'Проверьте маршрут после патча',
        body: 'Hotfix 2 добавил больше Silver в раннем регионе, поэтому старые сухие маршруты могут стать лучше.',
      },
    ],
    tableTitle: 'Зачем нужен Silver',
    tableHeaders: ['Применение', 'Почему важно'],
    useRows: [
      [
        'Кислород',
        'Апгрейды воздуха делают все последующие вылазки безопаснее.',
      ],
      [
        'Wiring kits',
        'Silver нужен для электроники и следующих цепочек крафта.',
      ],
      [
        'База и транспорт',
        'Держите несколько кусков про запас для базы и цепочек Tadpole: рецепты Early Access еще могут меняться.',
      ],
      [
        'Повторный фарм',
        'После улучшения инструментов Silver легче фармить по маршруту.',
      ],
    ],
    patchTitle: 'Заметка Early Access',
    patchBody:
      'Silver был заметной проблемой на старте. GamesRadar писал, что игроки массово не могли его найти, а Hotfix 2 добавил больше точек Silver в раннем регионе.',
    checklistTitle: 'Перед выходом',
    checklist: [
      'Освободите несколько слотов инвентаря.',
      'Возьмите еду и воду, если совмещаете маршрут с заданием.',
      'Для коопа называйте ориентиры: Lifepod, Coral Dome, руины, вход в пещеру.',
      'Не тратьте весь Silver до проверки следующего рецепта.',
    ],
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'Можно ли подобрать Silver руками?',
        answer:
          'Да, мелкие куски подбираются руками. Большие залежи требуют Sonic Resonator.',
      },
      {
        question: 'Почему Silver трудно найти в начале?',
        answer:
          'Надежные места чаще находятся в пещерах у маршрутов, а не на открытом дне.',
      },
      {
        question: 'Hotfix 2 изменил Silver?',
        answer:
          'Да. Unknown Worlds добавили больше зон Silver в раннем регионе.',
      },
    ],
    readNextTitle: 'Дальше',
    readNext: [
      { href: Routes.Subnautica2Resources, label: 'Ресурсы' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank и кислород' },
      { href: Routes.Subnautica2Crafting, label: 'Крафт' },
      { href: Routes.Subnautica2Beginner, label: 'Гайд новичка' },
    ],
    sourceTitle: 'Источники',
    sourceBody:
      'Проверено 28 мая 2026 по Unknown Worlds Hotfix 2 и актуальным гайдам. Early Access может менять локации.',
    routeMindsetTitle: 'Как думать о маршруте',
    routeMindsetBody:
      'Silver лучше воспринимать как повторяемый маршрут. Когда вы можете объяснить вход в пещеру, ресурс перестает быть лотереей.',
  },
  de: {
    metadata: {
      title: 'Subnautica 2 Silver finden - frühe Route und Nutzen',
      description:
        'Deutscher Guide zu Silver in Subnautica 2 mit früher Route, Crafting-Nutzen, Checkliste und Hotfix-2-Hinweis.',
    },
    eyebrow: 'Subnautica 2 Ressourcenroute',
    title: 'Wo du Silver in Subnautica 2 findest',
    description:
      'Silver ist einer der ersten echten Engpässe. Mit einer klaren Route wird es deutlich weniger nervig.',
    quickLabel: 'Kurzantwort',
    quickAnswer:
      'Schwimme vom Lifepod nach Norden Richtung Old Habitat und prüfe die Höhlen entlang der Black-Box-Route. PC Gamer nennt Höhlen beim Old Habitat, etwa 350 Meter nördlich des Lifepods; Hotfix 2 hat zusätzliche Silver-Bereiche im frühen Spiel ergänzt.',
    routeTitle: 'Frühe Silver-Route',
    routeSteps: [
      {
        title: 'Lifepod als Startpunkt',
        body: 'Starte immer am Lifepod und schwimme nach Norden. Eine wiederholbare Route schlägt Zufallsfunde.',
      },
      {
        title: 'Zum Old Habitat orientieren',
        body: 'Achte auf Ruinen, Coral Dome und Höhleneingänge an der Black-Box-Route.',
      },
      {
        title: 'Zwei Silver-Quellen merken',
        body: 'Kleine Stücke kannst du aufheben. Große Brocken brauchen den Sonic Resonator.',
      },
      {
        title: 'Nach Hotfix 2 neu prüfen',
        body: 'Hotfix 2 hat im frühen Gebiet mehr Silver hinzugefügt. Alte Routen können jetzt besser sein.',
      },
    ],
    tableTitle: 'Wofür Silver gebraucht wird',
    tableHeaders: ['Nutzen', 'Warum es wichtig ist'],
    useRows: [
      [
        'Sauerstoff',
        'Air-Tank-Fortschritt macht jede spätere Sammelrunde sicherer.',
      ],
      [
        'Wiring Kits',
        'Silver steckt in Elektronik-Ketten und späterem Crafting.',
      ],
      [
        'Basis und Fahrzeuge',
        'Heb ein paar Stücke für Basisanlagen und Tadpole-Ketten auf; Early-Access-Rezepte können sich noch ändern.',
      ],
      [
        'Gezieltes Farming',
        'Mit besseren Tools wird Silver zu einer festen Route statt zu einem Ratespiel.',
      ],
    ],
    patchTitle: 'Early-Access-Hinweis',
    patchBody:
      'Silver war in der Launch-Woche ein klarer Engpass. GamesRadar berichtete über Suchprobleme; Unknown Worlds fügte mit Hotfix 2 mehr Silver im frühen Gebiet hinzu.',
    checklistTitle: 'Vor dem Start',
    checklist: [
      'Ein paar Inventarplätze freilassen.',
      'Essen und Wasser mitnehmen, wenn du Storyziele kombinierst.',
      'Im Koop klare Orientierungspunkte nutzen: Lifepod, Coral Dome, Ruinen, Höhle.',
      'Nicht alles Silver ausgeben, bevor du die nächste Rezeptkette prüfst.',
    ],
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'Kann ich Silver direkt aufheben?',
        answer:
          'Ja. Kleine Stücke hebst du auf, große Lager brauchen den Sonic Resonator.',
      },
      {
        question: 'Warum wirkt Silver am Anfang so selten?',
        answer:
          'Die guten Stellen liegen eher in Höhlen und an Routen, nicht frei auf dem Meeresboden.',
      },
      {
        question: 'Hat Hotfix 2 Silver geändert?',
        answer:
          'Ja. Unknown Worlds hat mehr Silver-Bereiche im frühen Spiel hinzugefügt.',
      },
    ],
    readNextTitle: 'Weiterlesen',
    readNext: [
      { href: Routes.Subnautica2Resources, label: 'Ressourcen' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank und O2' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting' },
      { href: Routes.Subnautica2Beginner, label: 'Anfänger-Guide' },
    ],
    sourceTitle: 'Quellenhinweis',
    sourceBody:
      'Geprüft am 28. Mai 2026 mit Unknown Worlds Hotfix 2 und aktuellen Silver-Routen. Early Access kann Orte ändern.',
    routeMindsetTitle: 'Routen-Denken',
    routeMindsetBody:
      'Behandle Silver wie eine feste Erledigung, nicht wie Glück. Sobald du den Höhleneingang beschreiben kannst, wird es berechenbar.',
  },
  fr: {
    metadata: {
      title: 'Où trouver Silver dans Subnautica 2 - route rapide et usages',
      description:
        'Guide français pour trouver Silver dans Subnautica 2 : route de début, usages, checklist et note Hotfix 2.',
    },
    eyebrow: 'Route de ressource Subnautica 2',
    title: 'Où trouver Silver dans Subnautica 2',
    description:
      'Silver bloque vite la progression. La bonne approche consiste à suivre une route de grottes, pas à fouiller le fond marin au hasard.',
    quickLabel: 'Réponse rapide',
    quickAnswer:
      'Depuis le Lifepod, partez vers le nord en direction des ruines Old Habitat et vérifiez les grottes autour du chemin de la black box. PC Gamer indique des grottes près de Old Habitat, environ 350 mètres au nord du Lifepod; Hotfix 2 a ajouté plus de zones de Silver au début du jeu.',
    routeTitle: 'Route Silver de début',
    routeSteps: [
      {
        title: 'Gardez le Lifepod comme point de départ',
        body: "Partez du Lifepod vers le nord. Une route répétable vaut mieux qu'une trouvaille chanceuse.",
      },
      {
        title: 'Suivez la direction Old Habitat',
        body: 'Cherchez les ruines, le Coral Dome et les entrées de grotte près du chemin de black box.',
      },
      {
        title: 'Retenez les deux sources',
        body: 'Les petits morceaux se ramassent a la main. Les gros blocs demandent le Sonic Resonator.',
      },
      {
        title: 'Revérifiez après Hotfix 2',
        body: 'Hotfix 2 a ajouté plus de Silver dans la région de début. Une ancienne route peut être meilleure maintenant.',
      },
    ],
    tableTitle: 'À quoi sert Silver',
    tableHeaders: ['Usage', "Pourquoi c'est important"],
    useRows: [
      [
        'Oxygène',
        "Les améliorations d'air tank rendent les prochaines sorties plus sûres.",
      ],
      [
        'Wiring kits',
        'Silver entre dans les chaînes électroniques et le craft avancé.',
      ],
      [
        'Base et véhicule',
        'Gardez quelques morceaux pour la base et les chaînes Tadpole; les recettes Early Access peuvent encore bouger.',
      ],
      [
        'Farm répété',
        "Avec de meilleurs outils, Silver devient une route fixe au lieu d'un pari.",
      ],
    ],
    patchTitle: 'Note Early Access',
    patchBody:
      'Silver a été un vrai point de friction au lancement. GamesRadar a signalé que les joueurs peinaient à en trouver; Hotfix 2 a ensuite ajouté plus de zones Silver au début du jeu.',
    checklistTitle: 'Avant de partir',
    checklist: [
      'Gardez quelques emplacements libres.',
      'Prenez nourriture et eau si vous faites aussi un objectif de scénario.',
      'En coop, utilisez Lifepod, Coral Dome, ruines et entrée de grotte comme repères.',
      'Ne dépensez pas tout votre Silver avant de vérifier la prochaine recette.',
    ],
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'Peut-on ramasser Silver à la main ?',
        answer:
          'Oui pour les petits morceaux. Les gros gisements demandent le Sonic Resonator.',
      },
      {
        question: 'Pourquoi Silver semble rare au début ?',
        answer:
          'Les bons spots sont surtout dans les grottes et sur les routes de mission.',
      },
      {
        question: 'Hotfix 2 a changé Silver ?',
        answer:
          'Oui. Unknown Worlds a ajouté plus de zones de Silver dans la région de début.',
      },
    ],
    readNextTitle: 'À lire ensuite',
    readNext: [
      { href: Routes.Subnautica2Resources, label: 'Ressources' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank et O2' },
      { href: Routes.Subnautica2Crafting, label: 'Craft' },
      { href: Routes.Subnautica2Beginner, label: 'Guide débutant' },
    ],
    sourceTitle: 'Sources',
    sourceBody:
      'Vérifié le 28 mai 2026 avec Unknown Worlds Hotfix 2 et les routes Silver actuelles. Les lieux peuvent changer en Early Access.',
    routeMindsetTitle: 'Logique de route',
    routeMindsetBody:
      "Traitez Silver comme une course que vous pouvez refaire. Quand l'entrée de grotte est claire, le matériau arrête de bloquer tout le craft.",
  },
  'pt-BR': {
    metadata: {
      title: 'Onde encontrar Silver em Subnautica 2 - rota inicial e usos',
      description:
        'Guia em português do Brasil para Silver em Subnautica 2, com rota inicial, usos, checklist e nota do Hotfix 2.',
    },
    eyebrow: 'Rota de recurso de Subnautica 2',
    title: 'Onde encontrar Silver em Subnautica 2',
    description:
      'Silver vira gargalo cedo. A melhor saída é seguir uma rota de cavernas em vez de procurar no fundo aberto sem direção.',
    quickLabel: 'Resposta rápida',
    quickAnswer:
      'Saia do Lifepod rumo ao norte, em direção às ruínas Old Habitat, e cheque as cavernas perto da rota do black box. O PC Gamer aponta cavernas perto do Old Habitat, cerca de 350 metros ao norte do Lifepod; o Hotfix 2 adicionou mais áreas de Silver na região inicial.',
    routeTitle: 'Rota inicial de Silver',
    routeSteps: [
      {
        title: 'Use o Lifepod como ponto de partida',
        body: 'Comece pelo Lifepod e vá para o norte. Uma rota repetível vale mais que achar Silver por sorte.',
      },
      {
        title: 'Siga para Old Habitat',
        body: 'Procure ruínas, Coral Dome e entradas de caverna perto da rota do black box.',
      },
      {
        title: 'Entenda as duas fontes',
        body: 'Pedaços pequenos podem ser coletados com a mão. Blocos grandes precisam do Sonic Resonator.',
      },
      {
        title: 'Revise rotas antigas depois do Hotfix 2',
        body: 'O Hotfix 2 adicionou mais Silver na região inicial. Uma rota ruim no lançamento pode estar melhor agora.',
      },
    ],
    tableTitle: 'Para que serve Silver',
    tableHeaders: ['Uso', 'Por que importa'],
    useRows: [
      [
        'Oxigênio',
        'Melhorar o tanque de ar deixa as próximas viagens mais seguras.',
      ],
      [
        'Wiring kits',
        'Silver entra nas cadeias de eletrônica e fabricação avançada.',
      ],
      [
        'Base e veículo',
        'Guarde algumas peças para a base e cadeias do Tadpole; receitas de Early Access ainda podem mudar.',
      ],
      [
        'Farm repetível',
        'Com ferramentas melhores, Silver vira rota fixa em vez de sorte.',
      ],
    ],
    patchTitle: 'Nota do Early Access',
    patchBody:
      'Silver foi um problema claro na semana de lançamento. GamesRadar relatou a dificuldade dos jogadores, e o Hotfix 2 adicionou mais áreas de Silver no início do jogo.',
    checklistTitle: 'Antes de sair da base',
    checklist: [
      'Deixe alguns espaços livres no inventário.',
      'Leve comida e água se também for fazer objetivo de história.',
      'No coop, use Lifepod, Coral Dome, ruínas e entrada da caverna como chamadas.',
      'Não gaste todo Silver antes de checar a próxima receita.',
    ],
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'Dá para coletar Silver com a mão?',
        answer:
          'Sim, os pedaços pequenos. Depósitos grandes precisam do Sonic Resonator.',
      },
      {
        question: 'Por que Silver parece raro no começo?',
        answer:
          'Os pontos bons ficam mais em cavernas e rotas de missão, não no fundo aberto.',
      },
      {
        question: 'O Hotfix 2 mudou Silver?',
        answer:
          'Sim. Unknown Worlds adicionou mais áreas de Silver na região inicial.',
      },
    ],
    readNextTitle: 'Leia a seguir',
    readNext: [
      { href: Routes.Subnautica2Resources, label: 'Recursos' },
      { href: Routes.Subnautica2AirTank, label: 'Tanque de ar e O2' },
      { href: Routes.Subnautica2Crafting, label: 'Fabricação' },
      { href: Routes.Subnautica2Beginner, label: 'Guia inicial' },
    ],
    sourceTitle: 'Fontes',
    sourceBody:
      'Verificado em 28 de maio de 2026 com Unknown Worlds Hotfix 2 e rotas atuais de Silver. Locais podem mudar no Early Access.',
    routeMindsetTitle: 'Mentalidade da rota',
    routeMindsetBody:
      'Trate Silver como uma viagem repetível, não como sorte. Quando você sabe explicar a entrada da caverna, o material deixa de travar tudo.',
  },
  'es-419': {
    metadata: {
      title: 'Dónde encontrar Silver en Subnautica 2 - ruta inicial y usos',
      description:
        'Guía en español latino para Silver en Subnautica 2: ruta inicial, usos, checklist y nota del Hotfix 2.',
    },
    eyebrow: 'Ruta de recurso de Subnautica 2',
    title: 'Dónde encontrar Silver en Subnautica 2',
    description:
      'Silver suele ser el primer recurso que frena el progreso. Buscarlo con una ruta clara ahorra mucho oxígeno.',
    quickLabel: 'Respuesta rápida',
    quickAnswer:
      'Sal del Lifepod hacia el norte, rumbo a las ruinas Old Habitat, y revisa las cuevas cerca de la ruta del black box. PC Gamer menciona cuevas cerca del Old Habitat, a unos 350 metros al norte del Lifepod; el Hotfix 2 agregó más zonas de Silver en la región inicial.',
    routeTitle: 'Ruta inicial de Silver',
    routeSteps: [
      {
        title: 'Usa el Lifepod como ancla',
        body: 'Empieza desde el Lifepod y nada hacia el norte. Una ruta repetible sirve más que encontrar Silver por suerte.',
      },
      {
        title: 'Sigue hacia Old Habitat',
        body: 'Busca ruinas, Coral Dome y entradas de cueva cerca de la ruta del black box.',
      },
      {
        title: 'Distingue las dos fuentes',
        body: 'Las piezas pequeñas se recogen a mano. Los depósitos grandes necesitan Sonic Resonator.',
      },
      {
        title: 'Vuelve a probar después del Hotfix 2',
        body: 'El Hotfix 2 agregó más Silver en la región inicial, así que algunas rutas viejas mejoraron.',
      },
    ],
    tableTitle: 'Para qué sirve Silver',
    tableHeaders: ['Uso', 'Por qué importa'],
    useRows: [
      [
        'Oxígeno',
        'Mejorar el tanque hace que cada salida posterior sea más segura.',
      ],
      [
        'Wiring kits',
        'Silver entra en cadenas de electrónica y fabricación avanzada.',
      ],
      [
        'Base y vehículo',
        'Guarda algunas piezas para la base y cadenas del Tadpole; las recetas de Early Access todavía pueden cambiar.',
      ],
      [
        'Farmeo repetible',
        'Con mejores herramientas, Silver se convierte en una ruta fija.',
      ],
    ],
    patchTitle: 'Nota de Early Access',
    patchBody:
      'Silver fue un problema claro en la semana de lanzamiento. GamesRadar reportó que muchos jugadores no lo encontraban; Hotfix 2 agregó más zonas de Silver al inicio.',
    checklistTitle: 'Antes de salir',
    checklist: [
      'Deja espacios libres en el inventario.',
      'Lleva comida y agua si también harás un objetivo de historia.',
      'En coop, usa Lifepod, Coral Dome, ruinas y entrada de cueva como llamadas.',
      'No gastes todo tu Silver antes de revisar la siguiente receta.',
    ],
    faqTitle: 'FAQ',
    faqs: [
      {
        question: '¿Puedo recoger Silver a mano?',
        answer:
          'Sí, las piezas pequeñas. Los depósitos grandes requieren Sonic Resonator.',
      },
      {
        question: '¿Por qué Silver parece tan raro al inicio?',
        answer:
          'Los puntos confiables están más en cuevas y rutas de misión que en el fondo abierto.',
      },
      {
        question: '¿Hotfix 2 cambió Silver?',
        answer:
          'Sí. Unknown Worlds agregó más zonas de Silver en la región inicial.',
      },
    ],
    readNextTitle: 'Leer después',
    readNext: [
      { href: Routes.Subnautica2Resources, label: 'Recursos' },
      { href: Routes.Subnautica2AirTank, label: 'Tanque de aire y O2' },
      { href: Routes.Subnautica2Crafting, label: 'Fabricación' },
      { href: Routes.Subnautica2Beginner, label: 'Guía inicial' },
    ],
    sourceTitle: 'Fuentes',
    sourceBody:
      'Verificado el 28 de mayo de 2026 con Unknown Worlds Hotfix 2 y rutas actuales de Silver. Las ubicaciones pueden cambiar en Early Access.',
    routeMindsetTitle: 'Mentalidad de ruta',
    routeMindsetBody:
      'Piensa en Silver como una vuelta repetible, no como suerte. Cuando puedes describir la entrada de la cueva, deja de bloquear tus recetas.',
  },
  ko: {
    metadata: {
      title: 'Subnautica 2 Silver 위치 - 초반 루트와 사용처',
      description:
        'Subnautica 2 Silver 한국어 공략입니다. 초반 위치, 제작 사용처, 출발 체크리스트, Hotfix 2 변경점을 정리합니다.',
    },
    eyebrow: 'Subnautica 2 자원 루트',
    title: 'Subnautica 2 Silver 위치',
    description:
      'Silver는 초반 진행을 가장 자주 막는 재료입니다. 무작정 바닥을 뒤지는 것보다 동굴 루트를 잡는 편이 훨씬 낫습니다.',
    quickLabel: '빠른 답',
    quickAnswer:
      'Lifepod에서 북쪽으로 Old Habitat 폐허 방향으로 이동하고, black box 목표 경로 근처의 동굴을 확인하세요. PC Gamer는 Lifepod 북쪽 약 350m의 Old Habitat 근처 동굴을 언급했고, Unknown Worlds Hotfix 2는 초반 지역에 Silver 자원 구역을 더 추가했습니다.',
    routeTitle: '초반 Silver 루트',
    routeSteps: [
      {
        title: 'Lifepod를 기준점으로 잡기',
        body: '항상 Lifepod에서 북쪽으로 시작하세요. 반복 가능한 루트가 운 좋게 하나 줍는 것보다 낫습니다.',
      },
      {
        title: 'Old Habitat 방향 보기',
        body: '폐허, Coral Dome, black box 경로 근처의 동굴 입구를 찾으세요.',
      },
      {
        title: '두 종류의 Silver 구분',
        body: '작은 조각은 손으로 줍습니다. 큰 광맥은 Sonic Resonator가 필요합니다.',
      },
      {
        title: 'Hotfix 2 이후 다시 확인',
        body: 'Hotfix 2가 초반 지역에 Silver를 더 추가했습니다. 예전 루트가 지금은 나아졌을 수 있습니다.',
      },
    ],
    tableTitle: 'Silver 사용처',
    tableHeaders: ['사용처', '중요한 이유'],
    useRows: [
      [
        '산소 업그레이드',
        '공기 탱크 진행이 이후 자원 루트를 훨씬 안전하게 만듭니다.',
      ],
      ['Wiring kits', 'Silver는 전자 부품과 제작 체인의 재료입니다.'],
      [
        '기지와 탈것',
        '기지 설비와 Tadpole 제작 체인에 쓸 수 있게 몇 개는 남겨두세요. Early Access 레시피는 계속 바뀔 수 있습니다.',
      ],
      [
        '반복 파밍',
        '도구가 좋아지면 Silver는 기억력 테스트가 아니라 고정 루트가 됩니다.',
      ],
    ],
    patchTitle: '얼리 액세스 패치 메모',
    patchBody:
      'Silver는 출시 초기에 큰 병목이었습니다. GamesRadar는 플레이어들이 Silver를 찾기 어려워했다고 보도했고, Hotfix 2는 초반 지역에 Silver 자원 구역을 더 추가했습니다.',
    checklistTitle: '출발 전 체크',
    checklist: [
      '인벤토리 칸을 몇 개 비워두세요.',
      '스토리 목표와 같이 간다면 음식과 물을 챙기세요.',
      '협동에서는 Lifepod, Coral Dome, 폐허, 동굴 입구로 위치를 말하세요.',
      '다음 제작 체인을 보기 전 Silver를 전부 쓰지 마세요.',
    ],
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'Silver를 손으로 주울 수 있나요?',
        answer:
          '작은 조각은 가능합니다. 큰 광맥은 Sonic Resonator가 필요합니다.',
      },
      {
        question: '초반 Silver가 왜 희귀하게 느껴지나요?',
        answer:
          '신뢰할 만한 위치가 열린 해저가 아니라 동굴과 임무 루트 근처에 많기 때문입니다.',
      },
      {
        question: 'Hotfix 2가 Silver를 바꿨나요?',
        answer:
          '네. Unknown Worlds는 초반 지역에 Silver 자원 구역을 더 추가했습니다.',
      },
    ],
    readNextTitle: '다음 글',
    readNext: [
      { href: Routes.Subnautica2Resources, label: '자원 가이드' },
      { href: Routes.Subnautica2AirTank, label: '공기 탱크와 산소' },
      { href: Routes.Subnautica2Crafting, label: '제작 가이드' },
      { href: Routes.Subnautica2Beginner, label: '초보자 가이드' },
    ],
    sourceTitle: '출처 메모',
    sourceBody:
      '2026년 5월 28일 Unknown Worlds Hotfix 2와 현재 Silver 루트 보도를 기준으로 확인했습니다. Early Access 위치는 바뀔 수 있습니다.',
    routeMindsetTitle: '루트 생각법',
    routeMindsetBody:
      'Silver를 운이 아니라 반복 가능한 심부름으로 보세요. 동굴 입구를 설명할 수 있으면 제작 체인을 덜 막습니다.',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 Silver の場所 - 序盤ルートと使い道',
      description:
        'Subnautica 2 の Silver 日本語攻略。序盤ルート、使い道、出発チェック、Hotfix 2 の変更点を整理します。',
    },
    eyebrow: 'Subnautica 2 資源ルート',
    title: 'Subnautica 2 の Silver はどこで見つかる？',
    description:
      'Silver は序盤で最初に詰まりやすい素材です。海底を適当に探すより、洞窟ルートを覚えるほうが早いです。',
    quickLabel: '要点',
    quickAnswer:
      'Lifepod から北へ進み、Old Habitat の廃墟方面と black box 目標ルート周辺の洞窟を探します。PC Gamer は Lifepod から北へ約350mの Old Habitat 近くの洞窟を紹介しており、Unknown Worlds の Hotfix 2 では序盤エリアに Silver 資源ポイントが追加されました。',
    routeTitle: '序盤の Silver ルート',
    routeSteps: [
      {
        title: 'Lifepod を基準にする',
        body: 'Lifepod から北へ進みます。偶然拾うより、何度も使えるルートのほうが大事です。',
      },
      {
        title: 'Old Habitat 方面を見る',
        body: '廃墟、Coral Dome、black box ルート近くの洞窟入口を探してください。',
      },
      {
        title: '2種類の Silver を覚える',
        body: '小さい破片は手で拾えます。大きな鉱床には Sonic Resonator が必要です。',
      },
      {
        title: 'Hotfix 2 後に再確認する',
        body: 'Hotfix 2 で序盤エリアの Silver 資源ポイントが増えました。古いルートが改善されている場合があります。',
      },
    ],
    tableTitle: 'Silver の使い道',
    tableHeaders: ['使い道', '重要な理由'],
    useRows: [
      [
        '酸素アップグレード',
        'Air Tank 関連の進行で、以後の探索がかなり安全になります。',
      ],
      ['Wiring kits', '電子部品と上位クラフトの材料になります。'],
      [
        '基地と乗り物',
        '基地設備や Tadpole 関連クラフト用に数個は残しておくと安心です。Early Access のレシピはまだ変わる可能性があります。',
      ],
      [
        '反復ファーム',
        '道具が揃うと、Silver は運ではなく固定ルートで集められます。',
      ],
    ],
    patchTitle: 'Early Access の注意',
    patchBody:
      'Silver は発売直後の大きな詰まりポイントでした。GamesRadar は多くのプレイヤーが探しづらいと報じ、その後 Hotfix 2 で序盤エリアに Silver 資源ポイントが追加されました。',
    checklistTitle: '出発前チェック',
    checklist: [
      'インベントリを数枠空けておく。',
      'ストーリー目標も進めるなら食料と水を持つ。',
      '協力プレイでは Lifepod、Coral Dome、廃墟、洞窟入口で位置を伝える。',
      '次のレシピを確認する前に Silver を全部使い切らない。',
    ],
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'Silver は手で拾えますか？',
        answer:
          '小さい破片は拾えます。大きな鉱床には Sonic Resonator が必要です。',
      },
      {
        question: '序盤の Silver が少なく感じる理由は？',
        answer:
          '信頼できる場所が開けた海底ではなく、洞窟やミッションルート近くに多いからです。',
      },
      {
        question: 'Hotfix 2 で Silver は変わりましたか？',
        answer:
          'はい。Unknown Worlds は序盤エリアに Silver 資源ポイントを追加しました。',
      },
    ],
    readNextTitle: '次に読む',
    readNext: [
      { href: Routes.Subnautica2Resources, label: '資源ガイド' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank と酸素' },
      { href: Routes.Subnautica2Crafting, label: 'クラフトガイド' },
      { href: Routes.Subnautica2Beginner, label: '初心者ガイド' },
    ],
    sourceTitle: '出典メモ',
    sourceBody:
      '2026年5月28日に Unknown Worlds Hotfix 2 と現在の Silver ルート記事を確認。Early Access の位置情報は変わる可能性があります。',
    routeMindsetTitle: 'ルートの考え方',
    routeMindsetBody:
      'Silver は偶然ではなく、繰り返せるルートとして考えると楽になります。洞窟入口を説明できるようになると、制作が止まりにくくなります。',
  },
};

const sourceLinks = [
  {
    href: 'https://unknownworlds.com/news/subnautica-2-ea1-hotfix-2',
    label: 'Unknown Worlds Hotfix 2',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-silver-location/',
    label: 'PC Gamer Silver route',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-adding-better-callouts-for-silver-in-first-patch-as-players-struggle-to-find-any/',
    label: 'GamesRadar Silver reporting',
  },
];

function getCopy(locale: Locale): SilverCopy {
  return silverCopy[locale] ?? silverCopy.en;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = getCopy(locale);

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Silver,
  });
}

export default async function SilverGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);
  const baseUrl = getBaseUrl().replace(/\/$/, '');
  const pageUrl = getUrlWithLocale(Routes.Subnautica2Silver, locale).replace(
    /\/$/,
    ''
  );
  const hubUrl = `${baseUrl}${locale === 'en' ? '' : `/${locale}`}${
    Routes.Subnautica2
  }`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: copy.title,
      description: copy.metadata.description,
      url: pageUrl,
      datePublished: PUBLISHED_AT,
      dateModified: UPDATED_AT,
      inLanguage: locale,
      author: {
        '@type': 'Organization',
        name: 'Abyss Guides',
        url: baseUrl,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Abyss Guides',
        url: baseUrl,
      },
      mainEntityOfPage: pageUrl,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Abyss Guides',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Subnautica 2',
          item: hubUrl,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: copy.title,
          item: pageUrl,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: copy.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <main className="min-h-screen bg-[#031314] text-[#dff8f0]">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <section className="relative overflow-hidden border-b border-cyan-200/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-right opacity-35"
          style={{
            backgroundImage: "url('/abyss/chibi-deep-sea-hero.webp')",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(106,240,224,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(106,240,224,.15) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,12,18,.96)_0%,rgba(3,19,20,.86)_46%,rgba(3,19,20,.55)_74%,rgba(1,9,12,.76)_100%),radial-gradient(circle_at_72%_20%,rgba(64,224,208,.18),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(240,139,79,.10),transparent_30%),linear-gradient(180deg,rgba(3,19,20,.16),rgba(1,9,12,.96))]"
        />
        <Container className="relative px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              <PickaxeIcon className="size-4" />
              {copy.eyebrow}
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#e8fff9] md:text-6xl">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a9c9c3]">
              {copy.description}
            </p>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="space-y-8">
            <section className="border border-cyan-200/15 bg-[#082226] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f08b4f]">
                {copy.quickLabel}
              </p>
              <p className="mt-4 text-lg leading-8 text-[#d7eee8]">
                {copy.quickAnswer}
              </p>
            </section>

            {copy.fieldNotes?.length || copy.routeChecklist?.length ? (
              <section className="grid gap-4 md:grid-cols-[minmax(0,1fr)_280px]">
                {copy.fieldNotes?.length ? (
                  <section className="overflow-hidden border border-cyan-200/12 bg-[#071f23]">
                    <div
                      aria-hidden="true"
                      className="h-28 bg-cover bg-center opacity-80"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg,rgba(3,19,20,.18),rgba(3,19,20,.88)),url('/abyss/chibi-deep-sea-hero.webp')",
                      }}
                    />
                    <div className="p-5">
                      <h2 className="text-2xl font-semibold text-[#effffb]">
                        {copy.fieldNotesTitle}
                      </h2>
                      <div className="mt-4 grid gap-4">
                        {copy.fieldNotes.map((note) => (
                          <section
                            className="border-l-2 border-[#f08b4f] pl-4"
                            key={note.title}
                          >
                            <h3 className="font-semibold text-[#78ead7]">
                              {note.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-[#abc8c3]">
                              {note.body}
                            </p>
                          </section>
                        ))}
                      </div>
                    </div>
                  </section>
                ) : null}

                {copy.routeChecklist?.length ? (
                  <aside className="border border-cyan-200/12 bg-[#082226] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f08b4f]">
                      {copy.routeChecklistTitle}
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-[#d1e8e2]">
                      {copy.routeChecklist.map((item) => (
                        <li className="flex gap-3" key={item}>
                          <span
                            aria-hidden="true"
                            className="mt-2 size-1.5 shrink-0 bg-[#78ead7]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </aside>
                ) : null}
              </section>
            ) : null}

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {copy.routeTitle}
              </h2>
              <div className="mt-5 grid gap-4">
                {copy.routeSteps.map((step) => (
                  <section
                    key={step.title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <div className="flex items-center gap-2 text-[#78ead7]">
                      <CompassIcon className="size-4" />
                      <h3 className="font-semibold">{step.title}</h3>
                    </div>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{step.body}</p>
                  </section>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {copy.tableTitle}
              </h2>
              <div className="mt-5 overflow-hidden border border-cyan-200/12">
                <table className="w-full border-collapse bg-[#071f23] text-left text-sm">
                  <thead className="bg-[#0b2d33] text-[#dff8f0]">
                    <tr>
                      <th className="p-4 font-semibold">
                        {copy.tableHeaders[0]}
                      </th>
                      <th className="p-4 font-semibold">
                        {copy.tableHeaders[1]}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {copy.useRows.map(([use, why]) => (
                      <tr key={use} className="border-t border-cyan-200/10">
                        <td className="p-4 align-top font-medium text-[#78ead7]">
                          {use}
                        </td>
                        <td className="p-4 leading-6 text-[#abc8c3]">{why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#082226] p-6">
              <div className="flex items-center gap-3">
                <AlertTriangleIcon className="size-6 text-[#f08b4f]" />
                <h2 className="text-3xl font-semibold text-[#effffb]">
                  {copy.patchTitle}
                </h2>
              </div>
              <p className="mt-4 leading-8 text-[#abc8c3]">{copy.patchBody}</p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {copy.checklistTitle}
              </h2>
              <ul className="mt-5 grid gap-3">
                {copy.checklist.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-[#f08b4f] bg-[#071f23] px-4 py-3 text-sm leading-6 text-[#d1e8e2]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {copy.faqTitle}
              </h2>
              <div className="mt-5 grid gap-4">
                {copy.faqs.map((faq) => (
                  <section
                    key={faq.question}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <div className="flex items-center gap-2 text-[#78ead7]">
                      <HelpCircleIcon className="size-4" />
                      <h3 className="font-semibold">{faq.question}</h3>
                    </div>
                    <p className="mt-3 leading-7 text-[#abc8c3]">
                      {faq.answer}
                    </p>
                  </section>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="overflow-hidden border border-cyan-200/12 bg-[#071f23]">
              <div
                aria-hidden="true"
                className="h-40 bg-cover bg-right"
                style={{
                  backgroundImage: "url('/abyss/chibi-deep-sea-hero.webp')",
                }}
              />
              <div className="border-t border-cyan-200/12 p-5">
                <DropletsIcon className="mb-4 size-6 text-[#f08b4f]" />
                <h2 className="text-lg font-semibold text-[#effffb]">
                  {copy.routeMindsetTitle}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                  {copy.routeMindsetBody}
                </p>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                {copy.readNextTitle}
              </h2>
              <div className="mt-4 grid gap-3 text-sm">
                {copy.readNext.map((item) => (
                  <LocaleLink
                    className="text-[#78ead7] hover:underline"
                    href={item.href}
                    key={item.label}
                  >
                    {item.label}
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                {copy.sourceTitle}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                {copy.sourceBody}
              </p>
              <div className="mt-4 grid gap-2 text-sm">
                {sourceLinks.map((source) => (
                  <a
                    className="text-[#78ead7] hover:underline"
                    href={source.href}
                    key={source.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {source.label}
                  </a>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}
