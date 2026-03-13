"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function ExperienceSection() {
  const { currentTheme, displayMode } = useTheme()

  const experiences = [
    {
      id: 1,
      role: "Software Engineer 1",
      company: "Logiciel Solutions Limited",
      period: "September 2024 - Present",
      location: "Ludhiana, Punjab",
      description: [
        "Developing scalable software solutions using cutting-edge technologies",
        "Collaborating with cross-functional teams to deliver high-quality products",
        "Implementing best practices for code quality and performance optimization",
        "Contributing to architectural decisions and technical documentation",
      ],
      technologies: ["React.js", "Node.js", "TypeScript", "Docker", "AWS"],
      status: "current",
    },
    {
      id: 3,
      role: "Software Development Intern",
      company: "Virtusa",
      period: "September 2023 - July 2024",
      location: "Remote",
      description: [
        "Gained comprehensive experience in full-stack development using Java",
        "Learned backend development, database management, and API integration",
        "Worked on enterprise-level projects with industry best practices",
        "Participated in code reviews and agile development processes",
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "Git"],
      status: "completed",
    },
  ]

  return (
    <section id="experience" className={`py-12 md:py-20 px-4 md:px-6 ${currentTheme.background} min-h-full flex flex-col justify-center`}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {displayMode === "developer" ? (
              <>
                <span className={currentTheme.codeKeyword}>{"<"}</span>
                <span className={currentTheme.accent}>Experience</span>
                <span className={currentTheme.codeKeyword}>{" />"}</span>
              </>
            ) : (
              "Work Experience"
            )}
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${currentTheme.gradient} mx-auto rounded-full`} />
          <p className={`${currentTheme.textSecondary} mt-6 max-w-3xl mx-auto ${displayMode === 'developer' ? 'font-mono' : ''}`}>
            {displayMode === "developer" && <span className={currentTheme.codeComment}>{"// "}</span>}
            My professional journey in software development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className={`absolute left-4 md:left-8 top-0 bottom-0 w-0.5 ${currentTheme.border.replace("border-", "bg-")}`}
          ></div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-4 md:gap-8"
              >
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div
                    className={`w-4 h-4 rounded-full border-4 ${
                      exp.status === "current"
                        ? `${currentTheme.success.replace("text-", "bg-")} ${currentTheme.success.replace("text-", "border-")}`
                        : `${currentTheme.accent.replace("text-", "bg-")} ${currentTheme.accent.replace("text-", "border-")}`
                    }`}
                  ></div>
                  {exp.status === "current" && (
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className={`absolute inset-0 w-4 h-4 ${currentTheme.success.replace("text-", "bg-")} rounded-full`}
                    ></motion.div>
                  )}
                </div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex-1 ${currentTheme.cardBg} ${currentTheme.border} border rounded-lg p-5 md:p-6 hover:${currentTheme.accent.replace("text-", "border-")}/50 transition-all duration-300 shadow-lg`}
                >
                  {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className={`text-lg md:text-xl font-bold ${currentTheme.text} mb-1 ${displayMode === 'developer' ? 'font-mono' : ''}`}>{exp.role}</h3>
                      <p className={`${currentTheme.accent} font-semibold text-base md:text-lg`}>{exp.company}</p>
                    </div>
                    <div className="flex flex-col lg:items-end gap-2 mt-2 lg:mt-0">
                      {exp.status === "current" && (
                        <span
                          className={`inline-flex items-center px-3 py-1 ${currentTheme.success.replace("text-", "bg-")}/20 ${currentTheme.success} text-[10px] md:text-sm font-medium rounded-full ${currentTheme.success.replace("text-", "border-")}/30 border w-fit`}
                        >
                          Current Position
                        </span>
                      )}
                      <div className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 ${currentTheme.textSecondary} text-xs md:text-sm ${displayMode === 'developer' ? 'font-mono' : ''}`}>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`flex items-start gap-3 ${currentTheme.text} leading-relaxed`}
                        >
                          <div
                            className={`w-2 h-2 ${currentTheme.accent.replace("text-", "bg-")} rounded-full mt-2 flex-shrink-0`}
                          ></div>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className={`${currentTheme.textSecondary} ${displayMode === 'developer' ? 'font-mono text-sm' : 'text-xs font-semibold uppercase tracking-wider'} mb-3`}>
                      {displayMode === "developer" && <span className={currentTheme.codeComment}>{"// "}</span>}
                      {displayMode === "developer" ? "Technologies used:" : "Technical Stack"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                          className={`px-3 py-1 ${currentTheme.cardBg} ${currentTheme.accent} text-xs rounded-full ${currentTheme.border} border ${displayMode === 'developer' ? 'font-mono' : ''} hover:${currentTheme.accent.replace("text-", "border-")}/50 transition-colors cursor-default`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
