import React from 'react'
import { Link } from '@heroui/link'
import { Image } from '@heroui/image'
import { button as buttonStyles } from '@heroui/theme'

import { title as titleStyle, subtitle as subtitleStyle } from '@/components/primitives'

type ProjectHeaderProps = {
  title: string
  subtitle: string
  logoSrc?: string
  logoAlt?: string
  websiteUrl?: string
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  title,
  subtitle: subtitleText,
  logoSrc,
  logoAlt = 'Project Logo',
  websiteUrl,
}) => {
  // Split the title to apply primary color to the last word
  const words = title.split(' ')
  const lastWord = words.pop()
  const firstPart = words.join(' ')

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
      {logoSrc && (
        <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center p-4 shadow-md">
          <Image alt={logoAlt} className="object-contain" height={80} src={logoSrc} width={80} />
        </div>
      )}
      <div>
        <h1 className={titleStyle({ size: 'md' })}>
          {firstPart}{' '}
          <span className={titleStyle({ color: 'primary', size: 'md' })}>{lastWord}</span>
        </h1>
        <p className={subtitleStyle({ class: 'mt-2' })}>{subtitleText}</p>
      </div>
      {websiteUrl && (
        <div className="md:ml-auto flex gap-4">
          <Link
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              variant: 'flat',
            })}
            href={websiteUrl}
            rel="noopener noreferrer"
            target="_blank"
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
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" x2="21" y1="14" y2="3" />
            </svg>
            Visit Website
          </Link>
        </div>
      )}
    </div>
  )
}

export default ProjectHeader
