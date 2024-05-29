import { Dispatch, MutableRefObject, PropsWithChildren, SetStateAction, createContext, useRef, useState } from "react"
import { APPS } from "@constants"
import { Terminal, Projects, Resume, About }  from "@components/applications"


type DesktopApp = {
    id: APPS,
    app: JSX.Element,
    minimize: boolean
}

type OSContextType = {
    terminalInput: string,
    setTerminalInput: Dispatch<SetStateAction<string>>,
    currentApplication: APPS,
    setCurrentApplication: Dispatch<SetStateAction<APPS>>
    desktopApps: DesktopApp[],
    appRefs: MutableRefObject<Map<APPS, HTMLDivElement | null>>
    setDesktopApps: Dispatch<SetStateAction<DesktopApp[]>>
    addToDesktopApps: (app: APPS) => void
    openApplication: (app: APPS) => void
    closeApplication: (app: APPS) => void
    minimizeApplication: (app: APPS) => void
    maximizeApplication: (app: APPS) => void
    resetApplicationToNormal: (app: APPS) => void
    introRef: MutableRefObject<HTMLSpanElement | null>
}

export const OSContext = createContext<OSContextType>({} as OSContextType)

export const OSContextProvider = ({children}: PropsWithChildren) => {

    const [terminalInput, setTerminalInput] = useState<string>('')
    const [currentApplication, setCurrentApplication] = useState<APPS>(APPS.NONE)
    const appRefs = useRef(new Map<APPS, HTMLDivElement>())
    const [desktopApps, setDesktopApps] = useState<DesktopApp[]>([] as DesktopApp[])
    const introRef = useRef<HTMLSpanElement | null>(null)

    const getApplication = (app: APPS) => {
        switch (app){
            case APPS.TERMINAL:
                return <Terminal />
            case APPS.PROJECTS:
                return <Projects />
            case APPS.RESUME:
                return <Resume />
            case APPS.ABOUT:
                return <About />
            default:
                return <></>
        }
    }

    const bringAppToTop = (app: APPS) => {
        desktopApps.forEach((desktopApp) => {
            const desktopAppElement  = appRefs.current.get(desktopApp.id)
            if (!desktopAppElement) return
            desktopApp.id === app ? desktopAppElement.style.zIndex = '2' : desktopAppElement.style.zIndex = '1'
        })
    }

    const addToDesktopApps = (app: APPS) => {
        const desktopApp = desktopApps.find((a) => a.id === app)
        if (!desktopApp) {
            setDesktopApps(prev => [ ...prev, {
                id: app,
                app: getApplication(app),
                minimize: false
            } ])
        } else if (desktopApp.minimize){
            setDesktopApps(desktopApps.map((desktopApp) => {
                if (desktopApp.id === app) {
                    return {
                        ...desktopApp,
                        minimize: false
                    }
                }
                return desktopApp
            }))
        }
        bringAppToTop(app)
        setCurrentApplication(app)
    }

    const openApplication = (app: APPS) => {
        addToDesktopApps(app)
    }

    const closeApplication = (app: APPS) => {
        const otherApps = desktopApps.filter((a) => a.id !== app)
        setDesktopApps(otherApps)
        setCurrentApplication(APPS.NONE)
        appRefs.current.delete(app)
    }

    const minimizeApplication = (app: APPS) => {
        setDesktopApps(desktopApps.map((desktopApp) => {
            if (desktopApp.id === app) {
                resetApplicationToNormal(app)
                return {
                    ...desktopApp,
                    minimize: true
                }
            }
            return desktopApp
        }))
    }

    const maximizeApplication = (app: APPS) => {
        const desktopAppElement  = appRefs.current.get(app)
        if (!desktopAppElement) return
        desktopAppElement.style.zIndex = '11'
        desktopAppElement.style.top = '0'
        desktopAppElement.style.left = '0'
        desktopAppElement.style.height = '100%'
        desktopAppElement.style.width = '100%'
    }

    const resetApplicationToNormal = (app: APPS) => {
        const desktopAppElement  = appRefs.current.get(app)
        if (!desktopAppElement) return
        desktopAppElement.style.zIndex = '2'
        desktopAppElement.style.top = '10%'
        desktopAppElement.style.left = '10%'
        desktopAppElement.style.height = '80%'
        desktopAppElement.style.width = '80%'
    }

    return <OSContext.Provider value={{
        terminalInput, setTerminalInput,
        currentApplication, setCurrentApplication,
        desktopApps, appRefs, setDesktopApps, addToDesktopApps,
        openApplication, closeApplication, minimizeApplication,
        maximizeApplication, resetApplicationToNormal, introRef
    }}>
        {children}
    </OSContext.Provider>
}
