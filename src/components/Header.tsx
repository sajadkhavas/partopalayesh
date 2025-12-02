import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, ChevronDown, Globe, Beaker, Gauge, Wrench, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRFQ } from '@/contexts/RFQContext';
import { industries } from '@/data/industries';
import { productCategories } from '@/data/industries';
import { cn } from '@/lib/utils';
import { SearchModal } from '@/components/SearchModal';
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const {
    language,
    setLanguage,
    t
  } = useLanguage();
  const {
    items,
    setIsOpen
  } = useRFQ();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  const getCategoryIcon = (type: string) => {
    switch (type) {
      case 'laboratory':
        return <Beaker className="w-5 h-5" />;
      case 'process':
        return <Gauge className="w-5 h-5" />;
      case 'calibration':
        return <Wrench className="w-5 h-5" />;
      case 'accessories':
        return <Package className="w-5 h-5" />;
      default:
        return <Package className="w-5 h-5" />;
    }
  };
  const menuItems = [{
    label: t('nav.home'),
    path: '/'
  }, {
    label: t('nav.products'),
    path: '/products',
    megaMenu: 'products'
  }, {
    label: language === 'fa' ? 'صنایع' : 'Industries',
    path: '/industries',
    megaMenu: 'industries'
  }, {
    label: t('nav.services'),
    path: '/services'
  }, {
    label: language === 'fa' ? 'برندها' : 'Brands',
    path: '/brands'
  }, {
    label: t('nav.resources'),
    path: '/resources',
    submenu: [{
      label: language === 'fa' ? 'کاتالوگ و دیتاشیت' : 'Technical Documents',
      path: '/resources/catalogs'
    }, {
      label: language === 'fa' ? 'مقالات و راهنما' : 'Articles & Guides',
      path: '/resources/blog'
    }, {
      label: language === 'fa' ? 'سوالات متداول' : 'FAQ',
      path: '/resources/faq'
    }]
  }, {
    label: t('nav.about'),
    path: '/about'
  }];
  return <header className={cn('fixed top-0 left-0 right-0 z-50 transition-smooth', isScrolled ? 'bg-navy shadow-elegant-lg' : 'bg-navy-light/95 backdrop-blur-md')}>
      {/* Top Bar with Search & Stats */}
      <div className="bg-navy-dark border-b border-teal/20 overflow-hidden">
        <div className="container-wide">
          <div className="flex items-center justify-between gap-3 md:gap-6 h-12 py-2">
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl min-w-0">
              <div className="relative">
                <Search className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 text-white/40" />
                <input 
                  type="text" 
                  placeholder={language === 'fa' ? 'جستجو...' : 'Search...'} 
                  className="w-full h-8 md:h-9 pl-8 md:pl-10 pr-2 md:pr-4 bg-white/10 border border-teal-light/30 rounded-lg text-xs md:text-sm text-white placeholder:text-white/50 focus:bg-white/15 focus:border-teal-light/50 focus:outline-none transition-all" 
                  onClick={() => setIsSearchOpen(true)} 
                  readOnly 
                />
              </div>
            </div>

            {/* Stats */}
            <div className="hidden md:flex items-center gap-6 text-xs text-white/70">
              <span className="flex items-center gap-2">
                <span className="font-bold text-white">+20</span>
                {language === 'fa' ? 'سال تجربه' : 'years experience'}
              </span>
              <span className="flex items-center gap-2">
                <span className="font-bold text-white">+500</span>
                {language === 'fa' ? 'مشتری' : 'clients'}
              </span>
              <span className="flex items-center gap-2">
                <span className="font-bold text-white">+1000</span>
                {language === 'fa' ? 'پروژه موفق' : 'successful projects'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide overflow-hidden">
        <div className="flex items-center justify-between h-16 lg:h-18 gap-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 transition-smooth hover:opacity-90 shrink-0">
            <div className="w-9 h-9 md:w-11 md:h-11 bg-white rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-primary font-bold text-lg md:text-xl">PP</span>
            </div>
            <div className={cn('flex flex-col', language === 'fa' ? 'items-end' : 'items-start')}>
              <span className="font-bold text-sm md:text-base lg:text-lg text-white whitespace-nowrap">
                {language === 'fa' ? 'پتروپالایش کو' : 'PetroPalayeshco'}
              </span>
              <span className="text-[10px] md:text-xs text-white/60 hidden sm:block">
                {language === 'fa' ? 'تأمین تجهیزات آزمایشگاهی و ابزار دقیق' : 'Lab Equipment & Precision Instruments'}
              </span>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {menuItems.map(item => <div key={item.path} className="relative" onMouseEnter={() => (item.submenu || item.megaMenu) && setActiveMenu(item.label)} onMouseLeave={() => setActiveMenu(null)}>
                <Link to={item.path} className={cn('relative px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1', 'transition-all duration-300 ease-out', location.pathname === item.path ? 'text-white bg-white/10 font-semibold' : 'text-white/80 hover:text-white hover:bg-white/5')}>
                  <span>{item.label}</span>
                  {(item.submenu || item.megaMenu) && <ChevronDown className={cn('w-4 h-4 transition-transform', activeMenu === item.label && 'rotate-180')} />}
                </Link>

                {/* Regular Submenu */}
                {item.submenu && activeMenu === item.label && <div className="absolute top-full left-0 mt-1 w-56 bg-card rounded-lg shadow-elegant-lg border overflow-hidden animate-fade-in">
                    {item.submenu.map(subItem => <Link key={subItem.path} to={subItem.path} className="block px-4 py-3 text-sm hover:bg-secondary transition-smooth">
                        {subItem.label}
                      </Link>)}
                  </div>}

                {/* Products Mega Menu */}
                {item.megaMenu === 'products' && activeMenu === item.label && <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[800px] bg-card rounded-xl shadow-elegant-xl border animate-fade-in">
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        {productCategories.map(category => <div key={category.id} className="space-y-3">
                            <Link to={`/products?type=${category.type}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-smooth group">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                                {getCategoryIcon(category.type)}
                              </div>
                              <div>
                                <h4 className="font-bold text-sm group-hover:text-primary transition-smooth">
                                  {language === 'fa' ? category.name : category.nameEn}
                                </h4>
                                <p className="text-xs text-muted-foreground">
                                  {category.subcategories.length} {language === 'fa' ? 'زیرمجموعه' : 'subcategories'}
                                </p>
                              </div>
                            </Link>
                            <div className={cn('space-y-1', language === 'fa' ? 'pr-4 border-r-2' : 'pl-4 border-l-2', 'border-border')}>
                              {category.subcategories.slice(0, 4).map(sub => <Link key={sub.id} to={`/products?category=${sub.id}`} className="block px-3 py-1.5 text-xs rounded hover:bg-accent/10 hover:text-accent transition-smooth">
                                  {language === 'fa' ? sub.name : sub.nameEn}
                                </Link>)}
                              {category.subcategories.length > 4 && <Link to={`/products?type=${category.type}`} className="block px-3 py-1.5 text-xs text-primary hover:underline">
                                  {language === 'fa' ? `+${category.subcategories.length - 4} بیشتر` : `+${category.subcategories.length - 4} more`}
                                </Link>}
                            </div>
                          </div>)}
                      </div>
                      <div className="mt-6 pt-4 border-t flex justify-center">
                        <Link to="/products">
                          <Button className="bg-gradient-accent text-white">
                            {language === 'fa' ? 'مشاهده همه محصولات' : 'Browse All Products'}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>}

                {/* Industries Mega Menu */}
                {item.megaMenu === 'industries' && activeMenu === item.label && <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[600px] bg-card rounded-xl shadow-elegant-xl border animate-fade-in">
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-3">
                        {industries.map(industry => <Link key={industry.id} to={`/industries/${industry.slug}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-smooth group">
                            <span className="text-2xl">{industry.icon}</span>
                            <div>
                              <h4 className="font-medium text-sm group-hover:text-primary transition-smooth">
                                {language === 'fa' ? industry.name : industry.nameEn}
                              </h4>
                            </div>
                          </Link>)}
                      </div>
                    </div>
                  </div>}
              </div>)}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
            

            <Button variant="ghost" size="icon" onClick={() => setLanguage(language === 'fa' ? 'en' : 'fa')} className="relative text-white hover:bg-white/10 w-9 h-9 md:w-10 md:h-10">
              <Globe className="w-4 h-4 md:w-5 md:h-5" />
              <span className="absolute -bottom-1 -right-1 text-[9px] md:text-[10px] font-bold bg-accent text-white rounded px-1">
                {language.toUpperCase()}
              </span>
            </Button>

            <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10 w-9 h-9 md:w-10 md:h-10" onClick={() => setIsOpen(true)}>
              <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
              {items.length > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-accent text-white text-[10px] md:text-xs rounded-full flex items-center justify-center">
                  {items.length}
                </span>}
            </Button>

            <Link to="/contact" className="hidden md:block">
              <Button className="bg-teal hover:bg-teal-light text-white font-bold shadow-lg hover:shadow-glow transition-all text-sm whitespace-nowrap">
                {language === 'fa' ? 'درخواست استعلام' : 'Request Quote'}
              </Button>
            </Link>

            <Button variant="ghost" size="icon" className="lg:hidden w-9 h-9" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetContent side={language === 'fa' ? 'right' : 'left'} className="w-[300px] p-0">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b">
                <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">PP</span>
                  </div>
                  <div className={cn('flex flex-col', language === 'fa' ? 'items-end' : 'items-start')}>
                    <span className="font-bold text-sm text-foreground">
                      {language === 'fa' ? 'پتروپالایش کو' : 'PetroPalayeshco'}
                    </span>
                  </div>
                </Link>
              </div>

              <nav className="flex-1 overflow-y-auto p-4">
                {menuItems.map(item => <div key={item.path} className="mb-2">
                    {item.submenu || item.megaMenu ? <button onClick={() => setExpandedMobileSection(expandedMobileSection === item.label ? null : item.label)} className={cn('w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-md transition-smooth', expandedMobileSection === item.label ? 'bg-primary/10 text-primary' : 'hover:bg-secondary')}>
                        <span>{item.label}</span>
                        <ChevronDown className={cn('w-4 h-4 transition-transform', expandedMobileSection === item.label && 'rotate-180')} />
                      </button> : <Link to={item.path} className={cn('block px-4 py-3 text-sm font-medium rounded-md transition-smooth', location.pathname === item.path ? 'bg-primary/10 text-primary' : 'hover:bg-secondary')} onClick={() => setIsMobileMenuOpen(false)}>
                        {item.label}
                      </Link>}

                    {/* Mobile Products Submenu */}
                    {item.megaMenu === 'products' && expandedMobileSection === item.label && <div className="mt-2 space-y-2 animate-accordion-down">
                        {productCategories.map(category => <Link key={category.id} to={`/products?type=${category.type}`} className={cn('flex items-center gap-3 px-4 py-2 text-sm rounded-md hover:bg-secondary/50 transition-smooth', language === 'fa' ? 'pr-8' : 'pl-8')} onClick={() => setIsMobileMenuOpen(false)}>
                            {getCategoryIcon(category.type)}
                            <span>{language === 'fa' ? category.name : category.nameEn}</span>
                          </Link>)}
                        <Link to="/products" className={cn('block px-4 py-2 text-sm text-primary font-medium rounded-md hover:bg-secondary/50 transition-smooth', language === 'fa' ? 'pr-8' : 'pl-8')} onClick={() => setIsMobileMenuOpen(false)}>
                          {language === 'fa' ? 'همه محصولات' : 'All Products'}
                        </Link>
                      </div>}

                    {/* Mobile Industries Submenu */}
                    {item.megaMenu === 'industries' && expandedMobileSection === item.label && <div className="mt-2 space-y-1 animate-accordion-down">
                        {industries.slice(0, 6).map(industry => <Link key={industry.id} to={`/industries/${industry.slug}`} className={cn('flex items-center gap-3 px-4 py-2 text-sm rounded-md hover:bg-secondary/50 transition-smooth', language === 'fa' ? 'pr-8' : 'pl-8')} onClick={() => setIsMobileMenuOpen(false)}>
                            <span>{industry.icon}</span>
                            <span>{language === 'fa' ? industry.name : industry.nameEn}</span>
                          </Link>)}
                      </div>}

                    {/* Mobile Regular Submenu */}
                    {item.submenu && expandedMobileSection === item.label && <div className="mt-2 space-y-1 animate-accordion-down">
                        {item.submenu.map(subItem => <Link key={subItem.path} to={subItem.path} className={cn('block px-4 py-2 text-sm text-muted-foreground rounded-md hover:bg-secondary/50 hover:text-foreground transition-smooth', language === 'fa' ? 'pr-8' : 'pl-8')} onClick={() => setIsMobileMenuOpen(false)}>
                            {subItem.label}
                          </Link>)}
                      </div>}
                  </div>)}
              </nav>

              <div className="p-4 border-t space-y-2">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-accent text-white">
                    {language === 'fa' ? 'درخواست استعلام قیمت' : 'Request Quote'}
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </div>
    </header>;
};