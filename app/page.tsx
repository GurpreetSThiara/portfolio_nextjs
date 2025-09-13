"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"
import HeroSection from "@/components/sections/hero-section"
import LoadingScreen from "@/components/loading-screen"
import SidebarLayout from "@/components/sidebar-layout"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const { currentTheme } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <SidebarLayout>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div 
            key="home" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <HeroSection />
          </motion.div>
        )}
      </AnimatePresence>
    </SidebarLayout>
  )
}