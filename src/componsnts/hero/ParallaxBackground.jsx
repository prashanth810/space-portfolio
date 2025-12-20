import React from 'react';
import sky from '../../../public/assets/sky.jpg';
import mountain from '../../../public/assets/mountain-1.png';
import mountain2 from '../../../public/assets/mountain-2.png';
import moutain3 from '../../../public/assets/mountain-3.png';
import planets from '../../../public/assets/planets.png';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

const ParallaxBackground = () => {
    const { scrollYProgress } = useScroll();
    const x = useSpring(scrollYProgress, { damping: 50 });

    const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
    const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
    const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
    const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

    return (
        <section>
            <div className="absolute inset-0 bg-black/40">
                <div className="relative h-screen overflow-y-hidden">

                    {/* background sky */}
                    <motion.div
                        className="absolute inset-0 w-full h-screen -z-50 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${sky})`,
                            backgroundPosition: "bottom",
                            backgroundSize: "cover",
                        }}
                    />

                    <motion.div
                        className="absolute inset-0 -z-40"
                        style={{
                            backgroundImage: `url(${moutain3})`,
                            backgroundPosition: "bottom",
                            backgroundSize: "cover",
                            y: mountain3Y,
                        }}
                    />

                    <motion.div
                        className="absolute inset-0 -z-30"
                        style={{
                            backgroundImage: `url(${planets})`,
                            backgroundPosition: "bottom",
                            backgroundSize: "cover",
                            x: planetsX,
                        }}
                    />

                    <motion.div
                        className="absolute inset-0 -z-20"
                        style={{
                            backgroundImage: `url(${mountain2})`,
                            backgroundPosition: "bottom",
                            backgroundSize: "cover",
                            y: mountain2Y,
                        }}
                    />

                    <motion.div
                        className="absolute inset-0 -z-10"
                        style={{
                            backgroundImage: `url(${mountain})`,
                            backgroundPosition: "bottom",
                            backgroundSize: "cover",
                            y: mountain1Y,
                        }}
                    />

                </div>
            </div>

        </section>
    );
};

export default ParallaxBackground;
