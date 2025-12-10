'use client'

import { motion } from 'framer-motion'

export default function PracticesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-4"
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        روش‌های توسعه
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        بهترین روش‌ها و تکنیک‌ها برای توسعه نرم‌افزار با کیفیت
      </p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          توسعه و تست
        </h2>
        <div className="space-y-3">
          {devPractices.map((p) => (
            <div key={p.name} className="card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{p.name}</h3>
                <span className="tag tag-blue">{p.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          کد و معماری
        </h2>
        <div className="space-y-3">
          {codePractices.map((p) => (
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
          فرآیند و تیم
        </h2>
        <div className="space-y-3">
          {teamPractices.map((p) => (
            <div key={p.name} className="card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{p.name}</h3>
                <span className="tag tag-purple">{p.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{p.description}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

const devPractices = [
  { name: 'توسعه تست‌محور', nameEn: 'TDD', description: 'نوشتن تست‌ها قبل از کد تولیدی با چرخه قرمز-سبز-بازآرایی.' },
  { name: 'توسعه رفتارمحور', nameEn: 'BDD', description: 'توسعه بر اساس رفتار مورد انتظار سیستم با زبان مشترک.' },
  { name: 'یکپارچه‌سازی مداوم', nameEn: 'CI', description: 'ادغام مکرر کد به مخزن مشترک با تست خودکار.' },
  { name: 'تحویل مداوم', nameEn: 'CD', description: 'آماده‌سازی خودکار کد برای انتشار به تولید.' },
  { name: 'برنامه‌نویسی جفتی', nameEn: 'Pair Programming', description: 'دو برنامه‌نویس روی یک کد کار می‌کنند.' },
]

const codePractices = [
  { name: 'کد تمیز', nameEn: 'Clean Code', description: 'نوشتن کدی که خوانا، ساده و قابل نگهداری باشد.' },
  { name: 'بازآرایی', nameEn: 'Refactoring', description: 'بهبود ساختار کد بدون تغییر رفتار.' },
  { name: 'بازبینی کد', nameEn: 'Code Review', description: 'بررسی کد توسط همکاران قبل از ادغام.' },
  { name: 'مستندسازی', nameEn: 'Documentation', description: 'نوشتن مستندات مناسب برای کد و API.' },
  { name: 'کنترل نسخه', nameEn: 'Version Control', description: 'استفاده از Git برای مدیریت تغییرات کد.' },
]

const teamPractices = [
  { name: 'اسکرام', nameEn: 'Scrum', description: 'چارچوب چابک با اسپرینت‌ها و جلسات روزانه.' },
  { name: 'کانبان', nameEn: 'Kanban', description: 'مدیریت جریان کار با تابلوی بصری.' },
  { name: 'استندآپ روزانه', nameEn: 'Daily Standup', description: 'جلسات کوتاه روزانه برای هماهنگی تیم.' },
  { name: 'بازنگری', nameEn: 'Retrospective', description: 'بررسی و بهبود فرآیند در پایان هر تکرار.' },
  { name: 'مالکیت جمعی کد', nameEn: 'Collective Code Ownership', description: 'همه اعضای تیم مسئول کل کد هستند.' },
]
