'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projectsData = [
  {
  name: 'Plateforme e-commerce sain et sans gluten',
  description: "Application web complète pour vendre des produits bio et sans gluten. Elle inclut l'authentification sécurisée des utilisateurs, la gestion du panier, la commande en ligne, un tableau de bord admin pour gérer les produits et les commandes, la fonctionnalité logout, et un ajout facile des produits au panier. L'application est entièrement responsive pour tous les appareils.",
  features: [
    'Authentification sécurisée',
    'Panier et gestion des commandes',
    'Paiement en ligne et sur place',
    'Dashboard admin',
    'Ajout au panier',
    'Logout',
    'Responsive design'
  ],
  technologies: ['React', 'Next.js', 'Express', 'MongoDB', 'Tailwind CSS'],
  image: '/image/project 1.png',
},

 {
  name: 'Portfolio Personnel',
  description: "Site portfolio moderne et interactif permettant de présenter mes projets, compétences et expériences. L'application est entièrement responsive et inclut des animations fluides avec Framer Motion. Elle permet aux visiteurs de consulter mes projets détaillés, d'accéder à mes profils GitHub et LinkedIn via des liens directs, de me contacter facilement via un formulaire intégré, et de télécharger mon CV en un clic. L'interface est intuitive et élégante, adaptée à tous les appareils.",
  features: [
    'Responsive design',
    'Animations avec Framer Motion',
    'Formulaire de contact intégré',
    'Dark/Light Mode',
    'Liens vers GitHub et LinkedIn',
    'Téléchargement du CV'
  ],
  technologies: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS'],
  image: '/image/project 2 .png',
},

 
];

const ProjectsSection = () => {
  return (
    <section id="project" className="py-16 bg-[#740b61] text-white">
      <div className="container mx-auto px-6 md:px-16 text-center">
     
        <h2 className="text-2xl md:text-6xl font-extrabold mb-12 inline-block relative">
          Projets
          <span className="absolute left-0 bottom-[-10px] w-full h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></span>
        </h2>

        
        <div className="grid grid-cols-1 gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-[#2b0036]/90 rounded-xl p-6 flex flex-col md:flex-row items-center shadow-lg hover:scale-105 transition-transform"
            >
              
              <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0 text-left">
                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                <p className="mb-3">{project.description}</p>
                <p className="font-semibold mb-2">Fonctionnalités :</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.features.map((feature, i) => (
                    <span
                      key={i}
                      className="bg-white/20 px-3 py-1 rounded-full text-sm text-white hover:bg-pink-500 hover:text-white transition"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <p className="font-semibold mb-2">Technologies :</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/20 px-3 py-1 rounded-full text-sm text-white hover:bg-purple-500 hover:text-white transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

             
              <div className="md:w-1/2 flex justify-center">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
