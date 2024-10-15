import React, { useState } from 'react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa'; // Importamos el ícono de 'play'

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">About
                <span className="text-neutral-500"> Me</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/2 lg:p-8">
                    <div className="relative flex items-center justify-center cursor-pointer" onClick={openModal}>
                        <img className="rounded-2xl" src={aboutImg} alt="about" />
                        {/* Contenedor para el ícono */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl">
                            <FaPlay className="text-white text-4xl" /> {/* Ícono de play */}
                        </div>
                    </div>
                </motion.div>
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                    <div className="flex flex-col justify-center lg:justify-start">
                        <h3 className="my-2 max-w-xl py-2 text-neutral-300 text-2xl">Languages Spoken:</h3>
                        <div className="flex flex-wrap">
                            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm lg:text-lg font-medium text-purple-800 lg:px-4 lg:py-2">Spanish</span>
                            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm lg:text-lg font-medium text-purple-800 lg:px-4 lg:py-2">English</span>
                            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm lg:text-lg font-medium text-purple-800 lg:px-4 lg:py-2">German</span>
                            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm lg:text-lg font-medium text-purple-800 lg:px-4 lg:py-2">Portuguese</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={handleOutsideClick}
                >
                    <div 
                        className="bg-white p-8 rounded-lg relative max-w-3xl w-full"
                        onClick={(e) => e.stopPropagation()} 
                    >
                        <button 
                            className="absolute top-2 right-2 text-black" 
                            onClick={closeModal}
                        >
                            ✖
                        </button>
                        <div className="relative pb-[56.25%] h-0"> {/* 16:9 Aspect Ratio */}
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="/VideoCV.mp4"
                                title="Personal Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default About;
