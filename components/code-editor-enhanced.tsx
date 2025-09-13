"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface CodeEditorEnhancedProps {
  code: string
  language: string
  theme: any
  fontSize: number
  lineHeight: number
  showLineNumbers: boolean
  onCodeChange: (code: string) => void
}

export default function CodeEditorEnhanced({
  code,
  language,
  theme,
  fontSize,
  lineHeight,
  showLineNumbers,
  onCodeChange
}: CodeEditorEnhancedProps) {
  const [cursorPosition, setCursorPosition] = useState(0)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const lineNumbersRef = useRef<HTMLDivElement>(null)

  // Keywords for syntax highlighting
  const keywords = {
    javascript: [
      'async', 'await', 'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger',
      'default', 'delete', 'do', 'else', 'export', 'extends', 'finally', 'for', 'function',
      'if', 'import', 'in', 'instanceof', 'let', 'new', 'return', 'super', 'switch',
      'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with', 'yield'
    ],
    typescript: [
      'abstract', 'any', 'as', 'asserts', 'async', 'await', 'boolean', 'break', 'case',
      'catch', 'class', 'const', 'constructor', 'continue', 'debugger', 'declare', 'default',
      'delete', 'do', 'else', 'enum', 'export', 'extends', 'false', 'finally', 'for',
      'function', 'if', 'implements', 'import', 'in', 'infer', 'instanceof', 'interface',
      'is', 'keyof', 'let', 'module', 'namespace', 'never', 'new', 'null', 'number',
      'object', 'package', 'private', 'protected', 'public', 'readonly', 'return',
      'satisfies', 'static', 'string', 'super', 'switch', 'symbol', 'this', 'throw',
      'true', 'try', 'type', 'typeof', 'undefined', 'unique', 'unknown', 'var', 'void',
      'while', 'with', 'yield'
    ],
    python: [
      'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def',
      'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if',
      'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise',
      'return', 'try', 'while', 'with', 'yield'
    ],
    java: [
      'abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char',
      'class', 'const', 'continue', 'default', 'do', 'double', 'else', 'enum',
      'extends', 'final', 'finally', 'float', 'for', 'goto', 'if', 'implements',
      'import', 'instanceof', 'int', 'interface', 'long', 'native', 'new', 'package',
      'private', 'protected', 'public', 'return', 'short', 'static', 'strictfp',
      'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient',
      'try', 'void', 'volatile', 'while'
    ]
  }

  // Simple syntax highlighting
  const highlightLine = (line: string, language: string) => {
    if (!line.trim()) return <span>{line}</span>

    const langKeywords = keywords[language as keyof typeof keywords] || keywords.javascript
    const parts = []
    let remaining = line

    // Handle strings (single, double, template literals)
    const stringRegex = /(["'`])((?:\\.|(?!\1)[^\\])*?)\1|(\/\/.*$)|(\/\*[\s\S]*?\*\/)/g
    let lastIndex = 0
    let match

    while ((match = stringRegex.exec(line)) !== null) {
      // Add text before match
      if (match.index > lastIndex) {
        const beforeMatch = line.slice(lastIndex, match.index)
        parts.push(highlightKeywords(beforeMatch, langKeywords))
      }

      // Add highlighted match
      if (match[0].startsWith('//')) {
        // Comment
        parts.push(
          <span key={match.index} style={{ color: theme.comment }}>
            {match[0]}
          </span>
        )
      } else if (match[0].startsWith('/*')) {
        // Multi-line comment
        parts.push(
          <span key={match.index} style={{ color: theme.comment }}>
            {match[0]}
          </span>
        )
      } else {
        // String
        parts.push(
          <span key={match.index} style={{ color: theme.string }}>
            {match[0]}
          </span>
        )
      }

      lastIndex = stringRegex.lastIndex
    }

    // Add remaining text
    if (lastIndex < line.length) {
      const remaining = line.slice(lastIndex)
      parts.push(highlightKeywords(remaining, langKeywords))
    }

    return parts.length > 0 ? parts : <span>{line}</span>
  }

  const highlightKeywords = (text: string, langKeywords: string[]) => {
    if (!text) return <span>{text}</span>

    // Split by word boundaries
    const words = text.split(/(\b\w+\b|\W+)/)
    
    return words.map((word, index) => {
      if (langKeywords.includes(word)) {
        return (
          <span key={index} style={{ color: theme.keyword }}>
            {word}
          </span>
        )
      }
      // Check for function calls (word followed by opening parenthesis)
      if (/\w+/.test(word) && index < words.length - 1 && words[index + 1] === '(') {
        return (
          <span key={index} style={{ color: theme.function }}>
            {word}
          </span>
        )
      }
      // Check for numbers
      if (/^\d+\.?\d*$/.test(word)) {
        return (
          <span key={index} style={{ color: theme.number }}>
            {word}
          </span>
        )
      }
      return <span key={index}>{word}</span>
    })
  }

  const lines = code.split('\n')
  const lineNumbers = lines.map((_, index) => index + 1)

  return (
    <div className="relative">
      {/* Line Numbers */}
      {showLineNumbers && (
        <div
          ref={lineNumbersRef}
          className="absolute left-0 top-0 bottom-0 w-12 select-none pointer-events-none z-10"
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: lineHeight,
            color: theme.comment
          }}
        >
          {lineNumbers.map((num) => (
            <div key={num} className="text-right pr-2">
              {num}
            </div>
          ))}
        </div>
      )}

      {/* Code Display */}
      <div
        className="absolute inset-0 overflow-auto font-mono whitespace-pre"
        style={{
          fontSize: `${fontSize}px`,
          lineHeight: lineHeight,
          color: theme.text,
          backgroundColor: 'transparent',
          paddingLeft: showLineNumbers ? '3rem' : '0',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem'
        }}
      >
        {lines.map((line, index) => (
          <div key={index} className="min-h-[1.2em]">
            {highlightLine(line, language)}
          </div>
        ))}
      </div>

      {/* Textarea for editing */}
      <textarea
        ref={textareaRef}
        value={code}
        onChange={(e) => onCodeChange(e.target.value)}
        className="absolute inset-0 w-full h-full font-mono bg-transparent text-transparent caret-white resize-none outline-none"
        style={{
          fontSize: `${fontSize}px`,
          lineHeight: lineHeight,
          paddingLeft: showLineNumbers ? '3rem' : '0',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem'
        }}
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
      />
    </div>
  )
}
