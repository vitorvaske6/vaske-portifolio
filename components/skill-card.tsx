import React from 'react'
import { Card, CardBody } from '@heroui/card'
import {
  StarFilledIcon,
  StarEmptyIcon,
  BeginnerIcon,
  IntermediateIcon,
  AdvancedIcon,
  ExpertIcon,
} from './icons'

type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert'

export type Skill = {
  name: string
  level: SkillLevel
}

type SkillCardProps = {
  title: string
  skills: Skill[]
}

const getLevelIcon = (level: SkillLevel) => {
  switch (level) {
    case 'beginner':
      return <BeginnerIcon className="text-yellow-500" />
    case 'intermediate':
      return <IntermediateIcon className="text-blue-500" />
    case 'advanced':
      return <AdvancedIcon className="text-green-500" />
    case 'expert':
      return <ExpertIcon className="text-purple-500" />
    default:
      return <BeginnerIcon className="text-gray-500" />
  }
}

const renderStars = (rating: number) => {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  for (let i = 0; i < fullStars; i++) {
    stars.push(<StarFilledIcon key={`filled-${i}`} className="text-yellow-500" />)
  }

  if (hasHalfStar) {
    stars.push(<StarFilledIcon key="half" className="text-yellow-500 opacity-50" />)
  }

  const remainingStars = 5 - Math.ceil(rating)
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<StarEmptyIcon key={`empty-${i}`} className="text-gray-300" />)
  }

  return stars
}

const getLevelText = (level: SkillLevel) => {
  switch (level) {
    case 'beginner':
      return 'Beginner'
    case 'intermediate':
      return 'Intermediate'
    case 'advanced':
      return 'Advanced'
    case 'expert':
      return 'Expert'
    default:
      return 'Beginner'
  }
}

export const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <Card>
      <CardBody>
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="flex flex-col gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <div className="flex items-center gap-2">
                  {getLevelIcon(skill.level)}
                  <span className="text-sm text-default-600">{getLevelText(skill.level)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

export default SkillCard
