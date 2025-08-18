import React from 'react'

import TechStackItem from './tech-stack-item'

type TechItem = {
  name: string
  description: string
  imageSrc?: string
  iconSrc?: string
}

type TechCategoryProps = {
  title: string
  icon: React.ReactNode
  items: TechItem[]
}

const TechCategory: React.FC<TechCategoryProps> = ({ title, icon, items }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center mr-2">
          {icon}
        </span>
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {items.map((item, index) => (
          <TechStackItem
            key={index}
            description={item.description}
            iconSrc={item.iconSrc}
            imageSrc={item.imageSrc}
            name={item.name}
          />
        ))}
      </div>
    </div>
  )
}

type TechnologyStackProps = {
  categories: {
    title: string
    icon: React.ReactNode
    items: TechItem[]
  }[]
}

export const TechnologyStack: React.FC<TechnologyStackProps> = ({ categories }) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8">Technology Stack</h2>
      <div className="space-y-8">
        {categories.map((category, index) => (
          <TechCategory
            key={index}
            icon={category.icon}
            items={category.items}
            title={category.title}
          />
        ))}
      </div>
    </div>
  )
}

export default TechnologyStack
