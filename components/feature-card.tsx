import React from 'react'
import { Image } from '@heroui/image'

type FeatureCardProps = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  children?: React.ReactNode
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  children,
}) => {
  return (
    <div className="bg-default-100 dark:bg-default-100 rounded-xl overflow-hidden">
      <div className="h-48 overflow-hidden">
        <Image
          alt={imageAlt}
          className="object-cover w-full"
          height={300}
          src={imageSrc}
          width={400}
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-default-600 mt-2">{description}</p>
        {children}
      </div>
    </div>
  )
}

export default FeatureCard
