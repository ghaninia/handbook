export default function LawsPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3">قوانین توسعه نرم‌افزار</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          قوانین و اصول شناخته شده در صنعت نرم‌افزار که از تجربه و مشاهده حاصل شده‌اند.
        </p>
      </div>

      {/* Law Cards */}
      {laws.map((law) => (
        <div key={law.name} className="col-span-12 md:col-span-6 card">
          <h3 className="text-lg font-bold mb-2 text-primary-light dark:text-primary-dark">
            {law.name}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm leading-relaxed">
            {law.statement}
          </p>
          <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              <strong>معنی: </strong>
              {law.meaning}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

const laws = [
  {
    name: 'قانون مورفی',
    statement: 'هر چیزی که احتمال خرابی دارد، خراب خواهد شد.',
    meaning: 'همیشه برای موارد غیرمنتظره برنامه‌ریزی کنید و از مدیریت خطا استفاده کنید.',
  },
  {
    name: 'قانون کانوی',
    statement: 'سازمان‌هایی که سیستم‌ها را طراحی می‌کنند، ساختارهایی تولید می‌کنند که کپی ساختار ارتباطی خودشان هستند.',
    meaning: 'معماری نرم‌افزار شما منعکس‌کننده ساختار سازمانی شماست.',
  },
  {
    name: 'قانون بروکس',
    statement: 'اضافه کردن نیروی انسانی به یک پروژه نرم‌افزاری که دیر شده، آن را دیرتر می‌کند.',
    meaning: 'افزودن افراد بیشتر در مراحل پایانی پروژه معمولاً کمک نمی‌کند.',
  },
  {
    name: 'قانون پارتو (80/20)',
    statement: '80 درصد از نتایج از 20 درصد از علل حاصل می‌شود.',
    meaning: 'اکثر باگ‌ها در تعداد کمی از ماژول‌ها هستند و اکثر ویژگی‌ها کمتر استفاده می‌شوند.',
  },
  {
    name: 'قانون هافشتادر',
    statement: 'همیشه کارها بیشتر از آنچه فکر می‌کنید طول می‌کشد، حتی زمانی که قانون هافشتادر را در نظر بگیرید.',
    meaning: 'تخمین زمان در توسعه نرم‌افزار بسیار دشوار است.',
  },
  {
    name: 'قانون آمدال',
    statement: 'بهبود سرعت یک سیستم با بهبود یک قسمت محدود است به میزان استفاده از آن قسمت.',
    meaning: 'بهینه‌سازی قسمتی که کمتر استفاده می‌شود تأثیر کمی دارد.',
  },
  {
    name: 'قانون لینوس',
    statement: 'با چشم‌های کافی، همه باگ‌ها سطحی هستند.',
    meaning: 'با بررسی بیشتر و تعداد بیشتر توسعه‌دهنده، یافتن و رفع باگ آسان‌تر می‌شود.',
  },
]
