'use client'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

import { i18n, localeLabels } from '@/i18n/config'
import type { Locale } from '@/i18n/config'

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleLocaleChange = (targetLang: Locale) => {
    if (targetLang === locale) return
    router.push(`/${targetLang}`)
  }

  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex w-28 items-center gap-1 rounded-md border border-white/20 px-2 py-1.5 text-left text-white transition hover:bg-white/10"
        onClick={() => setIsOpen(!isOpen)}
      >
        🌐 {localeLabels[locale]}
      </button>
      <div
        className={clsx(
          'absolute right-0 z-10 mt-2 w-28 overflow-hidden rounded-md border border-white/10 bg-[#1a1a1a] shadow-lg transition-all duration-200',
          isOpen
            ? 'pointer-events-auto scale-100 opacity-100'
            : 'pointer-events-none scale-95 opacity-0'
        )}
      >
        {i18n.locales.map((langOption) => (
          <button
            key={langOption}
            className={clsx(
              'w-full px-4 py-2 text-left',
              locale === langOption
                ? 'bg-zinc-800 font-semibold text-white ring-1 ring-white/10'
                : 'text-gray-200 transition-all duration-150 hover:bg-zinc-700'
            )}
            onClick={() => handleLocaleChange(langOption)}
          >
            {localeLabels[langOption]}
          </button>
        ))}
      </div>
    </div>
  )
}
