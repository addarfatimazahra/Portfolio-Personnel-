'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navLinks = [
  { title: "Accueil", path: "hero" },
  { title: "About", path: "About" },
  { title: "Formation", path: "formation" },
  { title: "Compétences", path: "skills" },
  { title: "Projects", path: "project" },
  { title: "Contact", path: "contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); 
    }
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-[#740b61] shadow-lg shadow-pink-900/40 backdrop-blur-sm"
    >
      <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-4">
       
        <h1
          onClick={() => handleScroll('hero')}
          className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-300 text-transparent bg-clip-text cursor-pointer drop-shadow-[0_0_10px_rgba(255,192,203,0.6)]"
        >
          Addar Fatima Zahra
        </h1>

      
        <button
          onClick={toggleMenu}
          className="md:hidden text-white transition hover:scale-110"
        >
          {isOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>

      
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleScroll(link.path)}
                  className="text-white hover:text-pink-200 font-medium transition duration-200"
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

    
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#8a2579]/95 px-6 py-6"
        >
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleScroll(link.path)}
                  className="text-white hover:text-pink-200 text-lg font-medium"
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavBar;
