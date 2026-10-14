import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiCompass,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
  FiArrowRight,
} from "react-icons/fi";
import SafeImage from "../common/SafeImage";
import ArchitecturalBlueprintSvg from "../common/ArchitecturalBlueprintSvg";
import { BLUEPRINTS_DATA } from "../../config/siteConfig";

export default function BlueprintsSection({ onInspectBlueprint, onRequestPlan }) {
  const [selectedCategory, setSelectedCategory] = useState("All Plans");
  const blueprintScrollRef = useRef(null);

  const categories = [
    "All Plans",
    "House Plans",
    "Floor Plans",
    "Facing & Vastu",
    "2BHK / 3BHK",
    "Elevation",
    "Site Layout",
  ];

  const filteredBlueprints = BLUEPRINTS_DATA.filter((item) => {
    if (selectedCategory === "All Plans") return true;
    if (selectedCategory === "House Plans")
      return item.category === "House Plans" || item.category === "Floor Plans";
    if (selectedCategory === "Floor Plans")
      return item.category === "Floor Plans" || item.type === "ground";
    if (selectedCategory === "Facing & Vastu")
      return item.category === "Facing & Vastu" || item.type === "north";
    if (selectedCategory === "2BHK / 3BHK")
      return item.specs.includes("2BHK") || item.specs.includes("3BHK");
    if (selectedCategory === "Site Layout") return item.category === "Site Layout";
    return true;
  });

  const scrollBlueprint = (direction) => {
    if (blueprintScrollRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      blueprintScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="blueprints" className="py-24 bg-[#101218] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#F4C542] uppercase block mb-2">
              ARCHITECTURAL PLANNING
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
              PLANS THAT START <br />
              <span className="text-[#F4C542]">WITH PRECISION</span>
            </h2>
          </div>

          {/* Right side description & feature checklist */}
          <div className="lg:max-w-md">
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Well designed spaces for better living. Custom floor plans, facing &amp; vastu
              planning, and detailed architectural drawings.
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {[
                  "House Plans",
                  "Floor Plans",
                  "Facing & Vastu",
                  "Custom Planning",
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs font-medium text-gray-200">
                    <FiCheck className="text-[#F4C542] text-sm flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="w-12 h-12 rounded-sm border border-[#F4C542]/40 bg-[#F4C542]/5 flex items-center justify-center text-[#F4C542] flex-shrink-0">
                <FiCompass className="text-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Dark Horizontal Category Navigation Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8 overflow-x-auto no-scrollbar gap-2">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all ${
                    isActive
                      ? "bg-[#F4C542] text-black shadow-md shadow-[#F4C542]/20"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Gallery Navigation Controls */}
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => scrollBlueprint("left")}
              className="w-8 h-8 rounded-sm bg-white/5 hover:bg-[#F4C542] hover:text-black text-gray-300 flex items-center justify-center transition-colors"
              aria-label="Previous Blueprint"
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollBlueprint("right")}
              className="w-8 h-8 rounded-sm bg-white/5 hover:bg-[#F4C542] hover:text-black text-gray-300 flex items-center justify-center transition-colors"
              aria-label="Next Blueprint"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Large Off-White Blueprint Cards in Horizontal Scrolling Gallery */}
        <div
          ref={blueprintScrollRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {filteredBlueprints.map((plan) => (
            <motion.div
              key={plan.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="snap-start flex-shrink-0 w-[300px] sm:w-[340px] md:w-[370px] bg-[#fbfbfd] text-gray-900 rounded-sm shadow-2xl border border-gray-300 flex flex-col group overflow-hidden"
            >
              {/* Blueprint Drawing Sheet Area */}
              <div
                onClick={() => onInspectBlueprint(plan)}
                className="relative h-[430px] w-full bg-[#f8fafc] cursor-pointer overflow-hidden p-2 border-b border-gray-200"
              >
                <SafeImage
                  src={plan.src}
                  alt={plan.title}
                  className="w-full h-full flex items-center justify-center bg-white"
                  imgClassName="object-contain p-2 max-h-full"
                  fallback={<ArchitecturalBlueprintSvg type={plan.type} />}
                />

                {/* Hover Overlay with Inspect Action */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 bg-[#F4C542] text-black font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-sm shadow-lg">
                    <FiMaximize2 /> Inspect Sheet
                  </span>
                </div>
              </div>

              {/* Card Information Footer */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-gray-600 mb-1">
                    <span>DIM: {plan.dimensions}</span>
                    <span className="text-emerald-700 font-semibold">{plan.builtUp}</span>
                  </div>
                  <h3 className="text-base font-extrabold text-gray-900 tracking-tight uppercase">
                    {plan.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#b88914] uppercase tracking-wider mt-0.5">
                    {plan.specs}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onInspectBlueprint(plan)}
                    className="text-xs font-bold text-gray-700 hover:text-black underline underline-offset-4"
                  >
                    Specifications
                  </button>
                  <button
                    onClick={() => onRequestPlan(plan)}
                    className="inline-flex items-center gap-1.5 bg-[#0c0d12] hover:bg-[#F4C542] text-white hover:text-black text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-sm transition-colors"
                  >
                    <span>Request Plan</span>
                    <FiArrowRight size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 text-center sm:hidden">
          <span className="text-xs text-gray-400 font-mono">← Swipe to explore all blueprint sheets →</span>
        </div>
      </div>
    </section>
  );
}
