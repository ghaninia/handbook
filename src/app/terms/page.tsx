import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3">اصطلاحات و مفاهیم</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          واژه‌نامه اصطلاحات رایج در توسعه نرم‌افزار و مهندسی نرم‌افزار.
          درک این مفاهیم برای ارتباط مؤثر در تیم‌های توسعه ضروری است.
        </p>
      </div>

      {/* Key Terms from DevIQ */}
      <section className="col-span-12">
        <h2 className="text-xl font-bold mb-4">اصطلاحات کلیدی</h2>
        <div className="grid grid-cols-12 gap-4">
          {keyTerms.map((term) => (
            <Link
              key={term.slug}
              href={`/terms/${term.slug}`}
              className="col-span-12 sm:col-span-6 xl:col-span-4 card hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <h3 className="text-lg font-bold mb-2 text-primary-light dark:text-primary-dark">
                {term.term}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {term.definition}
              </p>
              <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-xs">
                {term.category}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Glossary */}
      <section className="col-span-12">
        <h2 className="text-xl font-bold mb-4">واژه‌نامه عمومی</h2>
        <div className="grid grid-cols-12 gap-4">
          {glossary.map((term) => (
            <div key={term.term} className="col-span-12 md:col-span-6 card">
              <h3 className="text-lg font-bold mb-2">
                {term.term}
                {term.english && (
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mr-2">
                    ({term.english})
                  </span>
                )}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {term.definition}
              </p>
              {term.example && (
                <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm">
                  <span className="font-semibold text-amber-600 dark:text-amber-400">مثال: </span>
                  {term.example}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

const keyTerms = [
  {
    term: 'Technical Debt',
    slug: 'technical-debt',
    definition: 'هزینه‌ای که باید در آینده پرداخت شود به دلیل انتخاب راه‌حل سریع به جای معماری بهتر. مثل وام گرفتن از آینده!',
    category: 'مدیریت',
  },
  {
    term: 'Bus Factor',
    slug: 'bus-factor',
    definition: 'تعداد افرادی که اگر ناپدید شوند (مثلاً با اتوبوس تصادف کنند!) پروژه متوقف می‌شود. هرچه بالاتر باشد بهتر است.',
    category: 'تیمی',
  },
  {
    term: 'Kinds of Models',
    slug: 'kinds-of-models',
    description: 'انواع مختلف مدل‌ها در توسعه نرم‌افزار از Domain Model تا View Model.',
    category: 'معماری',
    definition: 'انواع مختلف مدل‌ها که هر کدام هدف متفاوتی دارند: Domain Model، View Model، DTO و ...',
  },
]

const glossary = [
  {
    term: 'انتزاع',
    english: 'Abstraction',
    definition: 'فرآیند پنهان کردن جزئیات پیاده‌سازی و نمایش تنها عملکرد ضروری. یکی از چهار ستون برنامه‌نویسی شیءگرا.',
    example: 'یک interface که فقط متدهای عمومی را تعریف می‌کند.',
  },
  {
    term: 'API',
    english: 'Application Programming Interface',
    definition: 'قرارداد بین دو برنامه که مشخص می‌کند چگونه با هم ارتباط برقرار کنند.',
    example: 'REST API که endpoint ها و فرمت داده را تعریف می‌کند.',
  },
  {
    term: 'تزریق وابستگی',
    english: 'Dependency Injection',
    definition: 'الگویی که وابستگی‌ها را از بیرون به کلاس می‌دهد به جای ساختن آنها در داخل.',
    example: 'ارسال ILogger به constructor به جای new Logger().',
  },
  {
    term: 'ریفکتورینگ',
    english: 'Refactoring',
    definition: 'بهبود ساختار داخلی کد بدون تغییر رفتار خارجی آن.',
    example: 'استخراج متد تکراری به یک تابع جداگانه.',
  },
  {
    term: 'میکروسرویس',
    english: 'Microservices',
    definition: 'معماری که برنامه را به سرویس‌های کوچک و مستقل تقسیم می‌کند.',
    example: 'سرویس جداگانه برای احراز هویت، پرداخت و سفارشات.',
  },
  {
    term: 'مونولیتیک',
    english: 'Monolithic',
    definition: 'معماری که کل برنامه به صورت یک واحد یکپارچه ساخته شده است.',
    example: 'یک فایل exe یا یک container که همه چیز داخل آن است.',
  },
  {
    term: 'Coupling',
    english: 'Coupling',
    definition: 'میزان وابستگی بین ماژول‌ها. Loose coupling مطلوب است.',
    example: 'کلاسی که مستقیماً به کلاس دیگر new می‌کند tight coupling دارد.',
  },
  {
    term: 'Cohesion',
    english: 'Cohesion',
    definition: 'میزان مرتبط بودن اعضای یک ماژول با هم. High cohesion مطلوب است.',
    example: 'کلاسی که فقط کارهای مرتبط با یک مفهوم را انجام می‌دهد.',
  },
  {
    term: 'Idempotent',
    english: 'Idempotent',
    definition: 'عملیاتی که اجرای چندباره آن همان نتیجه اجرای یک‌باره را دارد.',
    example: 'PUT request که چند بار ارسال شود نتیجه یکسان دارد.',
  },
  {
    term: 'Immutable',
    english: 'Immutable',
    definition: 'شیءای که پس از ایجاد قابل تغییر نیست و تغییر آن نسخه جدید ایجاد می‌کند.',
    example: 'String در بسیاری از زبان‌ها immutable است.',
  },
  {
    term: 'Mocking',
    english: 'Mocking',
    definition: 'جایگزینی وابستگی‌های واقعی با نسخه‌های ساختگی در تست.',
    example: 'استفاده از mock database به جای database واقعی در unit test.',
  },
  {
    term: 'Payload',
    english: 'Payload',
    definition: 'داده اصلی که در یک پیام یا request ارسال می‌شود.',
    example: 'بدنه JSON در یک POST request.',
  },
]
