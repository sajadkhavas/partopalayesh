import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '@/config';
import { Download, FileText, Globe } from 'lucide-react';

const catalogs = [
  {
    id: 'analytical-suite',
    title: {
      fa: 'کاتالوگ تجهیزات آنالیز دستگاهی',
      en: 'Analytical Instruments Catalog'
    },
    description: {
      fa: 'پوشش کامل FTIR، GC، BET و سایر تجهیزات آنالیز برای کاربردهای نفت و گاز.',
      en: 'Comprehensive FTIR, GC, BET, and other analytical instruments for oil & gas labs.'
    },
    size: '8 MB PDF',
    language: 'EN/FA'
  },
  {
    id: 'process-instrumentation',
    title: {
      fa: 'ابزار دقیق و کنترل فرآیند',
      en: 'Process Instrumentation'
    },
    description: {
      fa: 'فلومترها، کنترل‌کننده‌های جریان، دتکتورهای گاز و تجهیزات پایش ایمنی.',
      en: 'Flow meters, controllers, gas detection, and safety monitoring instruments.'
    },
    size: '6 MB PDF',
    language: 'EN'
  },
  {
    id: 'petroleum-testing',
    title: {
      fa: 'تجهیزات تست نفت و فرآورده‌ها',
      en: 'Petroleum Testing Solutions'
    },
    description: {
      fa: 'دستگاه‌های تست ویسکوزیته، نقطه ریزش، نقطه ابری و خوردگی مطابق استاندارد ASTM.',
      en: 'Viscosity, pour point, cloud point, and corrosion testing per ASTM standards.'
    },
    size: '7 MB PDF',
    language: 'EN/FA'
  }
];

export default function Catalogs() {
  const { language } = useLanguage();

  const pageTitle = language === 'fa' ? 'کاتالوگ و بروشور' : 'Catalogs & Brochures';
  const pageDescription = language === 'fa'
    ? 'دانلود کاتالوگ تجهیزات آزمایشگاهی، ابزار دقیق و راهکارهای فرآیندی برای صنعت نفت و پتروشیمی.'
    : 'Download catalogs for laboratory equipment, instrumentation, and process solutions for oil & petrochemical plants.';

  return (
    <div className="min-h-screen bg-background" dir={language === 'fa' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{`${pageTitle} | PetroPalayesh Co.`}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`${SITE_URL}/resources/catalogs`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={`${SITE_URL}/resources/catalogs`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/category-analytical.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${SITE_URL}/category-analytical.jpg`} />
      </Helmet>
      <Header />

      <main className="pt-20 lg:pt-24">
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
                  <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        <section className="py-16 bg-gradient-subtle">
          <div className="container-wide text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="secondary" className="px-4 py-1 text-sm">
              {language === 'fa' ? 'دانلود بروشور' : 'Download Center'}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">{pageTitle}</h1>
            <p className="text-lg text-muted-foreground">{pageDescription}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-wide grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {catalogs.map((catalog) => (
              <Card key={catalog.id} className="h-full bg-card/90 border border-border shadow-elegant hover:shadow-elegant-lg transition-smooth">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      {catalog.language}
                    </span>
                    <Badge variant="outline">{catalog.size}</Badge>
                  </div>
                  <CardTitle className="text-xl leading-snug">{catalog.title[language]}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>{catalog.description[language]}</p>
                  <Button variant="default" className="w-full bg-gradient-accent text-white" size="lg">
                    <Download className={`w-4 h-4 ${language === 'fa' ? 'ml-2' : 'mr-2'}`} />
                    {language === 'fa' ? 'دانلود PDF' : 'Download PDF'}
                  </Button>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <FileText className="w-4 h-4" />
                    {language === 'fa' ? 'مشخصات فنی و استانداردها' : 'Technical specs & standards'}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
