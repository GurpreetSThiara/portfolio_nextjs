"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type DisplayMode = "developer" | "professional"

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

  midnight: {
    id: "midnight",
    name: "Midnight Elite",
    description: "Deep, elegant dark theme for a sophisticated display",
    background: "bg-[#050505]",
    cardBg: "bg-[#0f0f0f]",
    border: "border-[#1f1f1f]",
    text: "text-[#f1f1f1]",
    textSecondary: "text-[#9a9a9a]",
    accent: "text-[#3b82f6]",
    accentSecondary: "text-[#8b5cf6]",
    success: "text-[#10b981]",
    warning: "text-[#f59e0b]",
    error: "text-[#ef4444]",
    codeKeyword: "text-[#ec4899]",
    codeString: "text-[#f43f5e]",
    codeComment: "text-[#4b5563]",
    codeFunction: "text-[#8b5cf6]",
    codeVariable: "text-[#06b6d4]",
    gradient: "from-[#3b82f6] to-[#8b5cf6]",
    shadow: "shadow-2xl shadow-blue-500/10",
  },
}

interface ThemeContextType {
  currentTheme: Theme
  setTheme: (themeId: string) => void
  availableThemes: Theme[]
  displayMode: DisplayMode
  setDisplayMode: (mode: DisplayMode) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentThemeId, setCurrentThemeId] = useState("github")
  const [displayMode, setDisplayMode] = useState<DisplayMode>("developer")

  // Sync with localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("portfolio-display-mode") as DisplayMode
    const savedTheme = localStorage.getItem("portfolio-theme-id")
    if (savedMode) setDisplayMode(savedMode)
    if (savedTheme && themes[savedTheme]) setCurrentThemeId(savedTheme)
  }, [])

  const setTheme = (themeId: string) => {
    if (themes[themeId]) {
      setCurrentThemeId(themeId)
      localStorage.setItem("portfolio-theme-id", themeId)
    }
  }

  const handleSetDisplayMode = (mode: DisplayMode) => {
    setDisplayMode(mode)
    localStorage.setItem("portfolio-display-mode", mode)
    
    // Auto-switch theme based on mode
    if (mode === "professional") {
      setTheme("midnight")
    } else {
      setTheme("github")
    }
  }

  const currentTheme = themes[currentThemeId] || themes.github
  const availableThemes = Object.values(themes)

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, availableThemes, displayMode, setDisplayMode: handleSetDisplayMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
