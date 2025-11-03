'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-[#2b0036] text-white">
            <div className="container mx-auto px-6 md:px-16">
                
                <h2 className="text-2xl md:text-6xl font-extrabold mb-12 text-center relative inline-block">
                    Contact
                    <span className="absolute left-0 bottom-[-10px] w-full h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></span>
                </h2>

               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                   
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <p className="text-lg leading-relaxed text-gray-200">
                            Actuellement à la recherche d’un <span className="text-pink-400 font-semibold">stage</span>
                            en développement web afin de mettre en pratique mes compétences et
                            d’approfondir mes connaissances dans un environnement professionnel.
                        </p>

                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-pink-500 text-xl" />
                            <a href="mailto:addarfatimazahra2017@gmail.com" className="hover:text-pink-400">
                                addarfatimazahra2017@gmail.com
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaPhoneAlt className="text-pink-500 text-xl" />
                            <a href="tel:0600200273" className="hover:text-pink-400">
                                0600200273
                            </a>
                        </div>


                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-pink-500 text-xl" />
                            <span>Disponible à Casablanca</span>
                        </div>
                    </motion.div>

                    
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center justify-center space-y-6"
                    >
                        <h3 className="text-2xl font-semibold mb-4">Réseaux professionnels</h3>

                        <div className="flex gap-8">
                           
                            <a
                                href="https://github.com/addarfatimazahra"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center hover:text-pink-400 transition"
                            >
                                <FaGithub className="text-5xl mb-2" />
                                <span>GitHub</span>
                            </a>

                            
                            <a
                                href="https://www.linkedin.com/in/addar-fatima-zahra-644098204/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center hover:text-pink-400 transition"
                            >
                                <FaLinkedin className="text-5xl mb-2 text-blue-400" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
