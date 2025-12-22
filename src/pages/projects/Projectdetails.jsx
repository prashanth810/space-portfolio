import React from 'react';
import closeicon from '../../../public/assets/close.svg';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Projectdetails = ({ name, description, link, image, CloseModel }) => {
    return (
        <section className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm'>
            <motion.div className='relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-t from-midnight to-navy border-white/10'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }} >
                <div className='flex items-center justify-between'>
                    <p className='subtext'> Project Details  </p>
                    <button className='p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500' onClick={CloseModel}>
                        <img src={closeicon} className='w-6 h-6' alt={name} />
                    </button>
                </div>

                <div>
                    <img src={image} className='w-full h-60 object-contain' />

                    <h4 className='mb-2 text-2xl font-bold text-white'> {name} </h4>
                    <p className='text-neutral-400'> {description} </p>
                    {/* tags images */}
                    <div className="flex items-center justify-between mt-4">
                        <div className='flex gap-3 rounded-lg size-10 hover-animation'> tags </div>
                        <div> tags </div>
                    </div>

                    <Link to={link} target='_blank' className='inline-flex items-center gap-1 font-medium hover-animation'>
                        View project
                    </Link>

                </div>
            </motion.div>
        </section>
    )
}

export default Projectdetails
