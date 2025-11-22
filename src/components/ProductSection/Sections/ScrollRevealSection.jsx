// src/components/sections/ScrollRevealSection.jsx
import React, { useRef, useEffect, useState } from "react";

let globalStack = 1000; // high base, increments so newer sections are above older ones

export default function ScrollRevealSection({ children, className = "", onVisible }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [zIndex, setZIndex] = useState(globalStack);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Mark visible
            setVisible(true);

            // Give this section a higher z-index than previously visible ones
            globalStack += 1;
            setZIndex(globalStack);

            // notify parent (optional) so it can apply negative offset for overlap
            if (typeof onVisible === "function") onVisible();

            // stop observing this element
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.22 } // tuned to match razorpay feel
    );

    io.observe(el);
    return () => io.disconnect();
  }, [onVisible]);

  return (
    <section
      ref={ref}
      aria-hidden={!visible}
      style={{ zIndex }}
      className={`
        relative
        ${className}
        transition-all duration-[700ms] ease-[cubic-bezier(.22,.8,.2,1)]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {/* subtle white background layer behind each revealed card to add depth */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-white/95 shadow-xl -z-10" />
      {children}
    </section>
  );
}
