"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Palette, ChevronDown } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentTheme, setTheme, availableThemes } = useTheme()

  // Add safety check
  if (!currentTheme) {
    return null
  }

  const getColorClass = (colorClass: string, type: "bg" | "border" = "bg") => {
    if (!colorClass) return ""
    return colorClass.replace("text-", `${type}-`)
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-4 py-2 ${currentTheme.cardBg} ${currentTheme.border} border rounded-lg ${currentTheme.text} hover:${currentTheme.accent} transition-all duration-300 ${currentTheme.shadow}`}
        >
          <Palette className="w-4 h-4" />
          <span className="font-mono text-sm">{currentTheme.name}</span>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className={`absolute top-full right-0 mt-2 w-80 ${currentTheme.cardBg} ${currentTheme.border} border rounded-lg ${currentTheme.shadow} overflow-hidden`}
            >
              <div className={`px-4 py-3 ${currentTheme.border} border-b`}>
                <h3 className={`font-bold ${currentTheme.text} font-mono`}>Choose Theme</h3>
                <p className={`text-sm ${currentTheme.textSecondary} font-mono`}>
                  <span className={currentTheme.codeComment}>{"// "}</span>
                  Select your preferred developer aesthetic
                </p>
              </div>

              <div className="max-h-96 overflow-y-auto">
                {availableThemes.map((theme) => (
                  <motion.button
                    key={theme.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setTheme(theme.id)
                      setIsOpen(false)
                    }}
                    className={`w-full text-left px-4 py-3 hover:${theme.cardBg} transition-all duration-200 ${
                      currentTheme.id === theme.id ? `${theme.cardBg} ${theme.border} border-l-4` : ""
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className={`font-bold ${theme.text} font-mono`}>{theme.name}</h4>
                      <div className="flex gap-1">
                        <div className={`w-3 h-3 rounded-full ${getColorClass(theme.accent)}`}></div>
                        <div className={`w-3 h-3 rounded-full ${getColorClass(theme.accentSecondary)}`}></div>
                        <div className={`w-3 h-3 rounded-full ${getColorClass(theme.success)}`}></div>
                      </div>
                    </div>
                    <p className={`text-sm ${theme.textSecondary} font-mono leading-relaxed`}>{theme.description}</p>
                  </motion.button>
                ))}
              </div>

              <div className={`px-4 py-3 ${currentTheme.border} border-t`}>
                <p className={`text-xs ${currentTheme.textSecondary} font-mono`}>
                  <span className={currentTheme.codeComment}>{"// "}</span>
                  All themes are fully responsive and developer-focused
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
