import Hero from './Hero'
import Introduction from './Introduction'
import Experience from './Experience'
import Skills from './Skills'
import Contact from './Contact'
import { Wrapper } from 'src/hoc'

const WrappedIntroduction = Wrapper(Introduction)
const WrappedExperience = Wrapper(Experience)
const WrappedSkills = Wrapper(Skills)
const WrappedContact = Wrapper(Contact)

export {
    Hero,
    WrappedIntroduction as Introduction,
    WrappedExperience as Experience,
    WrappedSkills as Skills,
    WrappedContact as Contact
}