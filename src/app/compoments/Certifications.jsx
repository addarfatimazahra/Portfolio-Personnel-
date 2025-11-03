'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const certificationsData = [
  {
    title: 'Java Spring Boot',
    description:
      'Certification sur le développement d’applications web avec Java et Spring Boot, incluant la création d’API REST et les bonnes pratiques de développement.',
    issuer: 'Ajicodew Academy',
    image: '/image/certificate_FQNEMX.png',
  },
  {
    title: 'Full Stack Developer',
    description:
      'Programme complet couvrant le développement Frontend et Backend, la gestion de bases de données et le déploiement d’applications web modernes.',
    issuer: 'GomyCode',
    image: '/image/CER1.png',
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-[#740b61] text-white">
      <div className="container mx-auto px-6 md:px-16 text-center">
      
        <h2 className="text-2xl md:text-6xl font-extrabold mb-16 inline-block relative">
          Certifications
          <span className="absolute left-0 bottom-[-10px] w-full h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></span>
        </h2>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#2b0036]/90 rounded-2xl p-6 flex flex-col items-center shadow-2xl hover:scale-105 transition-transform border border-pink-600/30"
            >
             
              <div className="w-full max-w-[450px] h-[280px] mb-6 relative rounded-lg overflow-hidden shadow-lg shadow-pink-500/30">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>

            
              <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-300 mb-3 px-2 max-w-md">{cert.description}</p>
              <span className="text-sm font-semibold text-pink-400">{cert.issuer}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
