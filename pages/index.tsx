import { Link } from '@heroui/link'
import { Image } from '@heroui/image'
import { button as buttonStyles } from '@heroui/theme'

import { siteConfig } from '@/config/site'
import { title, subtitle } from '@/components/primitives'
import { GithubIcon, GmailIcon } from '@/components/icons'
import { LinkedInIcon } from '@/components/icons'
import { ProjectCard, SectionTitle } from '@/components'
import DefaultLayout from '@/layouts/default'
import { useLanguage } from '@/context/LanguageProvider'
import { useGetAllProjects } from '@/config/localizedProjects'
import { Button } from '@heroui/button'

export default function IndexPage() {
  const { t } = useLanguage()
  const featuredProjects = useGetAllProjects().filter((project) => project.featured)

  return (
    <DefaultLayout>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-16 md:py-24">
        {/* Left content - Text and Call to Action */}
        <div className="flex flex-col max-w-2xl">
          <h1 className={title({ size: 'lg' })}>
            {t('common:home.greeting')}{' '}
            <span className={title({ color: 'primary', size: 'lg' })}>Vitor</span>
          </h1>

          <h2 className={title({ class: 'mt-4' })}>{t('common:home.role')}</h2>

          <p className={subtitle({ class: 'mt-6 text-lg' })}>{t('common:home.description')}</p>

          <div className="flex gap-4 mt-8">
            <Link
              className={buttonStyles({
                color: 'primary',
                radius: 'full',
                size: 'lg',
                variant: 'shadow',
              })}
              href="/contact"
            >
              {t('common:home.getInTouch')}
            </Link>
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
              {t('common:home.viewMyWork')}
            </a>
          </div>

          <div className="flex items-center gap-4 mt-10">
            <span className="text-default-600">{t('common:home.findMeOn')}</span>
            <div className="flex gap-4">
              <Link
                isExternal
                aria-label="GitHub"
                href={siteConfig.links.github}
                title={siteConfig.links.github}
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
              alt="Vitor Vaske"
              className="object-cover"
              fallbackSrc="https://via.placeholder.com/320x320?text=Vitor+Vaske"
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
          primary={t('common:home.featuredProjects.primary')}
          secondary={t('common:home.featuredProjects.secondary')}
          order={t('common:home.featuredProjects.order')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* My INsights Project */}
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              description={project.description}
              href={`/projects/${project.id}`}
              tags={project.tags}
              title={project.title}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              size: 'lg',
              variant: 'flat',
            })}
            href="/projects"
          >
            <p>{t('common:home.viewAllProjects')}</p>
          </Link>
        </div>
      </section>
    </DefaultLayout>
  )
}
