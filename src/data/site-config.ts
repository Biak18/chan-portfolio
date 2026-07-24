export const siteConfig = {
  name: "Chan Toe Whan",
  role: "Software Developer",
  tagline:
    "I build cross-platform mobile apps with React Native and Expo — focused on clean architecture and interactions that feel as good as they work.",
    footerTagline: "Building mobile apps with React Native, Expo & Supabase.",
  currentFocus: "Currently building with React Native, Expo & Supabase",
  links: {
    resume: "https://drive.google.com/file/d/1D0JAUehLQLB9zTDrkeU_oKQ4DYRyfu5S/view?usp=drivesdk", // TODO: drop your actual PDF into /public
    github: "https://github.com/Biak18",
     linkedin: "https://www.linkedin.com/in/chan-0b65b926a",
    telegram: "https://t.me/BiakThanCeu",
    facebook: "https://www.facebook.com/share/18t8B3cnKU",
    email: "biakceu912@gmail.com",
  },
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

import { GithubIcon, LinkedinIcon, TelegramIcon, FacebookIcon } from "../components/ui/icons";

export const socials = [
  {
    label: "GitHub",
    href: siteConfig.links.github,
    Icon: GithubIcon,
    brand: "#181717",
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    Icon: LinkedinIcon,
    brand: "#0A66C2",
  },
  {
    label: "Telegram",
    href: siteConfig.links.telegram,
    Icon: TelegramIcon,
    brand: "#26A5E4",
  },
  {
    label: "Facebook",
    href: siteConfig.links.facebook,
    Icon: FacebookIcon,
    brand: "#1877F2",
  },
]  as const;;