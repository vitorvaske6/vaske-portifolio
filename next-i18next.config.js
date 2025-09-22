const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
  },
  localePath: path.resolve('./public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  serializeConfig: false,
  strictMode: true,
  // Load all namespaces for all locales
  ns: ['common', 'projects', 'skills'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false, // React already does escaping
  },
  react: {
    useSuspense: false, // Prevents hydration issues
  },
}