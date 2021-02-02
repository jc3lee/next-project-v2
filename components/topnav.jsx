import Link from "next/link"
import { useContext } from "react"
import cn from "classnames"
import { CurrentTabContext } from "../hooks/contextHooks"
import HomeIco from "../icons/HomeIco"
import SpeakersIco from "../icons/SpeakersIco"
import ClockIco from "../icons/ClockIco"

const TopNav = () => {
  const { currentTabIndex, } = useContext(CurrentTabContext)

  return (
    <ul className="fixed z-50 top-0 inset-x-0 h-12 flex space-x-2 sm:space-x-4 md:space-x-8 justify-center items-center bg-gray-900 text-white font-play tracking-wide">
      <li><Link href="#home"><a className={`flex py-2 px-2 hover:text-orange-600 text-2xl ${cn({ "text-orange-600": currentTabIndex === 0 })}`}>
        <div className="md:hidden">
          <HomeIco icoClasses={"w-8 h-8"} />
          <div className="sr-only">Home</div>
        </div>
        <p className="hidden md:block">Home</p>
      </a></Link></li>
      <li><Link href="#speakers"><a className={`flex py-2 px-2 hover:text-orange-600 text-2xl ${cn({ "text-orange-600": currentTabIndex === 1 })}`}>
        <div className="md:hidden">
          <SpeakersIco icoClasses={"w-8 h-8"} />
          <div className="sr-only">Speakers</div>
        </div>
        <p className="hidden md:block">Speakers</p>
      </a></Link></li>
      <li><Link href="#schedule"><a className={`flex py-2 px-2 hover:text-orange-600 text-2xl ${cn({ "text-orange-600": currentTabIndex === 2 })}`}>
        <div className="md:hidden">
          <ClockIco icoClasses={"w-8 h-8"} />
          <div className="sr-only">Schedule</div>
        </div>
        <p className="hidden md:block">Schedule</p>
      </a></Link></li>
      <li><Link href="#contact"><a className={`flex py-1.5 px-4 border-2 text-white bg-orange-600 tracking-wider uppercase font-sans font-bold hover:border-orange-50 focus:border-orange-50 text-base ${cn({ "border-orange-50": currentTabIndex === 3, "border-gray-900": currentTabIndex !== 3 })}`}>Join us!</a></Link></li>
    </ul>
  )
}

export default TopNav