"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")

  // Load and apply theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null
    const initialTheme = savedTheme || "light"
    setTheme(initialTheme)

    // Apply theme to document immediately
    applyTheme(initialTheme)
  }, [])

  // Save theme to localStorage and update document whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme)
    applyTheme(theme)
  }, [theme])

  const applyTheme = (theme: Theme) => {
    const html = document.documentElement

    if (theme === "dark") {
      html.classList.add("dark")
      html.classList.remove("light")
    } else {
      html.classList.remove("dark")
      html.classList.add("light")
    }

    // Debug logging
    console.log('[Theme] Applied:', theme)
    console.log('[Theme] HTML classes:', html.className)
  }

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}