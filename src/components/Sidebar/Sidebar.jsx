import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Sidebar = ({ onClick, isOpen, toggleSidebar }) => {
  const theme = useContext(ThemeContext)
  return (
    <div
      className={`w-64 h-screen bg-gray-800 text-white fixed top-0 right-0 transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="bg-slate-600 py-4 px-6 flex justify-between items-center">
        <button className="mode flex gap-2.5" onClick={onClick}>
          <img src={`/${theme.theme}.svg`} alt="hh" />
          {`${theme.theme} mode`}
        </button>
        <div id="close" className="cursor-pointer" onClick={toggleSidebar}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="flex items-center gap-2 px-2 py-2 text-lg rounded-md"
            >
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-2 px-2 py-2 text-lg hover:bg-gray-700 rounded-md"
            >
              <span>News</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-2 px-2 py-2 text-lg hover:bg-gray-700 rounded-md"
            >
              <span>Promotion</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-2 px-2 py-2 text-lg hover:bg-gray-700 rounded-md"
            >
              <span>Publishs</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-2 px-2 py-2 text-lg hover:bg-gray-700 rounded-md"
            >
              <span>Subscribe</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="px-4 py-4 bg-gray-900 absolute bottom-0 w-full">
        <p className="text-sm text-center">&copy; 2024 Your Company</p>
      </div>
    </div>
  )
}

export default Sidebar
