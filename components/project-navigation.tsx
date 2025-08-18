import React from 'react'
import { Link } from '@heroui/link'
import { button as buttonStyles } from '@heroui/theme'

type ProjectNavigationProps = {
  prevProject?: {
    href: string
    label?: string
  }
  nextProject?: {
    href: string
    label?: string
  }
}

export const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  prevProject,
  nextProject,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-default-200 pt-8">
      {prevProject?.href ? (
        <Link
          className={buttonStyles({
            color: 'primary',
            radius: 'full',
            variant: 'ghost',
          })}
          href={prevProject.href}
        >
          <svg
            className="mr-2"
            fill="none"
            height="18"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          {prevProject.label || 'Previous Project'}
        </Link>
      ) : (
        <Link
          className={buttonStyles({
            color: 'primary',
            radius: 'full',
            variant: 'ghost',
          })}
          href="/projects"
        >
          <svg
            className="mr-2"
            fill="none"
            height="18"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Projects
        </Link>
      )}

      {nextProject?.label && (
        <Link
          className={buttonStyles({
            color: 'primary',
            radius: 'full',
            variant: 'ghost',
          })}
          href={nextProject.href}
        >
          {nextProject.label || 'Next Project'}
          <svg
            className="ml-2"
            fill="none"
            height="18"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      )}
    </div>
  )
}

export default ProjectNavigation
