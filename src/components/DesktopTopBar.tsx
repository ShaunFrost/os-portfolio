import { useTime } from "@hooks/useTime"
import { FaWifi } from "react-icons/fa"
import { IoBatteryCharging } from "react-icons/io5"
import { APPS } from "@constants"
import { useOSContext } from "@hooks/useOSContext"

type ActionType = {
    name: string
    application: APPS
}

const ACTIONS: ActionType[] = [
    {
        name: 'About',
        application: APPS.ABOUT
    },
    {
        name: 'Projects',
        application: APPS.PROJECTS
    },
    {
        name: 'Resume',
        application: APPS.RESUME
    },
    {
        name: 'Terminal',
        application: APPS.TERMINAL
    }
]

const DesktopTopBar = () => {
    const { time, date } = useTime();
    const { openApplication } = useOSContext()
    const handleActionClick = (application: APPS) => {
        openApplication(application)
    }
    return (
        <div className="desktop-top-bar">
            <div className="desktop-bar-actions">
                {
                    ACTIONS.map((action) => {
                        return <div key={action.name} className="action" onClick={() => handleActionClick(action.application)}>
                            {action.name}
                        </div>
                    })
                }
            </div>
            <div className="desktop-bar-icons">
                <div style={{display: "flex", height:"100%", alignItems: "center", justifyContent: "center", marginRight: "10px", fontSize: "1.2rem"}}>
                    <IoBatteryCharging />
                </div>
                <div style={{display: "flex", height:"100%", alignItems: "center", justifyContent: "center", marginRight: "10px"}}>
                    <FaWifi />
                </div>
                <div style={{display: "flex", height:"100%", alignItems: "center", justifyContent: "center", marginRight: "10px", fontFamily: "monospace", fontSize: "0.8rem"}}>
                    {`${date.day} ${date.date} ${date.month} ${time?.hours12}:${time?.minutes} ${time?.meridien}`}
                </div>
            </div>
        </div>
    )
}

export default DesktopTopBar