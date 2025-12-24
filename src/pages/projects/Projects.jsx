import React, { useState } from 'react'
import { projects } from '../../componsnts/constants/Myskills'
import Projectsmapdata from './Projectsmapdata';
import { motion, useMotionValue, useSpring } from 'motion/react';

const Projects = () => {
    const [preview, setPreview] = useState(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { damping: 10, stiffness: 50 });
    const springY = useSpring(y, { damping: 10, stiffness: 50 });

    const ahndlemousemove = (e) => {
        x.set(e.clientX + 20);
        y.set(e.clientY + 20);
    }

    return (
        <section className='relative c-space mt-24' onMouseMove={ahndlemousemove} id='projects'>
            <h2 className="text-heading"> My Projects </h2>

            <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-10 h-[1px] w-full mb-6' />

            {projects.map((project, i) => {
                return (
                    <Projectsmapdata key={i} project={project} setPreview={setPreview} />
                )
            })}

            {preview && (
                <motion.img src={preview} className='fixed top-0 left-0 z-50 object-cover h-56 rounded-lg poniter-events-none w-80' style={{ x: springX, y: springY }} />
            )}
        </section>
    )
}

export default Projects
