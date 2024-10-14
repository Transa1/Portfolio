import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/Kevin.jpg';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownload } from '@fortawesome/free-solid-svg-icons';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: delay,
            duration: 0.5
        }
    }
})

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(0)} initial='hidden' animate='visible'
                            className="pb-16 text-6xl font-thin tracking-thin lg:mt-16 lg:text-8xl">Kevin Martínez</motion.h1>
                    </div>
                    <motion.span variants={container(0.5)} initial='hidden' animate='visible' className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Data Scientist & Machine Learning Researcher
                    </motion.span>
                    <motion.p variants={container(1)} initial='hidden' animate='visible' className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                    <motion.a variants={container(1.5)} initial='hidden' animate='visible' href="src/assets/CV Kevin Martínez.pdf" download  className='no-underline tracking-thin text-white font-medium'>
                        <FontAwesomeIcon icon={faCloudDownload} className='mr-2' />
                        Download my résumé
                    </motion.a>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.7 }}
                            className='rounded-2xl'
                            src={profilePic} alt="Kevin Martínez" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
