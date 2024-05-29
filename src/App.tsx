import Desktop from "@components/Desktop"
import Loading from "@components/Loading"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

function App() {
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   if (window.screen.orientation.type.startsWith('portrait')) {
  //     window.alert('Please change orientation to landscape fr better view!')
  //   }
  // }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="App">
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div key="loading" initial={{opacity: 0}} animate={{opacity: 1}} 
          transition={{duration: 1}} exit={{ y: "50%", opacity: 0, transition: { duration: 0.4 }}}
        >
          <Loading />
        </motion.div>
      ) : (
        <motion.div key="desktop" initial={{ scale: 0, opacity: 0}} animate={{ scale: 1, opacity: 1}}
          transition={{duration: 0.6}}
        >
          <Desktop />
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  );
}

export default App
