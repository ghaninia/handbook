import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Hero Section - Full Width */}
      <section className="col-span-12 text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 text-gray-900 text-3xl"
          style={{ background: 'linear-gradient(135deg, #ffc107 0%, #ff9800 100%)', boxShadow: '0 10px 40px rgba(255, 193, 7, 0.4)' }}>
          <i className="ri-code-s-slash-line"></i>
        </div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-l from-amber-500 to-yellow-500 bg-clip-text text-transparent">
          معرفی
        </h1>
        <p className="text-lg text-gray-600 dark:text-white/80 max-w-2xl mx-auto leading-relaxed">
          DevIQ یک سایت مرجع طراحی شده برای کمک به شما در یادگیری موضوعات سطح بالای توسعه نرم‌افزار
          مانند طراحی مبتنی بر دامنه، الگوهای طراحی و ضدالگوها است.
        </p>
      </section>

      {/* Section Title */}
      <div className="col-span-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-2">بخش‌های اصلی</h2>
      </div>

      {/* Section Cards - Grid */}
      {sections.map((section) => (
        <Link
          key={section.slug}
          href={section.slug}
          className="col-span-12 sm:col-span-6 lg:col-span-4 card group"
        >
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg transition-transform duration-300 group-hover:scale-110 ml-3"
              style={{ background: section.gradient }}>
              <i className={section.icon}></i>
            </div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">{section.title}</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {section.description}
          </p>
        </Link>
      ))}

      {/* CTA Section - Full Width */}
      <section className="col-span-12 card text-center py-8 mt-4">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-3 text-gray-900 text-2xl"
          style={{ background: 'linear-gradient(135deg, #ffc107 0%, #ff9800 100%)' }}>
          <i className="ri-graduation-cap-line"></i>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">به دنبال دوره‌های آموزشی هستید؟</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          برای گزینه‌های آموزشی با NimblePros تماس بگیرید
        </p>
        <a
          href="https://nimblepros.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center"
        >
          <i className="ri-external-link-line ml-2"></i>
          اطلاعات بیشتر
        </a>
      </section>
    </div>
  )
}

const sections = [
  {
    title: 'الگوهای طراحی',
    slug: '/design-patterns',
    icon: 'ri-palette-line',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    description: 'راه‌حل‌های اثبات شده برای مشکلات رایج در طراحی نرم‌افزار',
  },
  {
    title: 'اصول',
    slug: '/principles',
    icon: 'ri-compass-3-line',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    description: 'اصول بنیادی برای نوشتن کد تمیز و قابل نگهداری',
  },
  {
    title: 'روش‌ها',
    slug: '/practices',
    icon: 'ri-settings-4-line',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    description: 'بهترین شیوه‌ها و روش‌های توسعه نرم‌افزار',
  },
  {
    title: 'ارزش‌ها',
    slug: '/values',
    icon: 'ri-diamond-line',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    description: 'ارزش‌های اصلی توسعه نرم‌افزار چابک و حرفه‌ای',
  },
  {
    title: 'ضدالگوها',
    slug: '/antipatterns',
    icon: 'ri-alert-line',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    description: 'الگوهای رایج که باید از آنها اجتناب کرد',
  },
  {
    title: 'طراحی مبتنی بر دامنه',
    slug: '/domain-driven-design',
    icon: 'ri-building-2-line',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    description: 'رویکردهای DDD برای مدل‌سازی سیستم‌های پیچیده',
  },
  {
    title: 'ابزارها',
    slug: '/tools',
    icon: 'ri-tools-line',
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    description: 'ابزارها و فناوری‌های مفید برای توسعه‌دهندگان',
  },
  {
    title: 'اصطلاحات',
    slug: '/terms',
    icon: 'ri-book-open-line',
    gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    description: 'واژه‌نامه اصطلاحات توسعه نرم‌افزار',
  },
  {
    title: 'تست',
    slug: '/testing',
    icon: 'ri-flask-line',
    gradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    description: 'استراتژی‌ها و روش‌های تست نرم‌افزار',
  },
  {
    title: 'قوانین توسعه نرم‌افزار',
    slug: '/laws',
    icon: 'ri-scales-3-line',
    gradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    description: 'قوانین و اصول شناخته شده در صنعت نرم‌افزار',
  },
  {
    title: 'معماری',
    slug: '/architecture',
    icon: 'ri-building-line',
    gradient: 'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)',
    description: 'الگوها و اصول معماری نرم‌افزار',
  },
]
