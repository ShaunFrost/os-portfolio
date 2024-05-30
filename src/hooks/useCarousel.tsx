import { useState } from "react"

export const useCarousel = (size: number) => {

    const [positionIndices, setPositionIndices] = useState([0, 1, 2])

    const next = () => {
        setPositionIndices(prev => {
            return prev.map((positionIndex) => {
                return (positionIndex + 1) % size
            })
        })
    }

    const previous = () => {
        setPositionIndices(prev => {
            return prev.map((positionIndex) => {
                if (positionIndex === 0) return size - 1
                return positionIndex - 1
            })
        })
    }

    return {
        positionIndices, next, previous
    }
}