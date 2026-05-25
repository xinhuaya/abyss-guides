/**
 * The routes for the application
 */
export enum Routes {
  Root = '/',

  // marketing pages
  FAQ = '/#faqs',
  Features = '/#features',
  Subnautica2 = '/games/subnautica-2',
  Subnautica2Beginner = '/games/subnautica-2/beginner-guide',
  Subnautica2Resources = '/games/subnautica-2/resources',
  Subnautica2Silver = '/games/subnautica-2/silver',
  Subnautica2Copper = '/games/subnautica-2/copper',
  Subnautica2BasicBattery = '/games/subnautica-2/basic-battery',
  Subnautica2AcidicRaionPouch = '/games/subnautica-2/acidic-raion-pouch',
  Subnautica2MildAcid = '/games/subnautica-2/mild-acid',
  Subnautica2Processor = '/games/subnautica-2/processor',
  Subnautica2CopperWire = '/games/subnautica-2/copper-wire',
  Subnautica2HabitatBuilder = '/games/subnautica-2/habitat-builder',
  Subnautica2TitaniumIngot = '/games/subnautica-2/titanium-ingot',
  Subnautica2AirTank = '/games/subnautica-2/air-tank',
  Subnautica2OxygenDepth = '/games/subnautica-2/oxygen-depth',
  Subnautica2Scanner = '/games/subnautica-2/scanner',
  Subnautica2SystemChip = '/games/subnautica-2/system-chip',
  Subnautica2WiringKit = '/games/subnautica-2/wiring-kit',
  Subnautica2BioscannerBiomods = '/games/subnautica-2/bioscanner-biomods',
  Subnautica2SonicResonator = '/games/subnautica-2/sonic-resonator',
  Subnautica2ConduitCrystal = '/games/subnautica-2/conduit-crystal',
  Subnautica2FeedbackResonator = '/games/subnautica-2/feedback-resonator',
  Subnautica2Celestine = '/games/subnautica-2/celestine',
  Subnautica2CreatureEnamel = '/games/subnautica-2/creature-enamel',
  Subnautica2EnameledGlass = '/games/subnautica-2/enameled-glass',
  Subnautica2Strontium = '/games/subnautica-2/strontium',
  Subnautica2StrongAcid = '/games/subnautica-2/strong-acid',
  Subnautica2Tadpole = '/games/subnautica-2/tadpole',
  Subnautica2TadpoleDepthModule = '/games/subnautica-2/tadpole-depth-module',
  Subnautica2BaseBuilding = '/games/subnautica-2/base-building',
  Subnautica2BestBaseLocations = '/games/subnautica-2/best-base-locations',
  Subnautica2Biomes = '/games/subnautica-2/biomes',
  Subnautica2Troilite = '/games/subnautica-2/troilite',
  Subnautica2Atacamite = '/games/subnautica-2/atacamite',
  Subnautica2Mangalloy = '/games/subnautica-2/mangalloy-ingot',
  Subnautica2MetalFarm = '/games/subnautica-2/metal-farm',
  Subnautica2MineralizedClinker = '/games/subnautica-2/mineralized-clinker',
  Subnautica2TroiliteSoftlock = '/games/subnautica-2/troilite-softlock',
  Subnautica2Crafting = '/games/subnautica-2/crafting',
  Subnautica2Map = '/games/subnautica-2/map',
  Subnautica2Coop = '/games/subnautica-2/co-op-guide',
  Subnautica2Updates = '/games/subnautica-2/roadmap',
  Subnautica2Hotfix2 = '/games/subnautica-2/hotfix-2',
  Subnautica2SilverAfterHotfix2 = '/games/subnautica-2/silver-after-hotfix-2',
  Subnautica2TroiliteAfterHotfix2 = '/games/subnautica-2/troilite-after-hotfix-2',
  ThumbnailMaker = '/tools/youtube-thumbnail-maker',
  ThumbnailMakerAnchor = '/#thumbnail-maker',
  Inspiration = '/#inspiration',
  Pricing = '/pricing',
  Blog = '/blog',
  Docs = '/docs',
  Ai = '/ai',
  About = '/about',
  Contact = '/contact',
  Waitlist = '/waitlist',
  Changelog = '/changelog',
  Roadmap = '/roadmap',
  CookiePolicy = '/cookie',
  AffiliateDisclosure = '/affiliate-disclosure',
  PrivacyPolicy = '/privacy',
  TermsOfService = '/terms',

  // auth routes
  Login = '/auth/login',
  Register = '/auth/register',
  AuthError = '/auth/error',
  ForgotPassword = '/auth/forgot-password',
  ResetPassword = '/auth/reset-password',

  // dashboard routes
  Dashboard = '/dashboard',

  // admin routes
  AdminUsers = '/admin/users',

  // settings routes
  SettingsProfile = '/settings/profile',
  SettingsBilling = '/settings/billing',
  SettingsCredits = '/settings/credits',
  SettingsSecurity = '/settings/security',
  SettingsNotifications = '/settings/notifications',
  SettingsApiKeys = '/settings/apikeys',

  // payment processing
  Payment = '/payment',
}

/**
 * The routes that can not be accessed by logged in users
 */
export const routesNotAllowedByLoggedInUsers = [Routes.Login, Routes.Register];

/**
 * The routes that are protected and require authentication
 */
export const protectedRoutes = [
  Routes.Dashboard,
  Routes.AdminUsers,
  Routes.SettingsProfile,
  Routes.SettingsBilling,
  Routes.SettingsCredits,
  Routes.SettingsSecurity,
  Routes.SettingsNotifications,
  Routes.SettingsApiKeys,
  Routes.Payment,
];

/**
 * The default redirect path after logging in
 */
export const DEFAULT_LOGIN_REDIRECT = Routes.Subnautica2;
