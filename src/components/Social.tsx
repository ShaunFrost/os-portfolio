import linkedin from '@assets/socials/linkedin-icon-svgrepo-com.svg'
import github from '@assets/socials/github-142-svgrepo-com.svg'
import gmail from '@assets/socials/google-gmail-svgrepo-com.svg'
import instagram from '@assets/socials/instagram-color-svgrepo-com.svg'
import twitter from '@assets/socials/twitter-color-svgrepo-com.svg'
import { Tooltip } from 'react-tooltip'

type SocialContactType = {
    name: string,
    link: string,
    icon: string
}

const SOCIAL_CONTACTS: SocialContactType[] = [
    {
        name: 'Linkedin',
        link: "https://www.linkedin.com/in/raseshrout/",
        icon: linkedin
    },
    {
        name: 'Github',
        link: "https://github.com/ShaunFrost",
        icon: github
    },
    {
        name: 'Gmail',
        link: "mailto:raseshrout@gmail.com",
        icon: gmail
    },
    {
        name: 'Instagram',
        link: "https://www.instagram.com/rasesh_rout/",
        icon: instagram
    },
    {
        name: 'Twitter/X',
        link: "https://x.com/raseshstark",
        icon: twitter
    }
]

const Social = () => {
    return (
        <div className="social">
            <div className="social-tray">
                {
                    SOCIAL_CONTACTS.map((socialContact) => {
                        return <div key={socialContact.name}
                                data-tooltip-id={socialContact.name} data-tooltip-content={socialContact.name}
                                data-tooltip-delay-show={100} data-tooltip-place='right-end'
                            >
                            <a href={socialContact.link} target='_blank' className="social-icon">
                                <img width='40px' src={socialContact.icon}/>
                            </a>
                            <Tooltip id={socialContact.name} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Social;