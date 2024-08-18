import Button from '../Button/Button'
const Hero = ({ topTitle, mainTitle, viewButton, heroImg }) => {
  return (
    <div className="hero w-11/12 flex justify-between my-12 mx-auto md:flex-col ">
      <div className="content h-full max-w-xl mt-24 md:mt-2 dark:text-white">
        <div className="top-title text-sm text-purple-100 font-normal w-max border-2 border-purple-100  border-solid rounded p-2.5 sm:text-xs">
          {topTitle}
        </div>
        <div className="main-title text-5xl text-black font-bold mt-7 sm:text-xl dark:text-white">
          {mainTitle}
        </div>
        <p className="text-base font-normal text-black mt-7 mb-7 sm:text-sm dark:text-white">
          Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes
          and distinctions, and in 2001 he received the title of Chevalier des
          Arts et des Lettres. His books have been translated into over 40
          languages.
        </p>
        <Button buttonContent={viewButton} />
      </div>
      <img
        src={heroImg}
        alt=""
        className="md:max-w-96 mx-auto my-10 sm:max-w-64"
      />
    </div>
  )
}

export default Hero
