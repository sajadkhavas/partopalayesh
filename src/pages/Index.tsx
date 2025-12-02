import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TrustBadges } from '@/components/TrustBadges';
import { CustomerReviews } from '@/components/CustomerReviews';
import { useLanguage } from '@/contexts/LanguageContext';
import { SITE_URL } from '@/config';
import {
  HomeHero,
  HomeStats,
  HomeCategories,
  HomeValueProps,
  HomeIndustries,
  HomeFeaturedProducts,
  HomeServices,
  HomeCTA,
} from '@/components/home';

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
        <HomeHero />
        <HomeStats />
        <HomeCategories />
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
