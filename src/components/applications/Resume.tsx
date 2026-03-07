import resume from '../../assets/resume_rasesh_rout_sde.webp'
import resume_PDF from '../../assets/resume_rasesh_rout_sde.pdf'
import { FaDownload } from "react-icons/fa"
import { Tooltip } from "react-tooltip"

export const Resume = () => {
    
    return (
        <div className="resume">
            <div className="download-resume" 
                data-tooltip-id="download-tt" data-tooltip-content="Download Resume" data-tooltip-place="bottom"
                data-tooltip-delay-show={400}
            >
                <a href={resume_PDF} download={"Resume_Rasesh_Rout_SDE_fullstack.pdf"} style={{ color: "inherit", textDecoration: "none"}}>
                    <FaDownload />
                </a>
            </div>
            <Tooltip id="download-tt"/>
            <img className="resume-img" src={resume}/>
        </div>
    )
}

export default Resume
