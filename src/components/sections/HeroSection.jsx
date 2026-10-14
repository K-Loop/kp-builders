import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiFileText, FiHome } from "react-icons/fi";
import { FaHardHat, FaRulerCombined } from "react-icons/fa";
import SafeImage from "../common/SafeImage";
import { ASSET_CONFIG } from "../../config/siteConfig";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center bg-[#0c0d12]">
      {/* Right Side Construction Background Image with Blueprint Wireframe Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[70%] h-full opacity-90 lg:opacity-100 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={ASSET_CONFIG.images.hero}
            style={{ filter: "brightness(1.22) contrast(1.08)" }}
            className="w-full h-full object-cover"
          >
            <source src={ASSET_CONFIG.videos?.hero || "/video/KP_BUILDERS_BRAND_INTRO_20261014180122.mp4"} type="video/mp4" />
            <source src={ASSET_CONFIG.videos?.heroAlt || "/video/hero-video.mp4"} type="video/mp4" />
            <img
              src={ASSET_CONFIG.images.hero}
              alt="KP Builders Residential Construction"
              className="w-full h-full object-cover"
            />
          </video>
        </div>
        {/* Softened gradient overlay protecting text readability while keeping the video bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d12] via-[#0c0d12]/80 lg:via-[#0c0d12]/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4 text-[11px] sm:text-xs font-mono font-bold tracking-[0.22em] text-[#a0a5b5] uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[#F4C542]" />
            <span>RESIDENTIAL | CONSTRUCTION | PLANNING | SUPERVISION</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight uppercase leading-[1.05]"
          >
            BUILDING <br />
            YOUR VISION, <br />
            <span className="text-[#F4C542] drop-shadow-[0_2px_15px_rgba(244,197,66,0.3)]">
              BLUEPRINT <br />
              BY BLUEPRINT
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 space-y-2"
          >
            <p className="text-sm sm:text-base font-semibold text-gray-200 tracking-wide">
              Licensed Engineering • Construction • Planning • Supervision
            </p>
            <p className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed max-w-xl">
              From detailed floor plans to quality construction, we turn your ideas into
              well-planned living spaces.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#F4C542] hover:bg-[#e2b535] text-black font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-sm shadow-xl shadow-[#F4C542]/15 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Our Work</span>
              <FiArrowRight className="text-base" />
            </a>

            <a
              href="#blueprints"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-[#F4C542] text-white hover:text-[#F4C542] font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all bg-black/40 backdrop-blur-sm"
            >
              <FiFileText className="text-base" />
              <span>View Floor Plans</span>
            </a>
          </motion.div>
        </div>

        {/* Three Compact Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl"
        >
          <div className="flex items-center gap-4 p-3 rounded bg-white/[0.02] border border-white/5 hover:border-[#F4C542]/30 transition-all">
            <div className="w-11 h-11 rounded-sm bg-[#F4C542]/10 border border-[#F4C542]/30 flex items-center justify-center flex-shrink-0 text-[#F4C542]">
              <FiHome className="text-xl" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-wide">
                Residential Construction
              </h4>
              <p className="text-xs text-gray-400 mt-0.5">Foundations to turnkey villas</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 rounded bg-white/[0.02] border border-white/5 hover:border-[#F4C542]/30 transition-all">
            <div className="w-11 h-11 rounded-sm bg-[#F4C542]/10 border border-[#F4C542]/30 flex items-center justify-center flex-shrink-0 text-[#F4C542]">
              <FaRulerCombined className="text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-wide">
                Custom Floor Plans
              </h4>
              <p className="text-xs text-gray-400 mt-0.5">Vastu &amp; facing precision</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 rounded bg-white/[0.02] border border-white/5 hover:border-[#F4C542]/30 transition-all">
            <div className="w-11 h-11 rounded-sm bg-[#F4C542]/10 border border-[#F4C542]/30 flex items-center justify-center flex-shrink-0 text-[#F4C542]">
              <FaHardHat className="text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-wide">
                End-to-End Project Support
              </h4>
              <p className="text-xs text-gray-400 mt-0.5">Licensed site supervision</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
