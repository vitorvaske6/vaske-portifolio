import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import translation files
import enCommon from '@/config/locales/en/common.json'
import ptCommon from '@/config/locales/pt/common.json'
import enProjects from '@/config/locales/en/projects.json'
import ptProjects from '@/config/locales/pt/projects.json'
import enSkills from '@/config/locales/en/skills.json'
import ptSkills from '@/config/locales/pt/skills.json'

const resources = {
  en: {
    common: enCommon,
    projects: enProjects,
    skills: enSkills,
  },
  pt: {
    common: ptCommon,
    projects: ptProjects,
    skills: ptSkills,
  },
}

const detectionOptions = {
  // Order and from where user language should be detected
  order: ['localStorage', 'navigator', 'htmlTag'],

  // Keys or params to lookup language from
  lookupLocalStorage: 'i18nextLng',

  // Cache user language on
  caches: ['localStorage'],

  // Optional expire and domain for set cookie
  excludeCacheFor: ['cimode'], // Languages to not persist (dev mode)

  // Optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  cookieOptions: { path: '/', sameSite: 'strict' as const },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,

    // Language to use if translations in user language are not available
    fallbackLng: 'en',

    debug: process.env.NODE_ENV === 'development',

    // Detection options
    detection: detectionOptions,

    interpolation: {
      escapeValue: false, // Not needed for react as it escapes by default
    },

    // Separate different namespaces (optional)
    defaultNS: 'common',
    ns: ['common', 'projects', 'skills'],
  })

export default i18n
