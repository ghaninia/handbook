export default function AboutPage() {
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-8">درباره DevIQ</h1>

      <div className="space-y-8">
        <section className="card">
          <h2 className="text-2xl font-bold mb-4">هدف ما</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            DevIQ یک مرجع آموزشی جامع است که با هدف کمک به توسعه‌دهندگان نرم‌افزار
            برای یادگیری و تسلط بر مفاهیم پیشرفته توسعه نرم‌افزار طراحی شده است.
            ما بر آن هستیم که دانش را به صورت ساده، واضح و کاربردی در اختیار شما قرار دهیم.
          </p>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold mb-4">محتوای سایت</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contentSections.map((section) => (
              <div key={section.title} className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-3xl ml-4">{section.icon}</span>
                <div>
                  <h3 className="font-bold mb-2">{section.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card bg-gradient-to-l from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <h2 className="text-2xl font-bold mb-4">ویژگی‌های این نسخه</h2>
          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-center">
                <span className="text-green-500 ml-3">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold mb-4">تماس با ما</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
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
    </div>
  )
}

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
