'use client'

import { motion } from 'framer-motion'

export default function AntiPatternsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-12 px-6 lg:px-12 max-w-4xl"
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        ضدالگوها
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        الگوهای رایج اشتباه که باید از آن‌ها اجتناب کنید
      </p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          ضدالگوهای کد
        </h2>
        <div className="space-y-3">
          {codeAntipatterns.map((p) => (
            <div key={p.name} className="card border-r-4 border-r-red-500">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{p.name}</h3>
                <span className="tag tag-red">{p.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          ضدالگوهای معماری
        </h2>
        <div className="space-y-3">
          {archAntipatterns.map((p) => (
            <div key={p.name} className="card border-r-4 border-r-amber-500">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{p.name}</h3>
                <span className="tag tag-amber">{p.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          ضدالگوهای مدیریتی
        </h2>
        <div className="space-y-3">
          {mgmtAntipatterns.map((p) => (
            <div key={p.name} className="card border-r-4 border-r-purple-500">
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

const codeAntipatterns = [
  { name: 'کد اسپاگتی', nameEn: 'Spaghetti Code', description: 'کدی با ساختار پیچیده و درهم که دنبال کردنش سخت است.' },
  { name: 'شیء خدا', nameEn: 'God Object', description: 'یک کلاس که کارهای زیادی انجام می‌دهد و همه چیز را می‌داند.' },
  { name: 'توپ بزرگ گل', nameEn: 'Big Ball of Mud', description: 'سیستمی بدون ساختار قابل تشخیص.' },
  { name: 'اعداد جادویی', nameEn: 'Magic Numbers', description: 'استفاده از اعداد بدون معنی در کد بدون توضیح.' },
  { name: 'کپی پیست', nameEn: 'Copy-Paste', description: 'تکرار کد به جای استفاده مجدد.' },
  { name: 'کد مرده', nameEn: 'Dead Code', description: 'کدی که هرگز اجرا نمی‌شود اما حذف نشده.' },
  { name: 'قایق لنگر', nameEn: 'Boat Anchor', description: 'نگه داشتن کد یا سیستم‌هایی که دیگر استفاده نمی‌شوند.' },
]

const archAntipatterns = [
  { name: 'لایه گذاری بیش از حد', nameEn: 'Lasagna Code', description: 'لایه‌های بیش از حد که پیچیدگی را افزایش می‌دهند.' },
  { name: 'وابستگی دایره‌ای', nameEn: 'Circular Dependency', description: 'ماژول‌هایی که به صورت دایره‌ای به هم وابسته‌اند.' },
  { name: 'سرویس خدا', nameEn: 'God Service', description: 'یک سرویس که بیش از حد مسئولیت دارد.' },
  { name: 'مونولیت توزیع‌شده', nameEn: 'Distributed Monolith', description: 'میکروسرویس‌هایی که مثل مونولیت به هم وابسته‌اند.' },
  { name: 'پایگاه داده مشترک', nameEn: 'Shared Database', description: 'چند سرویس که مستقیماً به یک پایگاه داده دسترسی دارند.' },
]

const mgmtAntipatterns = [
  { name: 'مدیریت قارچی', nameEn: 'Mushroom Management', description: 'تیم در تاریکی نگه داشته می‌شود.' },
  { name: 'برنامه‌ریزی بر اساس امید', nameEn: 'Hope-Driven Development', description: 'امیدواری به جای برنامه‌ریزی.' },
  { name: 'طلای بیش از حد', nameEn: 'Gold Plating', description: 'افزودن ویژگی‌های غیرضروری.' },
  { name: 'تحلیل بیش از حد', nameEn: 'Analysis Paralysis', description: 'تحلیل بیش از حد که مانع عمل می‌شود.' },
  { name: 'کارگو کالت', nameEn: 'Cargo Cult', description: 'تقلید کورکورانه بدون درک اصول.' },
]
