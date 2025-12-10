import Link from 'next/link'

export default function TestingPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3">تست نرم‌افزار</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          استراتژی‌ها، روش‌ها و بهترین شیوه‌های تست نرم‌افزار برای اطمینان از کیفیت.
          تست‌نویسی یکی از مهم‌ترین مهارت‌های یک توسعه‌دهنده حرفه‌ای است.
        </p>
      </div>

      {/* Testing Pyramid */}
      <section className="col-span-12 card bg-gradient-to-b from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
        <h2 className="text-xl font-bold mb-4 text-center">هرم تست (Testing Pyramid)</h2>
        <div className="flex flex-col items-center space-y-2">
          <div className="w-1/3 p-3 bg-red-100 dark:bg-red-900/30 rounded-lg text-center">
            <span className="text-sm font-bold">E2E Tests</span>
            <span className="block text-xs text-gray-600 dark:text-gray-400">کم، گران، کند</span>
          </div>
          <div className="w-1/2 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg text-center">
            <span className="text-sm font-bold">Integration Tests</span>
            <span className="block text-xs text-gray-600 dark:text-gray-400">متوسط</span>
          </div>
          <div className="w-full p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-center">
            <span className="text-sm font-bold">Unit Tests</span>
            <span className="block text-xs text-gray-600 dark:text-gray-400">زیاد، ارزان، سریع</span>
          </div>
        </div>
      </section>

      {/* Testing Topics */}
      <div className="col-span-12">
        <h2 className="text-xl font-bold mb-4">مباحث تست</h2>
        <div className="grid grid-cols-12 gap-4">
          {testingTopics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/testing/${topic.slug}`}
              className="col-span-12 sm:col-span-6 xl:col-span-4 card hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <h3 className="text-lg font-bold mb-2">{topic.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {topic.description}
              </p>
              <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-xs">
                {topic.category}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* AAA Pattern */}
      <section className="col-span-12 card">
        <h2 className="text-xl font-bold mb-4">الگوی Arrange-Act-Assert (AAA)</h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          الگوی استاندارد برای سازماندهی تست‌های واحد که خوانایی و قابلیت نگهداری را افزایش می‌دهد.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
            <h3 className="font-bold mb-2 text-amber-800 dark:text-amber-200">1. Arrange (آماده‌سازی)</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              تنظیم شرایط اولیه، ایجاد اشیاء، و آماده‌سازی داده‌های تست.
            </p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h3 className="font-bold mb-2 text-purple-800 dark:text-purple-200">2. Act (اجرا)</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              فراخوانی متد یا عملیاتی که می‌خواهید تست کنید.
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="font-bold mb-2 text-green-800 dark:text-green-200">3. Assert (تأیید)</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              بررسی اینکه نتیجه مطابق انتظار است.
            </p>
          </div>
        </div>
      </section>

      {/* Test Principles */}
      <section className="col-span-12 lg:col-span-6 card">
        <h2 className="text-xl font-bold mb-4">ویژگی‌های تست خوب (F.I.R.S.T)</h2>
        <ul className="space-y-2">
          {firstPrinciples.map((principle) => (
            <li key={principle.letter} className="flex items-start p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="w-8 h-8 flex items-center justify-center bg-amber-500 text-white rounded-full font-bold ml-3">
                {principle.letter}
              </span>
              <div>
                <span className="font-bold">{principle.title}</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">{principle.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Common Mistakes */}
      <section className="col-span-12 lg:col-span-6 card bg-red-50 dark:bg-red-900/20">
        <h2 className="text-xl font-bold mb-4 text-red-700 dark:text-red-400">اشتباهات رایج در تست</h2>
        <ul className="space-y-2">
          {testSmells.map((smell, index) => (
            <li key={index} className="flex items-start">
              <span className="text-red-500 ml-2">✗</span>
              <span className="text-sm text-gray-700 dark:text-gray-300">{smell}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

const testingTopics = [
  {
    title: 'Unit Tests',
    slug: 'unit-tests',
    description: 'تست کوچک‌ترین واحدهای قابل تست کد مانند توابع یا متدها به صورت ایزوله.',
    category: 'نوع تست',
  },
  {
    title: 'Integration Tests',
    slug: 'integration-tests',
    description: 'تست تعامل بین کامپوننت‌های مختلف سیستم و اطمینان از کار صحیح با هم.',
    category: 'نوع تست',
  },
  {
    title: 'Functional Tests',
    slug: 'functional-tests',
    description: 'تست عملکرد سیستم بر اساس نیازمندی‌های کسب‌وکار.',
    category: 'نوع تست',
  },
  {
    title: 'Front-End Tests',
    slug: 'front-end-tests',
    description: 'تست رابط کاربری و تعاملات کاربر با برنامه.',
    category: 'نوع تست',
  },
  {
    title: 'Automated Tests',
    slug: 'automated-tests',
    description: 'تست‌های خودکار که بدون مداخله دستی اجرا می‌شوند.',
    category: 'استراتژی',
  },
  {
    title: 'Arrange-Act-Assert',
    slug: 'arrange-act-assert',
    description: 'الگوی استاندارد برای ساختاردهی تست‌های واحد.',
    category: 'الگو',
  },
  {
    title: 'Testing Pyramid',
    slug: 'testing-pyramid',
    description: 'استراتژی توزیع انواع تست‌ها برای تعادل بین سرعت و اطمینان.',
    category: 'استراتژی',
  },
]

const firstPrinciples = [
  { letter: 'F', title: 'Fast (سریع)', description: 'تست‌ها باید سریع باشند تا بتوان آنها را مکرراً اجرا کرد.' },
  { letter: 'I', title: 'Independent (مستقل)', description: 'تست‌ها نباید به هم وابسته باشند و ترتیب اجرا مهم نباشد.' },
  { letter: 'R', title: 'Repeatable (قابل تکرار)', description: 'هر بار اجرا باید نتیجه یکسان بدهد.' },
  { letter: 'S', title: 'Self-Validating (خود-اعتبارسنج)', description: 'تست باید خودش بگوید pass شده یا fail.' },
  { letter: 'T', title: 'Timely (به‌موقع)', description: 'تست‌ها باید همزمان یا قبل از کد نوشته شوند.' },
]

const testSmells = [
  'تست‌های بیش از حد بزرگ که چندین چیز را تست می‌کنند',
  'تست‌های شکننده که با هر تغییر کوچک می‌شکنند',
  'تست‌های کند که اجرای آنها دقایق طول می‌کشد',
  'تست‌های وابسته به هم که باید به ترتیب خاصی اجرا شوند',
  'تست‌های بدون assertion که هیچ چیزی را بررسی نمی‌کنند',
  'تست‌هایی که به داده‌های خارجی یا شبکه وابسته هستند',
  'تست‌های غیرقابل خواندن با نام‌های بی‌معنی',
]
