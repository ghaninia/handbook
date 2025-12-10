import Link from 'next/link'

export default function CodeSmellsPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3">بوی بد کد (Code Smells)</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          Code Smell نشانه‌ای سطحی است که معمولاً به یک مشکل عمیق‌تر در کد اشاره می‌کند.
          این اصطلاح توسط Kent Beck معرفی و توسط Martin Fowler در کتاب "Refactoring" محبوب شد.
          بوی بد به تنهایی باگ نیست، اما نشان‌دهنده ضعف در طراحی است که می‌تواند منجر به مشکلات شود.
        </p>
      </div>

      {/* Smell Categories */}
      {smellCategories.map((category) => (
        <section key={category.title} className="col-span-12">
          <div className="card">
            <div className="flex items-center mb-4">
              <span className="text-2xl ml-3">{category.icon}</span>
              <div>
                <h2 className="text-xl font-bold">{category.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              {category.smells.map((smell) => (
                <Link
                  key={smell.slug}
                  href={`/code-smells/${smell.slug}`}
                  className="col-span-12 sm:col-span-6 xl:col-span-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold mb-2">{smell.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {smell.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Quote */}
      <div className="col-span-12 card bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
        <blockquote className="text-center">
          <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
            "اگر بو می‌دهد، تغییرش بده."
          </p>
          <footer className="text-sm text-gray-500 dark:text-gray-400">
            — Kent Beck, Grandma Beck
          </footer>
        </blockquote>
      </div>
    </div>
  )
}

const smellCategories = [
  {
    title: 'Bloaters (پف‌کرده‌ها)',
    icon: '🎈',
    description: 'کد، متد یا کلاسی که به اندازه‌ای بزرگ شده که کار با آن سخت است.',
    smells: [
      { name: 'Long Method', slug: 'long-method', description: 'متدی که بیش از حد طولانی است و کارهای زیادی انجام می‌دهد.' },
      { name: 'Large Class', slug: 'large-class', description: 'کلاسی که مسئولیت‌های زیادی دارد و بسیار بزرگ شده.' },
      { name: 'Primitive Obsession', slug: 'primitive-obsession', description: 'استفاده بیش از حد از نوع‌های ابتدایی به جای کلاس‌های کوچک.' },
      { name: 'Long Parameter List', slug: 'long-parameter-list', description: 'متدی که پارامترهای زیادی دارد.' },
      { name: 'Data Clumps', slug: 'data-clumps', description: 'گروه‌هایی از داده‌ها که همیشه با هم ظاهر می‌شوند.' },
    ],
  },
  {
    title: 'Object-Orientation Abusers (سوءاستفاده از OO)',
    icon: '🔨',
    description: 'استفاده نادرست یا ناقص از اصول برنامه‌نویسی شیءگرا.',
    smells: [
      { name: 'Switch Statements', slug: 'switch-statements', description: 'switch های پیچیده که باید با چندریختی جایگزین شوند.' },
      { name: 'Temporary Field', slug: 'temporary-field', description: 'فیلدهایی که فقط در شرایط خاص مقدار دارند.' },
      { name: 'Refused Bequest', slug: 'refused-bequest', description: 'زیرکلاسی که از ویژگی‌های والد استفاده نمی‌کند.' },
      { name: 'Alternative Classes', slug: 'alternative-classes', description: 'کلاس‌هایی با اینترفیس متفاوت که کار مشابه انجام می‌دهند.' },
    ],
  },
  {
    title: 'Change Preventers (مانع تغییر)',
    icon: '🚧',
    description: 'الگوهایی که تغییر کد را در آینده دشوار می‌کنند.',
    smells: [
      { name: 'Divergent Change', slug: 'divergent-change', description: 'کلاسی که به دلایل مختلف زیاد تغییر می‌کند.' },
      { name: 'Shotgun Surgery', slug: 'shotgun-surgery', description: 'یک تغییر کوچک نیاز به تغییر در فایل‌های زیادی دارد.' },
      { name: 'Parallel Inheritance', slug: 'parallel-inheritance', description: 'ایجاد زیرکلاس جدید نیاز به زیرکلاس در سلسله‌مراتب دیگر دارد.' },
    ],
  },
  {
    title: 'Dispensables (اضافی‌ها)',
    icon: '🗑️',
    description: 'چیزهای غیرضروری که حذف آنها کد را تمیزتر می‌کند.',
    smells: [
      { name: 'Comments', slug: 'comments-smell', description: 'کامنت‌های اضافی که به جای کد رسا استفاده شده‌اند.' },
      { name: 'Duplicate Code', slug: 'duplicate-code', description: 'کد تکراری در چند جای مختلف.' },
      { name: 'Lazy Class', slug: 'lazy-class', description: 'کلاسی که کار خاصی انجام نمی‌دهد.' },
      { name: 'Dead Code', slug: 'dead-code', description: 'کدی که هرگز اجرا نمی‌شود.' },
      { name: 'Speculative Generality', slug: 'speculative-generality', description: 'انتزاع‌هایی که "شاید در آینده لازم شوند".' },
    ],
  },
  {
    title: 'Couplers (وابستگی‌ها)',
    icon: '🔗',
    description: 'وابستگی بیش از حد بین کلاس‌ها.',
    smells: [
      { name: 'Feature Envy', slug: 'feature-envy', description: 'متدی که بیشتر از کلاس دیگر استفاده می‌کند تا کلاس خودش.' },
      { name: 'Inappropriate Intimacy', slug: 'inappropriate-intimacy', description: 'کلاس‌هایی که بیش از حد به جزئیات داخلی هم دسترسی دارند.' },
      { name: 'Message Chains', slug: 'message-chains', description: 'زنجیره‌ای از فراخوانی‌ها مثل a.getB().getC().getD().' },
      { name: 'Middle Man', slug: 'middle-man', description: 'کلاسی که فقط کار را به کلاس دیگر محول می‌کند.' },
    ],
  },
  {
    title: 'Obfuscators (مبهم‌سازها)',
    icon: '🌫️',
    description: 'الگوهایی که درک کد را سخت می‌کنند.',
    smells: [
      { name: 'Inconsistent Names', slug: 'inconsistent-names', description: 'نام‌گذاری ناسازگار در کدبیس.' },
      { name: 'Obscured Intent', slug: 'obscured-intent', description: 'هدف کد واضح نیست.' },
      { name: 'Magic Numbers', slug: 'magic-numbers', description: 'اعداد بدون معنی در کد.' },
      { name: 'Vertical Separation', slug: 'vertical-separation', description: 'تعریف و استفاده از هم دورند.' },
    ],
  },
  {
    title: 'Test Smells (بوی تست)',
    icon: '🧪',
    description: 'مشکلات رایج در کد تست.',
    smells: [
      { name: 'Test Not Testing Anything', slug: 'empty-test', description: 'تستی که چیزی را واقعاً بررسی نمی‌کند.' },
      { name: 'Fragile Tests', slug: 'fragile-tests', description: 'تست‌هایی که با تغییرات کوچک می‌شکنند.' },
      { name: 'Slow Tests', slug: 'slow-tests', description: 'تست‌های کند که اجرای آنها طولانی است.' },
      { name: 'Test Interdependence', slug: 'test-interdependence', description: 'تست‌هایی که به هم وابسته هستند.' },
    ],
  },
]
