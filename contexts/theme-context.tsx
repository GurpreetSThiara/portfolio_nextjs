"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export interface Theme {
  id: string
  name: string
  description: string
  background: string
  cardBg: string
  border: string
  text: string
  textSecondary: string
  accent: string
  accentSecondary: string
  success: string
  warning: string
  error: string
  codeKeyword: string
  codeString: string
  codeComment: string
  codeFunction: string
  codeVariable: string
  gradient: string
  shadow: string
}

export const themes: Record<string, Theme> = {
  github: {
    id: "github",
    name: "GitHub Dark",
    description: "Classic GitHub dark theme with authentic developer vibes",
    background: "bg-[#0d1117]",
    cardBg: "bg-[#161b22]",
    border: "border-[#30363d]",
    text: "text-[#c9d1d9]",
    textSecondary: "text-[#8b949e]",
    accent: "text-[#58a6ff]",
    accentSecondary: "text-[#d2a8ff]",
    success: "text-[#7ee787]",
    warning: "text-[#ffa657]",
    error: "text-[#f85149]",
    codeKeyword: "text-[#ff7b72]",
    codeString: "text-[#a5d6ff]",
    codeComment: "text-[#8b949e]",
    codeFunction: "text-[#d2a8ff]",
    codeVariable: "text-[#79c0ff]",
    gradient: "from-[#58a6ff] to-[#d2a8ff]",
    shadow: "shadow-2xl",
  },
  vscode: {
    id: "vscode",
    name: "VS Code",
    description: "Microsoft VS Code inspired theme with familiar blue accents",
    background: "bg-[#1e1e1e]",
    cardBg: "bg-[#252526]",
    border: "border-[#3e3e42]",
    text: "text-[#d4d4d4]",
    textSecondary: "text-[#969696]",
    accent: "text-[#007acc]",
    accentSecondary: "text-[#4fc1ff]",
    success: "text-[#4ec9b0]",
    warning: "text-[#dcdcaa]",
    error: "text-[#f44747]",
    codeKeyword: "text-[#569cd6]",
    codeString: "text-[#ce9178]",
    codeComment: "text-[#6a9955]",
    codeFunction: "text-[#dcdcaa]",
    codeVariable: "text-[#9cdcfe]",
    gradient: "from-[#007acc] to-[#4fc1ff]",
    shadow: "shadow-xl",
  },
}

interface ThemeContextType {
  currentTheme: Theme
  setTheme: (themeId: string) => void
  availableThemes: Theme[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentThemeId, setCurrentThemeId] = useState("github")

  const setTheme = (themeId: string) => {
    if (themes[themeId]) {
      setCurrentThemeId(themeId)
    }
  }

  const currentTheme = themes[currentThemeId] || themes.github // Fallback to github theme
  const availableThemes = Object.values(themes)

  return <ThemeContext.Provider value={{ currentTheme, setTheme, availableThemes }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
