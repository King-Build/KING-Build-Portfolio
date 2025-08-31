import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_hsqiee8",
                "template_4ir3sbs",
                form.current,
                "zmdbVAhRJFUXTqtXv"
            ).then(
                () => {
                    alert("Xabaringiz muvaffaqiyatli yuborildi!");
                    form.current.reset();
                },
                () => {
                    alert("Xatolik yuz berdi, qayta urinib ko‘ring.");
                }
            );
    };
    return (
        <div className="min-h-[82vh] flex items-center justify-center bg-slate-950 px-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl w-full bg-slate-800 shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-200 mb-3">Contact Me</h2>
                    <p className="text-center text-sm sm:text-base text-gray-300 mb-6">Let's build something great together!</p>
                </div>
                <div className="flex justify-center flex-wrap gap-5 sm:gap-8 mb-8">
                    <a href="https://t.me/UZBEKK1NG" target="_blank" rel="noopener noreferrer" className="text-[#29b6f6]">
                        <FaTelegramPlane size={26} className="sm:size-[30px]" />
                    </a>
                    <a href="https://github.com/King-Build" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaGithub size={26} className="sm:size-[30px]" />
                    </a>
                    <a href="https://www.linkedin.com/in/xojiakbar-sharobidinov-699b3337a/" target="_blank" rel="noopener noreferrer" className="text-[#0077B5]">
                        <FaLinkedin size={26} className="sm:size-[30px]" />
                    </a>
                </div>
                <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-200">Name</label>
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Enter your name"
                            required
                            className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-600 bg-white text-black focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-200">Email</label>
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Enter your email"
                            required
                            className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-600 bg-white text-black focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div className="col-span-1 sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-200">Message</label>
                        <textarea
                            rows="4"
                            name="message"
                            placeholder="Write your message..."
                            required
                            className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-600 bg-white text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
                    </div>
                    <div className="col-span-1 sm:col-span-2">
                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 cursor-pointer transition">Send Message
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;
