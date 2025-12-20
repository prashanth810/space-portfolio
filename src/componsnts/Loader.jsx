import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html className='text-center py-5 '>
            {progress} % loader
        </Html>
    )
}

export default Loader
