import type { ExperienceEntry } from "../types/experience";

export const experience: ExperienceEntry[] = [
  {
    id: "g2sysnet-fullstack",
    type: "professional",
    title: "Junior Full Stack Developer",
    organization: "G2SysNet",
    period: "Dec 2021 ~ Feb 2025",
    description:
      "Developed and maintained enterprise ERP solutions. Analyzed business requirements and translated them into functional system designs, workflows, and business logic including working with stored procedures exceeding 1,000 lines in complex reporting and inventory logic.",
    tech: ["C#", ".NET Framework", "WinForms", ".NET6", ".NET MAUI", "SQL Server"],
    highlights: [
      "Inventory Management",
      "Sales Management",
      "Purchase Management",
      "Production Management",
      "Quality Control (QC)",
      "User & Role Management",
      "Reporting & Operational Workflows",
    ],
  },
  {
    id: "g2sysnet-pm",
    type: "professional",
    title: "Project Manager",
    organization: "G2SysNet",
    period: "Feb 2025 ~ Aug 2025",
    description:
      "Took on project management responsibilities during G2SysNet's migration of its ERP system from WinForms to a React-based web application, working hands-on with React.js as part of that transition.",
    tech: ["React", "JavaScript"],
  },
  {
    id: "independent",
    type: "professional",
    title: "Independent Software Developer",
    organization: "Freelance / Client Projects",
    period: "Aug 2025 ~ Present",
    description:
      "Building ENOTES, a personal ERP system in C#, WinForms, and Supabase. Since December 2025, shifted primary focus to cross-platform mobile development with React Native and Expo, including client work on a private inventory and sales application.",
    tech: ["React Native", "Expo", "Supabase", "C#", "WinForms"],
  },
];