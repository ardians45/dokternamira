import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  name: string;
  role: string;
  rating: number;
  time: string;
  text: string;
  badge?: string;
}

const reviewsData: Review[] = [
  {
    name: "Maylia Dwi Nanda",
    role: "Pasien Homecare",
    rating: 5,
    time: "10 bulan lalu",
    text: "Sangat baik sekali, dokter maupun perawatnya.. sabar dan mampu menjelaskan dengan baik dan mudah dimengerti. Saya homecare, ini sangat membantu sekali.. bahkan sebelum infus habis, perawat nya sudah datang lagi.. kakak2nya asik, telaten, dan sabar sekali hehe.. bakalan langganan berobat disini.",
    badge: "Ulasan Google Maps"
  },
  {
    name: "Linda Mahalesi",
    role: "Pasien Bekam Sunnah",
    rating: 5,
    time: "7 bulan lalu",
    text: "Alhamdulillah pelayanan baik, perawat dan dokternya juga baik. Bekam pertama kali ke dokter Namira..... ternyata ndak sakit. Sudah mencoba bekam badan dan bekam aestetik. Insyaa alloh mau rutin.",
    badge: "Bekam Aesthetic"
  },
  {
    name: "Wahyu Wiji Astuti",
    role: "Local Guide Malang",
    rating: 5,
    time: "11 bulan lalu",
    text: "Masyaallah dokternya baik dan ramah.. Pertama kali coba bekam, ternyata tidak sakit. Setelah bekam badan dan kepala terasa lebih ringan dan tidak sering sakit kepala lagi. Makasih dokter,, next bakal datang lagi..",
    badge: "Local Guide"
  },
  {
    name: "Azka Ramadhani",
    role: "Pasien Umumi & Homecare",
    rating: 5,
    time: "11 bulan lalu",
    text: "Sukaaa banget ke dokter Namira. Dokternya ramah, tempat private dan nyaman, harga affordable, bisa home care. Periksa 1x langsung sembuh. Thankyou dokter Namira, sehat selalu ^^",
    badge: "Harga Affordable"
  },
  {
    name: "Dian Nopiyani",
    role: "Keluarga Pasien Homecare",
    rating: 5,
    time: "11 bulan lalu",
    text: "Dokter n pelayanannya SGT baik sekali,, sangat membantu sy yg wkt itu jg terkendala oleh biaya,, tp dokter ttp membantu dg mengirim perawat utk memberikan pelayanan medis utk suami sy,, jazakamullah Khairan katsiron.",
    badge: "Pelayanan Empatis"
  },
  {
    name: "frida lestari",
    role: "Pasien Surat Sehat",
    rating: 5,
    time: "10 bulan lalu",
    text: "Maa syaa Allah Bu dokter baik bgt, kita mendadak minta surat keterangan sehat, langsung gercep bu dooook, sangat membantu sekaaaliiiii.",
    badge: "Layanan Gercep"
  },
  {
    name: "Rizka Aulia Rahma",
    role: "Local Guide",
    rating: 5,
    time: "1 tahun lalu",
    text: "Cara membekamnya super enak, engga sakit. Sesuai petunjuk medis, mashaallah. Terimakasih banyak dokter namira. Inshaallah langganan, bakal rajin bekam lagi.",
    badge: "Bekam Medis"
  },
  {
    name: "Retno Asti Palupi",
    role: "Pasien Syar'i Care",
    rating: 5,
    time: "1 tahun lalu",
    text: "Alhamdulillah menemukan tempat treatment syar'i tanpa perlu khawatir. Dokternya ramah dan enak saat konsultasi. Buat yg mau treatment bisa menyesuaikan waktunya juga.",
    badge: "Treatment Syar'i"
  },
  {
    name: "wirdah meisyahrina",
    role: "Orang Tua Pasien Infus",
    rating: 5,
    time: "10 bulan lalu",
    text: "Dokter Namira ramah dan informatif. Tim telaten dan sabar. Jago banget masukin jarum buat infus. Anak ga pake nangis.",
    badge: "Infus Anak Safe"
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  const current = reviewsData[currentIndex];

  return (
    <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-6 sm:p-10 shadow-xl border border-teal-light/50 relative overflow-hidden">
      
      {/* Top Badge & Google Rating Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center pb-6 border-b border-slate-200/80 gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-teal-light text-teal-deep flex items-center justify-center font-extrabold text-xl shadow-sm">
            5.0
          </div>
          <div>
            <div className="flex items-center space-x-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-xs text-slate-500 font-semibold">
              Rating 5.0 dari 41+ Ulasan Asli Google Maps
            </span>
          </div>
        </div>

        <a
          href="https://maps.app.goo.gl/4Jq9rNgjSmcEqxQR6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-teal-deep bg-teal-light/60 hover:bg-teal-light px-4 py-2 rounded-full border border-teal-soft/30 transition-all"
        >
          <span>Lihat Ulasan di Google Maps</span>
        </a>
      </div>

      {/* Main Quote Body */}
      <div className="py-8 relative">
        <Quote size={48} className="text-teal-soft/15 absolute -top-2 -left-2 pointer-events-none" />
        
        <div className="relative z-10 space-y-4">
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-medium">
            "{current.text}"
          </p>

          <div className="flex items-center justify-between pt-4">
            <div>
              <h4 className="font-extrabold text-slate-800 text-sm">{current.name}</h4>
              <span className="text-xs text-slate-500">{current.role} • {current.time}</span>
            </div>
            {current.badge && (
              <span className="bg-teal-light text-teal-deep text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {current.badge}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Slider Navigation Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
        <span className="text-xs font-bold text-slate-400">
          Ulasan {currentIndex + 1} dari {reviewsData.length}
        </span>

        <div className="flex items-center space-x-2">
          <button
            onClick={prevSlide}
            className="p-2.5 rounded-full bg-slate-100 hover:bg-teal-light text-slate-700 hover:text-teal-deep transition-all focus:outline-none"
            aria-label="Ulasan Sebelumnya"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2.5 rounded-full bg-slate-100 hover:bg-teal-light text-slate-700 hover:text-teal-deep transition-all focus:outline-none"
            aria-label="Ulasan Selanjutnya"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

    </div>
  );
}
