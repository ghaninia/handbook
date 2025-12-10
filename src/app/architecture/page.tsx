export default function ArchitecturePage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3">معماری نرم‌افزار</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          الگوها و اصول معماری برای ساخت سیستم‌های مقیاس‌پذیر و قابل نگهداری.
        </p>
      </div>

      {/* Architecture Patterns Section Title */}
      <div className="col-span-12">
        <h2 className="text-xl font-bold">الگوهای معماری</h2>
      </div>

      {/* Architecture Pattern Cards */}
      {architecturePatterns.map((pattern) => (
        <div key={pattern.title} className="col-span-12 md:col-span-6 card">
          <div className="flex items-center mb-2">
            <span className="text-2xl ml-2">{pattern.icon}</span>
            <h3 className="font-bold">{pattern.title}</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
            {pattern.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {pattern.benefits.map((benefit) => (
              <span
                key={benefit}
                className="px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Architecture Principles Section */}
      <section className="col-span-12 card bg-gradient-to-l from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20">
        <h2 className="text-xl font-bold mb-4">اصول معماری</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {principles.map((principle) => (
            <div key={principle.title} className="flex items-start">
              <span className="text-xl ml-2">{principle.icon}</span>
              <div>
                <h3 className="font-bold text-sm mb-1">{principle.title}</h3>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

const architecturePatterns = [
  {
    title: 'معماری لایه‌ای',
    icon: '🎂',
    description: 'تقسیم برنامه به لایه‌های منطقی مانند UI، Business Logic و Data Access.',
    benefits: ['جداسازی واضح', 'قابل نگهداری', 'قابل تست'],
  },
  {
    title: 'معماری میکروسرویس',
    icon: '🧩',
    description: 'تقسیم برنامه به سرویس‌های کوچک و مستقل که به طور جداگانه مستقر می‌شوند.',
    benefits: ['مقیاس‌پذیری', 'استقلال', 'انعطاف‌پذیری'],
  },
  {
    title: 'معماری Clean',
    icon: '🎯',
    description: 'تمرکز بر استقلال از فریم‌ورک‌ها و ابزارهای خارجی.',
    benefits: ['قابل تست', 'مستقل', 'انعطاف‌پذیر'],
  },
  {
    title: 'معماری Hexagonal',
    icon: '⬡',
    description: 'جداسازی منطق اصلی از جزئیات خارجی مانند UI و Database.',
    benefits: ['جداسازی کامل', 'قابلیت تست بالا', 'انعطاف'],
  },
  {
    title: 'CQRS',
    icon: '↔️',
    description: 'جداسازی عملیات خواندن و نوشتن داده‌ها.',
    benefits: ['عملکرد بهتر', 'مقیاس‌پذیری', 'بهینه‌سازی'],
  },
  {
    title: 'Event-Driven',
    icon: '⚡',
    description: 'معماری مبتنی بر رویدادها برای ارتباط بین کامپوننت‌ها.',
    benefits: ['انعطاف‌پذیری', 'مقیاس‌پذیری', 'جداسازی'],
  },
]

const principles = [
  {
    title: 'جداسازی دغدغه‌ها',
    icon: '🔀',
    description: 'هر بخش از سیستم باید مسئولیت مشخص و جداگانه‌ای داشته باشد.',
  },
  {
    title: 'کپسوله‌سازی',
    icon: '📦',
    description: 'پنهان کردن جزئیات پیاده‌سازی و ارائه رابط ساده.',
  },
  {
    title: 'وابستگی به انتزاع',
    icon: '🎭',
    description: 'به رابط‌ها وابسته باشید نه پیاده‌سازی‌های مشخص.',
  },
  {
    title: 'یکپارچگی کم',
    icon: '🔗',
    description: 'کامپوننت‌ها باید کمترین وابستگی به یکدیگر داشته باشند.',
  },
]
