'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'

type Themes = 'light' | 'dark' | null
type Languages = 'en' | 'br' | null

const StateContext = createContext<any>({})

export type ContextValues = {
  currentTheme: Themes
  setCurrentTheme: React.Dispatch<React.SetStateAction<Themes>>
  currentLang: Languages
  setCurrentLang: React.Dispatch<React.SetStateAction<Languages>>
}

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<Themes>('light')
  const [currentLang, setCurrentLang] = useState<Languages>('en')

  useEffect(() => {
    const updateCssTheme = () => {
      const htmlElement = document.documentElement
      const dataTheme = htmlElement.getAttribute('data-theme')
      setCurrentTheme(dataTheme as Themes)
    }

    updateCssTheme()

    const observer = new MutationObserver(updateCssTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => observer.disconnect()
  }, [])

  const value: ContextValues = {
    currentTheme,
    setCurrentTheme,
    currentLang,
    setCurrentLang,
  }

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext)
