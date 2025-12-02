import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { productCategories } from '@/data/industries';
import categoryAnalytical from '@/assets/category-analytical.jpg';
import categoryProcess from '@/assets/category-process.jpg';
import categoryCalibration from '@/assets/category-calibration.jpg';
import categoryAccessories from '@/assets/category-accessories.jpg';

const categoryImages: Record<string, string> = {
  'laboratory': categoryAnalytical,
  'process': categoryProcess,
  'calibration': categoryCalibration,
  'accessories': categoryAccessories,
};

const HomeCategories = () => {
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
            {language === 'fa' ? 'دسته‌بندی تجهیزات' : 'Equipment Categories'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'fa' 
              ? 'طیف کاملی از تجهیزات آزمایشگاهی و ابزار دقیق فرآیندی برای تمام نیازهای صنعتی' 
              : 'Complete range of laboratory equipment and process instrumentation for all industrial needs'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link 
                to={`/products?type=${category.type}`} 
                className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-elegant hover:shadow-elegant-xl transition-all duration-500 block"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={categoryImages[category.type]} 
                    alt={language === 'fa' ? category.name : category.nameEn} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {language === 'fa' ? category.name : category.nameEn}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.subcategories.length} {language === 'fa' ? 'زیرمجموعه' : 'subcategories'}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <span>{language === 'fa' ? 'مشاهده محصولات' : 'View Products'}</span>
                    <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;
