"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Menu, 
  X, 
  Code, 
  Image,
  Sun,
  Moon,
  Palette
} from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from "next/navigation"

interface TopNavbarProps {
  showSidebarToggle?: boolean
  onSidebarToggle?: () => void
}

export default function TopNavbar({ showSidebarToggle = false, onSidebarToggle }: TopNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { currentTheme, setTheme, availableThemes } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navigateToRoute = (path: string) => {
    router.push(path)
    setIsMenuOpen(false)
  }

  const toggleTheme = () => {
    const currentIndex = availableThemes.findIndex(theme => theme.id === currentTheme.id)
    const nextIndex = (currentIndex + 1) % availableThemes.length
    setTheme(availableThemes[nextIndex].id)
  }

  if (!currentTheme) return null

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:gurpreet@example.com",
      color: "hover:text-blue-400"
    },
    {
      icon: Phone,
      label: "Call",
      href: "tel:+1234567890",
      color: "hover:text-green-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/gurpreet-singh",
      color: "hover:text-blue-600"
    }
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 ${currentTheme.cardBg}/95 backdrop-blur-xl ${currentTheme.border} border-b`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section - Logo & Sidebar Toggle */}
          <div className="flex items-center gap-4">
            {showSidebarToggle && (
              <Button
                onClick={onSidebarToggle}
                variant="ghost"
                size="sm"
                className="lg:hidden text-white hover:bg-white/10"
              >
                <Menu className="w-5 h-5" />
              </Button>
            )}
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => navigateToRoute('/')}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="p-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className={`font-bold text-lg ${currentTheme.accent}`}>
                  Gurpreet Singh
                </span>
              </div>
            </motion.div>
          </div>

          {/* Center Section - Navigation (Desktop) */}
          <div className="hidden md:flex items-center space-x-1">
            <Button
              onClick={() => navigateToRoute('/')}
              variant="ghost"
              className={`${pathname === '/' ? `${currentTheme.cardBg} ${currentTheme.accent} ${currentTheme.border} border` : `${currentTheme.textSecondary} hover:${currentTheme.accent} hover:${currentTheme.cardBg}`}`}
            >
              Home
            </Button>
            <Button
              onClick={() => navigateToRoute('/about')}
              variant="ghost"
              className={`${pathname === '/about' ? `${currentTheme.cardBg} ${currentTheme.accent} ${currentTheme.border} border` : `${currentTheme.textSecondary} hover:${currentTheme.accent} hover:${currentTheme.cardBg}`}`}
            >
              About
            </Button>
            <Button
              onClick={() => navigateToRoute('/experience')}
              variant="ghost"
              className={`${pathname === '/experience' ? `${currentTheme.cardBg} ${currentTheme.accent} ${currentTheme.border} border` : `${currentTheme.textSecondary} hover:${currentTheme.accent} hover:${currentTheme.cardBg}`}`}
            >
              Experience
            </Button>
            <Button
              onClick={() => navigateToRoute('/projects')}
              variant="ghost"
              className={`${pathname === '/projects' ? `${currentTheme.cardBg} ${currentTheme.accent} ${currentTheme.border} border` : `${currentTheme.textSecondary} hover:${currentTheme.accent} hover:${currentTheme.cardBg}`}`}
            >
              Projects
            </Button>
            <Button
              onClick={() => navigateToRoute('/contact')}
              variant="ghost"
              className={`${pathname === '/contact' ? `${currentTheme.cardBg} ${currentTheme.accent} ${currentTheme.border} border` : `${currentTheme.textSecondary} hover:${currentTheme.accent} hover:${currentTheme.cardBg}`}`}
            >
              Contact
            </Button>
          </div>

          {/* Right Section - Social Links, Theme Toggle, Screenshot Generator */}
          <div className="flex items-center gap-2">
            {/* Social Links */}
            <div className="hidden sm:flex items-center gap-1">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 ${currentTheme.textSecondary} ${social.color} transition-colors`}
                    title={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                )
              })}
            </div>

            {/* Theme Toggle */}
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="sm"
              className={`${currentTheme.textSecondary} hover:${currentTheme.accent} hover:${currentTheme.cardBg}`}
              title="Toggle Theme"
            >
              <Palette className="w-4 h-4" />
            </Button>

            {/* Screenshot Generator Button */}
            <Button
              onClick={() => navigateToRoute('/screenshot-generator')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
              size="sm"
            >
              <Image className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Screenshot</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              onClick={toggleMenu}
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden ${currentTheme.cardBg} ${currentTheme.border} border-t overflow-hidden`}
            >
              <div className="px-4 py-4 space-y-2">
                <Button
                  onClick={() => navigateToRoute('/')}
                  variant="ghost"
                  className={`w-full justify-start ${pathname === '/' ? `${currentTheme.accent} ${currentTheme.cardBg}` : `${currentTheme.textSecondary} hover:${currentTheme.accent} hover:${currentTheme.cardBg}`}`}
                >
                  Home
                </Button>
                <Button
                  onClick={() => navigateToRoute('/about')}
                  variant="ghost"
                  className={`w-full justify-start ${pathname === '/about' ? `${currentTheme.accent} ${currentTheme.cardBg}` : `${currentTheme.textSecondary} hover:${currentTheme.accent} hover:${currentTheme.cardBg}`}`}
                >
                  About
                </Button>
                <Button
                  onClick={() => navigateToRoute('/experience')}
                  variant="ghost"
                  className={`w-full justify-start ${pathname === '/experience' ? `${currentTheme.accent} ${currentTheme.cardBg}` : `${currentTheme.textSecondary} hover:${currentTheme.accent} hover:${currentTheme.cardBg}`}`}
                >
                  Experience
                </Button>
                <Button
                  onClick={() => navigateToRoute('/projects')}
                  variant="ghost"
                  className={`w-full justify-start ${pathname === '/projects' ? `${currentTheme.accent} ${currentTheme.cardBg}` : `${currentTheme.textSecondary} hover:${currentTheme.accent} hover:${currentTheme.cardBg}`}`}
                >
                  Projects
                </Button>
                <Button
                  onClick={() => navigateToRoute('/contact')}
                  variant="ghost"
                  className={`w-full justify-start ${pathname === '/contact' ? `${currentTheme.accent} ${currentTheme.cardBg}` : `${currentTheme.textSecondary} hover:${currentTheme.accent} hover:${currentTheme.cardBg}`}`}
                >
                  Contact
                </Button>
                
                {/* Mobile Social Links */}
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-600">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 ${currentTheme.textSecondary} ${social.color} transition-colors`}
                        title={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
