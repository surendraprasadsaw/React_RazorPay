import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t pt-16 pb-10 text-[14px]">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">

        {/* ─────────────────────────────
            COLUMN 1: LOGO + PARAGRAPHS
        ───────────────────────────── */}
        <div className="space-y-4 text-[14px] leading-[22px] text-gray-600">
          <img 
            src="./razorpay-seeklogo.svg"
            alt="Razorpay"
            className="w-32"
          />

          <p>
            Razorpay is the only payments solution in India that allows businesses
            to accept, process and disburse payments with its product suite. It
            gives you access to all payment modes including credit card, debit
            card, netbanking, UPI and popular wallets including JioMoney,
            Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.
          </p>

          <p>
            RazorpayX supercharges your business banking experience, bringing
            effectiveness, efficiency, and excellence to all financial processes.
            With RazorpayX, businesses can get access to fully-functional current
            accounts, supercharge their payouts and automate payroll compliance.
          </p>

          <p>
            Manage your marketplace, automate bank transfers, collect recurring
            payments, share invoices with customers and avail working capital
            loans — all from a single platform. Fast-forward your business with
            Razorpay.
          </p>

          <p>
            Disclaimer: The RazorpayX powered Current Account and VISA corporate
            credit card are provided by RBI licensed banks. Your RazorpayX powered
            current account is provided by our partner banks i.e., ICICI, RBL,
            Yes Bank, in accordance with RBI regulations. RazorpayX itself is not
            a bank and doesn’t hold or claim to hold a banking license.
          </p>

          <div className="flex gap-4 pt-2">
            <img src="/assets/pci.png" alt="PCI DSS" className="w-16" />
            <img src="/assets/iso.png" alt="ISO" className="w-16" />
          </div>
        </div>

        {/* ─────────────────────────────
            COLUMN 2: ACCEPT / PAYROLL / PARTNER / MORE
        ───────────────────────────── */}
        <div className="space-y-8">
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">ACCEPT PAYMENTS</h3>
            <ul className="space-y-2 text-blue-700 font-medium">
              <li>Payment Aggregator</li>
              <li>Payment Gateway</li>
              <li>Payment Pages</li>
              <li>Payment Links</li>
              <li className="flex items-center gap-2">Razorpay POS <span className="text-xs bg-green-100 text-green-700 px-2 py-[2px] rounded">NEW</span></li>
              <li>QR Codes</li>
              <li>Subscriptions</li>
              <li>Smart Collect</li>
              <li>Optimizer</li>
              <li>Instant Settlements</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">PAYROLL</h3>
            <ul className="space-y-2 text-blue-700 font-medium">
              <li>RazorpayX Payroll</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">BECOME A PARTNER</h3>
            <ul className="space-y-2 text-blue-700 font-medium">
              <li>Refer and Earn</li>
              <li>Onboarding APIs</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">MORE</h3>
            <ul className="space-y-2 text-blue-700 font-medium">
              <li>Route</li>
              <li>Invoices</li>
              <li>Freelancer Payments</li>
              <li>International Payments</li>
            </ul>
          </div>

        </div>

        {/* ─────────────────────────────
            COLUMN 3: BANKING / DEVS / RESOURCES / SOLUTIONS
        ───────────────────────────── */}
        <div className="space-y-8">

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">BANKING PLUS</h3>
            <ul className="space-y-2 text-blue-700 font-medium">
              <li>RazorpayX</li>
              <li>Source to pay</li>
              <li>Current Accounts</li>
              <li>Payouts</li>
              <li>Payout Links</li>
              <li>Corporate Credit Card</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">DEVELOPERS</h3>
            <ul className="space-y-2 text-blue-700 font-medium">
              <li>Docs</li>
              <li>Integrations</li>
              <li>API Reference</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">RESOURCES</h3>
            <ul className="space-y-2 text-blue-700 font-medium">
              <li>Blog</li>
              <li>Learn</li>
              <li>Customer Stories</li>
              <li>Events</li>
              <li>Chargeback Guide</li>
              <li>Settlement Guide</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">SOLUTIONS</h3>
            <ul className="space-y-2 text-blue-700 font-medium">
              <li>Education</li>
              <li>E-commerce</li>
            </ul>
          </div>

        </div>

        {/* ─────────────────────────────
            COLUMN 4: COMPANY / SUPPORT / SOCIAL / ADDRESS
        ───────────────────────────── */}
        <div className="space-y-8">

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">COMPANY</h3>
            <ul className="space-y-2 text-blue-700 font-medium">
              <li>About Us</li>
              <li>Careers</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Grievance Redressal</li>
              <li>Responsible Disclosure</li>
              <li>Partners</li>
              <li>White papers</li>
              <li>Corporate Information</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">HELP & SUPPORT</h3>
            <ul className="space-y-2 text-blue-700 font-medium">
              <li>Support</li>
              <li>Knowledge base</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">FIND US ONLINE</h3>
            <div className="flex items-center gap-4 text-xl text-blue-700">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <FaGithub />
              <FaLinkedinIn />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">REGD. OFFICE ADDRESS</h3>
            <p className="text-gray-600 leading-[22px] text-[14px]">
              Razorpay Software Limited,<br />
              1st Floor, SJR Cyber,<br />
              22 Laskar Hosur Road, Adugodi,<br />
              Bengaluru, 560030,<br />
              Karnataka, India<br />
              CIN: U72200KA2013PLC097389
            </p>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <p className="text-center text-sm text-gray-500 mt-12">
        © Razorpay 2025. All Rights Reserved.
      </p>

    </footer>
  );
}
