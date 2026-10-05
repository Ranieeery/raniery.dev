import type {
  EducationId,
  ExperienceId,
  ProjectId,
  SkillGroupId,
} from "@/content/profile";

/** Shape every locale dictionary must implement; `pt` and `en` are typed against it. */
export type Dictionary = {
  meta: { title: string; description: string; ogAlt: string };
  a11y: {
    skipToContent: string;
    homeLink: string;
    primaryNav: string;
    openMenu: string;
    closeMenu: string;
    switchToDark: string;
    switchToLight: string;
    opensInNewTab: string;
    backToTop: string;
  };
  common: { present: string; stackLabel: string; downloadCv: string };
  language: { switchLabel: string; short: string };
  nav: Record<
    "about" | "experience" | "projects" | "skills" | "education" | "contact",
    string
  >;
  hero: {
    role: string;
    headline: string;
    location: string;
    current: string;
    ctaContact: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  experience: {
    title: string;
    items: Record<
      ExperienceId,
      { role: string; company: string; location: string; highlights: string[] }
    >;
  };
  projects: {
    title: string;
    intro: string;
    repo: string;
    items: Record<ProjectId, { name?: string; summary: string }>;
  };
  skills: { title: string; groups: Record<SkillGroupId, string> };
  education: {
    title: string;
    inProgress: string;
    items: Record<EducationId, { degree: string }>;
    certificatesTitle: string;
    certificates: string[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
  };
  contact: {
    title: string;
    lead: string;
    emailLabel: string;
  };
  footer: { note: string };
};
