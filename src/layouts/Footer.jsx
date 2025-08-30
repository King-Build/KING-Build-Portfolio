import React, { useState } from "react";
import { FaSpotify, FaLinkedin, FaGithub, FaTelegramPlane } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
const staticImg = "https://media.giphy.com/media/Hb1m3Eo7Brsdk2ywQF/giphy_s.gif";
const gifImg = "https://media.giphy.com/media/Hb1m3Eo7Brsdk2ywQF/giphy.gif";
const Footer = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        <footer className='h-[8vh] font-["Exo_2",_sans-serif] bg-gray-900 text-white px-5 sm:px-10 sm:py-2'>
            <div className="flex flex-row sm:flex-row items-center justify-between h-full sm:min-h-0">
                <div className="hidden sm:flex items-center flex-shrink-0" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                    <img
                        src={isHover ? gifImg : staticImg}
                        alt="footer-Chibi"
                        className="w-[60px] h-[55px] sm:w-[80px] sm:h-[75px] object-contain" />
                </div>
                <div className="order-1 sm:order-3 flex gap-4 sm:gap-4 items-center justify-start sm:justify-end flex-1 sm:flex-none">
                    <a href="https://open.spotify.com/user/31eidxihjabvbqo6ykqzdrr5dd7y?si=ce6b4bca450942a2" target="_blank" rel="noopener noreferrer" className="text-[#1DB954] hover:drop-shadow-[0_0_6px_#1DB954] transition">
                        <FaSpotify size={26} className="sm:size-[28px]" />
                    </a>
                    <a href="https://t.me/UZBEKK1NG" target="_blank" rel="noopener noreferrer" className="text-[#29b6f6] hover:drop-shadow-[0_0_6px_#29b6f6] transition">
                        <FaTelegramPlane size={26} className="sm:size-[28px]" />
                    </a>
                    <a href="https://www.freelancer.com/u/K1NGBuild" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:drop-shadow-[0_0_8px_#FFD700] transition">
                        <SiFreelancer size={26} className="sm:size-[28px]" />
                    </a>
                    <a href="https://github.com/King-Build" target="_blank" rel="noopener noreferrer" className="text-[#fff] hover:drop-shadow-[0_0_6px_#fff] transition">
                        <FaGithub size={26} className="sm:size-[28px]" />
                    </a>
                    <a href="https://www.linkedin.com/in/xojiakbar-sharobidinov-699b3337a/" target="_blank" rel="noopener noreferrer" className="text-[#0077B5] hover:drop-shadow-[0_0_6px_#0077B5] transition">
                        <FaLinkedin size={26} className="sm:size-[28px]" />
                    </a>
                </div>

                <h2 className="order-2 sm:order-2 flex-1 text-right sm:text-center text-xs sm:text-base font-semibold tracking-wide my-0 flex items-center justify-end sm:justify-center">All rights reserved &copy; {new Date().getFullYear()}</h2>
            </div>
        </footer>
    );
};

export default Footer;
