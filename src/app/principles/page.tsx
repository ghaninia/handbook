import Link from 'next/link'

export default function PrinciplesPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3">اصول</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          اصول بنیادی که به شما کمک می‌کنند کد تمیز، قابل نگهداری و قابل توسعه بنویسید.
        </p>
      </div>

      {/* Principle Cards */}
      {principles.map((principle) => (
        <div key={principle.slug} className="col-span-12 md:col-span-6 card">
          <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
            {principle.description}
          </p>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
            <p className="text-sm font-mono">{principle.example}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

const principles = [
  {
    title: 'SOLID',
    slug: 'solid',
    description: 'پنج اصل اساسی برای طراحی شی‌گرا که کد را انعطاف‌پذیرتر و قابل نگهداری‌تر می‌کند.',
    example: 'Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion',
  },
  {
    title: 'DRY - تکرار نکنید',
    slug: 'dry',
    description: 'هر قطعه از دانش باید یک نمایش واحد، بی‌ابهام و معتبر در سیستم داشته باشد.',
    example: 'از تکرار کد خودداری کنید و منطق مشترک را در یک مکان قرار دهید',
  },
  {
    title: 'KISS - ساده نگه دارید',
    slug: 'kiss',
    description: 'بیشتر سیستم‌ها زمانی بهتر کار می‌کنند که ساده نگه داشته شوند نه پیچیده.',
    example: 'از راه‌حل‌های ساده و واضح استفاده کنید',
  },
  {
    title: 'YAGNI - آن را نخواهید نیاز داشت',
    slug: 'yagni',
    description: 'قابلیتی را پیاده‌سازی نکنید تا زمانی که واقعاً به آن نیاز داشته باشید.',
    example: 'فقط آنچه را که اکنون نیاز دارید بنویسید',
  },
  {
    title: 'جداسازی دغدغه‌ها',
    slug: 'separation-of-concerns',
    description: 'برنامه را به بخش‌های مجزا تقسیم کنید که هر کدام یک دغدغه خاص را مدیریت می‌کنند.',
    example: 'UI، Business Logic، و Data Access را از هم جدا کنید',
  },
  {
    title: 'اصل کمترین دانش',
    slug: 'least-knowledge',
    description: 'یک واحد باید دانش محدودی درباره واحدهای دیگر داشته باشد.',
    example: 'فقط با دوستان نزدیک صحبت کنید، نه با غریبه‌ها',
  },
]
