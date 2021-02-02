import cn from "classnames"

const ScheduleEvent = ({ scheduleEvent, lastOne }) => {
  const { timeStart, timeEnd, text } = scheduleEvent
  return (
    <div className={`w-full px-2 md:px-8 flex items-center ${cn({ "border-b": !lastOne })} border-orange-800 py-4 md:py-6 text-white`}>
      <p className="w-24 flex flex-col md:block md:w-auto text-xl md:text-3xl font-open flex-shrink-0">
        <span>{timeStart}</span>
        <span className="mx-2 hidden md:inline-block">-</span>
        <span>{timeEnd}</span>
      </p>
      <p className="text-lg sm:text-xl md:text-3xl md:ml-4">{text}</p>
    </div>
  )
}

export default ScheduleEvent;