import React, { Suspense } from 'react'
import HeroText from './HeroText'
import ParallaxBackground from './ParallaxBackground'
import { Canvas, useFrame } from '@react-three/fiber'
import AustronutsModel from '../AustronutsModel'
import { Float } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { easing } from 'maath'
import Loader from '../Loader'

const Rig = () => {
    return useFrame((state, delta) => {
        easing.damp3(
            state.camera.position, [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
            0.5, delta
        )
    })
}


const Hero = () => {
    const ismobile = useMediaQuery({ maxWidth: 762 })
    return (
        <section className='flex items-center justify-center xl:justify-start lg:justify-start md:justify-start min-h-screen overflow-hidden xl:px-16 lg:px-20 md:px-15 px-10' id='home'>
            <HeroText />

            <ParallaxBackground />

            <figure className='absolute inset-0 w-full h-screen'>
                <Canvas camera={{ position: [0, 1, 3] }}>
                    <Suspense fallback={<Loader />}>
                        <Float>
                            <AustronutsModel
                                scale={ismobile && 0.23}
                                position={ismobile && [0, -1.5, 0]} />
                            {/* <OrbitControls /> */}
                            <Rig />
                        </Float>
                    </Suspense>
                </Canvas>
            </figure>

        </section>
    )
}

export default Hero
