'use client'

import { createContext, useContext } from 'react'

import type { Dictionary } from '@/types/dictionary'

type I18nContextType = {
  t: (key: string) => string
}

export const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({
  children,
  dictionary,
}: Readonly<{
  children: React.ReactNode
  dictionary: Dictionary
}>) {
  const t = (key: string) => {
    const value = dictionary[key]
    if (value) return value

    if (process.env.NODE_ENV === 'development') {
      console.warn(`[i18n] Missing key: "${key}"`)
    }

    return `❗️${key}❗️`
  }

  return <I18nContext.Provider value={{ t }}>{children}</I18nContext.Provider>
}

export function useTranslation() {
  const context = useContext(I18nContext)
  if (!context)
    throw new Error('useTranslation must be used within a I18nProvider')
  return context
}
