export default function ValuesPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3">ارزش‌ها</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          ارزش‌های اصلی که توسعه‌دهندگان حرفه‌ای باید به آن‌ها پایبند باشند.
        </p>
      </div>

      {/* Value Cards */}
      {values.map((value) => (
        <div key={value.slug} className="col-span-12 sm:col-span-6 lg:col-span-4 card">
          <div className="flex items-center mb-3">
            <span className="text-3xl ml-3">{value.icon}</span>
            <h3 className="text-lg font-bold">{value.title}</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {value.description}
          </p>
        </div>
      ))}
    </div>
  )
}

const values = [
  {
    title: 'سادگی',
    slug: 'simplicity',
    icon: '🎯',
    description: 'راه‌حل ساده‌تر همیشه بهتر است. پیچیدگی غیرضروری را حذف کنید و بر وضوح تمرکز کنید.',
  },
  {
    title: 'ارتباطات',
    slug: 'communication',
    icon: '💬',
    description: 'ارتباط مؤثر در تیم کلید موفقیت است. به اشتراک‌گذاری دانش و همکاری را ترویج دهید.',
  },
  {
    title: 'بازخورد',
    slug: 'feedback',
    icon: '🔄',
    description: 'بازخورد سریع و مستمر به بهبود کیفیت و رشد فردی و تیمی کمک می‌کند.',
  },
  {
    title: 'شجاعت',
    slug: 'courage',
    icon: '💪',
    description: 'شجاعت برای پذیرش اشتباهات، تغییر رویکرد و بهبود مستمر ضروری است.',
  },
  {
    title: 'احترام',
    slug: 'respect',
    icon: '🤝',
    description: 'احترام به اعضای تیم، کاربران و کدی که روی آن کار می‌کنید اساسی است.',
  },
  {
    title: 'تمرکز',
    slug: 'focus',
    icon: '🎪',
    description: 'روی کارهایی تمرکز کنید که بیشترین ارزش را ایجاد می‌کنند و حواس‌پرتی‌ها را کنار بگذارید.',
  },
]
