import Link from 'next/link'

export default function Home() {
  return (
    <div className="container-custom py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-l from-blue-600 to-purple-600 bg-clip-text text-transparent">
          معرفی
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          DevIQ یک سایت مرجع طراحی شده برای کمک به شما در یادگیری موضوعات سطح بالای توسعه نرم‌افزار
          مانند طراحی مبتنی بر دامنه، الگوهای طراحی و ضدالگوها است.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">بخش‌های اصلی</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link
              key={section.slug}
              href={section.slug}
              className="card hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl ml-4">{section.icon}</span>
                <h3 className="text-xl font-bold">{section.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {section.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="card bg-gradient-to-l from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-center">
        <h3 className="text-2xl font-bold mb-4">به دنبال دوره‌های آموزشی هستید؟</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          برای گزینه‌های آموزشی با NimblePros تماس بگیرید
        </p>
        <a
          href="https://nimblepros.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
        >
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
    icon: '🎨',
    description: 'راه‌حل‌های اثبات شده برای مشکلات رایج در طراحی نرم‌افزار',
  },
  {
    title: 'اصول',
    slug: '/principles',
    icon: '📐',
    description: 'اصول بنیادی برای نوشتن کد تمیز و قابل نگهداری',
  },
  {
    title: 'روش‌ها',
    slug: '/practices',
    icon: '⚙️',
    description: 'بهترین شیوه‌ها و روش‌های توسعه نرم‌افزار',
  },
  {
    title: 'ارزش‌ها',
    slug: '/values',
    icon: '💎',
    description: 'ارزش‌های اصلی توسعه نرم‌افزار چابک و حرفه‌ای',
  },
  {
    title: 'ضدالگوها',
    slug: '/antipatterns',
    icon: '⚠️',
    description: 'الگوهای رایج که باید از آنها اجتناب کرد',
  },
  {
    title: 'طراحی مبتنی بر دامنه',
    slug: '/domain-driven-design',
    icon: '🏗️',
    description: 'رویکردهای DDD برای مدل‌سازی سیستم‌های پیچیده',
  },
  {
    title: 'ابزارها',
    slug: '/tools',
    icon: '🔧',
    description: 'ابزارها و فناوری‌های مفید برای توسعه‌دهندگان',
  },
  {
    title: 'اصطلاحات',
    slug: '/terms',
    icon: '📖',
    description: 'واژه‌نامه اصطلاحات توسعه نرم‌افزار',
  },
  {
    title: 'تست',
    slug: '/testing',
    icon: '🧪',
    description: 'استراتژی‌ها و روش‌های تست نرم‌افزار',
  },
  {
    title: 'قوانین توسعه نرم‌افزار',
    slug: '/laws',
    icon: '⚖️',
    description: 'قوانین و اصول شناخته شده در صنعت نرم‌افزار',
  },
  {
    title: 'معماری',
    slug: '/architecture',
    icon: '🏛️',
    description: 'الگوها و اصول معماری نرم‌افزار',
  },
]
