import Link from 'next/link'

export default function ArchitecturePage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3">معماری نرم‌افزار</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          الگوها و اصول معماری برای ساخت سیستم‌های مقیاس‌پذیر، قابل نگهداری و قابل تست.
          معماری خوب تصمیمات مهم را به تأخیر می‌اندازد و امکان تغییر را فراهم می‌کند.
        </p>
      </div>

      {/* Architecture Styles */}
      <div className="col-span-12">
        <h2 className="text-xl font-bold mb-4">سبک‌های معماری</h2>
      </div>

      {/* Architecture Pattern Cards */}
      {architectureStyles.map((pattern) => (
        <Link
          key={pattern.slug}
          href={`/architecture/${pattern.slug}`}
          className="col-span-12 sm:col-span-6 xl:col-span-4 card hover:shadow-xl transition-all hover:scale-[1.02]"
        >
          <div className="flex items-center mb-3">
            <span className="text-2xl ml-3">{pattern.icon}</span>
            <h3 className="font-bold">{pattern.title}</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
            {pattern.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {pattern.benefits.map((benefit) => (
              <span
                key={benefit}
                className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded text-xs"
              >
                {benefit}
              </span>
            ))}
          </div>
        </Link>
      ))}

      {/* Architecture Patterns */}
      <div className="col-span-12 mt-4">
        <h2 className="text-xl font-bold mb-4">الگوهای معماری</h2>
      </div>

      {architecturePatterns.map((pattern) => (
        <Link
          key={pattern.slug}
          href={`/architecture/${pattern.slug}`}
          className="col-span-12 sm:col-span-6 card hover:shadow-xl transition-all hover:scale-[1.02]"
        >
          <h3 className="font-bold mb-2">{pattern.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {pattern.description}
          </p>
        </Link>
      ))}

      {/* Architecture Principles Section */}
      <section className="col-span-12 card bg-gradient-to-l from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 mt-4">
        <h2 className="text-xl font-bold mb-4">اصول معماری</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {principles.map((principle) => (
            <div key={principle.title} className="flex items-start p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="text-xl ml-3">{principle.icon}</span>
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

      {/* Quote */}
      <div className="col-span-12 card bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20">
        <blockquote className="text-center">
          <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
            "معماری درباره تصمیمات مهمی است که زود گرفته می‌شوند و تغییر آنها دشوار است."
          </p>
          <footer className="text-sm text-gray-500 dark:text-gray-400">
            — Martin Fowler
          </footer>
        </blockquote>
      </div>
    </div>
  )
}

const architectureStyles = [
  {
    title: 'معماری لایه‌ای (Layered)',
    slug: 'layered-architecture',
    icon: '🎂',
    description: 'تقسیم برنامه به لایه‌های منطقی مانند Presentation، Business Logic و Data Access.',
    benefits: ['جداسازی واضح', 'قابل نگهداری', 'آسان برای درک'],
  },
  {
    title: 'معماری Clean',
    slug: 'clean-architecture',
    icon: '🎯',
    description: 'تمرکز بر استقلال از فریم‌ورک‌ها با قرار دادن Domain در مرکز.',
    benefits: ['قابل تست', 'مستقل', 'انعطاف‌پذیر'],
  },
  {
    title: 'معماری Hexagonal (Ports & Adapters)',
    slug: 'hexagonal-architecture',
    icon: '⬡',
    description: 'جداسازی منطق اصلی از جزئیات خارجی از طریق ports و adapters.',
    benefits: ['جداسازی کامل', 'قابلیت تست بالا', 'تعویض‌پذیری'],
  },
  {
    title: 'معماری میکروسرویس',
    slug: 'microservices',
    icon: '🧩',
    description: 'تقسیم برنامه به سرویس‌های کوچک و مستقل که جداگانه deploy می‌شوند.',
    benefits: ['مقیاس‌پذیری', 'استقلال تیم‌ها', 'resilience'],
  },
  {
    title: 'Vertical Slice Architecture',
    slug: 'vertical-slice',
    icon: '🔪',
    description: 'سازماندهی کد بر اساس فیچرها به جای لایه‌های تکنیکال.',
    benefits: ['cohesion بالا', 'تغییر آسان', 'تمرکز بر فیچر'],
  },
  {
    title: 'Modular Monolith',
    slug: 'modular-monolith',
    icon: '🏗️',
    description: 'مونولیت با مرزهای ماژولار واضح - بهترین هر دو دنیا.',
    benefits: ['سادگی deploy', 'مرزهای واضح', 'آمادگی برای میکروسرویس'],
  },
]

const architecturePatterns = [
  {
    title: 'CQRS (Command Query Responsibility Segregation)',
    slug: 'cqrs',
    description: 'جداسازی عملیات خواندن و نوشتن برای بهینه‌سازی و مقیاس‌پذیری هر کدام به صورت مستقل.',
  },
  {
    title: 'Event Sourcing',
    slug: 'event-sourcing',
    description: 'ذخیره‌سازی تمام تغییرات به صورت event به جای state فعلی.',
  },
  {
    title: 'Event-Driven Architecture',
    slug: 'event-driven',
    description: 'ارتباط بین کامپوننت‌ها از طریق رویدادها برای loose coupling.',
  },
  {
    title: 'API Gateway',
    slug: 'api-gateway',
    description: 'نقطه ورود واحد برای تمام درخواست‌های کلاینت به سرویس‌های backend.',
  },
  {
    title: 'Backend for Frontend (BFF)',
    slug: 'backend-for-frontend',
    description: 'API اختصاصی برای هر نوع کلاینت (Web، Mobile، IoT).',
  },
  {
    title: 'Saga Pattern',
    slug: 'saga-pattern',
    description: 'مدیریت تراکنش‌های توزیع‌شده در معماری میکروسرویس.',
  },
]

const principles = [
  {
    title: 'جداسازی دغدغه‌ها (Separation of Concerns)',
    icon: '🔀',
    description: 'هر بخش از سیستم باید مسئولیت مشخص و جداگانه‌ای داشته باشد.',
  },
  {
    title: 'وابستگی به انتزاع (Dependency Inversion)',
    icon: '🎭',
    description: 'ماژول‌های سطح بالا نباید به سطح پایین وابسته باشند. هر دو به abstraction وابسته باشند.',
  },
  {
    title: 'کپسوله‌سازی (Encapsulation)',
    icon: '📦',
    description: 'پنهان کردن جزئیات پیاده‌سازی و ارائه رابط ساده و واضح.',
  },
  {
    title: 'Loose Coupling',
    icon: '🔗',
    description: 'کامپوننت‌ها باید کمترین وابستگی به یکدیگر داشته باشند.',
  },
  {
    title: 'High Cohesion',
    icon: '🎯',
    description: 'اجزای مرتبط باید کنار هم باشند. هر ماژول یک مسئولیت متمرکز.',
  },
  {
    title: 'تأخیر در تصمیمات (Defer Decisions)',
    icon: '⏳',
    description: 'تصمیمات معماری را تا حد امکان به تأخیر بیندازید تا اطلاعات بیشتری داشته باشید.',
  },
]
