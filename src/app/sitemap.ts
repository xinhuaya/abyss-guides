import { websiteConfig } from '@/config/website';
import { getLocalePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { generateHreflangUrls } from '@/lib/hreflang';
import { getReadyLocalesForPathname } from '@/lib/localized-routes';
import { blogSource, categorySource, source } from '@/lib/source';
import { Routes } from '@/routes';
import type { MetadataRoute } from 'next';
import type { Locale } from 'next-intl';
import { getBaseUrl } from '@/lib/urls';

type Href = Parameters<typeof getLocalePathname>[0]['href'];

/**
 * static routes for sitemap, you may change the routes for your own
 */
const staticRoutes = [
  Routes.Root,
  Routes.Subnautica2,
  Routes.Subnautica2Beginner,
  Routes.Subnautica2Resources,
  Routes.Subnautica2Silver,
  Routes.Subnautica2Copper,
  Routes.Subnautica2BasicBattery,
  Routes.Subnautica2AcidicRaionPouch,
  Routes.Subnautica2MildAcid,
  Routes.Subnautica2Processor,
  Routes.Subnautica2Biolab,
  Routes.Subnautica2EchoLocation,
  Routes.Subnautica2ModificationStation,
  Routes.Subnautica2EngineEfficiency,
  Routes.Subnautica2CopperWire,
  Routes.Subnautica2HabitatBuilder,
  Routes.Subnautica2TitaniumIngot,
  Routes.Subnautica2AirTank,
  Routes.Subnautica2OxygenDepth,
  Routes.Subnautica2Wakemaker,
  Routes.Subnautica2Rebreather,
  Routes.Subnautica2ScannerStation,
  Routes.Subnautica2Beacon,
  Routes.Subnautica2RepairTool,
  Routes.Subnautica2Sulfur,
  Routes.Subnautica2Quartz,
  Routes.Subnautica2Scanner,
  Routes.Subnautica2SystemChip,
  Routes.Subnautica2WiringKit,
  Routes.Subnautica2BioscannerBiomods,
  Routes.Subnautica2SonicResonator,
  Routes.Subnautica2ConduitCrystal,
  Routes.Subnautica2FeedbackResonator,
  Routes.Subnautica2Celestine,
  Routes.Subnautica2CreatureEnamel,
  Routes.Subnautica2EnameledGlass,
  Routes.Subnautica2Strontium,
  Routes.Subnautica2StrongAcid,
  Routes.Subnautica2FiberMesh,
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
  Routes.Subnautica2Coop,
  Routes.Subnautica2Updates,
  Routes.Subnautica2Hotfix2,
  Routes.Subnautica2SilverAfterHotfix2,
  Routes.Subnautica2TroiliteAfterHotfix2,
  Routes.About,
  Routes.Contact,
  Routes.AffiliateDisclosure,
  Routes.PrivacyPolicy,
  Routes.TermsOfService,
  Routes.CookiePolicy,
  ...(websiteConfig.blog.enable ? ['/blog'] : []),
  ...(websiteConfig.docs.enable ? ['/docs'] : []),
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
        alternates: {
          languages: generateHreflangUrls(route),
        },
      }));
    })
  );

  // add blog related routes if enabled
  if (websiteConfig.blog.enable) {
    // add paginated blog list pages
    routing.locales.forEach((locale) => {
      const posts = blogSource
        .getPages(locale)
        .filter((post) => post.data.published);
      const totalPages = Math.max(
        1,
        Math.ceil(posts.length / websiteConfig.blog.paginationSize)
      );
      // /blog/page/[page] (from 2)
      for (let page = 2; page <= totalPages; page++) {
        sitemapList.push({
          url: getUrl(`/blog/page/${page}`, locale),
          alternates: {
            languages: generateHreflangUrls(`/blog/page/${page}`),
          },
        });
      }
    });

    // add paginated category pages
    routing.locales.forEach((locale) => {
      const localeCategories = categorySource.getPages(locale);
      localeCategories.forEach((category) => {
        // posts in this category and locale
        const postsInCategory = blogSource
          .getPages(locale)
          .filter((post) => post.data.published)
          .filter((post) =>
            post.data.categories.some((cat) => cat === category.slugs[0])
          );
        const totalPages = Math.max(
          1,
          Math.ceil(postsInCategory.length / websiteConfig.blog.paginationSize)
        );
        // /blog/category/[slug] (first page)
        sitemapList.push({
          url: getUrl(`/blog/category/${category.slugs[0]}`, locale),
          alternates: {
            languages: generateHreflangUrls(
              `/blog/category/${category.slugs[0]}`
            ),
          },
        });
        // /blog/category/[slug]/page/[page] (from 2)
        for (let page = 2; page <= totalPages; page++) {
          sitemapList.push({
            url: getUrl(
              `/blog/category/${category.slugs[0]}/page/${page}`,
              locale
            ),
            alternates: {
              languages: generateHreflangUrls(
                `/blog/category/${category.slugs[0]}/page/${page}`
              ),
            },
          });
        }
      });
    });

    // add posts (single post pages)
    routing.locales.forEach((locale) => {
      const posts = blogSource
        .getPages(locale)
        .filter((post) => post.data.published);
      posts.forEach((post) => {
        sitemapList.push({
          url: getUrl(`/blog/${post.slugs.join('/')}`, locale),
          alternates: {
            languages: generateHreflangUrls(`/blog/${post.slugs.join('/')}`),
          },
        });
      });
    });
  }

  // add docs related routes if enabled
  if (websiteConfig.docs.enable) {
    const docsParams = source.generateParams();
    sitemapList.push(
      ...docsParams.flatMap((param) =>
        routing.locales.map((locale) => ({
          url: getUrl(`/docs/${param.slug.join('/')}`, locale),
          alternates: {
            languages: generateHreflangUrls(`/docs/${param.slug.join('/')}`),
          },
        }))
      )
    );
  }

  return sitemapList;
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getLocalePathname({ locale, href });
  return getBaseUrl() + pathname;
}
