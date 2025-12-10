export default function PracticesPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3">روش‌های توسعه</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          بهترین شیوه‌ها و روش‌های اثبات شده برای توسعه نرم‌افزار حرفه‌ای.
        </p>
      </div>

      {/* Practice Cards */}
      {practices.map((practice) => (
        <div key={practice.slug} className="col-span-12 lg:col-span-6 card">
          <div className="flex items-start">
            <span className="text-3xl ml-3">{practice.icon}</span>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{practice.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                {practice.description}
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                {practice.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const practices = [
  {
    title: 'توسعه مبتنی بر تست (TDD)',
    slug: 'tdd',
    icon: '🧪',
    description: 'ابتدا تست بنویسید، سپس کد را برای عبور از تست پیاده‌سازی کنید.',
    benefits: [
      'کد با کیفیت بالاتر',
      'کاهش باگ‌ها',
      'طراحی بهتر',
      'اطمینان از عملکرد صحیح',
    ],
  },
  {
    title: 'بازبینی کد',
    slug: 'code-review',
    icon: '👀',
    description: 'بررسی سیستماتیک کد توسط اعضای تیم برای یافتن مشکلات و بهبود کیفیت.',
    benefits: [
      'کشف باگ‌های زودهنگام',
      'به اشتراک‌گذاری دانش',
      'حفظ استانداردهای کدنویسی',
      'یادگیری تیمی',
    ],
  },
  {
    title: 'یکپارچه‌سازی مستمر (CI)',
    slug: 'continuous-integration',
    icon: '🔄',
    description: 'ادغام مکرر تغییرات کد در مخزن اصلی و اجرای خودکار تست‌ها.',
    benefits: [
      'کشف سریع مشکلات',
      'کاهش ریسک یکپارچه‌سازی',
      'بازخورد سریع',
      'کیفیت بالاتر',
    ],
  },
  {
    title: 'برنامه‌نویسی جفتی',
    slug: 'pair-programming',
    icon: '👥',
    description: 'دو توسعه‌دهنده روی یک کامپیوتر با هم کار می‌کنند.',
    benefits: [
      'کیفیت کد بهتر',
      'انتقال دانش',
      'حل سریع‌تر مشکلات',
      'کاهش اشتباهات',
    ],
  },
  {
    title: 'ریفکتورینگ',
    slug: 'refactoring',
    icon: '♻️',
    description: 'بهبود ساختار داخلی کد بدون تغییر رفتار خارجی آن.',
    benefits: [
      'کد تمیزتر',
      'قابلیت نگهداری بهتر',
      'کاهش بدهی فنی',
      'عملکرد بهتر',
    ],
  },
]
