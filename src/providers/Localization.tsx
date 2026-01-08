import React, { createContext, useContext, useState, useMemo, useCallback } from 'react'
import { IntlProvider } from 'react-intl'
import { getStorage, setStorage } from '@/utils/storage'
import enMessages from '@/locales/en.json'
import arMessages from '@/locales/ar.json'
import type { LocaleType } from '@/types/custom'

type TranslationMessages = Record<string, string>
const messages: Record<LocaleType, TranslationMessages> = {
  en: enMessages,
  ar: arMessages,
}

interface LocaleContextValue {
  locale: LocaleType
  setLocale: (locale: LocaleType) => void
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined)

export const LocalizationProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<LocaleType>(() => {
    const storedLocale = getStorage<LocaleType>('app-locale', 'ar')
    return storedLocale ?? 'ar'
  })

  const handleSetLocale = useCallback((newLocale: LocaleType) => {
    setLocaleState(newLocale)
    setStorage<string>('app-locale', newLocale)
  }, [])

  const value = useMemo(
    () => ({
      locale,
      setLocale: handleSetLocale,
    }),
    [handleSetLocale, locale],
  )

  return (
    <LocaleContext.Provider value={value}>
      <IntlProvider
        locale={locale}
        messages={messages[locale]}
        defaultLocale="en"
        onError={err => {
          if (err.code === 'MISSING_TRANSLATION') return
        }}
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLocale = () => {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within a LocalizationProvider')
  }
  return context
}
