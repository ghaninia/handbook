export default function TermsPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3">اصطلاحات</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          واژه‌نامه اصطلاحات رایج در توسعه نرم‌افزار.
        </p>
      </div>

      {/* Term Cards */}
      {terms.map((term) => (
        <div key={term.term} className="col-span-12 md:col-span-6 card">
          <h3 className="text-lg font-bold mb-2 text-primary-light dark:text-primary-dark">
            {term.term}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            {term.definition}
          </p>
          {term.example && (
            <div className="mt-2 p-2 bg-gray-50 dark:bg-gray-800 rounded text-xs">
              <span className="font-semibold">مثال: </span>
              {term.example}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

const terms = [
  {
    term: 'Abstraction (انتزاع)',
    definition: 'فرآیند پنهان کردن جزئیات پیاده‌سازی و نمایش تنها عملکرد ضروری به کاربر.',
    example: 'یک رابط که متدهای عمومی را تعریف می‌کند بدون اینکه جزئیات پیاده‌سازی را نشان دهد.',
  },
  {
    term: 'API (رابط برنامه‌نویسی)',
    definition: 'مجموعه‌ای از قوانین و پروتکل‌ها که به نرم‌افزارها اجازه می‌دهد با یکدیگر ارتباط برقرار کنند.',
    example: 'REST API که به برنامه‌های دیگر اجازه دسترسی به داده‌ها را می‌دهد.',
  },
  {
    term: 'Dependency Injection (تزریق وابستگی)',
    definition: 'الگویی که در آن وابستگی‌های یک کلاس از بیرون تامین می‌شوند نه اینکه داخل کلاس ساخته شوند.',
    example: 'ارسال یک سرویس به کانستراکتور یک کلاس به جای new کردن آن در داخل کلاس.',
  },
  {
    term: 'Refactoring (بازسازی)',
    definition: 'فرآیند بهبود ساختار داخلی کد بدون تغییر رفتار خارجی آن.',
    example: 'استخراج متد تکراری به یک تابع جداگانه.',
  },
  {
    term: 'Technical Debt (بدهی فنی)',
    definition: 'هزینه‌ای که باید در آینده پرداخت شود به دلیل انتخاب راه‌حل سریع به جای معماری بهتر.',
    example: 'نوشتن کد سریع بدون تست که بعداً نیاز به بازنویسی دارد.',
  },
  {
    term: 'Microservices (میکروسرویس)',
    definition: 'معماری که برنامه را به سرویس‌های کوچک و مستقل تقسیم می‌کند.',
    example: 'یک سرویس برای احراز هویت، یک سرویس برای پرداخت و یک سرویس برای محصولات.',
  },
]
