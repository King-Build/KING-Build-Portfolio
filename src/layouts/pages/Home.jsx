import React from 'react'
import profile from '../assets/profile.png'
import cv from '../CV/XojiakbarCV.pdf'
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <section className='font-["Exo_2",_sans-serif] h-[82vh] bg-slate-950 flex flex-col md:flex-row items-center justify-center px-4 py-4'>
            <motion.div
                className="flex-1 flex items-center justify-center md:mb-14"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}>
                <img
                    src={profile}
                    alt="Profile"
                    className="w-52 h-52 sm:ml-20 sm:w-60 sm:h-60 md:w-[28rem] md:h-auto object-cover rounded-full"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 200 }} />
            </motion.div>
            <motion.div
                className="flex-1 flex flex-col items-center md:items-start justify-center gap-4 text-center md:text-left mt-4 md:mt-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} >
                <p className="text-base sm:text-lg md:text-xl text-white">Hello, my name is</p>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">Xojiakbar Sharobiddinov</h1>
                <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-gray-400 selection:bg-yellow-300">Frontend Developer</h2>
                <p className="text-sm sm:text-base md:text-lg text-white max-w-xs sm:max-w-md">I build modern, responsive web applications with React and Tailwind CSS. Passionate about UI/UX and clean code.</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 w-full sm:w-auto justify-center md:justify-start">
                    <a href={cv} download>
                        <motion.button
                            className="bg-gray-700 cursor-pointer text-white px-5 py-2 rounded-lg font-semibold transition hover:bg-gray-500"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                            Download CV</motion.button>
                    </a>
                </div>
                <motion.div
                    className="flex gap-3 mt-6 justify-center md:justify-start pb-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}>
                    <a href="https://github.com/King-Build" target='_blank'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-7 h-7" style={{ filter: "invert(1)" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/xojiakbar-sharobidinov-699b3337a/" target='_blank'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-7 h-7" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Home
