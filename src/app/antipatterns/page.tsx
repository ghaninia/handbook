import Link from 'next/link'

export default function AntiPatternsPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3 text-red-600 dark:text-red-400">ضدالگوها (Anti-Patterns)</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          الگوهای رایجی که در ابتدا ممکن است مفید به نظر برسند اما در نهایت به مشکلات جدی منجر می‌شوند.
          شناخت این الگوها به شما کمک می‌کند از آنها اجتناب کنید.
        </p>
      </div>

      {/* Category Filter */}
      <div className="col-span-12 flex flex-wrap gap-2 mb-4">
        {categories.map((cat) => (
          <span
            key={cat}
            className="px-4 py-2 rounded-full text-sm font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 cursor-pointer hover:bg-red-200 dark:hover:bg-red-800/50 transition-colors"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* AntiPattern Cards */}
      {antiPatterns.map((pattern) => (
        <Link
          key={pattern.slug}
          href={`/antipatterns/${pattern.slug}`}
          className="col-span-12 sm:col-span-6 xl:col-span-4 card border-2 border-red-200 dark:border-red-900 hover:shadow-xl transition-all hover:scale-[1.02]"
        >
          <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-2">
            {pattern.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
            {pattern.description}
          </p>
          <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-full text-xs">
            {pattern.category}
          </span>
        </Link>
      ))}
    </div>
  )
}

const categories = ['کد', 'طراحی', 'مدیریت', 'معماری', 'تیمی']

const antiPatterns = [
  // Code Antipatterns
  {
    title: 'Copy Paste Programming',
    slug: 'copy-paste-programming',
    description: 'کپی کردن کد به جای استفاده مجدد و انتزاع مناسب. منجر به تکرار و سختی نگهداری می‌شود.',
    category: 'کد',
  },
  {
    title: 'Magic Strings',
    slug: 'magic-strings',
    description: 'استفاده از رشته‌های خاص در کد بدون تعریف به صورت ثابت. خطرناک و مستعد خطا.',
    category: 'کد',
  },
  {
    title: 'Spaghetti Code',
    slug: 'spaghetti-code',
    description: 'کد پیچیده و درهم‌تنیده که خواندن و نگهداری آن بسیار دشوار است.',
    category: 'کد',
  },
  {
    title: 'Static Cling',
    slug: 'static-cling',
    description: 'استفاده بیش از حد از متدها و کلاس‌های static که تست‌پذیری را کاهش می‌دهد.',
    category: 'کد',
  },
  {
    title: 'Flags Over Objects',
    slug: 'flags-over-objects',
    description: 'استفاده از boolean flags به جای چندریختی و State pattern.',
    category: 'کد',
  },
  {
    title: 'Frankencode',
    slug: 'frankencode',
    description: 'کدی که از قطعات نامرتبط و ناسازگار ساخته شده و مثل هیولای فرانکنشتاین است.',
    category: 'کد',
  },
  // Design Antipatterns
  {
    title: 'Blob / God Object',
    slug: 'blob',
    description: 'یک کلاس که مسئولیت‌های زیادی دارد و بیش از حد بزرگ و پیچیده شده است.',
    category: 'طراحی',
  },
  {
    title: 'Anemic Domain Model',
    slug: 'anemic-domain-model',
    description: 'مدل‌های دامنه که فقط داده دارند و منطق کسب‌وکار در service ها قرار گرفته.',
    category: 'طراحی',
  },
  {
    title: 'Golden Hammer',
    slug: 'golden-hammer',
    description: 'وقتی فقط یک چکش دارید، همه چیز شبیه میخ به نظر می‌رسد! استفاده بیش از حد از یک ابزار.',
    category: 'طراحی',
  },
  {
    title: 'Iceberg Class',
    slug: 'iceberg-class',
    description: 'کلاسی که بیشتر کد آن private است و فقط نوک کوه یخ عمومی است.',
    category: 'طراحی',
  },
  {
    title: 'Service Locator',
    slug: 'service-locator',
    description: 'استفاده از Service Locator به جای Dependency Injection که وابستگی‌ها را پنهان می‌کند.',
    category: 'طراحی',
  },
  {
    title: 'Exposing Collection Properties',
    slug: 'exposing-collection-properties',
    description: 'افشای مستقیم collection ها که امکان تغییر نامناسب را فراهم می‌کند.',
    category: 'طراحی',
  },
  // Management Antipatterns
  {
    title: 'Analysis Paralysis',
    slug: 'analysis-paralysis',
    description: 'تحلیل بیش از حد که مانع شروع کار می‌شود. فلج تحلیل!',
    category: 'مدیریت',
  },
  {
    title: 'Big Design Up Front',
    slug: 'big-design-up-front',
    description: 'تلاش برای طراحی کامل سیستم قبل از شروع پیاده‌سازی.',
    category: 'مدیریت',
  },
  {
    title: 'Death March',
    slug: 'death-march',
    description: 'پروژه‌ای که همه می‌دانند شکست خواهد خورد اما ادامه می‌دهند.',
    category: 'مدیریت',
  },
  {
    title: 'Death By Planning',
    slug: 'death-by-planning',
    description: 'زمان بیش از حد صرف برنامه‌ریزی به جای اجرا.',
    category: 'مدیریت',
  },
  {
    title: 'Feature Creep',
    slug: 'feature-creep',
    description: 'اضافه شدن مداوم فیچرهای جدید که scope پروژه را بی‌پایان می‌کند.',
    category: 'مدیریت',
  },
  {
    title: 'Last 10% Trap',
    slug: 'last-10-percent-trap',
    description: '۹۰٪ کار ۱۰٪ زمان و ۱۰٪ آخر ۹۰٪ زمان می‌برد!',
    category: 'مدیریت',
  },
  {
    title: 'Mushroom Management',
    slug: 'mushroom-management',
    description: 'مدیریت قارچی: کارکنان را در تاریکی نگه دارید و به آنها غذای... بدهید!',
    category: 'مدیریت',
  },
  {
    title: 'Smoke and Mirrors',
    slug: 'smoke-and-mirrors',
    description: 'نمایش عملکردی که واقعاً وجود ندارد.',
    category: 'مدیریت',
  },
  // Architecture Antipatterns
  {
    title: 'Big Ball of Mud',
    slug: 'big-ball-of-mud',
    description: 'سیستمی بدون ساختار واضح که به تدریج رشد کرده و کثیف شده.',
    category: 'معماری',
  },
  {
    title: 'Architecture by Implication',
    slug: 'architecture-by-implication',
    description: 'فرض اینکه معماری واضح است و نیازی به مستندسازی نیست.',
    category: 'معماری',
  },
  {
    title: 'Witches\' Brew Architecture',
    slug: 'witches-brew-architecture',
    description: 'معماری که از ترکیب تصادفی تکنولوژی‌های مختلف ساخته شده.',
    category: 'معماری',
  },
  {
    title: 'YOLO Architecture',
    slug: 'yolo-architecture',
    description: 'You Only Live Once! بدون فکر به آینده کد بزنید...',
    category: 'معماری',
  },
  // Team Antipatterns
  {
    title: 'Broken Windows',
    slug: 'broken-windows',
    description: 'تحمل کد بد باعث تولید کد بد بیشتر می‌شود - مثل پنجره شکسته در محله.',
    category: 'تیمی',
  },
  {
    title: 'Calendar Coder',
    slug: 'calendar-coder',
    description: 'توسعه‌دهنده‌ای که فقط به deadline فکر می‌کند نه کیفیت.',
    category: 'تیمی',
  },
  {
    title: 'Duct Tape Coder',
    slug: 'duct-tape-coder',
    description: 'کسی که همه چیز را با راه‌حل‌های موقتی و نوار چسب حل می‌کند.',
    category: 'تیمی',
  },
  {
    title: 'Frozen Caveman',
    slug: 'frozen-caveman',
    description: 'توسعه‌دهنده‌ای که از تکنولوژی‌های جدید می‌ترسد و به روش‌های قدیمی چسبیده.',
    category: 'تیمی',
  },
  {
    title: 'Not Invented Here',
    slug: 'not-invented-here',
    description: 'رد کردن راه‌حل‌های خارجی فقط به این دلیل که "ما ننوشتیم".',
    category: 'تیمی',
  },
  {
    title: 'Reinventing the Wheel',
    slug: 'reinventing-the-wheel',
    description: 'دوباره‌کاری و نوشتن چیزی که قبلاً وجود دارد.',
    category: 'تیمی',
  },
  {
    title: 'Shiny Toy',
    slug: 'shiny-toy',
    description: 'استفاده از تکنولوژی جدید فقط به این دلیل که "جدید" است.',
    category: 'تیمی',
  },
  {
    title: 'Found on Internet',
    slug: 'found-on-internet',
    description: 'کپی کردن کد از اینترنت بدون درک آن.',
    category: 'تیمی',
  },
  {
    title: 'Assumption Driven Programming',
    slug: 'assumption-driven-programming',
    description: 'برنامه‌نویسی بر اساس فرضیات به جای واقعیت‌ها.',
    category: 'تیمی',
  },
  {
    title: 'Fast Beats Right',
    slug: 'fast-beats-right',
    description: 'ترجیح سرعت بر کیفیت - همیشه!',
    category: 'تیمی',
  },
  {
    title: 'Walking Through a Minefield',
    slug: 'walking-through-minefield',
    description: 'کدی که پر از تله و خطرات پنهان است.',
    category: 'تیمی',
  },
  {
    title: 'Lois Lane Planning',
    slug: 'lois-lane-planning',
    description: 'برنامه‌ریزی با فرض اینکه سوپرمن در آخرین لحظه نجاتتان می‌دهد.',
    category: 'مدیریت',
  },
]
