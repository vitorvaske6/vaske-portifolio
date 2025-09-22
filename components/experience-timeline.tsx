import React from 'react'
import { Link } from '@heroui/link'

import { title } from '@/components/primitives'

type WorkExperience = {
  id: number
  role: string
  company: string
  period: string
  description: string
  companyUrl?: string
}

type ExperienceTimelineProps = {
  experiences: WorkExperience[]
  className?: string
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
  className = 'mt-20',
}) => {
  return (
    <div className={className}>
      <h2 className={title({ size: 'sm', class: 'mb-10 text-center' })}>Work Experience</h2>

      <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-default-300 before:to-transparent">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-default-100 dark:bg-default-100 group-odd:md:translate-x-0 z-10">
              <span className="text-primary">{exp.id}</span>
            </div>

            <div className="w-full md:w-5/12 bg-default-100 dark:bg-default-100 p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0 mb-3">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <span className="text-sm text-default-600">{exp.period}</span>
              </div>
              <p className="text-default-600 mb-2">
                {exp.companyUrl ? (
                  <Link
                    isExternal
                    className="hover:text-primary transition-colors"
                    href={exp.companyUrl}
                    target="_blank"
                  >
                    {exp.company}
                  </Link>
                ) : (
                  exp.company
                )}
              </p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceTimeline
