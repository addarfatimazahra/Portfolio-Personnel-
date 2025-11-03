'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaEnvelope, FaDownload } from 'react-icons/fa';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-[#740b61] text-white py-24 md:py-32 overflow-hidden relative"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6 md:px-16">
        
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left z-10"
        >
          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500 block">
              Bonjour, je suis
            </span>
            <TypeAnimation
              sequence={[
                'Fatima Zahra Addar',
                1000,
                'Développeuse Web',
                1000,
                'Développeuse Full Stack',
                1000,
                'Ingénieure Logiciel',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block"
            />
          </h1>

          <p className="text-[#F2E3E3] text-base sm:text-lg lg:text-xl mb-8 leading-relaxed">
            Développeuse web motivée, passionnée par la création d’applications modernes 
            et interactives. J’aime transformer des idées en expériences numériques 
            élégantes, performantes et faciles à utiliser.
          </p>

         
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <motion.a
              href="mailto:addarfatimmazaha2017@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white text-[#740b61] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-pink-100 transition"
            >
              <FaEnvelope className="text-[#740b61]" />
              Me contacter
            </motion.a>

            <motion.a
              href="/my-app/public/image/Addar Fatima Zahra 2025 stage.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-white hover:text-[#740b61] transition"
            >
              <FaDownload />
              Télécharger CV
            </motion.a>
          </div>
        </motion.div>

        
        <div className="flex justify-center items-start">
          <div className="border-4 border-white rounded-xl overflow-hidden shadow-lg max-w-xs w-full md:sticky md:top-32">
            <Image
              src="/image/image.png"
              alt="Fatima Zahra Addar"
              width={350}
              height={350}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
