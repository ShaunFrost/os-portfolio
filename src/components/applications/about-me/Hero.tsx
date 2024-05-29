import { motion } from "framer-motion"
import heroBg from '@assets/bg-video/hero_bg.mp4'
import { useOSContext } from "@hooks/useOSContext"

const Hero = () => {
    const {introRef} = useOSContext()
    const handleAnchorClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        if (introRef.current) introRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className="hero">
            <video src={heroBg} autoPlay loop muted id="hero-video"></video>
            <div className="hero-inner">
                <p style={{fontFamily: 'Ubuntu Mono', fontSize: '3rem'}}>Hi, I'm <span style={{color: 'lightgreen'}}>Rasesh</span></p>
                <p style={{fontFamily: 'monospace', fontSize: '1.2rem'}} >I’m a full stack engineer passionate about working on technology and products that help people achieve better experience.</p>
            </div>
            <div className="scroll-helper">
                {/* <a href="#introduction" > */}
                    <div className="mouse" onClick={handleAnchorClick}>
                        <motion.div
                            style={{width: '10px', height: '10px', borderRadius: '5px', backgroundColor: 'white'}}
                            animate={{
                                y: [0, 20, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop'
                            }}
                        />
                    </div>
                {/* </a> */}
            </div>
        </div>
    )
}

export default Hero