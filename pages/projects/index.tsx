import { Link } from '@heroui/link'
import { button as buttonStyles } from '@heroui/theme'

import { subtitle, title } from '@/components/primitives'
import { FeatureCard, SectionTitle, TagList } from '@/components'
import DefaultLayout from '@/layouts/default'
import { getAllProjects } from '@/config/projects'

export default function ProjectsPage() {
  // Get all projects from our data source
  const projects = getAllProjects()

  return (
    <DefaultLayout>
      <section className="py-16">
        <div className="text-center">
          <SectionTitle primary="Projects" secondary="My" />
          <p className={subtitle({ class: 'mt-4 mx-auto' })}>
            A collection of my recent work and case studies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project) => (
            <FeatureCard
              key={project.id}
              description={project.subtitle}
              imageAlt={project.title}
              imageSrc={project.coverImage}
              title={project.title}
            >
              <TagList tags={project.tags} />
              <Link
                className={buttonStyles({
                  className: 'mt-6',
                  color: 'primary',
                  radius: 'full',
                  variant: 'light',
                })}
                href={`/projects/${project.id}`}
              >
                View Details
              </Link>
            </FeatureCard>
          ))}
        </div>

        {/* GitHub Section */}
        <div className="mt-24 text-center">
          <h2 className={title({ size: 'sm', class: 'mb-6' })}>Explore More Projects</h2>
          <p className="text-default-600 mb-8 max-w-xl mx-auto">
            Check out more of my projects and contributions on GitHub, including open source work
            and personal experiments.
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
          >
            View GitHub Profile
          </Link>
        </div>
      </section>
    </DefaultLayout>
  )
}
