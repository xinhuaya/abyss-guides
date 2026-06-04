import { AdsenseSlot } from '@/components/ads/adsense-slot';
import { AbyssResourceChecklistCallout } from '@/components/abyss/resource-checklist-callout';
import { AbyssUpdateAlertCard } from '@/components/abyss/update-alert-card';
import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import {
  ABYSS_OFFICIAL_TRAILER_EMBED_URL,
  ABYSS_OFFICIAL_TRAILER_URL,
  createAbyssImageObject,
  createAbyssVideoObject,
} from '@/lib/abyss-media-schema';
import { getBaseUrl, getPathWithLocale, getUrlWithLocale } from '@/lib/urls';
import { Routes } from '@/routes';
import type { LucideIcon } from 'lucide-react';
import {
  AlertTriangleIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  HelpCircleIcon,
  ImageIcon,
  ListIcon,
  PlayCircleIcon,
  RadarIcon,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import type { ComponentProps } from 'react';

type LocaleHref = ComponentProps<typeof LocaleLink>['href'];

export type ResourceGuideSection = {
  title: string;
  body: string;
};

export type ResourceGuideCopy = {
  eyebrow: string;
  title: string;
  description: string;
  publishedAt?: string;
  updatedAt?: string;
  checkedAt?: string;
  quickLabel: string;
  quickAnswer: string;
  fieldNotesTitle?: string;
  fieldNotes?: ResourceGuideSection[];
  routeChecklistTitle?: string;
  routeChecklist?: string[];
  contentsLabel: string;
  routeTitle: string;
  routeSteps: ResourceGuideSection[];
  tableTitle: string;
  tableHeaders: [string, string];
  tableRows: Array<[string, string]>;
  visualTitle?: string;
  visualItems?: Array<{
    label: string;
    value: string;
    note: string;
  }>;
  cautionTitle: string;
  cautionBody: string;
  faqTitle: string;
  faqs: ResourceGuideSection[];
  readNextTitle: string;
  related: Array<{
    href: LocaleHref;
    label: string;
  }>;
  sourcesTitle: string;
  sourceBody: string;
  cardKicker: string;
  cardBody: string;
  cardTypeLabel: string;
  cardTypeValue: string;
  cardVerifiedLabel: string;
  cardStatusLabel: string;
  cardStatusValue: string;
};

type LocalizedResourceGuidePageProps = {
  locale: Locale;
  pathname: Routes;
  icon: LucideIcon;
  copy: ResourceGuideCopy;
  sources: Array<{
    href: string;
    label: string;
  }>;
};

const DEFAULT_CONTENT_DATE = '2026-05-23';
const DEFAULT_GUIDE_IMAGE = '/abyss/chibi-deep-sea-hero.webp';

const guideImageByPathname: Partial<Record<Routes, string>> = {
  [Routes.Subnautica2Beginner]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2Resources]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2ResourceChecklist]: '/abyss/chibi-resource-checklist.webp',
  [Routes.Subnautica2Silver]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2SilverIngot]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2Copper]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2CopperIngot]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2BasicBattery]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2BatteryTerminal]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2Vehicles]: '/abyss/chibi-vehicle-route.webp',
  [Routes.Subnautica2Tadpole]: '/abyss/chibi-vehicle-route.webp',
  [Routes.Subnautica2TadpoleParkingAfterHotfix3]:
    '/abyss/chibi-vehicle-route.webp',
  [Routes.Subnautica2TadpoleDock]: '/abyss/chibi-vehicle-route.webp',
  [Routes.Subnautica2TadpoleDepthModule]: '/abyss/chibi-vehicle-route.webp',
  [Routes.Subnautica2VehicleFabricator]: '/abyss/chibi-vehicle-route.webp',
  [Routes.Subnautica2Moonpool]: '/abyss/chibi-vehicle-route.webp',
  [Routes.Subnautica2InsufficientSpaceToDock]:
    '/abyss/chibi-vehicle-route.webp',
  [Routes.Subnautica2CreaturesLeviathans]: '/abyss/chibi-creature-risk.webp',
  [Routes.Subnautica2HammerheadAfterHotfix3]:
    '/abyss/chibi-hammerhead-flare.webp',
  [Routes.Subnautica2FlaresAfterHotfix3]: '/abyss/chibi-hammerhead-flare.webp',
  [Routes.Subnautica2NibblersMarrowbreachAfterHotfix3]:
    '/abyss/chibi-creature-hotfix3.webp',
  [Routes.Subnautica2StrikeArmorStackingAfterHotfix3]:
    '/abyss/chibi-strike-armor-hotfix3.webp',
  [Routes.Subnautica2StartupCrashAfterHotfix3]:
    '/abyss/chibi-startup-crash-hotfix3.webp',
  [Routes.Subnautica2CreatureEnamel]: '/abyss/chibi-creature-risk.webp',
  [Routes.Subnautica2AcidicRaionPouch]: '/abyss/chibi-creature-risk.webp',
  [Routes.Subnautica2NecroleiCyst]: '/abyss/chibi-creature-risk.webp',
  [Routes.Subnautica2BaseLocationTierList]: '/abyss/chibi-base-location.webp',
  [Routes.Subnautica2BaseBuilding]: '/abyss/chibi-base-location.webp',
  [Routes.Subnautica2BestBaseLocations]: '/abyss/chibi-base-location.webp',
  [Routes.Subnautica2HabitatBuilder]: '/abyss/chibi-base-location.webp',
  [Routes.Subnautica2InteriorWallCostAfterHotfix3]:
    '/abyss/chibi-base-location.webp',
  [Routes.Subnautica2Map]: '/abyss/chibi-map-exploration.webp',
  [Routes.Subnautica2InteractiveMap]: '/abyss/chibi-map-exploration.webp',
  [Routes.Subnautica2Biomes]: '/abyss/chibi-map-exploration.webp',
  [Routes.Subnautica2MapSizeBiomes]: '/abyss/chibi-map-exploration.webp',
  [Routes.Subnautica2MildAcid]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2Processor]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2Biolab]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2Fabricator]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2EchoLocation]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2ModificationStation]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2EngineEfficiency]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2CopperWire]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2Titanium]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2TitaniumIngot]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2AirTank]: '/abyss/chibi-oxygen-depth.webp',
  [Routes.Subnautica2OxygenDepth]: '/abyss/chibi-oxygen-depth.webp',
  [Routes.Subnautica2BasicFins]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2ImprovedFins]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2Wakemaker]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2AdvancedBattery]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2KarakorumPowerPlant]: '/abyss/chibi-base-location.webp',
  [Routes.Subnautica2PowerPlantObservatory]: '/abyss/chibi-base-location.webp',
  [Routes.Subnautica2PowerCell]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2Rebreather]: '/abyss/chibi-oxygen-depth.webp',
  [Routes.Subnautica2ScannerStation]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2Beacon]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2RepairTool]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2Sulfur]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2Quartz]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2Glass]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2Lithium]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2PlasteelIngot]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2Lead]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2GermaniumIngot]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2Gold]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2GoldIngot]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2EntangledPowerCell]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2Salt]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2MetalSalvage]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2Scanner]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2SystemChip]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2WiringKit]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2AdvancedWiringKit]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2BioscannerBiomods]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2SonicResonator]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2AxumVision]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2ConduitCrystal]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2HeatTolerance]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2AngelComb]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2BloomBiofilm]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2FeedbackResonator]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2Celestine]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2EnameledGlass]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2Strontium]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2StrongAcid]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2FiberMesh]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2Rubber]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2Troilite]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2Atacamite]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2Mangalloy]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2MetalFarm]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2MineralizedClinker]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2TroiliteSoftlock]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2Crafting]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2Coop]: '/abyss/chibi-coop-signal.webp',
  [Routes.Subnautica2CoopPlayerCount]: '/abyss/chibi-coop-signal.webp',
  [Routes.Subnautica2DedicatedServer]: '/abyss/chibi-dedicated-server.webp',
  [Routes.Subnautica2SplitScreenCoop]: '/abyss/chibi-split-screen-coop.webp',
  [Routes.Subnautica2Crossplay]: '/abyss/chibi-coop-signal.webp',
  [Routes.Subnautica2MultiplayerNotWorking]: '/abyss/chibi-coop-signal.webp',
  [Routes.Subnautica2FriendCode]: '/abyss/chibi-friend-code.webp',
  [Routes.Subnautica2ServerStatus]: '/abyss/chibi-server-status.webp',
  [Routes.Subnautica2InviteNotWorking]: '/abyss/chibi-invite-not-working.webp',
  [Routes.Subnautica2OnlineServicesConnectionFailed]:
    '/abyss/chibi-online-services-timeout.webp',
  [Routes.Subnautica2MultiplayerLagDesync]:
    '/abyss/chibi-multiplayer-lag-desync.webp',
  [Routes.Subnautica2ControllerNotWorking]:
    '/abyss/chibi-controller-not-working.webp',
  [Routes.Subnautica2CoopRejoinAfterHotfix3]: '/abyss/chibi-coop-rejoin.webp',
  [Routes.Subnautica2Updates]: '/abyss/chibi-update-console.webp',
  [Routes.Subnautica2LawsuitResponse]: '/abyss/chibi-legal-briefing.webp',
  [Routes.Subnautica2ReleaseDate]: '/abyss/chibi-platform-briefing.webp',
  [Routes.Subnautica2Ps5ReleaseDate]: '/abyss/chibi-platform-briefing.webp',
  [Routes.Subnautica2Switch2ReleaseDate]:
    '/abyss/chibi-switch-2-release-date.webp',
  [Routes.Subnautica2MacReleaseDate]: '/abyss/chibi-mac-release-date.webp',
  [Routes.Subnautica2OfflineMode]: '/abyss/chibi-offline-mode.webp',
  [Routes.Subnautica2Price]: '/abyss/chibi-price-check.webp',
  [Routes.Subnautica2FreeDownload]: '/abyss/chibi-safe-download.webp',
  [Routes.Subnautica2Cheats]: '/abyss/chibi-cheat-risk.webp',
  [Routes.Subnautica2Mods]: '/abyss/chibi-mods-safe-setup.webp',
  [Routes.Subnautica2VrSupport]: '/abyss/chibi-vr-comfort.webp',
  [Routes.Subnautica2XboxGamePass]: '/abyss/chibi-platform-briefing.webp',
  [Routes.Subnautica2XboxCloudGaming]: '/abyss/chibi-xbox-cloud-gaming.webp',
  [Routes.Subnautica2SystemRequirements]: '/abyss/chibi-platform-briefing.webp',
  [Routes.Subnautica2SteamDeckSettings]:
    '/abyss/chibi-steam-deck-settings.webp',
  [Routes.Subnautica2BlackScreenFreezing]:
    '/abyss/chibi-black-screen-freezing.webp',
  [Routes.Subnautica2BestSettingsLowFps]:
    '/abyss/chibi-best-settings-low-fps.webp',
  [Routes.Subnautica2NotLaunching]: '/abyss/chibi-not-launching.webp',
  [Routes.Subnautica2GamePassInstallError]:
    '/abyss/chibi-game-pass-install.webp',
  [Routes.Subnautica2StuckLoadingSave]: '/abyss/chibi-stuck-loading-save.webp',
  [Routes.Subnautica2SteamDownloadStuck]:
    '/abyss/chibi-steam-download-stuck.webp',
  [Routes.Subnautica2SteamCloudSave]: '/abyss/chibi-steam-cloud-save.webp',
  [Routes.Subnautica2VoiceChat]: '/abyss/chibi-voice-chat-roadmap.webp',
  [Routes.Subnautica2Sprint]: '/abyss/chibi-sprint-roadmap.webp',
  [Routes.Subnautica2SaveFileLocation]: '/abyss/chibi-save-backup-guide.webp',
  [Routes.Subnautica2SaveRecoveryCloudSync]:
    '/abyss/chibi-save-recovery-cloud-sync.webp',
  [Routes.Subnautica2DlssSettingsAfterHotfix3]:
    '/abyss/chibi-platform-briefing.webp',
  [Routes.Subnautica2EarlyAccessWorthIt]: '/abyss/chibi-platform-briefing.webp',
  [Routes.Subnautica2Hotfix2]: '/abyss/chibi-update-console.webp',
  [Routes.Subnautica2Hotfix3]: '/abyss/chibi-update-console.webp',
  [Routes.Subnautica2SilverAfterHotfix2]: '/abyss/chibi-update-console.webp',
  [Routes.Subnautica2TroiliteAfterHotfix2]: '/abyss/chibi-update-console.webp',
};

type MediaCopy = {
  title: string;
  imageTitle: string;
  imageBody: string;
  imageSource: string;
  videoTitle: string;
  videoBody: string;
  videoSource: string;
};

const mediaCopy: Record<string, MediaCopy> = {
  en: {
    title: 'Visual notes and source media',
    imageTitle: 'Original route art',
    imageBody:
      'Abyss Guides uses original chibi deep-sea art for page visuals instead of copying wiki screenshots or fan uploads.',
    imageSource: 'Source: Abyss Guides original artwork',
    videoTitle: 'Official Subnautica 2 gameplay trailer',
    videoBody:
      'Use the trailer for mood, vehicles, and biome context. Do not treat trailer scenes as exact farming coordinates.',
    videoSource: 'Source: Official Subnautica YouTube embed',
  },
  zh: {
    title: '图文笔记和视频来源',
    imageTitle: '本站原创路线图',
    imageBody:
      'Abyss Guides 的页面视觉会优先用原创 Q 版深海图，不直接搬运 Wiki 截图或玩家上传图片。',
    imageSource: '来源：Abyss Guides 原创图片',
    videoTitle: 'Subnautica 2 官方实机预告',
    videoBody:
      '视频适合用来看氛围、载具和生态区感觉，不要把预告片画面当成精确采集坐标。',
    videoSource: '来源：Subnautica 官方 YouTube 嵌入视频',
  },
  ja: {
    title: '画像メモと動画ソース',
    imageTitle: 'Abyss Guidesのオリジナル画像',
    imageBody:
      'Abyss Guidesでは、Wiki画像やユーザー投稿をコピーせず、オリジナルのちび深海アートを使います。',
    imageSource: '出典: Abyss Guides オリジナル画像',
    videoTitle: 'Subnautica 2 公式ゲームプレイトレーラー',
    videoBody:
      '雰囲気、乗り物、バイオームを見るための動画です。採集ポイントの正確な座標としては扱いません。',
    videoSource: '出典: Subnautica公式YouTube埋め込み',
  },
  de: {
    title: 'Bildnotizen und Quellen',
    imageTitle: 'Originale Routengrafik',
    imageBody:
      'Abyss Guides nutzt eigene Chibi-Tiefsee-Grafiken statt Wiki-Screenshots oder Fan-Uploads zu kopieren.',
    imageSource: 'Quelle: Originalgrafik von Abyss Guides',
    videoTitle: 'Offizieller Subnautica 2 Gameplay-Trailer',
    videoBody:
      'Das Video hilft bei Stimmung, Fahrzeugen und Biomen. Es ist keine Karte mit genauen Farm-Koordinaten.',
    videoSource: 'Quelle: Offizielles Subnautica-YouTube-Embed',
  },
  fr: {
    title: 'Notes visuelles et sources',
    imageTitle: 'Illustration originale',
    imageBody:
      'Abyss Guides utilise ses propres visuels chibi sous-marins au lieu de reprendre des captures de wiki ou des images de fans.',
    imageSource: 'Source : illustration originale Abyss Guides',
    videoTitle: 'Bande-annonce officielle de gameplay de Subnautica 2',
    videoBody:
      'La vidéo sert pour l’ambiance, les véhicules et les biomes. Elle ne remplace pas des coordonnées de collecte.',
    videoSource: 'Source : intégration YouTube officielle Subnautica',
  },
  'es-419': {
    title: 'Notas visuales y fuentes',
    imageTitle: 'Arte de ruta original',
    imageBody:
      'Abyss Guides usa arte chibi submarino propio en vez de copiar capturas de wikis o imágenes subidas por fans.',
    imageSource: 'Fuente: arte original de Abyss Guides',
    videoTitle: 'Tráiler oficial de gameplay de Subnautica 2',
    videoBody:
      'El video sirve para ver ambiente, vehículos y biomas. No lo uses como coordenadas exactas de farmeo.',
    videoSource: 'Fuente: inserción oficial de YouTube de Subnautica',
  },
  ko: {
    title: '이미지 메모와 출처',
    imageTitle: '오리지널 루트 아트',
    imageBody:
      'Abyss Guides는 위키 스크린샷이나 팬 업로드 이미지를 복사하지 않고 자체 제작한 귀여운 심해 이미지를 씁니다.',
    imageSource: '출처: Abyss Guides 오리지널 아트',
    videoTitle: 'Subnautica 2 공식 게임플레이 트레일러',
    videoBody:
      '영상은 분위기, 탈것, 생물군계 참고용입니다. 정확한 채집 좌표로 보지는 마세요.',
    videoSource: '출처: Subnautica 공식 YouTube 임베드',
  },
  'pt-BR': {
    title: 'Notas visuais e fontes',
    imageTitle: 'Arte original de rota',
    imageBody:
      'Abyss Guides usa arte chibi submarina própria, sem copiar capturas de wiki nem uploads de fãs.',
    imageSource: 'Fonte: arte original do Abyss Guides',
    videoTitle: 'Trailer oficial de gameplay de Subnautica 2',
    videoBody:
      'O vídeo ajuda com clima, veículos e biomas. Não use cenas do trailer como coordenadas exatas de farm.',
    videoSource: 'Fonte: incorporação oficial do YouTube de Subnautica',
  },
  ru: {
    title: 'Визуальные заметки и источники',
    imageTitle: 'Оригинальная схема маршрута',
    imageBody:
      'Abyss Guides использует собственную милую подводную графику, а не копирует скриншоты с вики или фанатские загрузки.',
    imageSource: 'Источник: оригинальная графика Abyss Guides',
    videoTitle: 'Официальный геймплейный трейлер Subnautica 2',
    videoBody:
      'Видео подходит для понимания атмосферы, транспорта и биомов. Это не точная карта точек фарма.',
    videoSource: 'Источник: официальный YouTube-ролик Subnautica',
  },
};

const localizedMediaCopy: Record<string, MediaCopy> = {
  ...mediaCopy,
  en: {
    title: 'Visual notes and source media',
    imageTitle: 'Original route art',
    imageBody:
      'Abyss Guides uses original chibi deep-sea art for page visuals instead of copying wiki screenshots or fan uploads.',
    imageSource: 'Source: Abyss Guides original artwork',
    videoTitle: 'Official Subnautica 2 gameplay trailer',
    videoBody:
      'Use the trailer for mood, vehicles, and biome context. Do not treat trailer scenes as exact farming coordinates.',
    videoSource: 'Source: Official Subnautica YouTube embed',
  },
  zh: {
    title: '图文笔记和来源媒体',
    imageTitle: '本站原创路线图',
    imageBody:
      'Abyss Guides 的页面优先使用原创 Q 版深海图，不直接搬运 Wiki 截图或玩家上传图片。',
    imageSource: '来源：Abyss Guides 原创图片',
    videoTitle: 'Subnautica 2 官方实机预告',
    videoBody:
      '视频适合用来看氛围、载具和生态区感觉。不要把预告片画面当成精确采集坐标。',
    videoSource: '来源：Subnautica 官方 YouTube 嵌入视频',
  },
  ja: {
    title: '画像メモと参照メディア',
    imageTitle: 'Abyss Guides のオリジナル画像',
    imageBody:
      'Abyss Guides では Wiki 画像やファン投稿をコピーせず、ページ用に作ったチビ風の深海アートを使っています。',
    imageSource: '出典: Abyss Guides オリジナル画像',
    videoTitle: 'Subnautica 2 公式ゲームプレイトレーラー',
    videoBody:
      '雰囲気、乗り物、バイオームを見るための動画です。採集ポイントの正確な座標としては扱わないでください。',
    videoSource: '出典: Subnautica 公式 YouTube 埋め込み',
  },
  de: {
    title: 'Bildnotizen und Quellen',
    imageTitle: 'Originale Routengrafik',
    imageBody:
      'Abyss Guides nutzt eigene Chibi-Tiefsee-Grafiken statt Wiki-Screenshots oder Fan-Uploads zu kopieren.',
    imageSource: 'Quelle: Originalgrafik von Abyss Guides',
    videoTitle: 'Offizieller Subnautica 2 Gameplay-Trailer',
    videoBody:
      'Das Video hilft bei Stimmung, Fahrzeugen und Biomen. Es ist keine Karte mit genauen Farm-Koordinaten.',
    videoSource: 'Quelle: Offizielles Subnautica-YouTube-Embed',
  },
  fr: {
    title: 'Notes visuelles et sources',
    imageTitle: 'Illustration originale',
    imageBody:
      'Abyss Guides utilise ses propres visuels chibi sous-marins au lieu de reprendre des captures de wiki ou des images de fans.',
    imageSource: 'Source : illustration originale Abyss Guides',
    videoTitle: 'Bande-annonce officielle de gameplay de Subnautica 2',
    videoBody:
      'La vidéo sert pour l’ambiance, les véhicules et les biomes. Elle ne remplace pas des coordonnées de collecte.',
    videoSource: 'Source : intégration YouTube officielle Subnautica',
  },
  'es-419': {
    title: 'Notas visuales y fuentes',
    imageTitle: 'Arte de ruta original',
    imageBody:
      'Abyss Guides usa arte chibi submarino propio en vez de copiar capturas de wikis o imágenes subidas por fans.',
    imageSource: 'Fuente: arte original de Abyss Guides',
    videoTitle: 'Tráiler oficial de gameplay de Subnautica 2',
    videoBody:
      'El video sirve para ver ambiente, vehículos y biomas. No lo uses como coordenadas exactas de farmeo.',
    videoSource: 'Fuente: inserción oficial de YouTube de Subnautica',
  },
  ko: {
    title: '이미지 메모와 출처 미디어',
    imageTitle: 'Abyss Guides 오리지널 경로 아트',
    imageBody:
      'Abyss Guides는 위키 스크린샷이나 팬 업로드를 복사하지 않고, 페이지용으로 만든 귀여운 심해 아트를 사용합니다.',
    imageSource: '출처: Abyss Guides 오리지널 이미지',
    videoTitle: 'Subnautica 2 공식 게임플레이 트레일러',
    videoBody:
      '분위기, 탈것, 바이옴 느낌을 확인하는 영상입니다. 트레일러 장면을 정확한 파밍 좌표로 보지는 마세요.',
    videoSource: '출처: Subnautica 공식 YouTube 임베드',
  },
  'pt-BR': {
    title: 'Notas visuais e fontes',
    imageTitle: 'Arte original de rota',
    imageBody:
      'Abyss Guides usa arte chibi submarina própria, sem copiar capturas de wiki nem uploads de fãs.',
    imageSource: 'Fonte: arte original do Abyss Guides',
    videoTitle: 'Trailer oficial de gameplay de Subnautica 2',
    videoBody:
      'O vídeo ajuda com clima, veículos e biomas. Não use cenas do trailer como coordenadas exatas de farm.',
    videoSource: 'Fonte: incorporação oficial do YouTube de Subnautica',
  },
  ru: {
    title: 'Визуальные заметки и источники',
    imageTitle: 'Оригинальная схема маршрута',
    imageBody:
      'Abyss Guides использует собственные чиби-иллюстрации глубин, а не копирует скриншоты из Wiki или фанатские загрузки.',
    imageSource: 'Источник: оригинальная иллюстрация Abyss Guides',
    videoTitle: 'Официальный геймплейный трейлер Subnautica 2',
    videoBody:
      'Видео полезно для атмосферы, транспорта и биомов. Не считайте кадры трейлера точными координатами фарма.',
    videoSource: 'Источник: официальный YouTube-ролик Subnautica',
  },
};

function formatGuideDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00.000Z`));
}

export function LocalizedResourceGuidePage({
  locale,
  pathname,
  icon: Icon,
  copy,
  sources,
}: LocalizedResourceGuidePageProps) {
  const baseUrl = getBaseUrl().replace(/\/$/, '');
  const pageUrl = getUrlWithLocale(pathname, locale).replace(/\/$/, '');
  const hubUrl = `${baseUrl}${getPathWithLocale(Routes.Subnautica2, locale)}`;
  const guideImage = guideImageByPathname[pathname] ?? DEFAULT_GUIDE_IMAGE;
  const guideImageUrl = `${baseUrl}${guideImage}`;
  const publishedAt = copy.publishedAt ?? DEFAULT_CONTENT_DATE;
  const updatedAt = copy.updatedAt ?? publishedAt;
  const checkedAt = copy.checkedAt ?? formatGuideDate(updatedAt, locale);
  const visualCopy = localizedMediaCopy[locale] ?? localizedMediaCopy.en;
  const showResourceChecklistCallout =
    pathname === Routes.Subnautica2Resources ||
    pathname === Routes.Subnautica2Crafting ||
    pathname === Routes.Subnautica2Beginner;
  const showUpdateAlert =
    pathname === Routes.Subnautica2Updates ||
    pathname === Routes.Subnautica2LawsuitResponse ||
    pathname === Routes.Subnautica2Hotfix2 ||
    pathname === Routes.Subnautica2Hotfix3;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: copy.title,
      description: copy.description,
      url: pageUrl,
      image: {
        '@id': `${pageUrl}#primaryimage`,
      },
      associatedMedia: [
        {
          '@id': `${pageUrl}#primaryimage`,
        },
        {
          '@id': `${pageUrl}#official-video`,
        },
      ],
      datePublished: publishedAt,
      dateModified: updatedAt,
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
    createAbyssImageObject({
      caption: visualCopy.imageTitle,
      imageUrl: guideImageUrl,
      locale,
      pageUrl,
    }),
    createAbyssVideoObject({
      description: visualCopy.videoBody,
      locale,
      name: visualCopy.videoTitle,
      pageUrl,
    }),
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
        name: faq.title,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.body,
        },
      })),
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#031314] text-[#dff8f0] [overflow-wrap:anywhere]">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <section className="relative overflow-hidden border-b border-cyan-200/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-right opacity-40"
          style={{
            backgroundImage: `url('${guideImage}')`,
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
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,12,18,.96)_0%,rgba(3,19,20,.86)_46%,rgba(3,19,20,.55)_74%,rgba(1,9,12,.74)_100%),radial-gradient(circle_at_18%_80%,rgba(240,139,79,.12),transparent_30%),linear-gradient(180deg,rgba(3,19,20,.16),rgba(1,9,12,.96))]"
        />
        <Container className="relative px-4 py-16 md:py-24">
          <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
            <div className="min-w-0 max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
                <Icon className="size-4" />
                {copy.eyebrow}
              </div>
              <h1 className="max-w-full break-words text-2xl font-semibold leading-tight text-[#e8fff9] sm:text-4xl md:text-6xl">
                {copy.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-[#a9c9c3] sm:text-lg sm:leading-8">
                {copy.description}
              </p>
            </div>
            <aside className="min-w-0 border border-cyan-200/20 bg-[#041d22]/88 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-cyan-200/15 pb-3 text-xs uppercase tracking-[0.18em] text-[#9fe6d4]">
                <span className="min-w-0 break-words">{copy.cardKicker}</span>
                <span>EA</span>
              </div>
              <div className="mt-5 flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center border border-cyan-200/20 bg-cyan-300/10">
                  <Icon className="size-6 text-[#78ead7]" />
                </div>
                <div className="min-w-0">
                  <p className="break-words text-sm font-semibold text-[#effffb]">
                    {copy.title}
                  </p>
                  <p className="mt-2 break-words text-sm leading-6 text-[#a9c9c3]">
                    {copy.cardBody}
                  </p>
                </div>
              </div>
              <div className="mt-5 grid gap-2 text-sm text-[#d1e8e2]">
                <div className="flex flex-col items-start gap-1 border border-cyan-200/10 bg-cyan-300/5 px-3 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                  <span className="min-w-0 break-words">
                    {copy.cardTypeLabel}
                  </span>
                  <span className="min-w-0 break-words text-[#78ead7] sm:text-right">
                    {copy.cardTypeValue}
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 border border-cyan-200/10 bg-cyan-300/5 px-3 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                  <span className="min-w-0 break-words">
                    {copy.cardVerifiedLabel}
                  </span>
                  <span className="min-w-0 break-words text-[#f08b4f] sm:text-right">
                    {checkedAt}
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 border border-cyan-200/10 bg-cyan-300/5 px-3 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                  <span className="min-w-0 break-words">
                    {copy.cardStatusLabel}
                  </span>
                  <span className="min-w-0 break-words text-[#78ead7] sm:text-right">
                    {copy.cardStatusValue}
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-12">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="min-w-0 space-y-8">
            <nav
              aria-label={copy.contentsLabel}
              className="border border-cyan-200/12 bg-[#071f23] p-5"
            >
              <div className="flex items-center gap-2 text-[#78ead7]">
                <ListIcon className="size-4" />
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em]">
                  {copy.contentsLabel}
                </h2>
              </div>
              <div className="mt-4 grid gap-2 md:grid-cols-2">
                {copy.routeSteps.map((section, index) => (
                  <a
                    className="flex min-w-0 items-center gap-2 border border-cyan-200/10 bg-cyan-300/5 px-3 py-2 text-sm text-[#d1e8e2] hover:border-cyan-200/30 hover:text-[#78ead7]"
                    href={`#route-step-${index + 1}`}
                    key={section.title}
                  >
                    <ChevronRightIcon className="size-4 shrink-0 text-[#f08b4f]" />
                    <span className="min-w-0 break-words">{section.title}</span>
                  </a>
                ))}
              </div>
            </nav>

            <section className="border border-cyan-200/15 bg-[#082226] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f08b4f]">
                {copy.quickLabel}
              </p>
              <p className="mt-4 text-base leading-7 text-[#d7eee8] sm:text-lg sm:leading-8">
                {copy.quickAnswer}
              </p>
            </section>

            {showResourceChecklistCallout ? (
              <AbyssResourceChecklistCallout locale={locale} />
            ) : null}

            {copy.fieldNotes?.length || copy.routeChecklist?.length ? (
              <section className="grid gap-4 md:grid-cols-[minmax(0,1fr)_280px]">
                {copy.fieldNotes?.length ? (
                  <section className="overflow-hidden border border-cyan-200/12 bg-[#071f23]">
                    <div
                      aria-hidden="true"
                      className="h-28 bg-cover bg-center opacity-80"
                      style={{
                        backgroundImage: `linear-gradient(90deg,rgba(3,19,20,.18),rgba(3,19,20,.88)),url('${guideImage}')`,
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
              <h2 className="text-2xl font-semibold text-[#effffb] sm:text-3xl">
                {visualCopy.title}
              </h2>
              <div className="mt-5 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
                <figure className="overflow-hidden border border-cyan-200/12 bg-[#071f23]">
                  <div
                    className="h-64 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(180deg,rgba(3,19,20,.08),rgba(3,19,20,.46)),url('${guideImage}')`,
                    }}
                  />
                  <figcaption className="border-t border-cyan-200/12 p-5">
                    <div className="flex items-center gap-2 text-[#78ead7]">
                      <ImageIcon className="size-4" />
                      <h3 className="font-semibold">{visualCopy.imageTitle}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                      {visualCopy.imageBody}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[#f08b4f]">
                      {visualCopy.imageSource}
                    </p>
                  </figcaption>
                </figure>

                <section className="overflow-hidden border border-cyan-200/12 bg-[#071f23]">
                  <div className="aspect-video bg-[#020b0d]">
                    <iframe
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      src={ABYSS_OFFICIAL_TRAILER_EMBED_URL}
                      title={visualCopy.videoTitle}
                    />
                  </div>
                  <div className="border-t border-cyan-200/12 p-5">
                    <div className="flex items-center gap-2 text-[#78ead7]">
                      <PlayCircleIcon className="size-4" />
                      <h3 className="font-semibold">{visualCopy.videoTitle}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                      {visualCopy.videoBody}
                    </p>
                    <a
                      className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f08b4f] hover:text-[#ffb27e]"
                      href={ABYSS_OFFICIAL_TRAILER_URL}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {visualCopy.videoSource}
                      <ExternalLinkIcon className="size-3.5" />
                    </a>
                  </div>
                </section>
              </div>
            </section>

            <AdsenseSlot
              className="my-2"
              slot={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ARTICLE_MID_SLOT}
            />

            <section>
              <h2 className="text-2xl font-semibold text-[#effffb] sm:text-3xl">
                {copy.routeTitle}
              </h2>
              <div className="mt-5 grid gap-4">
                {copy.routeSteps.map((section, index) => (
                  <section
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                    id={`route-step-${index + 1}`}
                    key={section.title}
                  >
                    <div className="flex min-w-0 items-center gap-2 text-[#78ead7]">
                      <RadarIcon className="size-4 shrink-0" />
                      <h3 className="min-w-0 break-words font-semibold">
                        {section.title}
                      </h3>
                    </div>
                    <p className="mt-3 leading-7 text-[#abc8c3]">
                      {section.body}
                    </p>
                  </section>
                ))}
              </div>
            </section>

            {copy.visualItems && copy.visualItems.length > 0 ? (
              <section>
                <h2 className="text-2xl font-semibold text-[#effffb] sm:text-3xl">
                  {copy.visualTitle}
                </h2>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {copy.visualItems.map((item, index) => (
                    <section
                      className="relative overflow-hidden border border-cyan-200/12 bg-[#071f23] p-5"
                      key={item.label}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-1 bg-[#123a40]"
                      >
                        <div
                          className="h-full bg-[#f08b4f]"
                          style={{
                            width: `${Math.min(100, (index + 1) * 33)}%`,
                          }}
                        />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#78ead7]">
                        {item.label}
                      </p>
                      <p className="mt-4 text-2xl font-semibold text-[#effffb]">
                        {item.value}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                        {item.note}
                      </p>
                    </section>
                  ))}
                </div>
              </section>
            ) : null}

            <section>
              <h2 className="text-2xl font-semibold text-[#effffb] sm:text-3xl">
                {copy.tableTitle}
              </h2>
              <div className="mt-5 overflow-x-auto border border-cyan-200/12">
                <table className="min-w-[520px] border-collapse bg-[#071f23] text-left text-sm sm:w-full sm:min-w-0">
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
                    {copy.tableRows.map(([use, why]) => (
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
                <AlertTriangleIcon className="size-6 shrink-0 text-[#f08b4f]" />
                <h2 className="text-2xl font-semibold text-[#effffb] sm:text-3xl">
                  {copy.cautionTitle}
                </h2>
              </div>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                {copy.cautionBody}
              </p>
            </section>

            {showUpdateAlert ? <AbyssUpdateAlertCard locale={locale} /> : null}

            <AdsenseSlot
              className="my-2"
              slot={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ARTICLE_BOTTOM_SLOT}
            />

            <section>
              <h2 className="text-2xl font-semibold text-[#effffb] sm:text-3xl">
                {copy.faqTitle}
              </h2>
              <div className="mt-5 grid gap-4">
                {copy.faqs.map((faq) => (
                  <section
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                    key={faq.title}
                  >
                    <div className="flex min-w-0 items-center gap-2 text-[#78ead7]">
                      <HelpCircleIcon className="size-4 shrink-0" />
                      <h3 className="min-w-0 break-words font-semibold">
                        {faq.title}
                      </h3>
                    </div>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{faq.body}</p>
                  </section>
                ))}
              </div>
            </section>
          </article>

          <aside className="min-w-0 space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="overflow-hidden border border-cyan-200/12 bg-[#071f23]">
              <div
                aria-hidden="true"
                className="h-40 bg-cover bg-right"
                style={{
                  backgroundImage: `url('${guideImage}')`,
                }}
              />
              <div className="border-t border-cyan-200/12 p-5">
                <Icon className="mb-4 size-6 text-[#f08b4f]" />
                <h2 className="text-lg font-semibold text-[#effffb]">
                  {copy.sourcesTitle}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                  {copy.sourceBody}
                </p>
                <div className="mt-4 grid gap-2 text-sm">
                  {sources.map((source) => (
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
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                {copy.readNextTitle}
              </h2>
              <div className="mt-4 grid gap-3 text-sm">
                {copy.related.map((item) => (
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
          </aside>
        </div>
      </Container>
    </main>
  );
}
