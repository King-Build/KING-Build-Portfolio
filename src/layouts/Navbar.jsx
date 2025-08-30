import { Link } from "react-router-dom";
import React, { useState } from "react";
import { LuPanelLeftClose, LuPanelRightClose } from "react-icons/lu";
import cv from './CV/XojiakbarCV.pdf'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const linkClasses = `relative 
        after:content-[''] after:absolute after:left-0 after:bottom-0 
        after:w-0 after:h-[3px] after:bg-purple-500 after:rounded-full
        after:transition-all after:duration-700 
        hover:after:w-full hover:after:shadow-[0_0_8px_#a855f7]`;
    return (
        <div className='font-["Exo_2",_sans-serif] h-[10vh]'>
            <nav className={`flex items-center justify-between px-4 sm:px-6 md:px-10 gap-2 bg-gray-900 text-white transition-all duration-300 ${menuOpen ? "h-auto py-4" : "h-[10vh]"}`}>
                <h1 className="font-bold text-xl sm:text-2xl md:text-[25px] lg:text-[2rem]">
                    <Link to='/'>Mr.KING 么</Link>
                </h1>
                <div className="hidden md:flex gap-4 lg:gap-10 font-semibold text-base md:text-[16px] lg:text-xl">
                    <Link to="/" className={linkClasses}>Home</Link>
                    <Link to="/about" className={linkClasses}>About</Link>
                    <Link to="/skills" className={linkClasses}>Skills</Link>
                    <Link to="/projects" className={linkClasses}>Projects</Link>
                    <Link to="/contact" className={linkClasses}>Contact</Link>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                    <a href={cv} download>
                        <button className="py-2 px-4 md:py-2.5 md:px-5 bg-gray-700 rounded-lg cursor-pointer border-none text-sm md:text-base lg:text-lg hover:bg-gray-500 transition">Download CV</button>
                    </a>
                    <img
                        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODZhN2VlbHd3dmR6Y3VzZTFoZHc1dmNtbHRkeGxjNGF2MHA3OXc5OSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/kSxi9DiWH4Q8q1Kbql/giphy.gif"
                        alt="navbar-Chibi"
                        className="w-[70px] h-[65px] md:w-[80px] md:h-[75px] lg:w-[95px] lg:h-[90px]" />
                    <button
                        className="flex justify-center items-center md:hidden ml-2 text-3xl sm:text-4xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu">
                        {menuOpen ? <LuPanelRightClose /> : <LuPanelLeftClose />}
                    </button>
                </div>
            </nav>
            {menuOpen && (
                <div className="absolute top-[10vh] left-0 w-full flex flex-col items-center gap-4 py-4 bg-[#192039] text-white font-bold text-lg md:hidden z-50">
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
                    <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
