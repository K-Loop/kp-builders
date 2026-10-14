import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import IntroScreen from "./components/common/IntroScreen";
import HeroSection from "./components/sections/HeroSection";
import BlueprintsSection from "./components/sections/BlueprintsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ServicesSection from "./components/sections/ServicesSection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import BlueprintModal from "./components/modals/BlueprintModal";
import ProjectModal from "./components/modals/ProjectModal";
import PlanEnquiryModal from "./components/modals/PlanEnquiryModal";
import { ASSET_CONFIG } from "./config/siteConfig";

export default function App() {
  // Intro Screen presentation state
  const [showIntro, setShowIntro] = useState(true);

  // Navigation active state
  const [activeSection, setActiveSection] = useState("home");

  // Blueprint Inspection Modal State
  const [selectedBlueprint, setSelectedBlueprint] = useState(null);

  // Project Lightbox Modal State
  const [selectedProject, setSelectedProject] = useState(null);

  // Plan Enquiry Modal State
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryPlanTitle, setEnquiryPlanTitle] = useState("");

  // Contact / Enquiry Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "Residential Construction",
    plotDimensions: "",
    preferredFacing: "North Facing",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll spy for sticky navigation links
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "blueprints", "projects", "services", "about", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Form Submission with WhatsApp integration
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const textMessage = `*New Project Enquiry — ${ASSET_CONFIG.contact.brandName}*%0A
*Name:* ${formData.name}%0A
*Phone:* ${formData.phone}%0A
*Project Type:* ${formData.projectType}%0A
*Plot Dimensions:* ${formData.plotDimensions || "Not specified"}%0A
*Preferred Facing:* ${formData.preferredFacing}%0A
*Message:* ${formData.message || "I would like to discuss my project."}`;

    setTimeout(() => {
      window.open(
        `https://wa.me/${ASSET_CONFIG.contact.whatsappNumber}?text=${textMessage}`,
        "_blank"
      );
    }, 600);
  };

  // Open Plan Customization Request
  const handleOpenPlanRequest = (plan) => {
    setEnquiryPlanTitle(`${plan.title} (${plan.specs})`);
    setFormData((prev) => ({
      ...prev,
      projectType: "Blueprint & Floor Plans",
      plotDimensions: plan.dimensions,
      preferredFacing: plan.facing,
      message: `I am interested in requesting the blueprint: ${plan.title} (${plan.specs}). Please share customization and pricing details.`,
    }));
    setEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0c0d12] text-gray-200 selection:bg-[#F4C542] selection:text-black overflow-x-hidden font-sans">
      {/* 0. Cinematic Intro Presentation Screen */}
      <AnimatePresence>
        {showIntro && <IntroScreen onEnterSite={() => setShowIntro(false)} />}
      </AnimatePresence>

      {/* 1. Fixed Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onOpenIntro={() => setShowIntro(true)}
      />

      {/* 2. Section 1: Home / Hero */}
      <HeroSection />

      {/* 3. Section 2: Blueprints & Floor Plans (Panel 2) */}
      <BlueprintsSection
        onInspectBlueprint={(plan) => setSelectedBlueprint(plan)}
        onRequestPlan={handleOpenPlanRequest}
      />

      {/* 4. Section 3: Projects / Our Work & Transformation Slider (Panel 3) */}
      <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

      {/* 5. Section 4: Services & Process (Panel 4) */}
      <ServicesSection />

      {/* 6. Section 5: About & Contact (Panel 5) */}
      <section id="about" className="py-24 bg-[#0c0d12] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <AboutSection />
            <ContactSection
              formData={formData}
              setFormData={setFormData}
              formSubmitted={formSubmitted}
              setFormSubmitted={setFormSubmitted}
              handleFormSubmit={handleFormSubmit}
            />
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <Footer />

      {/* 8. Interactive Modals */}
      <BlueprintModal
        blueprint={selectedBlueprint}
        onClose={() => setSelectedBlueprint(null)}
        onRequestPlan={handleOpenPlanRequest}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <PlanEnquiryModal
        isOpen={enquiryModalOpen}
        planTitle={enquiryPlanTitle}
        formData={formData}
        setFormData={setFormData}
        onClose={() => setEnquiryModalOpen(false)}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}
