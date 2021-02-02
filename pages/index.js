import Layout from '../components/layout'
import Rellax from "rellax"
import { useContext, useEffect, useRef } from 'react'
import { useInView, } from 'react-intersection-observer'
import { CurrentTabContext } from '../hooks/contextHooks'
import Speaker from '../components/speaker'
import ScheduleEvent from '../components/scheduleEvent'
import LinkedInIco from '../icons/LinkedInIco'
import TwitterIco from '../icons/TwitterIco'
import InstaIco from '../icons/InstaIco'
import FacebookIco from '../icons/FacebookIco'
const speakersData = require("../data/speakersData.json")
const scheduleData = require("../data/scheduleData.json")

export default function Home() {
  const rellaxHeroRef = useRef(null)
  const topSubConfirmRef = useRef(null)
  const btmSubConfirmRef = useRef(null)
  const { setCurrentTabIndex, } = useContext(CurrentTabContext)

  useEffect(() => {
    new Rellax(rellaxHeroRef.current, {
      speed: -10,
    })
  }, [])

  const { ref: homeRef, inView: homeInView, } = useInView({
    threshold: 0.5,
  })
  const { ref: speakersRef, inView: speakersInView, } = useInView({
    threshold: 0.1,
  })
  const { ref: scheduleRef, inView: scheduleInView, } = useInView({
    threshold: 0.1,
  })
  const { ref: contactRef, inView: contactInView, } = useInView({
    threshold: 0.1,
  })

  useEffect(() => {
    if (homeInView) setCurrentTabIndex(0)
    else if (speakersInView) setCurrentTabIndex(1)
    else if (scheduleInView) setCurrentTabIndex(2)
    else if (contactInView) setCurrentTabIndex(3)
  }, [homeInView, speakersInView, scheduleInView, contactInView,])

  function handleRegister(e) {
    e.preventDefault()
    e.target.reset()
    topSubConfirmRef.current.classList.remove("opacity-0")
    setTimeout(() => {
      topSubConfirmRef.current.classList.add("opacity-0")
    }, 2000)
  }

  function handleRegister2(e) {
    e.preventDefault()
    e.target.reset()
    btmSubConfirmRef.current.classList.remove("opacity-0")
    setTimeout(() => {
      btmSubConfirmRef.current.classList.add("opacity-0")
    }, 2000)
  }

  return (
    <Layout>
      <div className="w-full grid grid-cols-1 font-play">
        <div ref={homeRef} id="home" className="relative w-full text-gray-50">
          <div ref={rellaxHeroRef} className="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-center" style={{ zIndex: -100, backgroundImage: "url(/images/bg-hero.jpg)", filter: "brightness(75%) contrast(125%)" }}></div>
          <div className="pl-2 pr-2 sm:pl-24 md:pl-36 mt-64 w-full sm:mt-72 max-w-xs mx-auto sm:max-w-none md:mx-0 md:mt-96 pt-0 sm:pt-16 md:pt-24 relative z-10">
            <h1 className=" tracking-wide leading-tight capitalize text-4xl sm:text-6xl md:text-7xl">
              cybersecurity <br /> conference 2021
            </h1>
            <div className="flex flex-col">
              <div className="mt-4 flex items-center">
                <div className="w-16 md:w-28 h-0.5 bg-white"></div>
                <p className="text-base sm:text-lg md:text-xl tracking-wide ml-4">Live event, February 14th</p>
              </div>
              <form onSubmit={handleRegister} className="md:pl-8 flex flex-col mt-8 mb-28">
                <div className="flex max-w-xs">
                  <input required={true} className="flex-shrink w-48 py-2 px-4 text-gray-900 flex-1 bg-orange-50 hover:bg-white focus:bg-white focus:outline-none" type="email" name="registerEmail" id="registerEmailId" />
                  <button className="flex-shrink-0 px-4 py-2 bg-orange-600 transition-colors duration-150 font-open text-gray-50 focus:outline-none">
                    Register
              </button>
                </div>
                <p ref={topSubConfirmRef} className="ml-12 sm:ml-40 md:ml-56 mt-4 text-orange-50 select-none opacity-0">Thanks for subscribing!</p>
              </form>
            </div>
          </div>
        </div>
        <div ref={speakersRef} id="speakers" className="w-full bg-gray-200 ">
          <h1 className="mt-16 pl-8 pr-2 sm:pl-24 md:pl-36 tracking-wide capitalize  text-3xl sm:text-4xl md:text-5xl text-orange-800">
            our speakers
            </h1>
          <div className="md:mt-28 flex flex-col md:bg-gray-50 max-w-screen-lg mx-auto py-16 md:py-32 space-y-4 sm:space-y-12 md:space-y-32">
            {
              speakersData.speakers.map((s, index) => <Speaker speakerData={s} index={index} key={index} />)
            }
          </div>
        </div>
        <div ref={scheduleRef} id="schedule" className="w-full bg-gray-900 ">
          <h1 className="mt-16 pl-8 pr-2 sm:pl-24 md:pl-36 md:mt-24 tracking-wide capitalize text-3xl sm:text-4xl md:text-5xl text-orange-50">
            Schedule
          </h1>
          <div className="mt-12 md:mt-24 max-w-screen-md mx-auto flex flex-col items-center">
            <div className="flex flex-col pb-20">
              {
                scheduleData.schedule.map((s, index) => <ScheduleEvent scheduleEvent={s} lastOne={index + 1 === scheduleData.schedule.length} key={index} />)
              }

            </div>
          </div>
        </div>
        <div ref={contactRef} id="contact" className=" w-full bg-orange-600 text-orange-50">
          <h1 className="mt-16 pl-8 pr-2 sm:pl-24 md:pl-36 md:mt-24 pb-8 md:pb-16 tracking-wide capitalize text-3xl sm:text-4xl md:text-5xl text-orange-50 border-b border-orange-200">
            Cybersecurity <br /> Conference 2021
          </h1>
          <div className="pl-2 pr-2 m-16 max-w-xs mx-auto sm:max-w-none md:mx-0 md:max-w-screen-lg">
            <p className=" sm:pl-24 md:pl-36 mt-8 text-lg sm:text-xl md:text-2xl font-bold">Get your ticket now!</p>
            <form onSubmit={handleRegister2} className=" sm:pl-24 md:pl-36 flex flex-col mt-6">
              <div className="flex w-full max-w-xs">
                <input required={true} className="flex-shrink w-48 py-2 px-4 text-gray-900 flex-1 bg-orange-100 hover:bg-orange-50 focus:bg-orange-50 focus:outline-none" type="email" name="registerEmail" id="registerEmailId" />
                <button className="capitalize px-4 py-2 bg-gray-900 hover:bg-gray-800 focus:bg-gray-800 transition-colors duration-150 font-open text-gray-50 focus:outline-none">
                  Submit
              </button>
              </div>
              <p ref={btmSubConfirmRef} className="ml-12 sm:ml-40 md:ml-56  mt-2 text-orange-50 select-none opacity-0">Thanks for subscribing!</p>
            </form>
            <p className=" sm:pl-24 md:pl-36 mt-8 text-base tracking-wide">A question? Don't hesitate to <a className="underline" href="mailto:dev.if.ljc@gmail.com">get in touch.</a></p>
            <p className=" sm:pl-24 md:pl-36 text-3xl font-bold mt-8">Follow us on:</p>
            <div className=" sm:pl-24 md:pl-36 mt-12 mb-20 flex space-x-4">
              <a href="https://twitter.com/ljc_dev">
                <div className="sr-only">Twitter</div>
                <TwitterIco icoClasses={"w-8 h-8"} />
              </a>
              <a href="https://www.instagram.com/ljc_dev/">
                <div className="sr-only">Instagram</div>
                <InstaIco icoClasses={"w-8 h-8"} />
              </a>
              <a href="https://www.facebook.github.io/">
                <div className="sr-only">Facebook</div>
                <FacebookIco icoClasses={"w-8 h-8"} />
              </a>
              <a href="https://www.linkedin.com/in/jc-lee-a939831b5/">
                <div className="sr-only">LinkedIn</div>
                <LinkedInIco icoClasses={"w-8 h-8"} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 w-12 h-48 bg-orange-600 bg-opacity-75 hover:bg-opacity-100 flex-col justify-center items-center md:flex hidden">
        <a className="flex w-12 h-12 justify-center items-center hover:bg-orange-50 hover:text-orange-600" href="https://twitter.com/ljc_dev">
          <div className="sr-only">Twitter</div>
          <TwitterIco icoClasses={"w-8 h-8"} />
        </a>
        <a className="flex w-12 h-12 justify-center items-center hover:bg-orange-50 hover:text-orange-600" href="https://www.instagram.com/ljc_dev/">
          <div className="sr-only">Instagram</div>
          <InstaIco icoClasses={"w-8 h-8"} />
        </a>
        <a className="flex w-12 h-12 justify-center items-center hover:bg-orange-50 hover:text-orange-600" href="https://www.facebook.github.io/">
          <div className="sr-only">Facebook</div>
          <FacebookIco icoClasses={"w-8 h-8"} />
        </a>
        <a className="flex w-12 h-12 justify-center items-center hover:bg-orange-50 hover:text-orange-600" href="https://www.linkedin.com/in/jc-lee-a939831b5/">
          <div className="sr-only">LinkedIn</div>
          <LinkedInIco icoClasses={"w-8 h-8"} />
        </a>
      </div>
    </Layout>
  )
}
