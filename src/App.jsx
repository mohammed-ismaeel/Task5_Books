import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import { useEffect, useState } from 'react'
import { ThemeContext } from './components/context/ThemeContext'
// import Details from "./components/Details/Details";
import DetailsPage from './Pages/DetailsPage'

function getInitialTheme() {
  const theme = localStorage.getItem('theme')
  return theme ? JSON.parse(theme) : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return (
    <>
      <ThemeContext.Provider value={{ theme }}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark')
                }}
              />
            }
          />
          <Route
            path="/Details/:id"
            element={
              <DetailsPage
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark')
                }}
              />
            }
          />
        </Routes>
      </ThemeContext.Provider>
    </>
  )
}

export default App
