import React from 'react'

type TagProps = {
  label: string
}

export const Tag: React.FC<TagProps> = ({ label }) => {
  return <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">{label}</span>
}

type TagListProps = {
  tags: string[]
  className?: string
}

export const TagList: React.FC<TagListProps> = ({
  tags,
  className = 'flex flex-wrap gap-2 mt-4',
}) => {
  return (
    <div className={className}>
      {tags.map((tag, index) => (
        <Tag key={index} label={tag} />
      ))}
    </div>
  )
}

export default TagList
