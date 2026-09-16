import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "city-youth-contact",
    title: "City Youth Contact",
    summary: "Offline-first contact directory for a local youth community.",
    overview:
      "An offline-first contact directory storing phone, birthday, and address info for a local youth community. Works fully offline via SQLite and syncs with Supabase, with birthday reminders delivered through Supabase Edge Functions and Firebase Cloud Messaging push notifications.",
    thumbnail:
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788665949/ccc.png",
    techStack: [
      "React Native",
      "Expo",
      "Supabase",
      "SQLite",
      "Supabase Edge Functions",
      "Firebase Cloud Messaging",
    ],
    architecture:
      "Built on a local-first SQLite mirror for zero-latency reads and offline writes with dirty-flag tracking (`synced = 0`). Sync runs bidirectionally on connectivity restore and app focus, using a 3-second `Promise.race` safety timeout to prevent hanging UI spinners in spotty network zones. Scheduled push notifications run via Supabase `pg_cron` hitting Edge Functions, with a daily `net.http_get` ping to prevent free-tier project auto-pausing.",
    challenges:
      "Handling real-world edge cases in production: persistent background FCM process kills on China ROMs (HyperOS / Turbo 4) requiring custom autostart prompts, Android bottom-sheet snap point glitches, edge function time zone misalignment for Myanmar (UTC+6:30), and silent push notification drops caused by stale device tokens after switching EAS build profiles.",
    lessonsLearned:
      "Software isn’t built for pristine test suites. it’s built for real people on unpredictable devices and unstable networks. From battery-saver OS rules to time zone offsets, the hardest bugs never showed up in the emulator. Designing local-first taught me that true reliability comes from building software that respects the user's connection, not software that demands it.",
    githubUrl: "https://github.com/Biak18/City-Youth-Contacts", // private repo — no public URL provided
    liveUrl: undefined,
    androidDownloadUrl:
      "https://github.com/Biak18/City-Youth-Contacts/releases/download/v1.0.1/CityYouth.apk",
    screenshots: [
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788665949/CYSampleDark.jpg",
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788665949/CYSampleLight.jpg",
    ],
  },
  {
    slug: "enotes",
    title: "ENOTES",
    summary:
      "Enterprise ERP system with a WinForms front end and Supabase backend.",
    overview:
      "An ERP system built as a desktop application, handles core business operations with a WinForms front end and Supabase as the backend. Currently in active development.",
    thumbnail:
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788666046/enotes.png",
    techStack: [
      "C#",
      ".NET Framework",
      "WinForms",
      "Devexpress",
      "Devexpress Xtra Report",
      "Supabase",
    ],
    architecture:
      "Built as an MDI (Multiple Document Interface) desktop application in WinForms on .NET, intentionally paired with Supabase as a cloud backend. This retains the familiar high-density MDI workflow of enterprise Windows software while replacing legacy on-prem SQL Servers with modern managed Postgres, REST, and real-time triggers.",
    challenges:
      "Bridging classic synchronous WinForms GDI+ rendering with modern asynchronous cloud queries. Managing user sessions, multi-currency views, and data sync across nested MDI child forms without causing UI thread freezes or memory leaks.",
    lessonsLearned:
      "Enterprise tools don't have to feel like relics of the past. Combining classic desktop UI paradigms with cloud-native backends proved that old-school desktop patterns can still offer unparalleled speed and ergonomics when engineered with modern principles.",
    githubUrl: "https://github.com/Biak18/ENOTES",
    liveUrl: undefined,
    featured: true,
  },
  // {
  //   slug: "shadowolio",
  //   title: "Shadowolio",
  //   summary: "A neubrutalist-tactile design system for React Native.",
  //   overview:
  //     "A neubrutalist-tactile design system for React Native, hard offset shadows, press-to-sink buttons, and recessed inputs that all react like physical objects instead of flat UI.",
  //   thumbnail:
  //     "https://res.cloudinary.com/g3jhqsca/image/upload/v1788666045/shadow.jpg",
  //   techStack: ["React Native", "Reanimated", "Zustand", "Expo"],
  //   architecture:
  //     "A tactile component system powered by React Native Reanimated spring physics and custom transform calculations. It bypasses platform-inconsistent native shadow engines by mathematically rendering hard offset paths and dynamic coordinate translations, backed by Zustand for elevation and state control.",
  //   challenges:
  //     "Achieving pixel-perfect cross-platform consistency where Android's native shadow engine falls short of hard offset control, while sustaining smooth 60+ FPS spring animations during fast press interactions on lower-end mobile hardware.",
  //   lessonsLearned:
  //     "Great interfaces do more than display content  they give digital interactions physical weight. Creating Shadowolio taught me that delightful UI lives in micro-interactions, where small physics-driven details turn everyday screen taps into satisfying tactile moments.",
  //   githubUrl: "https://github.com/Biak18/shadow",
  //   liveUrl: undefined,
  //   featured: true,
  //   androidDownloadUrl: "https://github.com/Biak18/shadow/releases/download/v1.0.0/shadowolio.apk",
  // },
  {
    slug: "stockflow",
    title: "StockFlow",
    summary:
      "Production-oriented inventory management app for small businesses, with offline sync, team workspaces, and multi-tenant data isolation.",
    overview:
      "A React Native (Expo) inventory app for small businesses to manage products, stock movements, categories, and suppliers. It supports multi-tenant organizations with role-based access, offline-first workflows with a SQLite sync queue, barcode scanning, low-stock notifications, and team invites — designed as a real product architecture rather than a tutorial demo.",
    thumbnail:
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788666159/sf-android-icon-foreground.png", // TODO: add
    screenshots: [
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788666157/sf_login.jpg",
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788666162/sf_signup.jpg",
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788666163/sf_dashboard.jpg",
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788666164/sf_products.jpg",
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788666160/sf_stock.jpg",
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788666158/sf_settings.jpg",
    ], // TODO: add
    techStack: [
      "React Native",
      "Expo SDK 56",
      "Expo Router",
      "TypeScript",
      "Supabase",
      "PostgreSQL + RLS",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Expo SQLite",
      "Expo Notifications",
      "Reanimated",
      "FlashList",
    ],
    keyFeatures: [
      "Multi-tenant organizations with Postgres Row Level Security",
      "Team invites (email via Edge Function + Resend), members, and roles (Owner / Admin / Member)",
      "Offline-first products and stock movements with SQLite + sync queue (including queued image uploads)",
      "Barcode scanning for product lookup and create-with-prefill",
      "Stock in / out / adjust with movement history",
      "Dashboard metrics, low-stock alerts (local + remote push), and CSV reports",
    ],
    architecture:
      "Feature-based architecture organized by domain (auth, products, inventory, categories, suppliers, team) rather than by file type. The UI talks to repository/service interfaces that target Supabase online and fall back to Expo SQLite offline, enqueueing writes for automatic flush when connectivity returns. Multi-tenancy is enforced in the database: business tables are scoped by organization_id, membership is tracked in organization_members, and access is controlled with RLS helpers plus SECURITY DEFINER RPCs for privileged flows (create organization, accept invite, update/remove members). Auth routing uses a boot gate and Expo Router Protected screens so session and workspace resolution complete before the main tree mounts.",
    challenges:
      "Offline sync and RLS were the hardest areas. Early product sync failed when local-only fields such as local_image_uri were sent to Supabase (PostgREST schema cache errors), which required stripping device-only columns before upsert and keeping image uploads as separate queue jobs. RLS policies that subquery organization_members from within organization_members caused infinite recursion; the fix was SECURITY DEFINER helpers (is_org_member / is_org_admin) used by policies instead of recursive SELECTs. Auth also flashed create-organization during login until membership resolution was gated behind isResolvingOrg and Protected routes instead of competing useEffect redirects.",
    lessonsLearned:
      "Building StockFlow deepened practical experience with Supabase RLS and secure multi-tenant design — scoping data by organization, role-based access, and privileged RPCs without exposing the service role in the client. It also reinforced offline-first mobile patterns (SQLite cache, sync queue, conflict handling on unique constraints), Expo production concerns (dev clients, FCM / google-services, Edge Functions), and maintainable React Native structure with clear repository boundaries and predictable auth boot flow.",
    githubUrl: "https://github.com/Biak18/StockFlow",
    liveUrl: undefined, // not yet published per your own roadmap
    androidDownloadUrl: undefined, // not yet published per your own roadmap
    featured: true,
  },
  {
    slug: "brewly",
    title: "Brewly",
    summary:
      "A coffee ordering app for Myanmar where customers can order, sellers run their shop and drivers handle delivery. Built with Expo and Supabase.",
    overview: `I built Brewly because I wanted a real app that covers a full ordering flow, not just a menu demo. Customers can browse shops, customize drinks and choose pickup or delivery. Sellers manage their store, menu options and promotions. Drivers can become a driver, go online and get assigned to orders.

It is a single Expo app that connects to Supabase for auth, database and realtime. I focused a lot on small details like precise delivery with MapLink pins, chat that switches from shop to driver after assignment, and forms that feel modern with floating labels. There is also an internal dev switcher so I can test all three roles on one phone without logging out again and again.`,

    thumbnail:
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788665619/android-icon-foreground.png",
    //https://res.cloudinary.com/g3jhqsca/image/upload/v1788665619/docs_home.jpg
    screenshots: [
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788665619/docs_home.jpg",
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788665619/docs_home2.jpg",
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788665619/docs_shopdetails.jpg",
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788665619/docs_store.jpg",
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788665619/docs_order_tracking.jpg",
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788665619/docs_orderchat.jpg",
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788665619/docs_deliveries.jpg",
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788665619/docs_profiles.jpg",
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1788665619/docs_notifications.jpg",
    ],
    demoVideoUrl:
      "https://res.cloudinary.com/g3jhqsca/video/upload/v1788665623/brewly-demo.mp4",
    techStack: [
      "Expo SDK 57",
      "React Native",
      "Expo Router",
      "TypeScript",
      "Supabase",
      "Postgres",
      "Realtime",
      "Zustand",
      "TanStack Query",
      "react hook form",
      "zod",
      "react native reanimated",
      "i18n",
    ],

    keyFeatures: [
      "Order for pickup or delivery with delivery fee, promos and loyalty stamps",
      "Address book where customers can paste a Google Maps link or use current location as a pin",
      "Driver flow to go online, get assigned and update order from ready to delivered",
      "Open in Google Maps uses exact coordinates when available",
      "Realtime chat per order that works for customer, seller and driver",
      "Manual payment with KBZPay and MMQR proof plus cash option",
      "Modern forms with floating labels that run on the UI thread",
      "Push notifications for order updates",
    ],

    architecture: `The app uses Expo Router under src/app. The tab bar is in src/app/tabs and the driver stack is in src/app/driver. Business logic is in src/features by domain and shared Supabase calls are in src/services. Global state is kept in Zustand stores and server data in TanStack Query. UI primitives like FieldInput and IconButton live in src/components/ui and design tokens in src/theme. The database, row level security and remote functions are in supabase/migrations.`,

    challenges: `The hardest part was chat for drivers. At first drivers could not send messages because the database policy only allowed the buyer and the shop owner. I had to update the policy to also allow the assigned driver.

Delivery was also tricky. In the beginning the address was only text, so the driver could not navigate precisely. I added lat and lng to the address and to the order and updated the map helper to prefer coordinates.

Forms were another issue. The old inputs only used placeholder which looked outdated and left a ghost text after focus. I built a new FieldInput that uses reanimated to float the label on the UI thread.`,

    lessonsLearned: `I learned to keep security in the database instead of trying to fix it in the UI. I also learned that small polish like headers, empty states and the input animation matters a lot for how finished an app feels. Working with three roles in one app taught me how to clear caches cleanly when switching accounts and why it is better to let sign in replace the session instead of signing out first.`,

    githubUrl: "https://github.com/Biak18/Brewly",
    liveUrl: "",
    androidDownloadUrl:
      "https://github.com/Biak18/Brewly/releases/download/v1.0.0/Brewly.apk",
    featured: true,
  },
  {
    slug: "lune",
    title: "LUNE: Premium Dress Boutique",
    summary:
      "A premium mobile boutique for discovering and shopping dresses, with variant level inventory, wishlist, checkout, order tracking, loyalty, an AI stylist, and an in app admin console.",
    overview:
      "LUNE is a customer facing fashion ecommerce app built with React Native, Expo 57, and TypeScript, backed by Supabase (Postgres, Auth, Storage) plus an ASP.NET DressShop API. Shoppers browse a variant aware catalog (size and color drive real inventory), save favorites to a wishlist, check out with server verified pricing, and track orders through a full status state machine, with shipping addresses, loyalty rewards, and a Gemini powered style assistant plus a deterministic Style Finder on top. An admin persona manages products, low stock inventory, and orders from inside the same app, protected by Supabase RLS rather than client side checks. The UI follows a strict atelier system: Newsreader serif, paper and ink palette with one clay accent, hairlines over cards, and motion that honors reduce motion everywhere.",
    thumbnail:
      "https://res.cloudinary.com/g3jhqsca/image/upload/v1789529262/android-icon-foreground.png",
    techStack: [
      "Expo 57",
      "React Native",
      "TypeScript",
      "Expo Router",
      "Supabase (Postgres, Auth, Storage)",
      "ASP.NET Web API",
      "TanStack Query",
      "Zustand",
      "Shopify FlashList",
      "Reanimated",
      "Lottie",
      "React Hook Form + Zod",
      "EAS Build / Updates",
    ],
    keyFeatures: [
      "Variant based catalog (color/size inventory, filters, search, pagination)",
      "Wishlist with optimistic add to bag",
      "Cart with server verified pricing and stock checks",
      "Checkout with addresses, order snapshots, and status tracking",
      "Loyalty points, tiers, and rewards",
      "AI fashion assistant (Gemini) and deterministic Style Finder",
      "Admin console for products, inventory, and order fulfillment",
      "Branded loading, empty, and error states on every screen",
    ],
    architecture:
      "File based Expo Router screens stay thin and delegate to feature slices organized as services, hooks, and components. All server state lives in TanStack Query with targeted invalidation; Zustand holds only ephemeral UI state like filters. Every route renders through one shared Screen shell (single safe area inset), one LoadingState, and one skeleton family, all styled from centralized color, spacing, and typography tokens. Orders persist price and variant snapshots so history never depends on live catalog data.",
    challenges:
      "Modeling inventory per variant instead of per product without leaking complexity into the UI; taming inconsistent top spacing across 25 routes by converging on a single Screen component; getting keyboard behavior right for both a chat input and long address forms; keeping Lottie animations working on native with a clean web fallback; and enforcing admin authorization in RLS and database functions instead of trusting the client.",
    lessonsLearned:
      "One shared screen shell eliminates a whole class of spacing bugs. Skeletons matched to each layout feel faster than any spinner. Strictly separating server state (TanStack Query) from client state (Zustand) keeps data flow predictable as features grow. Writing product, architecture, and UI rules down as living docs keeps every change consistent. Designing loading, empty, and error states up front, plus reduce motion and accessibility labels from day one, is cheaper than retrofitting them.",
    githubUrl: "https://github.com/Biak18/Lune",
    featured: true,
  },
];
