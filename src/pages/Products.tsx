import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, ArrowLeft, ArrowRight, Package, Award } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { ProductGridSkeleton } from '@/components/ProductSkeleton';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories, subcategories } from '@/data/products';
import { useProducts } from '@/hooks/useProducts';
import { cn } from '@/lib/utils';
import { SITE_URL } from '@/config';

const categoryImages: Record<string, string> = {
  analytical: '/analytical-equipment.jpg',
  precision: '/precision-instruments.jpg',
  'sample-prep': '/sample-prep-professional.jpg',
  petroleum: '/petroleum-equipment.jpg',
};

const categoryDescriptions: Record<string, { fa: string; en: string }> = {
  analytical: {
    fa: 'اسپکتروسکوپی، کروماتوگرافی، آنالیز سطح و آزمون‌های حرارتی برای کنترل کیفیت و تحقیق و توسعه.',
    en: 'Spectroscopy, chromatography, surface analysis, and thermal testing built for QC and R&D teams.',
  },
  precision: {
    fa: 'فلومترهای کوریولیس، دتکتور گاز و کنترل‌کننده‌های جریان برای پایش و ایمنی فرآیند.',
    en: 'Coriolis flow meters, gas detectors, and flow controllers engineered for process safety.',
  },
  'sample-prep': {
    fa: 'هموژنایزر، سانتریفیوژ و شیکر برای آماده‌سازی دقیق نمونه‌های نفتی و پتروشیمیایی.',
    en: 'Homogenizers, centrifuges, and shakers for precise preparation of petrochemical samples.',
  },
  petroleum: {
    fa: 'تست‌های ویسکوزیته، ارزش حرارتی و باقیمانده کربن مطابق استانداردهای ASTM و ISO.',
    en: 'Viscosity, heating value, and carbon residue testing aligned with ASTM and ISO standards.',
  },
};

export default function Products() {
  const { language } = useLanguage();
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [subcategoryFilter, setSubcategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const activeCategoryParam = categoryFilter === 'all' ? '' : categoryFilter;
  const activeSubcategoryParam = subcategoryFilter === 'all' ? '' : subcategoryFilter;

  const { data: productList, isLoading } = useProducts(activeCategoryParam, activeSubcategoryParam);
  const safeProductList = Array.isArray(productList) ? productList : [];

  const availableSubcategories = useMemo(
    () => subcategories.filter((sub) => categoryFilter === 'all' || sub.categoryId === categoryFilter),
    [categoryFilter],
  );

  useEffect(() => {
    if (subcategoryFilter === 'all') return;
    const exists = availableSubcategories.some((sub) => sub.id === subcategoryFilter);
    if (!exists) {
      setSubcategoryFilter('all');
    }
  }, [availableSubcategories, subcategoryFilter]);

  const visibleProducts = useMemo(() => {
    const term = searchQuery.trim().toLowerCase();
    if (!term) return safeProductList;
    return safeProductList.filter((product) => {
      return (
        product.name.toLowerCase().includes(term) ||
        product.nameEn.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.descriptionEn.toLowerCase().includes(term) ||
        product.slug.toLowerCase().includes(term)
      );
    });
  }, [safeProductList, searchQuery]);

  return (
    <div className="min-h-screen bg-background" dir={language === 'fa' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{language === 'fa' ? 'محصولات تخصصی آزمایشگاهی' : 'Laboratory Products'}</title>
        <meta
          name="description"
          content={
            language === 'fa'
              ? 'مشاهده تجهیزات آزمایشگاهی، ابزار دقیق و دستگاه‌های تست نفت و گاز با امکان فیلتر بر اساس دسته، زیر دسته و جستجو.'
              : 'Browse analytical instruments, precision devices, and petroleum testing systems with category and subcategory filters.'
          }
        />
        <link rel="canonical" href={`${SITE_URL}/products`} />
        <meta property="og:title" content={language === 'fa' ? 'محصولات آزمایشگاهی پتروپالایش' : 'PetroPalayeshco Product Catalog'} />
        <meta property="og:description" content={language === 'fa'
          ? 'کاتالوگ کامل تجهیزات آزمایشگاهی، ابزار دقیق و دستگاه‌های تست فرآیندی با فیلتر و جستجو.'
          : 'Complete catalog of laboratory equipment, instrumentation, and process testing devices with filters and search.'} />
        <meta property="og:url" content={`${SITE_URL}/products`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/precision-instruments.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'fa' ? 'محصولات آزمایشگاهی پتروپالایش' : 'PetroPalayeshco Products'} />
        <meta name="twitter:description" content={language === 'fa'
          ? 'لیست محصولات آزمایشگاهی و ابزار دقیق برای صنایع نفت، گاز و پتروشیمی.'
          : 'List of laboratory and instrumentation products for oil, gas, and petrochemical industries.'} />
        <meta name="twitter:image" content={`${SITE_URL}/precision-instruments.jpg`} />
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
                  <BreadcrumbPage>{language === 'fa' ? 'محصولات' : 'Products'}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-gradient-subtle border-b">
          <div className="container-wide space-y-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-3">
                <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                  {language === 'fa' ? 'دسته‌بندی کامل محصولات' : 'Complete Product Portfolio'}
                </h1>
                <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed">
                  {language === 'fa'
                    ? 'ابزار دقیق، دستگاه‌های آنالیز و تجهیزات آماده‌سازی نمونه برای آزمایشگاه‌های صنعت نفت، گاز و پتروشیمی با استانداردهای بین‌المللی.'
                    : 'Instrumentation, analytical devices, and sample prep systems for oil, gas, and petrochemical labs built to international standards.'}
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <Badge variant="secondary" className="px-3 py-1">
                    <Package className="w-4 h-4 ml-1" />
                    {language === 'fa' ? 'تنوع کامل تجهیزات' : 'Complete equipment mix'}
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    <Award className="w-4 h-4 ml-1" />
                    {language === 'fa' ? 'مطابق استاندارد ASTM/ISO' : 'ASTM / ISO ready'}
                  </Badge>
                </div>
              </div>
              <div className="w-full lg:w-96">
                <div className="relative">
                  <Search className={cn('absolute top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground', language === 'fa' ? 'right-3' : 'left-3')} />
                  <Input
                    placeholder={language === 'fa' ? 'جستجوی نام، مدل یا استاندارد...' : 'Search name, model, or standard...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={cn('w-full text-base py-6 rounded-2xl shadow-sm border-border', language === 'fa' ? 'pr-11' : 'pl-11')}
                  />
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-2xl shadow-elegant p-4 lg:p-6">
              <div className="flex items-center gap-3 text-sm font-semibold mb-4">
                <Filter className="w-4 h-4" />
                <span>{language === 'fa' ? 'فیلتر محصولات' : 'Filter products'}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Select value={categoryFilter} onValueChange={(value) => setCategoryFilter(value)}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder={language === 'fa' ? 'انتخاب دسته' : 'Select category'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{language === 'fa' ? 'همه دسته‌ها' : 'All categories'}</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {language === 'fa' ? category.name : category.nameEn}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={subcategoryFilter} onValueChange={(value) => setSubcategoryFilter(value)}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder={language === 'fa' ? 'انتخاب زیر دسته' : 'Select subcategory'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{language === 'fa' ? 'همه زیر دسته‌ها' : 'All subcategories'}</SelectItem>
                    {availableSubcategories.map((sub) => (
                      <SelectItem key={sub.id} value={sub.id}>
                        {language === 'fa' ? sub.name : sub.nameEn}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    className="w-full rounded-xl"
                    onClick={() => {
                      setCategoryFilter('all');
                      setSubcategoryFilter('all');
                      setSearchQuery('');
                    }}
                  >
                    {language === 'fa' ? 'پاک کردن فیلترها' : 'Clear filters'}
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>
                {isLoading
                  ? language === 'fa'
                    ? 'در حال بارگذاری محصولات...'
                    : 'Loading products...'
                  : `${visibleProducts.length} ${language === 'fa' ? 'محصول' : 'products'}`}
              </span>
              {categoryFilter !== 'all' && (
                <div className="flex items-center gap-2 text-xs">
                  <Badge variant="outline" className="rounded-full">
                    {language === 'fa' ? 'دسته' : 'Category'}: {language === 'fa'
                      ? categories.find((c) => c.id === categoryFilter)?.name
                      : categories.find((c) => c.id === categoryFilter)?.nameEn}
                  </Badge>
                  {subcategoryFilter !== 'all' && (
                    <Badge variant="outline" className="rounded-full">
                      {language === 'fa' ? 'زیر دسته' : 'Subcategory'}: {language === 'fa'
                        ? availableSubcategories.find((s) => s.id === subcategoryFilter)?.name
                        : availableSubcategories.find((s) => s.id === subcategoryFilter)?.nameEn}
                    </Badge>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            {isLoading ? (
              <ProductGridSkeleton />
            ) : visibleProducts.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <p className="text-lg font-semibold">{language === 'fa' ? 'محصولی یافت نشد' : 'No products found'}</p>
                <p className="text-muted-foreground">
                  {language === 'fa'
                    ? 'فیلترها را تغییر دهید یا دوباره جستجو کنید.'
                    : 'Try adjusting filters or searching with a different keyword.'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {visibleProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-card border-t">
          <div className="container-wide space-y-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                  {language === 'fa' ? 'مرور بر اساس دسته' : 'Browse by category'}
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                  {language === 'fa'
                    ? 'برای دسترسی سریع به تجهیزات مرتبط با هر فرآیند صنعتی، دسته مناسب را انتخاب کنید.'
                    : 'Jump into categories tailored to your industrial process and testing needs.'}
                </p>
              </div>
              <Button asChild variant="outline" className="rounded-xl">
                <Link to="/contact">{language === 'fa' ? 'نیاز به راهنمایی دارید؟' : 'Need recommendations?'}</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link key={category.id} to={`/products/category/${category.id}`} className="group block bg-background border rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-xl transition-smooth">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={categoryImages[category.id] || '/analytical-equipment.jpg'}
                      alt={`${language === 'fa' ? category.name : category.nameEn} showcase`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white space-y-2">
                      <h3 className="text-xl font-bold">{language === 'fa' ? category.name : category.nameEn}</h3>
                      <p className="text-sm text-white/80 line-clamp-2">
                        {language === 'fa' ? categoryDescriptions[category.id].fa : categoryDescriptions[category.id].en}
                      </p>
                      <div className="inline-flex items-center gap-2 text-sm font-semibold">
                        {language === 'fa' ? 'مشاهده محصولات' : 'View products'}
                        {language === 'fa' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
