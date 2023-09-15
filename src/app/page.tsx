"use client"
import HoverShinyEffect from '@/components/Shiny'
import { About } from '@/components/content/About'
import { Contact } from '@/components/content/Contact'
import { Projects } from '@/components/content/Projects'
import { Skills } from '@/components/content/Skills'
import { sorter } from '@/utils/CustomFunctions'
import { useTheme } from '@nextui-org/react'
import { useEffect, useRef } from 'react'

export type SkillIcon = {
  src: string,
}

export type SkillsType = {
  key: number
  name: string
  percentage: number
  icon: SkillIcon
}

const skills: SkillsType[] = [
  { key: 0, name: 'TypeScript', icon: { src: '' }, percentage: 90 },
  { key: 1, name: 'JavaScript', icon: { src: '' }, percentage: 90 },
  { key: 2, name: 'Python', icon: { src: '' }, percentage: 80 },
  { key: 3, name: 'HTML', icon: { src: '' }, percentage: 80 },
  { key: 4, name: 'CSS', icon: { src: '' }, percentage: 60 },
  { key: 5, name: 'C#', icon: { src: '' }, percentage: 50 },
  { key: 6, name: 'Java', icon: { src: '' }, percentage: 30 },
  { key: 7, name: 'SQL', icon: { src: '' }, percentage: 90 },
  { key: 8, name: 'NoSQL', icon: { src: '' }, percentage: 50 },
  { key: 9, name: 'NodeJS', icon: { src: '' }, percentage: 70 },
  { key: 10, name: 'NextJS', icon: { src: '' }, percentage: 70 },
  { key: 11, name: 'React', icon: { src: '' }, percentage: 60 },
  { key: 12, name: 'Tailwind', icon: { src: '' }, percentage: 70 },
  { key: 13, name: 'PowerBI', icon: { src: '' }, percentage: 90 },
  { key: 14, name: 'Docker', icon: { src: '' }, percentage: 30 },
  { key: 15, name: 'REST API', icon: { src: '' }, percentage: 90 },
]

export default function Home() {
  const { theme } = useTheme()

  return (
    <main className="grid gap-x-12 bg-gray-950 w-[100vw] min-w-[484px]">
      <span id='about' />
      <About />
      {/* <div id='projects' className='grid place-items-center py-24 w-[100vw]' style={{ backgroundColor: theme?.colors.background.value }}> */}
        <Projects />
      {/* </div> */}
      <div id="skills" className='bg-gray-950 grid place-items-center py-24 min-h-screen min-w-[484px]'>
        <Skills skills={skills.sort(sorter('percentage', 'number', 'desc'))} />
      </div>
      <div id="contact" className='bg-black grid place-items-center py-24 min-w-[484px] min-h-screen' >
        <Contact />
      </div>
    </main>
  )
}
