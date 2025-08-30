import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiRedux, SiNextdotjs, SiTypescript } from "react-icons/si";

const topSkills = [
    { name: "HTML", level: "95%", icon: <FaHtml5 className="text-orange-500 text-5xl" />, hover: "hover:text-orange-400" },
    { name: "CSS", level: "90%", icon: <FaCss3Alt className="text-blue-500 text-5xl" />, hover: "hover:text-blue-400" },
    { name: "JavaScript", level: "80%", icon: <FaJs className="text-yellow-400 text-5xl" />, hover: "hover:text-yellow-300" },
    { name: "SCSS / SASS", level: "70%", icon: <FaSass className="text-pink-500 text-5xl" />, hover: "hover:text-pink-400" },
    { name: "Bootstrap", level: "75%", icon: <FaBootstrap className="text-purple-500 text-5xl" />, hover: "hover:text-purple-400" },
];
const bottomSkills = [
    { name: "React", level: "80%", icon: <FaReact className="text-cyan-400 text-5xl" />, hover: "hover:text-cyan-300" },
    { name: "Tailwind CSS", level: "90%", icon: <SiTailwindcss className="text-sky-400 text-5xl" />, hover: "hover:text-sky-300" },
    { name: "Firebase", level: "25%", icon: <SiFirebase className="text-amber-500 text-5xl" />, hover: "hover:text-amber-400" },
    { name: "GitHub", level: "85%", icon: <FaGithub className="text-gray-300 text-5xl" />, hover: "hover:text-gray-200" },
];
const futureSkills = [
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-4xl" />, hover: "hover:text-gray-300" },
    { name: "React Native", icon: <FaReact className="text-cyan-400 text-4xl" />, hover: "hover:text-cyan-300" },
    { name: "Redux", icon: <SiRedux className="text-purple-400 text-4xl" />, hover: "hover:text-purple-300" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400 text-4xl" />, hover: "hover:text-blue-300" },
];

// animation variants
const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const Skills = () => {
    return (
        <section className='font-["Exo_2",_sans-serif] min-h-[82vh] bg-slate-950 text-white flex flex-col items-center justify-center px-4 sm:px-6 overflow-y-auto'>
            <div className="max-w-6xl w-full py-6">
                <motion.h1
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#fff] mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}>My Skills</motion.h1>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                    {topSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col items-center justify-center bg-slate-800 rounded-2xl p-5 shadow-md hover:scale-105 transition duration-300 ${skill.hover}`}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}>
                            {skill.icon}
                            <h2 className="mt-3 text-lg font-semibold">{skill.name}</h2>
                            <p className="text-sm text-white">{skill.level}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {bottomSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col items-center justify-center bg-slate-800 rounded-2xl p-5 shadow-md hover:scale-105 transition duration-300 ${skill.hover}`}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}>
                            {skill.icon}
                            <h2 className="mt-3 text-lg font-semibold">{skill.name}</h2>
                            <p className="text-sm text-white">{skill.level}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <motion.h2
                        className="text-lg sm:text-xl md:text-2xl font-semibold text-[#fff] mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}>Future Learning Goals</motion.h2>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
                        {futureSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className={`flex flex-col items-center justify-center bg-slate-800 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 ${skill.hover}`}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}>
                                {skill.icon}
                                <p className="mt-2 text-sm font-medium">{skill.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
