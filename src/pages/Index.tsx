import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Award, Clock, HeadphonesIcon, Shield, CheckCircle, ArrowRight, ArrowLeft, Wrench, GraduationCap, Building2, MessageSquare, FileText, Sparkles, Star, Globe, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TrustBadges } from '@/components/TrustBadges';
import { CustomerReviews } from '@/components/CustomerReviews';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { products } from '@/data/products';
import { industries } from '@/data/industries';
import { productCategories } from '@/data/industries';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import heroImage from '@/assets/hero-premium-lab.jpg';
import categoryAnalytical from '@/assets/category-analytical.jpg';
import categoryProcess from '@/assets/category-process.jpg';
import categoryCalibration from '@/assets/category-calibration.jpg';
import categoryAccessories from '@/assets/category-accessories.jpg';
import valueConsulting from '@/assets/value-consulting.jpg';
import valueBrands from '@/assets/value-brands.jpg';
import industryOilGas from '@/assets/industry-oil-gas.jpg';
import industryPetrochemical from '@/assets/industry-petrochemical.jpg';
import industryWater from '@/assets/industry-water.jpg';
const Index = () => {
  const {
    language,
    t
  } = useLanguage();
  const ArrowIcon = language === 'fa' ? ArrowLeft : ArrowRight;
  const isRTL = language === 'fa';

  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 28
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true,
      margin: '-100px'
    },
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  };

  // Get featured products (first 6)
  const featuredProducts = products.slice(0, 6);

  // Category images mapping
  const categoryImages = {
    'laboratory': categoryAnalytical,
    'process': categoryProcess,
    'calibration': categoryCalibration,
    'accessories': categoryAccessories
  };

  // Industry images mapping  
  const industryImages: Record<string, string> = {
    'oil-gas': industryOilGas,
    'petrochemical': industryPetrochemical,
    'water-wastewater': industryWater,
    'power-energy': industryOilGas,
    'food-beverage': industryPetrochemical,
    'pharmaceutical': industryWater
  };

  // Value propositions aligned with strategic document
  const valueProps = [{
    icon: HeadphonesIcon,
    title: language === 'fa' ? 'مشاوره مهندسی قبل از خرید' : 'Pre-sale Engineering Consulting',
    desc: language === 'fa' ? 'تیم فنی متخصص برای انتخاب تجهیز مناسب پروژه شما' : 'Expert technical team to help select the right equipment for your project'
  }, {
    icon: Award,
    title: language === 'fa' ? 'تأمین برندهای معتبر بین‌المللی' : 'Trusted International Brands',
    desc: language === 'fa' ? 'نمایندگی رسمی برندهای پیشرو جهانی با ضمانت اصالت' : 'Official distributor of leading global brands with authenticity guarantee'
  }, {
    icon: Wrench,
    title: language === 'fa' ? 'نصب، راه‌اندازی و آموزش' : 'Installation & Training',
    desc: language === 'fa' ? 'خدمات نصب حرفه‌ای و آموزش تخصصی کاربران' : 'Professional installation services and specialized user training'
  }, {
    icon: Shield,
    title: language === 'fa' ? 'کالیبراسیون و خدمات پس از فروش' : 'Calibration & After-Sales',
    desc: language === 'fa' ? 'خدمات کالیبراسیون با گواهی ISO و پشتیبانی مستمر' : 'ISO-certified calibration services and continuous support'
  }];

  // Stats
  const stats = [{
    value: '10+',
    label: language === 'fa' ? 'سال تجربه' : 'Years Experience'
  }, {
    value: '500+',
    label: language === 'fa' ? 'پروژه موفق' : 'Successful Projects'
  }, {
    value: '1000+',
    label: language === 'fa' ? 'تجهیز نصب شده' : 'Installed Equipment'
  }, {
    value: '24/7',
    label: language === 'fa' ? 'پشتیبانی فنی' : 'Technical Support'
  }];

  // Certifications
  const certifications = ['ISO 9001:2015', 'ISO 14001', 'API', 'ASME', 'IEC', 'ATEX'];
  return <>
      <Helmet>
        <title>
          {language === 'fa' ? 'پتروپالایش کو - تأمین تجهیزات آزمایشگاهی و ابزار دقیق برای صنایع نفت و گاز' : 'PetroPalayeshco - Laboratory Equipment & Instrumentation for Oil & Gas'}
        </title>
        <meta name="description" content={language === 'fa' ? 'تأمین‌کننده تخصصی تجهیزات آزمایشگاهی و ابزار دقیق فرآیندی برای صنایع نفت، گاز، پتروشیمی و پالایشگاه با استانداردهای ASTM، ISO و API' : 'Specialized supplier of laboratory equipment and process instrumentation for oil, gas, petrochemical and refinery industries with ASTM, ISO and API standards'} />
        <script type="application/ld+json">
          {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "PetroPalayeshco",
          "description": "Laboratory equipment and precision instruments supplier",
          "url": "https://petropalayeshco.ir",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+98-21-12345678",
            "contactType": "sales"
          }
        })}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section - Premium Navy/Teal Design */}
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden pt-24 md:pt-28">
          <div className="absolute inset-0">
            <img src={heroImage} alt={language === 'fa' ? 'تجهیزات آزمایشگاهی پیشرفته' : 'Advanced Laboratory Equipment'} className="w-full h-full object-cover" loading="eager" />
            <motion.div
              className="absolute inset-0"
              animate={{
                background: ['linear-gradient(135deg, hsl(205 74% 17% / 0.9) 0%, hsl(205 70% 22% / 0.7) 50%, transparent 100%)', 'linear-gradient(145deg, hsl(205 74% 19% / 0.9) 0%, hsl(205 70% 26% / 0.7) 50%, transparent 100%)', 'linear-gradient(135deg, hsl(205 74% 17% / 0.9) 0%, hsl(205 70% 22% / 0.7) 50%, transparent 100%)']
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/50 to-transparent" />
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => <motion.div
                key={i}
                className="absolute w-2.5 h-2.5 bg-white/20 rounded-full"
                style={{
                left: `${15 + i * 15}%`,
                top: `${18 + (i % 3) * 22}%`
              }}
                animate={{
                y: [-18, 18, -18],
                opacity: [0.25, 0.6, 0.25]
              }}
                transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.4
              }}
              />)}
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div className={cn('max-w-4xl', isRTL ? 'ml-auto text-right' : 'text-left')} {...fadeInUp}>
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold rounded-full shadow-elegant">
                {language === 'fa' ? 'تجهیزات تخصصی آزمایشگاهی و ابزار دقیق فرآیندی' : 'Specialized Lab & Process Instrumentation'}
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight drop-shadow-xl text-white">
                {language === 'fa' ? 'تأمین‌کننده تجهیزات آزمایشگاهی و ابزار دقیق برای نفت، گاز و پتروشیمی' : 'Lab equipment and process instrumentation trusted by oil, gas, and petrochemical leaders'}
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl drop-shadow-md">
                {language === 'fa' ? 'از انتخاب فنی تا نصب و کالیبراسیون، راهکارهای کامل برای آزمایشگاه‌ها و فرآیندهای صنعتی شما را با استانداردهای بین‌المللی فراهم می‌کنیم.' : 'From technical selection to installation and calibration, we deliver end-to-end solutions for critical labs and process units with international standards.'}
              </p>

              <div className={cn('flex flex-col sm:flex-row gap-4 mb-8', isRTL && 'sm:flex-row-reverse justify-end')}>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-elegant px-6 py-5"
                >
                  <Link to="/contact">
                    {language === 'fa' ? 'درخواست مشاوره و استعلام' : 'Request quote & consulting'}
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white/50 text-white hover:bg-white hover:text-primary backdrop-blur-sm font-semibold px-6 py-5"
                >
                  <Link to="/products">
                    {language === 'fa' ? 'مشاهده همه تجهیزات' : 'View all equipment'}
                  </Link>
                </Button>
              </div>

              <motion.div className={cn('flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 md:gap-4 text-white/90', isRTL ? 'sm:justify-end' : 'sm:justify-start')} {...fadeInUp}>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 shadow-elegant">
                  <div className="w-11 h-11 rounded-lg bg-teal/30 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold">20+</div>
                    <div className="text-xs md:text-sm text-white/80">{language === 'fa' ? 'سال تجربه در پروژه‌های صنعتی' : 'years industrial experience'}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 shadow-elegant">
                  <div className="w-11 h-11 rounded-lg bg-teal/30 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold">500+</div>
                    <div className="text-xs md:text-sm text-white/80">{language === 'fa' ? 'مشتری در صنایع نفت و گاز' : 'clients in oil & gas'}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 shadow-elegant">
                  <div className="w-11 h-11 rounded-lg bg-teal/30 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold">ISO / API</div>
                    <div className="text-xs md:text-sm text-white/80">{language === 'fa' ? 'استانداردها و گواهی‌نامه‌ها' : 'standards & certifications'}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Trust Bar / Stats */}
        <section className="py-12 bg-gradient-subtle border-b">
          <div className="container-wide">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center p-6 rounded-xl bg-card hover-lift border border-border/50"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Product Categories Overview */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {language === 'fa' ? 'دسته‌بندی تجهیزات' : 'Equipment Categories'}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === 'fa' ? 'طیف کاملی از تجهیزات آزمایشگاهی و ابزار دقیق فرآیندی برای تمام نیازهای صنعتی' : 'Complete range of laboratory equipment and process instrumentation for all industrial needs'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link to={`/products?type=${category.type}`} className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-elegant hover:shadow-elegant-xl transition-all duration-500 block">
                  {/* Category Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img src={categoryImages[category.type as keyof typeof categoryImages]} alt={language === 'fa' ? category.name : category.nameEn} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {language === 'fa' ? category.name : category.nameEn}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {category.subcategories.length} {language === 'fa' ? 'زیرمجموعه' : 'subcategories'}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <span>{language === 'fa' ? 'مشاهده محصولات' : 'View Products'}</span>
                      <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges - Premium Social Proof */}
        <TrustBadges />

        {/* Why PetroPalayeshco - Value Propositions */}
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
                {language === 'fa' ? 'مزایای همکاری با یک تأمین‌کننده متخصص و مورد اعتماد' : 'Benefits of partnering with a specialized and trusted supplier'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valueProps.map((prop, index) => {
              const image = index === 0 ? valueConsulting : valueBrands;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-2xl bg-card shadow-elegant hover:shadow-elegant-xl transition-all duration-500"
                >
                    {/* Background Image for first two cards */}
                    {index < 2 && <>
                        <div className="relative h-40 overflow-hidden">
                          <img src={image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
                        </div>
                        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <prop.icon className="w-6 h-6 text-primary" />
                        </div>
                      </>}
                    
                    {/* Content */}
                    <div className={index < 2 ? "p-6" : "p-6"}>
                      {index >= 2 && <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                          <prop.icon className="w-7 h-7 text-primary group-hover:text-white" />
                        </div>}
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {prop.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {prop.desc}
                      </p>
                    </div>
                  </motion.div>
              );
            })}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {language === 'fa' ? 'صنایع تحت پوشش' : 'Industries We Serve'}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === 'fa' ? 'تأمین تجهیزات تخصصی برای طیف گسترده‌ای از صنایع' : 'Specialized equipment supply for a wide range of industries'}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {industries.slice(0, 8).map((industry, index) => (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <Link to={`/industries/${industry.slug}`} className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-elegant hover:shadow-elegant-lg transition-all duration-300 block">
                  {/* Industry Image */}
                  <div className="relative h-32 overflow-hidden">
                    <img src={industryImages[industry.slug] || industryOilGas} alt={language === 'fa' ? industry.name : industry.nameEn} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-2 left-2 text-3xl opacity-90">
                      {industry.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                      {language === 'fa' ? industry.name : industry.nameEn}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {language === 'fa' ? 'مشاهده بیشتر' : 'Learn more'}
                    </p>
                  </div>
                </Link>
              </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center mt-8"
            >
              <Link to="/industries">
                <Button variant="outline" className="group">
                  {language === 'fa' ? 'مشاهده همه صنایع' : 'View All Industries'}
                  <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container-wide">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12"
            >
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                  {language === 'fa' ? 'محصولات منتخب' : 'Featured Products'}
                </h2>
                <p className="text-muted-foreground">
                  {language === 'fa' ? 'محصولات برتر با بالاترین کیفیت و استانداردهای بین‌المللی' : 'Top products with highest quality and international standards'}
                </p>
              </div>
              <Link to="/products">
                <Button variant="outline" className="group">
                  {language === 'fa' ? 'مشاهده همه' : 'View All'}
                  <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service & Calibration Highlight */}
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
                  {language === 'fa' ? 'تیم فنی پتروپالایش کو خدمات جامع نصب، راه‌اندازی، کالیبراسیون و نگهداری پیشگیرانه را برای تضمین عملکرد پایدار و دقیق تجهیزات شما ارائه می‌دهد.' : 'PetroPalayeshco technical team provides comprehensive installation, commissioning, calibration and preventive maintenance services to ensure stable and accurate operation of your equipment.'}
                </p>
                <ul className="space-y-3 mb-8">
                  {[language === 'fa' ? 'کالیبراسیون با استاندارد ISO 17025' : 'ISO 17025 calibration services', language === 'fa' ? 'نصب و راه‌اندازی تخصصی' : 'Professional installation & commissioning', language === 'fa' ? 'قراردادهای نگهداری پیشگیرانه' : 'Preventive maintenance contracts', language === 'fa' ? 'آموزش تخصصی اپراتورها' : 'Specialized operator training'].map((item, index) => <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>)}
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
                  <img src="/precision-instruments.jpg" alt={language === 'fa' ? 'خدمات کالیبراسیون' : 'Calibration Services'} className="w-full h-full object-cover" />
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

        {/* Customer Reviews - Premium Social Proof */}
        <CustomerReviews />

        {/* Final CTA - Premium Conversion */}
        <section className="section-padding relative overflow-hidden">
          {/* Premium Gradient Background */}
          <div className="absolute inset-0 bg-gradient-hero opacity-95" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEzIDAgNi0yLjY4NyA2LTZzLTIuNjg3LTYtNi02LTYgMi42ODctNiA2IDIuNjg3IDYgNiA2ek0yNCA2YzMuMzEzIDAgNi0yLjY4NyA2LTZzLTIuNjg3LTYtNi02LTYgMi42ODctNiA2IDIuNjg3IDYgNiA2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
          
          <div className="container-wide text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold mb-6 shimmer">
                <Sparkles className="w-5 h-5" />
                {language === 'fa' ? 'مشاوره رایگان' : 'Free Consultation'}
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                {language === 'fa' ? 'برای انتخاب تجهیز مناسب، با تیم فنی ما مشورت کنید' : 'Consult with Our Technical Team for Equipment Selection'}
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                {language === 'fa' ? 'تیم مهندسی ما با بیش از ۲۰ سال تجربه، آماده است تا در انتخاب بهترین تجهیزات برای نیازهای صنعتی شما راهنمایی کنند' : 'Our engineering team with over 20 years of experience is ready to guide you in selecting the best equipment for your industrial needs'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant-xl hover:shadow-glow transition-smooth group">
                  <MessageSquare className="w-5 h-5 mr-2 group-hover:scale-110 transition-smooth" />
                  {language === 'fa' ? 'درخواست مشاوره فنی رایگان' : 'Request Free Technical Consultation'}
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" className="border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-smooth">
                  <FileText className="w-5 h-5 mr-2" />
                  {language === 'fa' ? 'درخواست استعلام قیمت' : 'Request Price Quote'}
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                {language === 'fa' ? 'پاسخ در کمتر از ۲۴ ساعت' : 'Response in less than 24 hours'}
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                {language === 'fa' ? 'تضمین کیفیت محصولات' : 'Quality guarantee'}
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                {language === 'fa' ? 'گواهینامه‌های بین‌المللی' : 'International certifications'}
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-current" />
                {language === 'fa' ? 'رضایت ۴.۹ از ۵' : '4.9/5 Satisfaction'}
              </div>
            </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>;
};
export default Index;