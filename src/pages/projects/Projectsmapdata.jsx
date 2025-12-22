import React, { useState } from 'react';
import rightarrow from '../../../public/assets/arrow-right.svg';
import Projectdetails from './Projectdetails';

const Projectsmapdata = ({ project, setPreview }) => {
    const { name, description, link, iconUrl, theme } = project;

    const [viewmodels, setViewmodels] = useState(false);

    const CloseModel = () => {
        setViewmodels((prev) => !prev);
    }

    return (
        <>
            <section className='flex-wrap items-center justify-between xl:space-y-10 lg:space-y-8 md:space-y-6 space-y-0 xl:flex lg:flex md:flex'
                onMouseMove={() => setPreview(iconUrl)}
                onMouseLeave={() => setPreview(null)}
            >
                <p className='text-2xl'> {name}  </p>
                {/* skkils we suing in htis projects  */}
                <div className='flex gap-4 mt-2 text-sand'>
                    <span> Tags </span>
                    <span> Tags </span>
                </div>

                <button className='flex items-center gap-1 cursor-pointer hover-animation' onClick={CloseModel}> Read More
                    <img src={rightarrow} className='w-5' /> </button>
            </section>

            <div className='bg-gardient-to-r from-transparent via-neutral-700 to-transparent h-[10px] w-full' />

            {viewmodels && (
                <Projectdetails name={name} description={description} image={iconUrl} link={link} CloseModel={CloseModel} />
            )}

        </>
    )
}

export default Projectsmapdata
