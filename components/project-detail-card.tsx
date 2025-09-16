import React from 'react'

type ProjectDetail = {
  label: string
  value: string | React.ReactNode
}

type ProjectDetailCardProps = {
  details: ProjectDetail[]
}

export const ProjectDetailCard: React.FC<ProjectDetailCardProps> = ({ details }) => {
  return (
    <div className="bg-default-100 dark:bg-default-100 rounded-xl p-6">
      <h3 className="text-lg font-bold mb-4">Project Details</h3>
      <div className="space-y-3">
        {details.map((detail, index) => (
          <div key={index}>
            <span className="text-sm text-default-500">{detail.label}:</span>
            <p className="font-medium mt-1">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectDetailCard
