export type Project = {
  key: string;
  label: string;
  description: string;
  origin: ProjectOrigin;
  cover: string;
  icon: ProjectIcon;
  features: ProjectFeature[];
  stack: ProjectStack[];
};

export type ProjectIcon = {
  src: string;
  background: string | null;
};

export type ProjectFeature = {
  key: number;
  label: string;
  description: string;
  cover: string;
};

export type ProjectOrigin = {
  company: string;
  text: string;
  inProduction: boolean;
  site: string;
  github: string;
  private: boolean;
  icon?: ProjectIcon;
};

export type ProjectStack = {
  type: "Back-end" | "Front-end" | "Feature";
  items: ProjectStackItem[];
};

export type ProjectStackItem = {
  key: number;
  label: string;
  description: string;
  icon: string;
};

const projects: Project[] = [
  {
    key: "myinsights",
    label: "My INsights",
    description:
      "The MyINsights Platform, affectionately called MyIN by us, aims to generate insights for the operational management of teams in the field, consolidating business data, device management, tickets and contracts in a single location, thus simplifying daily activities and increasing efficiency throughout the process.",
    origin: {
      company: "MGITECH",
      site: "https://www.mgitech.com.br/myin-plataforma-para-a-gestao-operacional-dos-times-em-campo",
      text: "This project was developed for MGITECH with the intention to rebuild the old project developed in deprecated technology and rebuilding it in a more dynamic, modern and easely scalable technology (NextJS).",
      inProduction: true,
      github: "https://github.com/vitorvaske6/myin",
      private: true,
      icon: { src: "/myin/mgitech.png", background: null },
    },
    cover: "/myin/login.png",
    icon: { src: "/myin/logo.png", background: null },
    features: [
      {
        key: 0,
        label: "Login",
        description: "Login page using next-auth.",
        cover: "/myin/login.png",
      },
      {
        key: 1,
        label: "Home",
        description: "The homepage where all dashboards are shown.",
        cover: "/myin/initial-page.png",
      },
      {
        key: 2,
        label: "Dashboard",
        description: "An example of an working integration with Power BI embedded reports.",
        cover: "/myin/dashboard.png",
      },
    ],
    stack: [
      {
        type: "Front-end",
        items: [
          {
            key: 0,
            label: "NextJS",
            description: "Fullstack Framework",
            icon: "/myin/stack/nextjs.png",
          },
          {
            key: 1,
            label: "TypeScript",
            description: "Primary Language",
            icon: "/myin/stack/typescript.png",
          },
          {
            key: 2,
            label: "TailwindCSS",
            description: "CSS Framework",
            icon: "/myin/stack/tailwindcss.png",
          },
        ],
      },
      {
        type: "Back-end",
        items: [
          {
            key: 0,
            label: "NodeJS",
            description: "Runtime Environment",
            icon: "/myin/stack/nodejs.png",
          },
          {
            key: 1,
            label: "NextJS",
            description: "Fullstack Framework",
            icon: "/myin/stack/nextjs.png",
          },
          {
            key: 2,
            label: "TypeScript",
            description: "Primary Language",
            icon: "/myin/stack/typescript.png",
          },
          {
            key: 3,
            label: "Prisma",
            description: "TypeScript ORM",
            icon: "/myin/stack/prisma.io.png",
          },
          {
            key: 4,
            label: "SQL Server",
            description: "Database",
            icon: "/myin/stack/sql-server.png",
          },
        ],
      },
      {
        type: "Feature",
        items: [
          {
            key: 0,
            label: "NextAuth.js",
            description: "User Authentication",
            icon: "/myin/stack/next-auth.png",
          },
          {
            key: 1,
            label: "Power BI",
            description: "Power BI embedded reports",
            icon: "/myin/stack/power-bi.png",
          },
        ],
      },
    ],
  },
  {
    key: "integratis",
    label: "Integrátis API",
    description:
      "Integrátis API is an REST API with an cronjob module that execute python scripts by schedule.",
    origin: {
      company: "MGITECH",
      site: "https://www.mgitech.com.br/",
      text: "This project was developed for MGITECH with the intention to provide automations and/or integrations beteween different systems used by the company. The app consists in schedule how and when to execute those automations. The automations are purely developed in Python because of the expertise of the rest of the team.",
      inProduction: true,
      github: "https://github.com/vitorvaske6/integratis",
      private: false,
      icon: { src: "/myin/mgitech.png", background: null },
    },
    cover: "/integratis/init.png",
    icon: { src: "/integratis/integratis.png", background: "#ffffff" },
    features: [
      {
        key: 0,
        label: "Initiating",
        description: "It shows the scripts with the job programmed.",
        cover: "/integratis/init.png",
      },
      {
        key: 1,
        label: "Execution",
        description: "It shows the name of the script that is being executed.",
        cover: "/integratis/execution.png",
      },
      {
        key: 2,
        label: "Errors",
        description: "It shows the errors if one is thrown.",
        cover: "/integratis/error.png",
      },
    ],
    stack: [
      {
        type: "Back-end",
        items: [
          {
            key: 0,
            label: "NodeJS",
            description: "Runtime Environment",
            icon: "/integratis/stack/nodejs.png",
          },
          {
            key: 1,
            label: "TypeScript",
            description: "Primary Language",
            icon: "/integratis/stack/typescript.png",
          },
          {
            key: 2,
            label: "MongoDB",
            description: "Database",
            icon: "/integratis/stack/mongodb.png",
          },
        ],
      },
      {
        type: "Feature",
        items: [
          {
            key: 0,
            label: "Swagger",
            description: "API Documentation",
            icon: "/integratis/stack/swagger.png",
          },
          {
            key: 1,
            label: "JWT",
            description: "API Authentication",
            icon: "/integratis/stack/jwt.png",
          },
          {
            key: 2,
            label: "Python",
            description: "Python Scripts Scheduled Jobs",
            icon: "/integratis/stack/python.png",
          },
          {
            key: 3,
            label: "SAP Hana",
            description: "Hana Query Executer",
            icon: "/integratis/stack/sap-hana.png",
          },
        ],
      },
    ],
  },
  {
    key: "vaske-admin",
    label: "Vaske Admin",
    description:
      "Vaske Admin is an web application integrated with PowerBI & CubeJS to build and show dashboards.",
    origin: {
      company: "",
      site: "",
      text: "This project was developed for studying purpose with the intention to learn how to properly integrate PowerBI in web applications and develop a custom solution of self-service BI using CubeJS and ChartsJS. The experience I got on this project led me to offering MGITECH to rebuild MyInsights.",
      inProduction: false,
      github: "https://github.com/vitorvaske6/vaske_admin",
      private: false,
    },
    cover: "/vaske-admin/custom-dashboard.png",
    icon: { src: "/vaske-admin/vaskeLogoBlack.svg", background: null },
    features: [
      {
        key: 0,
        label: "Custom Dashboard",
        description:
          "A dashboard that can be built using CubeJS to provide data and a custom builder for the charts.",
        cover: "/vaske-admin/custom-dashboard.png",
      },
      {
        key: 1,
        label: "Custom Dashboard",
        description: "Creating a new chart.",
        cover: "/vaske-admin/custom-new-chart.png",
      },
      {
        key: 2,
        label: "Custom Dashboard",
        description: "Editing one of the deployed charts.",
        cover: "/vaske-admin/custom-edit-chart.png",
      },
      {
        key: 3,
        label: "Power BI Dashboard",
        description: "A dashaboard created in Power BI embeded in the application.",
        cover: "/vaske-admin/powerbi-dashboard.png",
      },
      {
        key: 4,
        label: "Power BI Dashboard",
        description: "The dashboard with free mode enabled.",
        cover: "/vaske-admin/powerbi-free-mode.png",
      },
      {
        key: 5,
        label: "Power BI Dashboard",
        description: "The dashboard on a simple grid view.",
        cover: "/vaske-admin/powerbi-grid-view.png",
      },
      {
        key: 6,
        label: "Power BI Dashboard",
        description:
          "The dashboard filtered and a component that shows whatever is being filtered.",
        cover: "/vaske-admin/powerbi-show-filters-applyed.png",
      },
      {
        key: 7,
        label: "Swagger API Docs",
        description: "The API documentation.",
        cover: "/vaske-admin/swagger.png",
      },
      {
        key: 8,
        label: "Themes",
        description: "The themes menu where you can change the primary color and mode.",
        cover: "/vaske-admin/theme.png",
      },
    ],
    stack: [
      {
        type: "Front-end",
        items: [
          {
            key: 0,
            label: "ReactJS",
            description: "UI Library",
            icon: "/vaske-admin/stack/react.png",
          },
          {
            key: 1,
            label: "JavaScript",
            description: "Primary Language",
            icon: "/vaske-admin/stack/javascript.png",
          },
          {
            key: 2,
            label: "TailwindCSS",
            description: "CSS Framework",
            icon: "/vaske-admin/stack/tailwindcss.png",
          },
        ],
      },
      {
        type: "Back-end",
        items: [
          {
            key: 0,
            label: "NodeJS",
            description: "Runtime Environment",
            icon: "/vaske-admin/stack/nodejs.png",
          },
          {
            key: 1,
            label: "TypeScript",
            description: "Primary Language",
            icon: "/vaske-admin/stack/typescript.png",
          },
          {
            key: 2,
            label: "MongoDB",
            description: "Database",
            icon: "/vaske-admin/stack/mongodb.png",
          },
        ],
      },
      {
        type: "Feature",
        items: [
          {
            key: 0,
            label: "Swagger",
            description: "API Documentation",
            icon: "/vaske-admin/stack/swagger.png",
          },
          {
            key: 1,
            label: "JWT",
            description: "API Authentication",
            icon: "/vaske-admin/stack/jwt.png",
          },
          {
            key: 2,
            label: "Google Auth",
            description: "Google Auth Integration",
            icon: "/vaske-admin/stack/google-auth.png",
          },
          {
            key: 3,
            label: "Power BI",
            description: "Power BI embedded reports",
            icon: "/vaske-admin/stack/power-bi.png",
          },
          {
            key: 4,
            label: "CubeJS",
            description: "Semantic Layer for Data Modeling",
            icon: "/vaske-admin/stack/cubejs.png",
          },
          {
            key: 5,
            label: "ChartsJS",
            description: "Charts library",
            icon: "/vaske-admin/stack/chartsjs.png",
          },
        ],
      },
    ],
  },
];
