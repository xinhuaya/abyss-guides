import { getLocalePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { generateHreflangUrls } from '@/lib/hreflang';
import { getReadyLocalesForPathname } from '@/lib/localized-routes';
import { Routes } from '@/routes';
import type { MetadataRoute } from 'next';
import type { Locale } from 'next-intl';
import { getBaseUrl } from '@/lib/urls';

type Href = Parameters<typeof getLocalePathname>[0]['href'];

const SUBNAUTICA_LAST_MODIFIED = new Date('2026-06-02');

/**
 * static routes for sitemap, you may change the routes for your own
 */
const staticRoutes = [
  Routes.Root,
  Routes.Subnautica2,
  Routes.Subnautica2Beginner,
  Routes.Subnautica2Resources,
  Routes.Subnautica2Silver,
  Routes.Subnautica2SilverIngot,
  Routes.Subnautica2Copper,
  Routes.Subnautica2CopperIngot,
  Routes.Subnautica2BasicBattery,
  Routes.Subnautica2BatteryTerminal,
  Routes.Subnautica2AcidicRaionPouch,
  Routes.Subnautica2NecroleiCyst,
  Routes.Subnautica2MildAcid,
  Routes.Subnautica2Processor,
  Routes.Subnautica2Biolab,
  Routes.Subnautica2Fabricator,
  Routes.Subnautica2EchoLocation,
  Routes.Subnautica2ModificationStation,
  Routes.Subnautica2EngineEfficiency,
  Routes.Subnautica2CopperWire,
  Routes.Subnautica2HabitatBuilder,
  Routes.Subnautica2Titanium,
  Routes.Subnautica2TitaniumIngot,
  Routes.Subnautica2AirTank,
  Routes.Subnautica2OxygenDepth,
  Routes.Subnautica2BasicFins,
  Routes.Subnautica2ImprovedFins,
  Routes.Subnautica2Wakemaker,
  Routes.Subnautica2AdvancedBattery,
  Routes.Subnautica2KarakorumPowerPlant,
  Routes.Subnautica2PowerPlantObservatory,
  Routes.Subnautica2PowerCell,
  Routes.Subnautica2VehicleFabricator,
  Routes.Subnautica2TadpoleDock,
  Routes.Subnautica2Moonpool,
  Routes.Subnautica2InsufficientSpaceToDock,
  Routes.Subnautica2Rebreather,
  Routes.Subnautica2ScannerStation,
  Routes.Subnautica2Beacon,
  Routes.Subnautica2RepairTool,
  Routes.Subnautica2Sulfur,
  Routes.Subnautica2Quartz,
  Routes.Subnautica2Glass,
  Routes.Subnautica2Lithium,
  Routes.Subnautica2PlasteelIngot,
  Routes.Subnautica2Lead,
  Routes.Subnautica2GermaniumIngot,
  Routes.Subnautica2Gold,
  Routes.Subnautica2GoldIngot,
  Routes.Subnautica2EntangledPowerCell,
  Routes.Subnautica2Salt,
  Routes.Subnautica2MetalSalvage,
  Routes.Subnautica2Scanner,
  Routes.Subnautica2SystemChip,
  Routes.Subnautica2WiringKit,
  Routes.Subnautica2AdvancedWiringKit,
  Routes.Subnautica2BioscannerBiomods,
  Routes.Subnautica2SonicResonator,
  Routes.Subnautica2AxumVision,
  Routes.Subnautica2ConduitCrystal,
  Routes.Subnautica2HeatTolerance,
  Routes.Subnautica2AngelComb,
  Routes.Subnautica2BloomBiofilm,
  Routes.Subnautica2FeedbackResonator,
  Routes.Subnautica2Celestine,
  Routes.Subnautica2CreatureEnamel,
  Routes.Subnautica2EnameledGlass,
  Routes.Subnautica2Strontium,
  Routes.Subnautica2StrongAcid,
  Routes.Subnautica2FiberMesh,
  Routes.Subnautica2Rubber,
  Routes.Subnautica2Tadpole,
  Routes.Subnautica2TadpoleDepthModule,
  Routes.Subnautica2BaseBuilding,
  Routes.Subnautica2BestBaseLocations,
  Routes.Subnautica2Biomes,
  Routes.Subnautica2Troilite,
  Routes.Subnautica2Atacamite,
  Routes.Subnautica2Mangalloy,
  Routes.Subnautica2MetalFarm,
  Routes.Subnautica2MineralizedClinker,
  Routes.Subnautica2TroiliteSoftlock,
  Routes.Subnautica2Crafting,
  Routes.Subnautica2Map,
  Routes.Subnautica2InteractiveMap,
  Routes.Subnautica2Vehicles,
  Routes.Subnautica2CreaturesLeviathans,
  Routes.Subnautica2BaseLocationTierList,
  Routes.Subnautica2Coop,
  Routes.Subnautica2CoopPlayerCount,
  Routes.Subnautica2Crossplay,
  Routes.Subnautica2MultiplayerNotWorking,
  Routes.Subnautica2CoopRejoinAfterHotfix3,
  Routes.Subnautica2InteriorWallCostAfterHotfix3,
  Routes.Subnautica2Updates,
  Routes.Subnautica2ReleaseDate,
  Routes.Subnautica2Ps5ReleaseDate,
  Routes.Subnautica2XboxGamePass,
  Routes.Subnautica2SystemRequirements,
  Routes.Subnautica2EarlyAccessWorthIt,
  Routes.Subnautica2MapSizeBiomes,
  Routes.Subnautica2Hotfix2,
  Routes.Subnautica2Hotfix3,
  Routes.Subnautica2TadpoleParkingAfterHotfix3,
  Routes.Subnautica2DlssSettingsAfterHotfix3,
  Routes.Subnautica2HammerheadAfterHotfix3,
  Routes.Subnautica2FlaresAfterHotfix3,
  Routes.Subnautica2SilverAfterHotfix2,
  Routes.Subnautica2TroiliteAfterHotfix2,
  Routes.About,
  Routes.Contact,
  Routes.AffiliateDisclosure,
  Routes.PrivacyPolicy,
  Routes.TermsOfService,
  Routes.CookiePolicy,
];

/**
 * Generate a sitemap for the website with hreflang support
 *
 * https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps
 * https://github.com/javayhu/cnblocks/blob/main/app/sitemap.ts
 * https://ahrefs.com/blog/hreflang-tags/
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapList: MetadataRoute.Sitemap = []; // final result

  // add static routes
  sitemapList.push(
    ...staticRoutes.flatMap((route) => {
      return getReadyLocalesForPathname(String(route)).map((locale) => ({
        url: getUrl(route, locale),
        lastModified: SUBNAUTICA_LAST_MODIFIED,
        changeFrequency: getChangeFrequency(route),
        priority: getPriority(route),
        alternates: {
          languages: generateHreflangUrls(route),
        },
      }));
    })
  );

  return sitemapList;
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getLocalePathname({ locale, href });
  return getBaseUrl() + pathname;
}

function getChangeFrequency(
  route: (typeof staticRoutes)[number]
): MetadataRoute.Sitemap[number]['changeFrequency'] {
  if (
    route === Routes.Root ||
    route === Routes.Subnautica2 ||
    route === Routes.Subnautica2Updates ||
    route === Routes.Subnautica2Hotfix2 ||
    route === Routes.Subnautica2Hotfix3 ||
    route === Routes.Subnautica2TadpoleParkingAfterHotfix3 ||
    route === Routes.Subnautica2DlssSettingsAfterHotfix3 ||
    route === Routes.Subnautica2HammerheadAfterHotfix3 ||
    route === Routes.Subnautica2FlaresAfterHotfix3 ||
    route === Routes.Subnautica2CoopRejoinAfterHotfix3 ||
    route === Routes.Subnautica2InteriorWallCostAfterHotfix3
  ) {
    return 'daily';
  }

  if (String(route).startsWith('/games/subnautica-2')) {
    return 'weekly';
  }

  return 'monthly';
}

function getPriority(route: (typeof staticRoutes)[number]) {
  if (route === Routes.Root) {
    return 1;
  }

  if (route === Routes.Subnautica2) {
    return 0.95;
  }

  if (
    route === Routes.Subnautica2Resources ||
    route === Routes.Subnautica2Beginner ||
    route === Routes.Subnautica2Crafting ||
    route === Routes.Subnautica2Updates
  ) {
    return 0.9;
  }

  if (String(route).startsWith('/games/subnautica-2')) {
    return 0.75;
  }

  return 0.35;
}
