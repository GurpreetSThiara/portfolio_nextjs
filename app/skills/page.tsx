"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"
import SkillsSection from "@/components/sections/skills-section"
import SidebarLayout from "@/components/sidebar-layout"

export default function SkillsPage() {
  const { currentTheme } = useTheme()

  return (
    <SidebarLayout>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <SkillsSection />
      </motion.div>
    </SidebarLayout>
  )
}
