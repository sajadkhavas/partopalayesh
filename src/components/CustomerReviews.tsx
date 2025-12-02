import { Star, Quote, Building2, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export const CustomerReviews = () => {
  const { language } = useLanguage();

  const reviews = [
    {
      nameFa: 'مهندس احمد رضایی',
      nameEn: 'Eng. Ahmad Rezaei',
      companyFa: 'پالایشگاه تهران',
      companyEn: 'Tehran Refinery',
      rating: 5,
      textFa: 'تجهیزات خریداری شده از کیفیت عالی برخوردار بود. تیم فنی در انتخاب و نصب دستگاه کمک شایانی کردند. کالیبراسیون دقیق و به موقع انجام شد.',
      textEn: 'The purchased equipment was of excellent quality. The technical team provided great assistance in selecting and installing the device. Calibration was accurate and timely.',
      verified: true
    },
    {
      nameFa: 'دکتر سارا محمدی',
      nameEn: 'Dr. Sara Mohammadi',
      companyFa: 'مرکز تحقیقات پلیمر',
      companyEn: 'Polymer Research Center',
      rating: 5,
      textFa: 'دستگاه‌های آزمایشگاهی با دقت بالا و مطابق با استانداردهای بین‌المللی. مشاوره پیش از خرید بسیار تخصصی و کاربردی بود. پشتیبانی فنی عالی.',
      textEn: 'Laboratory devices with high accuracy and international standards compliance. Pre-purchase consultation was very professional. Excellent technical support.',
      verified: true
    },
    {
      nameFa: 'مهندس رضا کریمی',
      nameEn: 'Eng. Reza Karimi',
      companyFa: 'پتروشیمی بندر امام',
      companyEn: 'Bandar Imam Petrochemical',
      rating: 5,
      textFa: 'همکاری طولانی مدت با پتروپالایش کو همواره مطلوب بوده است. تجهیزات با کیفیت، قیمت مناسب و سرویس فوق‌العاده. پیشنهاد می‌کنم.',
      textEn: 'Long-term collaboration with PetroPalayeshco has always been satisfactory. Quality equipment, reasonable prices, and excellent service. Highly recommended.',
      verified: true
    }
  ];

  const stats = [
    { value: '۴.۹/۵', label: 'میانگین رضایت', labelEn: 'Average Rating' },
    { value: '+۵۰۰', label: 'مشتری راضی', labelEn: 'Happy Clients' },
    { value: '۹۸٪', label: 'نرخ بازگشت', labelEn: 'Return Rate' },
    { value: '+۱۰۰۰', label: 'پروژه موفق', labelEn: 'Successful Projects' }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold mb-4">
            <Star className="w-5 h-5 fill-current" />
            {language === 'fa' ? 'نظرات مشتریان' : 'Customer Reviews'}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'fa' 
              ? 'اعتماد بیش از ۵۰۰ سازمان صنعتی' 
              : 'Trusted by 500+ Industrial Organizations'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'fa'
              ? 'تجربه مشتریان ما در استفاده از تجهیزات و خدمات پتروپالایش کو'
              : 'Our customers\' experience with PetroPalayeshco equipment and services'}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="card-neumorphic text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {language === 'fa' ? stat.label : stat.labelEn}
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="card-premium relative overflow-hidden">
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground mb-6 relative z-10 leading-relaxed">
                {language === 'fa' ? review.textFa : review.textEn}
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <Avatar className="w-12 h-12 border-2 border-primary/20">
                  <AvatarFallback className="bg-gradient-accent text-white font-bold">
                    {language === 'fa' 
                      ? review.nameFa.split(' ')[1]?.[0] || 'م' 
                      : review.nameEn.split(' ')[1]?.[0] || 'E'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm">
                      {language === 'fa' ? review.nameFa : review.nameEn}
                    </h4>
                    {review.verified && (
                      <CheckCircle className="w-4 h-4 text-success" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Building2 className="w-3 h-3" />
                    {language === 'fa' ? review.companyFa : review.companyEn}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            {language === 'fa' 
              ? 'آیا شما هم تجربه همکاری با ما را دارید؟' 
              : 'Do you have experience working with us?'}
          </p>
          <button className="btn-secondary px-8 py-3 rounded-full font-semibold">
            {language === 'fa' ? 'ثبت نظر خود' : 'Share Your Review'}
          </button>
        </div>
      </div>
    </section>
  );
};
