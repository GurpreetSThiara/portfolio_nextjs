"use client"

import { motion } from "framer-motion"
import SkillsSection from "@/components/sections/skills-section"
import SidebarLayout from "@/components/sidebar-layout"

export default function SkillsPage() {
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
