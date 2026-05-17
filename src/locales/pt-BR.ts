export const ptBR = {
  header: {
    home: "Início",
    about: "Sobre",
    skills: "Habilidades",
    portfolio: "Portfólio",
    contact: "Contato",
    language: "Idioma",
  },
  home: {
    title: "Raniery Goulart",
    subtitle: "Desenvolvedor Fullstack",
    social:
      "Estudante de Ciência da Computação apaixonado por tecnologia e programação.",
    contact: "Contato",
    scroll: "Desça para ver mais",
  },
  about: {
    title: "Sobre mim",
    subtitle: "Introdução",
    description: `Desenvolvedor Fullstack com experiência na criação de
                APIs REST, integração com páginas front-end, bancos de
                dados relacionais e testes unitários, segurança e cloud
                com certificados AWS. Graduando em Ciência da Computação
                pela Uniamérica e formado em Eletroeletrônica pelo
                CEFET-MG.`,
    resume: "Baixar currículo",
    href: "/pdf/Currículo - Raniery Meireles Goulart.pdf",
    info: [
      { title: "2 anos", subtitle: "de experiência </br>na área" },
      { title: "20+", subtitle: "repositórios </br>no Github" },
      { title: "04", subtitle: "empresas </br>trabalhadas" },
    ],
  },
  skills: {
    title: "Habilidades",
    subtitle: `Tecnologias com as quais já trabalhei ou tive contato
      </br>no ambiente acadêmico ou projetos pessoais.`,
    categories: [
      { category: "Linguagens" },
      { category: "Tecnologias & Frameworks" },
      { category: "Banco de Dados" },
      { category: "DevOps & Cloud" },
    ],
  },
  qualification: {
    title: "Qualificações",
    subtitle: "Educação e experiência profissional",
    tab: [{ title: "Trabalho" }, { title: "Educação" }],
    education: [
      {
        title: "Bacharel, Ciência da Computação",
        subtitle: "Uniamérica",
        dateRange: "jan 2023 - dez 2026",
      },
      {
        title: "Oracle Next Education",
        subtitle: "Alura + Oracle",
        dateRange: "nov 2022 - abr 2023",
      },
      {
        title: "Técnico, Eletroeletrônica",
        subtitle: "CEFET-MG",
        dateRange: "fev 2018 - mar 2021",
      },
    ],
    work: [
      {
        title: "Desenvolvedor Junior",
        subtitle: "Engineering",
        dateRange: "mar 2025 - atual",
      },
      {
        title: "Estagiário em Desenvolvimento de Software",
        subtitle: "Empresa 1",
        dateRange: "ago 2023 - mar 2025",
      },
      {
        title: "Analista de Desenvolvimento de Sistemas",
        subtitle: "ACT Digital",
        dateRange: "jun 2022 - jan 2023",
      },
      {
        title: "Técnico de Instrumentação",
        subtitle: "MSX International",
        dateRange: "ago 2021 - nov 2021",
      },
    ],
  },
  portfolio: {
    title: "Portfólio",
    subtitle: "Projetos concluídos e tecnologias utilizadas",
    view: "Ver mais",
    send: "Projeto",
    projects: {
      medical_clinic: {
        title: "API de<br />Clínica Médica",
        image: "/images/projects/medical-clinic-api-with-spring.png",
        link: "https://github.com/Ranieeery/medical-clinic-api-with-spring",
        icons: ["uil", "uil-clinic-medical", "services__icon"],
        tags: ["Java", "MySQL", "JUnit", "Spring Boot", "Swagger"],
        modal: {
          title: "API de Clínica Médica",
          description: `API REST para gerenciar uma clínica médica com pacientes,
                    desenvolvida em Java com Spring Boot e banco de dados MySQL.`,
          details: [
            "Java",
            "Spring Boot 3",
            "Spring Data JPA",
            "MySQL",
            "JUnit",
            "Mockito",
            "Swagger",
            "Design Patterns",
          ],
        },
      },
      ia_chatbot: {
        title: "Recomendações</br>com IA",
        image: "/images/projects/ai.png",
        link: "https://github.com/Ranieeery/openai-ecommerce-api-integration",
        icons: ["uil", "uil-meeting-board", "services__icon"],
        tags: ["Java", "IA", "Spring Boot", "OpenAI"],
        modal: {
          title: "Sistema de recomendação para e-commerce",
          description: `Um sistema de recomendação de produtos em Java que usa a
                    API da OpenAI para fornecer recomendações personalizadas de produtos
                    e análise de sentimentos para avaliações de clientes.`,
          details: [
            "Java",
            "Maven",
            "OpenAI API",
            "JTokkit",
            "Inteligência Artificial (IA)",
          ],
        },
      },
      bytebox: {
        title: "ByteBox</br>Chatbot",
        image: "/images/projects/chatbot.png",
        link: "https://github.com/Ranieeery/ecommerce-chatbot",
        icons: ["uil", "uil-robot", "services__icon"],
        tags: ["Java", "Spring Boot", "I.A.", "JavaScript"],
        modal: {
          title: "ByteBox E-commerce Chatbot",
          description: `Uma aplicação Spring Boot que implementa um chatbot
                    de atendimento ao cliente para a ByteBox, uma plataforma fictícia
                    de e-commerce focada em componentes de computador e eletrônicos.`,
          details: [
            "Java",
            "Spring Boot",
            "Spring Webflux",
            "Thymeleaf",
            "JavaScript",
            "jQuery",
            "Marked.js",
            "OpenAI API",
            "JTokkit",
            "Inteligência Artificial (IA)",
          ],
        },
      },
      vendasmvc: {
        title: "MVC</br>Vendas C#",
        image: "/images/projects/vendasmvc.png",
        link: "https://github.com/Ranieeery/VendasMVC",
        icons: ["uil", "uil-shopping-basket", "services__icon"],
        tags: ["C#", ".NET", "MySQL", "ASP.NET Core MVC"],
        modal: {
          title: "VendasMVC",
          description: `Uma aplicação web para um sistema de vendas com
                    interface gráfica para manipulação do banco de dados.`,
          details: [
            "C#",
            ".NET",
            "ASP.NET Core MVC",
            "Entity Framework",
            "LINQ",
            "MySQL",
            "HTML",
            "CSS",
            "Bootstrap",
            "Design Patterns",
          ],
        },
      },
      blog: {
        title: "Blog</br>Pessoal",
        image: "/images/projects/blog.png",
        link: "https://ranieeery.github.io/",
        icons: ["uil", "uil-document-layout-left", "services__icon"],
        tags: ["Ruby", "Jekyll", "Shell", "Docker"],
        modal: {
          title: "Blog Pessoal",
          description: `Blog pessoal feito com Jekyll em um container docker
                    onde postarei sobre tecnologia, programação e outros assuntos
                    relacionados que me interessam.`,
          details: ["Ruby", "Jekyll", "Shell", "Docker", "HTML", "Markdown"],
        },
      },
      correios: {
        title: "Busca</br>Correios",
        image: "/images/projects/correios.png",
        link: "https://github.com/Ranieeery/Busca-CEP",
        icons: ["uil", "uil-envelope", "services__icon"],
        tags: ["Java", "MySQL", "JUnit", "Spring Boot", "Swagger"],
        modal: {
          title: "API REST de Busca de CEP",
          description: `Programa que armazena uma lista de CEPs extraídos
                    dos Correios em um banco de dados SQL e permite que esses CEPs
                    sejam consultados via API REST.`,
          details: [
            "Java",
            "Spring Boot",
            "Spring Data JPA",
            "Lombok",
            "MySQL",
            "JUnit",
            "Swagger",
          ],
        },
      },
      fitlife: {
        title: "Fitlife</br>Academia",
        image: "/images/projects/fitlife.png",
        link: "https://fitlife-94c49.web.app/",
        icons: ["uil", "uil-dumbbell", "services__icon"],
        tags: ["HTML", "CSS", "Firebase"],
        modal: {
          title: "Fitlife",
          description: `Uma landing page para uma academia fictícia.`,
          details: ["HTML", "CSS", "Firebase", "CSS Grid", "Flexbox"],
        },
      },
      portfolio: {
        title: "Portfólio",
        image: "/images/projects/portfolio.png",
        link: "https://github.com/Ranieeery/raniery.dev",
        icons: ["uil", "uil-user", "services__icon"],
        tags: ["TypeScript", "Next.js", "React", "Node.js"],
        modal: {
          title: "Portfólio",
          description: `Meu portfólio pessoal feito com Next.js e TypeScript.`,
          details: [
            "TypeScript",
            "Next.js",
            "React",
            "Node.js",
            "CSS Nano",
            "HTML",
            "CSS",
            "Prettier",
            "Vercel",
          ],
        },
      },
      habits: {
        title: "Rastreador<br />de Hábitos",
        image: "/images/projects/habits.png",
        link: "https://github.com/Ranieeery/Habits-tracker",
        icons: ["uil", "uil-check-square", "services__icon"],
        tags: ["TypeScript", "React", "Node.js", "React Native"],
        modal: {
          title: "Rastreador de Hábitos",
          description: `Aplicação para rastrear hábitos e metas, com uma versão web e uma versão mobile.`,
          details: [
            "Node.js",
            "Prisma",
            "Fastify",
            "SQLite",
            "Zod",
            "Swagger",
            "React",
            "Vite",
            "Tailwind CSS",
            "Axios",
            "React Native",
            "Expo",
          ],
        },
      },
      // test: {
      //     title: "",
      //     image: "/images/projects/placeholder.png",
      //     link: "",
      //     icons: [],
      //     tags: [],
      //     modal: {
      //         title: "",
      //         description: ``,
      //         details: [],
      //     },
      // },
    },
  },
  contact: {
    title: "Contato",
    subtitle: "Entre em contato para uma conversa",
    link: "Enviar um e-mail",
    info: [
      { title: "Telefone", subtitle: "+55 (31) 9 9197-4503" },
      { title: "E-mail", subtitle: "raniery2003@hotmail.com" },
      { title: "Localização", subtitle: "Contagem, MG" },
    ],
  },
  footer: {
    title: "Raniery",
    subtitle: "Desenvolvedor Fullstack",
    note: `Raniery. Todos os direitos reservados. ${new Date().getFullYear()}`,
    home: "Início",
    about: "Sobre",
    portfolio: "Portfólio",
    contact: "Contato",
  },
};
