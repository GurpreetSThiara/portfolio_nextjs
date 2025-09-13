"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"
import ProjectsSection from "@/components/sections/projects-section"
import SidebarLayout from "@/components/sidebar-layout"

export default function ProjectsPage() {
  const { currentTheme } = useTheme()

  return (
    <SidebarLayout>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <ProjectsSection />
      </motion.div>
    </SidebarLayout>
  )
}
