import React from 'react';

const TabButton = React.forwardRef(
  ({ children, active, onClick }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`
          relative 
          whitespace-nowrap 
          px-4 md:px-5 
          py-2.5 
          text-sm md:text-[15px] 
          font-medium 
          transition-all
          duration-300
          select-none

          ${active ? "text-blue-600" : "text-slate-600 hover:text-slate-800"}
        `}
      >
        {children}

        {/* Active Dot Indicator for Mobile (Razorpay style) */}
        <span
          className={`
            absolute left-1/2 -bottom-1 h-1 w-1 rounded-full bg-blue-600 
            transition-opacity duration-300
            ${active ? "opacity-100" : "opacity-0"}
            md:hidden
          `}
        ></span>
      </button>
    );
  }
);

export default TabButton;
