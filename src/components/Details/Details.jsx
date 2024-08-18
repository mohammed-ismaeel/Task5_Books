import React, { useEffect, useState, useContext } from 'react'
import NavBar from './../NavBar/NavBar'
import Sidebar from './../Sidebar/Sidebar'
import Footer from './../Footer/Footer'
import { useParams } from 'react-router-dom'
import { ThemeContext } from './../context/ThemeContext'
import axios from 'axios'

const Details = ({ onClick }) => {
  const { id } = useParams()
  const [data, setData] = useState([])
  const [book, setBook] = useState(null)
  const { theme } = useContext(ThemeContext)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://example-data.draftbit.com/books?_limit=8'
        )
        setData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (data.length > 0) {
      const foundBook = data.find((e) => e.id.toString() === id.toString())
      setBook(foundBook)
    }
  }, [data, id])

  if (!book) return <div>Loading...</div>

  return (
    <div className={`details dark:text-white dark:bg-black`}>
      <NavBar
        onClick={onClick}
        toggleSidebar={toggleSidebar}
        menu={[
          { title: 'Home', path: '/' },
          { title: 'News', path: '/News' },
          { title: 'Promotion Of The Mount', path: '/Promotion' },
          { title: 'Plubishs', path: '/Plubishs' },
          { title: 'Subsribe To The Newsletter', path: '/Subsribe' },
        ]}
      />
      <Sidebar
        onClick={onClick}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="details-section w-11/12 mx-auto my-24 flex justify-between dark:bg-black lg:flex-col lg:items-center lg:gap-y-5">
        <div className="book-image w-4/12 lg:w-9/12">
          <img src={book.image_url} alt="" className="w-full" />
        </div>
        <div className="book-desc max-w-2xl text-black dark:text-white lg:max-w-full">
          <h1 className="book-name text-4xl font-bold lg:text-xl">
            {book.title}
          </h1>
          <p className="author text-xs font-normal">{book.author}</p>
          <div className="about mt-6">
            <h3 className="text-lg font-bold">About Book:</h3>
            <p className="text-black max-w-2xl font-normal text-sm mt-2.5 leading-6 dark:text-white">
              {book.description}
            </p>
            <div className="quantity flex gap-1.5 mt-5">
              <button>
                <div>
                  <i className="fa-solid fa-circle-minus text-purple-200"></i>
                </div>
              </button>{' '}
              1{' '}
              <button>
                <div>
                  <i className="fa-solid fa-circle-plus text-purple-200"></i>
                </div>
              </button>
            </div>
            <div className="flex w-full mt-8 gap-6 pb-9 border-purple-200 border-solid border-b">
              <button className="text-base w-1/2 font-medium py-3 px-16 border border-solid border-purple-200 text-white bg-purple-200 hover:scale-105 lg:px-0 sm:text-sm">
                Add to cart
              </button>
              <button className="text-base w-1/2 font-medium py-3 px-16 border border-solid border-purple-200 text-purple-200 hover:text-white hover:bg-purple-200 lg:px-0 sm:text-sm">
                Favorite
              </button>
            </div>
            <div className="info mt-5 text-base font-normal leading-8">
              <p>
                <span className="text-purple-200 pr-2.5">Pages Number :</span>
                {book.numPages} Pages
              </p>
              <p>
                <span className="text-purple-200 pr-2.5">Rating Count :</span>
                {book.rating_count}
              </p>
              <p>
                <span className="text-purple-200 pr-2.5">Reviews :</span>
                {book.review_count}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Details
