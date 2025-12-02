import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { language } = useLanguage();

  const productLinks = [
    { label: language === 'fa' ? 'تجهیزات آزمایشگاهی' : 'Laboratory Equipment', path: '/products/category/analytical' },
    { label: language === 'fa' ? 'ابزار دقیق فرآیندی' : 'Process Instrumentation', path: '/products/category/precision' },
    { label: language === 'fa' ? 'کالیبراسیون و تست' : 'Calibration & Test', path: '/products/category/petroleum' },
    { label: language === 'fa' ? 'لوازم جانبی' : 'Accessories', path: '/products/category/sample-prep' },
    { label: language === 'fa' ? 'همه محصولات' : 'View All Products', path: '/products' },
  ];

  const industryLinks = [
    { label: language === 'fa' ? 'نفت و گاز' : 'Oil & Gas', path: '/industries/oil-and-gas' },
    { label: language === 'fa' ? 'پتروشیمی و پالایش' : 'Petrochemical & Refining', path: '/industries/petrochemical-refining' },
    { label: language === 'fa' ? 'آب و فاضلاب' : 'Water & Wastewater', path: '/industries/water-wastewater' },
    { label: language === 'fa' ? 'نیرو و انرژی' : 'Power & Energy', path: '/industries/power-energy' },
    { label: language === 'fa' ? 'دارو و علوم زیستی' : 'Life Sciences', path: '/industries/pharmaceutical-life-sciences' },
    { label: language === 'fa' ? 'آموزشی و تحقیقاتی' : 'Academic & Research', path: '/industries/academic-research' },
  ];

  const companyLinks = [
    { label: language === 'fa' ? 'درباره پتروپالایش کو' : 'About PetroPalayeshco', path: '/about' },
    { label: language === 'fa' ? 'برندها و شرکا' : 'Brands & Partners', path: '/brands' },
    { label: language === 'fa' ? 'گواهینامه‌ها' : 'Quality & Certifications', path: '/about#certifications' },
    { label: language === 'fa' ? 'فرصت‌های شغلی' : 'Careers', path: '/careers' },
    { label: language === 'fa' ? 'تماس با ما' : 'Contact', path: '/contact' },
  ];

  const resourceLinks = [
    { label: language === 'fa' ? 'کاتالوگ و دیتاشیت' : 'Technical Documents', path: '/resources/catalogs' },
    { label: language === 'fa' ? 'سوالات متداول' : 'FAQ', path: '/resources/faq' },
    { label: language === 'fa' ? 'وبلاگ و مقالات' : 'Blog & Articles', path: '/resources/blog' },
    { label: language === 'fa' ? 'خدمات کالیبراسیون' : 'Service & Calibration', path: '/services/calibration' },
    { label: language === 'fa' ? 'درخواست استعلام' : 'Request a Quote', path: '/contact' },
  ];

  const certifications = ['ISO 9001:2015', 'ISO 14001', 'OHSAS 18001', 'API', 'ASME', 'IEC', 'ATEX'];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container-wide py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Column 1 - Products */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-primary-foreground">
              {language === 'fa' ? 'محصولات' : 'Products'}
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/75 hover:text-accent transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Industries */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-primary-foreground">
              {language === 'fa' ? 'صنایع' : 'Industries'}
            </h3>
            <ul className="space-y-2.5">
              {industryLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/75 hover:text-accent transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-primary-foreground">
              {language === 'fa' ? 'شرکت' : 'Company'}
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/75 hover:text-accent transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Resources */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-primary-foreground">
              {language === 'fa' ? 'منابع و پشتیبانی' : 'Resources'}
            </h3>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/75 hover:text-accent transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Contact */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <h3 className="font-bold text-lg mb-4 text-primary-foreground">
              {language === 'fa' ? 'تماس با ما' : 'Contact Us'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/75">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <span>
                  {language === 'fa'
                    ? 'تهران، خیابان ولیعصر، پلاک ۱۲۳۴، طبقه ۵'
                    : 'Tehran, Valiasr St., No. 1234, 5th Floor'}
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/75">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <div className="flex flex-col">
                  <a href="tel:+982112345678" className="hover:text-accent transition-smooth" dir="ltr">
                    +98 21 1234 5678
                  </a>
                  <a href="tel:+989123456789" className="hover:text-accent transition-smooth" dir="ltr">
                    +98 912 345 6789
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/75">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <a href="mailto:info@petropalayeshco.ir" className="hover:text-accent transition-smooth">
                  info@petropalayeshco.ir
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/petropalayeshco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/petropalayeshco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/petropalayeshco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="px-4 py-2 bg-primary-foreground/10 rounded-lg text-sm font-medium text-primary-foreground/80"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-8">
          <div className="rounded-xl overflow-hidden border border-primary-foreground/20 shadow-elegant">
            <iframe
              src="https://maps.google.com/maps?ll=35.704071,51.378513&z=15&t=m&hl=en&gl=US&mapclient=embed&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={language === 'fa' ? 'موقعیت مکانی پتروپالایش کو' : 'PetroPalayeshco Location'}
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-primary-foreground/60 text-center md:text-start">
              {language === 'fa'
                ? `© ${new Date().getFullYear()} پتروپالایش کو. تمامی حقوق محفوظ است.`
                : `© ${new Date().getFullYear()} PetroPalayeshco. All rights reserved.`}
            </p>
            
            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
              <Link to="/privacy" className="hover:text-accent transition-smooth">
                {language === 'fa' ? 'حریم خصوصی' : 'Privacy Policy'}
              </Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-accent transition-smooth">
                {language === 'fa' ? 'شرایط استفاده' : 'Terms & Conditions'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
