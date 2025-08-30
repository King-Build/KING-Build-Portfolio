import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section className='font-["Exo_2",_sans-serif] h-[82vh] bg-slate-950 text-white flex items-center justify-center px-6'>
            <motion.div
                className="max-w-3xl text-center space-y-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}>
                <motion.h1
                    className="text-gray-200 text-2xl sm:text-3xl md:text-4xl font-bold selection:bg-teal-500"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}>Frontend Developer & Student</motion.h1>
                <motion.p
                    className="text-base sm:text-lg md:text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}>
                    I started programming in <span className="font-semibold text-teal-400">2023</span>.
                    At the beginning, I faced many challenges and even had to study
                    <span className="text-teal-400"> JavaScript</span> several times
                    to truly understand it. Now I am looking for job opportunities
                    both online and offline.
                </motion.p>
                <motion.p
                    className="text-base sm:text-lg md:text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}>
                    My ultimate goal is to become one of the world’s{" "}
                    <span className="font-semibold text-teal-400">top developers</span> and also
                    master <span className="font-semibold text-teal-400">Cyber Security</span>.
                    I have already started studying in this field and aim to be
                    the best in it as well.
                </motion.p>
                <motion.p
                    className="text-base sm:text-lg md:text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }} >
                    Besides coding, I enjoy riding motorcycles 🏍️, watching anime 🎌,
                    and listening to music 🎶. These passions inspire me and
                    keep me motivated. This portfolio represents my journey
                    and I plan to use it for a long time.</motion.p>
            </motion.div>
        </section>
    );
};

export default About;
