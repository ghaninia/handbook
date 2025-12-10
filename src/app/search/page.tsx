'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function SearchPage() {
  const [query, setQuery] = useState('')

  const filteredItems = query.length > 1
    ? allItems.filter(
        (item) =>
          item.title.includes(query) ||
          item.titleEn.toLowerCase().includes(query.toLowerCase()) ||
          item.description.includes(query)
      )
    : []

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-4"
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        جستجو
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        جستجو در تمام مفاهیم و الگوها
      </p>

      <div className="mb-8">
        <input
          type="text"
          placeholder="عبارت مورد نظر را وارد کنید..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          autoFocus
        />
      </div>

      {query.length > 1 && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {filteredItems.length} نتیجه
        </p>
      )}

      <div className="space-y-3">
        {filteredItems.map((item) => (
          <Link
            key={`${item.category}-${item.title}`}
            href={item.href}
            className="card block hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-900 dark:text-gray-100">{item.title}</h3>
              <div className="flex items-center gap-2">
                <span className="tag tag-blue">{item.titleEn}</span>
                <span className="text-xs text-gray-400">{item.category}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
          </Link>
        ))}
        {query.length > 1 && filteredItems.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">
            نتیجه‌ای یافت نشد.
          </p>
        )}
        {query.length <= 1 && (
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">
            حداقل ۲ کاراکتر وارد کنید.
          </p>
        )}
      </div>
    </motion.div>
  )
}

const allItems = [
  // Design Patterns
  { title: 'تک‌نمونه', titleEn: 'Singleton', category: 'الگوهای طراحی', description: 'اطمینان از وجود تنها یک نمونه از کلاس.', href: '/design-patterns' },
  { title: 'کارخانه', titleEn: 'Factory', category: 'الگوهای طراحی', description: 'ایجاد اشیاء بدون مشخص کردن کلاس دقیق.', href: '/design-patterns' },
  { title: 'مخزن', titleEn: 'Repository', category: 'الگوهای طراحی', description: 'میانجیگری بین دامنه و لایه داده.', href: '/design-patterns' },
  { title: 'ناظر', titleEn: 'Observer', category: 'الگوهای طراحی', description: 'اطلاع‌رسانی خودکار تغییرات.', href: '/design-patterns' },
  { title: 'استراتژی', titleEn: 'Strategy', category: 'الگوهای طراحی', description: 'خانواده‌ای از الگوریتم‌های قابل تعویض.', href: '/design-patterns' },
  // Principles
  { title: 'مسئولیت واحد', titleEn: 'SRP', category: 'اصول', description: 'هر کلاس یک دلیل برای تغییر.', href: '/principles' },
  { title: 'باز-بسته', titleEn: 'OCP', category: 'اصول', description: 'باز برای توسعه، بسته برای تغییر.', href: '/principles' },
  { title: 'خودت را تکرار نکن', titleEn: 'DRY', category: 'اصول', description: 'هر دانش یک نمایش واحد.', href: '/principles' },
  { title: 'ساده نگه دار', titleEn: 'KISS', category: 'اصول', description: 'سادگی بهترین است.', href: '/principles' },
  // Practices
  { title: 'توسعه تست‌محور', titleEn: 'TDD', category: 'روش‌ها', description: 'تست قبل از کد.', href: '/practices' },
  { title: 'کد تمیز', titleEn: 'Clean Code', category: 'روش‌ها', description: 'نوشتن کد خوانا و قابل نگهداری.', href: '/practices' },
  { title: 'بازآرایی', titleEn: 'Refactoring', category: 'روش‌ها', description: 'بهبود ساختار بدون تغییر رفتار.', href: '/practices' },
  // DDD
  { title: 'زمینه محدود', titleEn: 'Bounded Context', category: 'DDD', description: 'مرز منطقی مدل دامنه.', href: '/domain-driven-design' },
  { title: 'تجمیع', titleEn: 'Aggregate', category: 'DDD', description: 'گروهی از موجودیت‌ها با یک ریشه.', href: '/domain-driven-design' },
  { title: 'موجودیت', titleEn: 'Entity', category: 'DDD', description: 'شیء با هویت مشخص.', href: '/domain-driven-design' },
  // Architecture
  { title: 'میکروسرویس‌ها', titleEn: 'Microservices', category: 'معماری', description: 'سرویس‌های کوچک و مستقل.', href: '/architecture' },
  { title: 'CQRS', titleEn: 'CQRS', category: 'معماری', description: 'جداسازی خواندن و نوشتن.', href: '/architecture' },
  { title: 'منبع‌یابی رویداد', titleEn: 'Event Sourcing', category: 'معماری', description: 'ذخیره به عنوان رویدادها.', href: '/architecture' },
]
