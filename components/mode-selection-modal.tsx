"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, User, CheckCircle2 } from "lucide-react"
import { useTheme, type DisplayMode } from "@/contexts/theme-context"
import { Button } from "@/components/ui/button"

export default function ModeSelectionModal() {
  const [isOpen, setIsOpen] = useState(false)
  const { setDisplayMode, setTheme } = useTheme()

  useEffect(() => {
    const hasSelectedMode = localStorage.getItem("portfolio-mode-selected")
    if (!hasSelectedMode) {
      setIsOpen(true)
    }
  }, [])

  const selectMode = (mode: DisplayMode) => {
    setDisplayMode(mode)
    if (mode === "professional") {
      setTheme("premium")
    } else {
      setTheme("github")
    }
    localStorage.setItem("portfolio-mode-selected", "true")
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="p-8 sm:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Welcome to my Portfolio
              </h2>
              <p className="text-zinc-400 text-lg mb-10 max-w-md mx-auto">
                How would you like to experience my work today?
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Developer Mode */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => selectMode("developer")}
                className="group cursor-pointer p-6 rounded-xl border border-zinc-800 bg-zinc-800/50 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-500/20 transition-colors">
                  <Code className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Developer Mode</h3>
                <p className="text-zinc-500 text-sm mb-4">
                  Code-centric terminal vibes with syntax highlighting.
                </p>
                <div className="flex items-center justify-center text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-4 h-4 mr-1" />
                  Select this view
                </div>
              </motion.div>

              {/* Professional Mode */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => selectMode("professional")}
                className="group cursor-pointer p-6 rounded-xl border border-zinc-800 bg-zinc-800/50 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-500/20 transition-colors">
                  <User className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Professional Mode</h3>
                <p className="text-zinc-500 text-sm mb-4">
                  Clean, elegant layout for business and non-tech folks.
                </p>
                <div className="flex items-center justify-center text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-4 h-4 mr-1" />
                  Select this view
                </div>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-zinc-600 text-xs"
            >
              You can always switch views later in the theme settings.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
