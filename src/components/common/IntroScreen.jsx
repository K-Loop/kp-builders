import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiCompass, FiShield, FiCheck } from "react-icons/fi";
import { FaHardHat } from "react-icons/fa";
import { ASSET_CONFIG } from "../../config/siteConfig";

export default function IntroScreen({ onEnterSite }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Calibrating site grids & structural datums...");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const next = Math.min(100, prev + 2.5);
        if (next >= 25 && next < 50) {
          setStatusText("Compiling custom 2D/3D CAD blueprint sheets...");
        } else if (next >= 50 && next < 80) {
          setStatusText("Verifying Vastu coordinates & solar orientation...");
        } else if (next >= 80 && next < 100) {
          setStatusText("Finalizing residential construction portfolio...");
        } else if (next >= 100) {
          setStatusText("Welcome to KP Builders & Designer.");
        }
        return next;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  // Automatically transition to the main website once intro loading completes
  useEffect(() => {
    if (progress >= 100) {
      const exitTimer = setTimeout(() => {
        onEnterSite();
      }, 700);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, onEnterSite]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#07080b] text-white flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden"
    >
      {/* Background Architectural Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F4C542 1px, transparent 1px), linear-gradient(to bottom, #F4C542 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial Gold Vignette Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F4C542]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header Row */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono tracking-[0.2em] text-gray-400 uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F4C542] animate-ping" />
          <span className="text-gray-300">SYSTEM: ARCHITECTURAL PORTAL</span>
        </div>
        <button
          onClick={onEnterSite}
          className="text-gray-400 hover:text-[#F4C542] transition-colors flex items-center gap-1.5 underline underline-offset-4 cursor-pointer"
        >
          <span>Skip Intro</span>
          <FiArrowRight size={14} />
        </button>
      </div>

      {/* Centerpiece: Logo and Presentation */}
      <div className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center my-auto">
        {/* Animated Architectural Hexagon Container with Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mb-8 group"
        >
          {/* Subtle Outer Rotating/Glowing Ring */}
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-[#F4C542]/20 via-transparent to-[#F4C542]/20 blur-md" />

          {/* Logo Frame */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-[#0c0d12] border border-[#F4C542]/40 shadow-2xl p-4 flex items-center justify-center relative overflow-hidden">
            <img
              src={ASSET_CONFIG.images.logo}
              alt="KP BUILDERS & DESIGNER Official Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(244,197,66,0.35)]"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#F4C542] uppercase block mb-2">
            LICENSED ENGINEERING &amp; ARCHITECTURAL DESIGN
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight font-heading">
            KP BUILDERS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C542] via-[#ffe082] to-[#D9A82E]">
              &amp; DESIGNER
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 tracking-wide mt-3 max-w-md mx-auto">
            Building Your Vision, Blueprint By Blueprint. From custom Vastu floor plans to turnkey
            structural execution.
          </p>
        </motion.div>

        {/* Dynamic Architectural Engineering Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full max-w-sm mt-8 space-y-2"
        >
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-gray-400 truncate max-w-[260px]">{statusText}</span>
            <span className="text-[#F4C542] font-bold">{progress}%</span>
          </div>

          {/* Progress Bar with Gold Highlight */}
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-[#d9a82e] to-[#F4C542]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Enter Site Button (Enabled once loaded or ready) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8"
        >
          <button
            onClick={onEnterSite}
            className="inline-flex items-center gap-3 bg-[#F4C542] hover:bg-[#e2b535] text-black font-extrabold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded-sm shadow-xl shadow-[#F4C542]/20 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Enter Experience</span>
            <FiArrowRight className="text-base" />
          </button>
        </motion.div>
      </div>

      {/* Bottom Footer Details */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-gray-500 gap-2 border-t border-white/5 pt-4">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <FiShield className="text-[#F4C542]" /> 100% Licensed Civil Engineering
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <FiCompass className="text-[#F4C542]" /> Vastu Planning
          </span>
        </div>
        <p>© 2026 KP BUILDERS &amp; DESIGNER. ALL RIGHTS RESERVED.</p>
      </div>
    </motion.div>
  );
}
