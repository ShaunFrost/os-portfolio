import { useContext } from "react"
import { OSContext } from "../context/OSContext"

export const useOSContext = () => {
    return useContext(OSContext)
}
