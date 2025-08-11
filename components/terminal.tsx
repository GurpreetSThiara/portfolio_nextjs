"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

interface TerminalProps {
  onClose: () => void
}

export default function Terminal({ onClose }: TerminalProps) {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<Array<{ command: string; output: string[] }>>([])
  const [currentPath, setCurrentPath] = useState("~/portfolio")
  const inputRef = useRef<HTMLInputElement>(null)
  const { currentTheme } = useTheme()

  const commands = {
    help: {
      description: "Show available commands",
      output: [
        "Available commands:",
        "  help          - Show this help message",
        "  about         - Display information about Gurpreet",
        "  skills        - List technical skills",
        "  projects      - Show recent projects",
        "  contact       - Display contact information",
        "  experience    - Show work experience",
        "  education     - Display educational background",
        "  clear         - Clear terminal",
        "  whoami        - Display current user",
        "  pwd           - Show current directory",
        "  ls            - List directory contents",
        "  theme         - Show current theme info",
      ],
    },
    about: {
      description: "Display information about Gurpreet",
      output: [
        "Gurpreet Singh - Software Engineer 1",
        "================================",
        "🚀 Currently working at Logiciel Solutions Limited",
        "💻 Passionate about building innovative software solutions",
        "🎓 M.Tech in Computer Science (9.6 GPA)",
        "📍 Based in Hoshiarpur, Punjab",
        "🔥 2+ years of development experience",
      ],
    },
    skills: {
      description: "List technical skills",
      output: [
        "Technical Skills:",
        "================",
        "Languages:     JavaScript, Java, Python, C/C++, TypeScript, Dart",
        "Frontend:      React.js, HTML/CSS, Tailwind CSS, Material UI",
        "Backend:       Node.js, Express.js, Spring Boot",
        "Mobile:        Flutter, Firebase",
        "Databases:     MySQL, MongoDB",
        "Tools:         Git, Docker, VS Code, Android Studio",
        "Cloud:         Firebase, Vercel",
      ],
    },
    theme: {
      description: "Show current theme information",
      output: [],
    },
    clear: {
      description: "Clear terminal",
      output: [],
    },
    whoami: {
      description: "Display current user",
      output: ["gurpreet@portfolio:~$ Software Engineer & Problem Solver"],
    },
    pwd: {
      description: "Show current directory",
      output: ["/home/gurpreet/portfolio"],
    },
    ls: {
      description: "List directory contents",
      output: [
        "total 8",
        "drwxr-xr-x  2 gurpreet gurpreet 4096 Dec 2024 ./",
        "drwxr-xr-x  3 gurpreet gurpreet 4096 Dec 2024 ../",
        "-rw-r--r--  1 gurpreet gurpreet  256 Dec 2024 about.md",
        "-rw-r--r--  1 gurpreet gurpreet  512 Dec 2024 projects.json",
        "-rw-r--r--  1 gurpreet gurpreet  128 Dec 2024 contact.txt",
        "-rw-r--r--  1 gurpreet gurpreet  384 Dec 2024 skills.yml",
        "-rwxr-xr-x  1 gurpreet gurpreet 1024 Dec 2024 portfolio.sh*",
      ],
    },
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    // Initial welcome message
    setHistory([
      {
        command: "",
        output: ["Welcome to Gurpreet Singh's Portfolio Terminal! 🚀", "Type 'help' to see available commands.", ""],
      },
    ])
  }, [])

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    if (trimmedCmd === "clear") {
      setHistory([])
      return
    }

    if (trimmedCmd === "theme") {
      const themeOutput = [
        `Current Theme: ${currentTheme.name}`,
        `Description: ${currentTheme.description}`,
        `Theme ID: ${currentTheme.id}`,
        "",
        "Use the theme switcher in the top-right corner to change themes!",
      ]
      setHistory((prev) => [...prev, { command: `${currentPath}$ ${cmd}`, output: themeOutput }])
      return
    }

    const command = commands[trimmedCmd as keyof typeof commands]
    const output = command
      ? command.output
      : [`Command not found: ${trimmedCmd}`, "Type 'help' for available commands."]

    setHistory((prev) => [...prev, { command: `${currentPath}$ ${cmd}`, output }])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput("")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`fixed inset-4 z-50 ${currentTheme.background} ${currentTheme.border} border rounded-lg ${currentTheme.shadow} flex flex-col`}
    >
      {/* Terminal Header */}
      <div
        className={`flex items-center justify-between px-4 py-3 ${currentTheme.cardBg} rounded-t-lg ${currentTheme.border} border-b`}
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#ff5f56] rounded-full cursor-pointer" onClick={onClose}></div>
          <div className="w-3 h-3 bg-[#ffbd2e] rounded-full cursor-pointer"></div>
          <div className="w-3 h-3 bg-[#27ca3f] rounded-full cursor-pointer"></div>
        </div>
        <div className={`${currentTheme.textSecondary} text-sm font-mono`}>gurpreet@portfolio: ~</div>
        <button
          onClick={onClose}
          className={`${currentTheme.textSecondary} hover:${currentTheme.text} transition-colors`}
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Terminal Content */}
      <div className="flex-1 p-4 overflow-y-auto font-mono text-sm">
        <div className="space-y-2">
          {history.map((entry, index) => (
            <div key={index}>
              {entry.command && (
                <div className={currentTheme.success}>
                  <span className={currentTheme.accent}>gurpreet@portfolio</span>
                  <span className={currentTheme.text}>:</span>
                  <span className={currentTheme.accentSecondary}>~</span>
                  <span className={currentTheme.text}>$ </span>
                  <span className={currentTheme.text}>{entry.command.split("$ ")[1]}</span>
                </div>
              )}
              {entry.output.map((line, lineIndex) => (
                <div key={lineIndex} className={`${currentTheme.text} whitespace-pre-wrap`}>
                  {line}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center mt-2">
          <span className={currentTheme.accent}>gurpreet@portfolio</span>
          <span className={currentTheme.text}>:</span>
          <span className={currentTheme.accentSecondary}>~</span>
          <span className={currentTheme.text}>$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`flex-1 bg-transparent ${currentTheme.text} outline-none ml-1`}
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </motion.div>
  )
}
