import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiHeadphones } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import Logo from "./../Logo/Logo.jsx";
import LoginButton from "../Button/LoginButton.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="hero-navbar"
      className="w-full bg-transparent ml-auto fixed top-0 left-0 z-100"
    >
      <div className="w-full bg-white shadow-sm px-8 py-3 flex items-center justify-between">
        
        {/* LEFT SECTION (Logo + Menu Items) */}
        <div className="flex items-center gap-10">
          <Logo />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-[15px] text-gray-800 font-medium">
            <li className="hover:text-black cursor-pointer">Payments</li>
            <li className="hover:text-black cursor-pointer">Banking+</li>
            <li className="hover:text-black cursor-pointer">Payroll</li>
            <li className="hover:text-black cursor-pointer">Engage</li>
            <li className="hover:text-black cursor-pointer">Partners</li>
            <li className="hover:text-black cursor-pointer">Resources</li>
            <li className="hover:text-black cursor-pointer">Pricing</li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="hidden md:flex items-center gap-6">

          {/* Support Icon */}
          <FiHeadphones size={22} className="text-gray-700 cursor-pointer" />

          {/* Country Selector */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="./src/assets/IndianFlag.png"
              alt="India Flag"
              className="w-6 h-4 object-cover rounded"
            />
            <FiChevronDown size={18} className="text-gray-600" />
          </div>

          {/* Login Button */}
          <LoginButton />

          {/* Sign Up Button */}
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all">
            Sign Up →
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          <FiMenu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden w-full bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-800 text-[16px] font-medium">
            <li>Payments</li>
            <li>Banking+</li>
            <li>Payroll</li>
            <li>Engage</li>
            <li>Partners</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>

          <div className="mt-4">
            <LoginButton />
            <button className="bg-blue-600 text-white w-full mt-3 py-2 rounded-md font-semibold">
              Sign Up →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
