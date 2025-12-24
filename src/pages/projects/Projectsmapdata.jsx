import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import Projectdetails from './Projectdetails';

const Projectsmapdata = ({ project, setPreview }) => {
    const { name, description, link, iconUrl, theme } = project;

    const [viewmodels, setViewmodels] = useState(false);

    const CloseModel = () => {
        setViewmodels((prev) => !prev);
    }

    return (
        <>
            <section className='xl:flex lg:flex md:flex items-center justify-between xl:space-y-10 lg:space-y-8 md:space-y-6 space-y-0 xl:flex lg:flex md:flex cursor-pointer'
                onMouseMove={() => setPreview(iconUrl)}
                onMouseLeave={() => setPreview(null)} >
                <p className='text-xl text-blue-500'> {name}  </p>
                {/* skkils we suing in htis projects  */}
                <div className='flex gap-4 mt-2 text-sand'>
                    <span> Tags </span>
                    <span> Tags </span>
                </div>

                <button className='flex items-center gap-1 cursor-pointer hover-animation text-gray-500' onClick={CloseModel}> Read More
                    <FaArrowRight /> </button>
            </section>

            <div className='bg-gardient-to-r from-transparent via-neutral-700 to-transparent h-[10px] w-full' />

            {viewmodels && (
                <Projectdetails name={name} description={description} image={iconUrl} link={link} CloseModel={CloseModel} />
            )}

        </>
    )
}

export default Projectsmapdata
