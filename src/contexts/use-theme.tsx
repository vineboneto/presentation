import { createContext, ReactNode, useContext, useState } from 'react'

const ThemeContext = createContext({} as ThemeContextData)

type Props = {
  children: ReactNode
}

type ThemeContextData = {
  theme: string
  changeTheme(): void
}

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<'black' | 'light'>('black')

  function changeTheme() {
    const html = document.getElementsByTagName('html')[0]
    const oldTheme = html.getAttribute('data-theme')
    const nextTheme = oldTheme === 'black' ? 'light' : 'black'
    html.setAttribute('data-theme', nextTheme)
    setTheme(nextTheme)
  }

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
