'use client'

import { motion } from 'framer-motion'

export default function ArchitecturePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-12 px-6 lg:px-12 max-w-4xl"
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        معماری نرم‌افزار
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        الگوها و سبک‌های معماری برای ساخت سیستم‌های مقیاس‌پذیر
      </p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          سبک‌های معماری
        </h2>
        <div className="space-y-3">
          {styles.map((s) => (
            <div key={s.name} className="card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{s.name}</h3>
                <span className="tag tag-blue">{s.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          الگوهای معماری
        </h2>
        <div className="space-y-3">
          {patterns.map((p) => (
            <div key={p.name} className="card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{p.name}</h3>
                <span className="tag tag-green">{p.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          الگوهای ابری
        </h2>
        <div className="space-y-3">
          {cloudPatterns.map((c) => (
            <div key={c.name} className="card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{c.name}</h3>
                <span className="tag tag-purple">{c.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{c.description}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

const styles = [
  { name: 'میکروسرویس‌ها', nameEn: 'Microservices', description: 'معماری مبتنی بر سرویس‌های کوچک و مستقل.' },
  { name: 'مونولیتیک', nameEn: 'Monolithic', description: 'تمام اجزا در یک واحد استقرار.' },
  { name: 'لایه‌ای', nameEn: 'Layered', description: 'جداسازی کد به لایه‌های افقی.' },
  { name: 'رویدادمحور', nameEn: 'Event-Driven', description: 'ارتباط از طریق رویدادهای ناهمزمان.' },
  { name: 'سرویس‌گرا', nameEn: 'SOA', description: 'سرویس‌های قابل استفاده مجدد.' },
  { name: 'معماری تمیز', nameEn: 'Clean Architecture', description: 'جداسازی نگرانی‌ها با دایره‌های متحدالمرکز.' },
  { name: 'شش‌ضلعی', nameEn: 'Hexagonal', description: 'پورت‌ها و آداپتورها برای جداسازی.' },
]

const patterns = [
  { name: 'CQRS', nameEn: 'CQRS', description: 'جداسازی عملیات خواندن و نوشتن.' },
  { name: 'منبع‌یابی رویداد', nameEn: 'Event Sourcing', description: 'ذخیره وضعیت به عنوان دنباله‌ای از رویدادها.' },
  { name: 'Saga', nameEn: 'Saga Pattern', description: 'مدیریت تراکنش‌های توزیع‌شده.' },
  { name: 'BFF', nameEn: 'Backend for Frontend', description: 'بک‌اند اختصاصی برای هر فرانت‌اند.' },
  { name: 'API Gateway', nameEn: 'API Gateway', description: 'نقطه ورود واحد برای درخواست‌ها.' },
  { name: 'Service Mesh', nameEn: 'Service Mesh', description: 'لایه ارتباطی بین سرویس‌ها.' },
]

const cloudPatterns = [
  { name: 'مدارشکن', nameEn: 'Circuit Breaker', description: 'جلوگیری از شکست آبشاری.' },
  { name: 'بالکهد', nameEn: 'Bulkhead', description: 'ایزوله کردن منابع برای مقاومت.' },
  { name: 'تلاش مجدد', nameEn: 'Retry Pattern', description: 'تلاش مجدد خودکار در صورت شکست.' },
  { name: 'Sidecar', nameEn: 'Sidecar Pattern', description: 'قابلیت‌های کمکی در کانتینر جداگانه.' },
  { name: 'Strangler Fig', nameEn: 'Strangler Fig', description: 'مهاجرت تدریجی از سیستم قدیمی.' },
]
