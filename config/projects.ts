// This file contains the data for all projects displayed on the website
// Using a centralized data structure enables us to maintain project information in one place
// and render it dynamically using the [id].tsx route

import React from 'react'

export type Project = {
  id: string // URL slug for the project
  title: string // Project name
  subtitle: string // Short description for header
  description: string // Full description
  logoSrc?: string // Project logo image
  logoAlt?: string // Alt text for logo
  websiteUrl?: string // Link to live project
  githubUrl?: string // Link to GitHub repo
  coverImage: string // Featured image
  isPrivate: boolean // Whether the repo is private
  isInProduction: boolean // Project status
  client?: {
    name: string
    logoSrc?: string
  }
  timeline: string // When the project was built
  role: string // Your role in the project
  tags: string[] // Technologies used for tag list
  features: ProjectFeature[] // Key features
}

export type ProjectFeature = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

// Project data
const projects: Project[] = [
  {
    id: 'my-insights',
    title: 'My INsights',
    subtitle: 'Operational management platform',
    description:
      'The MyINsights Platform, also known as MyIN, aims to generate insights for the operational management of teams in the field, consolidating business data, device management, tickets and contracts in a single location, thus simplifying daily activities and increasing efficiency throughout the process.',
    logoSrc: '/old_project/images/myin/logo.png',
    logoAlt: 'My INsights Logo',
    coverImage: '/old_project/images/myin/dashboard.png',
    isPrivate: true,
    isInProduction: true,
    client: {
      name: 'MGITECH',
      logoSrc: '/old_project/images/myin/mgitech.png',
    },
    timeline: '2023-now',
    role: 'Architecture and Development',
    tags: [
      'TypeScript',
      'SQL Server',
      'Power BI',
      'NextJS',
      'TailwindCSS',
      'NextAuth',
      'Prisma',
      'Admin Panel',
    ],
    websiteUrl:
      'https://www.mgitech.com.br/myin-plataforma-para-a-gestao-operacional-dos-times-em-campo',
    githubUrl: 'https://github.com/vitorvaske6/integratis-2',
    features: [
      {
        title: 'Secure Authentication',
        description: 'Login page using next-auth for secure user authentication.',
        imageSrc: '/old_project/images/myin/login.png',
        imageAlt: 'Login',
      },
      {
        title: 'Intuitive Homepage',
        description: 'The homepage where all dashboards are shown for quick access.',
        imageSrc: '/old_project/images/myin/initial-page.png',
        imageAlt: 'Home',
      },
      {
        title: 'Interactive Dashboards',
        description: 'Working integration with Power BI embedded reports for data visualization.',
        imageSrc: '/old_project/images/myin/dashboard.png',
        imageAlt: 'Dashboard',
      },
    ],
  },
  {
    id: 'integratis-api',
    title: 'Integratis API',
    subtitle: 'Backend API for system integration and ETL automations',
    description:
      'Integratis API is a RESTful API developed to integrate different systems and databases into a unified interface and to manage and execute ETL automations developed by the team. It is currently on its second version, with a more robust architecture and improved performance. Due to budget limitations, I also developed a custom Storage Service to handle file uploads and downloads, which is used by other services in the company.',
    logoSrc: '/old_project/images/integratis/integratis.png',
    logoAlt: 'Integratis API Logo',
    coverImage: '/old_project/images/integratis/init.png',
    isPrivate: true,
    isInProduction: true,
    client: {
      name: 'MGITECH',
      logoSrc: '/old_project/images/myin/mgitech.png',
    },
    timeline: '2022-now',
    role: 'Architecture and Development',
    tags: [
      'TypeScript',
      'Python',
      'MongoDB',
      'NestJS',
      'Prisma',
      'CronJobs',
      'JWT',
      'JestJS',
      'Custom Storage Service',
    ],
    websiteUrl: 'https://www.mgitech.com.br',
    githubUrl: 'https://github.com/vitorvaske6/integratis-api',
    features: [
      {
        title: 'Swagger Documentation',
        description: 'Documentation auto generated using DTO classes and decorators.',
        imageSrc: '/old_project/images/integratis/swagger-docs.png',
        imageAlt: 'Swagger Documentation',
      },
      {
        title: 'Integrations and ETL Automations',
        description: 'Management of cron jobs to integrate and automate ETL python scripts.',
        imageSrc: '/old_project/images/integratis/execution.png',
        imageAlt: 'Dashboard',
      },
      {
        title: 'Secure Authentication',
        description: 'Secured with NestJS AuthGuard and Public decorators.',
        imageSrc: '',
        imageAlt: 'Login',
      },
    ],
  },
  {
    id: 'vaske-admin',
    title: 'Vaske Admin',
    subtitle: 'Administrative dashboard template',
    description:
      'Vaske Admin is a versatile admin dashboard template built with modern web technologies, designed to be easily customizable and feature-rich for various administrative needs. Its a project that I used mainly to learn and pratice React. It served as the basis for the development of MyINsights later.',
    logoSrc: '/old_project/images/vaske-admin/vaskeLogoBlack.svg',
    logoAlt: 'Vaske Admin Logo',
    coverImage: '/old_project/images/vaske-admin/custom-dashboard.png',
    isPrivate: false,
    isInProduction: true,
    timeline: '2021-2022',
    role: 'Full Stack Developer',
    tags: [
      'React',
      'TypeScript',
      'Material UI',
      'Node.js',
      'Chart.js',
      'Google OAuth',
      'JWT',
      'Power BI',
      'MongoDB',
      'Swagger',
    ],
    websiteUrl: '',
    githubUrl: 'https://github.com/vitorvaske6/vaske-admin',
    features: [
      {
        title: 'Interactive Analytics',
        description: 'Real-time analytics with interactive charts and graphs.',
        imageSrc: '/old_project/images/vaske-admin/custom-edit-chart.png',
        imageAlt: 'Analytics',
      },
      {
        title: 'Power BI Integration',
        description: 'Power BI integration with RLS support.',
        imageSrc: '/old_project/images/vaske-admin/powerbi-dashboard.png',
        imageAlt: 'Analytics',
      },
      {
        title: 'Google OAuth',
        description: 'Integration with google OAuth for a fast register/login service.',
        imageSrc: '/old_project/images/vaske-admin/google.png',
        imageAlt: 'User Management',
      },
      {
        title: 'Theme Customization',
        description: 'Custom theme for the users preference.',
        imageSrc: '/old_project/images/vaske-admin/theme.png',
        imageAlt: 'Dark Mode',
      },
    ],
  },
]

// Helper functions to work with projects
export function getAllProjects(): Project[] {
  return projects
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getProjectPaths(): { params: { id: string } }[] {
  return projects.map((project) => ({
    params: { id: project.id },
  }))
}
