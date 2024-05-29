import { useEffect, useMemo, useState } from "react"
import { DATE_SECTION, getValue } from "@constants"

type TimeType = {
    hours24: string
    hours12: string
    minutes: string
    seconds: string
    meridien: "AM" | "PM"
}

type DateType = {
    date: string,
    month: string,
    day: string
}

export const useTime = () => {
    const [localDay, setLocalDay] = useState(-1)
    const calendarDate = useMemo<DateType>(() => {
        if (localDay !== -1) {
            const currentTime = new Date();
            const date = currentTime.getDate().toString()
            const month = currentTime.getMonth()
            const day = currentTime.getDay()
        
        
            return  {date, month: getValue(month, DATE_SECTION.MONTH), day: getValue(day, DATE_SECTION.DAY)}
        }
        return {date: '30', month: 'Aug', day: 'Tue'}
    }, [localDay])
    const [time, setTime] = useState<TimeType>({ hours12: '4', hours24: '16', minutes: '44', seconds: '44', meridien: 'PM' })
    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentTime = new Date()
            let hours = currentTime.getHours()
            let hours24 = hours.toString()
            hours24 = (hours24.length < 2) ? `0${hours24}` : `${hours24}`
            const meridien = (hours >= 12) ? 'PM' : 'AM'
            hours = hours%12
            hours = hours ? hours : 12
            let minutes = currentTime.getMinutes().toString()
            let seconds = currentTime.getSeconds().toString()
            minutes = (minutes.length < 2) ? `0${minutes}` : `${minutes}`
            seconds = (seconds.length < 2) ? `0${seconds}` : `${seconds}`
            setTime({hours24, hours12: hours.toString(), minutes, seconds, meridien})
            setLocalDay(currentTime.getDate())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return { time, date: calendarDate }
}