import React from "react";
import heroBanner from "../../assets/BannerPayment.avif";

export default function Hero() {
  return (
    <section className="w-full bg-[#f8f9fb] pt-10 pb-20">
      {/* TOP BANNER */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-md">
          <img
            src={heroBanner}
            alt="Hero Banner"
            className="w-full h-[330px] object-cover"
          />

          {/* Banner Text */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-10">
            <h1 className="text-white text-4xl font-semibold leading-snug max-w-2xl drop-shadow-lg">
              Accept payments in <span className="font-bold">130+ currencies.</span>
              <br />
              Go global today!
            </h1>

            {/* Banner Button */}
            <button className="mt-6 bg-white text-indigo-700 font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
              Accept International Payments
            </button>
          </div>
        </div>
      </div>

      {/* MAIN TITLE SECTION */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <h1 className="text-5xl font-semibold leading-tight text-[#0b1220] max-w-4xl">
          The all in one{" "}
          <span className="text-[#009c52] font-semibold">finance platform</span>
          <br />
          you’ve been looking for
        </h1>

        {/* Subtitle Tags */}
        <p className="text-gray-500 mt-6 text-lg">With Razorpay, you can:</p>

        <div className="flex flex-wrap items-center gap-6 mt-4 text-[17px] font-medium text-gray-700">
          <span className="hover:text-black cursor-pointer transition">Accept Payments</span>
          <span className="hover:text-black cursor-pointer transition">Make Payouts</span>
          <span className="hover:text-black cursor-pointer transition">Start Business Banking</span>
          <span className="hover:text-black cursor-pointer transition">Automate Payroll</span>
          <span className="hover:text-black cursor-pointer transition">Get Credit & Loans</span>
        </div>
      </div>

      {/* BOTTOM RIGHT BUTTON */}
      <button
        className="
        fixed 
        bottom-6 right-6 
        bg-white shadow-lg border 
        px-4 py-3 rounded-xl 
        flex items-center gap-3 text-[#2b6fff] font-semibold 
        hover:bg-gray-100 transition
      "
      >
        <span className="text-lg">✱</span> Ask RAY
      </button>
    </section>
  );
}
