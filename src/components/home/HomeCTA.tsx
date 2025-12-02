import { Link } from 'react-router-dom';
import { MessageSquare, FileText, CheckCircle, Shield, Award, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HomeCTA = () => {
  const { language } = useLanguage();

  const trustIndicators = language === 'fa' 
    ? [
        { icon: CheckCircle, text: 'پاسخ در کمتر از ۲۴ ساعت' },
        { icon: Shield, text: 'تضمین کیفیت محصولات' },
        { icon: Award, text: 'گواهینامه‌های بین‌المللی' },
        { icon: Star, text: 'رضایت ۴.۹ از ۵' },
      ]
    : [
        { icon: CheckCircle, text: 'Response in less than 24 hours' },
        { icon: Shield, text: 'Quality guarantee' },
        { icon: Award, text: 'International certifications' },
        { icon: Star, text: '4.9/5 Satisfaction' },
      ];

  return (
    <section className="section-padding relative overflow-hidden">
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
            {language === 'fa' 
              ? 'برای انتخاب تجهیز مناسب، با تیم فنی ما مشورت کنید' 
              : 'Consult with Our Technical Team for Equipment Selection'}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {language === 'fa' 
              ? 'تیم مهندسی ما با بیش از ۲۰ سال تجربه، آماده است تا در انتخاب بهترین تجهیزات برای نیازهای صنعتی شما راهنمایی کنند' 
              : 'Our engineering team with over 20 years of experience is ready to guide you in selecting the best equipment for your industrial needs'}
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
          
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
            {trustIndicators.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <item.icon className={`w-5 h-5 ${index === 3 ? 'fill-current' : ''}`} />
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCTA;
