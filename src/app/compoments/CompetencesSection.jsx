'use client';
import React from 'react';
import { FaCode, FaDatabase, FaTools, FaLaptopCode, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

const skillsData = [
  {
    title: 'Langages',
    icon: <FaCode className="text-white mr-2" />,
    items: ['HTML', 'CSS', 'JavaScript', 'Java', 'C++'],
  },
  {
    title: 'Frameworks',
    icon: <FaLaptopCode className="text-white mr-2" />,
    items: ['React', 'Next.js', 'Node.js', 'Express', 'Spring'],
  },
  {
    title: 'Bases de données',
    icon: <FaDatabase className="text-white mr-2" />,
    items: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Outils de développement',
    icon: <FaTools className="text-white mr-2" />,
    items: ['Git', 'VS Code', 'Postman', 'Trello', 'GitHub'],
  },
  {
    title: 'Soft Skills',
    icon: <FaLightbulb className="text-white mr-2" />,
    items: [
      'Adaptabilité',
      'Esprit d’équipe',
      'Communication',
      'Gestion du temps',
      'Rigueur',
      'Créativité',
      'Autonomie',
      'Ponctualité',
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6 md:px-16 text-center">
       
        <h1 className="text-2xl md:text-6xl font-extrabold mb-12 inline-block relative text-white">
          Compétences
          <span className="absolute left-0 bottom-[-10px] w-full h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></span>
        </h1>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="rounded-xl p-5 flex flex-col items-center justify-start shadow-lg
                         bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500"
            >
              
              <h3 className="text-xl font-bold flex items-center mb-3 text-white text-center">
                {skill.icon} {skill.title}
              </h3>

              
              <div className={`flex flex-wrap gap-2 justify-center ${skill.title === 'Soft Skills' ? 'grid grid-cols-2 gap-2' : 'flex flex-wrap gap-2 justify-center'}`}>
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="bg-white/20 text-white px-3 py-1 rounded-full text-sm hover:bg-pink-100 hover:text-purple-800 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
