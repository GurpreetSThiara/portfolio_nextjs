"use client"

import { motion } from "framer-motion"
import ContactSection from "@/components/sections/contact-section"
import SidebarLayout from "@/components/sidebar-layout"

export default function ContactPage() {
  return (
    <SidebarLayout>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <ContactSection />
      </motion.div>
    </SidebarLayout>
  )
}
