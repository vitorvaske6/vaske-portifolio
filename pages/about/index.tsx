import { Image } from '@heroui/image'
import { Link } from '@heroui/link'
import { button as buttonStyles } from '@heroui/theme'

import { title, subtitle } from '@/components/primitives'
import DefaultLayout from '@/layouts/default'
import { SkillCard } from '@/components'
import {
  frameworks,
  programmingLanguages,
  tools,
  experiences,
  education,
} from '@/config/skills_experience'
import { useLocalizedSkills } from '@/config/localizedSkills'
import { useStateContext } from '@/context/ContextProvider'
import { useLanguage } from '@/context/LanguageProvider'

export default function AboutPage() {
  const { currentLang } = useStateContext()
  const { t, language } = useLanguage()
  const localizedSkills = useLocalizedSkills()

  // Convert language format for resume file naming
  const resumeLang = language === 'pt' ? 'br' : language

  return (
    <DefaultLayout>
      <section className="py-16">
        <div className="text-center">
          <h1 className={title({ size: 'md' })}>
            {t('common:about.title').split(' ')[0]}{' '}
            <span className={title({ color: 'primary', size: 'md' })}>
              {t('common:about.title').split(' ')[1] || 'Me'}
            </span>
          </h1>
          <p className={subtitle({ class: 'mt-4 mx-auto' })}>{t('common:about.subtitle')}</p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden">
              <Image
                alt="Vitor Vaske"
                className="object-cover"
                fallbackSrc="https://via.placeholder.com/320x320?text=Vitor+Vaske"
                height={320}
                src="/old_project/images/profile2.jpeg"
                width={320}
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Vitor Vaske</h2>
            <h3 className="text-xl text-primary font-medium mb-6">{t('common:home.role')}</h3>

            <p className="text-default-600 mb-4">{t('common:about.bio.paragraph1')}</p>

            <p className="text-default-600 mb-6">{t('common:about.bio.paragraph2')}</p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium">{t('common:about.personalInfo.name')}</p>
                <p className="text-default-600">Vitor Vasconcelos</p>
              </div>
              <div>
                <p className="font-medium">{t('common:about.personalInfo.email')}</p>
                <p className="text-default-600">vitorvaske6@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">{t('common:about.personalInfo.location')}</p>
                <p className="text-default-600">Mogi das Cruzes, SP, {t('common:country')}</p>
              </div>
              <div>
                <p className="font-medium">{t('common:about.personalInfo.availability')}</p>
                <p className="text-primary">{t('common:about.personalInfo.availabilityText')}</p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                className={buttonStyles({
                  color: 'primary',
                  radius: 'full',
                  variant: 'shadow',
                })}
                href="/contact"
              >
                {t('common:about.personalInfo.contactMe')}
              </Link>
              <a
                className={buttonStyles({
                  className: 'ml-4',
                  radius: 'full',
                  variant: 'bordered',
                })}
                download="Vitor-Vasconcelos-Resume.pdf"
                href={`/resume/${resumeLang}.pdf`}
              >
                {t('common:about.personalInfo.downloadResume')}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="text-center">
            <h2 className={title({ size: 'sm' })}>
              {t('common:about.skillsSection.title').split(' ')[0]}{' '}
              <span className={title({ color: 'primary', size: 'sm' })}>
                {t('common:about.skillsSection.title').split(' ').slice(1).join(' ')}
              </span>
            </h2>
            <p className={subtitle({ class: 'mt-4 mx-auto' })}>
              {t('common:about.skillsSection.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <SkillCard
              skills={localizedSkills.programmingLanguages}
              title={t('skills:sections.programmingLanguages')}
            />
            <SkillCard
              skills={localizedSkills.frameworks}
              title={t('skills:sections.frameworks')}
            />
            <SkillCard skills={localizedSkills.tools} title={t('skills:sections.tools')} />
          </div>
        </div>

        {/* Education & Experience */}
        <div className="mt-24">
          <div className="text-start mb-4">
            <h2 className={title({ size: 'sm', class: 'mb-12' })}>
              {t('common:about.experienceEducation.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="bg-primary/20 text-primary w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <svg
                    fill="none"
                    height="20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </span>
                {t('common:about.experience')}
              </h3>
              <div className="space-y-8">
                {localizedSkills.experiences.map((exp, idx) => (
                  <div
                    key={exp.role + idx}
                    className={`border-l-2 ${idx === localizedSkills.experiences.length - 1 ? 'border-primary/40' : 'border-primary'} pl-6${idx !== localizedSkills.experiences.length - 1 ? ' pb-8' : ''} relative`}
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                    <h4 className="text-xl font-bold">{exp.role}</h4>
                    <p className="text-primary">{exp.company}</p>
                    <p className="text-inherit">{exp.period}</p>
                    <p className="mt-2 text-default-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="bg-primary/20 text-primary w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <svg
                    fill="none"
                    height="20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </span>
                {t('common:about.education')}
              </h3>
              <div className="space-y-8">
                {localizedSkills.education.map((edu, idx) => (
                  <div
                    key={edu.role + idx}
                    className={`border-l-2 ${idx === localizedSkills.education.length - 1 ? 'border-primary/40' : 'border-primary'} pl-6${idx !== localizedSkills.education.length - 1 ? ' pb-8' : ''} relative`}
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                    <h4 className="text-xl font-bold">{edu.role}</h4>
                    <p className="text-primary">{edu.institution}</p>
                    <p className="text-inherit">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="mt-24 bg-default-100 dark:bg-default-100 rounded-xl p-8">
          <h2 className={title({ size: 'sm', class: 'text-center' })}>
            {t('common:about.personalInterests.title')}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="text-primary"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 8c0 2-2 2-2 4v1a3 3 0 0 1-6 0v-1c0-2-2-2-2-4 0-3.3 2.7-6 6-6s6 2.7 6 6Z" />
                  <path d="M18 18a6 6 0 0 1-12 0" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">
                {t('common:about.personalInterests.newTech.title')}
              </h3>
              <p className="text-default-600">
                {t('common:about.personalInterests.newTech.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="text-primary"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <path d="M9 9h6v6H9z" />
                  <path d="M9 1v2" />
                  <path d="M15 1v2" />
                  <path d="M9 21v2" />
                  <path d="M15 21v2" />
                  <path d="M20 9h2" />
                  <path d="M20 14h2" />
                  <path d="M1 9h2" />
                  <path d="M1 14h2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">
                {t('common:about.personalInterests.automation.title')}
              </h3>
              <p className="text-default-600">
                {t('common:about.personalInterests.automation.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="text-primary"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
                  <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3" />
                  <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">
                {t('common:about.personalInterests.ux.title')}
              </h3>
              <p className="text-default-600">
                {t('common:about.personalInterests.ux.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="text-primary"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">
                {t('common:about.personalInterests.api.title')}
              </h3>
              <p className="text-default-600">
                {t('common:about.personalInterests.api.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
