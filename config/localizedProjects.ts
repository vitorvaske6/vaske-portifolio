import { useLanguage } from '@/context/LanguageProvider'
import { getAllProjects, Project, ProjectFeature } from './projects'

// Helper hook to get localized projects
export const useLocalizedProjects = (): Project[] => {
  const { t } = useLanguage()

  const projects: Project[] = [
    {
      id: 'my-insights',
      title: t('projects:myInsights.title'),
      subtitle: t('projects:myInsights.subtitle'),
      description: t('projects:myInsights.description'),
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
      role: t('projects:myInsights.role'),
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
          title: t('projects:myInsights.features.0.title'),
          description: t('projects:myInsights.features.0.description'),
          imageSrc: '/old_project/images/myin/login.png',
          imageAlt: 'Login',
        },
        {
          title: t('projects:myInsights.features.1.title'),
          description: t('projects:myInsights.features.1.description'),
          imageSrc: '/old_project/images/myin/initial-page.png',
          imageAlt: 'Home',
        },
        {
          title: t('projects:myInsights.features.2.title'),
          description: t('projects:myInsights.features.2.description'),
          imageSrc: '/old_project/images/myin/dashboard.png',
          imageAlt: 'Dashboard',
        },
      ],
      featured: true,
    },
    {
      id: 'integratis-api',
      title: t('projects:integratisApi.title'),
      subtitle: t('projects:integratisApi.subtitle'),
      description: t('projects:integratisApi.description'),
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
      role: t('projects:integratisApi.role'),
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
          title: t('projects:integratisApi.features.0.title'),
          description: t('projects:integratisApi.features.0.description'),
          imageSrc: '/old_project/images/integratis/swagger-docs.png',
          imageAlt: 'Swagger Documentation',
        },
        {
          title: t('projects:integratisApi.features.1.title'),
          description: t('projects:integratisApi.features.1.description'),
          imageSrc: '/old_project/images/integratis/execution.png',
          imageAlt: 'Dashboard',
        },
        {
          title: t('projects:integratisApi.features.2.title'),
          description: t('projects:integratisApi.features.2.description'),
          imageSrc: '',
          imageAlt: 'Login',
        },
      ],
      featured: true,
    },
    {
      id: 'vaske-admin',
      title: t('projects:vaskeAdmin.title'),
      subtitle: t('projects:vaskeAdmin.subtitle'),
      description: t('projects:vaskeAdmin.description'),
      logoSrc: '/old_project/images/vaske-admin/vaskeLogoBlack.svg',
      logoAlt: 'Vaske Admin Logo',
      coverImage: '/old_project/images/vaske-admin/custom-dashboard.png',
      isPrivate: false,
      isInProduction: true,
      timeline: '2021-2022',
      role: t('projects:vaskeAdmin.role'),
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
          title: t('projects:vaskeAdmin.features.0.title'),
          description: t('projects:vaskeAdmin.features.0.description'),
          imageSrc: '/old_project/images/vaske-admin/custom-edit-chart.png',
          imageAlt: 'Analytics',
        },
        {
          title: t('projects:vaskeAdmin.features.1.title'),
          description: t('projects:vaskeAdmin.features.1.description'),
          imageSrc: '/old_project/images/vaske-admin/powerbi-dashboard.png',
          imageAlt: 'Analytics',
        },
        {
          title: t('projects:vaskeAdmin.features.2.title'),
          description: t('projects:vaskeAdmin.features.2.description'),
          imageSrc: '/old_project/images/vaske-admin/google.png',
          imageAlt: 'User Management',
        },
        {
          title: t('projects:vaskeAdmin.features.3.title'),
          description: t('projects:vaskeAdmin.features.3.description'),
          imageSrc: '/old_project/images/vaske-admin/theme.png',
          imageAlt: 'Dark Mode',
        },
      ],
      featured: false,
    },
  ]

  return projects
}

// Helper functions to work with localized projects
export function useGetAllProjects(): Project[] {
  return useLocalizedProjects()
}

export function useGetProjectById(id: string): Project | undefined {
  const projects = useLocalizedProjects()
  return projects.find((project) => project.id === id)
}