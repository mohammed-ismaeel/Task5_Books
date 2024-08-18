import { NavLink } from 'react-router-dom'
import listBut from './../../assets/images/Menu.svg'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const NavBar = ({ onClick, menu, toggleSidebar }) => {
  const theme = useContext(ThemeContext)
  return (
    <nav
      className="flex justify-between items-center m-auto w-11/12 h-20"
      id="navbar"
    >
      <img src={`/logo-${theme.theme}.svg`} alt="" />
      <ul className="flex gap-6 lg:hidden">
        {menu.map((element, index) => {
          return (
            <li key={index}>
              <NavLink
                to={element.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {element.title}
              </NavLink>
            </li>
          )
        })}
      </ul>
      <button className="mode flex gap-2.5 lg:hidden" onClick={onClick}>
        <img src={`/${theme.theme}.svg`} alt="" />
        {`${theme.theme} mode`}
      </button>
      <button className="hidden lg:block" id="bar" onClick={toggleSidebar}>
        <img src={listBut} alt="" />
      </button>
    </nav>
  )
}

export default NavBar
