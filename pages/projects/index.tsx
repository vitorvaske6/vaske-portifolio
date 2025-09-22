import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Link } from '@heroui/link'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { button as buttonStyles } from '@heroui/theme'

import { subtitle, title } from '@/components/primitives'
import { FeatureCard, SectionTitle, TagList } from '@/components'
import DefaultLayout from '@/layouts/default'
import { getAllProjects } from '@/config/projects'

export default function ProjectsPage() {
  // Get all projects from our data source
  const projects = getAllProjects()
  const { t } = useTranslation(['common', 'projects'])
  const router = useRouter()

  return (
    <DefaultLayout>
      <section className="py-16">
        <div className="text-center">
          <SectionTitle
            primary={t('projects.title.primary')}
            secondary={t('projects.title.secondary')}
            order={t('projects.title.order')}
          />
          <p className={subtitle({ class: 'mt-4 mx-auto' })}>{t('projects.subtitle')}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project) => (
            <FeatureCard
              key={project.id}
              description={t(`projects:${project.id}.subtitle`)}
              imageAlt={t(`projects:${project.id}.title`)}
              imageSrc={project.coverImage}
              title={t(`projects:${project.id}.title`)}
            >
              <TagList tags={project.tags} />
              <NextLink
                href={`/projects/${project.id}`}
                locale={router.locale}
                className={buttonStyles({
                  className: 'mt-6',
                  color: 'primary',
                  radius: 'full',
                  variant: 'light',
                })}
              >
                {t('projects.viewDetails')}
              </NextLink>
            </FeatureCard>
          ))}
        </div>

        {/* GitHub Section */}
        <div className="mt-24 text-center">
          <h2 className={title({ size: 'sm', class: 'mb-6' })}>{t('projects.explore.title')}</h2>
          <p className="text-default-600 mb-8 max-w-xl mx-auto">
            {t('projects.explore.description')}
          </p>
          <Link
            isExternal
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              size: 'lg',
              variant: 'shadow',
            })}
            href="https://github.com/vitorvaske6"
            target="_blank"
          >
            {t('projects.explore.button')}
          </Link>
        </div>
      </section>
    </DefaultLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'projects'])),
    },
  }
}
