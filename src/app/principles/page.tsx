'use client'

import { motion } from 'framer-motion'

export default function PrinciplesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-12 px-6 lg:px-12 max-w-4xl"
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        اصول توسعه نرم‌افزار
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        اصول بنیادی که به نوشتن کد تمیز، قابل نگهداری و توسعه‌پذیر کمک می‌کنند
      </p>

      {/* SOLID */}
      <section id="solid" className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          اصول SOLID
        </h2>
        <div className="space-y-3">
          {solidPrinciples.map((p) => (
            <div key={p.letter} className="card">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                  {p.letter}
                </span>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{p.name}</h3>
                <span className="tag tag-blue">{p.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Principles */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          سایر اصول
        </h2>
        <div className="space-y-3">
          {otherPrinciples.map((p) => (
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

      {/* Design Principles */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          اصول طراحی
        </h2>
        <div className="space-y-3">
          {designPrinciples.map((p) => (
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

const solidPrinciples = [
  { letter: 'S', name: 'اصل مسئولیت واحد', nameEn: 'SRP', description: 'هر کلاس باید تنها یک دلیل برای تغییر داشته باشد.' },
  { letter: 'O', name: 'اصل باز-بسته', nameEn: 'OCP', description: 'موجودیت‌های نرم‌افزاری باید برای توسعه باز و برای تغییر بسته باشند.' },
  { letter: 'L', name: 'اصل جایگزینی لیسکوف', nameEn: 'LSP', description: 'اشیاء زیرنوع باید قابل جایگزینی با اشیاء نوع پایه باشند.' },
  { letter: 'I', name: 'اصل جداسازی رابط', nameEn: 'ISP', description: 'کلاینت‌ها نباید مجبور به وابستگی به رابط‌هایی شوند که استفاده نمی‌کنند.' },
  { letter: 'D', name: 'اصل وارونگی وابستگی', nameEn: 'DIP', description: 'ماژول‌های سطح بالا نباید به ماژول‌های سطح پایین وابسته باشند.' },
]

const otherPrinciples = [
  { name: 'خودت را تکرار نکن', nameEn: 'DRY', description: 'هر دانش باید یک نمایش واحد، بدون ابهام و معتبر در سیستم داشته باشد.' },
  { name: 'ساده نگه دار', nameEn: 'KISS', description: 'بیشتر سیستم‌ها اگر ساده نگه داشته شوند بهترین عملکرد را دارند.' },
  { name: 'به آن نیاز نخواهی داشت', nameEn: 'YAGNI', description: 'تا زمانی که واقعاً به چیزی نیاز ندارید، آن را پیاده‌سازی نکنید.' },
  { name: 'جداسازی نگرانی‌ها', nameEn: 'SoC', description: 'برنامه باید به بخش‌های مجزا تقسیم شود که هر کدام یک نگرانی را آدرس‌دهی می‌کند.' },
  { name: 'بگو، نپرس', nameEn: 'Tell, Don\'t Ask', description: 'به اشیاء بگویید چه کاری انجام دهند، وضعیت آن‌ها را نپرسید.' },
  { name: 'حداقل شگفتی', nameEn: 'POLA', description: 'یک جزء سیستم باید به گونه‌ای رفتار کند که اکثر کاربران انتظار دارند.' },
  { name: 'شکست سریع', nameEn: 'Fail Fast', description: 'وقتی مشکلی رخ می‌دهد، فوراً و واضحاً شکست بخورید.' },
]

const designPrinciples = [
  { name: 'ترکیب بر ارث‌بری', nameEn: 'Composition over Inheritance', description: 'ترجیح ترکیب اشیاء بر وراثت کلاس برای استفاده مجدد از کد.' },
  { name: 'برنامه‌نویسی به رابط', nameEn: 'Program to Interface', description: 'به یک رابط برنامه‌نویسی کنید، نه به یک پیاده‌سازی.' },
  { name: 'کپسوله‌سازی تغییرات', nameEn: 'Encapsulate What Varies', description: 'جنبه‌هایی که تغییر می‌کنند را شناسایی و از بقیه جدا کنید.' },
  { name: 'اتصال سست', nameEn: 'Loose Coupling', description: 'وابستگی بین ماژول‌ها را کاهش دهید.' },
  { name: 'انسجام بالا', nameEn: 'High Cohesion', description: 'عناصر مرتبط را در یک ماژول نگه دارید.' },
  { name: 'پنهان‌سازی اطلاعات', nameEn: 'Information Hiding', description: 'جزئیات پیاده‌سازی را از کلاینت‌ها پنهان کنید.' },
]
