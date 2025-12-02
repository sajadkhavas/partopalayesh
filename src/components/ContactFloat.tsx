import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
const ContactFloat = () => {
  const {
    language
  } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneNumber = "989123456789";
  const whatsappMessage = language === 'fa' ? "سلام 👋\nاز سایت پترو پالایش تماس می‌گیرم 🔬\nسوال یا درخواست مشاوره دارم..." : "Hello 👋\nI'm contacting from Petro Palayesh website 🔬\nI have a question or consultation request...";
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return <div ref={containerRef} className={`fixed bottom-[100px] right-6 z-[9998] font-sans ${isOpen ? 'active' : ''}`}>
      {/* Menu Items */}
      <div className={`absolute bottom-20 right-0 flex flex-col gap-3 transition-all duration-[400ms] ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-5'}`}>
        <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-background text-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 min-w-[180px] justify-end border-r-4 border-[#25d366] hover:-translate-x-2">
          <span className="font-semibold text-sm">
            {language === 'fa' ? 'چت در واتس‌اپ' : 'Chat on WhatsApp'}
          </span>
          <svg className="w-6 h-6 text-[#25d366]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.298-.298.497-.497.198-.198.297-.435.297-.703 0-.297-.149-.546-.446-.744-.297-.198-1.057-.497-1.43-.497-.373 0-.67.149-.969.446-.298.298-.497 1.057-.497 1.728 0 .67.447 1.315.944 1.728.497.413 1.19.946 2.006 1.523.816.577 1.487.99 2.006 1.189.52.198 1.016.05 1.39-.248.373-.298.818-.893 1.017-1.39.198-.497.198-.893.149-1.042-.05-.149-.198-.248-.497-.347zM12 2C6.48 2 2 6.48 2 12c0 2.71 1.078 5.164 2.828 6.969L3 21l2.031-.828C6.836 20.922 9.29 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-2.366 0-4.55-.99-6.098-2.625l-.426-.36 3.073-.785c.655.54 1.43.85 2.25.85 3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7c0 1.82.69 3.484 1.82 4.75l-.785 3.073.36-.426C7.45 19.01 9.634 20 12 20z" />
          </svg>
        </a>

        <a href={`tel:+${phoneNumber}`} className="flex items-center gap-3 bg-background text-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 min-w-[180px] justify-end border-r-4 border-primary hover:-translate-x-2">
          <span className="font-semibold text-sm">
            {language === 'fa' ? 'تماس تلفنی' : 'Phone Call'}
          </span>
          <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
      </div>

      {/* Main Button */}
      
    </div>;
};
export default ContactFloat;