import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  // State to track the current theme mode
  const [themeMode, setThemeMode] = useState("light")

  // Function to switch to the light theme
  const lightTheme = () => {
    setThemeMode("light")
  }

  // Function to switch to the dark theme
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // Effect to update the theme classes in the HTML element
  useEffect(() => {
    // Remove existing theme classes from the HTML element
    document.querySelector('html').classList.remove("light", "dark")
    
    // Add the current theme mode class to the HTML element
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn /> {/* Render the theme toggle button */}
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card /> {/* Render the card component */}
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
