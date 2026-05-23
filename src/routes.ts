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
  Subnautica2TitaniumIngot = '/games/subnautica-2/titanium-ingot',
  Subnautica2AirTank = '/games/subnautica-2/air-tank',
  Subnautica2Tadpole = '/games/subnautica-2/tadpole',
  Subnautica2Troilite = '/games/subnautica-2/troilite',
  Subnautica2Atacamite = '/games/subnautica-2/atacamite',
  Subnautica2Mangalloy = '/games/subnautica-2/mangalloy-ingot',
  Subnautica2MetalFarm = '/games/subnautica-2/metal-farm',
  Subnautica2Crafting = '/games/subnautica-2/crafting',
  Subnautica2Map = '/games/subnautica-2/map',
  Subnautica2Coop = '/games/subnautica-2/co-op-guide',
  Subnautica2Updates = '/games/subnautica-2/roadmap',
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
