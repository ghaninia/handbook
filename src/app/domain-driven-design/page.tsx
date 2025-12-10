'use client'

import { motion } from 'framer-motion'

export default function DDDPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-12 px-6 lg:px-12 max-w-4xl"
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        طراحی دامنه‌محور (DDD)
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        رویکردی برای توسعه نرم‌افزار که بر مدل‌سازی دامنه کسب‌وکار تمرکز دارد
      </p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          مفاهیم استراتژیک
        </h2>
        <div className="space-y-3">
          {strategicConcepts.map((c) => (
            <div key={c.name} className="card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{c.name}</h3>
                <span className="tag tag-blue">{c.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          بلوک‌های سازنده تاکتیکی
        </h2>
        <div className="space-y-3">
          {tacticalBlocks.map((c) => (
            <div key={c.name} className="card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{c.name}</h3>
                <span className="tag tag-green">{c.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          الگوهای یکپارچه‌سازی
        </h2>
        <div className="space-y-3">
          {integrationPatterns.map((c) => (
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

const strategicConcepts = [
  { name: 'دامنه', nameEn: 'Domain', description: 'حوزه دانش یا فعالیتی که نرم‌افزار برای آن ساخته می‌شود.' },
  { name: 'زبان فراگیر', nameEn: 'Ubiquitous Language', description: 'زبان مشترک بین تیم توسعه و متخصصان دامنه.' },
  { name: 'زمینه محدود', nameEn: 'Bounded Context', description: 'مرز منطقی که در آن مدل دامنه معنا و سازگاری دارد.' },
  { name: 'نقشه زمینه', nameEn: 'Context Map', description: 'نمایش بصری روابط بین زمینه‌های محدود مختلف.' },
  { name: 'دامنه اصلی', nameEn: 'Core Domain', description: 'بخش اصلی و متمایزکننده سیستم که بیشترین ارزش را دارد.' },
  { name: 'زیردامنه پشتیبان', nameEn: 'Supporting Subdomain', description: 'بخش‌هایی که از دامنه اصلی پشتیبانی می‌کنند.' },
  { name: 'زیردامنه عمومی', nameEn: 'Generic Subdomain', description: 'بخش‌های استاندارد که می‌توان خریداری کرد.' },
]

const tacticalBlocks = [
  { name: 'موجودیت', nameEn: 'Entity', description: 'شیئی با هویت مشخص که در طول زمان تغییر می‌کند.' },
  { name: 'شیء ارزشی', nameEn: 'Value Object', description: 'شیئی بدون هویت که با ویژگی‌هایش تعریف می‌شود.' },
  { name: 'تجمیع', nameEn: 'Aggregate', description: 'گروهی از موجودیت‌ها و اشیاء ارزشی با یک ریشه.' },
  { name: 'ریشه تجمیع', nameEn: 'Aggregate Root', description: 'موجودیت اصلی که دسترسی به تجمیع را کنترل می‌کند.' },
  { name: 'مخزن', nameEn: 'Repository', description: 'واسط برای دسترسی به تجمیع‌ها از ذخیره‌سازی.' },
  { name: 'سرویس دامنه', nameEn: 'Domain Service', description: 'عملیاتی که به موجودیت خاصی تعلق ندارد.' },
  { name: 'رویداد دامنه', nameEn: 'Domain Event', description: 'نماینده چیزی که در دامنه رخ داده است.' },
  { name: 'کارخانه', nameEn: 'Factory', description: 'ایجاد تجمیع‌ها و موجودیت‌های پیچیده.' },
]

const integrationPatterns = [
  { name: 'لایه ضدفساد', nameEn: 'Anti-Corruption Layer', description: 'لایه‌ای که مدل را از سیستم‌های خارجی محافظت می‌کند.' },
  { name: 'هسته مشترک', nameEn: 'Shared Kernel', description: 'بخش مشترک مدل بین دو زمینه محدود.' },
  { name: 'مشتری-تامین‌کننده', nameEn: 'Customer-Supplier', description: 'رابطه‌ای که یک تیم نیازهای دیگری را تامین می‌کند.' },
  { name: 'پیروی', nameEn: 'Conformist', description: 'یک زمینه محدود که مدل دیگری را می‌پذیرد.' },
  { name: 'میزبان باز', nameEn: 'Open Host Service', description: 'پروتکل باز برای دسترسی به یک زمینه.' },
  { name: 'زبان منتشرشده', nameEn: 'Published Language', description: 'زبان مشترک برای تبادل بین زمینه‌ها.' },
]
