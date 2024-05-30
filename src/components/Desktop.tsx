import { useOSContext } from "@hooks/useOSContext"
import Application from "./Application"
import Dock from "./Dock"
import SpotifyPlayer from "./widgets/SpotifyPlayer"
import DateTime from "./widgets/DateTime"
import ToggleThemeSwitch from "./ToggleThemeSwitch"
import DesktopTopBar from "./DesktopTopBar"
import Social from "./Social"

const Desktop = () => {
    const { desktopApps } = useOSContext()
    return(
        <div className="desktop">
            <DesktopTopBar />
            {
                desktopApps.map((app) => {
                    return <Application id={app.id} key={app.id} minimize={app.minimize}>
                        {app.app}
                    </Application>
                })
            }
            <SpotifyPlayer />
            <DateTime />
            <ToggleThemeSwitch />
            <Social />
            <Dock />
        </div>
    )
}

export default Desktop