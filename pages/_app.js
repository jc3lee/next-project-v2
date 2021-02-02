import "../styles/globals.css"
import smoothscroll from 'smoothscroll-polyfill'
import { useEffect, useState, } from "react"
import { CurrentTabContext } from "../hooks/contextHooks"

function MyApp({ Component, pageProps }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)
  useEffect(() => {
    //make smooth scroll work on all browsers
    smoothscroll.polyfill()
  }, [])
  return (
    <CurrentTabContext.Provider value={{ currentTabIndex, setCurrentTabIndex, }}>
      <Component {...pageProps} />
    </CurrentTabContext.Provider >
  )
}

export default MyApp
