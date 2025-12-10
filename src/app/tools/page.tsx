'use client'

import { motion } from 'framer-motion'

export default function ToolsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-12 px-6 lg:px-12 max-w-4xl"
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        ابزارهای توسعه
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        ابزارهای ضروری برای توسعه‌دهندگان حرفه‌ای
      </p>

      {categories.map((category) => (
        <section key={category.title} className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
            {category.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {category.items.map((item) => (
              <div key={item.name} className="card">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </motion.div>
  )
}

const categories = [
  {
    title: 'کنترل نسخه',
    items: [
      { name: 'Git', description: 'سیستم کنترل نسخه توزیع‌شده.' },
      { name: 'GitHub', description: 'پلتفرم میزبانی کد و همکاری.' },
      { name: 'GitLab', description: 'پلتفرم DevOps کامل.' },
      { name: 'Bitbucket', description: 'میزبانی کد از Atlassian.' },
    ],
  },
  {
    title: 'ویرایشگر و IDE',
    items: [
      { name: 'VS Code', description: 'ویرایشگر محبوب و سبک.' },
      { name: 'JetBrains', description: 'خانواده IDE‌های حرفه‌ای.' },
      { name: 'Vim/Neovim', description: 'ویرایشگر قدرتمند ترمینالی.' },
      { name: 'Cursor', description: 'ویرایشگر مبتنی بر هوش مصنوعی.' },
    ],
  },
  {
    title: 'CI/CD',
    items: [
      { name: 'GitHub Actions', description: 'اتوماسیون مستقیم در GitHub.' },
      { name: 'Jenkins', description: 'سرور اتوماسیون متن‌باز.' },
      { name: 'GitLab CI', description: 'CI/CD یکپارچه با GitLab.' },
      { name: 'CircleCI', description: 'پلتفرم CI/CD ابری.' },
    ],
  },
  {
    title: 'کانتینر و ارکستریشن',
    items: [
      { name: 'Docker', description: 'کانتینرسازی اپلیکیشن.' },
      { name: 'Kubernetes', description: 'ارکستریشن کانتینرها.' },
      { name: 'Docker Compose', description: 'تعریف چند کانتینر.' },
      { name: 'Podman', description: 'جایگزین بدون دیمون Docker.' },
    ],
  },
  {
    title: 'مانیتورینگ',
    items: [
      { name: 'Prometheus', description: 'سیستم مانیتورینگ متریک.' },
      { name: 'Grafana', description: 'داشبورد تصویرسازی.' },
      { name: 'ELK Stack', description: 'تجزیه و تحلیل لاگ.' },
      { name: 'Sentry', description: 'ردیابی خطا در زمان واقعی.' },
    ],
  },
  {
    title: 'تست',
    items: [
      { name: 'Jest', description: 'فریمورک تست JavaScript.' },
      { name: 'Cypress', description: 'تست E2E برای وب.' },
      { name: 'Playwright', description: 'تست مرورگر مدرن.' },
      { name: 'JUnit', description: 'فریمورک تست Java.' },
    ],
  },
]
