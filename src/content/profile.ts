/**
 * Language-independent facts. Anything that needs translating lives in the
 * dictionaries, keyed by the same ids used here.
 */

export const siteUrl = "https://raniery.dev";

export const profile = {
  name: "Raniery Meireles Goulart",
  firstName: "Raniery",
  lastName: "Meireles Goulart",
  shortName: "Raniery Goulart",
  email: "raniery2003@hotmail.com",
  /** Short stack summary shown on the Open Graph image. */
  focusStack: ["Java", "Go", "Spring Boot", "Kubernetes"],
  /** `id` doubles as the icon name. */
  social: [
    { id: "github", label: "GitHub", href: "https://github.com/Ranieeery" },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ranierygoulart",
    },
  ],
  cv: {
    pt: "/cv/raniery-goulart-cv-pt.pdf",
    en: "/cv/raniery-goulart-cv-en.pdf",
  },
} as const;

/** Year-month strings ("YYYY-MM"); `null` means ongoing. */
export type Period = { start: string; end: string | null };

export const experience = [
  {
    id: "engineering",
    period: { start: "2025-03", end: null },
    stack: [
      "Go",
      "Docker",
      "Kubernetes",
      "Kong",
      "gRPC",
      "REST APIs",
      "JSON",
      "Grafana",
      "Kibana/Elastic",
      "CI/CD",
      "GitLab",
      "Redis",
      "Python",
      "Java",
      "Oracle",
      "GCP",
      "Linux",
      "Scrum",
    ],
  },
  {
    id: "empresa1",
    period: { start: "2023-08", end: "2025-03" },
    stack: [
      "Java",
      "Spring Framework",
      "Hibernate",
      "AngularJS",
      "JavaScript",
      "Oracle",
      "SQL",
      "Maven",
      "Liquibase",
      "Wildfly",
      "Scrum",
      "C++",
    ],
  },
] as const satisfies readonly {
  id: string;
  period: Period;
  stack: readonly string[];
}[];

export const projects = [
  {
    id: "shoppingCart",
    name: "Shopping-cart-service",
    repo: "https://github.com/Ranieeery/shopping-cart-service",
    stack: [
      "Java",
      "Spring Boot 3",
      "Spring Data",
      "Hibernate",
      "MongoDB",
      "Redis",
      "OpenFeign",
      "Lombok",
      "Docker",
      "Swagger",
    ],
  },
  {
    id: "quickEvent",
    name: "QuickEvent",
    repo: "https://github.com/Ranieeery/QuickEvent",
    stack: [
      "Java",
      "Spring Boot 3",
      "Spring Data JPA",
      "PostgreSQL",
      "Flyway",
      "Validation",
      "Docker",
      "Clean Architecture",
      "SOLID",
    ],
  },
  {
    id: "mnemo",
    name: "Mnemo",
    repo: "https://github.com/Ranieeery/mnemo",
    stack: [
      "Rust",
      "Tauri",
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "TanStack Router",
      "TanStack Query",
      "Zustand",
      "Vitest",
      "Bun",
      "SQLite",
    ],
  },
  {
    id: "medicalClinic",
    name: null,
    repo: "https://github.com/Ranieeery/medical-clinic-api-with-spring",
    stack: [
      "Java",
      "Spring Boot 3",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "Flyway",
      "Lombok",
      "JUnit",
      "Mockito",
      "Swagger",
      "JWT",
    ],
  },
  {
    id: "chatbot",
    name: "E-commerce Chatbot",
    repo: "https://github.com/Ranieeery/ecommerce-chatbot",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Webflux",
      "Thymeleaf",
      "JavaScript",
      "jQuery",
      "OpenAI API",
    ],
  },
  {
    id: "habits",
    name: null,
    repo: "https://github.com/Ranieeery/Habits-tracker",
    stack: [
      "Node.js",
      "Fastify",
      "Prisma",
      "SQLite",
      "Swagger",
      "React",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "React Native",
      "Expo",
    ],
  },
] as const satisfies readonly {
  id: string;
  /** Proper name shared by both languages; `null` when it is translated. */
  name: string | null;
  repo: string;
  stack: readonly string[];
}[];

export const skills = [
  {
    id: "languages",
    items: ["Java", "Go", "JavaScript", "TypeScript", "Python", "SQL", "Shell"],
  },
  {
    id: "backend",
    items: [
      "Spring Boot",
      "Spring Data JPA",
      "Spring Webflux",
      "Spring Security (JWT)",
      "Hibernate",
      "Node.js",
    ],
  },
  {
    id: "databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "SQLite",
      "H2",
      "MongoDB",
      "Redis",
    ],
  },
  {
    id: "devops",
    items: [
      "Docker",
      "Kubernetes",
      "Kong (API Gateway)",
      "Git",
      "GitHub Actions",
      "GitLab",
      "Maven",
      "CI/CD",
      "GCP",
      "AWS",
    ],
  },
  { id: "messaging", items: ["RabbitMQ", "Apache Kafka"] },
  {
    id: "frontend",
    items: ["Next.js", "React", "AngularJS", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: "tools",
    items: [
      "JUnit",
      "Mockito",
      "Testcontainers",
      "Flyway",
      "Liquibase",
      "Swagger",
      "Jest",
      "Linux",
      "Grafana",
      "Elastic",
    ],
  },
] as const satisfies readonly { id: string; items: readonly string[] }[];

export const education = [
  {
    id: "postgrad",
    institution: "Uniamérica Descomplica",
    period: { start: "2026-03", end: "2027-03" },
    inProgress: true,
  },
  {
    id: "bachelor",
    institution: "Uniamérica Descomplica",
    period: { start: "2023-01", end: "2026-03" },
    inProgress: false,
  },
  {
    id: "technical",
    institution: "CEFET-MG",
    period: { start: "2018-02", end: "2021-03" },
    inProgress: false,
  },
] as const satisfies readonly {
  id: string;
  institution: string;
  period: Period;
  inProgress: boolean;
}[];

/** Certificate titles that are proper names and stay the same in both languages. */
export const certificates = [
  "Oracle Cloud Infrastructure Foundations Associate (1Z0-1085-25)",
  "AWS Academy Cloud Architecting",
  "AWS Academy Cloud Foundations",
  "Oracle Next Education F2 T4 Back-end",
  "Formação Python, Data Science no OCI e Oracle Analytics",
  "EF SET English Certificate (B2 Upper Intermediate)",
  "Java Foundations",
  "ChatGPT Prompt Engineering for Developers",
] as const;

export type ExperienceId = (typeof experience)[number]["id"];
export type ProjectId = (typeof projects)[number]["id"];
export type SkillGroupId = (typeof skills)[number]["id"];
export type EducationId = (typeof education)[number]["id"];
