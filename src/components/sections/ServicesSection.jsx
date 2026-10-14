import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiHome } from "react-icons/fi";
import { FaDraftingCompass, FaRulerCombined, FaHardHat } from "react-icons/fa";
import { HiOutlineBuildingOffice2, HiOutlineSparkles } from "react-icons/hi2";
import { SERVICES_DATA, PROCESS_STEPS } from "../../config/siteConfig";

export default function ServicesSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "FaDraftingCompass":
        return <FaDraftingCompass className="text-2xl text-[#F4C542]" />;
      case "FaRulerCombined":
        return <FaRulerCombined className="text-2xl text-[#F4C542]" />;
      case "HiOutlineBuildingOffice2":
        return <HiOutlineBuildingOffice2 className="text-2xl text-[#F4C542]" />;
      case "FiHome":
        return <FiHome className="text-2xl text-[#F4C542]" />;
      case "FaHardHat":
        return <FaHardHat className="text-2xl text-[#F4C542]" />;
      case "HiOutlineSparkles":
        return <HiOutlineSparkles className="text-2xl text-[#F4C542]" />;
      default:
        return <FiHome className="text-2xl text-[#F4C542]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#101218] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#F4C542] uppercase block mb-2">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
              COMPLETE SOLUTIONS <br />
              <span className="text-[#F4C542]">FOR YOUR DREAM SPACE</span>
            </h2>
          </div>
          <div className="md:max-w-md">
            <p className="text-sm text-gray-300 leading-relaxed">
              From planning to handover, we provide end-to-end construction and design services
              with a focus on quality, functionality and timely execution.
            </p>
          </div>
        </div>

        {/* Six Compact Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-8 rounded-sm bg-[#161822] border border-white/5 hover:border-[#F4C542]/40 transition-all shadow-md group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-sm bg-[#0c0d12] border border-[#F4C542]/30 flex items-center justify-center mb-6 group-hover:bg-[#F4C542] group-hover:text-black transition-colors">
                  {getIcon(service.iconName)}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide uppercase mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-bold text-[#F4C542] uppercase tracking-wider">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 hover:underline underline-offset-4"
                >
                  <span>Enquire Service</span>
                  <FiArrowRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#F4C542] uppercase block mb-1">
              OUR PROCESS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
              A SIMPLE &amp; TRANSPARENT PROCESS
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.num} className="relative flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#0c0d12] border-2 border-[#F4C542] text-[#F4C542] font-mono font-extrabold text-base flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#F4C542]/10">
                    {step.num}
                  </div>
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block flex-1 h-[2px] bg-gradient-to-r from-[#F4C542] to-[#F4C542]/20" />
                  )}
                </div>

                <h4 className="text-base font-bold text-white tracking-wide uppercase mb-2">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
