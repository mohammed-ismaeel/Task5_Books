import { useState } from 'react'
import Hero from '../Hero/Hero'
import NavBar from '../NavBar/NavBar'
import Sidebar from '../Sidebar/Sidebar'
import logo from './../../assets/images/Logo-Light.svg'
import heroImg from './../../assets/images/book.png'
const Header = ({ onClick }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <header className="max-w-full h-screen md:h-full dark:text-white dark:bg-black">
      <Sidebar
        onClick={onClick}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <NavBar
        onClick={onClick}
        menu={[
          { title: 'Home', path: '/' },
          { title: 'News', path: '/News' },
          { title: 'Promotion Of The Mount', path: '/Promotion' },
          { title: 'Plubishs', path: '/Plubishs' },
          { title: 'Subsribe To The Newsletter', path: '/Subsribe' },
        ]}
        logo={logo}
        toggleSidebar={toggleSidebar}
      />
      <Hero
        topTitle="Author of august"
        mainTitle="Eric-Emanuel Schmitt"
        viewButton="View his books"
        heroImg={heroImg}
      />
    </header>
  )
}

export default Header
