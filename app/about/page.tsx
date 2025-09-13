"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"
import AboutSection from "@/components/sections/about-section"
import SidebarLayout from "@/components/sidebar-layout"

export default function AboutPage() {
  const { currentTheme } = useTheme()

  return (
    <SidebarLayout>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <AboutSection />
      </motion.div>
    </SidebarLayout>
  )
}
