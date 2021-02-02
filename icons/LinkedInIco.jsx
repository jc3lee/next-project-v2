import { FaLinkedinIn } from "react-icons/fa"
import { IconContext } from "react-icons/lib"

const LinkedInIco = ({ icoClasses = "" }) => {
  return (
    <IconContext.Provider value={{ className: icoClasses, }}>
      <FaLinkedinIn aria-hidden="true" />
    </IconContext.Provider>
  )
}

export default LinkedInIco