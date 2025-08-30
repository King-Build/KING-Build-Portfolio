import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaJsSquare, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiHtml5, SiReactrouter, SiFirebase } from "react-icons/si";
import Food from '../assets/Food-project.png'
import Game from '../assets/Game-project.png'
import Timer from '../assets/Timer-project.png'
import Weather from '../assets/Weather-project.png'
import Shop from '../assets/Shop-project.png'
import { AiTwotoneApi } from "react-icons/ai";

const projects = [
    {
        name: "ShopMate",
        description: "A game info website with API integration to show latest games.",
        technologies: ["React", "Router", "TailwindCSS", "Firebase"],
        image: Shop,
        liveDemo: "https://shop-mates.netlify.app/",
        github: "https://github.com/King-Build/ShopMate",
    },
    {
        name: "Game Info",
        description: "A game info website with API integration to show latest games.",
        technologies: ["React", "TailwindCSS", "Router", "API"],
        image: Game,
        liveDemo: "https://games-infos.netlify.app/",
        github: "https://github.com/King-Build/Game-Info",
    },
    {
        name: "Food Delivery Landing",
        description: "A simple and interactive Food API Card project",
        technologies: ["React", "CSS", "API"],
        image: Food,
        liveDemo: "https://api-foodjsx.netlify.app/",
        github: "https://github.com/King-Build/API-Food",
    },
    {
        name: "Weather API App",
        description: "A weather forecast app fetching real-time data from API.",
        technologies: ["React", "TailwindCSS", "API",],
        image: Weather,
        liveDemo: "https://globl-weather.netlify.app/",
        github: "https://github.com/King-Build/Global-Weather",
    },
    {
        name: "Timer App",
        description: "A simple countdown timer app with start/stop/reset features.",
        technologies: ["HTML", "CSS", "JavaScript",],
        image: Timer,
        liveDemo: "https://timer-jsx.netlify.app/",
        github: "https://github.com/King-Build/Timer",
    },
];

const techIcons = {
    React: <FaReact className="text-blue-500" />,
    TailwindCSS: <SiTailwindcss className="text-blue-400" />,
    JavaScript: <FaJsSquare className="text-yellow-400" />,
    HTML: <SiHtml5 className="text-orange-500" />,
    CSS: <FaCss3Alt className="text-blue-500" />,
    API: <AiTwotoneApi className="text-green-500" />,
    Router: <SiReactrouter className="text-red-500" />,
    Firebase: <SiFirebase className="text-yellow-400" />
};

const Projects = () => {
    return (
        <section className='font-["Exo_2",_sans-serif] min-h-[82vh] bg-slate-950 text-white flex flex-col items-center px-4 sm:px-6 pb-6 pt-8'>
            <div className="max-w-6xl w-full flex flex-col">
                <div className="flex flex-wrap justify-center gap-6 flex-1 items-start">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-slate-800 rounded-2xl shadow-md overflow-hidden flex flex-col w-full sm:w-[48%] lg:w-[30%] h-[280px] hover:scale-105 transition duration-300 relative">
                            <div className="relative h-[75%]">
                                <img src={project.image} alt={project.name} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute top-0 left-0 right-0 bg-black/70 p-2">
                                    <h2 className="text-md font-bold text-white">{project.name}</h2>
                                </div>
                                <div className="absolute top-0 right-0 flex gap-2 p-2">
                                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-[#535C91] hover:text-[#7557ec] text-xl"><FaExternalLinkAlt /></a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-100 text-xl"><FaGithub /></a>
                                </div>
                            </div>
                            <div className="h-[25%] p-3 flex flex-col justify-center bg-gradient-to-t from-black/80 to-transparent">
                                <div className="flex flex-wrap gap-2 mb-1">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="flex items-center gap-1 bg-[#292929] text-[11px] px-2 py-[3px] rounded-full text-gray-300">
                                            {techIcons[tech] || null} {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-[13px] text-gray-100 line-clamp-2">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
