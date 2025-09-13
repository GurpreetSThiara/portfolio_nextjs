"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Home, 
  User, 
  Briefcase, 
  Zap, 
  Code, 
  MessageSquare, 
  Menu, 
  X
} from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from "next/navigation"

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
}

const sidebarItems = [
  { 
    id: "home", 
    label: "Home", 
    icon: Home, 
    path: "/"
  },
  { 
    id: "about", 
    label: "About", 
    icon: User, 
    path: "/about"
  },
  { 
    id: "experience", 
    label: "Experience", 
    icon: Briefcase, 
    path: "/experience"
  },
  { 
    id: "skills", 
    label: "Skills", 
    icon: Zap, 
    path: "/skills"
  },
  { 
    id: "projects", 
    label: "Projects", 
    icon: Code, 
    path: "/projects"
  },
  { 
    id: "contact", 
    label: "Contact", 
    icon: MessageSquare, 
    path: "/contact"
  }
]

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const { currentTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  const navigateToRoute = (path: string) => {
    router.push(path)
    onClose()
  }

  if (!currentTheme) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed left-0 top-0 h-full w-72 ${currentTheme.cardBg} ${currentTheme.border} border-r z-50 lg:hidden`}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className={`flex items-center justify-between p-6 ${currentTheme.border} border-b`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-white">Gurpreet Singh</h1>
                    <p className="text-sm text-gray-400">Software Engineer</p>
                  </div>
                </div>
                <Button
                  onClick={onClose}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-6">
                <div className="space-y-2">
                  {sidebarItems.map((item) => {
                    const isActive = pathname === item.path
                    const Icon = item.icon
                    
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => navigateToRoute(item.path)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                          isActive
                            ? `${currentTheme.cardBg} ${currentTheme.accent} ${currentTheme.border} border shadow-lg`
                            : `${currentTheme.textSecondary} hover:${currentTheme.accent} hover:${currentTheme.cardBg}`
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                        <span className="font-medium">{item.label}</span>
                        {isActive && (
                          <motion.div
                            layoutId="mobileActiveIndicator"
                            className="w-2 h-2 bg-blue-500 rounded-full ml-auto"
                          />
                        )}
                      </motion.button>
                    )
                  })}
                </div>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
