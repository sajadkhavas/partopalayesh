import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle } from 'lucide-react';
import { SITE_URL } from '@/config';

const ThankYou = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background" dir={language === 'fa' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{language === 'fa' ? 'درخواست شما ثبت شد | پتروپالایش' : 'Request Received | PetroPalayeshco'}</title>
        <meta
          name="description"
          content={language === 'fa'
            ? 'درخواست استعلام شما دریافت شد. تیم ما به‌زودی با شما تماس خواهد گرفت.'
            : 'Your quotation request has been received. Our team will contact you shortly.'}
        />
        <link rel="canonical" href={`${SITE_URL}/thank-you`} />
        <meta property="og:title" content={language === 'fa' ? 'درخواست ثبت شد' : 'Request submitted'} />
        <meta property="og:description" content={language === 'fa'
          ? 'سپاس از ارسال درخواست. به سرعت پاسخ خواهیم داد.'
          : 'Thank you for your inquiry. We will respond promptly.'} />
        <meta property="og:url" content={`${SITE_URL}/thank-you`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/precision-instruments.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'fa' ? 'درخواست ثبت شد' : 'Request submitted'} />
        <meta name="twitter:description" content={language === 'fa'
          ? 'سپاس از ارسال درخواست. به سرعت پاسخ خواهیم داد.'
          : 'Thank you for your inquiry. We will respond promptly.'} />
        <meta name="twitter:image" content={`${SITE_URL}/precision-instruments.jpg`} />
      </Helmet>
      <Header />
      <main className="pt-24 section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto bg-card border rounded-2xl shadow-elegant p-8 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-bold">
              {language === 'fa' ? 'درخواست شما دریافت شد' : 'Your request has been received'}
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'fa'
                ? 'متشکریم! تیم ما طی ۲۴ تا ۴۸ ساعت آینده با شما تماس خواهد گرفت.'
                : 'Thank you! Our team will contact you within the next 24–48 hours.'}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              <Link to="/products">
                <Button>{language === 'fa' ? 'مشاهده محصولات' : 'Browse products'}</Button>
              </Link>
              <Link to="/">
                <Button variant="outline">{language === 'fa' ? 'بازگشت به خانه' : 'Back to home'}</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
