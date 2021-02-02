import { AiFillInstagram } from "react-icons/ai"
import { IconContext } from "react-icons/lib"

const InstaIco = ({ icoClasses = "" }) => {
  return (
    <IconContext.Provider value={{ className: icoClasses, }}>
      <AiFillInstagram aria-hidden="true" />
    </IconContext.Provider>
  )
}

export default InstaIco