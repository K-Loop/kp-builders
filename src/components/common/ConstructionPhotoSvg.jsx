import React from "react";
import { FaHardHat } from "react-icons/fa";

export default function ConstructionPhotoSvg({ phase }) {
  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#12141a] via-[#1a1d26] to-[#0c0d12] flex items-center justify-center p-6 select-none">
      {/* Architectural grid & structural CAD wireframe in background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F4C542 1px, transparent 1px), linear-gradient(to bottom, #F4C542 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative structural tag at top right */}
      <div className="absolute top-4 right-4 text-xs font-mono px-2 py-1 bg-black/60 border border-[#F4C542]/40 text-[#F4C542] rounded z-10">
        {phase || "PHASE-01"}
      </div>

      {/* Center Technical Blueprint Icon */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <div className="w-14 h-14 rounded-full bg-[#F4C542]/10 border border-[#F4C542]/30 flex items-center justify-center mb-2">
          <FaHardHat className="text-2xl text-[#F4C542]" />
        </div>
        <span className="text-[11px] font-mono tracking-widest text-[#F4C542] uppercase">
          KP SITE LOG
        </span>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
    </div>
  );
}
