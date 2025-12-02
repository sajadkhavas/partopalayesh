import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TrustBadges } from '@/components/TrustBadges';
import { CustomerReviews } from '@/components/CustomerReviews';
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

const Index = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>
          {language === 'fa' 
            ? 'پتروپالایش کو - تأمین تجهیزات آزمایشگاهی و ابزار دقیق برای صنایع نفت و گاز' 
            : 'PetroPalayeshco - Laboratory Equipment & Instrumentation for Oil & Gas'}
        </title>
        <meta 
          name="description" 
          content={language === 'fa' 
            ? 'تأمین‌کننده تخصصی تجهیزات آزمایشگاهی و ابزار دقیق فرآیندی برای صنایع نفت، گاز، پتروشیمی و پالایشگاه با استانداردهای ASTM، ISO و API' 
            : 'Specialized supplier of laboratory equipment and process instrumentation for oil, gas, petrochemical and refinery industries with ASTM, ISO and API standards'} 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PetroPalayeshco",
            "description": "Laboratory equipment and precision instruments supplier",
            "url": SITE_URL,
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
        <HomeValueProps />
        <HomeIndustries />
        <HomeFeaturedProducts />
        <HomeServices />
        <CustomerReviews />
        <HomeCTA />
      </main>

      <Footer />
    </>
  );
};

export default Index;
