import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '@/config';
import { CalendarDays, FileText, LinkIcon } from 'lucide-react';

const posts = [
  {
    slug: 'lab-safety-standards',
    date: '2024-01-12',
    title: {
      fa: 'استانداردهای ایمنی در آزمایشگاه‌های نفت و گاز',
      en: 'Safety Standards in Oil & Gas Laboratories'
    },
    excerpt: {
      fa: 'چارچوبی عملی برای کنترل خطرات، مدیریت مواد شیمیایی و نگهداری تجهیزات ابزار دقیق.',
      en: 'A practical framework for hazard control, chemical handling, and maintaining precision instruments.'
    },
    tag: {
      fa: 'ایمنی',
      en: 'Safety'
    }
  },
  {
    slug: 'chromatography-best-practices',
    date: '2024-02-08',
    title: {
      fa: 'بهترین رویه‌ها در کروماتوگرافی گازی برای QC',
      en: 'GC Best Practices for Quality Control'
    },
    excerpt: {
      fa: 'نکات کلیدی برای انتخاب ستون، کالیبراسیون دتکتور و افزایش دقت نتایج کروماتوگرافی.',
      en: 'Key tips on column selection, detector calibration, and improving chromatographic accuracy.'
    },
    tag: {
      fa: 'آنالیز',
      en: 'Analysis'
    }
  },
  {
    slug: 'instrument-lifecycle',
    date: '2024-03-15',
    title: {
      fa: 'چرخه عمر تجهیزات ابزار دقیق و نگهداری پیشگیرانه',
      en: 'Instrumentation Lifecycle & Preventive Maintenance'
    },
    excerpt: {
      fa: 'چگونه برنامه نگهداری پیشگیرانه، دقت اندازه‌گیری را حفظ و از توقف تولید جلوگیری می‌کند.',
      en: 'How preventive maintenance preserves measurement accuracy and prevents production downtime.'
    },
    tag: {
      fa: 'نگهداری',
      en: 'Maintenance'
    }
  }
];

export default function Blog() {
  const { language } = useLanguage();

  const pageTitle = language === 'fa' ? 'بلاگ فنی' : 'Technical Blog';
  const pageDescription = language === 'fa'
    ? 'مقالات و بینش‌های تخصصی درباره تجهیزات آزمایشگاهی، ابزار دقیق و کنترل کیفیت در صنعت نفت، گاز و پتروشیمی.'
    : 'Technical insights on laboratory equipment, instrumentation, and quality control for oil, gas, and petrochemical plants.';

  return (
    <div className="min-h-screen bg-background" dir={language === 'fa' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{`${pageTitle} | PetroPalayesh Co.`}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`${SITE_URL}/resources/blog`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={`${SITE_URL}/resources/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/analytical-equipment.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${SITE_URL}/analytical-equipment.jpg`} />
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
              {language === 'fa' ? 'منابع تخصصی' : 'Expert Resources'}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">
              {pageTitle}
            </h1>
            <p className="text-lg text-muted-foreground">
              {pageDescription}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-wide grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.slug} className="h-full bg-card/90 backdrop-blur border-border shadow-elegant hover:shadow-elegant-lg transition-smooth">
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      {post.date}
                    </span>
                    <Badge variant="outline">{post.tag[language]}</Badge>
                  </div>
                  <CardTitle className="text-xl leading-snug">{post.title[language]}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>{post.excerpt[language]}</p>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <FileText className="w-4 h-4" />
                    {language === 'fa' ? 'مطالعه جزئیات به‌زودی' : 'Full article coming soon'}
                  </div>
                  <div className="flex items-center gap-2 text-accent">
                    <LinkIcon className="w-4 h-4" />
                    {language === 'fa' ? 'لینک اشتراک‌گذاری' : 'Shareable link'}
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
