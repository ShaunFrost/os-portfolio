import { BrowserRouter } from 'react-router-dom'
import { Hero, Introduction, Experience, Skills, Contact  } from './about-me'

export const About = () => {
    return (
        <BrowserRouter>
            <div className="about">
                <Hero />
                <Introduction />
                <Experience />
                <Skills />
                <Contact />
            </div>
        </BrowserRouter>
    )
}

export default About