import React from "react";
import UnacadmyLogo from "../../assets/Logo/Unacademy Logo Vector.png";
import GoibiboLogo from "../../assets/Logo/Goibibo Logo.png";
import MamaearthLogo from "../../assets/Logo/Mamaearth Logo Vector.png";

const logos = [UnacadmyLogo, GoibiboLogo, MamaearthLogo];

export default function ClientLogos() {
  const duplicated = [...logos, ...logos, ...logos];

  return (
    <div
      className="
        relative w-full py-16 bg-white overflow-hidden
        group   /* 👈 IMPORTANT: enables section-hover */
      "
    >
      {/* Left Gradient */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-40 
        bg-gradient-to-r from-[#fafafa] to-transparent z-20"></div>

      {/* Right Gradient */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 
        bg-gradient-to-l from-[#fafafa] to-transparent z-20"></div>

    

      <div className="w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">

          {duplicated.map((logo, index) => (
            <div
              key={index}
              className="px-12 inline-flex items-center justify-center"
            >
              <img
                src={logo}
                alt="client logo"
                className="
                  h-6 w-auto 
                  opacity-60 
                  saturate-0 
                  transition-all duration-500

                  /* SECTION HOVER LOGIC */
                  group-hover:opacity-100 
                  group-hover:saturate-100
                "
              />
            </div>
          ))}

        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
}
