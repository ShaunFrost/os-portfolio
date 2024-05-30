import { IoTerminal } from "react-icons/io5"
import { TiDocumentText } from "react-icons/ti"
import { FcIdea } from "react-icons/fc"
import { Tooltip } from "react-tooltip"
import { useOSContext } from "@hooks/useOSContext"
import { APPS } from "@constants"
import {motion} from "framer-motion"
import myPic from '../assets/me.webp'
import { usePhoneDevice } from "@hooks/usePhoneDevice"

const Dock = () => {
    const { addToDesktopApps } = useOSContext()
    const { isPhone } = usePhoneDevice()
    return (
        <motion.div className="dock"
        key="dock"
        initial={{scale: 0, x: "-50%"}}
        animate ={{scale: 1}}
        transition={{duration: 1}}
        >
            <div data-tooltip-id="about-tt" data-tooltip-content="About Me" data-tooltip-delay-show={400} className="dock-icon" 
                onClick={() => addToDesktopApps(APPS.ABOUT)}
            >
                <img src={myPic} style={{borderRadius: "25px"}}/>
            </div>
            <Tooltip id="about-tt" />

            {!isPhone && <><div data-tooltip-id="terminal-tt" data-tooltip-content="Terminal" data-tooltip-delay-show={400} className="dock-icon" 
                style={{fontSize: '3rem'}}
                onClick={() => addToDesktopApps(APPS.TERMINAL)}
            >
                <IoTerminal />
            </div>
            <Tooltip id="terminal-tt" /></>}

            <div data-tooltip-id="cv-tt" data-tooltip-content="Resume/CV" data-tooltip-delay-show={400} className="dock-icon" 
                style={{fontSize: '4rem'}}
                onClick={() => addToDesktopApps(APPS.RESUME)}
            >
                <TiDocumentText />
            </div>
            <Tooltip id="cv-tt" />

            <div data-tooltip-id="projects-tt" data-tooltip-content="Projects" data-tooltip-delay-show={400} className="dock-icon" 
                style={{fontSize: '3rem'}}
                onClick={() => addToDesktopApps(APPS.PROJECTS)}
            >
                <FcIdea />
            </div>
            <Tooltip id="projects-tt" />

        </motion.div>
    )
}

export default Dock;