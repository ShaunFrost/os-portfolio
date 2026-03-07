import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { motion } from "framer-motion"
import { MdWork } from "react-icons/md"
import { FaChalkboardTeacher } from "react-icons/fa"
import { IoSchool } from "react-icons/io5"

type ExperienceType = {
    title: string
    company: string
    location: string
    desc: string[]
    icon: JSX.Element
    stint: string
}

const EXPERIENCES: ExperienceType[] = [
    {
        title: 'Full Stack Engineer',
        company: 'Muzify',
        location: 'Bangalore, India',
        desc: [
            'Built and optimized a high-traffic music analytics platform serving 100K+ monthly users, focusing on performant React components, state management, and UI responsiveness, with supporting Node.js APIs and data modeling.',
            'Achieved a 50% reduction in AWS costs by optimizing database queries and right-sizing instances.',
            'Integrated Stripe payment systems across web and mobile, establishing first revenue stream.',
            'Helped increase the user base from 100k to 900k by improving existing and adding new features to the react native ios and android apps.'
        ],
        icon: <MdWork />,
        stint: 'July, 2024 - Current'
    },
    {
        title: 'Full Stack Engineer',
        company: 'Homesome',
        location: 'San Francisco, CA',
        desc: [
            'Enabled ~ 25 underrepresented grocery stores with zero to low online presence to provide their customers with new shopping experience.',
            'Developed customer-store communication features, including chat workflows, to improve engagement and order clarity.',
            'Provided on-call support for root cause analysis of issues impacting customer revenue.'
        ],
        icon: <MdWork />,
        stint: 'Sep, 2021 - Sep, 2022'
    },
    {
        title: 'Graduate Teaching Assistant',
        company: 'Penn State University',
        location: 'State College, Pennsylvania',
        desc: [
            'Assisted in teaching CMPSC 360, Discrete Mathematics, to over 200 undergraduate students.',
            'Communicated complex technical concepts clearly to a diverse audience.',
            'Reviewed and provided constructive feedback on assignments and term papers.'
        ],
        icon: <FaChalkboardTeacher />,
        stint: 'Aug, 2020 - May, 2021'
    },
    {
        title: 'Instructional Assistant',
        company: 'Penn State University',
        location: 'State College, Pennsylvania',
        desc: [
            'Assisted in the instruction of Object Oriented Design (IST 311) for approximately 30 undergraduate students.',
            'Developed and created assignments to enhance student learning and engagement.',
            'Conducted doubt-clearing sessions to address student inquiries and foster understanding.'
        ],
        icon: <FaChalkboardTeacher />,
        stint: 'Jan, 2020 - May, 2020'
    },
    {
        title: 'Member of Technical Staff - II',
        company: 'Verizon',
        location: 'Chennai, India',
        desc: [
            'Developed a rule based automation tool that converts a Weblogic application, based on pre-defined rules, into open source Wildfly compatible eliminating the costs of Weblogic server maintenance.',
            'Collaborated with cross-functional teams to remodel critical customer-facing systems in Cassandra, cutting SLAs by approximately 50%.',
            'Transformed existing web applications into Spring Boot microservices, enhancing scalability and accelerating release cycles.'
        ],
        icon: <MdWork />,
        stint: 'Nov, 2017 - Jul, 2019'
    },
    {
        title: 'Software Engineer',
        company: 'Verizon',
        location: 'Chennai, India',
        desc: [
            'Developed a comprehensive dashboard to visualize average response times for critical backend systems.',
            'Provided a one-stop solution for enhanced service monitoring, improving operational efficiency and eliminating daily reports bulk email.',
            'Collaborated with cross-functional teams to ensure seamless integration of the dashboard.'
        ],
        icon: <MdWork />,
        stint: 'Jul, 2016 - Oct, 2017'
    },
    {
        title: 'Software Development Intern',
        company: 'Mebelkart',
        location: 'Bangalore, India',
        desc: [
            'Developed an e-commerce android application for a furniture retail start-up.',
            'Designed User Interfaces and built APIs for efficient data retrieval.'
        ],
        icon: <MdWork />,
        stint: 'May, 2015 - Jul, 2015'
    },
    {
        title: 'Bachelor of Technology',
        company: 'National Institute of Technology, Rourkela',
        location: 'Rourkela, India',
        desc: [],
        icon: <IoSchool />,
        stint: 'Jul, 2012 - May, 2016'
    }
]

type ExperienceCardProps = {
    experience: ExperienceType
}

const ExperienceCard = ({experience}: ExperienceCardProps) => {
    return (
      <VerticalTimelineElement
        contentStyle={{ background: "hsl(0, 0%, 25%)", color: "#fff", boxShadow: "rgba(72, 135, 202, 0.8) 0 5px 5px, rgba(72, 135, 202, 0.8) 5px 0px 5px, rgba(72, 135, 202, 0.8) 0 -5px 5px, rgba(72, 135, 202, 0.8) -5px 0px 5px" }}
        contentArrowStyle={{ borderRight: "0px"}}
        date={experience.stint}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={experience.icon}
      >
        <div>
            <p style={{fontSize: '1.5rem', fontWeight: 'bolder', margin: 0}}>{experience.title}</p>
            <p style={{fontSize: '1.2rem', fontWeight: 'bolder', margin: 0}}>{experience.company}</p>
            <p style={{margin: 0}}>{experience.location}</p>
        </div>
        <ul>
          {
            experience.desc.map((point, index) => {
                return <li key={`desc-${index}`}>
                    {point}
                </li>
            })
          }
        </ul>
      </VerticalTimelineElement>
    );
}

const Experience = () => {
    return (
        <div className="experience">
            <motion.div className="exp-div"
                initial={{opacity: 0, y: -100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.7}}
            >
                <p style={{font: 'Ubuntu Mono', fontSize: '2.5rem', fontWeight: 'bolder'}}>Work Experience.</p>
            </motion.div>

            <div className="">
                <VerticalTimeline>
                    {
                        EXPERIENCES.map((experience, index) => {
                            return <ExperienceCard key={`exp-${index}`} experience={experience} />
                        })
                    }
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Experience
