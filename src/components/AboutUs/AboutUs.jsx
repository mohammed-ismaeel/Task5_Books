import Map from '../Map/Map'
const AboutUs = () => {
  return (
    <div className="about-us flex justify-between my-28 w-11/12 mx-auto xl:flex-col items-center gap-y-12 ">
      <div className="content w-1/2 text-black max-w-lg mt-8 xl:w-full dark:text-white">
        <h1 className=" text-4xl font-semibold">Did you know us?</h1>
        <p className="font-normal text-base w-full pt-8">
          We are about books and our purpose is to show you the book who can
          change your life or distract you from the real world în a better one.
          BWorld works with the must popular Publishs just for your delight. If
          you are about books, you must to subscribe to our newsletter.
        </p>
        <div className="subscribe-form mt-10">
          <form action="" className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your name"
              className="border-b border-purple-200 border-solid mt-5 pb-2 outline-none dark:bg-black"
              required
            />
            <input
              type="email"
              placeholder="Your e-mail"
              className="border-b border-purple-200 border-solid mt-5 pb-2 outline-none dark:bg-black"
              required
            />
            <input
              type="submit"
              value="Subscribe"
              className="bg-purple-200 py-3 px-8 text-white text-base font-medium mt-8 cursor-pointer rounded hover:scale-105"
            />
          </form>
        </div>
      </div>
      <div className="map w-1/2 xl:w-full">
        <Map />
      </div>
    </div>
  )
}

export default AboutUs
