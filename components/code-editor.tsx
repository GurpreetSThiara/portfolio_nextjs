"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface CodeEditorProps {
  title?: string
  code: string
  language?: string
}

export default function CodeEditor({ title = "code.js", code, language = "javascript" }: CodeEditorProps) {
  const [isMinimized, setIsMinimized] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#161b22] border border-[#30363d] rounded-lg shadow-2xl overflow-hidden"
    >
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#21262d] border-b border-[#30363d]">
        <div className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 bg-[#ff5f56] rounded-full cursor-pointer" />
          <motion.div
            whileHover={{ scale: 1.2 }}
            onClick={() => setIsMinimized(!isMinimized)}
            className="w-3 h-3 bg-[#ffbd2e] rounded-full cursor-pointer"
          />
          <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 bg-[#27ca3f] rounded-full cursor-pointer" />
        </div>
        <div className="text-[#8b949e] text-sm font-mono">{title}</div>
        <div className="w-16" />
      </div>

      {/* Code Content */}
      <motion.div
        animate={{ height: isMinimized ? 0 : "auto" }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 font-mono text-sm">
          <pre className="text-[#c9d1d9] leading-relaxed overflow-x-auto">
            <code dangerouslySetInnerHTML={{ __html: code }} />
          </pre>
        </div>
      </motion.div>
    </motion.div>
  )
}
