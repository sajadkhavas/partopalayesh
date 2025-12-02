import { Link } from 'react-router-dom';
import { Clock, Users, Award, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import heroImage from '@/assets/hero-premium-lab.jpg';

const HomeHero = () => {
  const { language } = useLanguage();
  const ArrowIcon = language === 'fa' ? ArrowLeft : ArrowRight;
  const isRTL = language === 'fa';

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(135deg, hsl(210 100% 12% / 0.92) 0%, hsl(210 100% 18% / 0.75) 50%, transparent 100%)',
            'linear-gradient(145deg, hsl(210 100% 15% / 0.92) 0%, hsl(210 100% 22% / 0.75) 50%, transparent 100%)',
            'linear-gradient(135deg, hsl(210 100% 12% / 0.92) 0%, hsl(210 100% 18% / 0.75) 50%, transparent 100%)',
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      {/* Secondary gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2.5 h-2.5 bg-white/15 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${18 + (i % 3) * 22}%`,
            }}
            animate={{
              y: [-18, 18, -18],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-16">
        <motion.div
          className={cn('max-w-4xl', isRTL ? 'ml-auto text-right' : 'text-left')}
          initial="initial"
          animate="animate"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <Badge 
              variant="secondary" 
              className="mb-4 bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold rounded-full shadow-elegant"
            >
              {language === 'fa' 
                ? 'تجهیزات تخصصی آزمایشگاهی و ابزار دقیق فرآیندی' 
                : 'Specialized Lab & Process Instrumentation'}
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-xl text-white"
          >
            {language === 'fa' 
              ? 'تأمین‌کننده تجهیزات آزمایشگاهی و ابزار دقیق برای نفت، گاز و پتروشیمی'
              : 'Lab equipment and process instrumentation trusted by oil, gas, and petrochemical leaders'}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl drop-shadow-md"
          >
            {language === 'fa' 
              ? 'از انتخاب فنی تا نصب و کالیبراسیون، راهکارهای کامل برای آزمایشگاه‌ها و فرآیندهای صنعتی شما را با استانداردهای بین‌المللی فراهم می‌کنیم.'
              : 'From technical selection to installation and calibration, we deliver end-to-end solutions for critical labs and process units with international standards.'}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className={cn('flex flex-col sm:flex-row gap-4 mb-10', isRTL && 'sm:flex-row-reverse justify-end')}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-elegant px-8 py-6 text-base"
            >
              <Link to="/contact">
                {language === 'fa' ? 'درخواست مشاوره و استعلام' : 'Request quote & consulting'}
                <ArrowIcon className="w-5 h-5 ms-2" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white/40 text-white hover:bg-white hover:text-primary backdrop-blur-sm font-semibold px-8 py-6 text-base"
            >
              <Link to="/products">
                {language === 'fa' ? 'مشاهده همه تجهیزات' : 'View all equipment'}
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={fadeInUp}
            className={cn(
              'flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 md:gap-4 text-white/90',
              isRTL ? 'sm:justify-end' : 'sm:justify-start'
            )}
          >
            <TrustIndicator 
              icon={Clock} 
              value="20+" 
              label={language === 'fa' ? 'سال تجربه در پروژه‌های صنعتی' : 'years industrial experience'} 
            />
            <TrustIndicator 
              icon={Users} 
              value="500+" 
              label={language === 'fa' ? 'مشتری در صنایع نفت و گاز' : 'clients in oil & gas'} 
            />
            <TrustIndicator 
              icon={Award} 
              value="ISO / API" 
              label={language === 'fa' ? 'استانداردها و گواهی‌نامه‌ها' : 'standards & certifications'} 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustIndicator = ({ 
  icon: Icon, 
  value, 
  label 
}: { 
  icon: React.ElementType; 
  value: string; 
  label: string;
}) => (
  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 shadow-elegant">
    <div className="w-11 h-11 rounded-lg bg-teal/30 flex items-center justify-center">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div>
      <div className="text-xl md:text-2xl font-bold text-white">{value}</div>
      <div className="text-xs md:text-sm text-white/80">{label}</div>
    </div>
  </div>
);

export default HomeHero;
