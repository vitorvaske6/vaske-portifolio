import React from 'react'
import { Link } from '@heroui/link'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { button as buttonStyles } from '@heroui/theme'
import clsx from 'clsx'
import { LeftArrowIcon, RightArrowIcon } from './icons'

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
  const router = useRouter()

  const LinkButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <NextLink
      href={href}
      locale={router.locale}
      className={
        'w-compat text-primary flex align-middle place-items-center rounded-full sm:w-auto border-2 p-1 px-3 border-primary text-sm'
      }
    >
      {children}
    </NextLink>
  )

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-default-200 pt-8">
      {prevProject?.href ? (
        <LinkButton href={prevProject.href}>
          {<LeftArrowIcon />}
          {prevProject.label || 'Previous Project'}
        </LinkButton>
      ) : (
        <LinkButton href="/projects">
          {<LeftArrowIcon />}
          Back to Projects
        </LinkButton>
      )}

      {nextProject?.label && (
        <LinkButton href={nextProject.href}>
          {nextProject.label || 'Next Project'}
          {<RightArrowIcon />}
        </LinkButton>
      )}
    </div>
  )
}

export default ProjectNavigation
