import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "city-youth-contact",
    title: "City Youth Contact",
    summary: "Offline-first contact directory for a local youth community.",
    overview:
      "An offline-first contact directory storing phone, birthday, and address info for a local youth community. Works fully offline via SQLite and syncs with Supabase, with birthday reminders delivered through Supabase Edge Functions and Firebase Cloud Messaging push notifications.",
    thumbnail:
      "https://drtqywayjiarysxxbrci.supabase.co/storage/v1/object/public/project-images/ccc.jpg",
    techStack: ["React Native", "Expo", "Supabase", "SQLite", "Supabase Edge Functions", "Firebase Cloud Messaging"],
    architecture:
      "Built on a local-first SQLite mirror for zero-latency reads and offline writes with dirty-flag tracking (`synced = 0`). Sync runs bidirectionally on connectivity restore and app focus, using a 3-second `Promise.race` safety timeout to prevent hanging UI spinners in spotty network zones. Scheduled push notifications run via Supabase `pg_cron` hitting Edge Functions, with a daily `net.http_get` ping to prevent free-tier project auto-pausing.",
    challenges:
      "Handling real-world edge cases in production: persistent background FCM process kills on China ROMs (HyperOS / Turbo 4) requiring custom autostart prompts, Android bottom-sheet snap point glitches, edge function time zone misalignment for Myanmar (UTC+6:30), and silent push notification drops caused by stale device tokens after switching EAS build profiles.",
    lessonsLearned:
      "Software isn’t built for pristine test suites. it’s built for real people on unpredictable devices and unstable networks. From battery-saver OS rules to time zone offsets, the hardest bugs never showed up in the emulator. Designing local-first taught me that true reliability comes from building software that respects the user's connection, not software that demands it.",
    githubUrl: undefined, // private repo — no public URL provided
    liveUrl: undefined,
  },
  {
    slug: "enotes",
    title: "ENOTES",
    summary: "Enterprise ERP system with a WinForms front end and Supabase backend.",
    overview:
      "An ERP system built as a desktop application, handles core business operations with a WinForms front end and Supabase as the backend. Currently in active development.",
    thumbnail:
      "https://drtqywayjiarysxxbrci.supabase.co/storage/v1/object/public/project-images/enotes.png",
    techStack: ["C#", ".NET Framework", "WinForms", "Devexpress", "Devexpress Xtra Report", "Supabase"],
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
  {
    slug: "shadowolio",
    title: "Shadowolio",
    summary: "A neubrutalist-tactile design system for React Native.",
    overview:
      "A neubrutalist-tactile design system for React Native, hard offset shadows, press-to-sink buttons, and recessed inputs that all react like physical objects instead of flat UI.",
    thumbnail:
      "https://drtqywayjiarysxxbrci.supabase.co/storage/v1/object/public/project-images/shadow.jpg",
    techStack: ["React Native", "Reanimated", "Zustand", "Expo"],
    architecture:
      "A tactile component system powered by React Native Reanimated spring physics and custom transform calculations. It bypasses platform-inconsistent native shadow engines by mathematically rendering hard offset paths and dynamic coordinate translations, backed by Zustand for elevation and state control.",
    challenges:
      "Achieving pixel-perfect cross-platform consistency where Android's native shadow engine falls short of hard offset control, while sustaining smooth 60+ FPS spring animations during fast press interactions on lower-end mobile hardware.",
    lessonsLearned:
      "Great interfaces do more than display content  they give digital interactions physical weight. Creating Shadowolio taught me that delightful UI lives in micro-interactions, where small physics-driven details turn everyday screen taps into satisfying tactile moments.",
    githubUrl: "https://github.com/Biak18/shadow",
    liveUrl: undefined,
    featured: true,
  },
];