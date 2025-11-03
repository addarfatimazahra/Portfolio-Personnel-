'use client';
import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const formations = [
  {
    diplome: "Bootcamp Développement Logiciel",
    ecole: "GomyCode",
    annee: "juin 2025 - Octobre 2025",
    localisation: "Casablanca",
  },
  {
    diplome: "Master universitaire Génie Logiciel et Applications Web",
    ecole: "Faculté des sciences et technique Settat",
    annee: "2022 - 2024",
    localisation: "Settat",
  },
  {
    diplome: "Licence fondamentale Sciences de la matière - Physique parcours Mécanique énergétique",
    ecole: "Faculté des sciences Ben M'sik",
    annee: "2019 - 2022",
    localisation: "Casablanca",
  },
  {
    diplome: "Baccalauréat Science Physique Chimie",
    ecole: "Group scolaire Nour El Yakin",
    annee: "2019",
    localisation: "Casablanca",
  },
];

const FormationSection = () => {
  return (
    <section id="formation" className="py-16 bg-[#740b61] text-white">
      <div className="container mx-auto px-6 md:px-16 text-center">
        
       
        <h2 className="text-2xl md:text-5xl font-extrabold mb-12 inline-block relative">
          Formation
          <span className="absolute left-0 bottom-[-8px] w-full h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></span>
        </h2>

        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {formations.map((f, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#2b0036]/90 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform"
            >
             
              <FaGraduationCap className="text-pink-500 text-4xl mb-4" />

             
              <h3 className="text-xl font-bold mb-2 text-center">{f.diplome}</h3>

             
              <p className="text-sm mb-2 text-center">{f.ecole}</p>

              
              <p className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                <FaRegCalendarAlt className="text-pink-500" /> {f.annee}
              </p>

              
              <p className="flex items-center gap-2 text-sm text-gray-300">
                <FaMapMarkerAlt className="text-pink-500" /> {f.localisation}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormationSection;
