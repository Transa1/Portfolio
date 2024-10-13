import { SiPython } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
});

function Technologies() {
  return (
    <div className="border-b border-color-neutral-800 pb-24">
      <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1.5 }} className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-green-500" />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiScikitlearn className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTensorflow className="text-7xl text-yellow-600" />
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPytorch className="text-7xl text-red-500" />
        </motion.div>
        <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCplusplus className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostgresql className="text-7xl text-blue-800" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
