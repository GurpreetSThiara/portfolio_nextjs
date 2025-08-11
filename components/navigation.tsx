"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Terminal, Menu, X, Code } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

interface NavigationProps {
  activeSection: string
  onTerminalToggle: () => void
}

export default function Navigation({ activeSection, onTerminalToggle }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { currentTheme } = useTheme()

  const navItems = [
    { id: "hero", label: "<Home />", path: "/" },
    { id: "about", label: "<About />", path: "/about" },
    { id: "experience", label: "<Experience />", path: "/experience" },
    { id: "skills", label: "<Skills />", path: "/skills" },
    { id: "projects", label: "<Projects />", path: "/projects" },
    { id: "contact", label: "<Contact />", path: "/contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  // Add safety check
  if (!currentTheme) {
    return null
  }

  const getColorClass = (colorClass: string, type: "bg" | "border" = "bg") => {
    if (!colorClass) return ""
    return colorClass.replace("text-", `${type}-`)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-40 ${currentTheme.cardBg}/95 backdrop-blur-xl ${currentTheme.border} border-b`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`flex items-center gap-2 ${currentTheme.accent} font-bold text-sm sm:text-base lg:text-lg`}
          >
            <Code className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            <span className="hidden sm:inline">{"const developer = 'Gurpreet Singh'"}</span>
            <span className="sm:hidden">{"Gurpreet"}</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? `${currentTheme.cardBg} ${currentTheme.accent} ${currentTheme.border} border`
                    : `${currentTheme.textSecondary} hover:${currentTheme.accent} hover:${currentTheme.cardBg}`
                }`}
              >
                {item.label}
              </motion.button>
            ))}

            {/* Terminal Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onTerminalToggle}
              className={`ml-4 p-2 rounded-lg ${getColorClass(currentTheme.success)} hover:opacity-80 text-white transition-colors`}
              title="Open Terminal"
            >
              <Terminal className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-1">
            {navItems.slice(0, 4).map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`px-2 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? `${currentTheme.cardBg} ${currentTheme.accent} ${currentTheme.border} border`
                    : `${currentTheme.textSecondary} hover:${currentTheme.accent} hover:${currentTheme.cardBg}`
                }`}
              >
                {item.label.replace("<", "").replace(" />", "").replace(">", "")}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${currentTheme.textSecondary} hover:${currentTheme.accent} transition-colors`}
            >
              <Menu size={20} />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onTerminalToggle}
              className={`p-2 rounded-lg ${getColorClass(currentTheme.success)} hover:opacity-80 text-white transition-colors`}
              title="Terminal"
            >
              <Terminal className="w-4 h-4" />
            </motion.button>
            <button
              className={`p-2 ${currentTheme.text} hover:${currentTheme.accent} transition-colors`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              className={`md:hidden ${currentTheme.cardBg} ${currentTheme.border} border-t rounded-b-lg overflow-hidden`}
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? `${currentTheme.cardBg} ${currentTheme.accent} ${currentTheme.border} border`
                        : `${currentTheme.textSecondary} hover:${currentTheme.accent} hover:${currentTheme.cardBg}`
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tablet Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`hidden md:block lg:hidden absolute top-full right-4 mt-2 w-48 ${currentTheme.cardBg} ${currentTheme.border} border rounded-lg ${currentTheme.shadow} overflow-hidden`}
            >
              <div className="py-2">
                {navItems.slice(4).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id)
                      setIsMenuOpen(false)
                    }}
                    className={`w-full text-left px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? `${currentTheme.accent} ${currentTheme.cardBg}`
                        : `${currentTheme.textSecondary} hover:${currentTheme.accent} hover:${currentTheme.cardBg}`
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="border-t border-gray-600 my-2"></div>
                <button
                  onClick={() => {
                    onTerminalToggle()
                    setIsMenuOpen(false)
                  }}
                  className={`w-full text-left px-4 py-2 text-sm font-medium ${getColorClass(currentTheme.success)} hover:opacity-80 transition-colors`}
                >
                  <Terminal className="w-4 h-4 inline mr-2" />
                  Terminal
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
