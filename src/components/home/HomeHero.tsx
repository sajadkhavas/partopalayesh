import { Link } from 'react-router-dom';
import { Clock, Users, Award, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-premium-lab.jpg';

const HomeHero = () => {
  const { language, t } = useLanguage();
  const ArrowIcon = language === 'fa' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 md:pt-32">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt={language === 'fa' ? 'تجهیزات آزمایشگاهی پیشرفته' : 'Advanced Laboratory Equipment'} 
          className="w-full h-full object-cover" 
          loading="eager" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy-dark/90 to-teal-dark/85" />
        
        {/* Subtle decorative elements - reduced to 2 */}
        <div className="absolute inset-0 opacity-15">
          <div 
            className="absolute top-1/4 left-1/4 w-40 h-40 border border-teal-light/40 rounded-full animate-pulse" 
            style={{ animationDuration: '4s' }} 
          />
          <div 
            className="absolute bottom-1/3 right-1/4 w-32 h-32 border border-teal/30 rounded-full animate-pulse" 
            style={{ animationDuration: '5s' }} 
          />
        </div>
      </div>

      <div className="relative z-10 container-wide text-white pt-12 pb-12 px-4">
        {/* Top Badge */}
        <div className="mb-6 animate-fade-in">
          <Badge 
            variant="secondary" 
            className="bg-teal/20 text-white border-teal-light/40 backdrop-blur-md px-6 py-2.5 text-sm font-bold rounded-full shadow-glass"
          >
            ✦ {language === 'fa' ? 'پیشرو در صنعت آزمایشگاهی ایران' : 'Leading Lab Equipment Provider in Iran'} ✦
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-[1.2] sm:leading-tight animate-fade-in max-w-5xl bg-gradient-to-br from-white via-teal-light to-white bg-clip-text text-transparent drop-shadow-2xl">
          {language === 'fa' ? 'تجهیزات آزمایشگاهی با استانداردهای جهانی' : 'World-Class Laboratory Equipment'}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl max-w-3xl mb-4 sm:mb-6 md:mb-7 lg:mb-8 text-white/95 leading-relaxed animate-fade-in font-medium">
          {language === 'fa' 
            ? 'تأمین و پشتیبانی تجهیزات پیشرفته برای صنایع نفت، گاز، پتروشیمی و آزمایشگاه‌های تحقیقاتی' 
            : 'Premium equipment supply & support for oil, gas, petrochemical & research laboratories'}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-8 md:mb-10 animate-fade-in">
          <Link to="/contact" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-teal to-teal-light hover:from-teal-light hover:to-teal text-white font-bold shadow-xl hover:shadow-glow hover:scale-105 transition-all text-base md:text-lg px-6 md:px-10 py-5 md:py-7 rounded-xl"
            >
              {language === 'fa' ? 'درخواست مشاوره رایگان' : 'Free Consultation'}
              <ArrowIcon className="w-5 h-5" />
            </Button>
          </Link>
          
          <Link to="/products" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto bg-white/10 text-white border-2 border-white/40 backdrop-blur-md hover:bg-white/20 hover:border-white/70 transition-all font-bold text-base md:text-lg px-6 md:px-10 py-5 md:py-7 rounded-xl shadow-glass"
            >
              {language === 'fa' ? 'کاتالوگ محصولات' : 'Product Catalog'}
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 md:gap-6 text-white animate-fade-in mt-4">
          <TrustIndicator icon={Clock} value="20+" label={language === 'fa' ? 'سال تجربه' : 'Years'} />
          <TrustIndicator icon={Users} value="500+" label={language === 'fa' ? 'مشتری فعال' : 'Clients'} />
          <TrustIndicator icon={Award} value="ISO" label={language === 'fa' ? 'گواهینامه‌ها' : 'Certified'} />
        </div>
      </div>
    </section>
  );
};

const TrustIndicator = ({ 
  icon: Icon, 
  value, 
  label 
}: { 
  icon: React.ElementType; 
  value: string; 
  label: string;
}) => (
  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 md:px-5 py-2.5 md:py-3 shadow-glass w-full sm:w-auto">
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal/30 flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 md:w-6 md:h-6 text-teal-light" />
    </div>
    <div>
      <div className="text-xl md:text-2xl font-extrabold text-teal-light">{value}</div>
      <div className="text-xs md:text-sm text-white/80 font-medium">{label}</div>
    </div>
  </div>
);

export default HomeHero;
