import React from 'react';
import { motion } from 'motion/react';

const Card = ({ style, text, image }) => {
    return image && !text ? (
        <motion.img src={image} className='absolute w-13 cursor-grab' style={style}
            whileHover={{ scale: 1.05 }}
            drag />
    ) : (
        <motion.section className='absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab' style={style}
            whileHover={{ scale: 1.05 }}
            drag>
            {text}
        </motion.section>
    )
}

export default Card
