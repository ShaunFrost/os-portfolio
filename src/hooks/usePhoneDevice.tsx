import { useEffect, useState } from "react"


export const usePhoneDevice = () => {
    const [isPhone, setIsPhone] = useState(false)

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setIsPhone(true)
        }

        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsPhone(true)
            } else {
                setIsPhone(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

    }, [])

    return {
        isPhone
    }
} 