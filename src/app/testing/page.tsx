'use client'

import { motion } from 'framer-motion'

export default function TestingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-12 px-6 lg:px-12 max-w-4xl"
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        تست نرم‌افزار
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        انواع تست و روش‌های تضمین کیفیت نرم‌افزار
      </p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          انواع تست
        </h2>
        <div className="space-y-3">
          {testTypes.map((t) => (
            <div key={t.name} className="card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{t.name}</h3>
                <span className="tag tag-blue">{t.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          روش‌های تست
        </h2>
        <div className="space-y-3">
          {testMethods.map((m) => (
            <div key={m.name} className="card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{m.name}</h3>
                <span className="tag tag-green">{m.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{m.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          ابزارهای کمکی تست
        </h2>
        <div className="space-y-3">
          {testTools.map((t) => (
            <div key={t.name} className="card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{t.name}</h3>
                <span className="tag tag-purple">{t.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t.description}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

const testTypes = [
  { name: 'تست واحد', nameEn: 'Unit Test', description: 'تست کوچکترین واحد قابل تست در انزوا.' },
  { name: 'تست یکپارچگی', nameEn: 'Integration Test', description: 'تست تعامل بین اجزای مختلف.' },
  { name: 'تست سراسری', nameEn: 'E2E Test', description: 'تست کل سیستم از دید کاربر.' },
  { name: 'تست پذیرش', nameEn: 'Acceptance Test', description: 'تأیید اینکه سیستم نیازمندی‌ها را برآورده می‌کند.' },
  { name: 'تست رگرسیون', nameEn: 'Regression Test', description: 'اطمینان از عدم شکست قابلیت‌های موجود.' },
  { name: 'تست عملکرد', nameEn: 'Performance Test', description: 'تست سرعت و پایداری سیستم.' },
  { name: 'تست امنیت', nameEn: 'Security Test', description: 'شناسایی آسیب‌پذیری‌های امنیتی.' },
]

const testMethods = [
  { name: 'توسعه تست‌محور', nameEn: 'TDD', description: 'نوشتن تست قبل از کد با چرخه قرمز-سبز-بازآرایی.' },
  { name: 'توسعه رفتارمحور', nameEn: 'BDD', description: 'تعریف رفتار سیستم با زبان طبیعی.' },
  { name: 'جعبه سفید', nameEn: 'White Box', description: 'تست با دانش از ساختار داخلی.' },
  { name: 'جعبه سیاه', nameEn: 'Black Box', description: 'تست بدون دانش از پیاده‌سازی.' },
  { name: 'تست اکتشافی', nameEn: 'Exploratory Testing', description: 'کاوش آزادانه سیستم برای یافتن مشکلات.' },
]

const testTools = [
  { name: 'شیء ساختگی', nameEn: 'Mock Object', description: 'شبیه‌سازی رفتار وابستگی‌ها.' },
  { name: 'استاب', nameEn: 'Stub', description: 'پاسخ‌های از پیش تعریف‌شده.' },
  { name: 'جاسوس', nameEn: 'Spy', description: 'ردیابی فراخوانی‌ها به اشیاء واقعی.' },
  { name: 'فیکسچر', nameEn: 'Fixture', description: 'داده‌های آماده برای تست.' },
  { name: 'فکتوری تست', nameEn: 'Test Factory', description: 'ایجاد خودکار داده‌های تست.' },
]
