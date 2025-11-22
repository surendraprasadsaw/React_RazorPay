import React, { useState } from "react";
import TabsHeader from "./Tabs/TabsHeader";
import TabsContent from "./Tabs/TabsContent";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card1.png";
import card3 from "../../assets/card1.png";
import card4 from "../../assets/card1.png";
import card5 from "../../assets/card1.png";
import card6 from "../../assets/card1.png";

// ---------------------------
// TAB DATA
// ---------------------------
const TABS = [
  {
    key: "accept",
    label: "Accept Payments",
    title: "Accept Payments",
    products: [
      {
        image: card1,
        title: "Payment Gateway",
        description: "Offer a seamless payment experience on your website or app",
      },
      {
        image: card2,
        title: "Payment Button",
        description: "Effortlessly add a Pay Now button without coding",
      },
      {
        image: card3,
        title: "Payment Links",
        description: "Create and share links to accept payments instantly",
      },
      {
        image: card4,
        title: "Razorpay POS",
        description: "Best in-store POS payment solution",
      },
    ],
  },

  {
    key: "payouts",
    label: "Make Payouts",
    title: "Make Payouts",
    products: [
      { image: card5, title: "API & Bulk Payouts", description: "Make multiple payouts with a single click" },
      { image: card6, title: "Source to Pay", description: "Optimize & automate vendor payments" },
      { image: card2, title: "Payout Links", description: "Send payout links instantly" },
      { image: card4, title: "Tax Payments", description: "Pay taxes online easily" },
    ],
  },

  {
    key: "banking",
    label: "Start Business Banking",
    title: "Start Business Banking",
    products: [
      { image: card1, title: "Current Account", description: "Smart current account for startups" },
      { image: card2, title: "Escrow Account", description: "Secure & automated escrow transfers" },
      { image: card3, title: "Forex Management", description: "Manage foreign funding easily" },
      { image: card4, title: "Accounting Integration", description: "Auto-sync with accounting tools" },
    ],
  },
];

export default function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(TABS.length - 1);

  return (
    <div className="bg-gray-50 py-14 relative">

      <div className="max-w-7xl mx-auto px-6">

        {/* -------------------------------------------
            Sticky Header Tabs (Always on top)
        ------------------------------------------- */}
        <div className="bg-white sticky top-20 z-50 py-2 px-6 rounded-lg shadow-sm">
          <TabsHeader
            tabs={TABS}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>


        {/* -------------------------------------------
            STACKED SECTIONS LIKE RAZORPAY
        ------------------------------------------- */}
        <div className="relative overflow-visible px-4 mt-8 space-y-20">

          {TABS.map((tab, index) => (
            <div
              key={tab.key}
              className={`
                sticky
                top-50
                transition-all duration-700 ease-[cubic-bezier(0.4,0.0,0.2,1)]
                ${index <= activeIndex ? "z-40" : "z-0 opacity-0 translate-y-10"}
              `}
            >
              
              {/* BACKGROUND LAYER EFFECT */}
              <div className="absolute inset-0 -z-10 scale-[1.02] bg-white shadow-xl rounded-xl opacity-90"></div>

              {/* TAB CONTENT */}
              <TabsContent activeTab={tab}/>
              

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
