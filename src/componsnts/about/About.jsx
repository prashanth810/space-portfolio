import React from 'react';
import Coading from '../../../public/assets/coding-pov.png';
import Card from '../Card/Card';
import { nextjs, redux, react } from '../../assets/icons/index.js'

const About = () => {
    return (
        <section className='c-space section-spacing'>
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

                <div className='grid-default-color grid-2'>
                    <div className='flex items-center justify-center w-full h-full'>
                        <p className='flex items-end text-4xl text-gray-500'>  CODE IS CRAFT  </p>
                        <Card
                            style={{ rotate: "75deg", top: "30%", left: "20%" }}
                            text={"React Js"} />
                        <Card
                            style={{ rotate: "-30deg", top: "60%", left: "450%" }} text={"Javascript"} />

                        <Card
                            style={{ rotate: "90deg", top: "30%", left: "70%" }} text={"Node Js"} />

                        <Card
                            style={{ rotate: "-450deg", top: "55%", left: "0%" }} text={"Express Js"} />

                        <Card
                            style={{ rotate: "20deg", top: "10%", left: "38%" }} text={"Mongodb"} />

                        <Card
                            style={{ rotate: "160deg", top: "30%", left: "5%" }} text={"React Native"} />

                        <Card
                            style={{ rotate: "110deg", top: "48%", left: "35%" }} text={"Three Js"} />

                        <Card
                            style={{ rotate: "-45deg", top: "35%", left: "65%" }} image={nextjs} />

                        <Card
                            style={{ rotate: "25deg", top: "70%", left: "55%" }} image={redux} />

                        <Card
                            style={{ rotate: "25deg", top: "5%", left: "10%" }} image={react} />
                    </div>
                </div>
                <div className='grid-black-color grid-3'></div>
                <div className='grid-special-color grid-4'></div>
                <div className='grid-default-color grid-5'></div>
                <div className='grid-default-color grid-6'></div>
            </div>
        </section>
    )
}

export default About
