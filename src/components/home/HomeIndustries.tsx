import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { industries } from '@/data/industries';
import industryOilGas from '@/assets/industry-oil-gas.jpg';
import industryPetrochemical from '@/assets/industry-petrochemical.jpg';
import industryWater from '@/assets/industry-water.jpg';

const industryImages: Record<string, string> = {
  'oil-gas': industryOilGas,
  'petrochemical': industryPetrochemical,
  'water-wastewater': industryWater,
  'power-energy': industryOilGas,
  'food-beverage': industryPetrochemical,
  'pharmaceutical': industryWater,
};

const HomeIndustries = () => {
  const { language } = useLanguage();
  const ArrowIcon = language === 'fa' ? ArrowLeft : ArrowRight;

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {language === 'fa' ? 'صنایع تحت پوشش' : 'Industries We Serve'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'fa' 
              ? 'تأمین تجهیزات تخصصی برای طیف گسترده‌ای از صنایع' 
              : 'Specialized equipment supply for a wide range of industries'}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {industries.slice(0, 8).map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <Link 
                to={`/industries/${industry.slug}`} 
                className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-elegant hover:shadow-elegant-lg transition-all duration-300 block"
              >
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={industryImages[industry.slug] || industryOilGas} 
                    alt={language === 'fa' ? industry.name : industry.nameEn} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-2 left-2 text-3xl opacity-90">
                    {industry.icon}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                    {language === 'fa' ? industry.name : industry.nameEn}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {language === 'fa' ? 'مشاهده بیشتر' : 'Learn more'}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-8"
        >
          <Link to="/industries">
            <Button variant="outline" className="group">
              {language === 'fa' ? 'مشاهده همه صنایع' : 'View All Industries'}
              <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeIndustries;
