import React from 'react'

import { title } from '@/components/primitives'

type SectionTitleProps = {
  primary: string
  secondary?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  primary,
  secondary,
  className = 'text-center',
  size = 'md',
}) => {
  return (
    <h2 className={title({ size, class: className })}>
      {secondary && `${secondary} `}
      {secondary && ' '}
      <span className={title({ color: 'primary', size })}>{primary}</span>
    </h2>
  )
}

export default SectionTitle
