import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '@/config';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background" dir={language === 'fa' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{language === 'fa' ? 'صفحه یافت نشد | پتروپالایش کو' : 'Page not found | PetroPalayeshco'}</title>
        <meta
          name="description"
          content={language === 'fa' ? 'متأسفانه صفحه مورد نظر شما پیدا نشد.' : 'The page you are looking for could not be found.'}
        />
        <link rel="canonical" href={`${SITE_URL}${location.pathname}`} />
        <meta property="og:title" content={language === 'fa' ? 'صفحه یافت نشد' : 'Page not found'} />
        <meta property="og:description" content={language === 'fa' ? 'این صفحه در دسترس نیست.' : 'This page is unavailable.'} />
        <meta property="og:url" content={`${SITE_URL}${location.pathname}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/analytical-equipment.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'fa' ? 'صفحه یافت نشد' : 'Page not found'} />
        <meta name="twitter:description" content={language === 'fa' ? 'این صفحه در دسترس نیست.' : 'This page is unavailable.'} />
        <meta name="twitter:image" content={`${SITE_URL}/analytical-equipment.jpg`} />
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
                  <BreadcrumbPage>404</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        <section className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center px-4">
            <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
            <p className="mb-8 text-2xl text-muted-foreground">
              {language === 'fa' ? 'صفحه مورد نظر یافت نشد' : 'Page not found'}
            </p>
            <Link to="/" className="inline-block px-8 py-3 bg-gradient-accent text-white rounded-lg hover:opacity-90 transition-smooth">
              {language === 'fa' ? 'بازگشت به صفحه اصلی' : 'Return to Home'}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
