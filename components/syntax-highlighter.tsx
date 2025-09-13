"use client"

import { memo } from "react"

interface HighlighterTheme {
  string: string
  comment: string
  keyword: string
  number: string
  function: string
  variable: string
  type?: string
  text: string
}

interface SyntaxHighlighterProps {
  code: string
  language: string
  theme: HighlighterTheme
  fontSize: number
  lineHeight: number
  showLineNumbers: boolean
}

export default memo(function SyntaxHighlighter({
  code,
  language,
  theme,
  fontSize,
  lineHeight,
  showLineNumbers
}: SyntaxHighlighterProps) {
  
  // Advanced syntax highlighting patterns
  const highlightPatterns = {
    javascript: [
      // Strings (single, double, template literals)
      { 
        pattern: /(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g, 
        style: { color: theme.string },
        type: 'string'
      },
      // Comments (single line)
      { 
        pattern: /\/\/.*$/gm, 
        style: { color: theme.comment },
        type: 'comment'
      },
      // Comments (multi-line)
      { 
        pattern: /\/\*[\s\S]*?\*\//g, 
        style: { color: theme.comment },
        type: 'comment'
      },
      // Keywords
      { 
        pattern: /\b(async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|let|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/g, 
        style: { color: theme.keyword },
        type: 'keyword'
      },
      // Numbers
      { 
        pattern: /\b\d+\.?\d*\b/g, 
        style: { color: theme.number },
        type: 'number'
      },
      // Function declarations
      { 
        pattern: /\bfunction\s+(\w+)/g, 
        style: { color: theme.function },
        type: 'function'
      },
      // Function calls
      { 
        pattern: /\b(\w+)(?=\s*\()/g, 
        style: { color: theme.function },
        type: 'function'
      },
      // Variables (let, const, var)
      { 
        pattern: /\b(let|const|var)\s+(\w+)/g, 
        style: { color: theme.variable },
        type: 'variable'
      }
    ],
    typescript: [
      // Strings
      { 
        pattern: /(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g, 
        style: { color: theme.string },
        type: 'string'
      },
      // Comments
      { 
        pattern: /\/\/.*$/gm, 
        style: { color: theme.comment },
        type: 'comment'
      },
      { 
        pattern: /\/\*[\s\S]*?\*\//g, 
        style: { color: theme.comment },
        type: 'comment'
      },
      // TypeScript specific keywords
      { 
        pattern: /\b(abstract|any|as|asserts|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|function|if|implements|import|in|infer|instanceof|interface|is|keyof|let|module|namespace|never|new|null|number|object|package|private|protected|public|readonly|return|satisfies|static|string|super|switch|symbol|this|throw|true|try|type|typeof|undefined|unique|unknown|var|void|while|with|yield)\b/g, 
        style: { color: theme.keyword },
        type: 'keyword'
      },
      // Types
      { 
        pattern: /\b(string|number|boolean|object|any|void|never|unknown)\b/g, 
        style: { color: theme.type || theme.keyword },
        type: 'type'
      },
      // Numbers
      { 
        pattern: /\b\d+\.?\d*\b/g, 
        style: { color: theme.number },
        type: 'number'
      },
      // Function declarations
      { 
        pattern: /\bfunction\s+(\w+)/g, 
        style: { color: theme.function },
        type: 'function'
      },
      // Function calls
      { 
        pattern: /\b(\w+)(?=\s*\()/g, 
        style: { color: theme.function },
        type: 'function'
      }
    ],
    python: [
      // Strings
      { 
        pattern: /(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g, 
        style: { color: theme.string },
        type: 'string'
      },
      // Comments
      { 
        pattern: /#.*$/gm, 
        style: { color: theme.comment },
        type: 'comment'
      },
      // Keywords
      { 
        pattern: /\b(and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g, 
        style: { color: theme.keyword },
        type: 'keyword'
      },
      // Numbers
      { 
        pattern: /\b\d+\.?\d*\b/g, 
        style: { color: theme.number },
        type: 'number'
      },
      // Function definitions
      { 
        pattern: /\bdef\s+(\w+)/g, 
        style: { color: theme.function },
        type: 'function'
      },
      // Class definitions
      { 
        pattern: /\bclass\s+(\w+)/g, 
        style: { color: theme.function },
        type: 'function'
      }
    ],
    java: [
      // Strings
      { 
        pattern: /(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, 
        style: { color: theme.string },
        type: 'string'
      },
      // Comments
      { 
        pattern: /\/\/.*$/gm, 
        style: { color: theme.comment },
        type: 'comment'
      },
      { 
        pattern: /\/\*[\s\S]*?\*\//g, 
        style: { color: theme.comment },
        type: 'comment'
      },
      // Keywords
      { 
        pattern: /\b(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/g, 
        style: { color: theme.keyword },
        type: 'keyword'
      },
      // Numbers
      { 
        pattern: /\b\d+\.?\d*\b/g, 
        style: { color: theme.number },
        type: 'number'
      },
      // Method declarations
      { 
        pattern: /\b(public|private|protected|static|final|abstract)\s+(\w+)\s+(\w+)\s*\(/g, 
        style: { color: theme.function },
        type: 'function'
      },
      // Class declarations
      { 
        pattern: /\bclass\s+(\w+)/g, 
        style: { color: theme.function },
        type: 'function'
      }
    ]
  }

  const applyHighlighting = (text: string, language: string) => {
    const patterns = highlightPatterns[language as keyof typeof highlightPatterns] || highlightPatterns.javascript
    let highlighted = text

    // Apply patterns in order of specificity
    patterns.forEach(({ pattern, style }) => {
      highlighted = highlighted.replace(pattern, (match) => {
        const styleString = Object.entries(style)
          .map(([key, value]) => `${key}: ${value}`)
          .join('; ')
        
        return `<span style="${styleString}">${match}</span>`
      })
    })

    return highlighted
  }

  const lines = code.split('\n')
  const highlightedCode = applyHighlighting(code, language)
  const highlightedLines = highlightedCode.split('\n')

  return (
    <div className="relative font-mono" style={{ fontSize: `${fontSize}px`, lineHeight: lineHeight }}>
      <div className="flex">
        {/* Line Numbers */}
        {showLineNumbers && (
          <div 
            className="select-none pr-4 text-right"
            style={{ 
              color: theme.comment,
              minWidth: '3rem'
            }}
          >
            {lines.map((_, index) => (
              <div key={index} className="leading-[inherit]">
                {String(index + 1).padStart(3, ' ')}
              </div>
            ))}
          </div>
        )}

        {/* Code Content */}
        <div 
          className="flex-1 overflow-x-auto"
          style={{ color: theme.text }}
        >
          {highlightedLines.map((line, index) => (
            <div 
              key={index} 
              className="leading-[inherit] whitespace-pre"
              dangerouslySetInnerHTML={{ __html: line || '&nbsp;' }}
            />
          ))}
        </div>
      </div>
    </div>
  )
})
