import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiMenu, FiX, FiPlay } from "react-icons/fi";
import { ASSET_CONFIG } from "../../config/siteConfig";

export default function Navbar({ activeSection, onOpenIntro }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Blueprints", href: "#blueprints" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c0d12]/95 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-11 h-11 flex-shrink-0 relative flex items-center justify-center rounded overflow-hidden p-1 bg-black/40 border border-[#F4C542]/30">
            <img
              src={ASSET_CONFIG.images.logo}
              alt="KP BUILDERS & DESIGNER Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(244,197,66,0.3)]"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-white text-base tracking-wider uppercase leading-none">
              KP BUILDERS
            </span>
            <span className="text-[10px] tracking-[0.25em] font-semibold text-[#F4C542] uppercase mt-1">
              &amp; DESIGNER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 relative py-1 ${
                  isActive ? "text-[#F4C542]" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F4C542]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {onOpenIntro && (
            <button
              onClick={onOpenIntro}
              title="View Intro Presentation"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-gray-300 hover:text-[#F4C542] border border-white/10 hover:border-[#F4C542]/40 rounded-sm transition-all"
            >
              <FiPlay size={12} className="text-[#F4C542]" />
              <span>Intro</span>
            </button>
          )}

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#F4C542] hover:bg-[#e2b535] text-black text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm shadow-lg shadow-[#F4C542]/10 transition-all transform active:scale-95"
          >
            <span>Discuss Your Project</span>
            <FiArrowRight className="text-sm" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white p-2 rounded focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0c0d12] border-b border-white/10 px-6 py-6 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-gray-200 hover:text-[#F4C542] py-1"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              {onOpenIntro && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenIntro();
                  }}
                  className="w-full flex items-center justify-center gap-2 border border-[#F4C542]/40 text-[#F4C542] font-semibold text-xs uppercase tracking-wider py-2.5 rounded-sm"
                >
                  <FiPlay size={13} />
                  <span>View Intro Presentation</span>
                </button>
              )}

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#F4C542] text-black font-bold text-xs uppercase tracking-wider py-3 rounded-sm"
              >
                <span>Discuss Your Project</span>
                <FiArrowRight />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
