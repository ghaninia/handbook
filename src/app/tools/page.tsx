export default function ToolsPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-3">ابزارها</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          ابزارها و فناوری‌های مفید برای توسعه‌دهندگان نرم‌افزار.
        </p>
      </div>

      {/* Tool Categories */}
      {toolCategories.map((category) => (
        <section key={category.title} className="col-span-12">
          <h2 className="text-xl font-bold mb-4">{category.title}</h2>
          <div className="grid grid-cols-12 gap-4">
            {category.tools.map((tool) => (
              <div key={tool.name} className="col-span-12 sm:col-span-6 lg:col-span-4 card hover:shadow-xl transition-all">
                <div className="flex items-center mb-2">
                  <span className="text-2xl ml-2">{tool.icon}</span>
                  <h3 className="font-bold">{tool.name}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

const toolCategories = [
  {
    title: 'کنترل نسخه',
    tools: [
      { name: 'Git', icon: '🔀', description: 'سیستم کنترل نسخه توزیع‌شده' },
      { name: 'GitHub', icon: '🐙', description: 'پلتفرم میزبانی کد و همکاری' },
      { name: 'GitLab', icon: '🦊', description: 'DevOps و CI/CD یکپارچه' },
    ],
  },
  {
    title: 'محیط توسعه',
    tools: [
      { name: 'VS Code', icon: '💻', description: 'ویرایشگر کد قدرتمند و سبک' },
      { name: 'Visual Studio', icon: '🔷', description: 'IDE کامل برای .NET' },
      { name: 'IntelliJ IDEA', icon: '🧠', description: 'IDE برای Java و Kotlin' },
    ],
  },
  {
    title: 'تست',
    tools: [
      { name: 'Jest', icon: '🃏', description: 'فریم‌ورک تست JavaScript' },
      { name: 'xUnit', icon: '✅', description: 'فریم‌ورک تست .NET' },
      { name: 'Selenium', icon: '🌐', description: 'تست خودکار مرورگر' },
    ],
  },
  {
    title: 'CI/CD',
    tools: [
      { name: 'Jenkins', icon: '🔧', description: 'سرور اتوماسیون متن‌باز' },
      { name: 'GitHub Actions', icon: '⚙️', description: 'CI/CD داخل GitHub' },
      { name: 'Azure DevOps', icon: '☁️', description: 'پلتفرم DevOps مایکروسافت' },
    ],
  },
]
