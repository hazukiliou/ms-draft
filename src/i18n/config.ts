export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ko', 'zh-TW'],
} as const

export type Locale = (typeof i18n)['locales'][number]

export const localeLabels = {
  en: 'English',
  'zh-TW': '繁體中文',
  ko: '한국어',
} satisfies Record<Locale, string>
