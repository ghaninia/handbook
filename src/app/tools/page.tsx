import Link from 'next/link'

export default function ToolsPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3">ابزارهای توسعه نرم‌افزار</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          ابزارها و فناوری‌های ضروری که هر توسعه‌دهنده نرم‌افزار باید با آنها آشنا باشد.
          این ابزارها بهره‌وری و کیفیت کار شما را بهبود می‌بخشند.
        </p>
      </div>

      {/* Core Tools from DevIQ */}
      <section className="col-span-12">
        <h2 className="text-xl font-bold mb-4">ابزارهای اصلی</h2>
        <div className="grid grid-cols-12 gap-4">
          {coreTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="col-span-12 sm:col-span-6 card hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center mb-3">
                <span className="text-3xl ml-3">{tool.icon}</span>
                <h3 className="text-lg font-bold">{tool.name}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {tool.description}
              </p>
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                {tool.category}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Tool Categories */}
      {toolCategories.map((category) => (
        <section key={category.title} className="col-span-12 lg:col-span-6">
          <div className="card h-full">
            <h2 className="text-lg font-bold mb-4 flex items-center">
              <span className="text-2xl ml-2">{category.icon}</span>
              {category.title}
            </h2>
            <div className="space-y-3">
              {category.tools.map((tool) => (
                <div key={tool.name} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center mb-1">
                    <span className="text-xl ml-2">{tool.icon}</span>
                    <h3 className="font-bold text-sm">{tool.name}</h3>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

const coreTools = [
  {
    name: 'Version Control',
    slug: 'version-control',
    icon: '🔀',
    description: 'سیستم‌های کنترل نسخه برای مدیریت تغییرات کد، همکاری تیمی و نگهداری تاریخچه. Git محبوب‌ترین سیستم کنترل نسخه است.',
    category: 'ضروری',
  },
  {
    name: 'Build Server',
    slug: 'build-server',
    icon: '🏗️',
    description: 'سرور ساخت برای کامپایل خودکار کد، اجرای تست‌ها و تولید artifact های قابل deploy.',
    category: 'ضروری',
  },
]

const toolCategories = [
  {
    title: 'کنترل نسخه (Version Control)',
    icon: '🔀',
    tools: [
      { name: 'Git', icon: '📦', description: 'سیستم کنترل نسخه توزیع‌شده و محبوب‌ترین VCS' },
      { name: 'GitHub', icon: '🐙', description: 'پلتفرم میزبانی کد، همکاری و CI/CD' },
      { name: 'GitLab', icon: '🦊', description: 'DevOps platform با CI/CD یکپارچه' },
      { name: 'Bitbucket', icon: '🪣', description: 'میزبانی Git با یکپارچگی Atlassian' },
    ],
  },
  {
    title: 'محیط توسعه (IDE)',
    icon: '💻',
    tools: [
      { name: 'VS Code', icon: '🔵', description: 'ویرایشگر کد سبک و قدرتمند با هزاران افزونه' },
      { name: 'Visual Studio', icon: '🟣', description: 'IDE کامل برای .NET و C++' },
      { name: 'IntelliJ IDEA', icon: '🧠', description: 'IDE قدرتمند برای Java و Kotlin' },
      { name: 'Rider', icon: '🐴', description: 'IDE چندپلتفرمی برای .NET' },
    ],
  },
  {
    title: 'CI/CD و اتوماسیون',
    icon: '⚙️',
    tools: [
      { name: 'GitHub Actions', icon: '🎬', description: 'CI/CD یکپارچه با GitHub' },
      { name: 'Azure DevOps', icon: '☁️', description: 'پلتفرم کامل DevOps مایکروسافت' },
      { name: 'Jenkins', icon: '🔧', description: 'سرور اتوماسیون متن‌باز و قابل توسعه' },
      { name: 'GitLab CI', icon: '🔄', description: 'CI/CD یکپارچه با GitLab' },
    ],
  },
  {
    title: 'تست',
    icon: '🧪',
    tools: [
      { name: 'Jest', icon: '🃏', description: 'فریم‌ورک تست JavaScript با zero-config' },
      { name: 'xUnit/NUnit', icon: '✅', description: 'فریم‌ورک‌های تست برای .NET' },
      { name: 'Playwright', icon: '🎭', description: 'تست E2E چندمرورگری مدرن' },
      { name: 'Cypress', icon: '🌲', description: 'تست E2E با تجربه توسعه‌دهنده عالی' },
    ],
  },
  {
    title: 'کانتینر و ارکستریشن',
    icon: '🐳',
    tools: [
      { name: 'Docker', icon: '🐋', description: 'کانتینرسازی برنامه‌ها' },
      { name: 'Kubernetes', icon: '⚓', description: 'ارکستریشن کانتینرها در مقیاس' },
      { name: 'Docker Compose', icon: '📝', description: 'تعریف و اجرای multi-container apps' },
    ],
  },
  {
    title: 'مانیتورینگ و Observability',
    icon: '📊',
    tools: [
      { name: 'Prometheus', icon: '🔥', description: 'سیستم مانیتورینگ و alerting' },
      { name: 'Grafana', icon: '📈', description: 'داشبورد و ویژوالایزیشن متریک‌ها' },
      { name: 'Jaeger', icon: '🔍', description: 'Distributed tracing' },
      { name: 'ELK Stack', icon: '📚', description: 'لاگ‌گیری و جستجوی متمرکز' },
    ],
  },
]
