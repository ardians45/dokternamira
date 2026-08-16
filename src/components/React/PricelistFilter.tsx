import React, { useState } from 'react';
import { Tag, Sparkles, HeartPulse, Droplet, CheckCircle2 } from 'lucide-react';

interface PriceItem {
  name: string;
  price: string;
  category: 'facial' | 'peeling' | 'bekam' | 'body';
}

const priceData: PriceItem[] = [
  // Facial
  { name: 'Facial For Teenagers', price: 'Rp 75.000', category: 'facial' },
  { name: 'Facial Detox', price: 'Rp 125.000', category: 'facial' },
  { name: 'Facial Pdt', price: 'Rp 125.000', category: 'facial' },
  { name: 'Microdermabrasi', price: 'Rp 125.000', category: 'facial' },
  { name: 'Eye Corrector', price: 'Rp 125.000', category: 'facial' },
  { name: 'Fire And Ice Sparkling Glow', price: 'Rp 125.000', category: 'facial' },
  { name: 'Facial Acne', price: 'Rp 150.000', category: 'facial' },
  { name: 'Facial Whitening', price: 'Rp 150.000', category: 'facial' },
  { name: 'Facial Carbon', price: 'Rp 150.000', category: 'facial' },
  { name: 'Facial Antiaging', price: 'Rp 150.000', category: 'facial' },
  { name: 'Facial Antioksidan', price: 'Rp 150.000', category: 'facial' },
  { name: 'Facial Olive Oil', price: 'Rp 150.000', category: 'facial' },
  { name: 'Facial Hydra', price: 'Rp 150.000', category: 'facial' },
  { name: 'Rf Facial', price: 'Rp 150.000', category: 'facial' },
  { name: 'Meso Non Needle Acne', price: 'Rp 150.000', category: 'facial' },
  { name: 'Meso Non Needle Whitening', price: 'Rp 150.000', category: 'facial' },
  { name: 'Facial Oxy', price: 'Rp 150.000', category: 'facial' },
  { name: 'Facial Oxy Whitening', price: 'Rp 200.000', category: 'facial' },
  { name: 'Facial Oxy Acne', price: 'Rp 200.000', category: 'facial' },
  { name: 'Facial Detox Oxy', price: 'Rp 200.000', category: 'facial' },

  // Peeling
  { name: 'Peeling Acne', price: 'Rp 150.000', category: 'peeling' },
  { name: 'Peeling Whitening', price: 'Rp 150.000', category: 'peeling' },
  { name: 'Peeling Melasma', price: 'Rp 150.000', category: 'peeling' },

  // Bekam & Fashdu
  { name: 'Bekam Basah Medis', price: 'Rp 100.000+', category: 'bekam' },
  { name: 'Bekam Api', price: 'Rp 150.000', category: 'bekam' },
  { name: 'Bekam Kombinasi', price: 'Rp 185.000', category: 'bekam' },
  { name: 'Terapi Fashdu Medis', price: 'Rp 150.000', category: 'bekam' },

  // Body Treatment
  { name: 'Injeksi Whitening', price: 'Rp 150.000+', category: 'body' },
  { name: 'Infus Whitening Booster', price: 'Rp 1.500.000+', category: 'body' },
  { name: 'Couter Milia', price: 'Rp 100.000+', category: 'body' },
];

export default function PricelistFilter() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredPrices = activeCategory === 'all'
    ? priceData
    : priceData.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-6">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeCategory === 'all'
              ? 'bg-teal-deep text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          Semua Treatment ({priceData.length})
        </button>
        <button
          onClick={() => setActiveCategory('facial')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1 ${
            activeCategory === 'facial'
              ? 'bg-teal-deep text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <Sparkles size={14} />
          <span>Facial (20)</span>
        </button>
        <button
          onClick={() => setActiveCategory('peeling')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1 ${
            activeCategory === 'peeling'
              ? 'bg-teal-deep text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <Tag size={14} />
          <span>Peeling (3)</span>
        </button>
        <button
          onClick={() => setActiveCategory('bekam')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1 ${
            activeCategory === 'bekam'
              ? 'bg-teal-deep text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <HeartPulse size={14} />
          <span>Bekam & Fashdu (4)</span>
        </button>
        <button
          onClick={() => setActiveCategory('body')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1 ${
            activeCategory === 'body'
              ? 'bg-teal-deep text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <Droplet size={14} />
          <span>Body & Infus (3)</span>
        </button>
      </div>

      {/* Grid Item List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredPrices.map((item, idx) => (
          <div
            key={idx}
            className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-teal-soft hover:shadow-md transition-all flex justify-between items-center text-xs"
          >
            <div className="flex items-center space-x-2 font-medium text-slate-800">
              <CheckCircle2 size={14} className="text-teal-soft shrink-0" />
              <span>{item.name}</span>
            </div>
            <span className="font-extrabold text-teal-deep bg-teal-light px-2.5 py-1 rounded-md shrink-0 ml-2">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
