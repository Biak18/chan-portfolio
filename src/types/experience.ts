export type ExperienceType = "professional" | "learning";

export type ExperienceEntry = {
  id: string;
  type: ExperienceType;
  title: string;
  organization: string;
  period: string; // e.g. "2023 — Present"
  description: string;
  tech?: string[];
    highlights?: string[];
};