import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const TimeLine = ({
    data
}) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="c-space "
            ref={containerRef}>
            <h2 className="headtext"> My Work Exe-perience </h2>
            <div ref={ref} className="relative pb-20">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-start pt-10 xl:pt-20 lg:pt-16 md:pt-12 md:gap-10">
                        <div
                            className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div
                                className="h-10 absolute -left-[15px] w-10 rounded-full bg-midnight flex items-center justify-center">
                                <div
                                    className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
                            </div>
                            <div className="xl:flex lg:flex md:flex flex-col gap-2 hidden xl:text-3xl lg:text-2xl md:text-xl text-lg font-bold xl:pl-20 lg:pl-16 md:p-14 text-neutral-300">
                                <h3 className=""> {item.date} </h3>
                                <h3 className="text-2xl text-neutral-400"> {item.title} </h3>
                                <h3 className="text-2xl text-neutral-500"> {item.job} </h3>
                            </div>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <div className="xl:hidden lg:hidden md:hidden block mb-4 text-xl font-bold text-left text-neutral-300">
                                <h3> {item.job} </h3>
                                <h3> {item.date} </h3>
                            </div>
                            {item.points.map((content, i) => {
                                return (
                                    <div>
                                        <p className="mb-3 font-normal text-neutral-400" key={i}>
                                            {content}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-lavendar/20 to-transparent from-[0%] via-[10%] rounded-full" />
                </div>
            </div>
        </div>
    );
};


export default TimeLine;