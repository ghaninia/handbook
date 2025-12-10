import Link from 'next/link'

export default function DesignPatternsPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3">الگوهای طراحی</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          الگوهای طراحی راه‌حل‌های اثبات شده و قابل استفاده مجدد برای مشکلات رایج در طراحی نرم‌افزار هستند.
          این الگوها بهترین روش‌هایی هستند که توسط توسعه‌دهندگان با تجربه در طول زمان تکامل یافته‌اند.
        </p>
      </div>

      {/* Category Filters */}
      <div className="col-span-12 flex flex-wrap gap-2 mb-4">
        {categories.map((cat) => (
          <span
            key={cat.name}
            className="px-4 py-2 rounded-full text-sm font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 cursor-pointer hover:bg-amber-200 dark:hover:bg-amber-800/50 transition-colors"
          >
            {cat.name} ({cat.count})
          </span>
        ))}
      </div>

      {/* Pattern Cards */}
      {designPatterns.map((pattern) => (
        <Link
          key={pattern.slug}
          href={`/design-patterns/${pattern.slug}`}
          className="col-span-12 sm:col-span-6 xl:col-span-4 card hover:shadow-xl transition-all hover:scale-[1.02]"
        >
          <h3 className="text-lg font-bold mb-2">{pattern.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
            {pattern.description}
          </p>
          <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded-full text-xs">
            {pattern.category}
          </span>
        </Link>
      ))}
    </div>
  )
}

const categories = [
  { name: 'سازنده (Creational)', count: 5 },
  { name: 'ساختاری (Structural)', count: 5 },
  { name: 'رفتاری (Behavioral)', count: 11 },
  { name: 'معماری (Architectural)', count: 9 },
]

const designPatterns = [
  // Creational Patterns
  {
    title: 'Abstract Factory',
    slug: 'abstract-factory',
    description: 'خانواده‌ای از اشیاء مرتبط را بدون مشخص کردن کلاس‌های concrete ایجاد می‌کند',
    category: 'سازنده',
  },
  {
    title: 'Builder',
    slug: 'builder',
    description: 'ساخت اشیاء پیچیده را از نمایش آنها جدا می‌کند و امکان ساخت گام به گام را فراهم می‌آورد',
    category: 'سازنده',
  },
  {
    title: 'Factory Method',
    slug: 'factory-method',
    description: 'رابطی برای ساخت اشیاء تعریف می‌کند اما اجازه می‌دهد زیرکلاس‌ها نوع شیء را تعیین کنند',
    category: 'سازنده',
  },
  {
    title: 'Object Mother',
    slug: 'object-mother',
    description: 'الگویی برای ایجاد اشیاء تست با داده‌های پیش‌فرض',
    category: 'سازنده',
  },
  {
    title: 'Singleton',
    slug: 'singleton',
    description: 'تضمین می‌کند که یک کلاس فقط یک نمونه داشته باشد و دسترسی سراسری به آن فراهم کند',
    category: 'سازنده',
  },
  // Structural Patterns
  {
    title: 'Adapter',
    slug: 'adapter',
    description: 'رابط یک کلاس را به رابط دیگری که کلاینت‌ها انتظار دارند تبدیل می‌کند',
    category: 'ساختاری',
  },
  {
    title: 'Decorator',
    slug: 'decorator',
    description: 'رفتار جدید را به صورت پویا به اشیاء اضافه می‌کند بدون تغییر کلاس اصلی',
    category: 'ساختاری',
  },
  {
    title: 'Facade',
    slug: 'facade',
    description: 'رابط ساده‌ای برای یک زیرسیستم پیچیده فراهم می‌کند',
    category: 'ساختاری',
  },
  {
    title: 'Null Object',
    slug: 'null-object',
    description: 'شیء پیش‌فرضی که رفتار خنثی دارد و جایگزین null می‌شود',
    category: 'ساختاری',
  },
  {
    title: 'Proxy',
    slug: 'proxy',
    description: 'جایگزینی برای شیء دیگر فراهم می‌کند تا دسترسی به آن را کنترل کند',
    category: 'ساختاری',
  },
  // Behavioral Patterns
  {
    title: 'Chain of Responsibility',
    slug: 'chain-of-responsibility',
    description: 'زنجیره‌ای از هندلرها را ایجاد می‌کند که هر کدام می‌توانند درخواست را پردازش کنند',
    category: 'رفتاری',
  },
  {
    title: 'Command',
    slug: 'command',
    description: 'درخواست را به عنوان یک شیء کپسوله می‌کند و امکان undo را فراهم می‌کند',
    category: 'رفتاری',
  },
  {
    title: 'Guard Clause',
    slug: 'guard-clause',
    description: 'شرایط خروج زودهنگام را در ابتدای متد بررسی می‌کند',
    category: 'رفتاری',
  },
  {
    title: 'Mediator',
    slug: 'mediator',
    description: 'ارتباط بین اشیاء را از طریق یک واسطه مرکزی مدیریت می‌کند',
    category: 'رفتاری',
  },
  {
    title: 'Memento',
    slug: 'memento',
    description: 'حالت داخلی یک شیء را ذخیره و بازیابی می‌کند بدون نقض کپسوله‌سازی',
    category: 'رفتاری',
  },
  {
    title: 'Observer',
    slug: 'observer',
    description: 'وابستگی یک-به-چند بین اشیاء تعریف می‌کند تا تغییرات اطلاع‌رسانی شود',
    category: 'رفتاری',
  },
  {
    title: 'Rules Engine',
    slug: 'rules-engine',
    description: 'منطق کسب‌وکار را به صورت قوانین مجزا و قابل مدیریت پیاده‌سازی می‌کند',
    category: 'رفتاری',
  },
  {
    title: 'Specification',
    slug: 'specification',
    description: 'قوانین کسب‌وکار را به صورت اشیاء قابل ترکیب تعریف می‌کند',
    category: 'رفتاری',
  },
  {
    title: 'State',
    slug: 'state',
    description: 'رفتار یک شیء را بر اساس حالت داخلی آن تغییر می‌دهد',
    category: 'رفتاری',
  },
  {
    title: 'Strategy',
    slug: 'strategy',
    description: 'خانواده‌ای از الگوریتم‌ها را تعریف و آنها را قابل تعویض می‌کند',
    category: 'رفتاری',
  },
  {
    title: 'Template Method',
    slug: 'template-method',
    description: 'اسکلت یک الگوریتم را تعریف می‌کند و مراحل را به زیرکلاس‌ها واگذار می‌کند',
    category: 'رفتاری',
  },
  // Architectural Patterns
  {
    title: 'CQRS',
    slug: 'cqrs',
    description: 'Command Query Responsibility Segregation - جداسازی عملیات خواندن از نوشتن',
    category: 'معماری',
  },
  {
    title: 'Domain Events',
    slug: 'domain-events',
    description: 'رویدادهای دامنه برای ارتباط loosely coupled بین بخش‌های سیستم',
    category: 'معماری',
  },
  {
    title: 'Outbox Pattern',
    slug: 'outbox-pattern',
    description: 'تضمین تحویل پیام‌ها با ذخیره آنها در دیتابیس قبل از ارسال',
    category: 'معماری',
  },
  {
    title: 'Repository',
    slug: 'repository',
    description: 'لایه انتزاعی بین منطق دامنه و لایه دسترسی به داده',
    category: 'معماری',
  },
  {
    title: 'REPR (Request-Endpoint-Response)',
    slug: 'repr',
    description: 'ساختار endpoint ها به صورت Request، Handler و Response',
    category: 'معماری',
  },
  {
    title: 'Strangler Fig',
    slug: 'strangler-fig',
    description: 'مهاجرت تدریجی از سیستم قدیمی به جدید بدون downtime',
    category: 'معماری',
  },
  {
    title: 'Unit of Work',
    slug: 'unit-of-work',
    description: 'مجموعه‌ای از تغییرات را به عنوان یک تراکنش واحد مدیریت می‌کند',
    category: 'معماری',
  },
  {
    title: 'Anti-Corruption Layer',
    slug: 'anti-corruption-layer',
    description: 'لایه‌ای برای محافظت از دامنه در برابر مدل‌های خارجی ناخواسته',
    category: 'معماری',
  },
  {
    title: 'Aggregate',
    slug: 'aggregate',
    description: 'کلاستری از اشیاء دامنه که به عنوان یک واحد در نظر گرفته می‌شوند',
    category: 'معماری',
  },
]
