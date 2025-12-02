import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, MapPin } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';
import { brands } from '@/data/industries';
import { SITE_URL } from '@/config';

export default function Brands() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background" dir={language === 'fa' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>
          {language === 'fa'
            ? 'برندها و شرکا | پتروپالایش کو'
            : 'Brands & Partners | PetroPalayeshco'}
        </title>
        <meta
          name="description"
          content={
            language === 'fa'
              ? 'نمایندگی و توزیع برندهای معتبر جهانی تجهیزات آزمایشگاهی و ابزار دقیق شامل Emerson، Endress+Hauser، Yokogawa، Anton Paar و...'
              : 'Authorized distributor of leading global brands including Emerson, Endress+Hauser, Yokogawa, Anton Paar and more'
          }
        />
        <link rel="canonical" href={`${SITE_URL}/brands`} />
        <meta property="og:title" content={language === 'fa' ? 'برندهای پتروپالایش' : 'PetroPalayeshco Brands'} />
        <meta property="og:description" content={language === 'fa'
          ? 'شرکای تجاری و برندهای منتخب تجهیزات آزمایشگاهی و ابزار دقیق.'
          : 'Trusted commercial partners and leading brands for lab equipment and instrumentation.'} />
        <meta property="og:url" content={`${SITE_URL}/brands`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/analytical-equipment.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'fa' ? 'برندهای پتروپالایش' : 'PetroPalayeshco Brands'} />
        <meta name="twitter:description" content={language === 'fa'
          ? 'شرکای تجاری و برندهای منتخب تجهیزات آزمایشگاهی و ابزار دقیق.'
          : 'Trusted commercial partners and leading brands for lab equipment and instrumentation.'} />
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
                  <BreadcrumbPage>{language === 'fa' ? 'برندها' : 'Brands'}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 bg-gradient-subtle">
          <div className="container-wide text-center">
            <h1 className="text-3xl lg:text-5xl font-bold mb-6">
              {language === 'fa' ? 'برندها و شرکای تجاری' : 'Brands & Partners'}
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              {language === 'fa'
                ? 'پتروپالایش کو با افتخار نماینده و توزیع‌کننده معتبرترین برندهای جهانی در زمینه تجهیزات آزمایشگاهی و ابزار دقیق صنعتی است.'
                : 'PetroPalayeshco is proud to be an authorized distributor of the world\'s leading brands in laboratory equipment and industrial instrumentation.'}
            </p>
          </div>
        </section>

        {/* Brands Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {brands.map((brand) => (
                <div
                  key={brand.id}
                  className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-elegant hover:shadow-elegant-xl transition-all duration-300"
                >
                  {/* Brand Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-xl bg-primary/5 border border-border flex items-center justify-center text-2xl font-bold text-primary">
                      {brand.name.charAt(0)}
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {language === 'fa' ? brand.country : brand.countryEn}
                    </Badge>
                  </div>

                  {/* Brand Info */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === 'fa' ? brand.description : brand.descriptionEn}
                  </p>

                  {/* Product Lines */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {brand.productLines.map((line) => (
                      <Badge key={line} variant="outline" className="text-xs">
                        {line}
                      </Badge>
                    ))}
                  </div>

                  {/* Action */}
                  <Link to={`/products?brand=${brand.id}`}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      {language === 'fa' ? 'مشاهده محصولات این برند' : 'View Products'}
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="section-padding bg-gradient-hero text-white">
          <div className="container-wide text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {language === 'fa'
                ? 'تأمین اصالت و کیفیت'
                : 'Guaranteed Authenticity & Quality'}
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              {language === 'fa'
                ? 'تمامی محصولات ارائه شده دارای گواهی اصالت از برند سازنده و گارانتی معتبر می‌باشند.'
                : 'All products come with manufacturer authenticity certificates and valid warranty.'}
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow-accent">
                {language === 'fa' ? 'درخواست استعلام قیمت' : 'Request Quote'}
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
