import { HeadphonesIcon, Award, Wrench, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import valueConsulting from '@/assets/value-consulting.jpg';
import valueBrands from '@/assets/value-brands.jpg';

const HomeValueProps = () => {
  const { language } = useLanguage();

  const valueProps = [
    {
      icon: HeadphonesIcon,
      title: language === 'fa' ? 'مشاوره مهندسی قبل از خرید' : 'Pre-sale Engineering Consulting',
      desc: language === 'fa' ? 'تیم فنی متخصص برای انتخاب تجهیز مناسب پروژه شما' : 'Expert technical team to help select the right equipment for your project',
    },
    {
      icon: Award,
      title: language === 'fa' ? 'تأمین برندهای معتبر بین‌المللی' : 'Trusted International Brands',
      desc: language === 'fa' ? 'نمایندگی رسمی برندهای پیشرو جهانی با ضمانت اصالت' : 'Official distributor of leading global brands with authenticity guarantee',
    },
    {
      icon: Wrench,
      title: language === 'fa' ? 'نصب، راه‌اندازی و آموزش' : 'Installation & Training',
      desc: language === 'fa' ? 'خدمات نصب حرفه‌ای و آموزش تخصصی کاربران' : 'Professional installation services and specialized user training',
    },
    {
      icon: Shield,
      title: language === 'fa' ? 'کالیبراسیون و خدمات پس از فروش' : 'Calibration & After-Sales',
      desc: language === 'fa' ? 'خدمات کالیبراسیون با گواهی ISO و پشتیبانی مستمر' : 'ISO-certified calibration services and continuous support',
    },
  ];

  const images = [valueConsulting, valueBrands];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-wide">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {language === 'fa' ? 'چرا پتروپالایش کو؟' : 'Why PetroPalayeshco?'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'fa' 
              ? 'مزایای همکاری با یک تأمین‌کننده متخصص و مورد اعتماد' 
              : 'Benefits of partnering with a specialized and trusted supplier'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-elegant hover:shadow-elegant-xl transition-all duration-500"
            >
              {index < 2 && (
                <>
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={images[index]} 
                      alt={prop.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
                  </div>
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <prop.icon className="w-6 h-6 text-primary" />
                  </div>
                </>
              )}
              
              <div className="p-6">
                {index >= 2 && (
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <prop.icon className="w-7 h-7 text-primary group-hover:text-white" />
                  </div>
                )}
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {prop.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {prop.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeValueProps;
