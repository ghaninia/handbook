'use client'

const contentSections = [
  {
    title: 'الگوهای طراحی',
    icon: '🎨',
    description: 'راه‌حل‌های اثبات شده برای مشکلات رایج',
  },
  {
    title: 'اصول',
    icon: '📐',
    description: 'اصول بنیادی برای کد تمیز و قابل نگهداری',
  },
  {
    title: 'روش‌های توسعه',
    icon: '⚙️',
    description: 'بهترین شیوه‌های توسعه نرم‌افزار',
  },
  {
    title: 'ضدالگوها',
    icon: '⚠️',
    description: 'اشتباهات رایج که باید از آن‌ها اجتناب کرد',
  },
  {
    title: 'معماری',
    icon: '🏛️',
    description: 'الگوها و اصول معماری نرم‌افزار',
  },
  {
    title: 'تست',
    icon: '🧪',
    description: 'استراتژی‌ها و روش‌های تست',
  },
]

const features = [
  'رابط کاربری کاملاً فارسی و راست‌چین',
  'تم روشن و تاریک با قابلیت تغییر',
  'انیمیشن‌های روان در تغییر صفحات',
  'طراحی ریسپانسیو برای موبایل و دسکتاپ',
  'Server-Side Rendering برای عملکرد بهتر',
  'محتوای جامع و کاربردی به زبان فارسی',
]

export default function AboutPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3">درباره DevIQ</h1>
      </div>

      {/* Our Goal */}
      <section className="col-span-12 lg:col-span-6 card">
        <h2 className="text-xl font-bold mb-3">هدف ما</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          DevIQ یک مرجع آموزشی جامع است که با هدف کمک به توسعه‌دهندگان نرم‌افزار
          برای یادگیری و تسلط بر مفاهیم پیشرفته توسعه نرم‌افزار طراحی شده است.
        </p>
      </section>

      {/* Features */}
      <section className="col-span-12 lg:col-span-6 card bg-gradient-to-l from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20">
        <h2 className="text-xl font-bold mb-3">ویژگی‌های این نسخه</h2>
        <ul className="grid grid-cols-1 gap-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center">
              <span className="text-green-500 ml-2">✓</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Site Content */}
      <section className="col-span-12 card">
        <h2 className="text-xl font-bold mb-4">محتوای سایت</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {contentSections.map((section) => (
            <div key={section.title} className="flex items-start p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-2xl ml-2">{section.icon}</span>
              <div>
                <h3 className="font-bold text-sm mb-1">{section.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="col-span-12 card">
        <h2 className="text-xl font-bold mb-3">تماس با ما</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
          برای دریافت دوره‌های آموزشی تخصصی و مشاوره در زمینه معماری و طراحی نرم‌افزار،
          می‌توانید با NimblePros تماس بگیرید.
        </p>
        <a
          href="https://nimblepros.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
        >
          بازدید از NimblePros
        </a>
      </section>
    </div>
  )
}
