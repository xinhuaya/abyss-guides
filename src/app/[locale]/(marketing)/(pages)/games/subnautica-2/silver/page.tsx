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
      title: 'Subnautica 2 ????? - ????????????',
      description:
        'Subnautica 2 ????????????????????????????? Hotfix 2 ???????',
    },
    eyebrow: 'Subnautica 2 ????',
    title: 'Subnautica 2 ?????',
    description:
      '??????????????????????????????????????????',
    quickLabel: '????',
    quickAnswer:
      '?????? Lifepod ????? Old Habitat ????????????????????PC Gamer ???Old Habitat ????? Lifepod ?? 350 ??????????????Unknown Worlds ? Hotfix 2 ????????????????',
    fieldNotesTitle: '??????',
    fieldNotes: [
      {
        title: '?????????',
        body: '??????????????????????????????????????????????????',
      },
      {
        title: '?????????',
        body: '???????????????? Sonic Resonator????????????????????????',
      },
      {
        title: 'Hotfix 2 ???????',
        body: '?????????????????????????????????????????????',
      },
    ],
    routeChecklistTitle: '?????',
    routeChecklist: [
      '? Lifepod ?????????????',
      '??? Old Habitat ????????????',
      '????????????????',
      '?????????????????????',
    ],
    routeTitle: '??????',
    routeSteps: [
      {
        title: '? Lifepod ???',
        body: '???? Lifepod ???????????????????????????????????????',
      },
      {
        title: '? Old Habitat ???',
        body: '????????Coral Dome ?????????????????????????????????',
      },
      {
        title: '???????',
        body: '??????????????? Sonic Resonator????????????????????????',
      },
      {
        title: '??????????',
        body: 'Hotfix 2 ????????????????????????????????????????????',
      },
    ],
    tableTitle: '??????',
    tableHeaders: ['??', '?????'],
    useRows: [
      [
        '????',
        '????????????????????????????????',
      ],
      ['Wiring Kit', '???????????????????????'],
      [
        '???????',
        '??????????????????????????????????',
      ],
      [
        '???????',
        '?????????????????????????????',
      ],
    ],
    patchTitle: '????????',
    patchBody:
      '?????????????GamesRadar ????????????? Unknown Worlds ? Hotfix 2 ????????????????????????????????',
    checklistTitle: '?????',
    checklist: [
      '??????????',
      '?????????????????',
      '???? Lifepod?Coral Dome????????????',
      '?????????????????????????',
    ],
    faqTitle: '????',
    faqs: [
      {
        question: '????????',
        answer: '??????????????? Sonic Resonator ?????',
      },
      {
        question: '???????????',
        answer:
          '?????????????????????????????????',
      },
      {
        question: 'Hotfix 2 ?????',
        answer: '???Unknown Worlds ?? Hotfix 2 ?????????????',
      },
    ],
    readNextTitle: '????',
    readNext: [
      { href: Routes.Subnautica2Resources, label: '????' },
      { href: Routes.Subnautica2SilverIngot, label: 'Silver Ingot ??' },
      { href: Routes.Subnautica2AirTank, label: '?????' },
      { href: Routes.Subnautica2Crafting, label: '????' },
      { href: Routes.Subnautica2Beginner, label: '????' },
    ],
    sourceTitle: '????',
    sourceBody:
      '2026 ? 5 ? 28 ??? Unknown Worlds Hotfix 2 ?????????????????????????',
    routeMindsetTitle: '????',
    routeMindsetBody:
      '?????????????????????????????????????????????',
  },
  ru: {
    metadata: {
      title: '??? ????? Silver ? Subnautica 2 - ?????? ??????? ? ??????????',
      description:
        '??????? ???? ?? Silver ? Subnautica 2: ?????? ???????, ??????????, ??????? ? ??????? Hotfix 2.',
    },
    eyebrow: '??????? ??????? Subnautica 2',
    title: '??? ????? Silver ? Subnautica 2',
    description:
      'Silver ?????? ?????????? ?????? ????????? ????????. ???????? ?? ??????? ????????, ?? ?????? ??? ?? ???????? ??? ????? ?????? ????, ??? ???? ?? ??????????? ????????.',
    quickLabel: '???????? ?????',
    quickAnswer:
      '????? ?? Lifepod ?? ????? ? ?????? Old Habitat ? ?????????? ?????? ????? ? ????????? ? black box. PC Gamer ????????? ?? ?????? ????? Old Habitat ???????? ? 350 ?????? ? ?????? ?? Lifepod, ? Hotfix 2 ??????? ?????? Silver ? ?????? ???????.',
    routeTitle: '?????? ??????? ?? Silver',
    routeSteps: [
      {
        title: '????????? ?? Lifepod',
        body: '??????? ?? ????? ?? Lifepod. ??????????? ??????? ?????, ??? ????????? ???????.',
      },
      {
        title: '????????? ??????????? Old Habitat',
        body: '????? ?????, Coral Dome ? ????? ? ?????? ????? ? ????? ? black box. ? ??????? Silver ??????????? ????????.',
      },
      {
        title: '?????????? ????????? ? ??????? ??????',
        body: '?????? ????? ????? ??????? ??????. ??????? ????? ??????? Sonic Resonator.',
      },
      {
        title: '????????? ??????? ????? ?????',
        body: 'Hotfix 2 ??????? ?????? Silver ? ?????? ???????, ??????? ?????? ????? ???????? ????? ????? ?????.',
      },
    ],
    tableTitle: '????? ????? Silver',
    tableHeaders: ['??????????', '?????? ?????'],
    useRows: [
      [
        '????????',
        '???????? ??????? ?????? ??? ??????????? ??????? ??????????.',
      ],
      [
        'Wiring kits',
        'Silver ????? ??? ??????????? ? ????????? ??????? ??????.',
      ],
      [
        '???? ? ?????????',
        '??????? ????????? ?????? ??? ????? ??? ???? ? ??????? Tadpole: ??????? Early Access ??? ????? ????????.',
      ],
      [
        '????????? ????',
        '????? ????????? ???????????? Silver ????? ??????? ?? ????????.',
      ],
    ],
    patchTitle: '??????? Early Access',
    patchBody:
      'Silver ??? ???????? ????????? ?? ??????. GamesRadar ?????, ??? ?????? ??????? ?? ????? ??? ?????, ? Hotfix 2 ??????? ?????? ????? Silver ? ?????? ???????.',
    checklistTitle: '????? ???????',
    checklist: [
      '?????????? ????????? ?????? ?????????.',
      '???????? ??? ? ????, ???? ?????????? ??????? ? ????????.',
      '??? ????? ????????? ?????????: Lifepod, Coral Dome, ?????, ???? ? ??????.',
      '?? ??????? ???? Silver ?? ???????? ?????????? ???????.',
    ],
    faqTitle: 'FAQ',
    faqs: [
      {
        question: '????? ?? ????????? Silver ???????',
        answer:
          '??, ?????? ????? ??????????? ??????. ??????? ?????? ??????? Sonic Resonator.',
      },
      {
        question: '?????? Silver ?????? ????? ? ???????',
        answer:
          '???????? ????? ???? ????????? ? ??????? ? ?????????, ? ?? ?? ???????? ???.',
      },
      {
        question: 'Hotfix 2 ??????? Silver?',
        answer:
          '??. Unknown Worlds ???????? ?????? ??? Silver ? ?????? ???????.',
      },
    ],
    readNextTitle: '??????',
    readNext: [
      { href: Routes.Subnautica2Resources, label: '???????' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank ? ????????' },
      { href: Routes.Subnautica2Crafting, label: '?????' },
      { href: Routes.Subnautica2Beginner, label: '???? ???????' },
    ],
    sourceTitle: '?????????',
    sourceBody:
      '????????? 28 ??? 2026 ?? Unknown Worlds Hotfix 2 ? ?????????? ??????. Early Access ????? ?????? ???????.',
    routeMindsetTitle: '??? ?????? ? ????????',
    routeMindsetBody:
      'Silver ????? ???????????? ??? ??????????? ???????. ????? ?? ?????? ????????? ???? ? ??????, ?????? ????????? ???? ????????.',
  },
  de: {
    metadata: {
      title: 'Subnautica 2 Silver finden - fr?he Route und Nutzen',
      description:
        'Deutscher Guide zu Silver in Subnautica 2 mit fr?her Route, Crafting-Nutzen, Checkliste und Hotfix-2-Hinweis.',
    },
    eyebrow: 'Subnautica 2 Ressourcenroute',
    title: 'Wo du Silver in Subnautica 2 findest',
    description:
      'Silver ist einer der ersten echten Engp?sse. Mit einer klaren Route wird es deutlich weniger nervig.',
    quickLabel: 'Kurzantwort',
    quickAnswer:
      'Schwimme vom Lifepod nach Norden Richtung Old Habitat und pr?fe die H?hlen entlang der Black-Box-Route. PC Gamer nennt H?hlen beim Old Habitat, etwa 350 Meter n?rdlich des Lifepods; Hotfix 2 hat zus?tzliche Silver-Bereiche im fr?hen Spiel erg?nzt.',
    routeTitle: 'Fr?he Silver-Route',
    routeSteps: [
      {
        title: 'Lifepod als Startpunkt',
        body: 'Starte immer am Lifepod und schwimme nach Norden. Eine wiederholbare Route schl?gt Zufallsfunde.',
      },
      {
        title: 'Zum Old Habitat orientieren',
        body: 'Achte auf Ruinen, Coral Dome und H?hleneing?nge an der Black-Box-Route.',
      },
      {
        title: 'Zwei Silver-Quellen merken',
        body: 'Kleine St?cke kannst du aufheben. Gro?e Brocken brauchen den Sonic Resonator.',
      },
      {
        title: 'Nach Hotfix 2 neu pr?fen',
        body: 'Hotfix 2 hat im fr?hen Gebiet mehr Silver hinzugef?gt. Alte Routen k?nnen jetzt besser sein.',
      },
    ],
    tableTitle: 'Wof?r Silver gebraucht wird',
    tableHeaders: ['Nutzen', 'Warum es wichtig ist'],
    useRows: [
      [
        'Sauerstoff',
        'Air-Tank-Fortschritt macht jede sp?tere Sammelrunde sicherer.',
      ],
      [
        'Wiring Kits',
        'Silver steckt in Elektronik-Ketten und sp?terem Crafting.',
      ],
      [
        'Basis und Fahrzeuge',
        'Heb ein paar St?cke f?r Basisanlagen und Tadpole-Ketten auf; Early-Access-Rezepte k?nnen sich noch ?ndern.',
      ],
      [
        'Gezieltes Farming',
        'Mit besseren Tools wird Silver zu einer festen Route statt zu einem Ratespiel.',
      ],
    ],
    patchTitle: 'Early-Access-Hinweis',
    patchBody:
      'Silver war in der Launch-Woche ein klarer Engpass. GamesRadar berichtete ?ber Suchprobleme; Unknown Worlds f?gte mit Hotfix 2 mehr Silver im fr?hen Gebiet hinzu.',
    checklistTitle: 'Vor dem Start',
    checklist: [
      'Ein paar Inventarpl?tze freilassen.',
      'Essen und Wasser mitnehmen, wenn du Storyziele kombinierst.',
      'Im Koop klare Orientierungspunkte nutzen: Lifepod, Coral Dome, Ruinen, H?hle.',
      'Nicht alles Silver ausgeben, bevor du die n?chste Rezeptkette pr?fst.',
    ],
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'Kann ich Silver direkt aufheben?',
        answer:
          'Ja. Kleine St?cke hebst du auf, gro?e Lager brauchen den Sonic Resonator.',
      },
      {
        question: 'Warum wirkt Silver am Anfang so selten?',
        answer:
          'Die guten Stellen liegen eher in H?hlen und an Routen, nicht frei auf dem Meeresboden.',
      },
      {
        question: 'Hat Hotfix 2 Silver ge?ndert?',
        answer:
          'Ja. Unknown Worlds hat mehr Silver-Bereiche im fr?hen Spiel hinzugef?gt.',
      },
    ],
    readNextTitle: 'Weiterlesen',
    readNext: [
      { href: Routes.Subnautica2Resources, label: 'Ressourcen' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank und O2' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting' },
      { href: Routes.Subnautica2Beginner, label: 'Anf?nger-Guide' },
    ],
    sourceTitle: 'Quellenhinweis',
    sourceBody:
      'Gepr?ft am 28. Mai 2026 mit Unknown Worlds Hotfix 2 und aktuellen Silver-Routen. Early Access kann Orte ?ndern.',
    routeMindsetTitle: 'Routen-Denken',
    routeMindsetBody:
      'Behandle Silver wie eine feste Erledigung, nicht wie Gl?ck. Sobald du den H?hleneingang beschreiben kannst, wird es berechenbar.',
  },
  fr: {
    metadata: {
      title: 'O? trouver Silver dans Subnautica 2 - route rapide et usages',
      description:
        'Guide fran?ais pour trouver Silver dans Subnautica 2 : route de d?but, usages, checklist et note Hotfix 2.',
    },
    eyebrow: 'Route de ressource Subnautica 2',
    title: 'O? trouver Silver dans Subnautica 2',
    description:
      'Silver bloque vite la progression. La bonne approche consiste ? suivre une route de grottes, pas ? fouiller le fond marin au hasard.',
    quickLabel: 'R?ponse rapide',
    quickAnswer:
      'Depuis le Lifepod, partez vers le nord en direction des ruines Old Habitat et v?rifiez les grottes autour du chemin de la black box. PC Gamer indique des grottes pr?s de Old Habitat, environ 350 m?tres au nord du Lifepod; Hotfix 2 a ajout? plus de zones de Silver au d?but du jeu.',
    routeTitle: 'Route Silver de d?but',
    routeSteps: [
      {
        title: 'Gardez le Lifepod comme point de d?part',
        body: "Partez du Lifepod vers le nord. Une route r?p?table vaut mieux qu'une trouvaille chanceuse.",
      },
      {
        title: 'Suivez la direction Old Habitat',
        body: 'Cherchez les ruines, le Coral Dome et les entr?es de grotte pr?s du chemin de black box.',
      },
      {
        title: 'Retenez les deux sources',
        body: 'Les petits morceaux se ramassent a la main. Les gros blocs demandent le Sonic Resonator.',
      },
      {
        title: 'Rev?rifiez apr?s Hotfix 2',
        body: 'Hotfix 2 a ajout? plus de Silver dans la r?gion de d?but. Une ancienne route peut ?tre meilleure maintenant.',
      },
    ],
    tableTitle: '? quoi sert Silver',
    tableHeaders: ['Usage', "Pourquoi c'est important"],
    useRows: [
      [
        'Oxyg?ne',
        "Les am?liorations d'air tank rendent les prochaines sorties plus s?res.",
      ],
      [
        'Wiring kits',
        'Silver entre dans les cha?nes ?lectroniques et le craft avanc?.',
      ],
      [
        'Base et v?hicule',
        'Gardez quelques morceaux pour la base et les cha?nes Tadpole; les recettes Early Access peuvent encore bouger.',
      ],
      [
        'Farm r?p?t?',
        "Avec de meilleurs outils, Silver devient une route fixe au lieu d'un pari.",
      ],
    ],
    patchTitle: 'Note Early Access',
    patchBody:
      'Silver a ?t? un vrai point de friction au lancement. GamesRadar a signal? que les joueurs peinaient ? en trouver; Hotfix 2 a ensuite ajout? plus de zones Silver au d?but du jeu.',
    checklistTitle: 'Avant de partir',
    checklist: [
      'Gardez quelques emplacements libres.',
      'Prenez nourriture et eau si vous faites aussi un objectif de sc?nario.',
      'En coop, utilisez Lifepod, Coral Dome, ruines et entr?e de grotte comme rep?res.',
      'Ne d?pensez pas tout votre Silver avant de v?rifier la prochaine recette.',
    ],
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'Peut-on ramasser Silver ? la main ?',
        answer:
          'Oui pour les petits morceaux. Les gros gisements demandent le Sonic Resonator.',
      },
      {
        question: 'Pourquoi Silver semble rare au d?but ?',
        answer:
          'Les bons spots sont surtout dans les grottes et sur les routes de mission.',
      },
      {
        question: 'Hotfix 2 a chang? Silver ?',
        answer:
          'Oui. Unknown Worlds a ajout? plus de zones de Silver dans la r?gion de d?but.',
      },
    ],
    readNextTitle: '? lire ensuite',
    readNext: [
      { href: Routes.Subnautica2Resources, label: 'Ressources' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank et O2' },
      { href: Routes.Subnautica2Crafting, label: 'Craft' },
      { href: Routes.Subnautica2Beginner, label: 'Guide d?butant' },
    ],
    sourceTitle: 'Sources',
    sourceBody:
      'V?rifi? le 28 mai 2026 avec Unknown Worlds Hotfix 2 et les routes Silver actuelles. Les lieux peuvent changer en Early Access.',
    routeMindsetTitle: 'Logique de route',
    routeMindsetBody:
      "Traitez Silver comme une course que vous pouvez refaire. Quand l'entr?e de grotte est claire, le mat?riau arr?te de bloquer tout le craft.",
  },
  'pt-BR': {
    metadata: {
      title: 'Onde encontrar Silver em Subnautica 2 - rota inicial e usos',
      description:
        'Guia em portugu?s do Brasil para Silver em Subnautica 2, com rota inicial, usos, checklist e nota do Hotfix 2.',
    },
    eyebrow: 'Rota de recurso de Subnautica 2',
    title: 'Onde encontrar Silver em Subnautica 2',
    description:
      'Silver vira gargalo cedo. A melhor sa?da ? seguir uma rota de cavernas em vez de procurar no fundo aberto sem dire??o.',
    quickLabel: 'Resposta r?pida',
    quickAnswer:
      'Saia do Lifepod rumo ao norte, em dire??o ?s ru?nas Old Habitat, e cheque as cavernas perto da rota do black box. O PC Gamer aponta cavernas perto do Old Habitat, cerca de 350 metros ao norte do Lifepod; o Hotfix 2 adicionou mais ?reas de Silver na regi?o inicial.',
    routeTitle: 'Rota inicial de Silver',
    routeSteps: [
      {
        title: 'Use o Lifepod como ponto de partida',
        body: 'Comece pelo Lifepod e v? para o norte. Uma rota repet?vel vale mais que achar Silver por sorte.',
      },
      {
        title: 'Siga para Old Habitat',
        body: 'Procure ru?nas, Coral Dome e entradas de caverna perto da rota do black box.',
      },
      {
        title: 'Entenda as duas fontes',
        body: 'Peda?os pequenos podem ser coletados com a m?o. Blocos grandes precisam do Sonic Resonator.',
      },
      {
        title: 'Revise rotas antigas depois do Hotfix 2',
        body: 'O Hotfix 2 adicionou mais Silver na regi?o inicial. Uma rota ruim no lan?amento pode estar melhor agora.',
      },
    ],
    tableTitle: 'Para que serve Silver',
    tableHeaders: ['Uso', 'Por que importa'],
    useRows: [
      [
        'Oxig?nio',
        'Melhorar o tanque de ar deixa as pr?ximas viagens mais seguras.',
      ],
      [
        'Wiring kits',
        'Silver entra nas cadeias de eletr?nica e fabrica??o avan?ada.',
      ],
      [
        'Base e ve?culo',
        'Guarde algumas pe?as para a base e cadeias do Tadpole; receitas de Early Access ainda podem mudar.',
      ],
      [
        'Farm repet?vel',
        'Com ferramentas melhores, Silver vira rota fixa em vez de sorte.',
      ],
    ],
    patchTitle: 'Nota do Early Access',
    patchBody:
      'Silver foi um problema claro na semana de lan?amento. GamesRadar relatou a dificuldade dos jogadores, e o Hotfix 2 adicionou mais ?reas de Silver no in?cio do jogo.',
    checklistTitle: 'Antes de sair da base',
    checklist: [
      'Deixe alguns espa?os livres no invent?rio.',
      'Leve comida e ?gua se tamb?m for fazer objetivo de hist?ria.',
      'No coop, use Lifepod, Coral Dome, ru?nas e entrada da caverna como chamadas.',
      'N?o gaste todo Silver antes de checar a pr?xima receita.',
    ],
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'D? para coletar Silver com a m?o?',
        answer:
          'Sim, os peda?os pequenos. Dep?sitos grandes precisam do Sonic Resonator.',
      },
      {
        question: 'Por que Silver parece raro no come?o?',
        answer:
          'Os pontos bons ficam mais em cavernas e rotas de miss?o, n?o no fundo aberto.',
      },
      {
        question: 'O Hotfix 2 mudou Silver?',
        answer:
          'Sim. Unknown Worlds adicionou mais ?reas de Silver na regi?o inicial.',
      },
    ],
    readNextTitle: 'Leia a seguir',
    readNext: [
      { href: Routes.Subnautica2Resources, label: 'Recursos' },
      { href: Routes.Subnautica2AirTank, label: 'Tanque de ar e O2' },
      { href: Routes.Subnautica2Crafting, label: 'Fabrica??o' },
      { href: Routes.Subnautica2Beginner, label: 'Guia inicial' },
    ],
    sourceTitle: 'Fontes',
    sourceBody:
      'Verificado em 28 de maio de 2026 com Unknown Worlds Hotfix 2 e rotas atuais de Silver. Locais podem mudar no Early Access.',
    routeMindsetTitle: 'Mentalidade da rota',
    routeMindsetBody:
      'Trate Silver como uma viagem repet?vel, n?o como sorte. Quando voc? sabe explicar a entrada da caverna, o material deixa de travar tudo.',
  },
  'es-419': {
    metadata: {
      title: 'D?nde encontrar Silver en Subnautica 2 - ruta inicial y usos',
      description:
        'Gu?a en espa?ol latino para Silver en Subnautica 2: ruta inicial, usos, checklist y nota del Hotfix 2.',
    },
    eyebrow: 'Ruta de recurso de Subnautica 2',
    title: 'D?nde encontrar Silver en Subnautica 2',
    description:
      'Silver suele ser el primer recurso que frena el progreso. Buscarlo con una ruta clara ahorra mucho ox?geno.',
    quickLabel: 'Respuesta r?pida',
    quickAnswer:
      'Sal del Lifepod hacia el norte, rumbo a las ruinas Old Habitat, y revisa las cuevas cerca de la ruta del black box. PC Gamer menciona cuevas cerca del Old Habitat, a unos 350 metros al norte del Lifepod; el Hotfix 2 agreg? m?s zonas de Silver en la regi?n inicial.',
    routeTitle: 'Ruta inicial de Silver',
    routeSteps: [
      {
        title: 'Usa el Lifepod como ancla',
        body: 'Empieza desde el Lifepod y nada hacia el norte. Una ruta repetible sirve m?s que encontrar Silver por suerte.',
      },
      {
        title: 'Sigue hacia Old Habitat',
        body: 'Busca ruinas, Coral Dome y entradas de cueva cerca de la ruta del black box.',
      },
      {
        title: 'Distingue las dos fuentes',
        body: 'Las piezas peque?as se recogen a mano. Los dep?sitos grandes necesitan Sonic Resonator.',
      },
      {
        title: 'Vuelve a probar despu?s del Hotfix 2',
        body: 'El Hotfix 2 agreg? m?s Silver en la regi?n inicial, as? que algunas rutas viejas mejoraron.',
      },
    ],
    tableTitle: 'Para qu? sirve Silver',
    tableHeaders: ['Uso', 'Por qu? importa'],
    useRows: [
      [
        'Ox?geno',
        'Mejorar el tanque hace que cada salida posterior sea m?s segura.',
      ],
      [
        'Wiring kits',
        'Silver entra en cadenas de electr?nica y fabricaci?n avanzada.',
      ],
      [
        'Base y veh?culo',
        'Guarda algunas piezas para la base y cadenas del Tadpole; las recetas de Early Access todav?a pueden cambiar.',
      ],
      [
        'Farmeo repetible',
        'Con mejores herramientas, Silver se convierte en una ruta fija.',
      ],
    ],
    patchTitle: 'Nota de Early Access',
    patchBody:
      'Silver fue un problema claro en la semana de lanzamiento. GamesRadar report? que muchos jugadores no lo encontraban; Hotfix 2 agreg? m?s zonas de Silver al inicio.',
    checklistTitle: 'Antes de salir',
    checklist: [
      'Deja espacios libres en el inventario.',
      'Lleva comida y agua si tambi?n har?s un objetivo de historia.',
      'En coop, usa Lifepod, Coral Dome, ruinas y entrada de cueva como llamadas.',
      'No gastes todo tu Silver antes de revisar la siguiente receta.',
    ],
    faqTitle: 'FAQ',
    faqs: [
      {
        question: '?Puedo recoger Silver a mano?',
        answer:
          'S?, las piezas peque?as. Los dep?sitos grandes requieren Sonic Resonator.',
      },
      {
        question: '?Por qu? Silver parece tan raro al inicio?',
        answer:
          'Los puntos confiables est?n m?s en cuevas y rutas de misi?n que en el fondo abierto.',
      },
      {
        question: '?Hotfix 2 cambi? Silver?',
        answer:
          'S?. Unknown Worlds agreg? m?s zonas de Silver en la regi?n inicial.',
      },
    ],
    readNextTitle: 'Leer despu?s',
    readNext: [
      { href: Routes.Subnautica2Resources, label: 'Recursos' },
      { href: Routes.Subnautica2AirTank, label: 'Tanque de aire y O2' },
      { href: Routes.Subnautica2Crafting, label: 'Fabricaci?n' },
      { href: Routes.Subnautica2Beginner, label: 'Gu?a inicial' },
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
      title: 'Subnautica 2 Silver ?? - ?? ??? ???',
      description:
        'Subnautica 2 Silver ??? ?????. ?? ??, ?? ???, ?? ?????, Hotfix 2 ???? ?????.',
    },
    eyebrow: 'Subnautica 2 ?? ??',
    title: 'Subnautica 2 Silver ??',
    description:
      'Silver? ?? ??? ?? ?? ?? ?????. ??? ??? ??? ??? ?? ??? ?? ?? ?? ????.',
    quickLabel: '?? ?',
    quickAnswer:
      'Lifepod?? ???? Old Habitat ?? ???? ????, black box ?? ?? ??? ??? ?????. PC Gamer? Lifepod ?? ? 350m? Old Habitat ?? ??? ????, Unknown Worlds Hotfix 2? ?? ??? Silver ?? ??? ? ??????.',
    routeTitle: '?? Silver ??',
    routeSteps: [
      {
        title: 'Lifepod? ????? ??',
        body: '?? Lifepod?? ???? ?????. ?? ??? ??? ? ?? ?? ?? ??? ????.',
      },
      {
        title: 'Old Habitat ?? ??',
        body: '??, Coral Dome, black box ?? ??? ?? ??? ????.',
      },
      {
        title: '? ??? Silver ??',
        body: '?? ??? ??? ????. ? ??? Sonic Resonator? ?????.',
      },
      {
        title: 'Hotfix 2 ?? ?? ??',
        body: 'Hotfix 2? ?? ??? Silver? ? ??????. ?? ??? ??? ???? ? ????.',
      },
    ],
    tableTitle: 'Silver ???',
    tableHeaders: ['???', '??? ??'],
    useRows: [
      [
        '?? ?????',
        '?? ?? ??? ?? ?? ??? ?? ???? ????.',
      ],
      ['Wiring kits', 'Silver? ?? ??? ?? ??? ?????.'],
      [
        '??? ??',
        '?? ??? Tadpole ?? ??? ? ? ?? ? ?? ?????. Early Access ???? ?? ?? ? ????.',
      ],
      [
        '?? ??',
        '??? ???? Silver? ??? ???? ??? ?? ??? ???.',
      ],
    ],
    patchTitle: '?? ??? ?? ??',
    patchBody:
      'Silver? ?? ??? ? ???????. GamesRadar? ?????? Silver? ?? ?????? ????, Hotfix 2? ?? ??? Silver ?? ??? ? ??????.',
    checklistTitle: '?? ? ??',
    checklist: [
      '???? ?? ? ? ?????.',
      '??? ??? ?? ??? ??? ?? ????.',
      '????? Lifepod, Coral Dome, ??, ?? ??? ??? ????.',
      '?? ?? ??? ?? ? Silver? ?? ?? ???.',
    ],
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'Silver? ??? ?? ? ????',
        answer:
          '?? ??? ?????. ? ??? Sonic Resonator? ?????.',
      },
      {
        question: '?? Silver? ? ???? ??????',
        answer:
          '??? ?? ??? ?? ??? ??? ??? ?? ?? ??? ?? ?????.',
      },
      {
        question: 'Hotfix 2? Silver? ?????',
        answer:
          '?. Unknown Worlds? ?? ??? Silver ?? ??? ? ??????.',
      },
    ],
    readNextTitle: '?? ?',
    readNext: [
      { href: Routes.Subnautica2Resources, label: '?? ???' },
      { href: Routes.Subnautica2AirTank, label: '?? ??? ??' },
      { href: Routes.Subnautica2Crafting, label: '?? ???' },
      { href: Routes.Subnautica2Beginner, label: '??? ???' },
    ],
    sourceTitle: '?? ??',
    sourceBody:
      '2026? 5? 28? Unknown Worlds Hotfix 2? ?? Silver ?? ??? ???? ??????. Early Access ??? ?? ? ????.',
    routeMindsetTitle: '?? ???',
    routeMindsetBody:
      'Silver? ?? ??? ?? ??? ????? ???. ?? ??? ??? ? ??? ?? ??? ? ????.',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 Silver ??? - ?????????',
      description:
        'Subnautica 2 ? Silver ???????????????????????Hotfix 2 ???????????',
    },
    eyebrow: 'Subnautica 2 ?????',
    title: 'Subnautica 2 ? Silver ?????????',
    description:
      'Silver ??????????????????????????????????????????????',
    quickLabel: '??',
    quickAnswer:
      'Lifepod ???????Old Habitat ?????? black box ????????????????PC Gamer ? Lifepod ?????350m? Old Habitat ?????????????Unknown Worlds ? Hotfix 2 ???????? Silver ???????????????',
    routeTitle: '??? Silver ???',
    routeSteps: [
      {
        title: 'Lifepod ??????',
        body: 'Lifepod ??????????????????????????????????',
      },
      {
        title: 'Old Habitat ?????',
        body: '???Coral Dome?black box ???????????????????',
      },
      {
        title: '2??? Silver ????',
        body: '???????????????????? Sonic Resonator ??????',
      },
      {
        title: 'Hotfix 2 ???????',
        body: 'Hotfix 2 ??????? Silver ??????????????????????????????????',
      },
    ],
    tableTitle: 'Silver ????',
    tableHeaders: ['???', '?????'],
    useRows: [
      [
        '?????????',
        'Air Tank ????????????????????????',
      ],
      ['Wiring kits', '????????????????????'],
      [
        '??????',
        '????? Tadpole ??????????????????????Early Access ???????????????????',
      ],
      [
        '??????',
        '???????Silver ???????????????????',
      ],
    ],
    patchTitle: 'Early Access ???',
    patchBody:
      'Silver ????????????????????GamesRadar ?????????????????????? Hotfix 2 ??????? Silver ???????????????',
    checklistTitle: '???????',
    checklist: [
      '???????????????',
      '?????????????????????',
      '??????? Lifepod?Coral Dome????????????????',
      '???????????? Silver ??????????',
    ],
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'Silver ?????????',
        answer:
          '?????????????????? Sonic Resonator ??????',
      },
      {
        question: '??? Silver ???????????',
        answer:
          '???????????????????????????????????????',
      },
      {
        question: 'Hotfix 2 ? Silver ?????????',
        answer:
          '???Unknown Worlds ??????? Silver ??????????????',
      },
    ],
    readNextTitle: '????',
    readNext: [
      { href: Routes.Subnautica2Resources, label: '?????' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank ???' },
      { href: Routes.Subnautica2Crafting, label: '???????' },
      { href: Routes.Subnautica2Beginner, label: '??????' },
    ],
    sourceTitle: '????',
    sourceBody:
      '2026?5?28?? Unknown Worlds Hotfix 2 ???? Silver ?????????Early Access ??????????????????',
    routeMindsetTitle: '???????',
    routeMindsetBody:
      'Silver ?????????????????????????????????????????????????????????????',
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
