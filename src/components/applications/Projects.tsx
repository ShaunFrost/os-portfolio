import { motion } from "framer-motion"
import { useCarousel } from "@hooks/useCarousel"
import { usePhoneDevice } from "@hooks/usePhoneDevice"
import { PROJECTS, ProjectType } from "@constants"

export const Projects = () => {

    const { isPhone } = usePhoneDevice()

    const {positionIndices, next, previous} = useCarousel(PROJECTS.length)

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation()
        next()
    }

    const handlePrevious = (e: React.MouseEvent) => {
        e.stopPropagation()
        previous()
    }

    return (
        <div className="projects">
            {!isPhone ? (<div className="carousel">
                {PROJECTS.map((project, index) => {
                    return <Project key={index} project={project} index={index} positionIndices={positionIndices}/>
                })}
                <div className="project-nav">
                    <button onClick={handlePrevious}>Prev</button>
                    <button onClick={handleNext}>Next</button>
                </div>
            </div>) : (<div className="projects-phone">
                {
                    PROJECTS.map((project, index) => {
                        return <ProjectPhone key={index} project={project} index={index} />
                    })
                }
            </div>)
            }
        </div>
    )
}

export default Projects

type ProjectProps = {
    project: ProjectType
    index: number
    positionIndices: number[]
}

const Project = ({project, index, positionIndices}: ProjectProps) => {

    const carouselVariants = {
        "center" : { x: "0%", scale: 1, zIndex: 6, opacity: 1 },
        "left" : { x: "-50%", scale: 0.6, zIndex: 4, opacity: 0.4},
        "right" : { x: "50%", scale: 0.6, zIndex: 4, opacity: 0.4},
        "hidden" : { opacity: 0, scale: 0.2, zIndex: 1 }
    }

    const isProjectInView = (index: number) => {
        return (positionIndices.includes(index))
    }

    const getAnimationVariant = (index: number) => {
        if (!isProjectInView(index)) return "hidden"

        if (positionIndices[0] === index) return "left"
        else if (positionIndices[1] === index) return "center"
        else return "right"
    }
    return (
        <motion.div
            key={index}
            className="project-div"
            initial="center"
            animate={getAnimationVariant(index)}
            variants={carouselVariants}
            transition={{ duration: 0.5 }}
        >
            <div className="left-pane">
                <img src={project.pic} height="100%" style={{objectFit: 'cover'}} />
            </div>
            <div className="right-pane">
                <div className="project-heading">
                    {project.name}
                </div>
                <div className="project-description">
                    <div>
                        {project.desc}
                    </div>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {
                            project.keywords.map((keyword) => {
                                return <span key={keyword} style={{padding: '4px', marginRight: '5px', marginBottom:'5px', backgroundColor: 'skyblue', color: 'white', borderRadius: '5px'}}>{keyword}</span>
                            })
                        }
                    </div>
                </div>
                <div className="project-buttons">
                    <a href={project.gitlink} target="_blank"><button>Source</button></a>
                    {project.websiteLink && <a href={project.websiteLink} target="_blank"><button>View</button></a>}
                </div>
            </div>
        </motion.div>
    );
}

type ProjectPhoneProps = {
    project: ProjectType,
    index: number
}

const ProjectPhone = ({project, index}: ProjectPhoneProps) => {

    const animationVariants = {
        hidden: {
            x: -100,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
        }
    }

    return (
        <motion.div
            key={index}
            className="project-phone-div"
            variants={animationVariants}
            transition={{type: 'spring', delay: (index) * 0.3, duration: 1}}
        >
            <h1>{project.name}</h1>
            <img src={project.pic} width="100%" style={{objectFit: 'cover'}}/>
            <p>{project.desc}</p>
            <div className="project-phone-buttons">
                <a href={project.gitlink} target="_blank"><button>Source</button></a>
                {project.websiteLink && <a href={project.websiteLink} target="_blank"><button>View</button></a>}
            </div>
        </motion.div>
    );
}