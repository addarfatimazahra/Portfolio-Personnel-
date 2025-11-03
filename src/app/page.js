import Image from "next/image";
import HeroSection from "./compoments/HeroSection";
import NavBar from "./compoments/NavBar";
import AboutSection from "./compoments/AboutSection";
import FormationSection from "./compoments/FormationSection";
import SkillsSection from "./compoments/CompetencesSection";
import ProjectsSection from "./compoments/Project Section";
import CertificationsSection from "./compoments/Certifications";
import ContactSection from "./compoments/Contact";
export default function Home() {
  return (
    <main className=" flex min-h-screen  flex-col bg-[#740b61]  ">
      <NavBar/>
       <div className="container mx-auto  px-12 m-6   py-4">
        <HeroSection/>
        <AboutSection/>
        <FormationSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <CertificationsSection/>
        <ContactSection/>
        



       </div>
         
     
    </main>
  );
}
