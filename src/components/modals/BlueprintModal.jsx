import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCheck, FiArrowRight } from "react-icons/fi";
import SafeImage from "../common/SafeImage";
import ArchitecturalBlueprintSvg from "../common/ArchitecturalBlueprintSvg";

export default function BlueprintModal({ blueprint, onClose, onRequestPlan }) {
  if (!blueprint) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#fbfbfd] text-gray-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl flex flex-col md:flex-row"
        >
          {/* Sheet Visual */}
          <div className="w-full md:w-3/5 bg-[#f8fafc] p-4 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200">
            <div className="w-full h-[380px] sm:h-[480px]">
              <SafeImage
                src={blueprint.src}
                alt={blueprint.title}
                className="w-full h-full flex items-center justify-center bg-white"
                imgClassName="object-contain p-2 max-h-full"
                fallback={<ArchitecturalBlueprintSvg type={blueprint.type} />}
              />
            </div>
          </div>

          {/* Sheet Specifications */}
          <div className="w-full md:w-2/5 p-6 flex flex-col justify-between bg-white">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#b88914] uppercase">
                  {blueprint.specs}
                </span>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-black p-1"
                >
                  <FiX size={20} />
                </button>
              </div>

              <h3 className="text-xl font-extrabold text-gray-900 uppercase">
                {blueprint.title}
              </h3>
              <p className="text-xs text-gray-500 font-mono mt-1">
                DIMENSIONS: {blueprint.dimensions} | {blueprint.builtUp}
              </p>

              <p className="text-xs text-gray-700 leading-relaxed mt-4">
                {blueprint.description}
              </p>

              <div className="mt-6">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                  Key Architectural Features
                </h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  {blueprint.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FiCheck className="text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200 space-y-2">
              <button
                onClick={() => {
                  onRequestPlan(blueprint);
                  onClose();
                }}
                className="w-full bg-[#F4C542] hover:bg-[#e2b535] text-black font-bold text-xs uppercase tracking-wider py-3 rounded-sm flex items-center justify-center gap-2"
              >
                <span>Request Customization</span>
                <FiArrowRight />
              </button>
              <button
                onClick={onClose}
                className="w-full border border-gray-300 text-gray-700 font-semibold text-xs py-2 rounded-sm"
              >
                Close Sheet
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
