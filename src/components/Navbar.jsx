import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import Logo from '../assets/logo.png';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { slideBottom } from '../utility/animation';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <motion.main variants={slideBottom(0.5)} initial='initial' animate='animate' className='sticky z-100 top-0 bg-white z-50'>
            <nav className='shadow-md'>
                <div className='flex justify-between px-8 item-center py-2 container mx-auto'>
                    <div className='flex items-center'>
                        <section className='flex items-center gap-2'>

                            {/* Hamburger */}
                            <IoIosMenu onClick={() => setOpenMenu(true)} className='text-3xl text-primary cursor-pointer lg:hidden' />
                            {/* Logo */}
                            <div className='flex items-center'>
                                <img src={Logo} alt='logo' className='h-14 w-14' />
                                <h3 className='hidden lg:block font-bold text-3xl text-gray-800'>Printi<span className='text-primary'>fy</span></h3>
                            </div>
                        </section>
                    </div>

                    {/* menu item in large */}
                    <div className='flex items-center gap-3 xl:gap-7'>
                        {
                            ['Catalog', 'How it works', 'Pricing', 'Blog', 'Services', 'Use - cases', 'Need help ?'].map((value, index) => {
                                return (
                                    <p key={index} className='text-lg text-gray-700 hover:text-primary cursor-pointer hidden lg:block'>{value}</p>
                                )
                            })
                        }
                    </div>

                    {/* Sidebar */}
                    <div className={clsx("fixed h-full w-screen lg:hidden bg-black/20 backdrop-blur-sm top-0 right-0 -translate-x-full transition duration-500", openMenu && "translate-x-0")}>
                        <section className='text-gray-700 bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 flex w-60'>
                            <div className='flex items-center space-x-20'>
                                <p className='text-2xl font-bold'>Menu</p>
                                <IoCloseOutline onClick={() => setOpenMenu(false)} className='text-2xl cursor-pointer' />
                            </div>
                            {
                                ['Catalog', 'How it works', 'Pricing', 'Blog', 'Services', 'Use - cases', 'Need help ?'].map((value, index) => {
                                    return (
                                        <p key={index} className='text-lg font-bold'>{value}</p>
                                    )
                                })
                            }

                        </section>
                    </div>

                    {/* nav button */}
                    <section className='flex items-center gap-3'>
                        <button type="button" className="text-gray-600 hover:text-primary border border-gray-400 focus:outline-none font-medium rounded-sm text-sm text-center me-2 py-2 px-3">Log in</button>

                        <button type="button" className="text-primary hover:text-white border border-primary hover:bg-primary focus:outline-none font-medium rounded-sm text-sm text-center py-2 px-3">Sign up</button>
                    </section>
                </div>
            </nav>
        </motion.main>
    )
}

export default Navbar


// Catalog
// How it works
// Pricing
// Blog
// Services
// Use - cases
// Need help ?