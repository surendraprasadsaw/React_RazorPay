import React from 'react';
import Hero from '../../components/Hero/Hero.jsx';
import PaymentBanner from '../../components/Banner/PaymentBanner.jsx';
import ClientLogos from '../../components/ClientLogo/ClientLogo.jsx';
import ProductsSection from '../../components/ProductSection/ProductsSection.jsx';
export default function Home() {
  return (
    <div className="w-full bg-white text-gray-800">

      {/* HERO SECTION */}
      ,<Hero />
      {/* CLIENT LOGOS */}
      <ClientLogos />
      {/* PAYMENT BANNER */}
      <PaymentBanner />
      {/* PRODUCTS CAROUSEL */}
      {/* <ProductsSection /> */}
      <ProductsSection />

      
     

      

      {/* FEATURE GRID */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Why Choose <span className="text-blue-600">Our Platform?</span>
          </h2>

          <p className="text-center text-gray-600 mt-3 mb-12 max-w-2xl mx-auto">
            Experience the fastest integrations, lowest failure rates, and advanced
            payment technology for your business.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="p-6 shadow-md rounded-2xl hover:shadow-lg transition bg-white">
              <div className="text-blue-600 text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Fast Settlements</h3>
              <p className="text-gray-600">
                Quick transfer of payments directly to your bank account with advanced reconciliation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 shadow-md rounded-2xl hover:shadow-lg transition bg-white">
              <div className="text-blue-600 text-4xl mb-3">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                PCI DSS Level 1 compliant payment infrastructure with 24×7 fraud monitoring.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 shadow-md rounded-2xl hover:shadow-lg transition bg-white">
              <div className="text-blue-600 text-4xl mb-3">📊</div>
              <h3 className="text-xl font-semibold mb-2">Smart Dashboard</h3>
              <p className="text-gray-600">
                Track transactions, settlements, disputes, and analytics in real-time.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 shadow-md rounded-2xl hover:shadow-lg transition bg-white">
              <div className="text-blue-600 text-4xl mb-3">💰</div>
              <h3 className="text-xl font-semibold mb-2">Lowest Fees</h3>
              <p className="text-gray-600">
                Industry-low transaction charges with zero hidden costs or extra fees.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-6 shadow-md rounded-2xl hover:shadow-lg transition bg-white">
              <div className="text-blue-600 text-4xl mb-3">🌐</div>
              <h3 className="text-xl font-semibold mb-2">Global Support</h3>
              <p className="text-gray-600">
                Accept international cards & payments worldwide with ease.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-6 shadow-md rounded-2xl hover:shadow-lg transition bg-white">
              <div className="text-blue-600 text-4xl mb-3">⚙️</div>
              <h3 className="text-xl font-semibold mb-2">Developer Friendly</h3>
              <p className="text-gray-600">
                Plug-and-play SDKs, powerful APIs, and easy integrations for all platforms.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            Start Accepting Payments Today
          </h2>

          <p className="mt-4 text-lg text-blue-100 max-w-xl mx-auto">
            Create an account in minutes and unlock the full power of online payments.
          </p>

          <a
            href="#"
            className="mt-8 inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Create Account
          </a>
        </div>
      </section>
    </div>
  );
}
