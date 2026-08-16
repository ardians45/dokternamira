import React, { useState } from 'react';
import { 
  Home, 
  Stethoscope, 
  ShieldAlert, 
  Sparkle, 
  Droplet, 
  Calendar, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ChevronRight,
  Flame
} from 'lucide-react';

interface ServiceOption {
  id: string;
  name: string;
  category: string;
  icon: any;
  desc: string;
}

const services: ServiceOption[] = [
  { 
    id: 'homecare', 
    name: 'Dokter Homecare', 
    category: 'Kunjungan Rumah', 
    icon: Home,
    desc: 'Dokter visit langsung ke rumah Anda' 
  },
  { 
    id: 'umum', 
    name: 'Konsultasi Umum', 
    category: 'Praktik / Online', 
    icon: Stethoscope,
    desc: 'Pemeriksaan & konsultasi resep dokter' 
  },
  { 
    id: 'ims', 
    name: 'Konsultasi IMS', 
    category: '100% Rahasia & Privat', 
    icon: ShieldAlert,
    desc: 'Penanganan infeksi menular seksual objektif' 
  },
  { 
    id: 'syari', 
    name: "Syar'i Beauty Care", 
    category: 'Khusus Wanita', 
    icon: Sparkle,
    desc: 'Facial & Peeling medis privat' 
  },
  { 
    id: 'booster_bekam', 
    name: 'Infus Vitamin / Bekam', 
    category: 'Terapi Medis', 
    icon: Flame,
    desc: 'Booster daya tahan & bekam steril' 
  }
];

const timeSlots = [
  { id: 'segera', label: 'Hari Ini (Segera/Urgent)' },
  { id: 'pagi', label: 'Besok Pagi (08:00 - 12:00)' },
  { id: 'sore', label: 'Besok Sore (13:00 - 17:00)' },
  { id: 'malam', label: 'Besok Malam (18:00 - 20:00)' }
];

export default function QuickBookingWidget({ phoneNumber = '6285270001948' }: { phoneNumber?: string }) {
  const [selectedService, setSelectedService] = useState('homecare');
  const [selectedTime, setSelectedTime] = useState('segera');
  const [patientName, setPatientName] = useState('');
  const [location, setLocation] = useState('');

  const currentServiceObj = services.find(s => s.id === selectedService) || services[0];
  const currentTimeObj = timeSlots.find(t => t.id === selectedTime) || timeSlots[0];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    let text = `Halo Dokter Namira, saya ingin reservasi/konsultasi layanan kesehatan:\n\n`;
    text += `📋 *Layanan:* ${currentServiceObj.name} (${currentServiceObj.category})\n`;
    text += `⏰ *Waktu Diinginkan:* ${currentTimeObj.label}\n`;
    if (patientName.trim()) {
      text += `👤 *Nama:* ${patientName.trim()}\n`;
    }
    if (location.trim()) {
      text += `📍 *Area/Lokasi:* ${location.trim()}\n`;
    }
    text += `\nMohon informasi ketersediaan jadwal dokter. Terima kasih.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="w-full max-w-lg bg-white/95 backdrop-blur-xl border border-white/90 shadow-glass rounded-3xl p-5 sm:p-7 relative overflow-hidden transition-all">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none"></div>

      {/* Header Widget */}
      <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full text-[11px] font-extrabold text-emerald-800 uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Dokter Siaga Hari Ini</span>
          </div>
          <h3 className="font-display font-extrabold text-lg text-slate-900 mt-1.5 leading-snug">
            Cek Jadwal & Konsultasi Langsung
          </h3>
        </div>
        <div className="hidden sm:flex flex-col items-end text-[10px] text-slate-400">
          <span className="flex items-center gap-1 font-semibold text-teal-deep">
            <Clock size={12} /> Respon Cepat
          </span>
          <span>&lt; 15 Menit</span>
        </div>
      </div>

      <form onSubmit={handleBooking} className="mt-4 space-y-4">
        
        {/* Step 1: Pilih Layanan */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            1. Pilih Layanan Medis:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {services.map((srv) => {
              const Icon = srv.icon;
              const isSelected = selectedService === srv.id;
              return (
                <button
                  type="button"
                  key={srv.id}
                  onClick={() => setSelectedService(srv.id)}
                  className={`p-2.5 rounded-xl text-left border transition-all flex items-center gap-2.5 ${
                    isSelected
                      ? 'bg-teal-50/90 border-teal-deep text-teal-deep shadow-sm ring-1 ring-teal-deep/30'
                      : 'bg-slate-50/70 border-slate-200/80 text-slate-700 hover:bg-slate-100/80'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-teal-deep text-white' : 'bg-white text-slate-500 border border-slate-200'
                  }`}>
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold truncate">{srv.name}</p>
                    <p className="text-[10px] text-slate-500 truncate">{srv.category}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Waktu & Lokasi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              2. Waktu Kunjungan:
            </label>
            <div className="relative">
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-deep/20 focus:border-teal-deep appearance-none"
              >
                {timeSlots.map((slot) => (
                  <option key={slot.id} value={slot.id}>
                    {slot.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
                <ChevronRight size={14} class="transform rotate-90" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              3. Lokasi / Kecamatan:
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Cth: Merjosari / Dinoyo"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-deep/20 focus:border-teal-deep"
              />
            </div>
          </div>
        </div>

        {/* Step 3: Action Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-teal-deep hover:bg-teal-hover text-white font-bold py-3.5 px-6 rounded-2xl shadow-premium transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
          >
            <Send size={16} />
            <span className="text-sm">Konsultasikan via WhatsApp Sekarang</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500 font-medium">
          <span className="flex items-center gap-1">
            <ShieldCheck size={14} className="text-teal-deep shrink-0" />
            100% Privasi & Rekam Medis Dijaga
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 size={14} className="text-teal-deep shrink-0" />
            Tanpa Biaya Reservasi
          </span>
        </div>

      </form>
    </div>
  );
}
