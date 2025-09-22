import { Link } from '@heroui/link'
import { Image } from '@heroui/image'
import { button as buttonStyles } from '@heroui/theme'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { siteConfig } from '@/config/site'
import { title, subtitle } from '@/components/primitives'
import { GithubIcon, GmailIcon } from '@/components/icons'
import { LinkedInIcon } from '@/components/icons'
import { ProjectCard, SectionTitle } from '@/components'
import DefaultLayout from '@/layouts/default'
import { getAllProjects } from '@/config/projects'
import { Button } from '@heroui/button'

export default function IndexPage() {
  const { t } = useTranslation(['common', 'projects'])
  const router = useRouter()
  const featuredProjects = getAllProjects().filter((project) => project.featured)

  return (
    <DefaultLayout>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-16 md:py-24">
        {/* Left content - Text and Call to Action */}
        <div className="flex flex-col max-w-2xl">
          <h1 className={title({ size: 'lg' })}>
            {t('home.greeting')}{' '}
            <span className={title({ color: 'primary', size: 'lg' })}>Vitor</span>
          </h1>

          <h2 className={title({ class: 'mt-4' })}>{t('home.role')}</h2>

          <p className={subtitle({ class: 'mt-6 text-lg' })}>{t('home.description')}</p>

          <div className="flex gap-4 mt-8">
            <NextLink
              href="/contact"
              locale={router.locale}
              className={buttonStyles({
                color: 'primary',
                radius: 'full',
                size: 'lg',
                variant: 'shadow',
              })}
            >
              {t('home.getInTouch')}
            </NextLink>
            <a
              // isExternal
              className={buttonStyles({
                radius: 'full',
                size: 'lg',
                variant: 'bordered',
              })}
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon size={20} />
              {t('home.viewMyWork')}
            </a>
          </div>

          <div className="flex items-center gap-4 mt-10">
            <span className="text-default-600">{t('home.findMeOn')}</span>
            <div className="flex gap-4">
              <Link
                isExternal
                aria-label="GitHub"
                href={siteConfig.links.github}
                title={siteConfig.links.github}
                target="_blank"
              >
                <GithubIcon
                  className="text-default-700 hover:text-primary transition-colors"
                  size={24}
                />
              </Link>
              <Link
                isExternal
                aria-label="LinkedIn"
                href={siteConfig.links.linkedin}
                title={siteConfig.links.linkedin}
                target="_blank"
              >
                <LinkedInIcon
                  className="text-default-700 hover:text-primary transition-colors"
                  size={24}
                />
              </Link>
              <Link
                isExternal
                aria-label="Email"
                href={siteConfig.links.email}
                title={siteConfig.links.email}
                target="_blank"
              >
                <GmailIcon
                  className="text-default-700 hover:text-primary transition-colors"
                  size={24}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Right content - Profile Image */}
        <div className="flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              alt="Vitor Vasconcelos"
              className="object-cover"
              fallbackSrc="https://via.placeholder.com/320x320?text=Vitor+Vasconcelos"
              height={320}
              src="/old_project/images/profile2.jpeg"
              width={320}
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="grid gap-6 py-16">
        <SectionTitle
          primary={t('home.featuredProjects.primary')}
          secondary={t('home.featuredProjects.secondary')}
          order={t('home.featuredProjects.order')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* My INsights Project */}
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              description={t(`projects:${project.id}.description`)}
              href={`/projects/${project.id}`}
              tags={project.tags}
              title={t(`projects:${project.id}.title`)}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <NextLink
            href="/projects"
            locale={router.locale}
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              size: 'lg',
              variant: 'flat',
            })}
          >
            <p>{t('home.viewAllProjects')}</p>
          </NextLink>
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
