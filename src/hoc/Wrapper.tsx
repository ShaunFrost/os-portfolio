import { motion } from 'framer-motion'

const variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: undefined,
            delayChildren: 0
        }
    }
}

const Wrapper = (Component: () => JSX.Element) => {
    
    return () => {
        return (
            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0.25}}
                className="wrapper-div"
            >
                <Component />
            </motion.div>
        )
    }
}

export default Wrapper