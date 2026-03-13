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
  Palette,
  User
} from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from "next/navigation"

interface TopNavbarProps {
  showSidebarToggle?: boolean
  onSidebarToggle?: () => void
}

export default function TopNavbar({ showSidebarToggle = false, onSidebarToggle }: TopNavbarProps) {
  const { currentTheme, setTheme, availableThemes, displayMode, setDisplayMode } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  const navigateToRoute = (path: string) => {
    router.push(path)
  }



  if (!currentTheme) return null

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:gurpreetthiara221098@gmail.com",
      color: "hover:text-blue-400"
    },
    {
      icon: Phone,
      label: "Call +91 8872269487",
      href: "tel:+918872269487",
      color: "hover:text-green-400"
    },
    {
      icon: Phone,
      label: "Call +91 9915116865",
      href: "tel:+919915116865",
      color: "hover:text-green-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/gurpreetsthiara",
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
                {displayMode === "developer" ? <Code className="w-5 h-5 text-white" /> : <User className="w-5 h-5 text-white" />}
              </div>
              <div className="hidden sm:block">
                <span className={`font-bold text-lg ${currentTheme.accent} ${displayMode === 'developer' ? 'font-mono' : 'font-sans'}`}>
                  Gurpreet Singh
                </span>
              </div>
            </motion.div>
          </div>

          {/* Center Section - Navigation (Desktop) */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { label: "Home", id: "hero" },
              { label: "About", id: "about" },
              { label: "Experience", id: "experience" },
              { label: "Skills", id: "skills" },
              { label: "Projects", id: "projects" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <Button
                key={item.id}
                onClick={() => {
                  const element = document.getElementById(item.id)
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
                variant="ghost"
                className={`${currentTheme.textSecondary} hover:${currentTheme.accent} hover:${currentTheme.cardBg}`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Right Section - Social Links, Theme Toggle, Screenshot Generator */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
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



            {/* Mode Toggle */}
            <Button
              onClick={() => setDisplayMode(displayMode === 'developer' ? 'professional' : 'developer')}
              variant="ghost"
              size="icon"
              className={`${currentTheme.textSecondary} hover:${currentTheme.accent} hover:${currentTheme.cardBg} w-9 h-9 md:w-10 md:h-10`}
              title={`Switch to ${displayMode === 'developer' ? 'Professional' : 'Developer'} Mode`}
            >
              {displayMode === 'developer' ? (
                <User className="w-4 h-4 md:w-5 md:h-5" />
              ) : (
                <Code className="w-4 h-4 md:w-5 md:h-5" />
              )}
            </Button>
          </div>
        </div>

      </div>
    </motion.nav>
  )
}
