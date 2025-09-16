import React from 'react'

import { title } from '@/components/primitives'

type SectionTitleProps = {
  primary: string
  secondary?: string
  order: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  primary,
  secondary,
  order,
  className = 'text-center',
  size = 'md',
}) => {
  return (
    <h2 className={title({ size, class: className })}>
      {order === 'primary' ? (
        <>
          {secondary && `${secondary} `}
          {secondary && ' '}
          <span className={title({ color: 'primary', size })}>{primary}</span>
        </>
      ) : (
        <>
          <span className={title({ color: 'primary', size })}>{primary}</span>
          {secondary && ' '}
          {secondary && `${secondary} `}
        </>
      )}
    </h2>
  )
}

export default SectionTitle
