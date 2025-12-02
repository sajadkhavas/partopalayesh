import { Shield, Award, Users, Clock, CheckCircle2, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const TrustBadges = () => {
  const { language } = useLanguage();

  const badges = [
    {
      icon: Shield,
      titleFa: 'ISO 9001:2015',
      titleEn: 'ISO 9001:2015',
      descFa: 'گواهینامه مدیریت کیفیت',
      descEn: 'Quality Management Certified'
    },
    {
      icon: Award,
      titleFa: '+20 سال',
      titleEn: '20+ Years',
      descFa: 'تجربه در صنعت',
      descEn: 'Industry Experience'
    },
    {
      icon: Users,
      titleFa: '+500 مشتری',
      titleEn: '500+ Clients',
      descFa: 'سازمان‌های بزرگ صنعتی',
      descEn: 'Large Industrial Organizations'
    },
    {
      icon: CheckCircle2,
      titleFa: 'نمایندگی رسمی',
      titleEn: 'Official Distributor',
      descFa: 'برندهای معتبر جهانی',
      descEn: 'Global Premium Brands'
    },
    {
      icon: Clock,
      titleFa: 'پاسخگویی ۲۴/۷',
      titleEn: '24/7 Support',
      descFa: 'پشتیبانی فنی مهندسی',
      descEn: 'Engineering Technical Support'
    },
    {
      icon: Star,
      titleFa: '۴.۹ از ۵',
      titleEn: '4.9/5',
      descFa: 'رضایت مشتریان',
      descEn: 'Customer Satisfaction'
    }
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'fa' 
              ? 'چرا پتروپالایش کو را انتخاب کنید؟' 
              : 'Why Choose PetroPalayeshco?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'fa'
              ? 'تأمین‌کننده معتبر تجهیزات آزمایشگاهی با بیش از دو دهه تجربه در صنایع نفت، گاز و پتروشیمی'
              : 'Trusted laboratory equipment supplier with over two decades of experience in oil, gas, and petrochemical industries'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="card-premium text-center group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-accent flex items-center justify-center transition-elegant group-hover:scale-110 group-hover:rotate-3 shadow-glow-accent">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1">
                  {language === 'fa' ? badge.titleFa : badge.titleEn}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'fa' ? badge.descFa : badge.descEn}
                </p>
              </div>
            );
          })}
        </div>

        {/* Premium Certification Logos */}
        <div className="mt-16 pt-12 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground mb-6">
            {language === 'fa' 
              ? 'گواهینامه‌ها و استانداردهای بین‌المللی' 
              : 'International Certifications & Standards'}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['ISO 9001:2015', 'ISO 14001', 'API', 'ASME', 'ASTM'].map((cert) => (
              <div
                key={cert}
                className="px-6 py-3 rounded-xl bg-card border border-border/50 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary transition-smooth hover:shadow-glow"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
