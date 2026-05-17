export const en = {
  header: {
    home: "Home",
    about: "About",
    skills: "Skills",
    portfolio: "Portfolio",
    contact: "Contact",
    language: "Language",
  },
  home: {
    title: "Raniery Goulart",
    subtitle: "Fullstack Developer",
    social:
      "Computer Science student with a passion for technology and programming",
    contact: "Contact me",
    scroll: "Scroll to see more",
  },
  about: {
    title: "About me",
    subtitle: "Introduction",
    description: `Fullstack developer with experience creating
                REST APIs, integration with front-end pages, relational
                databases and unit tests, security and cloud with AWS 
                certificates. Bachelor's degree student in Computer 
                Science at Uniamérica and graduated in Electro-electronics
                at CEFET-MG`,
    resume: "Download resume",
    href: "/pdf/Resume - Raniery Meireles Goulart.pdf",
    info: [
      { title: "2 years", subtitle: "of experience </br>in field" },
      { title: "20+", subtitle: "repositories </br>in Github" },
      { title: "04", subtitle: "companies </br>worked" },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: `Technologies that I've worked with or had contact with 
      </br>in the academic environment or personal projects.`,
    categories: [
      { category: "Languages" },
      { category: "Technologies & Frameworks" },
      { category: "Databases" },
      { category: "DevOps & Cloud" },
    ],
  },
  qualification: {
    title: "Qualifications",
    subtitle: "Education and professional experience",
    tab: [{ title: "Work" }, { title: "Education" }],
    education: [
      {
        title: "Bachelor, Computer Science",
        subtitle: "Uniamérica",
        dateRange: "jan 2023 - dec 2026",
      },
      {
        title: "Oracle Next Education",
        subtitle: "Alura + Oracle",
        dateRange: "nov 2022 - apr 2023",
      },
      {
        title: "Technical, Electro-electronics",
        subtitle: "CEFET-MG",
        dateRange: "feb 2018 - mar 2021",
      },
    ],
    work: [
      {
        title: "Junior Software Developer",
        subtitle: "Engineering",
        dateRange: "mar 2025 - current",
      },
      {
        title: "Software Development Intern",
        subtitle: "Empresa 1",
        dateRange: "aug 2023 - mar 2025",
      },
      {
        title: "Systems Development Analyst",
        subtitle: "ACT Digital",
        dateRange: "jun 2022 - jan 2023",
      },
      {
        title: "Instrumentation technician",
        subtitle: "MSX International",
        dateRange: "aug 2021 - nov 2021",
      },
    ],
  },
  portfolio: {
    title: "Portfólio",
    subtitle: "Projects completed and technologies used",
    view: "See more",
    send: "Project",
    projects: {
      medical_clinic: {
        title: "Medical<br />Clinic API",
        image: "/images/projects/medical-clinic-api-with-spring.png",
        link: "https://github.com/Ranieeery/medical-clinic-api-with-spring",
        icons: ["uil", "uil-clinic-medical", "services__icon"],
        tags: ["Java", "MySQL", "JUnit", "Spring Boot", "Swagger"],
        modal: {
          title: "Medical Clinic API",
          description: `REST API to manage a medical clinic with patients,
                    developed in Java with Spring Boot and MySQL database.`,
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
        title: "AI </br> Recommendation",
        image: "/images/projects/ai.png",
        link: "https://github.com/Ranieeery/openai-ecommerce-api-integration",
        icons: ["uil", "uil-meeting-board", "services__icon"],
        tags: ["Java", "IA", "Spring Boot", "OpenAI"],
        modal: {
          title: "E-commerce product recommendation system",
          description: `A product recommendation system in Java that uses the 
                    OpenAI API to provide personalized product recommendations and 
                    sentiment analysis for customer reviews.`,
          details: [
            "Java",
            "Maven",
            "OpenAI API",
            "JTokkit",
            "Artificial Intelligence (AI)",
          ],
        },
      },
      bytebox: {
        title: "ByteBox<br />Chatbot",
        image: "/images/projects/chatbot.png",
        link: "https://github.com/Ranieeery/ecommerce-chatbot",
        icons: ["uil", "uil-robot", "services__icon"],
        tags: ["Java", "Spring Boot", "I.A.", "JavaScript"],
        modal: {
          title: "ByteBox E-commerce Chatbot",
          description: `A Spring Boot application that implements a chatbot 
                    customer service chatbot for ByteBox, a fictitious  e-commerce 
                    platform focused on computer components and electronics.`,
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
            "Artificial Intelligence (AI)",
          ],
        },
      },
      vendasmvc: {
        title: "MVC<br />Sales C#",
        image: "/images/projects/vendasmvc.png",
        link: "https://github.com/Ranieeery/VendasMVC",
        icons: ["uil", "uil-shopping-basket", "services__icon"],
        tags: ["C#", ".NET", "MySQL", "ASP.NET Core MVC"],
        modal: {
          title: "SalesMVC",
          description: `A web application for a sales system with a 
                    system with a graphical interface to manipulate the database.`,
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
        title: "Personal</br>Blog",
        image: "/images/projects/blog.png",
        link: "https://ranieeery.github.io/",
        icons: ["uil", "uil-document-layout-left", "services__icon"],
        tags: ["Ruby", "Jekyll", "Shell", "Docker"],
        modal: {
          title: "Personal Blog",
          description: `Personal blog made with Jekyll in a docker 
                    container where I will post about technology, programming 
                    and other related stuff I'm interested in.`,
          details: ["Ruby", "Jekyll", "Shell", "Docker", "HTML", "Markdown"],
        },
      },
      correios: {
        title: "Search<br />Correios",
        image: "/images/projects/correios.png",
        link: "https://github.com/Ranieeery/Busca-CEP",
        icons: ["uil", "uil-envelope", "services__icon"],
        tags: ["Java", "MySQL", "JUnit", "Spring Boot", "Swagger"],
        modal: {
          title: "ZIP Code Search REST API",
          description: `Program that stores a list of postal codes extracted 
                    from the Correios (national postal service of Brazil) in an SQL 
                    database and allows these zip codes to be consulted via REST API.`,
          details: [
            "Java",
            "Spring Boot",
            "Spring Data JPA",
            "Lombok",
            "MySQL",
            "JUnit",
          ],
        },
      },
      fitlife: {
        title: "Fitlife<br />Gym",
        image: "/images/projects/fitlife.png",
        link: "https://fitlife-94c49.web.app/",
        icons: ["uil", "uil-dumbbell", "services__icon"],
        tags: ["HTML", "CSS", "Firebase"],
        modal: {
          title: "Fitlife",
          description: `A landing page for a fictitious gym`,
          details: ["HTML", "CSS", "Firebase", "CSS Grid", "Flexbox"],
        },
      },
      portfolio: {
        title: "Portfolio",
        image: "/images/projects/portfolio.png",
        link: "https://github.com/Ranieeery/raniery.dev",
        icons: ["uil", "uil-user", "services__icon"],
        tags: ["TypeScript", "Next.js", "React", "Node.js"],
        modal: {
          title: "Portfolio",
          description: `My personal portfolio website, made with Next.js and TypeScript.`,
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
        title: "Habits<br />Tracker",
        image: "/images/projects/habits.png",
        link: "https://github.com/Ranieeery/Habits-tracker",
        icons: ["uil", "uil-check-square", "services__icon"],
        tags: ["TypeScript", "React", "Node.js", "React Native"],
        modal: {
          title: "Habits Tracker",
          description: `Apllication to track habits and goals, with a web version and a mobile version.`,
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
    title: "Contact",
    subtitle: "Contact me for a chat",
    link: "Send a mail",
    info: [
      { title: "Phone", subtitle: "+55 (31) 9 9197-4503" },
      { title: "E-mail", subtitle: "raniery2003@hotmail.com" },
      { title: "Location", subtitle: "Contagem - MG (Brazil)" },
    ],
  },
  footer: {
    title: "Raniery",
    subtitle: "Fullstack Developer",
    note: `Raniery. All rights reserved. ${new Date().getFullYear()}`,
    home: "Home",
    about: "About",
    portfolio: "Portfolio",
    contact: "Contact",
  },
};
