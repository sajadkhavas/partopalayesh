import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TrustBadges } from '@/components/TrustBadges';
import { CustomerReviews } from '@/components/CustomerReviews';
import { useLanguage } from '@/contexts/LanguageContext';
import { SITE_URL } from '@/config';
import HomeHero from '@/components/home/HomeHero';
import { HomeStats, HomeCategories, HomeValueProps, HomeIndustries, HomeFeaturedProducts, HomeServices, HomeCTA } from '@/components/home';

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
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:title" content={language === 'fa'
          ? 'پتروپالایش کو | تجهیزات آزمایشگاهی و ابزار دقیق'
          : 'PetroPalayeshco | Laboratory Equipment & Process Instrumentation'} />
        <meta property="og:description" content={language === 'fa'
          ? 'راهکارهای آزمایشگاهی و ابزار دقیق برای صنایع نفت، گاز و پتروشیمی با تمرکز بر کیفیت و استاندارد.'
          : 'Laboratory and process instrumentation solutions for oil, gas, and petrochemical industries with a focus on quality and standards.'} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/analytical-equipment.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'fa'
          ? 'پتروپالایش کو | تجهیزات آزمایشگاهی'
          : 'PetroPalayeshco | Lab & Instrumentation'} />
        <meta name="twitter:description" content={language === 'fa'
          ? 'تأمین تجهیزات آزمایشگاهی و ابزار دقیق برای پروژه‌های صنعتی.'
          : 'Supplying laboratory equipment and instrumentation for industrial projects.'} />
        <meta name="twitter:image" content={`${SITE_URL}/analytical-equipment.jpg`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PetroPalayeshco",
            "alternateName": "پتروپالایش کو",
            "description": "Laboratory equipment and precision instruments supplier for oil, gas, and petrochemical industries.",
            "url": SITE_URL,
            "logo": `${SITE_URL}/favicon.ico`,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+98-21-12345678",
              "contactType": "sales",
              "email": "info@petropalayeshco.ir",
              "areaServed": "IR"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IR"
            },
            "sameAs": []
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
