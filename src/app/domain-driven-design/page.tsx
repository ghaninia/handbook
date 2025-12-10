export default function DomainDrivenDesignPage() {
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-6">طراحی مبتنی بر دامنه (DDD)</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
        رویکردی برای توسعه نرم‌افزار پیچیده با تمرکز بر دامنه اصلی کسب‌وکار و منطق آن.
      </p>

      <div className="space-y-8">
        <section className="card">
          <h2 className="text-2xl font-bold mb-4">مفاهیم اصلی</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {concepts.map((concept) => (
              <div key={concept.title} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold text-lg mb-2">{concept.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {concept.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="card bg-blue-50 dark:bg-blue-900/20">
          <h2 className="text-2xl font-bold mb-4">الگوهای تاکتیکی</h2>
          <ul className="space-y-3">
            {tacticalPatterns.map((pattern) => (
              <li key={pattern.title} className="flex items-start">
                <span className="text-2xl ml-3">{pattern.icon}</span>
                <div>
                  <h3 className="font-bold">{pattern.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {pattern.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

const concepts = [
  {
    title: 'Ubiquitous Language',
    description: 'زبان مشترک بین توسعه‌دهندگان و متخصصان کسب‌وکار',
  },
  {
    title: 'Bounded Context',
    description: 'مرزهای واضح برای مدل‌های مختلف دامنه',
  },
  {
    title: 'Aggregate',
    description: 'خوشه‌ای از اشیاء دامنه که به عنوان یک واحد رفتار می‌کنند',
  },
  {
    title: 'Entity',
    description: 'اشیایی با هویت منحصر به فرد که در طول زمان تغییر می‌کنند',
  },
  {
    title: 'Value Object',
    description: 'اشیایی بدون هویت که با مقادیرشان تعریف می‌شوند',
  },
  {
    title: 'Domain Event',
    description: 'رویدادهایی که در دامنه اتفاق می‌افتند',
  },
]

const tacticalPatterns = [
  {
    title: 'Repository',
    icon: '📦',
    description: 'دسترسی به Aggregate ها را مدیریت می‌کند',
  },
  {
    title: 'Factory',
    icon: '🏭',
    description: 'ساخت اشیاء پیچیده دامنه را کپسوله می‌کند',
  },
  {
    title: 'Domain Service',
    icon: '⚡',
    description: 'عملیاتی که به یک Entity خاص تعلق ندارند',
  },
  {
    title: 'Specification',
    icon: '📋',
    description: 'قوانین کسب‌وکار را به صورت قابل ترکیب تعریف می‌کند',
  },
]
