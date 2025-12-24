import React from 'react';
import closeicon from '../../../public/assets/close.svg';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FaArrowRight } from "react-icons/fa6";

const Projectdetails = ({ name, description, link, image, CloseModel }) => {
    return (
        <section className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm'>
            <motion.div className='relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-t from-midnight to-navy border-white/10 p-4'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }} >
                {/* <div className='flex items-center justify-between'>
                    <p className='subtext'> Project Details  </p> */}
                <button className='absolute p-1 rounded-sm top-3 right-3 bg-midnight hover:bg-gray-500 cursor-pointer' onClick={CloseModel}>
                    <img src={closeicon} className='w-5 h-5' alt={name} />
                </button>
                {/* </div> */}

                <div>
                    <img src={image} className='w-full h-60 object-contain' />

                    <h4 className='mb-2 text-2xl font-bold text-white'> {name} </h4>
                    <p className='text-neutral-400'> {description} </p>
                    {/* tags images */}
                    <div className="flex items-center justify-between mt-4">
                        <div className='flex gap-3 rounded-lg size-10 hover-animation'> tags </div>
                        <div> tags </div>
                    </div>

                    <Link to={link} target='_blank' className='flex items-center justify-center py-2 gap-3 text-blue-600 font-medium hover-animation border border-blue-500'>
                        View project     <FaArrowRight />
                    </Link>

                </div>
            </motion.div>
        </section>
    )
}

export default Projectdetails
