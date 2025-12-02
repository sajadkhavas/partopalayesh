import { Link } from 'react-router-dom';
import { CheckCircle, GraduationCap, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HomeServices = () => {
  const { language } = useLanguage();
  const ArrowIcon = language === 'fa' ? ArrowLeft : ArrowRight;

  const services = language === 'fa' 
    ? [
        'کالیبراسیون با استاندارد ISO 17025',
        'نصب و راه‌اندازی تخصصی',
        'قراردادهای نگهداری پیشگیرانه',
        'آموزش تخصصی اپراتورها',
      ]
    : [
        'ISO 17025 calibration services',
        'Professional installation & commissioning',
        'Preventive maintenance contracts',
        'Specialized operator training',
      ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {language === 'fa' ? 'خدمات کالیبراسیون و سرویس' : 'Calibration & Service'}
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {language === 'fa' 
                ? 'تیم فنی پتروپالایش کو خدمات جامع نصب، راه‌اندازی، کالیبراسیون و نگهداری پیشگیرانه را برای تضمین عملکرد پایدار و دقیق تجهیزات شما ارائه می‌دهد.' 
                : 'PetroPalayeshco technical team provides comprehensive installation, commissioning, calibration and preventive maintenance services to ensure stable and accurate operation of your equipment.'}
            </p>
            <ul className="space-y-3 mb-8">
              {services.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/services/calibration">
              <Button className="gradient-accent text-white shadow-glow-accent">
                {language === 'fa' ? 'مشاهده خدمات کالیبراسیون' : 'View Calibration Services'}
                <ArrowIcon className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant-xl">
              <img 
                src="/precision-instruments.jpg" 
                alt={language === 'fa' ? 'خدمات کالیبراسیون' : 'Calibration Services'} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-elegant-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-lg">ISO 17025</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'fa' ? 'گواهی کالیبراسیون' : 'Calibration Certificate'}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
