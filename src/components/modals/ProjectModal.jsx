import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiArrowRight } from "react-icons/fi";
import SafeImage from "../common/SafeImage";
import ConstructionPhotoSvg from "../common/ConstructionPhotoSvg";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#12141c] text-white w-full max-w-3xl rounded-sm overflow-hidden border border-white/10 shadow-2xl"
        >
          <div className="relative h-80 sm:h-96 w-full">
            <SafeImage
              src={project.src}
              alt={project.title}
              className="w-full h-full"
              imgClassName="w-full h-full object-cover"
              fallback={<ConstructionPhotoSvg phase={project.tag} />}
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/70 hover:bg-[#F4C542] hover:text-black text-white p-2 rounded-full transition-colors"
            >
              <FiX size={18} />
            </button>
          </div>

          <div className="p-6">
            <span className="text-xs font-mono text-[#F4C542] uppercase tracking-wider">
              {project.tag}
            </span>
            <h3 className="text-xl font-bold uppercase mt-1">{project.title}</h3>
            <p className="text-xs text-gray-400 mt-1">{project.caption}</p>
            <p className="text-sm text-gray-300 leading-relaxed mt-4">
              {project.description}
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 bg-[#F4C542] text-black font-bold text-xs uppercase px-5 py-2.5 rounded-sm"
              >
                <span>Discuss Similar Project</span>
                <FiArrowRight />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
