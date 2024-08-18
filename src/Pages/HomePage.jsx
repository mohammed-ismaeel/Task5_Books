import AboutUs from '../components/AboutUs/AboutUs'
import BooksSection from '../components/BooksSection/BooksSection'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { ThemeContext } from './../components/context/ThemeContext'
import { useContext } from 'react'

const HomePage = ({ onClick }) => {
  const theme = useContext(ThemeContext)

  return (
    <div className={`home-page ${theme.theme}`}>
      <div className="container dark:bg-black">
        <Header onClick={onClick} />
        <BooksSection />
        <AboutUs />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
