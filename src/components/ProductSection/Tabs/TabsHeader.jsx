import React, { useRef, useLayoutEffect, useState } from 'react';
import TabButton from './TabButton';

export default function TabsHeader({ tabs, activeIndex, setActiveIndex }) {
  const containerRef = useRef(null);
  const buttonRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    transform: 'translateX(0px)',
  });

  useLayoutEffect(() => {
    const activeEl = buttonRefs.current[activeIndex];
    const containerEl = containerRef.current;
    if (!activeEl || !containerEl) return;

    const activeRect = activeEl.getBoundingClientRect();
    const containerRect = containerEl.getBoundingClientRect();
    const left =
      activeRect.left - containerRect.left + containerEl.scrollLeft;

    setIndicatorStyle({
      width: activeRect.width,
      transform: `translateX(${left}px)`,
    });

    activeEl.scrollIntoView({ inline: 'center', behavior: 'smooth' });
  }, [activeIndex, tabs]);

  return (
    <div className="relative w-200 md:w-full">

      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">

        {/* TAB BUTTONS */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-2 items-center flex-1"
        >
          {tabs.map((t, i) => (
            <TabButton
              key={t.key}
              active={i === activeIndex}
              onClick={() => setActiveIndex(i)}
              refProp={(el) => (buttonRefs.current[i] = el)}
            >
              {t.label}
            </TabButton>
          ))}
        </div>

        {/* GET STARTED BUTTON */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow whitespace-nowrap ml-4">
          Get Started Now
        </button>
      </div>

      {/* UNDERLINE INDICATOR */}
      <div
        className="absolute left-0 bottom-0 h-1 bg-emerald-500 rounded-full tab-indicator"
        style={{
          width: indicatorStyle.width,
          transform: indicatorStyle.transform,
        }}
      />
    </div>
  );
}
