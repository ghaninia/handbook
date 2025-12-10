'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function TermsPage() {
  const [search, setSearch] = useState('')
  
  const filteredTerms = terms.filter(
    (t) => t.name.includes(search) || t.nameEn.toLowerCase().includes(search.toLowerCase()) || t.description.includes(search)
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-4"
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        اصطلاحات
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        واژه‌نامه اصطلاحات تخصصی توسعه نرم‌افزار
      </p>

      <div className="mb-8">
        <input
          type="text"
          placeholder="جستجوی اصطلاح..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-3">
        {filteredTerms.map((term) => (
          <div key={term.name} className="card">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-900 dark:text-gray-100">{term.name}</h3>
              <span className="tag tag-blue">{term.nameEn}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{term.description}</p>
          </div>
        ))}
        {filteredTerms.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">
            نتیجه‌ای یافت نشد.
          </p>
        )}
      </div>
    </motion.div>
  )
}

const terms = [
  { name: 'انتزاع', nameEn: 'Abstraction', description: 'پنهان کردن جزئیات پیچیده و نمایش فقط قابلیت‌های ضروری.' },
  { name: 'کپسوله‌سازی', nameEn: 'Encapsulation', description: 'بسته‌بندی داده و متدها در یک واحد و پنهان کردن جزئیات داخلی.' },
  { name: 'وراثت', nameEn: 'Inheritance', description: 'مکانیزمی که یک کلاس ویژگی‌های کلاس دیگر را به ارث می‌برد.' },
  { name: 'چندریختی', nameEn: 'Polymorphism', description: 'قابلیت یک شیء برای رفتار متفاوت در شرایط مختلف.' },
  { name: 'رابط', nameEn: 'Interface', description: 'قراردادی که رفتار مورد انتظار را بدون پیاده‌سازی تعریف می‌کند.' },
  { name: 'کلاس انتزاعی', nameEn: 'Abstract Class', description: 'کلاسی که نمی‌توان از آن نمونه ساخت و برای ارث‌بری طراحی شده.' },
  { name: 'متد', nameEn: 'Method', description: 'تابعی که به یک کلاس یا شیء تعلق دارد.' },
  { name: 'سازنده', nameEn: 'Constructor', description: 'متد خاصی که هنگام ایجاد شیء فراخوانی می‌شود.' },
  { name: 'دسترسی‌دهنده', nameEn: 'Getter', description: 'متدی برای خواندن مقدار یک فیلد.' },
  { name: 'تنظیم‌کننده', nameEn: 'Setter', description: 'متدی برای تغییر مقدار یک فیلد.' },
  { name: 'ثابت', nameEn: 'Constant', description: 'مقداری که پس از تعریف قابل تغییر نیست.' },
  { name: 'متغیر', nameEn: 'Variable', description: 'نامی که به یک مقدار در حافظه اشاره می‌کند.' },
  { name: 'پارامتر', nameEn: 'Parameter', description: 'متغیری که به تابع پاس داده می‌شود.' },
  { name: 'آرگومان', nameEn: 'Argument', description: 'مقدار واقعی که هنگام فراخوانی به تابع داده می‌شود.' },
  { name: 'بازگشت', nameEn: 'Return', description: 'مقداری که تابع به فراخواننده برمی‌گرداند.' },
  { name: 'حلقه', nameEn: 'Loop', description: 'ساختاری برای تکرار یک بلوک کد.' },
  { name: 'شرط', nameEn: 'Condition', description: 'عبارتی که نتیجه درست یا غلط دارد.' },
  { name: 'بازگشتی', nameEn: 'Recursion', description: 'تابعی که خودش را فراخوانی می‌کند.' },
  { name: 'استثناء', nameEn: 'Exception', description: 'رویدادی که جریان عادی برنامه را مختل می‌کند.' },
  { name: 'مدیریت خطا', nameEn: 'Error Handling', description: 'فرآیند پاسخ به شرایط غیرعادی.' },
]
