"use client"
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTheme } from "@/contexts/theme-context"

export default function ContactSection() {
  const { currentTheme } = useTheme()

  const contactMethods = [
    {
      method: "email",
      icon: Mail,
      label: "Email",
      value: "gurpreetthiara221098@gmail.com",
      href: "mailto:gurpreetthiara221098@gmail.com",
    },
    {
      method: "phone",
      icon: Phone,
      label: "Phone",
      value: "+91 8872269487",
      href: "tel:+918872269487",
    },
    {
      method: "location",
      icon: MapPin,
      label: "Location",
      value: "Hoshiarpur, Punjab",
      href: "#",
    },
  ]

  return (
    <section id="contact" className={`py-24 px-6 ${currentTheme.background}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className={currentTheme.codeKeyword}>{"<"}</span>
            <span className={currentTheme.accent}>Contact</span>
            <span className={currentTheme.codeKeyword}>{" />"}</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${currentTheme.gradient} mx-auto rounded-full`} />
          <p className={`${currentTheme.textSecondary} mt-6 max-w-3xl mx-auto font-mono`}>
            <span className={currentTheme.codeComment}>{"// "}</span>
            Ready to collaborate? Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Code Block */}
            <div className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg`}>
              <div
                className={`flex items-center justify-between px-4 py-3 ${currentTheme.cardBg} rounded-t-lg ${currentTheme.border} border-b`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#27ca3f] rounded-full"></div>
                </div>
                <div className={`${currentTheme.textSecondary} text-sm font-mono`}>contact.js</div>
                <div className="w-16"></div>
              </div>

              <div className="p-6 font-mono text-sm">
                <div className="space-y-2">
                  <div className={currentTheme.textSecondary}>
                    <span className={currentTheme.codeComment}>{"// "}</span>
                    Get in touch with me
                  </div>
                  <div className="h-2"></div>
                  <div>
                    <span className={currentTheme.codeKeyword}>const</span>{" "}
                    <span className={currentTheme.codeVariable}>contactInfo</span>{" "}
                    <span className={currentTheme.codeKeyword}>=</span> <span className={currentTheme.text}>{"{"}</span>
                  </div>
                  <div className="pl-4 space-y-1">
                    <div>
                      <span className={currentTheme.codeVariable}>email</span>
                      <span className={currentTheme.text}>: </span>
                      <span className={currentTheme.codeString}>"gurpreetthiara221098@gmail.com"</span>
                      <span className={currentTheme.text}>,</span>
                    </div>
                    <div>
                      <span className={currentTheme.codeVariable}>phone</span>
                      <span className={currentTheme.text}>: </span>
                      <span className={currentTheme.codeString}>"+91 8872269487"</span>
                      <span className={currentTheme.text}>,</span>
                    </div>
                    <div>
                      <span className={currentTheme.codeVariable}>location</span>
                      <span className={currentTheme.text}>: </span>
                      <span className={currentTheme.codeString}>"Hoshiarpur, Punjab"</span>
                      <span className={currentTheme.text}>,</span>
                    </div>
                    <div>
                      <span className={currentTheme.codeVariable}>availability</span>
                      <span className={currentTheme.text}>: </span>
                      <span className={currentTheme.codeVariable}>true</span>
                    </div>
                  </div>
                  <div>
                    <span className={currentTheme.text}>{"}"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((contact, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  href={contact.href}
                  className={`flex items-center gap-4 p-4 ${currentTheme.cardBg} ${currentTheme.border} border rounded-lg hover:${currentTheme.accent.replace("text-", "border-")}/50 transition-all duration-300 group`}
                >
                  <div
                    className={`p-3 rounded-lg ${currentTheme.accent.replace("text-", "bg-")}/20 ${currentTheme.accent.replace("text-", "border-")}/30 border`}
                  >
                    <contact.icon className={`w-5 h-5 ${currentTheme.accent}`} />
                  </div>
                  <div>
                    <h4
                      className={`font-bold ${currentTheme.text} group-hover:${currentTheme.accent} transition-colors font-mono`}
                    >
                      {contact.label}
                    </h4>
                    <p className={`${currentTheme.textSecondary} font-mono text-sm`}>{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg`}>
              <div
                className={`flex items-center justify-between px-4 py-3 ${currentTheme.cardBg} rounded-t-lg ${currentTheme.border} border-b`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#27ca3f] rounded-full"></div>
                </div>
                <div className={`${currentTheme.textSecondary} text-sm font-mono`}>message.jsx</div>
                <div className="w-16"></div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h3 className={`text-xl font-bold ${currentTheme.text} mb-2 font-mono`}>
                    <span className={currentTheme.codeKeyword}>{"function "}</span>
                    <span className={currentTheme.codeFunction}>sendMessage</span>
                    <span className={currentTheme.text}>() {"{"}</span>
                  </h3>
                  <p className={`${currentTheme.textSecondary} font-mono text-sm`}>
                    <span className={currentTheme.codeComment}>{"// "}</span>
                    Fill out the form below to get in touch
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium ${currentTheme.text} mb-2 font-mono`}>
                        <span className={currentTheme.codeVariable}>name</span>
                        <span className={currentTheme.text}>:</span>
                      </label>
                      <Input
                        placeholder="Your name"
                        className={`${currentTheme.background} ${currentTheme.border} border ${currentTheme.text} placeholder:${currentTheme.textSecondary} focus:${currentTheme.accent.replace("text-", "border-")} font-mono`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium ${currentTheme.text} mb-2 font-mono`}>
                        <span className={currentTheme.codeVariable}>email</span>
                        <span className={currentTheme.text}>:</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className={`${currentTheme.background} ${currentTheme.border} border ${currentTheme.text} placeholder:${currentTheme.textSecondary} focus:${currentTheme.accent.replace("text-", "border-")} font-mono`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${currentTheme.text} mb-2 font-mono`}>
                      <span className={currentTheme.codeVariable}>subject</span>
                      <span className={currentTheme.text}>:</span>
                    </label>
                    <Input
                      placeholder="What's this about?"
                      className={`${currentTheme.background} ${currentTheme.border} border ${currentTheme.text} placeholder:${currentTheme.textSecondary} focus:${currentTheme.accent.replace("text-", "border-")} font-mono`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${currentTheme.text} mb-2 font-mono`}>
                      <span className={currentTheme.codeVariable}>message</span>
                      <span className={currentTheme.text}>:</span>
                    </label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={5}
                      className={`${currentTheme.background} ${currentTheme.border} border ${currentTheme.text} placeholder:${currentTheme.textSecondary} focus:${currentTheme.accent.replace("text-", "border-")} font-mono resize-none`}
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className={`w-full flex items-center justify-center gap-3 px-6 py-3 ${currentTheme.success.replace("text-", "bg-")} hover:opacity-80 text-white rounded-lg font-medium transition-colors font-mono`}
                  >
                    <Send className="w-4 h-4" />
                    <span>{"sendMessage()"}</span>
                  </motion.button>
                </form>

                <div className={`mt-6 ${currentTheme.textSecondary} font-mono text-sm`}>
                  <span className={currentTheme.text}>{"}"}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
