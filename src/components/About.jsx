import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">About
                <span className="text-neutral-500"> Me</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className='rounded-2xl' src={aboutImg} alt="about" />
                    </div>
                </motion.div>
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                    </div>
                    <div className='flex flex-col justify-center lg:justify-start'>
                        <h3 className='my-2 max-w-xl py-2 text-neutral-300 text-2xl'>Languages Spoken:</h3>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm lg:text-lg font-medium text-purple-800 lg:px-4 lg:py-2'>Spanish</span>
                            <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm lg:text-lg font-medium text-purple-800 lg:px-4 lg:py-2'>English</span>
                            <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm lg:text-lg font-medium text-purple-800 lg:px-4 lg:py-2'>German</span>
                            <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm lg:text-lg font-medium text-purple-800 lg:px-4 lg:py-2'>Portuguese</span>
                        </div>

                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default About
