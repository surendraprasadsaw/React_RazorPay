import React, { useEffect, useState } from 'react';
import ProductCard from '../Cards/ProductCard.jsx';
import ScrollRevealSection from '../Sections/ScrollRevealSection.jsx';

export default function TabsContent({ activeTab }) {
  // activeTab.products is an array of product objects {image, title, description}
  // Key the section by activeTab.key so it re-mounts and slides up from bottom on change
  return (
    <div className="mt-8">
      <ScrollRevealSection key={activeTab.key} className="bg-white p-8 rounded-lg shadow-soft-lg">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">{activeTab.title}</h2>

        <div className="grid px-6 py-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeTab.products.map((p, idx) => (
            <ProductCard
              key={idx}
              image={p.image}
              title={p.title}
              description={p.description}
              badge={p.badge}
            />
          ))}
        </div>
      </ScrollRevealSection>
    </div>
  );
}
