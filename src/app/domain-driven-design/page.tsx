import Link from 'next/link'

export default function DomainDrivenDesignPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3">طراحی مبتنی بر دامنه (DDD)</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          رویکردی برای توسعه نرم‌افزار پیچیده با تمرکز بر دامنه اصلی کسب‌وکار و منطق آن.
          DDD توسط Eric Evans در کتاب "Domain-Driven Design: Tackling Complexity in the Heart of Software" معرفی شد.
        </p>
      </div>

      {/* Strategic Design Section */}
      <section className="col-span-12 lg:col-span-6 card bg-blue-50 dark:bg-blue-900/20">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="text-2xl ml-2">🎯</span>
          طراحی استراتژیک (Strategic Design)
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          طراحی سطح بالا که بر ساختار کلی سیستم و روابط بین بخش‌های مختلف تمرکز دارد.
        </p>
        <div className="space-y-3">
          {strategicPatterns.map((pattern) => (
            <Link
              key={pattern.slug}
              href={`/domain-driven-design/${pattern.slug}`}
              className="block p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-sm mb-1">{pattern.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {pattern.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Tactical Design Section */}
      <section className="col-span-12 lg:col-span-6 card bg-amber-50 dark:bg-amber-900/20">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="text-2xl ml-2">⚔️</span>
          طراحی تاکتیکی (Tactical Design)
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          الگوهای سطح پایین برای پیاده‌سازی مدل دامنه در کد.
        </p>
        <div className="space-y-3">
          {tacticalPatterns.map((pattern) => (
            <Link
              key={pattern.slug}
              href={`/domain-driven-design/${pattern.slug}`}
              className="block p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-sm mb-1">{pattern.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {pattern.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Key Concepts */}
      <section className="col-span-12">
        <h2 className="text-xl font-bold mb-4">مفاهیم کلیدی DDD</h2>
        <div className="grid grid-cols-12 gap-4">
          {concepts.map((concept) => (
            <Link
              key={concept.slug}
              href={`/domain-driven-design/${concept.slug}`}
              className="col-span-12 sm:col-span-6 xl:col-span-4 p-4 card hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <h3 className="font-bold mb-2">{concept.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {concept.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Discovery Techniques */}
      <section className="col-span-12 card bg-purple-50 dark:bg-purple-900/20">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="text-2xl ml-2">🔍</span>
          تکنیک‌های کشف دامنه
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {discoveryTechniques.map((technique) => (
            <Link
              key={technique.slug}
              href={`/domain-driven-design/${technique.slug}`}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold mb-1">{technique.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {technique.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

const strategicPatterns = [
  {
    title: 'Bounded Context',
    slug: 'bounded-context',
    description: 'مرز واضح برای یک مدل دامنه خاص که در آن مدل معتبر و یکپارچه است.',
  },
  {
    title: 'Context Mapping',
    slug: 'context-mapping',
    description: 'نقشه‌برداری روابط بین Bounded Context های مختلف.',
  },
  {
    title: 'Subdomain',
    slug: 'subdomain',
    description: 'بخشی از دامنه کلی کسب‌وکار که می‌تواند Core، Supporting یا Generic باشد.',
  },
  {
    title: 'Shared Kernel',
    slug: 'shared-kernel',
    description: 'بخش مشترک از مدل که بین چند Bounded Context به اشتراک گذاشته می‌شود.',
  },
  {
    title: 'Anti-Corruption Layer',
    slug: 'anti-corruption-layer',
    description: 'لایه‌ای برای محافظت از مدل دامنه در برابر مدل‌های خارجی نامناسب.',
  },
]

const tacticalPatterns = [
  {
    title: 'Entity',
    slug: 'entity',
    description: 'شیء با هویت منحصر به فرد که در طول زمان تغییر می‌کند.',
  },
  {
    title: 'Value Object',
    slug: 'value-object',
    description: 'شیء غیرقابل تغییر که با مقادیرش تعریف می‌شود نه هویت.',
  },
  {
    title: 'Aggregate',
    slug: 'aggregate',
    description: 'خوشه‌ای از Entity ها و Value Object ها که یک واحد consistency را تشکیل می‌دهند.',
  },
  {
    title: 'Domain Service',
    slug: 'domain-service',
    description: 'عملیات دامنه که طبیعتاً به یک Entity یا Value Object خاص تعلق ندارد.',
  },
  {
    title: 'Repository',
    slug: 'repository',
    description: 'انتزاعی برای دسترسی به Aggregate ها به عنوان مجموعه‌ای در حافظه.',
  },
]

const concepts = [
  {
    title: 'Ubiquitous Language',
    slug: 'ubiquitous-language',
    description: 'زبان مشترک و یکپارچه بین توسعه‌دهندگان و متخصصان دامنه که در همه جا استفاده می‌شود.',
  },
  {
    title: 'Domain',
    slug: 'domain',
    description: 'حوزه دانش و فعالیت که نرم‌افزار برای آن ساخته می‌شود.',
  },
  {
    title: 'Domain Model',
    slug: 'domain-model',
    description: 'انتزاعی از دامنه که جنبه‌های مرتبط با مسئله را در خود جای می‌دهد.',
  },
  {
    title: 'Domain Events',
    slug: 'domain-events',
    description: 'رویدادهایی که اتفاقات مهم در دامنه را نشان می‌دهند.',
  },
  {
    title: 'Anemic Domain Model',
    slug: 'anemic-domain-model',
    description: 'ضدالگو: مدل دامنه‌ای که فقط داده دارد و منطق در جای دیگر است.',
  },
]

const discoveryTechniques = [
  {
    title: 'EventStorming',
    slug: 'eventstorming',
    description: 'کارگاه تعاملی برای کشف فرآیندهای کسب‌وکار با استفاده از sticky notes.',
  },
  {
    title: 'Domain Storytelling',
    slug: 'domain-storytelling',
    description: 'تکنیک داستان‌گویی برای درک بهتر فرآیندهای کسب‌وکار.',
  },
]
