import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, ArrowLeft, ArrowRight, Grid3x3, List } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories, subcategories } from '@/data/products';
import { cn } from '@/lib/utils';
import { useProducts } from '@/hooks/useProducts';
import { SITE_URL } from '@/config';

const categoryImages: Record<string, string> = {
  analytical: '/analytical-equipment.jpg',
  precision: '/precision-instruments.jpg',
  'sample-prep': '/sample-prep-professional.jpg',
  petroleum: '/petroleum-equipment.jpg',
};

const categoryDescriptions: Record<string, { fa: string; en: string }> = {
  analytical: {
    fa: 'اسپکتروسکوپی، کروماتوگرافی، آنالیز سطح و آزمون‌های حرارتی برای کنترل کیفیت و توسعه محصول.',
    en: 'Spectroscopy, chromatography, surface, and thermal analysis for QC and product development.',
  },
  precision: {
    fa: 'فلومتر، کنترل‌کننده جریان و دتکتور گاز برای پایش پیوسته خطوط فرآیندی.',
    en: 'Flow meters, controllers, and gas detection for continuous process monitoring.',
  },
  'sample-prep': {
    fa: 'هموژنایزر، شیکر و سانتریفیوژ برای آماده‌سازی دقیق نمونه‌های نفتی و پتروشیمی.',
    en: 'Homogenizers, shakers, and centrifuges for precise petrochemical sample prep.',
  },
  petroleum: {
    fa: 'آزمون‌های ویسکوزیته، ارزش حرارتی و باقیمانده کربن مطابق استانداردهای ASTM.',
    en: 'Viscosity, heating value, and carbon residue testing aligned with ASTM standards.',
  },
};

export default function CategoryProducts() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [subcategoryFilter, setSubcategoryFilter] = useState<string>('all');

  const currentCategory = categories.find((c) => c.id === categorySlug);

  useEffect(() => {
    setSubcategoryFilter('all');
    setSearchQuery('');
  }, [categorySlug]);

  useEffect(() => {
    if (!currentCategory) {
      navigate('/products');
    }
  }, [currentCategory, navigate]);

  const availableSubcategories = useMemo(
    () => subcategories.filter((sub) => sub.categoryId === categorySlug),
    [categorySlug],
  );

  const { data: productList, isLoading } = useProducts(categorySlug || '', subcategoryFilter === 'all' ? '' : subcategoryFilter);
  const safeProductList = Array.isArray(productList) ? productList : [];

  const filteredProducts = useMemo(() => {
    const term = searchQuery.trim().toLowerCase();
    return safeProductList.filter((product) => {
      const matchesSearch =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.nameEn.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.descriptionEn.toLowerCase().includes(term);
      const matchesSub =
        subcategoryFilter === 'all' ||
        !subcategoryFilter ||
        (product.subcategory && product.subcategory === availableSubcategories.find((s) => s.id === subcategoryFilter)?.name) ||
        (product.subcategoryEn && product.subcategoryEn === availableSubcategories.find((s) => s.id === subcategoryFilter)?.nameEn);
      return matchesSearch && matchesSub;
    });
  }, [availableSubcategories, safeProductList, searchQuery, subcategoryFilter]);

  if (!currentCategory) {
    return null;
  }

  const localizedName = language === 'fa' ? currentCategory.name : currentCategory.nameEn;
  const localizedDescription = language === 'fa' ? categoryDescriptions[currentCategory.id].fa : categoryDescriptions[currentCategory.id].en;

  return (
    <div className="min-h-screen bg-background" dir={language === 'fa' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{localizedName}</title>
        <meta name="description" content={localizedDescription} />
        <link rel="canonical" href={`${SITE_URL}/products/category/${categorySlug}`} />
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
                  <BreadcrumbLink asChild>
                    <Link to="/products">{language === 'fa' ? 'محصولات' : 'Products'}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{localizedName}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0">
            <img
              src={categoryImages[currentCategory.id]}
              alt={`${localizedName} hero visual`}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />
          </div>
          <div className="container-wide relative py-12 lg:py-16 space-y-4">
            <Button variant="outline" size="sm" onClick={() => navigate('/products')} className="gap-2 rounded-full">
              {language === 'fa' ? (
                <>
                  <ArrowRight className="w-4 h-4" /> بازگشت
                </>
              ) : (
                <>
                  <ArrowLeft className="w-4 h-4" /> Back
                </>
              )}
            </Button>
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground">{localizedName}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">{localizedDescription}</p>
          </div>
        </section>

        <section className="py-6 border-b bg-card">
          <div className="container-wide space-y-4">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <div className="relative w-full lg:w-96">
                <Search className={cn('absolute top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground', language === 'fa' ? 'right-3' : 'left-3')} />
                <Input
                  placeholder={language === 'fa' ? 'جستجوی محصولات...' : 'Search products...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={cn('w-full', language === 'fa' ? 'pr-10' : 'pl-10')}
                />
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="gap-2 rounded-full"
                >
                  <Grid3x3 className="w-4 h-4" />
                  <span className="hidden sm:inline">{language === 'fa' ? 'شبکه‌ای' : 'Grid'}</span>
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="gap-2 rounded-full"
                >
                  <List className="w-4 h-4" />
                  <span className="hidden sm:inline">{language === 'fa' ? 'لیست' : 'List'}</span>
                </Button>
              </div>
            </div>

            {availableSubcategories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSubcategoryFilter('all')}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm border transition-smooth',
                    subcategoryFilter === 'all'
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background border-border hover:border-primary/60'
                  )}
                >
                  {language === 'fa' ? 'همه زیر دسته‌ها' : 'All subcategories'}
                </button>
                {availableSubcategories.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => setSubcategoryFilter(sub.id)}
                    className={cn(
                      'px-4 py-2 rounded-full text-sm border transition-smooth',
                      subcategoryFilter === sub.id
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background border-border hover:border-primary/60'
                    )}
                  >
                    {language === 'fa' ? sub.name : sub.nameEn}
                  </button>
                ))}
              </div>
            )}

            <div className="text-sm text-muted-foreground">
              {isLoading
                ? language === 'fa'
                  ? 'در حال بارگذاری محصولات...'
                  : 'Loading products...'
                : `${filteredProducts.length} ${language === 'fa' ? 'محصول' : 'products'}`}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-card rounded-lg p-6 animate-pulse">
                    <div className="aspect-square bg-muted rounded-lg mb-4" />
                    <div className="h-4 bg-muted rounded mb-2" />
                    <div className="h-3 bg-muted rounded w-2/3" />
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  {language === 'fa' ? 'محصولی یافت نشد' : 'No products found'}
                </p>
              </div>
            ) : (
              <div className={cn(viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'flex flex-col gap-4')}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} viewMode={viewMode} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
