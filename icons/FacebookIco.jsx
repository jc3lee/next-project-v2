import { FaFacebookF } from "react-icons/fa"
import { IconContext } from "react-icons/lib"

const FacebookIco = ({ icoClasses = "" }) => {
  return (
    <IconContext.Provider value={{ className: icoClasses, }}>
      <FaFacebookF aria-hidden="true" />
    </IconContext.Provider>
  )
}

export default FacebookIco