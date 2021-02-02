import { AiOutlineClockCircle } from "react-icons/ai"
import { IconContext } from "react-icons/lib"

const ClockIco = ({ icoClasses = "" }) => {
  return (
    <IconContext.Provider value={{ className: icoClasses, }}>
      <AiOutlineClockCircle aria-hidden="true" />
    </IconContext.Provider>
  )
}

export default ClockIco