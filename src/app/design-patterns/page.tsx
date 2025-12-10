import Link from 'next/link'

export default function DesignPatternsPage() {
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-6">الگوهای طراحی</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
        الگوهای طراحی راه‌حل‌های اثبات شده برای مشکلات رایج در طراحی نرم‌افزار هستند.
        این الگوها بهترین شیوه‌ها را نشان می‌دهند و می‌توانند توسعه نرم‌افزار را سریع‌تر کنند.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {designPatterns.map((pattern) => (
          <Link
            key={pattern.slug}
            href={`/design-patterns/${pattern.slug}`}
            className="card hover:shadow-xl transition-all hover:scale-105"
          >
            <h3 className="text-xl font-bold mb-3">{pattern.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              {pattern.description}
            </p>
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
              {pattern.category}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

const designPatterns = [
  {
    title: 'الگوی سینگلتون',
    slug: 'singleton',
    description: 'تضمین می‌کند که یک کلاس فقط یک نمونه داشته باشد',
    category: 'سازنده',
  },
  {
    title: 'الگوی فکتوری',
    slug: 'factory',
    description: 'رابطی برای ساخت اشیاء در یک کلاس والد فراهم می‌کند',
    category: 'سازنده',
  },
  {
    title: 'الگوی استراتژی',
    slug: 'strategy',
    description: 'خانواده‌ای از الگوریتم‌ها را تعریف و قابل تعویض می‌کند',
    category: 'رفتاری',
  },
  {
    title: 'الگوی آبزرور',
    slug: 'observer',
    description: 'مکانیزمی برای اطلاع‌رسانی تغییرات به اشیاء وابسته',
    category: 'رفتاری',
  },
  {
    title: 'الگوی دکوراتور',
    slug: 'decorator',
    description: 'قابلیت‌های جدید را به اشیاء به صورت پویا اضافه می‌کند',
    category: 'ساختاری',
  },
  {
    title: 'الگوی آداپتور',
    slug: 'adapter',
    description: 'رابط‌های ناسازگار را با یکدیگر سازگار می‌کند',
    category: 'ساختاری',
  },
  {
    title: 'الگوی ریپازیتوری',
    slug: 'repository',
    description: 'لایه‌ای بین لایه منطق و داده فراهم می‌کند',
    category: 'معماری',
  },
  {
    title: 'الگوی بیلدر',
    slug: 'builder',
    description: 'ساخت اشیاء پیچیده را گام به گام انجام می‌دهد',
    category: 'سازنده',
  },
  {
    title: 'الگوی کامند',
    slug: 'command',
    description: 'درخواست‌ها را به عنوان شیء کپسوله می‌کند',
    category: 'رفتاری',
  },
]
