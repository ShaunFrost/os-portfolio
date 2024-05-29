import { TagCloud } from '@frank-mayer/react-tag-cloud'
import skillsBg from '@assets/bg-video/stars_bg.mp4'
import { motion } from 'framer-motion'
import { headerVariants, tagCloudVariants } from "@constants"

const Skills = () => {
    return (
        <div className="skills">
            <video src={skillsBg} autoPlay loop muted id="skills-video"></video>
            <motion.div className="skills-div"
                variants={headerVariants}
            >
                <p style={{font: 'Ubuntu Mono', fontSize: '2.5rem', fontWeight: 'bolder', width: '100%'}}>Skills.</p>
            </motion.div>
            <motion.div variants={tagCloudVariants}>
                <TagCloud
                    options={{
                        radius: 200,
                        maxSpeed: "normal",
                        itemClass: "cloud-tag-item",
                        keep: true
                    }}
                >
                    {
                        SKILLS
                    }
                </TagCloud>
            </motion.div>
        </div>
    )
}

export default Skills

const SKILLS = [
    "React", "Node", "JavaScript", "TypeScript", "Java", "Python", 
    "Cassandra", "Redis", "MongoDB", "ThreeJS", "HTML", "CSS",
    "SQL", "Express", "Springboot", "AWS", "C++", "Git", "Tailwind"
]