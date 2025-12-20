import React from 'react'
import { FlipWords } from './FlipWords';
import { motion } from 'motion/react';

const HeroText = () => {
    const words = ["Scalable", "Modren", "Secure"];

    const varients = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }


    return (
        <section className='z-20 text-center xl:mt-0 lg:mt-5 md:mt-10 xl:text-left lg:text-left md:text-left rounded-2xl bg-clip-text'>
            <div className='xl:flex lg:flex md:flex hidden flex-col items-start'>
                <motion.h1 className='text-3xl font-medium'
                    variants={varients}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }} > Hi I'm Prashanth </motion.h1>
                <motion.p className='text-4xl font-medium text-neutral-300'
                    variants={varients}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.2 }}> A Developer <br />
                    Dedicated to Crafting
                </motion.p>
                <motion.div
                    variants={varients}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.4 }}>
                    <FlipWords words={words} className="text-7xl text-white font-black" />
                </motion.div>
                <motion.p className='text-3xl font-medium text-neutral-300'
                    variants={varients}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.6 }}> Wb Solutions </motion.p>
            </div>

            {/* mobile  */}
            <div className='flex flex-col gap-y-5 xl:hidden lg:hidden md:hidden'>

                <motion.p className='text-3xl font-medium'
                    variants={varients}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}> Hi I'M Prashanth </motion.p>

                <div>
                    <motion.p className='text-4xl font-black'
                        variants={varients}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}> Building </motion.p>
                    <motion.div
                        variants={varients}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.4 }}>  <FlipWords words={words} className="text-7xl text-white font-bold" />
                    </motion.div>

                    <motion.p className='text-3xl font-black text-neutral-300'
                        variants={varients}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.6 }}> Wb Developer </motion.p>
                </div>

            </div>
        </section>
    )
}

export default HeroText
