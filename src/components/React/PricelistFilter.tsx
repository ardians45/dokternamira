import React, { useState } from 'react';
import { Tag, Sparkles, HeartPulse, Droplet, ShoppingBag, Scissors } from 'lucide-react';

interface PriceItem {
  name: string;
  price: string;
  category: 'facial' | 'peeling' | 'bekam' | 'body' | 'produk' | 'khitan';
}

const priceData: PriceItem[] = [
  // Produk Sehat & Skincare
  { name: 'Raw Honey Akasia Sumatra (1000g / 1 kg)', price: 'Rp 100.000', category: 'produk' },
  { name: 'Raw Honey Akasia Sumatra (500g)', price: 'Rp 75.000', category: 'produk' },
  { name: 'Promo Madu Multiflora (Ecer 1 kg)', price: 'Rp 65.000/kg', category: 'produk' },
  { name: 'Promo Madu Multiflora (Grosir 1-10 kg)', price: 'Rp 50.000/kg', category: 'produk' },
  { name: 'Promo Madu Multiflora (Grosir 11-50 kg)', price: 'Rp 48.000/kg', category: 'produk' },
  { name: 'Promo Madu Multiflora (Grosir 51-100 kg)', price: 'Rp 46.000/kg', category: 'produk' },
  { name: 'Serum Brightening by Namglow (BPOM)', price: 'Rp 99.000', category: 'produk' },
  { name: 'Cream Racikan Gatal & Kulit Menahun (Resep Dokter)', price: 'Rp 100.000', category: 'produk' },

  // Khitan & Sunat
  { name: 'Sunat / Khitan Anak & Dewasa (Klinik & Homecare)', price: 'Hubungi WA', category: 'khitan' },

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

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'produk': return <ShoppingBag size={16} />;
      case 'khitan': return <Scissors size={16} />;
      case 'facial': return <Sparkles size={16} />;
      case 'peeling': return <Tag size={16} />;
      case 'bekam': return <HeartPulse size={16} />;
      case 'body': return <Droplet size={16} />;
      default: return null;
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'produk': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'khitan': return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case 'facial': return 'text-pink-500 bg-pink-50 border-pink-200';
      case 'peeling': return 'text-purple-500 bg-purple-50 border-purple-200';
      case 'bekam': return 'text-red-500 bg-red-50 border-red-200';
      case 'body': return 'text-blue-500 bg-blue-50 border-blue-200';
      default: return 'text-slate-500 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm border ${
            activeCategory === 'all'
              ? 'bg-slate-900 text-white border-slate-900 shadow-md transform -translate-y-0.5'
              : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
          }`}
        >
          Semua Layanan & Produk
        </button>
        <button
          onClick={() => setActiveCategory('produk')}
          className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm border flex items-center space-x-2 ${
            activeCategory === 'produk'
              ? 'bg-amber-600 text-white border-amber-600 shadow-md transform -translate-y-0.5'
              : 'bg-white text-slate-600 border-slate-200 hover:border-amber-200 hover:bg-amber-50'
          }`}
        >
          <ShoppingBag size={16} className={activeCategory === 'produk' ? 'text-white' : 'text-amber-600'} />
          <span>Produk Sehat</span>
        </button>
        <button
          onClick={() => setActiveCategory('khitan')}
          className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm border flex items-center space-x-2 ${
            activeCategory === 'khitan'
              ? 'bg-emerald-600 text-white border-emerald-600 shadow-md transform -translate-y-0.5'
              : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-200 hover:bg-emerald-50'
          }`}
        >
          <Scissors size={16} className={activeCategory === 'khitan' ? 'text-white' : 'text-emerald-600'} />
          <span>Sunat / Khitan</span>
        </button>
        <button
          onClick={() => setActiveCategory('facial')}
          className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm border flex items-center space-x-2 ${
            activeCategory === 'facial'
              ? 'bg-pink-500 text-white border-pink-500 shadow-md transform -translate-y-0.5'
              : 'bg-white text-slate-600 border-slate-200 hover:border-pink-200 hover:bg-pink-50'
          }`}
        >
          <Sparkles size={16} className={activeCategory === 'facial' ? 'text-white' : 'text-pink-500'} />
          <span>Facial</span>
        </button>
        <button
          onClick={() => setActiveCategory('peeling')}
          className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm border flex items-center space-x-2 ${
            activeCategory === 'peeling'
              ? 'bg-purple-500 text-white border-purple-500 shadow-md transform -translate-y-0.5'
              : 'bg-white text-slate-600 border-slate-200 hover:border-purple-200 hover:bg-purple-50'
          }`}
        >
          <Tag size={16} className={activeCategory === 'peeling' ? 'text-white' : 'text-purple-500'} />
          <span>Peeling</span>
        </button>
        <button
          onClick={() => setActiveCategory('bekam')}
          className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm border flex items-center space-x-2 ${
            activeCategory === 'bekam'
              ? 'bg-red-500 text-white border-red-500 shadow-md transform -translate-y-0.5'
              : 'bg-white text-slate-600 border-slate-200 hover:border-red-200 hover:bg-red-50'
          }`}
        >
          <HeartPulse size={16} className={activeCategory === 'bekam' ? 'text-white' : 'text-red-500'} />
          <span>Bekam</span>
        </button>
        <button
          onClick={() => setActiveCategory('body')}
          className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm border flex items-center space-x-2 ${
            activeCategory === 'body'
              ? 'bg-blue-500 text-white border-blue-500 shadow-md transform -translate-y-0.5'
              : 'bg-white text-slate-600 border-slate-200 hover:border-blue-200 hover:bg-blue-50'
          }`}
        >
          <Droplet size={16} className={activeCategory === 'body' ? 'text-white' : 'text-blue-500'} />
          <span>Body & Infus</span>
        </button>
      </div>

      {/* Grid Item List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {filteredPrices.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="group relative p-5 bg-white rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-premium transition-all duration-300 flex justify-between items-center overflow-hidden"
          >
            {/* Category color indicator line */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${
              item.category === 'produk' ? 'bg-amber-500' :
              item.category === 'khitan' ? 'bg-emerald-500' :
              item.category === 'facial' ? 'bg-pink-400' :
              item.category === 'peeling' ? 'bg-purple-400' :
              item.category === 'bekam' ? 'bg-red-400' : 'bg-blue-400'
            }`}></div>

            <div className="flex items-center space-x-4 pl-2">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${getCategoryColor(item.category)}`}>
                {getCategoryIcon(item.category)}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-900 group-hover:text-teal-deep transition-colors text-sm md:text-base">{item.name}</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">{item.category}</span>
              </div>
            </div>
            <div className="text-right shrink-0 ml-4">
              <span className="inline-block font-extrabold text-teal-deep bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-lg text-sm group-hover:bg-teal-deep group-hover:text-white transition-colors">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {filteredPrices.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          <p>Belum ada data untuk kategori ini.</p>
        </div>
      )}
    </div>
  );
}
