export default function ValuesPage() {
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-6">ارزش‌ها</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
        ارزش‌های اصلی که توسعه‌دهندگان حرفه‌ای باید به آن‌ها پایبند باشند.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {values.map((value) => (
          <div key={value.slug} className="card">
            <div className="flex items-center mb-4">
              <span className="text-4xl ml-4">{value.icon}</span>
              <h3 className="text-2xl font-bold">{value.title}</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
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
