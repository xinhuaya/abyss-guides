import { websiteConfig } from '@/config/website';
import { defaultMessages } from '@/i18n/messages';
import { Routes } from '@/routes';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { generateAlternates, getCurrentHreflang } from './hreflang';
import {
  getReadyLocalesForPathname,
  isRouteReadyForLocale,
} from './localized-routes';
import { getBaseUrl, getImageUrl, getUrlWithLocale } from './urls';

const abyssMetadataImageByPathname: Record<string, string> = {
  '': '/abyss/chibi-deep-sea-hero.webp',
  [Routes.Root]: '/abyss/chibi-deep-sea-hero.webp',
  [Routes.Subnautica2]: '/abyss/chibi-deep-sea-hero.webp',
  [Routes.Subnautica2Beginner]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2Resources]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2ResourceChecklist]: '/abyss/chibi-resource-checklist.webp',
  [Routes.Subnautica2Crafting]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2Map]: '/abyss/chibi-map-exploration.webp',
  [Routes.Subnautica2InteractiveMap]: '/abyss/chibi-map-exploration.webp',
  [Routes.Subnautica2Biomes]: '/abyss/chibi-map-exploration.webp',
  [Routes.Subnautica2MapSizeBiomes]: '/abyss/chibi-map-exploration.webp',
  [Routes.Subnautica2OxygenDepth]: '/abyss/chibi-oxygen-depth.webp',
  [Routes.Subnautica2AirTank]: '/abyss/chibi-oxygen-depth.webp',
  [Routes.Subnautica2Rebreather]: '/abyss/chibi-oxygen-depth.webp',
  [Routes.Subnautica2Coop]: '/abyss/chibi-coop-signal.webp',
  [Routes.Subnautica2CoopPlayerCount]: '/abyss/chibi-coop-signal.webp',
  [Routes.Subnautica2DedicatedServer]: '/abyss/chibi-dedicated-server.webp',
  [Routes.Subnautica2SplitScreenCoop]: '/abyss/chibi-split-screen-coop.webp',
  [Routes.Subnautica2Crossplay]: '/abyss/chibi-coop-signal.webp',
  [Routes.Subnautica2MultiplayerNotWorking]: '/abyss/chibi-coop-signal.webp',
  [Routes.Subnautica2MultiplayerLagDesync]:
    '/abyss/chibi-multiplayer-lag-desync.webp',
  [Routes.Subnautica2ControllerNotWorking]:
    '/abyss/chibi-controller-not-working.webp',
  [Routes.Subnautica2CoopRejoinAfterHotfix3]: '/abyss/chibi-coop-rejoin.webp',
  [Routes.Subnautica2Updates]: '/abyss/chibi-update-console.webp',
  [Routes.Subnautica2Hotfix2]: '/abyss/chibi-update-console.webp',
  [Routes.Subnautica2Hotfix3]: '/abyss/chibi-update-console.webp',
  [Routes.Subnautica2DlssSettingsAfterHotfix3]:
    '/abyss/chibi-platform-briefing.webp',
  [Routes.Subnautica2SilverAfterHotfix2]: '/abyss/chibi-update-console.webp',
  [Routes.Subnautica2TroiliteAfterHotfix2]: '/abyss/chibi-update-console.webp',
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
  [Routes.Subnautica2SystemRequirements]: '/abyss/chibi-platform-briefing.webp',
  [Routes.Subnautica2SteamDeckSettings]:
    '/abyss/chibi-steam-deck-settings.webp',
  [Routes.Subnautica2BlackScreenFreezing]:
    '/abyss/chibi-black-screen-freezing.webp',
  [Routes.Subnautica2BestSettingsLowFps]:
    '/abyss/chibi-best-settings-low-fps.webp',
  [Routes.Subnautica2SaveFileLocation]: '/abyss/chibi-save-backup-guide.webp',
  [Routes.Subnautica2SaveRecoveryCloudSync]:
    '/abyss/chibi-save-recovery-cloud-sync.webp',
  [Routes.Subnautica2EarlyAccessWorthIt]: '/abyss/chibi-platform-briefing.webp',
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
};

const resourceImageRoutes = [
  Routes.Subnautica2Silver,
  Routes.Subnautica2SilverIngot,
  Routes.Subnautica2Copper,
  Routes.Subnautica2CopperIngot,
  Routes.Subnautica2Titanium,
  Routes.Subnautica2TitaniumIngot,
  Routes.Subnautica2Sulfur,
  Routes.Subnautica2Quartz,
  Routes.Subnautica2Lithium,
  Routes.Subnautica2Lead,
  Routes.Subnautica2GermaniumIngot,
  Routes.Subnautica2Gold,
  Routes.Subnautica2GoldIngot,
  Routes.Subnautica2Salt,
  Routes.Subnautica2MetalSalvage,
  Routes.Subnautica2ConduitCrystal,
  Routes.Subnautica2AngelComb,
  Routes.Subnautica2BloomBiofilm,
  Routes.Subnautica2Celestine,
  Routes.Subnautica2Strontium,
  Routes.Subnautica2StrongAcid,
  Routes.Subnautica2MildAcid,
  Routes.Subnautica2FiberMesh,
  Routes.Subnautica2Rubber,
  Routes.Subnautica2Troilite,
  Routes.Subnautica2Atacamite,
  Routes.Subnautica2Mangalloy,
  Routes.Subnautica2MetalFarm,
  Routes.Subnautica2MineralizedClinker,
  Routes.Subnautica2TroiliteSoftlock,
];

const craftingImageRoutes = [
  Routes.Subnautica2BasicBattery,
  Routes.Subnautica2BatteryTerminal,
  Routes.Subnautica2Processor,
  Routes.Subnautica2Biolab,
  Routes.Subnautica2Fabricator,
  Routes.Subnautica2EchoLocation,
  Routes.Subnautica2ModificationStation,
  Routes.Subnautica2EngineEfficiency,
  Routes.Subnautica2CopperWire,
  Routes.Subnautica2BasicFins,
  Routes.Subnautica2ImprovedFins,
  Routes.Subnautica2Wakemaker,
  Routes.Subnautica2AdvancedBattery,
  Routes.Subnautica2PowerCell,
  Routes.Subnautica2ScannerStation,
  Routes.Subnautica2Beacon,
  Routes.Subnautica2RepairTool,
  Routes.Subnautica2Glass,
  Routes.Subnautica2PlasteelIngot,
  Routes.Subnautica2EntangledPowerCell,
  Routes.Subnautica2Scanner,
  Routes.Subnautica2SystemChip,
  Routes.Subnautica2WiringKit,
  Routes.Subnautica2AdvancedWiringKit,
  Routes.Subnautica2BioscannerBiomods,
  Routes.Subnautica2SonicResonator,
  Routes.Subnautica2AxumVision,
  Routes.Subnautica2HeatTolerance,
  Routes.Subnautica2FeedbackResonator,
  Routes.Subnautica2EnameledGlass,
];

for (const route of resourceImageRoutes) {
  abyssMetadataImageByPathname[route] = '/abyss/chibi-resource-scan.webp';
}

for (const route of craftingImageRoutes) {
  abyssMetadataImageByPathname[route] = '/abyss/chibi-crafting-bench.webp';
}

/**
 * Construct the metadata object for the current page (in docs/guides)
 */
export function constructMetadata({
  title,
  description,
  image,
  noIndex = false,
  locale,
  pathname,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  locale?: Locale;
  pathname?: string;
} = {}): Metadata {
  title = title || defaultMessages.Metadata.title;
  description = description || defaultMessages.Metadata.description;
  const inferredImage =
    pathname !== undefined ? abyssMetadataImageByPathname[pathname] : undefined;

  image = image || inferredImage || websiteConfig.metadata.images?.ogImage;
  const ogImageUrl = getImageUrl(image || '');

  // Generate canonical URL from pathname and locale
  const canonicalUrl = locale
    ? getUrlWithLocale(pathname || '', locale).replace(/\/$/, '')
    : undefined;
  const routeReadyForLocale =
    locale && pathname ? isRouteReadyForLocale(pathname, locale) : true;
  const hasLocaleAlternates =
    pathname && getReadyLocalesForPathname(pathname).length > 1;

  // Generate hreflang alternates if pathname is provided and we have multiple locales
  const alternates =
    pathname && hasLocaleAlternates
      ? {
          canonical: canonicalUrl,
          ...generateAlternates(pathname),
        }
      : canonicalUrl
        ? { canonical: canonicalUrl }
        : undefined;

  return {
    title,
    description,
    alternates,
    openGraph: {
      type: 'website',
      locale: locale ? getCurrentHreflang(locale).replace('-', '_') : 'en_US',
      url: canonicalUrl,
      title,
      description,
      siteName: defaultMessages.Metadata.name,
      images: [ogImageUrl.toString()],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl.toString()],
      site: getBaseUrl(),
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-32x32.png',
      apple: '/apple-touch-icon.png',
    },
    metadataBase: new URL(getBaseUrl()),
    manifest: `${getBaseUrl()}/manifest.webmanifest`,
    ...((noIndex || !routeReadyForLocale) && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
