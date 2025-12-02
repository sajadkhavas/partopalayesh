// Industry data for the B2B site structure
export interface Industry {
  id: string;
  name: string;
  nameEn: string;
  slug: string;
  description: string;
  descriptionEn: string;
  icon: string;
  image: string;
}

export const industries: Industry[] = [
  {
    id: 'oil-gas',
    name: 'نفت و گاز',
    nameEn: 'Oil & Gas',
    slug: 'oil-and-gas',
    description: 'تجهیزات آزمایشگاهی و ابزار دقیق برای صنایع بالادستی و پایین‌دستی نفت و گاز',
    descriptionEn: 'Laboratory equipment and instrumentation for upstream and downstream oil & gas operations',
    icon: '🛢️',
    image: '/petroleum-equipment.jpg',
  },
  {
    id: 'petrochemical',
    name: 'پتروشیمی و پالایش',
    nameEn: 'Petrochemical & Refining',
    slug: 'petrochemical-refining',
    description: 'دستگاه‌های آنالیز و کنترل فرآیند برای مجتمع‌های پتروشیمی و پالایشگاه‌ها',
    descriptionEn: 'Analysis and process control instruments for petrochemical complexes and refineries',
    icon: '🏭',
    image: '/analytical-equipment.jpg',
  },
  {
    id: 'power-energy',
    name: 'نیرو و انرژی',
    nameEn: 'Power & Energy',
    slug: 'power-energy',
    description: 'ابزار دقیق و تجهیزات پایش برای نیروگاه‌ها و صنایع انرژی',
    descriptionEn: 'Precision instruments and monitoring equipment for power plants and energy sector',
    icon: '⚡',
    image: '/precision-instruments.jpg',
  },
  {
    id: 'water-wastewater',
    name: 'آب و فاضلاب',
    nameEn: 'Water & Wastewater',
    slug: 'water-wastewater',
    description: 'تجهیزات آنالیز و کنترل کیفیت آب برای تصفیه‌خانه‌ها و شبکه‌های توزیع',
    descriptionEn: 'Water quality analysis and control equipment for treatment plants and distribution networks',
    icon: '💧',
    image: '/sample-prep-professional.jpg',
  },
  {
    id: 'food-beverage',
    name: 'مواد غذایی و آشامیدنی',
    nameEn: 'Food & Beverage',
    slug: 'food-beverage',
    description: 'تجهیزات کنترل کیفیت و آزمایشگاهی برای صنایع غذایی و نوشیدنی',
    descriptionEn: 'Quality control and laboratory equipment for food and beverage industries',
    icon: '🍽️',
    image: '/analytical-equipment.jpg',
  },
  {
    id: 'pharma-life-sciences',
    name: 'دارو و علوم زیستی',
    nameEn: 'Pharmaceutical & Life Sciences',
    slug: 'pharmaceutical-life-sciences',
    description: 'دستگاه‌های آنالیز و کنترل کیفیت برای صنایع داروسازی و بیوتکنولوژی',
    descriptionEn: 'Analysis and QC instruments for pharmaceutical and biotechnology industries',
    icon: '💊',
    image: '/sample-prep-professional.jpg',
  },
  {
    id: 'academic-research',
    name: 'آموزشی و تحقیقاتی',
    nameEn: 'Academic & Research Labs',
    slug: 'academic-research',
    description: 'تجهیزات آزمایشگاهی برای دانشگاه‌ها و مراکز تحقیقاتی',
    descriptionEn: 'Laboratory equipment for universities and research institutions',
    icon: '🎓',
    image: '/analytical-equipment.jpg',
  },
  {
    id: 'qc-rd',
    name: 'کنترل کیفیت و R&D',
    nameEn: 'QC & R&D Laboratories',
    slug: 'qc-rd-laboratories',
    description: 'تجهیزات تخصصی برای آزمایشگاه‌های کنترل کیفیت و تحقیق و توسعه',
    descriptionEn: 'Specialized equipment for quality control and R&D laboratories',
    icon: '🔬',
    image: '/precision-instruments.jpg',
  },
];

// Product category structure aligned with the strategic document
export interface ProductCategory {
  id: string;
  name: string;
  nameEn: string;
  type: 'laboratory' | 'process' | 'calibration' | 'accessories';
  subcategories: {
    id: string;
    name: string;
    nameEn: string;
  }[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'laboratory',
    name: 'تجهیزات آزمایشگاهی',
    nameEn: 'Laboratory Equipment',
    type: 'laboratory',
    subcategories: [
      { id: 'analytical-instruments', name: 'دستگاه‌های آنالیز دستگاهی', nameEn: 'Analytical Instruments' },
      { id: 'physical-testing', name: 'تست فیزیکی و مواد', nameEn: 'Physical Testing & Materials' },
      { id: 'thermal-chambers', name: 'محفظه‌های حرارتی و محیطی', nameEn: 'Thermal & Environmental Chambers' },
      { id: 'ovens-furnaces', name: 'کوره و انکوباتور', nameEn: 'Ovens, Furnaces & Incubators' },
      { id: 'balances', name: 'ترازو و وزن‌کشی', nameEn: 'Balances & Weighing' },
      { id: 'sample-prep', name: 'آماده‌سازی نمونه', nameEn: 'Sample Preparation & Mixing' },
      { id: 'water-lab', name: 'تجهیزات آزمایشگاه آب', nameEn: 'Water & Wastewater Lab Equipment' },
    ],
  },
  {
    id: 'process',
    name: 'ابزار دقیق فرآیندی',
    nameEn: 'Process Instrumentation',
    type: 'process',
    subcategories: [
      { id: 'pressure', name: 'ترانسمیتر و گیج فشار', nameEn: 'Pressure Transmitters & Gauges' },
      { id: 'temperature', name: 'سنسور و ترانسمیتر دما', nameEn: 'Temperature Sensors & Transmitters' },
      { id: 'flow', name: 'فلومتر', nameEn: 'Flow Meters' },
      { id: 'level', name: 'اندازه‌گیری سطح', nameEn: 'Level Measurement' },
      { id: 'analytical-process', name: 'آنالایزرهای فرآیندی', nameEn: 'Analytical Process Analyzers' },
      { id: 'control-valves', name: 'شیرهای کنترل و رگولاتور', nameEn: 'Control Valves & Regulators' },
      { id: 'recorders', name: 'رکوردر و نشان‌دهنده', nameEn: 'Recorders, Indicators & Controllers' },
    ],
  },
  {
    id: 'calibration',
    name: 'کالیبراسیون و تست',
    nameEn: 'Calibration & Test',
    type: 'calibration',
    subcategories: [
      { id: 'pressure-cal', name: 'کالیبراتور فشار', nameEn: 'Pressure Calibrators' },
      { id: 'temperature-cal', name: 'کالیبراتور دما', nameEn: 'Temperature Calibrators' },
      { id: 'electrical-cal', name: 'کالیبراتور الکتریکی', nameEn: 'Electrical & Multifunction Calibrators' },
      { id: 'baths-blocks', name: 'حمام و بلوک کالیبراسیون', nameEn: 'Calibration Baths & Dry Blocks' },
    ],
  },
  {
    id: 'accessories',
    name: 'لوازم جانبی و مصرفی',
    nameEn: 'Accessories & Consumables',
    type: 'accessories',
    subcategories: [
      { id: 'glassware', name: 'شیشه‌آلات و پلاستیک', nameEn: 'Lab Glassware & Plasticware' },
      { id: 'sensors-probes', name: 'سنسور و پروب', nameEn: 'Sensors, Probes & Spare Parts' },
      { id: 'reagents', name: 'معرف و استاندارد', nameEn: 'Reagents & Standards' },
    ],
  },
];

// Services data
export interface Service {
  id: string;
  name: string;
  nameEn: string;
  slug: string;
  description: string;
  descriptionEn: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'import-supply',
    name: 'واردات و تأمین',
    nameEn: 'Import & Supply',
    slug: 'import-supply',
    description: 'تأمین تجهیزات از معتبرترین برندهای جهانی با ضمانت اصالت',
    descriptionEn: 'Equipment supply from leading global brands with authenticity guarantee',
    icon: '📦',
  },
  {
    id: 'installation',
    name: 'نصب و راه‌اندازی',
    nameEn: 'Installation & Commissioning',
    slug: 'installation',
    description: 'نصب حرفه‌ای و راه‌اندازی تجهیزات توسط تیم فنی متخصص',
    descriptionEn: 'Professional installation and commissioning by expert technical team',
    icon: '🔧',
  },
  {
    id: 'calibration',
    name: 'کالیبراسیون',
    nameEn: 'Calibration Services',
    slug: 'calibration',
    description: 'خدمات کالیبراسیون با استانداردهای ISO 17025 و گواهی معتبر',
    descriptionEn: 'Calibration services with ISO 17025 standards and valid certificates',
    icon: '📏',
  },
  {
    id: 'maintenance',
    name: 'تعمیر و نگهداری',
    nameEn: 'Repair & Maintenance',
    slug: 'maintenance',
    description: 'خدمات تعمیر و نگهداری پیشگیرانه برای افزایش عمر تجهیزات',
    descriptionEn: 'Repair and preventive maintenance services to extend equipment life',
    icon: '🛠️',
  },
  {
    id: 'training',
    name: 'آموزش',
    nameEn: 'Training',
    slug: 'training',
    description: 'دوره‌های آموزشی تخصصی برای اپراتورها و تکنسین‌ها',
    descriptionEn: 'Specialized training courses for operators and technicians',
    icon: '🎓',
  },
  {
    id: 'consulting',
    name: 'مشاوره فنی',
    nameEn: 'Technical Consulting',
    slug: 'consulting',
    description: 'مشاوره تخصصی برای انتخاب تجهیزات متناسب با نیاز پروژه',
    descriptionEn: 'Expert consulting for equipment selection based on project requirements',
    icon: '💡',
  },
];

// Brands data
export interface Brand {
  id: string;
  name: string;
  country: string;
  countryEn: string;
  description: string;
  descriptionEn: string;
  logo?: string;
  productLines: string[];
}

export const brands: Brand[] = [
  {
    id: 'emerson',
    name: 'Emerson',
    country: 'آمریکا',
    countryEn: 'USA',
    description: 'ابزار دقیق فرآیندی و سیستم‌های کنترل',
    descriptionEn: 'Process instrumentation and control systems',
    productLines: ['Rosemount', 'Fisher', 'Micro Motion'],
  },
  {
    id: 'endress-hauser',
    name: 'Endress+Hauser',
    country: 'سوئیس',
    countryEn: 'Switzerland',
    description: 'تجهیزات اندازه‌گیری و اتوماسیون',
    descriptionEn: 'Measurement and automation equipment',
    productLines: ['Flow', 'Level', 'Pressure', 'Temperature'],
  },
  {
    id: 'yokogawa',
    name: 'Yokogawa',
    country: 'ژاپن',
    countryEn: 'Japan',
    description: 'سیستم‌های کنترل و ابزار دقیق صنعتی',
    descriptionEn: 'Industrial control systems and instrumentation',
    productLines: ['DCS', 'Analyzers', 'Recorders'],
  },
  {
    id: 'anton-paar',
    name: 'Anton Paar',
    country: 'اتریش',
    countryEn: 'Austria',
    description: 'تجهیزات آنالیز و اندازه‌گیری دقیق',
    descriptionEn: 'Precision analysis and measurement instruments',
    productLines: ['Viscometers', 'Density Meters', 'Rheometers'],
  },
  {
    id: 'agilent',
    name: 'Agilent',
    country: 'آمریکا',
    countryEn: 'USA',
    description: 'تجهیزات آنالیز شیمیایی و زیستی',
    descriptionEn: 'Chemical and biological analysis equipment',
    productLines: ['GC', 'HPLC', 'MS', 'ICP'],
  },
  {
    id: 'shimadzu',
    name: 'Shimadzu',
    country: 'ژاپن',
    countryEn: 'Japan',
    description: 'تجهیزات آزمایشگاهی و آنالیز',
    descriptionEn: 'Laboratory and analytical instruments',
    productLines: ['Spectrophotometers', 'Chromatographs', 'Testing Machines'],
  },
];
