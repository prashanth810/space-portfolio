import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { motion } from 'motion/react';

/* ✅ Reusable Navigation */
const Navigation = ({ onClick }) => {
    return (
        <ul className='nav-ul'>
            <li className='nav-li'>
                <Link to='/' className='nav-link' onClick={onClick}>Home</Link>
            </li>
            <li className='nav-li'>
                <Link to='/about' className='nav-link' onClick={onClick}>About</Link>
            </li>
            <li className='nav-li'>
                <Link to='/projects' className='nav-link' onClick={onClick}>Projects</Link>
            </li>
            <li className='nav-li'>
                <Link to='/contact' className='nav-link' onClick={onClick}>Contact</Link>
            </li>
        </ul>
    );
};

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(prev => !prev);
    };

    const closeMenu = () => {
        setToggle(false);
    };

    return (
        <header className='fixed top-0 left-0 w-full z-20 h-16 backdrop-blur-lg bg-primary/40'>
            <div className='mx-auto c-space max-w-7xl'>
                <div className='flex items-center justify-between h-full xl:py-2 lg:py-2 md:py-2 py-2'>
                    <p className='bg-gray-600 p-2 rounded'>
                        <Link
                            to='/'
                            className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'
                        >
                            PU
                        </Link>
                    </p>

                    {/* Mobile Toggle */}
                    <button
                        className='xl:hidden lg:hidden md:hidden cursor-pointer hover:text-white focus:outline-none flex'
                        onClick={handleToggle}
                    >
                        {toggle ? <IoClose /> : <CiMenuFries />}
                    </button>

                    {/* Desktop Nav */}
                    <nav className='xl:flex lg:flex md:flex hidden'>
                        <Navigation />
                    </nav>
                </div>
            </div>

            {/* Mobile Nav */}
            {toggle && (
                <motion.div
                    className='xl:hidden lg:hidden md:hidden block overflow-hidden text-center'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                >
                    <nav className='pb-5 bg-black/20'>
                        <Navigation onClick={closeMenu} />
                    </nav>
                </motion.div>
            )}
        </header>
    );
};

export default Navbar;
