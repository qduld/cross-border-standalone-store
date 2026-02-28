"use client"

import { useState, useEffect } from "react"

export default function ThemeTest() {
  const [theme, setTheme] = useState("light")
  const [htmlClasses, setHtmlClasses] = useState("")
  const [localStorageTheme, setLocalStorageTheme] = useState("")

  useEffect(() => {
    const html = document.documentElement
    setHtmlClasses(html.className)
    setLocalStorageTheme(localStorage.getItem("theme") || "none")

    // Watch for class changes
    const observer = new MutationObserver(() => {
      setHtmlClasses(html.className)
      setLocalStorageTheme(localStorage.getItem("theme") || "none")
    })
    observer.observe(html, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    const isDark = html.classList.contains("dark")

    if (isDark) {
      html.classList.remove("dark")
      html.classList.add("light")
      localStorage.setItem("theme", "light")
    } else {
      html.classList.add("dark")
      html.classList.remove("light")
      localStorage.setItem("theme", "dark")
    }

    setTheme(isDark ? "light" : "dark")
    setHtmlClasses(html.className)
  }

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-gray-900 dark:text-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Theme Toggle Debug Page</h1>

        <div className="space-y-4">
          <button
            onClick={toggleTheme}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Toggle Theme (Direct DOM)
          </button>

          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Current Theme State</h2>
            <pre className="bg-gray-200 dark:bg-gray-700 p-4 rounded overflow-auto">
              {JSON.stringify({ theme, htmlClasses, localStorageTheme }, null, 2)}
            </pre>
          </div>

          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Click the button above</li>
              <li>Check if background color changes</li>
              <li>Check if text color changes</li>
              <li>Check the state values above</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}