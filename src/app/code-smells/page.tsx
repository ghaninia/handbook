'use client'

import { motion } from 'framer-motion'

export default function CodeSmellsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-4"
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        بوی بد کد
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        نشانه‌های سطحی که معمولاً نشان‌دهنده مشکلات عمیق‌تر در کد هستند
      </p>

      {categories.map((category) => (
        <section key={category.title} className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
            {category.title}
          </h2>
          <div className="space-y-3">
            {category.items.map((item) => (
              <div key={item.name} className="card">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">{item.name}</h3>
                  <span className={`tag ${category.tagColor}`}>{item.nameEn}</span>
                </div>
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
    title: 'بلوترها (Bloaters)',
    tagColor: 'tag-red',
    items: [
      { name: 'متد طولانی', nameEn: 'Long Method', description: 'متدی که بیش از حد بزرگ شده و کارهای زیادی انجام می‌دهد.' },
      { name: 'کلاس بزرگ', nameEn: 'Large Class', description: 'کلاسی که بیش از حد فیلد و متد دارد.' },
      { name: 'وسواس اولیه', nameEn: 'Primitive Obsession', description: 'استفاده بیش از حد از انواع اولیه به جای اشیاء کوچک.' },
      { name: 'لیست پارامتر طولانی', nameEn: 'Long Parameter List', description: 'متدی با تعداد زیادی پارامتر.' },
      { name: 'خوشه‌های داده', nameEn: 'Data Clumps', description: 'گروه‌هایی از داده که همیشه با هم ظاهر می‌شوند.' },
    ],
  },
  {
    title: 'سوءاستفاده از شیءگرایی',
    tagColor: 'tag-amber',
    items: [
      { name: 'دستورات سوئیچ', nameEn: 'Switch Statements', description: 'استفاده مکرر از switch/case به جای چندریختی.' },
      { name: 'ارث‌بری رد شده', nameEn: 'Refused Bequest', description: 'زیرکلاسی که از ارث‌بری والد استفاده نمی‌کند.' },
      { name: 'کلاس‌های جایگزین', nameEn: 'Alternative Classes', description: 'کلاس‌هایی با عملکرد مشابه اما رابط‌های متفاوت.' },
      { name: 'فیلد موقت', nameEn: 'Temporary Field', description: 'فیلدی که فقط در شرایط خاص مقدار دارد.' },
    ],
  },
  {
    title: 'موانع تغییر',
    tagColor: 'tag-purple',
    items: [
      { name: 'تغییر واگرا', nameEn: 'Divergent Change', description: 'یک کلاس که به دلایل مختلف تغییر می‌کند.' },
      { name: 'جراحی شاتگان', nameEn: 'Shotgun Surgery', description: 'یک تغییر که نیاز به اصلاح کلاس‌های زیادی دارد.' },
      { name: 'سلسله مراتب وراثت موازی', nameEn: 'Parallel Inheritance', description: 'ایجاد زیرکلاس در یک سلسله مراتب نیاز به ایجاد در دیگری دارد.' },
    ],
  },
  {
    title: 'غیرضروری‌ها',
    tagColor: 'tag-green',
    items: [
      { name: 'کد مرده', nameEn: 'Dead Code', description: 'کدی که دیگر استفاده نمی‌شود.' },
      { name: 'کلاس تنبل', nameEn: 'Lazy Class', description: 'کلاسی که کار کافی انجام نمی‌دهد.' },
      { name: 'عمومیت گمانه‌زنی', nameEn: 'Speculative Generality', description: 'کدی که برای نیازهای آینده نوشته شده.' },
      { name: 'کامنت‌های اضافی', nameEn: 'Comments', description: 'کامنت‌هایی که به جای کد تمیز توضیح می‌دهند.' },
    ],
  },
  {
    title: 'جفت‌کننده‌ها',
    tagColor: 'tag-blue',
    items: [
      { name: 'حسادت ویژگی', nameEn: 'Feature Envy', description: 'متدی که به داده‌های کلاس دیگر بیش از کلاس خود علاقه دارد.' },
      { name: 'صمیمیت نامناسب', nameEn: 'Inappropriate Intimacy', description: 'کلاس‌هایی که بیش از حد به جزئیات داخلی هم دسترسی دارند.' },
      { name: 'زنجیره پیام', nameEn: 'Message Chains', description: 'a.b().c().d() - زنجیره طولانی فراخوانی متد.' },
      { name: 'واسطه', nameEn: 'Middle Man', description: 'کلاسی که فقط کار را به کلاس دیگر واگذار می‌کند.' },
    ],
  },
]
