import React from 'react'
import { Image } from '@heroui/image'

type TechStackItemProps = {
  name: string
  description: string
  imageSrc?: string
  iconSrc?: string
}

export const TechStackItem: React.FC<TechStackItemProps> = ({
  name,
  description,
  imageSrc,
  iconSrc,
}) => {
  // Use iconSrc as fallback if imageSrc is not provided
  const imageSource = imageSrc || iconSrc

  return (
    <div className="bg-white dark:bg-default-200 p-4 rounded-lg flex flex-col items-center">
      <Image
        alt={name}
        className="object-contain h-10 mb-2"
        height={40}
        src={imageSource || ''}
        width={40}
      />
      <span className="text-sm font-medium">{name}</span>
      <span className="text-xs text-default-500">{description}</span>
    </div>
  )
}

export default TechStackItem
