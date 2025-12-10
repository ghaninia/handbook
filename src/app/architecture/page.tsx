export default function ArchitecturePage() {
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-6">معماری نرم‌افزار</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
        الگوها و اصول معماری برای ساخت سیستم‌های مقیاس‌پذیر و قابل نگهداری.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">الگوهای معماری</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {architecturePatterns.map((pattern) => (
              <div key={pattern.title} className="card">
                <div className="flex items-center mb-3">
                  <span className="text-3xl ml-3">{pattern.icon}</span>
                  <h3 className="text-xl font-bold">{pattern.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {pattern.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {pattern.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card bg-gradient-to-l from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <h2 className="text-2xl font-bold mb-4">اصول معماری</h2>
          <div className="space-y-4">
            {principles.map((principle) => (
              <div key={principle.title} className="flex items-start">
                <span className="text-2xl ml-3 mt-1">{principle.icon}</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">{principle.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
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
