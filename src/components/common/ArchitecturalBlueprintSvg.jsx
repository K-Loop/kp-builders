import React from "react";

export default function ArchitecturalBlueprintSvg({ type }) {
  if (type === "ground") {
    return (
      <svg
        viewBox="0 0 500 700"
        className="w-full h-full bg-[#fbfbfd] text-[#1c2434] select-none p-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="15" y="15" width="470" height="670" fill="none" stroke="#222" strokeWidth="2.5" />
        <rect x="22" y="22" width="456" height="656" fill="none" stroke="#4b5563" strokeWidth="1" strokeDasharray="4 2" />
        <line x1="15" y1="620" x2="485" y2="620" stroke="#222" strokeWidth="2" />
        <text x="35" y="645" fontFamily="monospace" fontSize="13" fontWeight="bold" fill="#111">
          GROUND FLOOR PLAN • 2BHK
        </text>
        <text x="35" y="663" fontFamily="monospace" fontSize="11" fill="#444">
          SCALE: 1:100 | DIMENSION: 22'-0" x 40'-0" | BUILT-UP: 880 SQ.FT
        </text>
        <text x="400" y="655" fontFamily="monospace" fontSize="14" fontWeight="bold" fill="#F4C542">
          NORTH ↑
        </text>

        <line x1="60" y1="45" x2="440" y2="45" stroke="#2563eb" strokeWidth="1.2" />
        <line x1="60" y1="40" x2="60" y2="50" stroke="#2563eb" strokeWidth="1.5" />
        <line x1="440" y1="40" x2="440" y2="50" stroke="#2563eb" strokeWidth="1.5" />
        <text x="235" y="42" fontFamily="monospace" fontSize="11" fill="#1d4ed8" textAnchor="middle" fontWeight="bold">
          22' - 0"
        </text>

        <line x1="465" y1="60" x2="465" y2="600" stroke="#2563eb" strokeWidth="1.2" />
        <line x1="460" y1="60" x2="470" y2="60" stroke="#2563eb" strokeWidth="1.5" />
        <line x1="460" y1="600" x2="470" y2="600" stroke="#2563eb" strokeWidth="1.5" />
        <text x="480" y="330" fontFamily="monospace" fontSize="11" fill="#1d4ed8" textAnchor="middle" transform="rotate(90, 480, 330)" fontWeight="bold">
          40' - 0"
        </text>

        <rect x="60" y="60" width="380" height="540" fill="#f8fafc" stroke="#111" strokeWidth="5" />

        <rect x="60" y="420" width="200" height="180" fill="#f1f5f9" stroke="#333" strokeWidth="3" />
        <text x="160" y="490" fontFamily="sans-serif" fontSize="13" fontWeight="bold" textAnchor="middle">PARKING</text>
        <text x="160" y="510" fontFamily="monospace" fontSize="11" textAnchor="middle" fill="#555">10'-0" x 12'-0"</text>
        <rect x="110" y="525" width="100" height="55" rx="10" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 2" />

        <rect x="60" y="210" width="230" height="210" fill="#fff" stroke="#333" strokeWidth="3" />
        <text x="175" y="300" fontFamily="sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle">LIVING ROOM</text>
        <text x="175" y="322" fontFamily="monospace" fontSize="11" textAnchor="middle" fill="#555">16'-0" x 11'-0"</text>
        <path d="M 60 210 A 40 40 0 0 1 100 250" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 2" />

        <rect x="290" y="210" width="150" height="160" fill="#fff" stroke="#333" strokeWidth="3" />
        <text x="365" y="280" fontFamily="sans-serif" fontSize="13" fontWeight="bold" textAnchor="middle">KITCHEN</text>
        <text x="365" y="300" fontFamily="monospace" fontSize="11" textAnchor="middle" fill="#555">9'-0" x 10'-0"</text>
        <path d="M 295 215 L 435 215 L 435 260" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" />

        <rect x="60" y="60" width="220" height="150" fill="#fff" stroke="#333" strokeWidth="3" />
        <text x="170" y="125" fontFamily="sans-serif" fontSize="13" fontWeight="bold" textAnchor="middle">BED ROOM</text>
        <text x="170" y="145" fontFamily="monospace" fontSize="11" textAnchor="middle" fill="#555">11'-0" x 12'-0"</text>

        <rect x="280" y="60" width="160" height="90" fill="#fff" stroke="#333" strokeWidth="3" />
        <text x="360" y="105" fontFamily="sans-serif" fontSize="11" fontWeight="bold" textAnchor="middle">TOILET</text>
        <text x="360" y="123" fontFamily="monospace" fontSize="10" textAnchor="middle" fill="#555">7'-0" x 5'-0"</text>

        <g stroke="#64748b" strokeWidth="1.5">
          <line x1="260" y1="430" x2="440" y2="430" />
          <line x1="260" y1="450" x2="440" y2="450" />
          <line x1="260" y1="470" x2="440" y2="470" />
          <line x1="260" y1="490" x2="440" y2="490" />
          <line x1="260" y1="510" x2="440" y2="510" />
          <line x1="260" y1="530" x2="440" y2="530" />
          <line x1="260" y1="550" x2="440" y2="550" />
          <line x1="260" y1="570" x2="440" y2="570" />
          <line x1="260" y1="590" x2="440" y2="590" />
          <line x1="350" y1="420" x2="350" y2="600" stroke="#111" strokeWidth="2.5" />
          <text x="350" y="515" fontFamily="sans-serif" fontSize="11" fill="#111" fontWeight="bold" textAnchor="middle">STAIRCASE (UP)</text>
        </g>
      </svg>
    );
  }

  if (type === "first") {
    return (
      <svg
        viewBox="0 0 500 700"
        className="w-full h-full bg-[#fbfbfd] text-[#1c2434] select-none p-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="15" y="15" width="470" height="670" fill="none" stroke="#222" strokeWidth="2.5" />
        <rect x="22" y="22" width="456" height="656" fill="none" stroke="#4b5563" strokeWidth="1" strokeDasharray="4 2" />
        <line x1="15" y1="620" x2="485" y2="620" stroke="#222" strokeWidth="2" />
        <text x="35" y="645" fontFamily="monospace" fontSize="13" fontWeight="bold" fill="#111">
          FIRST FLOOR PLAN • 3BHK
        </text>
        <text x="35" y="663" fontFamily="monospace" fontSize="11" fill="#444">
          SCALE: 1:100 | DIMENSION: 22'-0" x 40'-0" | BALCONY & DRESS
        </text>

        <rect x="60" y="60" width="380" height="540" fill="#f8fafc" stroke="#111" strokeWidth="5" />
        
        <rect x="60" y="470" width="380" height="130" fill="#f3f4f6" stroke="#222" strokeWidth="2" />
        <text x="250" y="540" fontFamily="sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle">OPEN BALCONY / TERRACE</text>
        <text x="250" y="560" fontFamily="monospace" fontSize="11" textAnchor="middle" fill="#555">22'-0" x 6'-6"</text>
        
        <rect x="60" y="270" width="220" height="200" fill="#fff" stroke="#333" strokeWidth="3" />
        <text x="170" y="360" fontFamily="sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle">FAMILY LOUNGE</text>
        <text x="170" y="380" fontFamily="monospace" fontSize="11" textAnchor="middle" fill="#555">14'-0" x 11'-0"</text>

        <rect x="60" y="60" width="200" height="210" fill="#fff" stroke="#333" strokeWidth="3" />
        <text x="160" y="155" fontFamily="sans-serif" fontSize="13" fontWeight="bold" textAnchor="middle">BED ROOM 2</text>
        <text x="160" y="175" fontFamily="monospace" fontSize="11" textAnchor="middle" fill="#555">10'-0" x 11'-0"</text>

        <rect x="260" y="60" width="180" height="210" fill="#fff" stroke="#333" strokeWidth="3" />
        <text x="350" y="155" fontFamily="sans-serif" fontSize="13" fontWeight="bold" textAnchor="middle">BED ROOM 3</text>
        <text x="350" y="175" fontFamily="monospace" fontSize="11" textAnchor="middle" fill="#555">11'-0" x 12'-0"</text>

        <rect x="280" y="270" width="160" height="100" fill="#fff" stroke="#333" strokeWidth="2.5" />
        <text x="360" y="320" fontFamily="sans-serif" fontSize="11" fontWeight="bold" textAnchor="middle">DRESS & TOILET</text>
        <text x="360" y="338" fontFamily="monospace" fontSize="10" textAnchor="middle" fill="#555">8'-0" x 6'-0"</text>
      </svg>
    );
  }

  if (type === "north") {
    return (
      <svg
        viewBox="0 0 500 700"
        className="w-full h-full bg-[#fbfbfd] text-[#1c2434] select-none p-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="15" y="15" width="470" height="670" fill="none" stroke="#222" strokeWidth="2.5" />
        <rect x="22" y="22" width="456" height="656" fill="none" stroke="#4b5563" strokeWidth="1" strokeDasharray="4 2" />
        <line x1="15" y1="620" x2="485" y2="620" stroke="#222" strokeWidth="2" />
        <text x="35" y="645" fontFamily="monospace" fontSize="13" fontWeight="bold" fill="#111">
          NORTH FACING PLAN • VASTU COMPLIANT
        </text>
        <text x="35" y="663" fontFamily="monospace" fontSize="11" fill="#444">
          DIMENSION: 30'-0" x 40'-0" | 2BHK DELUXE WITH PORTICO
        </text>
        <text x="400" y="655" fontFamily="monospace" fontSize="14" fontWeight="bold" fill="#16a34a">
          NORTH ENTRY
        </text>

        <rect x="50" y="50" width="400" height="550" fill="#f8fafc" stroke="#111" strokeWidth="5" />
        <rect x="50" y="50" width="180" height="140" fill="#f1f5f9" stroke="#333" strokeWidth="2.5" />
        <text x="140" y="115" fontFamily="sans-serif" fontSize="13" fontWeight="bold" textAnchor="middle">PORTICO</text>
        <text x="140" y="135" fontFamily="monospace" fontSize="11" textAnchor="middle" fill="#555">10'-0" x 10'-0"</text>

        <rect x="230" y="50" width="220" height="230" fill="#fff" stroke="#333" strokeWidth="3" />
        <text x="340" y="160" fontFamily="sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle">LIVING ROOM</text>
        <text x="340" y="180" fontFamily="monospace" fontSize="11" textAnchor="middle" fill="#555">14'-0" x 11'-0"</text>

        <rect x="50" y="190" width="180" height="190" fill="#fff" stroke="#333" strokeWidth="3" />
        <text x="140" y="280" fontFamily="sans-serif" fontSize="13" fontWeight="bold" textAnchor="middle">DINING & UTILITY</text>
        <text x="140" y="300" fontFamily="monospace" fontSize="11" textAnchor="middle" fill="#555">10'-9" x 11'-0"</text>

        <rect x="230" y="280" width="220" height="180" fill="#fff" stroke="#333" strokeWidth="3" />
        <text x="340" y="365" fontFamily="sans-serif" fontSize="13" fontWeight="bold" textAnchor="middle">MASTER BEDROOM</text>
        <text x="340" y="385" fontFamily="monospace" fontSize="11" textAnchor="middle" fill="#555">13'-0" x 11'-0"</text>

        <rect x="50" y="380" width="180" height="220" fill="#fff" stroke="#333" strokeWidth="3" />
        <text x="140" y="480" fontFamily="sans-serif" fontSize="13" fontWeight="bold" textAnchor="middle">GUEST BEDROOM</text>
        <text x="140" y="500" fontFamily="monospace" fontSize="11" textAnchor="middle" fill="#555">11'-0" x 12'-0"</text>
      </svg>
    );
  }

  if (type === "west") {
    return (
      <svg
        viewBox="0 0 500 700"
        className="w-full h-full bg-[#fbfbfd] text-[#1c2434] select-none p-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="15" y="15" width="470" height="670" fill="none" stroke="#222" strokeWidth="2.5" />
        <rect x="22" y="22" width="456" height="656" fill="none" stroke="#4b5563" strokeWidth="1" strokeDasharray="4 2" />
        <line x1="15" y1="620" x2="485" y2="620" stroke="#222" strokeWidth="2" />
        <text x="35" y="645" fontFamily="monospace" fontSize="13" fontWeight="bold" fill="#111">
          WEST FACING PLAN • 3BHK
        </text>
        <text x="35" y="663" fontFamily="monospace" fontSize="11" fill="#444">
          DIMENSION: 30'-0" x 50'-0" | DUPLEX VILLA LAYOUT
        </text>
        <rect x="50" y="50" width="400" height="550" fill="#f8fafc" stroke="#111" strokeWidth="5" />
        <rect x="50" y="420" width="200" height="180" fill="#f1f5f9" stroke="#333" strokeWidth="3" />
        <text x="150" y="505" fontFamily="sans-serif" fontSize="13" fontWeight="bold" textAnchor="middle">WEST PORTICO</text>
        <text x="150" y="525" fontFamily="monospace" fontSize="11" textAnchor="middle" fill="#555">14'-0" x 12'-0"</text>

        <rect x="250" y="380" width="200" height="220" fill="#fff" stroke="#333" strokeWidth="3" />
        <text x="350" y="480" fontFamily="sans-serif" fontSize="13" fontWeight="bold" textAnchor="middle">LIVING / DINING</text>
        <text x="350" y="500" fontFamily="monospace" fontSize="11" textAnchor="middle" fill="#555">16'-0" x 12'-0"</text>

        <rect x="50" y="220" width="200" height="200" fill="#fff" stroke="#333" strokeWidth="3" />
        <text x="150" y="315" fontFamily="sans-serif" fontSize="13" fontWeight="bold" textAnchor="middle">KITCHEN</text>
        <text x="150" y="335" fontFamily="monospace" fontSize="11" textAnchor="middle" fill="#555">10'-0" x 9'-0"</text>

        <rect x="250" y="190" width="200" height="190" fill="#fff" stroke="#333" strokeWidth="3" />
        <text x="350" y="280" fontFamily="sans-serif" fontSize="13" fontWeight="bold" textAnchor="middle">BED ROOM 1</text>
        <text x="350" y="300" fontFamily="monospace" fontSize="11" textAnchor="middle" fill="#555">12'-0" x 12'-0"</text>

        <rect x="50" y="50" width="400" height="140" fill="#fff" stroke="#333" strokeWidth="3" />
        <text x="250" y="115" fontFamily="sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle">MASTER SUITE & WALK-IN</text>
        <text x="250" y="135" fontFamily="monospace" fontSize="11" textAnchor="middle" fill="#555">18'-0" x 13'-0"</text>
      </svg>
    );
  }

  // Site Layout Plan
  return (
    <svg
      viewBox="0 0 500 700"
      className="w-full h-full bg-[#fbfbfd] text-[#1c2434] select-none p-4"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="15" y="15" width="470" height="670" fill="none" stroke="#222" strokeWidth="2.5" />
      <line x1="15" y1="620" x2="485" y2="620" stroke="#222" strokeWidth="2" />
      <text x="35" y="645" fontFamily="monospace" fontSize="13" fontWeight="bold" fill="#111">
        SITE LAYOUT PLAN • SOUTH FACING
      </text>
      <text x="35" y="663" fontFamily="monospace" fontSize="11" fill="#444">
        TOTAL PLOT: 40'-0" x 60'-0" | SETBACK: 5'-0" ALL SIDES
      </text>

      <rect x="50" y="50" width="400" height="500" fill="#ecfdf5" stroke="#047857" strokeWidth="3" strokeDasharray="6 3" />
      <text x="250" y="80" fontFamily="sans-serif" fontSize="12" fill="#047857" fontWeight="bold" textAnchor="middle">
        PLOT BOUNDARY (40'-0" x 60'-0")
      </text>

      <rect x="110" y="120" width="280" height="340" fill="#ffffff" stroke="#111" strokeWidth="4" />
      <g stroke="#94a3b8" strokeWidth="1">
        <line x1="120" y1="120" x2="380" y2="380" />
        <line x1="160" y1="120" x2="390" y2="350" />
        <line x1="120" y1="160" x2="390" y2="430" />
        <line x1="120" y1="200" x2="380" y2="460" />
      </g>
      <rect x="150" y="240" width="200" height="90" fill="#1e293b" rx="6" />
      <text x="250" y="280" fontFamily="sans-serif" fontSize="15" fill="#F4C542" fontWeight="bold" textAnchor="middle">
        PROPOSED RESIDENCE
      </text>
      <text x="250" y="305" fontFamily="monospace" fontSize="12" fill="#fff" textAnchor="middle">
        2,400 SQ.FT BUILT-UP
      </text>

      <rect x="70" y="470" width="360" height="60" fill="#a7f3d0" stroke="#059669" strokeWidth="1.5" />
      <text x="250" y="505" fontFamily="sans-serif" fontSize="12" fill="#065f46" fontWeight="bold" textAnchor="middle">
        FRONT LANDSCAPED LAWN & PARKING
      </text>

      <rect x="35" y="560" width="430" height="50" fill="#334155" />
      <line x1="40" y1="585" x2="460" y2="585" stroke="#f8fafc" strokeWidth="2" strokeDasharray="15 15" />
      <text x="250" y="589" fontFamily="sans-serif" fontSize="12" fill="#fff" fontWeight="bold" textAnchor="middle">
        30'-0" WIDE MAIN ROAD
      </text>
    </svg>
  );
}
