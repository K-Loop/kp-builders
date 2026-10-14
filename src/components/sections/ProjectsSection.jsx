import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import SafeImage from "../common/SafeImage";
import ConstructionPhotoSvg from "../common/ConstructionPhotoSvg";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { PROJECTS_DATA } from "../../config/siteConfig";

export default function ProjectsSection({ onSelectProject }) {
  return (
    <section id="projects" className="py-24 bg-[#0c0d12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#F4C542] uppercase block mb-2">
              OUR WORK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
              FROM FOUNDATION <br />
              <span className="text-white">TO FINE DETAILS</span>
            </h2>
          </div>

          <div className="md:max-w-md flex flex-col md:items-end text-left md:text-right">
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              A glimpse of our construction journey — real projects, real progress, real spaces.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-[#F4C542] text-[#F4C542] hover:bg-[#F4C542] hover:text-black text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all"
            >
              <span>View More Projects</span>
              <FiArrowRight />
            </a>
          </div>
        </div>

        {/* Three-Column Desktop Image Grid matching Panel 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              onClick={() => onSelectProject(project)}
              className="group relative h-80 rounded-sm overflow-hidden border border-white/10 bg-[#161820] cursor-pointer shadow-lg"
            >
              <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                <SafeImage
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover"
                  fallback={<ConstructionPhotoSvg phase={project.tag} />}
                />
              </div>

              {/* Translucent Glass Strip at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/85 backdrop-blur-md border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide uppercase">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">{project.caption}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#F4C542] group-hover:text-black text-white flex items-center justify-center transition-colors">
                  <FiArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Before & After Transformation Slider */}
        <BeforeAfterSlider />
      </div>
    </section>
  );
}
