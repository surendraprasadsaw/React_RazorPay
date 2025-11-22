import React from "react";
import heroImg from "../../assets/heroMan.avif"; 
import bgShape from "../../assets/bg-hero.avif";


const Hero = () => {
  const options = [
  "Accept Payments",
  "Make Payouts",
  "Start Business Banking",
  "Get Credit",
  "Automate Payroll",
  "Something Else?",
];
  return (
    <div className="w-full bg-gradient-to-br from-[#eef3ff] to-[#ffffff] pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl font-bold text-[#1a36ff] leading-tight">
            Advanced Payment Solutions
          </h1>

          <h2 className="mt-4 text-4xl font-semibold text-gray-900 leading-tight">
            for India&apos;s boldest disruptors
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            100+ Payment Methods | Easy Integration | Powerful Dashboard
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-[#1a36ff] text-white rounded-xl font-semibold hover:bg-[#1024d1] transition flex items-center gap-2">
              Sign Up Now →
            </button>

            <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl font-semibold hover:bg-gray-100 transition">
              Know More
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-center">

          {/* BLUE SHAPE IMAGE */}
          <div
  className="
    absolute
    -top-10
    -left-16
    w-[420px]
    h-[520px]
    
    overflow-hidden
    drop-shadow-2xl
  "
>
  <img
    src={bgShape}
    alt="background shape"
    className="w-full h-full object-cover"
  />
</div>


          {/* MAIN HERO IMAGE */}
          <img
            src={heroImg}
            className="relative z-10 w-[380px] rounded-xl shadow-xl object-cover"
          />

          {/* Mini Payment Card */}
          <div className="absolute -right-10 top-16 bg-white shadow-xl rounded-xl p-5 w-64 border z-5">
            <p className="text-sm text-gray-700">Body Lotion</p>
            <p className="text-xl font-semibold mt-2">₹ 455</p>

            <p className="mt-4 text-sm font-semibold text-gray-800">
              Select Payment Method
            </p>

            <div className="mt-3 space-y-2 text-sm">
              <p className="flex justify-between"><span>Card</span><span>›</span></p>
              <p className="flex justify-between"><span>UPI ID</span><span>›</span></p>
              <p className="flex justify-between"><span>Netbanking</span><span>›</span></p>
              <p className="flex justify-between"><span>EMI</span><span>›</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM NAVIGATION BAR */}
      <div className="w-full flex justify-center mt-20 px-4 select-none">
      <div
        className="
          bg-white shadow-[0_10px_40px_rgba(0,0,0,0.07)]
          rounded-2xl
          flex items-center gap-4
          px-6 py-4
          w-full max-w-5xl
          overflow-x-auto
          scrollbar-hide
        "
      >
        {/* Search Button */}
        <button
          className="
            flex items-center gap-2
            px-5 py-2.5
            rounded-xl
            bg-[#f4f7ff]
            hover:bg-[#e9ecff]
            transition-all
            shrink-0
          "
        >
          <span className="text-xl">🔍</span>
          <span className="font-medium text-[15px] text-gray-700">
            Start your search
          </span>
        </button>

        {/* Divider Line (matches Razorpay) */}
        <div className="h-8 w-px bg-gray-200 shrink-0 hidden md:block" />

        {/* Product Buttons */}
        <div className="flex items-center gap-3 whitespace-nowrap">
          {options.map((item) => (
            <button
              key={item}
              className="
                px-5 py-2.5
                rounded-xl
                bg-[#f4f7ff]
                hover:bg-[#e9ecff]
                transition-all
                text-[14px]
                text-gray-700
                font-medium
                shrink-0
              "
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
