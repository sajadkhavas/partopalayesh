import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';
import { industries } from '@/data/industries';

export default function Industries() {
  const { language } = useLanguage();
  const ArrowIcon = language === 'fa' ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-background" dir={language === 'fa' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>
          {language === 'fa'
            ? 'صنایع تحت پوشش | پتروپالایش کو'
            : 'Industries We Serve | PetroPalayeshco'}
        </title>
        <meta
          name="description"
          content={
            language === 'fa'
              ? 'تأمین تجهیزات آزمایشگاهی و ابزار دقیق برای صنایع نفت، گاز، پتروشیمی، نیروگاه، آب و فاضلاب، دارو و مراکز تحقیقاتی'
              : 'Laboratory equipment and instrumentation supply for oil & gas, petrochemical, power, water treatment, pharmaceutical and research industries'
          }
        />
      </Helmet>

      <Header />

      <main className="pt-20 lg:pt-24">
        {/* Breadcrumb */}
        <section className="py-4 border-b bg-card">
          <div className="container-wide">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">{language === 'fa' ? 'خانه' : 'Home'}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{language === 'fa' ? 'صنایع' : 'Industries'}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 bg-gradient-subtle">
          <div className="container-wide text-center">
            <h1 className="text-3xl lg:text-5xl font-bold mb-6">
              {language === 'fa' ? 'صنایع تحت پوشش' : 'Industries We Serve'}
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              {language === 'fa'
                ? 'پتروپالایش کو با تکیه بر تجربه و تخصص، تجهیزات آزمایشگاهی و ابزار دقیق مورد نیاز صنایع مختلف را با بالاترین کیفیت و استانداردهای بین‌المللی تأمین می‌کند.'
                : 'PetroPalayeshco provides high-quality laboratory equipment and precision instruments for various industries with international standards and expert support.'}
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {industries.map((industry) => (
                <Link
                  key={industry.id}
                  to={`/industries/${industry.slug}`}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 shadow-elegant hover:shadow-elegant-xl transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={industry.image}
                      alt={language === 'fa' ? industry.name : industry.nameEn}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Icon */}
                    <div className="absolute top-4 right-4 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      {industry.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-glow transition-colors">
                      {language === 'fa' ? industry.name : industry.nameEn}
                    </h3>
                    <p className="text-sm text-white/80 mb-4 line-clamp-2">
                      {language === 'fa' ? industry.description : industry.descriptionEn}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                      <span>{language === 'fa' ? 'مشاهده محصولات' : 'View Products'}</span>
                      <ArrowIcon className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {language === 'fa' ? 'چرا پتروپالایش کو؟' : 'Why PetroPalayeshco?'}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === 'fa'
                  ? 'با ما از مزایای همکاری با یک تأمین‌کننده متخصص بهره‌مند شوید'
                  : 'Benefit from partnering with a specialized equipment supplier'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: language === 'fa' ? 'مشاوره مهندسی' : 'Engineering Consulting',
                  desc: language === 'fa' ? 'انتخاب تجهیز متناسب با نیاز پروژه' : 'Equipment selection based on project needs',
                },
                {
                  title: language === 'fa' ? 'برندهای معتبر' : 'Trusted Brands',
                  desc: language === 'fa' ? 'نمایندگی برندهای بین‌المللی' : 'Authorized distributor of global brands',
                },
                {
                  title: language === 'fa' ? 'نصب و آموزش' : 'Installation & Training',
                  desc: language === 'fa' ? 'راه‌اندازی و آموزش تخصصی' : 'Professional commissioning and training',
                },
                {
                  title: language === 'fa' ? 'خدمات پس از فروش' : 'After-Sales Service',
                  desc: language === 'fa' ? 'کالیبراسیون و نگهداری' : 'Calibration and maintenance support',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-smooth"
                >
                  <CheckCircle className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-hero text-white">
          <div className="container-wide text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {language === 'fa'
                ? 'برای انتخاب تجهیز مناسب صنعت خود مشاوره بگیرید'
                : 'Get Expert Advice for Your Industry Needs'}
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              {language === 'fa'
                ? 'تیم فنی ما آماده است تا بهترین راهکارها را متناسب با نیازهای صنعت شما ارائه دهد.'
                : 'Our technical team is ready to provide the best solutions tailored to your industry requirements.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow-accent">
                  {language === 'fa' ? 'درخواست مشاوره رایگان' : 'Request Free Consultation'}
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  {language === 'fa' ? 'مشاهده محصولات' : 'Browse Products'}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
