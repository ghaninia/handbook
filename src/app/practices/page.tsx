import Link from 'next/link'

export default function PracticesPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3">روش‌های توسعه نرم‌افزار</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          بهترین شیوه‌ها و روش‌های اثبات شده برای توسعه نرم‌افزار حرفه‌ای که توسط تیم‌های موفق استفاده می‌شوند.
        </p>
      </div>

      {/* Practice Cards */}
      {practices.map((practice) => (
        <Link
          key={practice.slug}
          href={`/practices/${practice.slug}`}
          className="col-span-12 sm:col-span-6 xl:col-span-4 card hover:shadow-xl transition-all hover:scale-[1.02]"
        >
          <h3 className="text-lg font-bold mb-2">{practice.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
            {practice.description}
          </p>
          <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-xs">
            {practice.category}
          </span>
        </Link>
      ))}
    </div>
  )
}

const practices = [
  // Development Practices
  {
    title: 'Test Driven Development (TDD)',
    slug: 'test-driven-development',
    description: 'ابتدا تست بنویسید، سپس کد را برای عبور از تست پیاده‌سازی کنید و سپس ریفکتور کنید.',
    category: 'تست',
  },
  {
    title: 'Behavior Driven Development (BDD)',
    slug: 'behavior-driven-development',
    description: 'توسعه مبتنی بر رفتار با تمرکز بر رفتار مورد انتظار سیستم از دید کاربر.',
    category: 'تست',
  },
  {
    title: 'Red, Green, Refactor',
    slug: 'red-green-refactor',
    description: 'چرخه TDD: ابتدا تست شکست‌خورده (قرمز)، سپس کد (سبز)، و در نهایت ریفکتور.',
    category: 'تست',
  },
  {
    title: 'Continuous Integration',
    slug: 'continuous-integration',
    description: 'ادغام مکرر تغییرات کد در مخزن اصلی و اجرای خودکار تست‌ها.',
    category: 'DevOps',
  },
  {
    title: 'Code Review',
    slug: 'code-review',
    description: 'بررسی سیستماتیک کد توسط اعضای تیم برای یافتن مشکلات و بهبود کیفیت.',
    category: 'تیمی',
  },
  {
    title: 'Pair Programming',
    slug: 'pair-programming',
    description: 'دو توسعه‌دهنده روی یک کامپیوتر با هم کار می‌کنند - یکی می‌نویسد و دیگری بررسی می‌کند.',
    category: 'تیمی',
  },
  {
    title: 'Refactoring',
    slug: 'refactoring',
    description: 'بهبود ساختار داخلی کد بدون تغییر رفتار خارجی آن.',
    category: 'کد',
  },
  {
    title: 'Dependency Injection',
    slug: 'dependency-injection',
    description: 'تزریق وابستگی‌ها به جای ساخت آنها در داخل کلاس.',
    category: 'کد',
  },
  {
    title: 'Simple Design',
    slug: 'simple-design',
    description: 'طراحی ساده که تست‌ها را پاس می‌کند، واضح است، DRY است و حداقلی است.',
    category: 'کد',
  },
  {
    title: 'Naming Things',
    slug: 'naming-things',
    description: 'انتخاب نام‌های معنادار برای متغیرها، توابع و کلاس‌ها - یکی از سخت‌ترین کارها!',
    category: 'کد',
  },
  {
    title: 'Code Readability',
    slug: 'code-readability',
    description: 'نوشتن کدی که به راحتی قابل خواندن و درک است برای دیگران.',
    category: 'کد',
  },
  {
    title: 'Vertical Slices',
    slug: 'vertical-slices',
    description: 'توسعه عمودی فیچرها به جای لایه‌ای افقی - از UI تا دیتابیس.',
    category: 'معماری',
  },
  {
    title: 'Collective Code Ownership',
    slug: 'collective-code-ownership',
    description: 'همه اعضای تیم مالک کل کدبیس هستند و می‌توانند هر بخشی را تغییر دهند.',
    category: 'تیمی',
  },
  {
    title: 'Defensive Programming',
    slug: 'defensive-programming',
    description: 'نوشتن کد با فرض اینکه ورودی‌ها ممکن است نامعتبر باشند.',
    category: 'کد',
  },
  {
    title: 'Parse Don\'t Validate',
    slug: 'parse-dont-validate',
    description: 'به جای اعتبارسنجی داده‌ها، آنها را به نوع‌های قوی‌تر تبدیل کنید.',
    category: 'کد',
  },
  {
    title: 'Descriptive Error Messages',
    slug: 'descriptive-error-messages',
    description: 'پیام‌های خطای واضح که به کاربر کمک می‌کند مشکل را درک کند.',
    category: 'کد',
  },
  {
    title: 'Observability',
    slug: 'observability',
    description: 'توانایی درک وضعیت سیستم از طریق logs، metrics و traces.',
    category: 'DevOps',
  },
  {
    title: 'Pain Driven Development',
    slug: 'pain-driven-development',
    description: 'تغییرات را وقتی انجام دهید که درد واقعی احساس می‌کنید، نه پیشگیرانه.',
    category: 'روش',
  },
  {
    title: 'Timeboxing',
    slug: 'timeboxing',
    description: 'تخصیص زمان ثابت برای یک کار و توقف پس از پایان زمان.',
    category: 'روش',
  },
  {
    title: 'Rubber Duck Debugging',
    slug: 'rubber-duck-debugging',
    description: 'توضیح دادن مشکل به یک شی (یا شخص) برای کشف راه‌حل.',
    category: 'روش',
  },
  {
    title: 'Dogfooding',
    slug: 'dogfooding',
    description: 'استفاده از محصول خودتان برای درک تجربه کاربر.',
    category: 'روش',
  },
  {
    title: '50/72 Rule',
    slug: '50-72-rule',
    description: 'عنوان commit حداکثر 50 کاراکتر و بدنه حداکثر 72 کاراکتر در هر خط.',
    category: 'Git',
  },
  {
    title: 'Know Where You Are Going',
    slug: 'know-where-you-are-going',
    description: 'قبل از شروع کدنویسی، بدانید هدف نهایی چیست.',
    category: 'روش',
  },
  {
    title: 'Read the Manual',
    slug: 'read-the-manual',
    description: 'قبل از پرسیدن سوال، مستندات را مطالعه کنید.',
    category: 'روش',
  },
  {
    title: 'Shipping Is A Feature',
    slug: 'shipping-is-a-feature',
    description: 'تحویل نرم‌افزار به کاربر مهم‌ترین فیچر است.',
    category: 'روش',
  },
  {
    title: 'Update the Plan',
    slug: 'update-the-plan',
    description: 'وقتی شرایط تغییر می‌کند، برنامه را به‌روز کنید.',
    category: 'روش',
  },
  {
    title: 'Whole Team',
    slug: 'whole-team',
    description: 'تمام مهارت‌های لازم باید در تیم وجود داشته باشد.',
    category: 'تیمی',
  },
  {
    title: 'Common Architectural Vision',
    slug: 'common-architectural-vision',
    description: 'همه اعضای تیم باید دید مشترکی از معماری داشته باشند.',
    category: 'معماری',
  },
  {
    title: 'Single Point of Enforcement',
    slug: 'single-point-of-enforcement',
    description: 'هر قانون کسب‌وکار باید فقط در یک نقطه اجرا شود.',
    category: 'معماری',
  },
  {
    title: 'Authentication',
    slug: 'authentication',
    description: 'تأیید هویت کاربر - چه کسی هستید؟',
    category: 'امنیت',
  },
  {
    title: 'Authorization',
    slug: 'authorization',
    description: 'تعیین مجوزهای کاربر - چه کاری می‌توانید انجام دهید؟',
    category: 'امنیت',
  },
]
