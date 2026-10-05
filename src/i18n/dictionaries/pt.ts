import type { Dictionary } from "../types";

export const pt: Dictionary = {
  meta: {
    title: "Raniery Goulart — Engenheiro de Software Back-end",
    description:
      "Engenheiro de software back-end especializado em Java e Go. APIs REST, microsserviços, Kubernetes, Kong e mensageria.",
    ogAlt: "Raniery Goulart, engenheiro de software back-end",
  },
  a11y: {
    skipToContent: "Pular para o conteúdo",
    homeLink: "página inicial",
    primaryNav: "Navegação principal",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    switchToDark: "Ativar tema escuro",
    switchToLight: "Ativar tema claro",
    opensInNewTab: "(abre em nova aba)",
    backToTop: "Voltar ao topo",
  },
  common: {
    present: "atual",
    stackLabel: "Tecnologias",
    downloadCv: "Baixar currículo",
  },
  language: { switchLabel: "Read this page in English", short: "EN" },
  nav: {
    about: "Sobre",
    experience: "Experiência",
    projects: "Projetos",
    skills: "Habilidades",
    education: "Formação",
    contact: "Contato",
  },
  hero: {
    role: "Engenheiro de Software Back-end",
    headline:
      "Desenvolvo APIs e microsserviços em Go e Java, modernizando sistemas legados e integrando serviços.",
    location: "Contagem, MG — Brasil",
    current: "Atualmente na Engineering do Brasil",
    ctaContact: "Entrar em contato",
  },
  about: {
    title: "Sobre",
    paragraphs: [
      "Engenheiro de software back-end especializado em Java e Go, com experiência consolidada em frameworks como Spring Boot, Hibernate, Spring Data JPA e Spring Security (JWT).",
      "Tenho amplo conhecimento na construção e integração de APIs REST, bancos de dados relacionais e NoSQL e API Gateways com Kong. Também tenho noções de sistemas de mensageria (RabbitMQ, Apache Kafka) e experiência em documentação de APIs com OpenAPI e Swagger.",
      "Aberto a novas oportunidades onde possa aplicar e expandir minhas competências, contribuindo com minha experiência em desenvolvimento de soluções robustas, escaláveis e eficientes.",
    ],
    facts: [
      { label: "Foco", value: "Back-end · Java · Go" },
      { label: "Localização", value: "Contagem, MG" },
      { label: "Formação", value: "Ciência da Computação" },
      { label: "Idiomas", value: "Português, Inglês" },
    ],
  },
  experience: {
    title: "Experiência",
    items: {
      engineering: {
        role: "Desenvolvedor de Software Junior",
        company: "Engineering do Brasil",
        location: "São Paulo, SP (Remoto)",
        highlights: [
          "Desenvolvimento de APIs REST, orquestradores e middlewares de validação em Go, tanto para a criação de novos microsserviços quanto para a migração de serviços legados.",
          "Migração de aplicações utilizando Kubernetes para orquestração de containers e Kong como API Gateway para gerenciamento e segurança do tráfego.",
          "Implementação de templates e middlewares de validação em Go para estruturar e assegurar a consistência dos dados em requisições, aumentando a confiabilidade das comunicações entre sistemas.",
          "Otimização da esteira de CI/CD através de containerização com Docker e da implementação de pipelines de deploy automatizados no GitLab, aumentando a velocidade e a confiabilidade das releases.",
          "Integração de sistemas internos via gRPC, HTTP e mensageria, com dashboards no Grafana e Kibana/Elastic para monitoramento e observabilidade.",
          "Sugestão de melhorias de processo e sistema, incluindo casos de uso de Inteligência Artificial Generativa, para uma das plataformas internas da empresa, posteriormente implementadas pelos responsáveis técnicos da plataforma.",
          "Participação em escala de plantão para troubleshooting e resolução de incidentes em produção.",
        ],
      },
      empresa1: {
        role: "Estágio em Desenvolvimento de Software",
        company: "Empresa 1",
        location: "Belo Horizonte, MG (Remoto)",
        highlights: [
          "Migração de uma aplicação legada em C++ para a web utilizando Spring Framework e AngularJS.",
          "Criação e otimização de consultas SQL em bancos de dados relacionais, reduzindo o tempo de resposta em 30%.",
          "Implementação de APIs REST com Spring e Hibernate, integrando sistemas internos de maneira eficiente.",
          "Automação de builds com Maven e migrações de banco com Liquibase, assegurando um CI/CD consistente.",
          "Atuação em squads ágeis (Scrum), contribuindo em sprints, refinamento de backlog e dailies, para entregas iterativas e alinhadas às demandas.",
        ],
      },
    },
  },
  projects: {
    title: "Projetos",
    intro:
      "Uma seleção de projetos pessoais — em sua maioria serviços back-end, além de alguns produtos completos.",
    repo: "Repositório",
    items: {
      shoppingCart: {
        summary:
          "Microsserviço de gerenciamento de carrinhos de compras com MongoDB e cache em Redis.",
      },
      quickEvent: {
        summary:
          "API REST para gerenciar eventos seguindo os princípios de Clean Architecture e SOLID.",
      },
      mnemo: {
        summary:
          "Aplicação instalável de desktop para gerenciar e organizar a biblioteca de vídeos local do usuário, com recursos de inteligência artificial.",
      },
      medicalClinic: {
        name: "API de Consultório Médico",
        summary:
          "API REST para gerenciamento de um consultório médico, desenvolvida com Spring Boot e MySQL.",
      },
      chatbot: {
        summary:
          "Aplicação Spring Boot que implementa um chatbot de atendimento ao cliente com inteligência artificial.",
      },
      habits: {
        name: "Monitorador de Hábitos",
        summary:
          "Aplicativo full stack para monitorar e manter hábitos diários, disponível para web e mobile.",
      },
    },
  },
  skills: {
    title: "Habilidades",
    groups: {
      languages: "Linguagens",
      backend: "Back-end",
      databases: "Bancos de dados",
      devops: "DevOps / Cloud",
      messaging: "Mensageria",
      frontend: "Front-end",
      tools: "Ferramentas",
    },
  },
  education: {
    title: "Formação",
    inProgress: "em andamento",
    items: {
      postgrad: {
        degree: "Pós-graduação Lato Sensu em Engenharia de Software",
      },
      bachelor: { degree: "Bacharelado em Ciência da Computação" },
      technical: { degree: "Técnico em Eletroeletrônica" },
    },
    certificatesTitle: "Certificados",
    certificates: [
      "Desenvolvimento Web Full Stack — Curso.dev",
      "Prêmio Stellantis de Educação",
    ],
    languagesTitle: "Idiomas",
    languages: [
      { name: "Português", level: "Nativo" },
      {
        name: "Inglês",
        level: "Avançado — B2 Upper (EF SET), C2 em leitura, C1 em escrita",
      },
    ],
  },
  contact: {
    title: "Contato",
    lead: "Aberto a novas oportunidades e conversas. O caminho mais rápido é por e-mail.",
    emailLabel: "Enviar e-mail",
  },
  footer: { note: "Feito com Next.js." },
};
