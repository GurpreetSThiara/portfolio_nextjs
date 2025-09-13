"use client"

import { useState } from "react"
import { useTheme } from "@/contexts/theme-context"
import TopNavbar from "./top-navbar"
import MobileSidebar from "./mobile-sidebar"

interface SidebarLayoutProps {
  children: React.ReactNode
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const { currentTheme } = useTheme()

  if (!currentTheme) {
    return (
      <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono flex items-center justify-center">
        <div>Loading themes...</div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${currentTheme.background} ${currentTheme.text} font-mono transition-all duration-500`}>
      {/* Top Navbar */}
      <TopNavbar 
        showSidebarToggle={true} 
        onSidebarToggle={() => setMobileSidebarOpen(true)} 
      />

      {/* Mobile Sidebar */}
      <MobileSidebar 
        isOpen={mobileSidebarOpen} 
        onClose={() => setMobileSidebarOpen(false)} 
      />

      {/* Main Content */}
      <div className="pt-16">
        <div className="min-h-screen">
          {children}
        </div>
      </div>
    </div>
  )
}