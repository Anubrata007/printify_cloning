import React from 'react';
import HeroImage from '../assets/hero1.gif';
import { motion } from 'framer-motion';
import { slideUp } from '../utility/animation';
import Arrow from '../assets/Right Arrow.gif';

const HeroTwo = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 min-h-[600px]'>

                    {/* Hero image section */}
                    <div className='flex justify-center items-center'>
                        <img src={HeroImage} alt='hero Image' className='w-[80%] md:w-[550px] xl:w-[600px]' />
                    </div>

                    {/* Text content section */}
                    <div className='space-y-5 flex flex-col justify-center items-center text-center md:text-center py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-end'>

                        <motion.h1 variants={slideUp(0.2)} initial='initial' animate='animate' className='text-4xl xl:text-6xl font-bold'>Easily add your design to a wide range of
                            <span className='text-gray-500'> products</span></motion.h1>

                        <motion.div variants={slideUp(0.4)} initial='initial' animate='animate'>
                            <p className='ext-sm text-gray-600 pb-4'>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
                            <div className='flex justify-center items-center text-center gap-3'>
                                <a className='text-primary' href='#'>All products</a>
                                <img src={Arrow} alt='Arrow' className='h-5 w-6' />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroTwo