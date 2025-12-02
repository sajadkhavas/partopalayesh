import { useState, useEffect, useRef } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { WHATSAPP_NUMBER, COMPANY_PHONE } from "@/config";

const ContactFloat = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const whatsappMessage = language === 'fa' 
    ? "سلام 👋\nاز سایت پترو پالایش تماس می‌گیرم 🔬\nسوال یا درخواست مشاوره دارم..." 
    : "Hello 👋\nI'm contacting from Petro Palayesh website 🔬\nI have a question or consultation request...";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="fixed bottom-24 right-6 z-[9998] font-sans">
      {/* Menu Items */}
      <div 
        className={`absolute bottom-16 right-0 flex flex-col gap-3 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
        }`}
      >
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 bg-background text-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 min-w-[180px] justify-end border-r-4 border-[#25d366] hover:-translate-x-2"
          aria-label={language === 'fa' ? 'چت در واتس‌اپ' : 'Chat on WhatsApp'}
        >
          <span className="font-semibold text-sm">
            {language === 'fa' ? 'چت در واتس‌اپ' : 'Chat on WhatsApp'}
          </span>
          <MessageCircle className="w-6 h-6 text-[#25d366]" />
        </a>

        <a 
          href={`tel:${COMPANY_PHONE}`} 
          className="flex items-center gap-3 bg-background text-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 min-w-[180px] justify-end border-r-4 border-primary hover:-translate-x-2"
          aria-label={language === 'fa' ? 'تماس تلفنی' : 'Phone Call'}
        >
          <span className="font-semibold text-sm">
            {language === 'fa' ? 'تماس تلفنی' : 'Phone Call'}
          </span>
          <Phone className="w-6 h-6 text-primary" />
        </a>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'rotate-45' : ''
        }`}
        aria-label={language === 'fa' ? 'باز کردن منوی تماس' : 'Open contact menu'}
        title={language === 'fa' ? 'تماس با ما' : 'Contact us'}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default ContactFloat;
