'use client'

import LanguageSwitcher from '@/components/common/LanguageSwitcher'
import { useTranslation } from '@/contexts/i18nContext'
import type { Locale } from '@/i18n/config'

export default function Header({ locale }: { locale: Locale }) {
  const { t } = useTranslation()

  return (
    <header className="flex items-center justify-between border-b border-gray-500 px-6 py-4 text-white">
      <div className="text-lg font-semibold">{t('title')}</div>

      <LanguageSwitcher locale={locale} />
    </header>
  )
}
