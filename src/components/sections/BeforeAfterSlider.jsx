import React, { useState, useRef } from "react";
import { FiSliders } from "react-icons/fi";
import { FaHardHat } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import SafeImage from "../common/SafeImage";
import { ASSET_CONFIG } from "../../config/siteConfig";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div
      className="mt-20 pt-16 border-t border-white/10"
      onMouseUp={() => setIsDragging(false)}
      onTouchEnd={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#F4C542] uppercase block mb-1">
          TRANSFORMATION SHOWCASE
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
          RAW CONSTRUCTION VS COMPLETED HOME
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 mt-2">
          Drag the interactive slider to view the engineering transition from site excavation
          and brick masonry to final turnkey handover.
        </p>
      </div>

      {/* Draggable Comparison Container */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        className="relative max-w-4xl mx-auto h-[380px] sm:h-[460px] rounded-sm overflow-hidden select-none border border-white/15 shadow-2xl cursor-ew-resize bg-black"
      >
        {/* "After" Layer (Completed Work) */}
        <div className="absolute inset-0 w-full h-full">
          <SafeImage
            src={ASSET_CONFIG.images.beforeAfterAfter}
            alt="Completed Modern House Finished Interior"
            className="w-full h-full"
            imgClassName="w-full h-full object-cover"
            fallback={
              <div className="w-full h-full bg-gradient-to-tr from-[#1a1c24] to-[#252a36] flex flex-col justify-center items-center p-6 text-center">
                <HiOutlineSparkles className="text-5xl text-[#F4C542] mb-3" />
                <h4 className="text-2xl font-bold text-white">AFTER: TURNKEY RESIDENCE</h4>
                <p className="text-sm text-gray-300 max-w-md mt-1">
                  Completed luxury finishes, ambient lighting, Italian tile flooring, and painted facades.
                </p>
              </div>
            }
          />
          <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-md text-white font-mono font-bold text-xs px-3 py-1.5 rounded uppercase tracking-wider shadow-lg">
            AFTER: COMPLETED HANDOVER
          </div>
        </div>

        {/* "Before" Layer (Construction Phase) */}
        <div
          className="absolute inset-0 h-full overflow-hidden border-r-2 border-[#F4C542]"
          style={{ width: `${sliderPosition}%` }}
        >
          <div
            className="absolute inset-0 h-full"
            style={{ width: containerRef.current ? containerRef.current.clientWidth : "100%" }}
          >
            <SafeImage
              src={ASSET_CONFIG.images.beforeAfterBefore}
              alt="Under Construction Site Stage"
              className="w-full h-full"
              imgClassName="w-full h-full object-cover"
              fallback={
                <div className="w-full h-full bg-gradient-to-tr from-[#0e0f14] to-[#1c1f2a] flex flex-col justify-center items-center p-6 text-center">
                  <FaHardHat className="text-5xl text-amber-500 mb-3" />
                  <h4 className="text-2xl font-bold text-white">BEFORE: UNDER CONSTRUCTION</h4>
                  <p className="text-sm text-gray-300 max-w-md mt-1">
                    Reinforced concrete columns, brick masonry walls, scaffolding, and electrical conduits.
                  </p>
                </div>
              }
            />
            <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md text-[#F4C542] border border-[#F4C542]/40 font-mono font-bold text-xs px-3 py-1.5 rounded uppercase tracking-wider shadow-lg">
              BEFORE: FOUNDATION &amp; BRICKWORK
            </div>
          </div>
        </div>

        {/* Draggable Vertical Divider Handle */}
        <div
          className="absolute top-0 bottom-0 z-20 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="w-10 h-10 rounded-full bg-[#F4C542] text-black shadow-[0_0_20px_rgba(244,197,66,0.6)] flex items-center justify-center border-2 border-black">
            <FiSliders className="text-lg rotate-90" />
          </div>
        </div>
      </div>

      {/* Slider Accessible Range Input */}
      <div className="max-w-md mx-auto mt-4 px-4 flex items-center justify-between gap-4">
        <span className="text-xs font-mono text-gray-400">0% Before</span>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="w-full accent-[#F4C542] cursor-pointer"
          aria-label="Before and After transformation slider"
        />
        <span className="text-xs font-mono text-gray-400">100% After</span>
      </div>
    </div>
  );
}
