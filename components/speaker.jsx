import cn from "classnames"
import LinkedInIco from "../icons/LinkedInIco"
import TwitterIco from "../icons/TwitterIco"
import Image from "next/image"

const Speaker = ({ speakerData, index }) => {
  const { name, title, main, imgSrc } = speakerData
  return (
    <div className={`justify-around bg-gray-50 md:bg-none w-72 sm:pt-8 md:pt-0 sm:w-96 md:w-full max-w-screen-md mx-auto items-center md:items-stretch flex flex-col ${cn({ "md:flex-row-reverse": index % 2 !== 0, "md:flex-row": index % 2 === 0 })}`}>
      <div className="w-72 h-96">
        <Image src={imgSrc} width="288" height="384" className="object-cover" alt={name} />
      </div>
      <div className="px-4 flex-col text-orange-800 w-full md:w-96 mb-8 md:mb-0">
        <p className="mt-6 text-2xl md:text-4xl font-bold ">{title}</p>
        <p className="font-play text-base sm:text-lg md:text-xl mt-2 text-orange-700">{name}</p>
        <p className="font-play mt-6 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-loose">{main}</p>
        <div className="mt-4 flex space-x-4 justify-center">
          <a href="https://twitter.com/ljc_dev">
            <div className="sr-only">Twitter</div>
            <TwitterIco icoClasses={"w-7 h-7"} />
          </a>
          <a href="https://www.linkedin.com/in/jc-lee-a939831b5/">
            <div className="sr-only">LinkedIn</div>
            <LinkedInIco icoClasses={"w-7 h-7"} />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Speaker