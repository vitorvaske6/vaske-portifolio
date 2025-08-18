import { Skill } from '@/components/skill-card'

export const programmingLanguages: Skill[] = [
  { name: 'TypeScript', level: 'expert' },
  { name: 'JavaScript', level: 'expert' },
  { name: 'SQL', level: 'expert' },
  { name: 'Python', level: 'advanced' },
  { name: 'HTML', level: 'advanced' },
  { name: 'CSS', level: 'advanced' },
  { name: 'C#', level: 'intermediate' },
  { name: 'Java', level: 'intermediate' },
]

export const frameworks: Skill[] = [
  { name: 'NodeJS', level: 'advanced' },
  { name: 'NextJS', level: 'advanced' },
  { name: 'NestJS', level: 'advanced' },
  { name: 'React', level: 'advanced' },
  { name: 'Tailwind', level: 'advanced' },
]

export const tools: Skill[] = [
  { name: 'REST API', level: 'expert' },
  { name: 'PowerBI', level: 'expert' },
  { name: 'NoSQL', level: 'intermediate' },
  { name: 'AWS', level: 'intermediate' },
  { name: 'Ansible', level: 'intermediate' },
  { name: 'Terraform', level: 'intermediate' },
  { name: 'Docker', level: 'beginner' },
]

export const experiences = [
  {
    id: 3,
    role: 'Software Engineer',
    company: 'F1RST Digital Services (Santander)',
    companyUrl: 'https://www.linkedin.com/company/f1rstdigitalservices/',
    period: '2025 - Present',
    description:
      "As an automation developer at F1RST Digital Services, I'm responsible for automating the provision of cloud and on-premises NoSQL database services. Using Ansible playbooks, Camunda workflow and other programing languages like Python, JavaScript and Shell, I ensure their stability, security and efficiency",
  },
  {
    id: 2,
    role: 'Fullstack Developer & Tech Lead',
    company: 'MGITECH',
    companyUrl: 'https://www.linkedin.com/company/mgitech',
    period: '2022 - 2025',
    description:
      'As a fullstack developer and technical lead at MGITECH, I specialized in data-driven solutions and web application development. My expertise included building interactive dashboards with Power BI, automating ETL processes using Python, and optimizing SQL queries to enhance business operations. Lastly, I was leading the integration of Power BI Embedded dashboards into a Next.js web application, utilizing TypeScript and Prisma with SQL Server for optimal performance. Additionally, I’ve had some experience in Continuous Integration and Deployment (CI/CD) and unit testing, ensuring code quality and reliability',
  },
  {
    id: 1,
    role: 'Solutions Analyst Intern',
    company: 'Printer One',
    companyUrl: 'https://www.linkedin.com/company/printer-one/',
    period: '2021 - 2021',
    description:
      'I was responsible for implementing an integration between the open-source document management system "Alfresco" and the self-service BI tool "Power BI" during this internship role.',
  },
]

export const education = [
  {
    id: 3,
    role: 'Postgraduate in Software Engineering',
    institution: 'University of Mogi das Cruzes',
    period: '2024-2025',
  },
  {
    id: 2,
    role: 'English Certification - B2 Linguaskill (Advanced)',
    institution: 'University of Cambridge',
    period: '2022',
  },
  {
    id: 1,
    role: "Bachelor's in Information Systems",
    institution: 'University of Mogi das Cruzes',
    period: '2018-2021',
  },
]
