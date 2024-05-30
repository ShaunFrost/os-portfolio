import { Tilt } from "@jdion/tilt-react"
import { motion } from "framer-motion"
import react_svg from '@assets/tech/react-svgrepo-com.svg'
import ts_svg from '@assets/tech/typescript-icon-svgrepo-com.svg'
import html_svg from '@assets/tech/html-5-svgrepo-com.svg'
import css_svg from '@assets/tech/css-3-svgrepo-com.svg'
import js_svg from '@assets/tech/js-svgrepo-com.svg'
import node_svg from '@assets/tech/node-js-svgrepo-com.svg'
import introBg from '@assets/bg-video/intro_bg.mp4'
import { headerVariants } from "@constants"
import { useOSContext } from "@hooks/useOSContext"
import { usePhoneDevice } from "@hooks/usePhoneDevice"

type TechType = {
    tech: string[]
}

type TechCardProps = {
    index: number
    tech: TechType
}

const paraVariants = {
    hidden: {
        x: -100,
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 1,
            ease: "easeOut"
        }
    }
}

const Introduction = () => {
    const {introRef} = useOSContext()
    const { isPhone } = usePhoneDevice()
    return (
        <div className="introduction">
            <span id="introduction" style={{position: "absolute", top: 0}} ref={introRef}>
            </span>
            {!isPhone && <video src={introBg} autoPlay loop muted id="hero-video"></video>}
            <motion.div className="intro-div"
                variants={headerVariants}
            >
                <p style={{font: 'Ubuntu Mono', fontSize: '2.5rem', fontWeight: 'bolder', width: '100%'}}>About me.</p>
            </motion.div>

            <motion.p className="intro-div" style={{font: 'monospace', fontSize: '1.2rem'}}
                variants={paraVariants}
            >
                I'm a skilled software engineer with experience in Javascript, AWS, 
                Java, Cassandra and frameworks like React, Angular, Node.js. I'm self taught
                in React, TypeScript, MongoDB, Electron, Three.JS having created 
                various applications utilizing the aforementioned technology. 
                Having worked with teams and colleagues across India and the United 
                States, I have a strong sense of collaboration and understanding of
                backgrounds. I'm a quick learner and I adapt to any technology  
                stack based on requirements. Let's work together and create efficient 
                and scalable solutions!
            </motion.p>

            <div className="tech">
                {
                    TECHS.map((tech, index) => {
                        return <TechCard key={`tech-${index}`} index={index} tech={tech}/>
                    })
                }
            </div>
        </div>
    )
}

export default Introduction

const tiltVariants = {
    hidden: {
        x: -100,
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
    }
}

const TechCard = ({index, tech}: TechCardProps) => {
    return (
        <Tilt className="tilt">
            <motion.div className="tilt-tile-div"
                variants={tiltVariants} transition={{type: 'spring', delay: (index) * 0.2, duration: 0.6}}
            >
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', gap: '30px', padding: '30px'}}>
                    {
                        tech.tech.map((techIcon) => {
                            return <img key={techIcon} src={techIcon} width={100} />
                        })
                    }
                </div>
            </motion.div>
        </Tilt>
    )
}

const TECHS: TechType[] = [
    {
        tech: [react_svg, ts_svg]
    },
    {
        tech: [html_svg, css_svg]
    },
    {
        tech: [js_svg, node_svg]
    }
]