import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './component/navbar/Navbar'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme } from './theme/DarkTheme'
import Home from './component/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Navbar/>
      <Home/>
    </ThemeProvider>
  )
}

export default App
