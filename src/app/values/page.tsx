'use client'

import { motion } from 'framer-motion'

export default function ValuesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-4"
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        ارزش‌های برنامه‌نویسی مفرط (XP)
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        پنج ارزش اصلی که پایه Extreme Programming را تشکیل می‌دهند
      </p>

      <div className="space-y-6">
        {values.map((value, index) => (
          <div key={value.name} className="card">
            <div className="flex items-center gap-4 mb-3">
              <span className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                {index + 1}
              </span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{value.name}</h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">{value.nameEn}</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">نمونه‌های عملی:</h4>
              <ul className="space-y-1">
                {value.examples.map((example, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

const values = [
  {
    name: 'ارتباط',
    nameEn: 'Communication',
    description: 'ارتباط مؤثر بین تمام اعضای تیم و ذینفعان. XP بر ارتباط مداوم و شفاف تأکید می‌کند تا همه در یک صفحه باشند.',
    examples: [
      'جلسات استندآپ روزانه',
      'برنامه‌نویسی جفتی',
      'حضور مشتری در تیم',
      'استفاده از تخته سفید و نمودارها',
    ],
  },
  {
    name: 'سادگی',
    nameEn: 'Simplicity',
    description: 'انجام ساده‌ترین کار که می‌تواند جواب دهد. از پیچیدگی غیرضروری اجتناب کنید و فقط آنچه الان نیاز است بسازید.',
    examples: [
      'YAGNI - به آن نیاز نخواهی داشت',
      'بازآرایی مداوم',
      'حذف کد اضافی',
      'طراحی ساده و قابل فهم',
    ],
  },
  {
    name: 'بازخورد',
    nameEn: 'Feedback',
    description: 'دریافت بازخورد سریع و مداوم از همه منابع - تست‌ها، مشتری و تیم. بازخورد به بهبود مداوم کمک می‌کند.',
    examples: [
      'تست‌های واحد با اجرای سریع',
      'یکپارچه‌سازی مداوم',
      'نمایش‌های مکرر به مشتری',
      'بازنگری کد',
    ],
  },
  {
    name: 'شجاعت',
    nameEn: 'Courage',
    description: 'شجاعت برای انجام کارهای درست - بازآرایی کد، حذف قابلیت‌های بد، تغییر مسیر وقتی لازم است.',
    examples: [
      'حذف کد مرده',
      'بازنویسی کد ضعیف',
      'صحبت درباره مشکلات',
      'امتحان کردن ایده‌های جدید',
    ],
  },
  {
    name: 'احترام',
    nameEn: 'Respect',
    description: 'احترام متقابل بین تمام اعضای تیم. هر کسی ارزشمند است و نظراتش مهم است.',
    examples: [
      'گوش دادن به نظرات همه',
      'پذیرش اشتباهات',
      'کمک به همکاران',
      'قدردانی از تلاش‌ها',
    ],
  },
]
