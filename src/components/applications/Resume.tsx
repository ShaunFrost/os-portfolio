import resume from '../../assets/Resume_img.jpg'
import resume_PDF from '../../assets/Resume_RaseshKRout_updated.pdf'
import { FaDownload } from "react-icons/fa"
import { Tooltip } from "react-tooltip"

export const Resume = () => {
    
    return (
        <div className="resume">
            <div className="download-resume" 
                data-tooltip-id="download-tt" data-tooltip-content="Download Resume" data-tooltip-place="bottom"
                data-tooltip-delay-show={400}
            >
                <a href={resume_PDF} download={"Resume_RaseshRout.pdf"} style={{ color: "inherit", textDecoration: "none"}}>
                    <FaDownload />
                </a>
            </div>
            <Tooltip id="download-tt"/>
            <img src={resume} width={"100%"}/>
        </div>
    )
}

export default Resume
