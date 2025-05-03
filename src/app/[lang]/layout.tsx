import '@/styles/globals.css'

import { Geist, Geist_Mono } from 'next/font/google'

import Header from '@/components/common/Header'
import { I18nProvider } from '@/contexts/i18nContext'
import { i18n } from '@/i18n/config'
import { isLocale } from '@/i18n/utils'
import { getDictionary } from '@/lib/getDictionary'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const validLang = isLocale(lang) ? lang : i18n.defaultLocale
  const dictionary = await getDictionary(validLang)

  return (
    <I18nProvider dictionary={dictionary}>
      <html lang={validLang}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Header locale={validLang} />
          {children}
        </body>
      </html>
    </I18nProvider>
  )
}
