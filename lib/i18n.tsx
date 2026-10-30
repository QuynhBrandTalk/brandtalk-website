'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { L, Lang } from './content'

const STORAGE_KEY = 'brandtalk.lang'

type LangContextValue = {
  lang: Lang
  setLang: (next: Lang) => void
  /** Pick the current language out of a bilingual string. */
  t: (value: L) => string
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  // Vietnamese first: the audience is Vietnamese SMEs and OCOP producers.
  const [lang, setLangState] = useState<Lang>('vi')

  // Read the stored choice after hydration so server and client first paint
  // agree. Storage can throw in private windows, so every access is guarded.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored === 'vi' || stored === 'en') {
        setLangState(stored)
      }
    } catch {
      // No stored preference available; the default stands.
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Preference simply will not persist; the session still works.
    }
  }, [])

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      setLang,
      t: (entry: L) => entry[lang],
    }),
    [lang, setLang]
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) {
    throw new Error('useLang must be used inside LangProvider')
  }
  return ctx
}
