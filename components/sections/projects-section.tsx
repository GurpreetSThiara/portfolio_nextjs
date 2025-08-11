"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Star, GitBranch, ChevronDown, ChevronUp, Calendar, Code2 } from "lucide-react"
import { useState } from "react"
import { useTheme } from "@/contexts/theme-context"

export default function ProjectsSection() {
  const { currentTheme } = useTheme()
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      name: "KPTimeSync",
      shortDescription: "Slack app to automate huddle time logs in Zoho People time sheet",
      fullDescription:
        "A comprehensive Slack application that seamlessly integrates with Zoho People to automate time tracking for huddle sessions. The app monitors Slack huddle activities and automatically logs the time spent in meetings to Zoho People's timesheet system, eliminating manual time entry and ensuring accurate time tracking for teams.",
      language: "TypeScript",
      languageColor: "#2b7489",
      stars: 15,
      forks: 4,
      tech: ["Node.js", "TypeScript", "Slack API", "Zoho People API", "Express.js"],
      features: [
        "Real-time Slack huddle monitoring",
        "Automatic time log creation in Zoho People",
        "Team productivity analytics",
        "Customizable time tracking rules",
        "Slack slash commands integration",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/GurpreetSThiara/KPTimeSync",
      lastCommit: "1 week ago",
      status: "Active",
      category: "Productivity Tool",
      timeline: "2024",
    },
    {
      id: 2,
      name: "Microsoft Outlook Integration",
      shortDescription: "Microsoft Outlook email integration for learning using Entra API",
      fullDescription:
        "A sophisticated email integration application built with Next.js that leverages Microsoft's Entra API (formerly Azure AD) to provide seamless Outlook email management. The application demonstrates modern authentication flows, email processing capabilities, and provides a learning platform for Microsoft Graph API integration.",
      language: "TypeScript",
      languageColor: "#2b7489",
      stars: 22,
      forks: 8,
      tech: ["Next.js", "TypeScript", "Microsoft Graph API", "Entra API", "OAuth 2.0"],
      features: [
        "Microsoft Entra authentication",
        "Outlook email reading and management",
        "Real-time email notifications",
        "Advanced email filtering and search",
        "Calendar integration",
        "Secure token management",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/GurpreetSThiara/microsoft-auth",
      lastCommit: "3 days ago",
      status: "Active",
      category: "Integration",
      timeline: "2024",
    },
    {
      id: 3,
      name: "AI Resume Builder",
      shortDescription: "Create ATS-friendly resumes with AI assistance",
      fullDescription:
        "A comprehensive resume building platform that helps users create ATS (Applicant Tracking System) friendly resumes. The application uses AI to optimize resume content, suggests improvements, and ensures compatibility with modern hiring systems. Features include multiple templates, real-time preview, and export capabilities.",
      language: "JavaScript",
      languageColor: "#f1e05a",
      stars: 89,
      forks: 23,
      tech: ["React.js", "Node.js", "AI/ML APIs", "PDF Generation", "Tailwind CSS"],
      features: [
        "ATS-friendly resume templates",
        "AI-powered content suggestions",
        "Real-time resume scoring",
        "Multiple export formats (PDF, DOCX)",
        "Industry-specific templates",
        "Resume optimization tips",
        "Drag-and-drop interface",
      ],
      liveUrl: "https://resume.giveaways4u.com",
      githubUrl: "https://github.com/GurpreetSThiara/ai-resume-maker",
      lastCommit: "2 days ago",
      status: "Active",
      category: "AI Tool",
      timeline: "2024",
    },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/GurpreetSThiara",
      icon: "🐙",
      description: "Check out my code repositories",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/gurpreetthiara221098/",
      icon: "💻",
      description: "View my coding challenges",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gurpreetsthiara/",
      icon: "💼",
      description: "Connect with me professionally",
    },
  ]

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  return (
    <section id="projects" className={`py-24 px-6 ${currentTheme.background}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className={currentTheme.codeKeyword}>{"<"}</span>
            <span className={currentTheme.accent}>Projects</span>
            <span className={currentTheme.codeKeyword}>{" />"}</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${currentTheme.gradient} mx-auto rounded-full`} />
          <p className={`${currentTheme.textSecondary} mt-6 max-w-3xl mx-auto font-mono`}>
            <span className={currentTheme.codeComment}>{"// "}</span>A collection of projects showcasing my development
            journey
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg overflow-hidden hover:${currentTheme.accent.replace("text-", "border-")}/50 transition-all duration-300`}
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3
                        className={`text-xl font-bold ${currentTheme.accent} hover:underline cursor-pointer font-mono`}
                      >
                        {project.name}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs rounded-full border ${
                          project.status === "Active"
                            ? `${currentTheme.success.replace("text-", "bg-")}/20 ${currentTheme.success} ${currentTheme.success.replace("text-", "border-")}`
                            : `${currentTheme.textSecondary.replace("text-", "bg-")}/20 ${currentTheme.textSecondary} ${currentTheme.textSecondary.replace("text-", "border-")}`
                        }`}
                      >
                        {project.status}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${currentTheme.cardBg} ${currentTheme.accent} ${currentTheme.border} border`}
                      >
                        {project.category}
                      </span>
                    </div>

                    <p className={`${currentTheme.textSecondary} mb-4 leading-relaxed`}>{project.shortDescription}</p>

                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: project.languageColor }}></div>
                        <span className={`${currentTheme.text} text-sm font-mono`}>{project.language}</span>
                      </div>
                      <div className={`flex items-center gap-1 ${currentTheme.textSecondary} text-sm`}>
                        <Star className="w-4 h-4" />
                        <span>{project.stars}</span>
                      </div>
                      <div className={`flex items-center gap-1 ${currentTheme.textSecondary} text-sm`}>
                        <GitBranch className="w-4 h-4" />
                        <span>{project.forks}</span>
                      </div>
                      <div className={`flex items-center gap-1 ${currentTheme.textSecondary} text-sm`}>
                        <Calendar className="w-4 h-4" />
                        <span>{project.timeline}</span>
                      </div>
                      <span className={`${currentTheme.textSecondary} text-sm`}>Updated {project.lastCommit}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 ${currentTheme.cardBg} ${currentTheme.accent} text-xs rounded-full ${currentTheme.border} border font-mono`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className={`px-3 py-1 ${currentTheme.textSecondary} text-xs rounded-full font-mono`}>
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {project.liveUrl !== "#" && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 ${currentTheme.success.replace("text-", "bg-")} hover:opacity-80 text-white rounded-lg text-sm font-medium transition-colors`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 ${currentTheme.border} border hover:${currentTheme.accent.replace("text-", "border-")} ${currentTheme.text} hover:${currentTheme.accent} rounded-lg text-sm font-medium transition-colors`}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleProject(project.id)}
                      className={`flex items-center gap-2 px-4 py-2 ${currentTheme.cardBg} hover:${currentTheme.cardBg} ${currentTheme.border} border hover:${currentTheme.accent.replace("text-", "border-")} ${currentTheme.text} hover:${currentTheme.accent} rounded-lg text-sm font-medium transition-colors`}
                    >
                      <Code2 className="w-4 h-4" />
                      <span>Details</span>
                      {expandedProject === project.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Expandable Details */}
              <AnimatePresence>
                {expandedProject === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${currentTheme.border} border-t overflow-hidden`}
                  >
                    <div className="p-6 space-y-6">
                      {/* Full Description */}
                      <div>
                        <h4 className={`text-lg font-bold ${currentTheme.text} mb-3 font-mono`}>
                          <span className={currentTheme.codeComment}>{"// "}</span>
                          Project Overview
                        </h4>
                        <p className={`${currentTheme.textSecondary} leading-relaxed`}>{project.fullDescription}</p>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className={`text-lg font-bold ${currentTheme.text} mb-3 font-mono`}>
                          <span className={currentTheme.codeComment}>{"// "}</span>
                          Key Features
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {project.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                              className={`flex items-start gap-3 ${currentTheme.text}`}
                            >
                              <div
                                className={`w-2 h-2 ${currentTheme.accent.replace("text-", "bg-")} rounded-full mt-2 flex-shrink-0`}
                              ></div>
                              <span className="text-sm">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Complete Tech Stack */}
                      <div>
                        <h4 className={`text-lg font-bold ${currentTheme.text} mb-3 font-mono`}>
                          <span className={currentTheme.codeComment}>{"// "}</span>
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                              whileHover={{ scale: 1.1 }}
                              className={`px-3 py-2 ${currentTheme.cardBg} ${currentTheme.accent} text-sm rounded-lg ${currentTheme.border} border font-mono hover:${currentTheme.accent.replace("text-", "border-")}/50 transition-colors cursor-default`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className={`text-2xl font-bold ${currentTheme.text} mb-4 font-mono`}>
              <span className={currentTheme.codeComment}>{"// "}</span>
              Connect with me
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-6 ${currentTheme.cardBg} ${currentTheme.border} border rounded-lg hover:${currentTheme.accent.replace("text-", "border-")}/50 transition-all duration-300 group`}
              >
                <div className="text-3xl">{link.icon}</div>
                <div>
                  <h4
                    className={`font-bold ${currentTheme.text} group-hover:${currentTheme.accent} transition-colors font-mono`}
                  >
                    {link.name}
                  </h4>
                  <p className={`${currentTheme.textSecondary} text-sm`}>{link.description}</p>
                </div>
                <ExternalLink
                  className={`w-5 h-5 ${currentTheme.textSecondary} group-hover:${currentTheme.accent} transition-colors ml-auto`}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
