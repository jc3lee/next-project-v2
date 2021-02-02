import { AiOutlineTwitter } from "react-icons/ai"
import { IconContext } from "react-icons/lib"

const TwitterIco = ({ icoClasses = "" }) => {
  return (
    <IconContext.Provider value={{ className: icoClasses, }}>
      <AiOutlineTwitter aria-hidden="true" />
    </IconContext.Provider>
  )
}

export default TwitterIco