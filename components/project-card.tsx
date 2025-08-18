import React from 'react'
import { Link } from '@heroui/link'

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
  return (
    <div className="bg-default-50 dark:bg-default-100 rounded-xl p-6 flex flex-col hover:shadow-lg transition-all">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-default-600 mt-2">{description}</p>
      <TagList tags={tags} />
      <Link className="self-start mt-6 text-primary hover:underline" href={href}>
        View Project
      </Link>
    </div>
  )
}

export default ProjectCard
