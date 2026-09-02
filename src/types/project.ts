export type Project = {
  slug: string;
  title: string;
  summary: string;
  overview: string;
  thumbnail: string;
  screenshots?: string[];
  demoVideoUrl?: string;
  techStack: string[];
  keyFeatures?: string[];
  architecture: string;
  challenges: string;
  lessonsLearned: string;
  githubUrl?: string;
  liveUrl?: string;
  androidDownloadUrl?: string;
  featured?: boolean;
};
