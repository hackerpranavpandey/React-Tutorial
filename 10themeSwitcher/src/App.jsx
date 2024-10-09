import { useState, useEffect } from 'react' 
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme is done through pure javascript no react is involved in this case

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return(
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <h1 className="p-4 bg-pink-600 text-3xl"> React Project for Theme Changer </h1>
      <div className='w-full'>
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
            <ThemeBtn/>
          </div>
          <div className='w-full max-w-sm mx-auto'>
            <Card/>
          </div>
      </div>
      </ThemeProvider>
  )
}

export default App