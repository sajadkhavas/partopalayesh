import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const HomeStats = () => {
  const { language } = useLanguage();

  const stats = [
    { value: '10+', label: language === 'fa' ? 'سال تجربه' : 'Years Experience' },
    { value: '500+', label: language === 'fa' ? 'پروژه موفق' : 'Successful Projects' },
    { value: '1000+', label: language === 'fa' ? 'تجهیز نصب شده' : 'Installed Equipment' },
    { value: '24/7', label: language === 'fa' ? 'پشتیبانی فنی' : 'Technical Support' },
  ];

  return (
    <section className="py-12 bg-gradient-subtle border-b">
      <div className="container-wide">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-xl bg-card hover-lift border border-border/50"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeStats;
