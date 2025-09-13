"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Download, 
  Copy, 
  Share2, 
  Settings, 
  Code, 
  Palette, 
  Type, 
  Image, 
  Monitor,
  Smartphone,
  Tablet,
  RotateCcw,
  Eye,
  EyeOff,
  Check,
  Sparkles,
  Zap,
  Layers,
  Wand2,
  ChevronDown,
  ChevronRight,
  Play,
  Pause,
  RefreshCw
} from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { toast } from "sonner"
import html2canvas from "html2canvas"
import SyntaxHighlighter from "./syntax-highlighter"

// Preset code examples
const codeExamples = {
  javascript: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(10);
console.log(\`The 10th Fibonacci number is: \${result}\`);`,
  
  typescript: `interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private users: User[] = [];
  
  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const newUser: User = {
      id: Date.now(),
      ...userData
    };
    this.users.push(newUser);
    return newUser;
  }
  
  findUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}`,
  
  python: `def quick_sort(arr):
    """Sort an array using the quick sort algorithm."""
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

# Example usage
numbers = [64, 34, 25, 12, 22, 11, 90]
sorted_numbers = quick_sort(numbers)
print(f"Sorted array: {sorted_numbers}")`,
  
  java: `public class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1; // Element not found
    }
    
    public static void main(String[] args) {
        int[] numbers = {1, 3, 5, 7, 9, 11, 13, 15};
        int target = 7;
        int result = binarySearch(numbers, target);
        System.out.println("Element found at index: " + result);
    }
}`,
  
  react: `import React, { useState, useEffect } from 'react';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo: TodoItem = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li 
            key={todo.id}
            className={todo.completed ? 'completed' : ''}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;`
}

// Code themes for syntax highlighting
const codeThemes = {
  github: {
    name: "GitHub Dark",
    background: "#0d1117",
    text: "#c9d1d9",
    keyword: "#ff7b72",
    string: "#a5d6ff",
    comment: "#8b949e",
    function: "#d2a8ff",
    variable: "#79c0ff",
    number: "#79c0ff"
  },
  vscode: {
    name: "VS Code",
    background: "#1e1e1e",
    text: "#d4d4d4",
    keyword: "#569cd6",
    string: "#ce9178",
    comment: "#6a9955",
    function: "#dcdcaa",
    variable: "#9cdcfe",
    number: "#b5cea8"
  },
  monokai: {
    name: "Monokai",
    background: "#272822",
    text: "#f8f8f2",
    keyword: "#f92672",
    string: "#e6db74",
    comment: "#75715e",
    function: "#a6e22e",
    variable: "#f8f8f2",
    number: "#ae81ff"
  },
  dracula: {
    name: "Dracula",
    background: "#282a36",
    text: "#f8f8f2",
    keyword: "#ff79c6",
    string: "#f1fa8c",
    comment: "#6272a4",
    function: "#50fa7b",
    variable: "#8be9fd",
    number: "#bd93f9"
  },
  nord: {
    name: "Nord",
    background: "#2e3440",
    text: "#d8dee9",
    keyword: "#81a1c1",
    string: "#a3be8c",
    comment: "#4c566a",
    function: "#88c0d0",
    variable: "#d8dee9",
    number: "#b48ead"
  }
}

// Programming languages
const languages = [
  { value: "javascript", label: "JavaScript", icon: "🟨" },
  { value: "typescript", label: "TypeScript", icon: "🔷" },
  { value: "python", label: "Python", icon: "🐍" },
  { value: "java", label: "Java", icon: "☕" },
  { value: "cpp", label: "C++", label: "⚙️" },
  { value: "go", label: "Go", icon: "🐹" },
  { value: "rust", label: "Rust", icon: "🦀" },
  { value: "php", label: "PHP", icon: "🐘" },
  { value: "ruby", label: "Ruby", icon: "💎" },
  { value: "swift", label: "Swift", icon: "🦉" },
  { value: "kotlin", label: "Kotlin", icon: "🟣" },
  { value: "csharp", label: "C#", icon: "🔵" },
  { value: "html", label: "HTML", icon: "🌐" },
  { value: "css", label: "CSS", icon: "🎨" },
  { value: "sql", label: "SQL", icon: "🗄️" },
  { value: "json", label: "JSON", icon: "📄" },
  { value: "yaml", label: "YAML", icon: "📝" },
  { value: "markdown", label: "Markdown", icon: "📋" }
]

// Preset dimensions
const dimensions = [
  { name: "Desktop", width: 1200, height: 800, icon: Monitor },
  { name: "Tablet", width: 768, height: 1024, icon: Tablet },
  { name: "Mobile", width: 375, height: 812, icon: Smartphone },
  { name: "Twitter", width: 1200, height: 630, icon: Share2 },
  { name: "Instagram", width: 1080, height: 1080, icon: Image },
  { name: "Custom", width: 800, height: 600, icon: Settings }
]

export default function ScreenshotGenerator() {
  const { currentTheme } = useTheme()
  const canvasRef = useRef<HTMLDivElement>(null)
  
  // State management
  const [code, setCode] = useState(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(10);
console.log(\`The 10th Fibonacci number is: \${result}\`);`)
  
  const [selectedLanguage, setSelectedLanguage] = useState("javascript")
  const [selectedTheme, setSelectedTheme] = useState("github")
  const [showLineNumbers, setShowLineNumbers] = useState(true)
  const [showWatermark, setShowWatermark] = useState(true)
  const [watermarkText, setWatermarkText] = useState("CodeSnippet.dev")
  const [padding, setPadding] = useState([24])
  const [fontSize, setFontSize] = useState([14])
  const [lineHeight, setLineHeight] = useState([1.5])
  const [selectedDimension, setSelectedDimension] = useState("Desktop")
  const [customWidth, setCustomWidth] = useState(800)
  const [customHeight, setCustomHeight] = useState(600)
  const [isGenerating, setIsGenerating] = useState(false)
  const [showPreview, setShowPreview] = useState(true)

  // Get current dimensions
  const getCurrentDimensions = () => {
    if (selectedDimension === "Custom") {
      return { width: customWidth, height: customHeight }
    }
    const dim = dimensions.find(d => d.name === selectedDimension)
    return dim ? { width: dim.width, height: dim.height } : { width: 800, height: 600 }
  }


  // Generate screenshot
  const generateScreenshot = async (format: 'png' | 'jpeg' | 'svg' = 'png') => {
    if (!canvasRef.current) return
    
    setIsGenerating(true)
    
    try {
      const canvas = await html2canvas(canvasRef.current, {
        backgroundColor: codeThemes[selectedTheme as keyof typeof codeThemes].background,
        scale: 2,
        useCORS: true,
        allowTaint: true
      })
      
      const link = document.createElement('a')
      link.download = `code-snippet-${Date.now()}.${format}`
      
      if (format === 'png') {
        link.href = canvas.toDataURL('image/png')
      } else if (format === 'jpeg') {
        link.href = canvas.toDataURL('image/jpeg', 0.9)
      }
      
      link.click()
      
      toast.success(`Screenshot saved as ${format.toUpperCase()}!`)
    } catch (error) {
      toast.error('Failed to generate screenshot')
      console.error(error)
    } finally {
      setIsGenerating(false)
    }
  }

  // Copy code to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      toast.success('Code copied to clipboard!')
    } catch (error) {
      toast.error('Failed to copy code')
    }
  }

  // Copy image to clipboard
  const copyImageToClipboard = async () => {
    if (!canvasRef.current) return
    
    try {
      const canvas = await html2canvas(canvasRef.current, {
        backgroundColor: codeThemes[selectedTheme as keyof typeof codeThemes].background,
        scale: 2,
        useCORS: true,
        allowTaint: true
      })
      
      canvas.toBlob(async (blob) => {
        if (blob) {
          await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
          ])
          toast.success('Image copied to clipboard!')
        }
      })
    } catch (error) {
      toast.error('Failed to copy image')
    }
  }

  // Load preset example
  const loadExample = (language: string) => {
    const example = codeExamples[language as keyof typeof codeExamples]
    if (example) {
      setCode(example)
      setSelectedLanguage(language)
      toast.success(`Loaded ${language} example`)
    }
  }


  // Reset to defaults
  const resetToDefaults = () => {
    setCode(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(10);
console.log(\`The 10th Fibonacci number is: \${result}\`);`)
    setSelectedLanguage("javascript")
    setSelectedTheme("github")
    setShowLineNumbers(true)
    setShowWatermark(true)
    setWatermarkText("CodeSnippet.dev")
    setPadding([24])
    setFontSize([14])
    setLineHeight([1.5])
    setSelectedDimension("Desktop")
    setCustomWidth(800)
    setCustomHeight(600)
    
    toast.success("Reset to defaults")
  }

  const currentDimensions = getCurrentDimensions()
  const theme = codeThemes[selectedTheme as keyof typeof codeThemes]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white">Create Stunning Code Screenshots</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Code Screenshot
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your code into beautiful, shareable screenshots with professional themes, 
              customizable styling, and instant export options.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-white">5+ Themes</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Code className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-white">18 Languages</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Image className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white">HD Export</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* Quick Actions Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <Wand2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
                  <p className="text-sm text-gray-400 hidden sm:block">Generate and export your screenshots</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Button
                  onClick={() => generateScreenshot('png')}
                  disabled={isGenerating}
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      <span className="hidden sm:inline">Generating...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      <span className="hidden sm:inline">Download PNG</span>
                      <span className="sm:hidden">PNG</span>
                    </>
                  )}
                </Button>
                
                <Button
                  onClick={() => generateScreenshot('jpeg')}
                  disabled={isGenerating}
                  size="sm"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Download className="w-4 h-4 mr-2" />
                  JPEG
                </Button>
                
                <Button
                  onClick={copyImageToClipboard}
                  size="sm"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Copy Image</span>
                  <span className="sm:hidden">Image</span>
                </Button>
                
                <Button
                  onClick={copyToClipboard}
                  size="sm"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Copy Code</span>
                  <span className="sm:hidden">Code</span>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Panel - Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="space-y-6">
              {/* Code Editor */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      Code Editor
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                        <SelectTrigger className="w-32 bg-white/10 border-white/20 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map((lang) => (
                            <SelectItem key={lang.value} value={lang.value}>
                              <span className="flex items-center gap-2">
                                <span>{lang.icon}</span>
                                {lang.label}
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Textarea
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder="Enter your code here..."
                      className="min-h-[300px] bg-black/20 border-white/20 text-white font-mono text-sm placeholder:text-gray-400 resize-none"
                    />
                    
                    {/* Example Buttons */}
                    <div>
                      <p className="text-sm text-gray-400 mb-3">Quick Examples:</p>
                      <div className="flex flex-wrap gap-2">
                        {Object.keys(codeExamples).map((lang) => (
                          <Button
                            key={lang}
                            size="sm"
                            variant="outline"
                            onClick={() => loadExample(lang)}
                            className="border-white/20 text-white hover:bg-white/10 text-xs"
                          >
                            {languages.find(l => l.value === lang)?.icon} {lang}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Styling Options */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-white/5 transition-colors">
                      <CardTitle className="text-white flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Palette className="w-5 h-5" />
                          Styling & Themes
                        </div>
                        <ChevronDown className="w-4 h-4" />
                      </CardTitle>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="space-y-6">
                      {/* Theme Selection */}
                      <div>
                        <label className="text-sm font-medium text-white mb-3 block">Theme</label>
                        <div className="grid grid-cols-2 gap-3">
                          {Object.entries(codeThemes).map(([key, theme]) => (
                            <button
                              key={key}
                              onClick={() => setSelectedTheme(key)}
                              className={`p-3 rounded-lg border-2 transition-all ${
                                selectedTheme === key 
                                  ? 'border-blue-500 bg-blue-500/20' 
                                  : 'border-white/20 hover:border-white/40'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div 
                                  className="w-6 h-6 rounded border-2 border-white/30"
                                  style={{ backgroundColor: theme.background }}
                                />
                                <span className="text-sm text-white">{theme.name}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Dimensions */}
                      <div>
                        <label className="text-sm font-medium text-white mb-3 block">Dimensions</label>
                        <Select value={selectedDimension} onValueChange={setSelectedDimension}>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {dimensions.map((dim) => (
                              <SelectItem key={dim.name} value={dim.name}>
                                <span className="flex items-center gap-2">
                                  <dim.icon className="w-4 h-4" />
                                  {dim.name} ({dim.width}×{dim.height})
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Custom Dimensions */}
                      {selectedDimension === "Custom" && (
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-white mb-2 block">Width</label>
                            <input
                              type="number"
                              value={customWidth}
                              onChange={(e) => setCustomWidth(Number(e.target.value))}
                              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                              min="200"
                              max="2000"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-white mb-2 block">Height</label>
                            <input
                              type="number"
                              value={customHeight}
                              onChange={(e) => setCustomHeight(Number(e.target.value))}
                              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                              min="200"
                              max="2000"
                            />
                          </div>
                        </div>
                      )}

                      {/* Styling Controls */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white">Line Numbers</span>
                          <Switch
                            checked={showLineNumbers}
                            onCheckedChange={setShowLineNumbers}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white">Watermark</span>
                          <Switch
                            checked={showWatermark}
                            onCheckedChange={setShowWatermark}
                          />
                        </div>

                        {showWatermark && (
                          <input
                            type="text"
                            value={watermarkText}
                            onChange={(e) => setWatermarkText(e.target.value)}
                            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-gray-400"
                            placeholder="Watermark text"
                          />
                        )}

                        <div>
                          <label className="text-sm text-white mb-2 block">Padding: {padding[0]}px</label>
                          <Slider
                            value={padding}
                            onValueChange={setPadding}
                            max={100}
                            min={0}
                            step={4}
                            className="w-full"
                          />
                        </div>

                        <div>
                          <label className="text-sm text-white mb-2 block">Font Size: {fontSize[0]}px</label>
                          <Slider
                            value={fontSize}
                            onValueChange={setFontSize}
                            max={24}
                            min={8}
                            step={1}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            </div>
          </motion.div>

          {/* Right Panel - Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-fit">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Live Preview
                  </CardTitle>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="border-white/20 text-white">
                      {currentDimensions.width} × {currentDimensions.height}
                    </Badge>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setShowPreview(!showPreview)}
                      className="text-white hover:bg-white/10"
                    >
                      {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <AnimatePresence mode="wait">
                  {showPreview ? (
                    <motion.div
                      key="preview"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-center p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl"
                    >
                      <div
                        ref={canvasRef}
                        className="overflow-hidden rounded-xl shadow-2xl border border-white/10"
                        style={{
                          width: Math.min(currentDimensions.width, 700),
                          height: Math.min(currentDimensions.height, 500),
                          backgroundColor: theme.background,
                          padding: `${padding[0]}px`,
                          fontSize: `${fontSize[0]}px`,
                          lineHeight: lineHeight[0]
                        }}
                      >
                        {/* Window Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="text-gray-400 text-xs font-mono">
                            {languages.find(l => l.value === selectedLanguage)?.label || 'Code'}
                          </div>
                          <div className="w-16"></div>
                        </div>

                        {/* Code Content */}
                        <div className="space-y-1">
                          <SyntaxHighlighter
                            code={code}
                            language={selectedLanguage}
                            theme={theme}
                            fontSize={fontSize[0]}
                            lineHeight={lineHeight[0]}
                            showLineNumbers={showLineNumbers}
                          />
                        </div>

                        {/* Watermark */}
                        {showWatermark && (
                          <div className="absolute bottom-4 right-4 text-gray-500 text-xs opacity-50">
                            {watermarkText}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center h-96 text-gray-400"
                    >
                      <div className="text-center">
                        <EyeOff className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>Preview hidden</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
