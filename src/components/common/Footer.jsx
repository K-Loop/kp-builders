import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { ASSET_CONFIG } from "../../config/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-[#08090c] border-t border-white/10 pt-16 pb-12 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 relative flex items-center justify-center p-1 bg-black/50 rounded border border-[#F4C542]/30 overflow-hidden flex-shrink-0">
                <img
                  src={ASSET_CONFIG.images.logo}
                  alt="KP BUILDERS & DESIGNER Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(244,197,66,0.3)]"
                />
              </div>
              <div>
                <h4 className="text-white font-extrabold text-sm tracking-wider uppercase">
                  KP BUILDERS
                </h4>
                <span className="text-[9px] tracking-[0.2em] text-[#F4C542] uppercase block">
                  &amp; DESIGNER
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Licensed civil engineering, bespoke floor plan drafting, Vastu compliance, and
              turnkey residential construction execution.
            </p>
            <div className="text-xs text-[#F4C542] font-mono">
              {ASSET_CONFIG.contact.license}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {["Home", "About", "Services", "Blueprints", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#F4C542] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Architectural Capabilities */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Core Specializations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>• 2BHK &amp; 3BHK Custom House Plans</li>
              <li>• Vastu Compliant Facing Layouts</li>
              <li>• RCC Slab Reinforcement Supervision</li>
              <li>• Soil Testing &amp; Footing Design</li>
              <li>• Turnkey Villa Construction</li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-3">
                <FiPhone className="text-[#F4C542]" />
                <span>{ASSET_CONFIG.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-emerald-500" />
                <span>{ASSET_CONFIG.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="text-[#F4C542]" />
                <span>{ASSET_CONFIG.contact.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <FiMapPin className="text-[#F4C542] mt-0.5 flex-shrink-0" />
                <span>{ASSET_CONFIG.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} KP BUILDERS &amp; DESIGNER. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            ENGINEERED PRECISION • ARCHITECTURAL INTEGRITY
          </p>
        </div>
      </div>
    </footer>
  );
}
