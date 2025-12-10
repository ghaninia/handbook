import Link from 'next/link'

export default function LawsPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3">قوانین توسعه نرم‌افزار</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          قوانین و اصول شناخته شده در صنعت نرم‌افزار که از تجربه و مشاهده حاصل شده‌اند.
          این قوانین به نام کاشفان یا بنیان‌گذاران آنها نام‌گذاری شده‌اند.
        </p>
      </div>

      {/* Law Cards */}
      {laws.map((law) => (
        <Link
          key={law.slug}
          href={`/laws/${law.slug}`}
          className="col-span-12 sm:col-span-6 xl:col-span-4 card hover:shadow-xl transition-all hover:scale-[1.02]"
        >
          <h3 className="text-lg font-bold mb-2 text-primary-light dark:text-primary-dark">
            {law.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
            {law.statement}
          </p>
          <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-xs">
            {law.category}
          </span>
        </Link>
      ))}
    </div>
  )
}

const laws = [
  // Software Development Laws
  {
    name: 'قانون Brooks',
    slug: 'brooks-law',
    statement: 'اضافه کردن نیروی انسانی به یک پروژه نرم‌افزاری که تأخیر دارد، آن را بیشتر به تأخیر می‌اندازد.',
    category: 'مدیریت پروژه',
  },
  {
    name: 'قانون Conway',
    slug: 'conways-law',
    statement: 'سازمان‌ها سیستم‌هایی طراحی می‌کنند که ساختار ارتباطی خودشان را منعکس می‌کند.',
    category: 'معماری',
  },
  {
    name: 'قانون Murphy',
    slug: 'murphys-law',
    statement: 'هر چیزی که امکان خرابی دارد، خراب خواهد شد.',
    category: 'عمومی',
  },
  {
    name: 'قانون Hofstadter',
    slug: 'hofstadters-law',
    statement: 'همیشه بیشتر از آنچه انتظار دارید طول می‌کشد، حتی با در نظر گرفتن قانون Hofstadter!',
    category: 'تخمین',
  },
  {
    name: 'قانون Linus',
    slug: 'linus-law',
    statement: 'با چشم‌های کافی، همه باگ‌ها سطحی هستند.',
    category: 'Open Source',
  },
  {
    name: 'قانون Moore',
    slug: 'moores-law',
    statement: 'تعداد ترانزیستورها روی یک تراشه هر دو سال دو برابر می‌شود.',
    category: 'سخت‌افزار',
  },
  {
    name: 'قانون Wirth',
    slug: 'wirths-law',
    statement: 'نرم‌افزار سریع‌تر از آنچه سخت‌افزار سریع‌تر می‌شود، کندتر می‌شود.',
    category: 'عملکرد',
  },
  {
    name: 'قانون Amdahl',
    slug: 'amdahls-law',
    statement: 'سرعت کلی یک سیستم با بهبود یک بخش، محدود به نسبت استفاده از آن بخش است.',
    category: 'عملکرد',
  },
  {
    name: 'قانون Demeter',
    slug: 'law-of-demeter',
    statement: 'فقط با دوستان نزدیک خود صحبت کنید، نه با دوستان دوستان.',
    category: 'طراحی',
  },
  {
    name: 'قانون Postel',
    slug: 'postels-law',
    statement: 'در آنچه می‌فرستید سختگیر باشید، در آنچه می‌پذیرید آزاداندیش.',
    category: 'طراحی',
  },
  {
    name: 'قانون Cunningham',
    slug: 'cunninghams-law',
    statement: 'بهترین راه برای گرفتن جواب درست در اینترنت، پرسیدن سوال نیست بلکه دادن جواب غلط است!',
    category: 'عمومی',
  },
  {
    name: 'قانون Goodhart',
    slug: 'goodharts-law',
    statement: 'وقتی یک معیار به هدف تبدیل شود، دیگر معیار خوبی نیست.',
    category: 'متریک‌ها',
  },
  {
    name: 'قانون Gall',
    slug: 'galls-law',
    statement: 'هر سیستم پیچیده‌ای که کار می‌کند از یک سیستم ساده که کار می‌کرده تکامل یافته است.',
    category: 'معماری',
  },
  {
    name: 'قانون Pareto (80/20)',
    slug: 'pareto-principle',
    statement: '۸۰٪ نتایج از ۲۰٪ تلاش‌ها حاصل می‌شود.',
    category: 'عمومی',
  },
  {
    name: 'قانون Amara',
    slug: 'amaras-law',
    statement: 'ما تأثیر تکنولوژی را در کوتاه‌مدت بیش از حد و در بلندمدت کمتر از حد تخمین می‌زنیم.',
    category: 'تکنولوژی',
  },
  {
    name: 'قانون Anderson',
    slug: 'andersons-law',
    statement: 'هیچ‌کس نمی‌خواند وقتی نوشته تکان نمی‌خورد.',
    category: 'UX',
  },
  {
    name: 'قانون Hick',
    slug: 'hicks-law',
    statement: 'زمان تصمیم‌گیری با تعداد و پیچیدگی انتخاب‌ها افزایش می‌یابد.',
    category: 'UX',
  },
  {
    name: 'قانون Hebb',
    slug: 'hebbs-law',
    statement: 'نورون‌هایی که با هم فعال می‌شوند، با هم سیم‌کشی می‌شوند.',
    category: 'یادگیری',
  },
  {
    name: 'قانون Kerckhoffs',
    slug: 'kerckhoffs-law',
    statement: 'امنیت یک سیستم نباید به محرمانه بودن الگوریتم آن وابسته باشد.',
    category: 'امنیت',
  },
  {
    name: 'قانون‌های معماری نرم‌افزار',
    slug: 'software-architecture-laws',
    statement: 'مجموعه‌ای از قوانین بنیادی برای معماری نرم‌افزار.',
    category: 'معماری',
  },
  {
    name: 'قانون بازده نزولی',
    slug: 'law-of-diminishing-returns',
    statement: 'هر چه بیشتر از یک منبع استفاده کنید، بازده نهایی آن کاهش می‌یابد.',
    category: 'عمومی',
  },
]
