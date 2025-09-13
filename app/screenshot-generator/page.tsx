"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"
import TopNavbar from "@/components/top-navbar"
import ScreenshotGenerator from "@/components/screenshot-generator"
import LoadingScreen from "@/components/loading-screen"

export default function ScreenshotGeneratorPage() {
  const [isLoading, setIsLoading] = useState(true)
  const { currentTheme } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Add safety check
  if (!currentTheme) {
    return (
      <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono flex items-center justify-center">
        <div>Loading themes...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Top Navbar */}
      <TopNavbar showSidebarToggle={false} />

      {/* Main Content */}
      <div className="pt-16">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : (
            <motion.div 
              key="screenshot-generator" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5 }}
            >
              <ScreenshotGenerator />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
