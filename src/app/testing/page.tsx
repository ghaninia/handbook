export default function TestingPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3">تست</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          استراتژی‌ها و روش‌های تست نرم‌افزار برای اطمینان از کیفیت.
        </p>
      </div>

      {/* Test Types */}
      <section className="col-span-12 lg:col-span-6 card">
        <h2 className="text-xl font-bold mb-4">انواع تست</h2>
        <div className="grid grid-cols-1 gap-3">
          {testTypes.map((test) => (
            <div key={test.title} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center mb-1">
                <span className="text-xl ml-2">{test.icon}</span>
                <h3 className="font-bold">{test.title}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                {test.description}
              </p>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                <strong>زمان: </strong>{test.when}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Test Principles */}
      <section className="col-span-12 lg:col-span-6 card bg-green-50 dark:bg-green-900/20">
        <h2 className="text-xl font-bold mb-4">اصول تست</h2>
        <ul className="grid grid-cols-1 gap-2">
          {testPrinciples.map((principle) => (
            <li key={principle} className="flex items-start">
              <span className="text-green-600 dark:text-green-400 ml-2">✓</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">{principle}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* AAA Pattern */}
      <section className="col-span-12 card">
        <h2 className="text-xl font-bold mb-4">الگوی AAA</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
            <h3 className="font-bold mb-1">1. Arrange (آماده‌سازی)</h3>
            <p className="text-xs text-gray-700 dark:text-gray-300">
              تنظیم شرایط اولیه و ایجاد اشیاء مورد نیاز
            </p>
          </div>
          <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h3 className="font-bold mb-1">2. Act (اجرا)</h3>
            <p className="text-xs text-gray-700 dark:text-gray-300">
              فراخوانی متد یا عملکردی که می‌خواهید تست کنید
            </p>
          </div>
          <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="font-bold mb-1">3. Assert (بررسی)</h3>
            <p className="text-xs text-gray-700 dark:text-gray-300">
              تأیید اینکه نتیجه مطابق انتظار است
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

const testTypes = [
  {
    title: 'تست واحد (Unit Test)',
    icon: '🔬',
    description: 'تست کوچک‌ترین واحدهای قابل تست کد مانند توابع یا متدها.',
    when: 'همیشه و برای هر تابع مهم',
  },
  {
    title: 'تست یکپارچه‌سازی',
    icon: '🔗',
    description: 'تست تعامل بین کامپوننت‌های مختلف سیستم.',
    when: 'هنگام ترکیب چند ماژول',
  },
  {
    title: 'تست End-to-End',
    icon: '🎯',
    description: 'تست کل سیستم از ابتدا تا انتها از دیدگاه کاربر.',
    when: 'قبل از انتشار نسخه جدید',
  },
  {
    title: 'تست عملکرد',
    icon: '⚡',
    description: 'تست سرعت، مقیاس‌پذیری و پایداری سیستم.',
    when: 'برای سیستم‌های با بار بالا',
  },
]

const testPrinciples = [
  'تست‌ها باید سریع باشند تا بتوان آن‌ها را مکرراً اجرا کرد',
  'تست‌ها باید مستقل باشند و به هم وابسته نباشند',
  'تست‌ها باید قابل تکرار باشند و همیشه نتیجه یکسانی بدهند',
  'تست‌ها باید خودکار باشند و نیاز به مداخله دستی نداشته باشند',
  'هر تست باید یک چیز را بررسی کند',
  'تست‌ها باید قابل خواندن و قابل فهم باشند',
]
