import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    title: "Raniery Goulart — Backend Software Engineer",
    description:
      "Backend software engineer specializing in Java and Go. REST APIs, microservices, Kubernetes, Kong and messaging.",
    ogAlt: "Raniery Goulart, backend software engineer",
  },
  a11y: {
    skipToContent: "Skip to content",
    homeLink: "home",
    primaryNav: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchToDark: "Switch to dark theme",
    switchToLight: "Switch to light theme",
    opensInNewTab: "(opens in a new tab)",
    backToTop: "Back to top",
  },
  common: {
    present: "present",
    stackLabel: "Technologies",
    downloadCv: "Download Resume",
  },
  language: { switchLabel: "Ler esta página em português", short: "PT" },
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    role: "Backend Software Engineer",
    headline:
      "I build APIs and microservices in Go and Java, modernizing legacy systems and connecting services.",
    location: "Contagem, MG — Brazil",
    current: "Currently at Engineering",
    ctaContact: "Get in touch",
  },
  about: {
    title: "About",
    paragraphs: [
      "Backend software engineer specialized in Java and Go, with solid experience in frameworks such as Spring Boot, Hibernate, Spring Data JPA, and Spring Security (JWT).",
      "I have extensive experience building and integrating REST APIs, relational and NoSQL databases, and API gateways with Kong. I also have a working knowledge of messaging systems (RabbitMQ, Apache Kafka) and experience documenting APIs with OpenAPI and Swagger.",
      "Open to new opportunities where I can apply and expand my skills, contributing my experience in building robust, scalable, and efficient solutions.",
    ],
    facts: [
      { label: "Focus", value: "Backend · Java · Go" },
      { label: "Based in", value: "Contagem, Brazil" },
      { label: "Education", value: "Computer Science" },
      { label: "Languages", value: "Portuguese, English" },
    ],
  },
  experience: {
    title: "Experience",
    items: {
      engineering: {
        role: "Software Developer",
        company: "Engineering",
        location: "São Paulo, SP (Remote)",
        highlights: [
          "Developed REST APIs, orchestrators, and validation middlewares in Go, both for building new microservices and migrating legacy services.",
          "Migrated applications using Kubernetes for container orchestration and Kong as an API gateway to manage and secure traffic.",
          "Implemented Go templates and validation middlewares to structure and ensure data consistency in requests, increasing the reliability of communication between systems.",
          "Optimized the CI/CD pipeline through containerization with Docker and automated deployment pipelines in GitLab, increasing release speed and reliability.",
          "Integrated internal systems via gRPC, HTTP, and messaging, with dashboards in Grafana and Kibana/Elastic for monitoring and observability.",
          "Suggested process and system improvements, including Generative AI use cases, for one of the company's internal platforms, later implemented by the platform's technical leads.",
          "Troubleshot and resolved production incidents as part of an on-call rotation.",
        ],
      },
      empresa1: {
        role: "Software Development Intern",
        company: "Empresa 1",
        location: "Belo Horizonte, MG (Remote)",
        highlights: [
          "Collaborated on the migration of a legacy C++ application to the web using Spring Framework and AngularJS.",
          "Designed and optimized SQL queries for relational databases, reducing response time by 30%.",
          "Designed and implemented REST APIs with Spring and Hibernate, efficiently integrating internal systems.",
          "Automated builds with Maven and managed database migrations with Liquibase, ensuring consistent CI/CD.",
          "Worked in agile squads (Scrum), contributing to sprints, backlog refinement, and daily stand-ups for iterative, demand-driven deliveries.",
        ],
      },
    },
  },
  projects: {
    title: "Projects",
    intro:
      "A selection of personal projects — mostly backend services, with a few complete products.",
    repo: "Repository",
    items: {
      shoppingCart: {
        summary:
          "Shopping cart management microservice with MongoDB and Redis caching.",
      },
      quickEvent: {
        summary:
          "REST API for managing events, following Clean Architecture and SOLID principles.",
      },
      mnemo: {
        summary:
          "Installable desktop application to manage and organize the user's local video library, with AI-powered features.",
      },
      medicalClinic: {
        name: "Medical Clinic API",
        summary:
          "REST API for managing a medical clinic, developed with Spring Boot and MySQL.",
      },
      chatbot: {
        summary:
          "A Spring Bot application that implements an AI-powered customer service chatbot.",
      },
      habits: {
        name: "Habits Tracker",
        summary:
          "Full-stack application for monitoring and maintaining daily habits, available for web and mobile.",
      },
    },
  },
  skills: {
    title: "Skills",
    groups: {
      languages: "Languages",
      backend: "Backend",
      databases: "Databases",
      devops: "DevOps / Cloud",
      messaging: "Messaging",
      frontend: "Frontend",
      tools: "Tools",
    },
  },
  education: {
    title: "Education",
    inProgress: "in progress",
    items: {
      postgrad: {
        degree:
          "Postgraduate Specialization (Lato Sensu) in Software Engineering",
      },
      bachelor: { degree: "Bachelor's Degree in Computer Science" },
      technical: { degree: "Technical Degree in Electro-electronics" },
    },
    certificatesTitle: "Certificates",
    certificates: [
      "Full Stack Web Development — Curso.dev",
      "Stellantis Education Award",
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Portuguese", level: "Native" },
      {
        name: "English",
        level: "Advanced — B2 Upper (EF SET), C2 reading, C1 writing",
      },
    ],
  },
  contact: {
    title: "Contact",
    lead: "Open to new opportunities and conversations. Email is the fastest way to reach me.",
    emailLabel: "Send an email",
  },
  footer: { note: "Built with Next.js." },
};
