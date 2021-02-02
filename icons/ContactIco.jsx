import { HiOutlineUserGroup } from "react-icons/hi"
import { IconContext } from "react-icons/lib"

const ContactIco = ({ icoClasses = "" }) => {
  return (
    <IconContext.Provider value={{ className: icoClasses, }}>
      <HiOutlineUserGroup aria-hidden="true" />
    </IconContext.Provider>
  )
}

export default ContactIco