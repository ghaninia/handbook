import Link from 'next/link'

export default function PrinciplesPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3">اصول طراحی نرم‌افزار</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          اصول بنیادی که به شما کمک می‌کنند کد تمیز، قابل نگهداری و قابل توسعه بنویسید.
          این اصول در طول سال‌ها توسط توسعه‌دهندگان با تجربه شناسایی و تدوین شده‌اند.
        </p>
      </div>

      {/* Principle Cards */}
      {principles.map((principle) => (
        <Link
          key={principle.slug}
          href={`/principles/${principle.slug}`}
          className="col-span-12 md:col-span-6 xl:col-span-4 card hover:shadow-xl transition-all hover:scale-[1.02]"
        >
          <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
            {principle.description}
          </p>
          {principle.acronym && (
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs">
              {principle.acronym}
            </span>
          )}
        </Link>
      ))}
    </div>
  )
}

const principles = [
  {
    title: 'SOLID',
    slug: 'solid',
    description: 'پنج اصل اساسی برای طراحی شی‌گرا: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion',
    acronym: 'SRP, OCP, LSP, ISP, DIP',
  },
  {
    title: 'Single Responsibility',
    slug: 'single-responsibility-principle',
    description: 'هر کلاس باید فقط یک دلیل برای تغییر داشته باشد و مسئول یک کار خاص باشد.',
    acronym: 'SRP',
  },
  {
    title: 'Open/Closed',
    slug: 'open-closed-principle',
    description: 'موجودیت‌های نرم‌افزار باید برای توسعه باز و برای تغییر بسته باشند.',
    acronym: 'OCP',
  },
  {
    title: 'Liskov Substitution',
    slug: 'liskov-substitution-principle',
    description: 'اشیاء یک کلاس پایه باید بتوانند با اشیاء زیرکلاس‌هایشان جایگزین شوند.',
    acronym: 'LSP',
  },
  {
    title: 'Interface Segregation',
    slug: 'interface-segregation',
    description: 'کلاینت‌ها نباید مجبور به وابستگی به اینترفیس‌هایی شوند که از آنها استفاده نمی‌کنند.',
    acronym: 'ISP',
  },
  {
    title: 'Dependency Inversion',
    slug: 'dependency-inversion-principle',
    description: 'ماژول‌های سطح بالا نباید به ماژول‌های سطح پایین وابسته باشند. هر دو باید به abstractions وابسته باشند.',
    acronym: 'DIP',
  },
  {
    title: 'Don\'t Repeat Yourself',
    slug: 'dont-repeat-yourself',
    description: 'تکرار در منطق باید از طریق abstraction و تکرار در فرآیند باید از طریق اتوماسیون حذف شود.',
    acronym: 'DRY',
  },
  {
    title: 'Keep It Simple (KISS)',
    slug: 'keep-it-simple',
    description: 'همه چیز باید تا حد ممکن ساده باشد، اما نه ساده‌تر. پیچیدگی غیرضروری منبع باگ است.',
    acronym: 'KISS',
  },
  {
    title: 'YAGNI',
    slug: 'yagni',
    description: 'همیشه چیزها را وقتی پیاده‌سازی کنید که واقعاً به آنها نیاز دارید، نه وقتی که فکر می‌کنید شاید نیاز داشته باشید.',
    acronym: 'You Ain\'t Gonna Need It',
  },
  {
    title: 'Separation of Concerns',
    slug: 'separation-of-concerns',
    description: 'برنامه را به بخش‌های مجزا تقسیم کنید که هر کدام یک دغدغه خاص را مدیریت می‌کنند.',
    acronym: 'SoC',
  },
  {
    title: 'Encapsulation',
    slug: 'encapsulation',
    description: 'داده‌ها و متدهای مرتبط را در یک واحد گروه‌بندی و جزئیات پیاده‌سازی را پنهان کنید.',
    acronym: null,
  },
  {
    title: 'Explicit Dependencies',
    slug: 'explicit-dependencies-principle',
    description: 'متدها و کلاس‌ها باید صراحتاً وابستگی‌های خود را اعلام کنند.',
    acronym: null,
  },
  {
    title: 'Inversion of Control',
    slug: 'inversion-of-control',
    description: 'کنترل را از کد خود به یک framework یا container خارجی منتقل کنید.',
    acronym: 'IoC',
  },
  {
    title: 'Hollywood Principle',
    slug: 'hollywood-principle',
    description: 'با ما تماس نگیرید، ما با شما تماس می‌گیریم. کلاس‌های سطح بالا فراخوانی را کنترل می‌کنند.',
    acronym: null,
  },
  {
    title: 'Boy Scout Rule',
    slug: 'boy-scout-rule',
    description: 'کد را همیشه تمیزتر از وقتی که پیدایش کردید ترک کنید.',
    acronym: null,
  },
  {
    title: 'Tell, Don\'t Ask',
    slug: 'tell-dont-ask',
    description: 'به اشیاء بگویید چه کار کنند، به جای پرسیدن از آنها و تصمیم‌گیری برایشان.',
    acronym: null,
  },
  {
    title: 'Persistence Ignorance',
    slug: 'persistence-ignorance',
    description: 'اشیاء دامنه نباید از نحوه ذخیره‌سازی خود آگاه باشند.',
    acronym: 'PI',
  },
  {
    title: 'Once and Only Once',
    slug: 'once-and-only-once',
    description: 'هر قطعه دانش باید یک نمایش واحد، بی‌ابهام و معتبر در سیستم داشته باشد.',
    acronym: 'OAOO',
  },
  {
    title: 'Fail Fast',
    slug: 'fail-fast',
    description: 'سیستم باید در اولین فرصت خطاها را گزارش دهد و متوقف شود.',
    acronym: null,
  },
  {
    title: 'Architectural Agility',
    slug: 'architectural-agility',
    description: 'معماری باید امکان تغییر سریع و آسان را فراهم کند.',
    acronym: null,
  },
  {
    title: 'Stable Dependencies',
    slug: 'stable-dependencies',
    description: 'وابستگی‌ها باید در جهت ثبات باشند. به چیزهایی که کمتر تغییر می‌کنند وابسته باشید.',
    acronym: 'SDP',
  },
  {
    title: 'Tolerance for Imperfection',
    slug: 'tolerance-for-imperfection',
    description: 'در دنیای واقعی، کمال غیرممکن است. راه‌حل‌های عملی بهتر از کمال‌گرایی هستند.',
    acronym: null,
  },
  {
    title: 'Law of Demeter',
    slug: 'law-of-demeter',
    description: 'فقط با دوستان نزدیک صحبت کنید. یک واحد باید دانش محدودی درباره واحدهای دیگر داشته باشد.',
    acronym: 'LoD',
  },
  {
    title: 'Principle of Least Astonishment',
    slug: 'principle-of-least-astonishment',
    description: 'رفتار سیستم باید حداقل تعجب را برای کاربر ایجاد کند.',
    acronym: 'POLA',
  },
  {
    title: 'Make Invalid States Unrepresentable',
    slug: 'make-invalid-states-unrepresentable',
    description: 'سیستم تایپ را طوری طراحی کنید که حالت‌های نامعتبر قابل نمایش نباشند.',
    acronym: null,
  },
]
