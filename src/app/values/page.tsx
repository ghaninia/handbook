import Link from 'next/link'

export default function ValuesPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3">ارزش‌های Extreme Programming</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          ارزش‌های اصلی Extreme Programming (XP) که پایه و اساس همه شیوه‌های توسعه چابک هستند.
          این ارزش‌ها توسط Kent Beck معرفی شده‌اند و راهنمای تیم‌های توسعه در تصمیم‌گیری‌هایشان هستند.
        </p>
      </div>

      {/* XP Values */}
      <div className="col-span-12">
        <div className="grid grid-cols-12 gap-6">
          {xpValues.map((value) => (
            <Link
              key={value.slug}
              href={`/values/${value.slug}`}
              className="col-span-12 sm:col-span-6 lg:col-span-4 card hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl ml-4">{value.icon}</span>
                <div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{value.english}</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {value.description}
              </p>
              <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                <p className="text-sm italic text-amber-800 dark:text-amber-200">
                  "{value.quote}"
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="col-span-12 card bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20">
        <blockquote className="text-center">
          <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
            "ارزش‌ها معیاری برای اولویت‌بندی هستند. آنها به ما کمک می‌کنند تا وقتی با انتخاب‌های متضاد مواجه می‌شویم، تصمیم بگیریم."
          </p>
          <footer className="text-sm text-gray-500 dark:text-gray-400">
            — Kent Beck, Extreme Programming Explained
          </footer>
        </blockquote>
      </div>
    </div>
  )
}

const xpValues = [
  {
    title: 'ارتباطات',
    english: 'Communication',
    slug: 'communication',
    icon: '💬',
    description: 'ارتباط مؤثر در تیم کلید موفقیت است. مشکلات وقتی حل می‌شوند که همه با هم صحبت کنند. Pair Programming، Planning Games و Daily Standups همه برای ترویج ارتباط هستند.',
    quote: 'هیچ‌کس به تنهایی همه جواب‌ها را نمی‌داند.',
  },
  {
    title: 'سادگی',
    english: 'Simplicity',
    slug: 'simplicity',
    icon: '🎯',
    description: 'ساده‌ترین راه‌حلی که کار می‌کند را بسازید. پیچیدگی غیرضروری را حذف کنید. YAGNI و KISS از اینجا می‌آیند. سادگی به معنای انجام ندادن نیست، بلکه انجام دادن فقط آنچه لازم است.',
    quote: 'همه چیز باید تا حد ممکن ساده باشد، اما نه ساده‌تر.',
  },
  {
    title: 'بازخورد',
    english: 'Feedback',
    slug: 'feedback',
    icon: '🔄',
    description: 'بازخورد سریع و مستمر به تیم کمک می‌کند مسیر را اصلاح کند. تست‌ها، Code Review ها، Demo ها و Retrospective ها همه منابع بازخورد هستند. هر چه بازخورد سریع‌تر باشد، اصلاح ارزان‌تر است.',
    quote: 'زود شکست بخورید، سریع یاد بگیرید.',
  },
  {
    title: 'شجاعت',
    english: 'Courage',
    slug: 'courage',
    icon: '💪',
    description: 'شجاعت برای گفتن حقیقت، پذیرش اشتباهات، ریفکتور کردن کد، و انجام کار درست حتی وقتی سخت است. شجاعت به معنای بی‌پروایی نیست، بلکه تصمیم‌گیری بر اساس ارزش‌ها است.',
    quote: 'شجاعت بدون ارزش‌های دیگر خطرناک است.',
  },
  {
    title: 'احترام',
    english: 'Respect',
    slug: 'respect',
    icon: '🤝',
    description: 'احترام به اعضای تیم، کاربران، و حتی کدی که روی آن کار می‌کنید. هر کسی ارزشمند است و نظرش مهم است. بدون احترام متقابل، همکاری مؤثر غیرممکن است.',
    quote: 'همه اعضای تیم یکسان مهم هستند.',
  },
]
