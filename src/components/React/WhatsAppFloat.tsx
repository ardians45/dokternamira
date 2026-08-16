import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

interface WhatsAppFloatProps {
  defaultMessage?: string;
  phoneNumber?: string;
}

export default function WhatsAppFloat({
  defaultMessage = "Halo Dokter Namira, saya ingin bertanya mengenai layanan kesehatan di Praktek Dokter Namira...",
  phoneNumber = "6285270001948"
}: WhatsAppFloatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(defaultMessage);

  useEffect(() => {
    setMessage(defaultMessage);
  }, [defaultMessage]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Interactive Popup Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-teal-light overflow-hidden transition-all duration-300 transform scale-100">
          <div className="bg-teal-deep text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-teal-soft flex items-center justify-center font-bold text-white text-lg">
                  N
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-teal-deep rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm">Dokter Namira</h4>
                <p className="text-xs text-teal-light opacity-90">Praktek Dokter Umum & Homecare</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-teal-light transition-colors"
              aria-label="Tutup Chat"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-4 bg-slate-50 text-slate-800 text-xs">
            <div className="bg-white p-3 rounded-lg border border-slate-200 mb-3 text-slate-700 leading-relaxed shadow-sm">
              <p className="font-semibold text-teal-deep mb-1">Salam Sehat! 👋</p>
              Silakan tuliskan pertanyaan atau jadwal reservasi Anda. Kami siap membantu konsultasi Anda secara profesional.
            </div>

            <form onSubmit={handleSend} className="space-y-3">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full p-2.5 text-xs text-slate-800 bg-white rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-soft focus:border-transparent outline-none resize-none"
                placeholder="Tulis pesan Anda..."
                required
              />
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 transition-colors shadow-md"
              >
                <MessageCircle size={16} />
                <span>Kirim via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Konsultasi WhatsApp Dokter Namira"
      >
        <MessageCircle size={28} className="animate-pulse" />
        <span className="hidden md:inline font-semibold text-sm pr-1">Konsultasi WA</span>
      </button>
    </div>
  );
}
