import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { products } from '@/data/products';

const HomeFeaturedProducts = () => {
  const { language } = useLanguage();
  const ArrowIcon = language === 'fa' ? ArrowLeft : ArrowRight;
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-wide">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12"
        >
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-2">
              {language === 'fa' ? 'محصولات منتخب' : 'Featured Products'}
            </h2>
            <p className="text-muted-foreground">
              {language === 'fa' 
                ? 'محصولات برتر با بالاترین کیفیت و استانداردهای بین‌المللی' 
                : 'Top products with highest quality and international standards'}
            </p>
          </div>
          <Link to="/products">
            <Button variant="outline" className="group">
              {language === 'fa' ? 'مشاهده همه' : 'View All'}
              <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturedProducts;
