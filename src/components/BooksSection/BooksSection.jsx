import BookCard from '../BookCard/BookCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
const BooksSection = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    axios
      .get('https://example-data.draftbit.com/books?_limit=8')
      .then((response) => {
        setData(response.data)
      })
  }, [])
  return (
    <div className="books-section w-11/12 my-0 mx-auto">
      <h1 className="text-black  text-4xl font-semibold pb-12 sm:text-3xl sm:text-center dark:text-white">
        Selected For You
      </h1>
      <div className="books-cards flex flex-wrap justify-between gap-y-12 gap-x-6 md:justify-center">
        {data?.map((ele, index) => {
          return (
            <BookCard
              key={index}
              Id={ele.id}
              author={ele.authors}
              numPages={ele['num_pages']}
              rating={ele.rating}
              imageUrl={ele['image_url']}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BooksSection
