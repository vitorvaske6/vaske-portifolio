import { useLanguage } from '@/context/LanguageProvider'
import { Skill } from '@/components/skill-card'

export const useLocalizedSkills = () => {
  const { t } = useLanguage()

  const programmingLanguages: Skill[] = [
    { name: 'TypeScript', level: 'expert' },
    { name: 'JavaScript', level: 'expert' },
    { name: 'SQL', level: 'expert' },
    { name: 'Python', level: 'advanced' },
    { name: 'HTML', level: 'advanced' },
    { name: 'CSS', level: 'advanced' },
    { name: 'C#', level: 'intermediate' },
    { name: 'Java', level: 'intermediate' },
  ]

  const frameworks: Skill[] = [
    { name: 'NodeJS', level: 'advanced' },
    { name: 'NextJS', level: 'advanced' },
    { name: 'NestJS', level: 'advanced' },
    { name: 'React', level: 'advanced' },
    { name: 'Tailwind', level: 'advanced' },
  ]

  const tools: Skill[] = [
    { name: 'REST API', level: 'expert' },
    { name: 'PowerBI', level: 'expert' },
    { name: 'NoSQL', level: 'intermediate' },
    { name: 'AWS', level: 'intermediate' },
    { name: 'Ansible', level: 'intermediate' },
    { name: 'Terraform', level: 'intermediate' },
    { name: 'Docker', level: 'beginner' },
  ]

  const experiences = [
    {
      id: 3,
      role: t('skills:experience.0.role'),
      company: t('skills:experience.0.company'),
      companyUrl: 'https://www.linkedin.com/company/f1rstdigitalservices/',
      period: t('skills:experience.0.period'),
      description: t('skills:experience.0.description'),
    },
    {
      id: 2,
      role: t('skills:experience.1.role'),
      company: t('skills:experience.1.company'),
      companyUrl: 'https://www.linkedin.com/company/mgitech',
      period: t('skills:experience.1.period'),
      description: t('skills:experience.1.description'),
    },
    {
      id: 1,
      role: t('skills:experience.2.role'),
      company: t('skills:experience.2.company'),
      companyUrl: 'https://www.linkedin.com/company/printer-one/',
      period: t('skills:experience.2.period'),
      description: t('skills:experience.2.description'),
    },
  ]

  const education = [
    {
      id: 3,
      role: t('skills:education.0.role'),
      institution: t('skills:education.0.institution'),
      period: t('skills:education.0.period'),
    },
    {
      id: 2,
      role: t('skills:education.1.role'),
      institution: t('skills:education.1.institution'),
      period: t('skills:education.1.period'),
    },
    {
      id: 1,
      role: t('skills:education.2.role'),
      institution: t('skills:education.2.institution'),
      period: t('skills:education.2.period'),
    },
  ]

  return {
    programmingLanguages,
    frameworks,
    tools,
    experiences,
    education,
  }
}