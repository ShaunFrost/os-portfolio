import { useTime } from "@hooks/useTime"

const DateTime = () => {

    const { time, date } = useTime()

    return (
        <div className="date-time">
            <div className="time">
                {`${time.hours24}:${time.minutes}:${time.seconds}`}
            </div>
            <div className="date">
                <div className="date-inner">
                    <div className="month">{date.month.toUpperCase()}</div>
                    <div className="date-date">{date.date}</div>
                    <div className="date-day">{date.day}</div>
                </div>
            </div>
        </div>
    )
}

export default DateTime
