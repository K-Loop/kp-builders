import React from "react";
import SafeImage from "../common/SafeImage";
import ConstructionPhotoSvg from "../common/ConstructionPhotoSvg";
import { ASSET_CONFIG } from "../../config/siteConfig";

export default function AboutSection() {
  return (
    <div className="lg:col-span-7 space-y-6">
      <div>
        <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#F4C542] uppercase block mb-2">
          ABOUT {ASSET_CONFIG.contact.brandName}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
          PLANNING BETTER <br />
          SPACES FOR A <br />
          <span className="text-[#F4C542]">BRIGHTER TOMORROW</span>
        </h2>
      </div>

      <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
        <p>
          {ASSET_CONFIG.contact.brandName} is a licensed engineering and construction firm focused
          on quality construction, practical design and hassle-free project execution.
        </p>
        <p>
          We specialize in residential buildings, custom floor plans, planning support and
          site supervision, ensuring your vision is built with precision and care.
        </p>
      </div>

      {/* Construction Site Image */}
      <div className="h-64 sm:h-72 w-full rounded-sm overflow-hidden border border-white/10 shadow-xl relative bg-[#181a24]">
        <SafeImage
          src={ASSET_CONFIG.images.aboutImage}
          alt="KP Builders Civil Site Inspection"
          className="w-full h-full"
          imgClassName="w-full h-full object-cover"
          fallback={<ConstructionPhotoSvg phase="SITE SUPERVISION" />}
        />
      </div>

      {/* Quote Callout Box */}
      <div className="p-6 rounded-sm bg-[#161822] border-l-4 border-[#F4C542] flex items-center gap-4">
        <span className="text-4xl text-[#F4C542] font-serif leading-none select-none">“</span>
        <p className="text-base sm:text-lg font-bold text-white tracking-wide italic">
          Good planning builds better living.
        </p>
      </div>

      {/* Engineering Metrics Badges */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
        <div className="text-center p-3 bg-white/[0.02] border border-white/5 rounded">
          <div className="text-xl sm:text-2xl font-extrabold text-[#F4C542] font-mono">100%</div>
          <div className="text-[11px] text-gray-400 uppercase tracking-wider mt-1">Licensed Civil</div>
        </div>
        <div className="text-center p-3 bg-white/[0.02] border border-white/5 rounded">
          <div className="text-xl sm:text-2xl font-extrabold text-[#F4C542] font-mono">VASTU</div>
          <div className="text-[11px] text-gray-400 uppercase tracking-wider mt-1">Compliant Plans</div>
        </div>
        <div className="text-center p-3 bg-white/[0.02] border border-white/5 rounded">
          <div className="text-xl sm:text-2xl font-extrabold text-[#F4C542] font-mono">ON-TIME</div>
          <div className="text-[11px] text-gray-400 uppercase tracking-wider mt-1">Turnkey Delivery</div>
        </div>
      </div>
    </div>
  );
}
