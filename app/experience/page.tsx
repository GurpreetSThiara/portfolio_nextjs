"use client"

import { motion } from "framer-motion"
import ExperienceSection from "@/components/sections/experience-section"
import SidebarLayout from "@/components/sidebar-layout"

export default function ExperiencePage() {
  return (
    <SidebarLayout>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <ExperienceSection />
      </motion.div>
    </SidebarLayout>
  )
}
