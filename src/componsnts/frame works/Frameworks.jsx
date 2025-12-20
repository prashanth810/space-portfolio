import OrbitCircles from "../Orbit circles/OrbitCircles";
import {
    css, express,
    git,
    github,
    html,
    javascript,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    tailwindcss,
    reactnative,
    bootstrap
} from '../../assets/icons/index.js';

const Frameworks = () => {
    const Skills = [
        css, express,
        git,
        github,
        html,
        javascript,
        mongodb,
        motion,
        mui,
        nextjs,
        nodejs,
        react,
        redux,
        tailwindcss,
        reactnative,
        bootstrap
    ]
    return (
        <div className="relative flex h-[15rem] w-full flex-col items-center justify-center overflow-hidden">
            <OrbitCircles iconSize={32}>
                {Skills.map((skill, index) => (
                    <Icon key={index} src={skill} />
                ))}
            </OrbitCircles>
            <OrbitCircles iconSize={22} radius={100} reverse speed={2}>
                {Skills.map((skill, index) => (
                    <Icon key={index} src={skill} />
                ))}
            </OrbitCircles>
        </div>
    )
}

const Icon = ({ src }) => (
    <img src={src} className="duration-300 rounded-s hover:scale-110" />
)
export default Frameworks;