"use client"

import { motion } from "framer-motion"
import AboutSection from "@/components/sections/about-section"
import SidebarLayout from "@/components/sidebar-layout"

export default function AboutPage() {
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
