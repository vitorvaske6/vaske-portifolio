import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Image } from '@heroui/image'

import {
  FeatureCard,
  ProjectDetailCard,
  ProjectHeader,
  ProjectNavigation,
  TagList,
} from '@/components'
import DefaultLayout from '@/layouts/default'
import { getProjectById, getProjectPaths, getAllProjects, Project } from '@/config/projects'

type ProjectPageProps = {
  project: Project
  navigation: {
    prev?: { href: string; label: string }
    next?: { href: string; label: string }
  }
}

export default function ProjectPage({ project, navigation }: ProjectPageProps) {
  const { t } = useTranslation(['common', 'projects'])

  if (!project) {
    return (
      <DefaultLayout>
        <div className="py-16 text-center">
          <h1 className="text-2xl font-bold">{t('projects.project_page.not_found')}</h1>
          <p className="mt-4">{t('projects.project_page.not_found_message')}</p>
        </div>
      </DefaultLayout>
    )
  }

  // Prepare project details for the detail card
  const projectDetails = [
    ...(project.client
      ? [
          {
            label: t(`${project.id}.details.client`),
            value: (
              <p className="font-medium flex items-center gap-2">
                {project.client.logoSrc && (
                  <Image
                    alt={project.client.name}
                    className="object-contain"
                    height={20}
                    src={project.client.logoSrc}
                    width={20}
                  />
                )}
                {project.client.name}
              </p>
            ),
          },
        ]
      : []),
    {
      label: t(`projects.details.status`),
      value: project.isInProduction ? (
        <span className="text-success">{t(`projects:${project.id}.status`)}</span>
      ) : (
        <span className="text-warning">{t(`projects:${project.id}.status`)}</span>
      ),
    },
    {
      label: t(`projects.details.timeline`),
      value: project.timeline,
    },
    {
      label: t(`projects.details.role`),
      value: t(`projects:${project.id}.role`),
    },
  ]

  return (
    <DefaultLayout>
      <div className="py-16">
        {/* Project Cover Image */}
        {project.coverImage && (
          <div className="mb-16">
            <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                alt={`${project.title} cover`}
                className="object-cover w-full h-full"
                src={project.coverImage}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        )}

        {/* Project Header */}
        <ProjectHeader
          logoAlt={project.logoAlt || `${t(`projects:${project.id}.title`)} logo`}
          logoSrc={project.logoSrc}
          subtitle={t(`projects:${project.id}.subtitle`)}
          title={t(`projects:${project.id}.title`)}
          websiteUrl={project.websiteUrl}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main description */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg leading-relaxed">{t(`projects:${project.id}.description`)}</p>

            {/* Tags */}
            <div className="pt-4">
              <TagList tags={project.tags} />
            </div>

            {/* GitHub Link */}
            {project.githubUrl && (
              <div className="pt-4 inline-flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                </svg>
                {project.isPrivate ? (
                  <span className="text-default-500 cursor-not-allowed">
                    {t(`${project.id}.details.privateRepository`)}
                  </span>
                ) : (
                  <a
                    className="inline-flex items-center gap-2 text-primary hover:underline transition-colors"
                    href={project.githubUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {t(`${project.id}.details.viewOnGithub`)}
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Project Details Card */}
          <div>
            <ProjectDetailCard details={projectDetails} />
          </div>
        </div>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{t(`projects.details.keyFeatures`)}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  description={t(`projects:${project.id}.features.${index}.description`)}
                  imageAlt={feature.imageAlt}
                  imageSrc={feature.imageSrc}
                  title={t(`projects:${project.id}.features.${index}.title`)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Dynamic Project Navigation */}
        <ProjectNavigation nextProject={navigation?.next} prevProject={navigation?.prev} />
      </div>
    </DefaultLayout>
  )
}

// Generate paths for all projects dynamically
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getProjectPaths()

  return {
    paths,
    fallback: 'blocking', // Allow pages to be generated on-demand for other locales
  }
}

// Generate dynamic navigation and project data
export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params, locale }) => {
  const id = params?.id as string
  const project = getProjectById(id)

  // If project not found, return 404
  if (!project) {
    return {
      notFound: true,
    }
  }

  // Generate dynamic navigation - find current project index
  const allProjects = getAllProjects()
  const currentIndex = allProjects.findIndex((p) => p.id === id)

  // Determine previous and next projects
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null

  const navigation = {
    prev: prevProject
      ? {
          href: `/projects/${prevProject.id}`,
          label: prevProject.title,
        }
      : {
          href: '',
          label: '',
        },
    next: nextProject
      ? {
          href: `/projects/${nextProject.id}`,
          label: nextProject.title,
        }
      : {
          href: '',
          label: '',
        },
  }

  return {
    props: {
      project,
      navigation,
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'projects'])),
    },
    // Enable ISR for dynamic updates
    revalidate: 60 * 60 * 24, // Revalidate once per day
  }
}
