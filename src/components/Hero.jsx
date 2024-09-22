import React from 'react';
import HeroImage from '../assets/hero1.gif';
import { motion } from 'framer-motion';
import { slideUp } from '../utility/animation';

const Hero = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 min-h-[600px]'>
                    {/* Text content section */}
                    <div className='space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-start'>

                        <motion.h1 variants={slideUp(0.2)} initial='initial' animate='animate' className='text-4xl xl:text-6xl font-bold'>Create and sell custom <span className='text-gray-500'>products</span></motion.h1>

                        <motion.div variants={slideUp(0.4)} initial='initial' animate='animate'>
                            <p>100% Free to use</p>
                            <p>900+ High-Quality Products</p>
                            <p>Largest global print network</p>
                        </motion.div>

                        <motion.div variants={slideUp(0.6)} initial='initial' animate='animate' className='flex gap-4'>
                            <button type="button" class="text-white bg-primary hover:text-primary border hover:bg-white hover:border-primary focus:outline-none font-medium rounded-sm text-sm text-center py-2 px-3">Start for free</button>
                            <button type="button" className="text-gray-600 hover:text-primary border border-gray-400 focus:outline-none font-medium rounded-sm text-sm text-center me-2 py-2 px-3">How it works?</button>
                        </motion.div>
                        <p className='text-primary'>Trusted by over 8M sellers around the world</p>
                    </div>

                    {/* Hero image section */}
                    <div className='flex justify-center items-center'>
                        <img src={HeroImage} alt='hero Image' className='w-[80%] md:w-[550px] xl:w-[600px]' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero