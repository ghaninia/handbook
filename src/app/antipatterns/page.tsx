export default function AntiPatternsPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3 text-red-600 dark:text-red-400">ضدالگوها</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          الگوهای رایجی که در ابتدا ممکن است مفید به نظر برسند اما در نهایت به مشکلات منجر می‌شوند.
        </p>
      </div>

      {/* AntiPattern Cards */}
      {antiPatterns.map((pattern) => (
        <div key={pattern.slug} className="col-span-12 md:col-span-6 card border-2 border-red-200 dark:border-red-900">
          <div className="flex items-start mb-3">
            <span className="text-2xl ml-3">⚠️</span>
            <h3 className="text-lg font-bold text-red-600 dark:text-red-400">
              {pattern.title}
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
            {pattern.description}
          </p>
          <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
            <p className="text-xs font-semibold mb-1 text-red-800 dark:text-red-300">
              راه حل:
            </p>
            <p className="text-xs text-gray-700 dark:text-gray-300">
              {pattern.solution}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

const antiPatterns = [
  {
    title: 'God Object (شیء خدا)',
    slug: 'god-object',
    description: 'یک کلاس که مسئولیت‌های زیادی دارد و بیش از حد بزرگ و پیچیده شده است.',
    solution: 'مسئولیت‌ها را به کلاس‌های کوچک‌تر و متمرکزتر تقسیم کنید.',
  },
  {
    title: 'Spaghetti Code (کد اسپاگتی)',
    slug: 'spaghetti-code',
    description: 'کد پیچیده و درهم‌تنیده که خواندن و نگهداری آن بسیار دشوار است.',
    solution: 'از اصول SOLID و الگوهای طراحی برای ساختاردهی بهتر استفاده کنید.',
  },
  {
    title: 'Copy-Paste Programming',
    slug: 'copy-paste',
    description: 'کپی کردن کد به جای استفاده مجدد و انتزاع مناسب.',
    solution: 'کد مشترک را در توابع یا کلاس‌های قابل استفاده مجدد قرار دهید.',
  },
  {
    title: 'Magic Numbers',
    slug: 'magic-numbers',
    description: 'استفاده از اعداد خاص در کد بدون توضیح معنای آن‌ها.',
    solution: 'از ثابت‌های نام‌گذاری شده استفاده کنید.',
  },
  {
    title: 'Premature Optimization',
    slug: 'premature-optimization',
    description: 'تلاش برای بهینه‌سازی کد قبل از اینکه بدانید کجا نیاز به بهینه‌سازی است.',
    solution: 'ابتدا کد را کار کنید، سپس در صورت نیاز بهینه‌سازی کنید.',
  },
  {
    title: 'Golden Hammer',
    slug: 'golden-hammer',
    description: 'استفاده بیش از حد از یک ابزار یا الگوی خاص برای همه مشکلات.',
    solution: 'برای هر مشکل، بهترین ابزار مناسب را انتخاب کنید.',
  },
]
