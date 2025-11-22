import React from 'react';

export default function ProductCard({ image, title, description, badge }) {
  return (
    <article className="bg-white p-6 rounded-xl shadow-sm hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-[1.01] duration-300 ease-card overflow-hidden">
      <div className="h-56 bg-slate-50 p-4 flex items-center justify-center">
        <img src={image} alt={title} className="object-cover w-full h-full rounded-md" />
      </div>

      <div className="p-6 border-t">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
    </article>
  );
}
