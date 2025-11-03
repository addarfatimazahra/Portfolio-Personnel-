'use client';
import React from 'react';

const AboutSection = () => {
  return (
    <section id="About"  className="py-16">
      <div className="container mx-auto px-6 md:px-16 text-center">

      
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white inline-block relative">
          A Propos De Moi
        
          <span className="absolute left-0 bottom-[-8px] w-full h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></span>
        </h2>

        
        <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed text-justify max-w-3xl mx-auto mt-8">
          Développeuse web passionnée et motivée, je maîtrise à la fois le développement front-end et back-end.
          Je crée des interfaces utilisateur modernes et intuitives avec HTML, CSS, JavaScript et React,
          tout en développant des fonctionnalités robustes côté serveur grâce à Node.js , Express  et aussi java / Spring boot.
          Curieuse et proactive, je m’adapte rapidement aux projets et aux équipes, et je suis toujours
          déterminée à livrer un travail performant, élégant et facile à maintenir. Actuellement, je cherche un
          stage ou une opportunité pour mettre mes compétences en pratique et contribuer à des projets ambitieux.
        </p>


      </div>
    </section>
  );
};

export default AboutSection;
