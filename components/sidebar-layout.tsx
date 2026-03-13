"use client"

import { useState } from "react"
import { useTheme } from "@/contexts/theme-context"
import TopNavbar from "./top-navbar"
import MobileSidebar from "./mobile-sidebar"
import ModeSelectionModal from "./mode-selection-modal"

interface SidebarLayoutProps {
  children: React.ReactNode
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const { currentTheme, displayMode } = useTheme()

  if (!currentTheme) {
    return (
      <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono flex items-center justify-center">
        <div>Loading themes...</div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${currentTheme.background} ${currentTheme.text} ${displayMode === 'developer' ? 'font-mono' : 'font-sans'} transition-all duration-500`}>
      <ModeSelectionModal />
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
      <div className="pt-16 h-screen overflow-hidden">
        {children}
      </div>
    </div>
  )
}