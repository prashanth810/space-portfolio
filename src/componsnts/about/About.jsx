import React, { useRef } from 'react';
import Coading from '../../../public/assets/coding-pov.png';
import Card from '../Card/Card';
import { css, express, git, github, html, javascript, mongodb, motion, mui, nextjs, nodejs, react, redux, tailwindcss, reactnative, bootstrap, threejs } from '../../assets/icons/index.js'
import Globe from '../globe/Globe.jsx';
import EmailButton from '../resuable buttons/EmailButton.jsx';
import Frameworks from '../frame works/Frameworks.jsx';

const About = () => {
    const containerRef = useRef();
    return (
        <section className='c-space section-spacing' id='about'>
            <h2 className='text-heading'> About Me </h2>

            <div className='grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-3 xl:auto-rows-[18rem] grid-cols-1 gap-3 mt-12'>

                <div className='flex items-end grid-default-color grid-1'>
                    <img src={Coading} className='absolute scale-[1.75] -right-[5rem] -top-[1rem] xl:scale-[3] lg:scale-[2.5] xl:left-50 xl:inset-y-10' />

                    <div className='z-10'>
                        <p className='headtext'> Hi, I'm Prashanth </p>
                        <p className='subtext'> Over the last 2 years, I developed my frontend and backend developement skills to deliver dynamic and software and web applications. </p>
                    </div>
                    <div className='absolute inset-x-0 pointer-events-none -bottom-4 xl:h-1/2 lg:h-1/2 md:h-1/2 h-1/3 bg-gradient-to-t from-indigo ' />
                </div>

                <div className='grid-default-color grid-2'
                    ref={containerRef}>
                    <div className='flex items-center justify-center w-full h-full'>
                        <p className='flex items-end text-4xl text-gray-500'>  CODE IS CRAFT  </p>
                        <Card
                            style={{ rotate: "75deg", top: "30%", left: "20%" }}
                            text={"React Js"}
                            containerRef={containerRef}
                        />
                        <Card
                            style={{ rotate: "-30deg", top: "80%", left: "450%" }} image={javascript}
                            containerRef={containerRef}
                        />

                        <Card
                            style={{ rotate: "90deg", top: "30%", left: "70%" }} image={nodejs}
                            containerRef={containerRef}
                        />

                        <Card
                            style={{ rotate: "-450deg", top: "55%", left: "0%" }} image={express}
                            containerRef={containerRef}
                        />

                        <Card
                            style={{ rotate: "20deg", top: "10%", left: "38%" }} image={mongodb}
                            containerRef={containerRef}
                        />

                        <Card
                            style={{ rotate: "33deg", top: "26%", left: "48%" }} image={tailwindcss}
                            containerRef={containerRef}
                        />

                        <Card
                            style={{ rotate: "28deg", top: "34%", left: "85%" }} image={github}
                            containerRef={containerRef}
                        />

                        <Card
                            style={{ rotate: "53deg", top: "76%", left: "68%" }} image={css}
                            containerRef={containerRef}
                        />

                        <Card
                            style={{ rotate: "160deg", top: "30%", left: "5%" }} text={"React Native"}
                            containerRef={containerRef}
                        />

                        <Card
                            style={{ rotate: "110deg", top: "48%", left: "35%" }} image={threejs}
                            containerRef={containerRef}
                        />

                        <Card
                            style={{ rotate: "-45deg", top: "35%", left: "65%" }} image={nextjs}
                            containerRef={containerRef}
                        />

                        <Card
                            style={{ rotate: "25deg", top: "70%", left: "55%" }} image={redux}
                            containerRef={containerRef}
                        />

                        <Card
                            style={{ rotate: "25deg", top: "5%", left: "10%" }} image={react}
                            containerRef={containerRef}
                        />
                    </div>
                </div>

                {/* grid - 3 */}
                <div className='grid-black-color grid-3'>
                    <div className='z-10 w-[50%]'>
                        <p className='headtext'> Time Zone  </p>
                        <p className='subtext'> I' based in Mars, and open to remove work worldwise.  </p>
                    </div>

                    <figure className='absolute left-[30%] top-[10%]'>
                        <Globe />
                    </figure>
                </div>

                {/* grid-4  */}
                <div className='grid-special-color grid-4'>
                    <div className='flex flex-col items-center justify-center mx-auto w-full gap-3'>
                        <p className='text-center headtext'> Do you want to start a project together? </p>
                        <EmailButton />
                    </div>
                </div>
                <div className='grid-default-color grid-5 '>
                    <div className='z-10 xl:w-[50%] lg:w-[50%] md:w-[50%] w-full'>
                        <p className='headtext'> Tech Stack </p>
                        <p className='subtext'> I Specialize in a variety of languages, framewrks, and tools that allow me to build robust and Scalable applications.  </p>
                    </div>
                    <div className='absolute inset-y-0 xl:inset-y-9 w-full h-full start-[50%] xl:scale-125'>
                        <Frameworks />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
