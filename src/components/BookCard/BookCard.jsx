import './BookCardStyle.css'
import bookOpen from './../../assets/images/book-open-01.svg'
import star from './../../assets/images/bi_star-fill.svg'
import { Link } from 'react-router-dom'
const BookCard = ({ Id, author, numPages, rating, imageUrl }) => {
  return (
    <div className="card w-72">
      <img src={imageUrl} alt="" className="w-full h-96" />
      <p className="book-name text-base font-semibold text-black pt-1 dark:text-white">
        {author}
      </p>
      <div className="evaluated flex justify-between text-sm font-medium text-black py-1.5 dark:text-white">
        <div className="pages flex gap-1.5">
          <img src={bookOpen} alt="" className="w-5" />
          {numPages}
        </div>
        <div className="stars flex gap-1.5">
          <img src={star} alt="" className="w-5" /> {rating}
        </div>
      </div>
      <Link
        to={`/Details/${Id}`}
        className="w-full inline-block text-base font-medium text-white rounded-sm bg-purple-200 py-3 px-8 text-center dark:text-white hover:scale-105"
      >
        Show Details
      </Link>
    </div>
  )
}

export default BookCard
