import { Dispatch, PropsWithChildren, SetStateAction, createContext, useEffect, useState } from "react"
import { THEME } from "@constants"

type ThemeContextType = {
    theme: THEME,
    setTheme: Dispatch<SetStateAction<THEME>>
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

export const ThemeContextProvider = ({children}: PropsWithChildren) => {
    const [theme, setTheme] = useState<THEME>(THEME.LIGHT)

    useEffect(() => {
        document.querySelector("body")?.setAttribute("data-theme", theme)
    }, [theme])

    return <ThemeContext.Provider value={{
        theme, setTheme
    }}>
        {children}
    </ThemeContext.Provider>
}