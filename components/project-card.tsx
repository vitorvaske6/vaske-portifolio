import React from 'react'
import { Link } from '@heroui/link'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import TagList from './tag-list'

type ProjectCardProps = {
  title: string
  description: string
  tags: string[]
  href?: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  href = '/projects',
}) => {
  const { t } = useTranslation('common')
  const router = useRouter()

  return (
    <div className="bg-default-100 dark:bg-default-100 rounded-xl p-6 flex flex-col hover:shadow-lg transition-all">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-default-600 mt-2">{description}</p>
      <TagList tags={tags} />
      <NextLink
        href={href}
        locale={router.locale}
        className="self-start mt-6 text-primary hover:underline"
      >
        {t('home.featuredProjects.viewProject')}
      </NextLink>
    </div>
  )
}

export default ProjectCard
