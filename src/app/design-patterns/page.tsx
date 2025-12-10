'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DesignPatternsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-12 px-6 lg:px-12 max-w-4xl"
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        الگوهای طراحی
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        راه‌حل‌های اثبات‌شده برای مشکلات رایج در طراحی نرم‌افزار
      </p>

      {/* Creational Patterns */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          الگوهای ایجادی (Creational)
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          این الگوها با مکانیزم‌های ایجاد اشیاء سروکار دارند و سعی می‌کنند اشیاء را به شیوه‌ای مناسب با شرایط ایجاد کنند.
        </p>
        <div className="space-y-3">
          {creationalPatterns.map((pattern) => (
            <div key={pattern.name} className="card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{pattern.name}</h3>
                <span className="tag tag-blue">{pattern.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{pattern.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Structural Patterns */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          الگوهای ساختاری (Structural)
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          این الگوها توضیح می‌دهند که چگونه کلاس‌ها و اشیاء را به ساختارهای بزرگتر ترکیب کنیم.
        </p>
        <div className="space-y-3">
          {structuralPatterns.map((pattern) => (
            <div key={pattern.name} className="card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{pattern.name}</h3>
                <span className="tag tag-green">{pattern.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{pattern.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Behavioral Patterns */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          الگوهای رفتاری (Behavioral)
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          این الگوها با الگوریتم‌ها و تخصیص مسئولیت‌ها بین اشیاء سروکار دارند.
        </p>
        <div className="space-y-3">
          {behavioralPatterns.map((pattern) => (
            <div key={pattern.name} className="card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{pattern.name}</h3>
                <span className="tag tag-purple">{pattern.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{pattern.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Patterns */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          سایر الگوها
        </h2>
        <div className="space-y-3">
          {otherPatterns.map((pattern) => (
            <div key={pattern.name} className="card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{pattern.name}</h3>
                <span className="tag tag-amber">{pattern.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{pattern.description}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

const creationalPatterns = [
  { name: 'تک‌نمونه', nameEn: 'Singleton', description: 'اطمینان از وجود تنها یک نمونه از کلاس و فراهم کردن یک نقطه دسترسی سراسری به آن.' },
  { name: 'کارخانه', nameEn: 'Factory Method', description: 'تعریف یک رابط برای ایجاد اشیاء، اما اجازه می‌دهد زیرکلاس‌ها نوع اشیاء را تعیین کنند.' },
  { name: 'کارخانه انتزاعی', nameEn: 'Abstract Factory', description: 'یک رابط برای ایجاد خانواده‌های مرتبط یا وابسته از اشیاء بدون مشخص کردن کلاس‌های واقعی.' },
  { name: 'سازنده', nameEn: 'Builder', description: 'جداسازی ساخت یک شیء پیچیده از نمایش آن تا فرآیند ساخت یکسان بتواند نمایش‌های مختلف ایجاد کند.' },
  { name: 'نمونه اولیه', nameEn: 'Prototype', description: 'ایجاد اشیاء جدید با کپی کردن یک نمونه موجود.' },
]

const structuralPatterns = [
  { name: 'آداپتور', nameEn: 'Adapter', description: 'تبدیل رابط یک کلاس به رابط دیگری که کلاینت‌ها انتظار دارند.' },
  { name: 'پل', nameEn: 'Bridge', description: 'جداسازی انتزاع از پیاده‌سازی تا هر دو بتوانند مستقلاً تغییر کنند.' },
  { name: 'ترکیب', nameEn: 'Composite', description: 'ترکیب اشیاء در ساختارهای درختی برای نمایش سلسله مراتب‌های جزء-کل.' },
  { name: 'تزئین‌کننده', nameEn: 'Decorator', description: 'افزودن مسئولیت‌های جدید به یک شیء به صورت پویا.' },
  { name: 'نما', nameEn: 'Facade', description: 'فراهم کردن یک رابط یکپارچه و ساده برای مجموعه‌ای از رابط‌های پیچیده.' },
  { name: 'وزن مگس', nameEn: 'Flyweight', description: 'استفاده مشترک برای پشتیبانی کارآمد از تعداد زیادی اشیاء ریزدانه.' },
  { name: 'پروکسی', nameEn: 'Proxy', description: 'فراهم کردن یک جانشین برای کنترل دسترسی به یک شیء.' },
]

const behavioralPatterns = [
  { name: 'زنجیره مسئولیت', nameEn: 'Chain of Responsibility', description: 'عبور درخواست در امتداد زنجیره‌ای از کنترل‌کننده‌ها.' },
  { name: 'فرمان', nameEn: 'Command', description: 'کپسوله کردن یک درخواست به عنوان یک شیء.' },
  { name: 'مفسر', nameEn: 'Interpreter', description: 'تعریف نمایشی برای گرامر یک زبان و مفسری که از نمایش استفاده می‌کند.' },
  { name: 'تکرارکننده', nameEn: 'Iterator', description: 'دسترسی ترتیبی به عناصر یک شیء مجموعه بدون افشای نمایش زیرین.' },
  { name: 'میانجی', nameEn: 'Mediator', description: 'تعریف یک شیء که چگونگی تعامل مجموعه‌ای از اشیاء را کپسوله می‌کند.' },
  { name: 'یادبود', nameEn: 'Memento', description: 'ذخیره و بازیابی وضعیت داخلی یک شیء بدون نقض کپسوله‌سازی.' },
  { name: 'ناظر', nameEn: 'Observer', description: 'تعریف وابستگی یک به چند بین اشیاء برای اطلاع‌رسانی خودکار تغییرات.' },
  { name: 'وضعیت', nameEn: 'State', description: 'اجازه به یک شیء برای تغییر رفتار هنگام تغییر وضعیت داخلی.' },
  { name: 'استراتژی', nameEn: 'Strategy', description: 'تعریف خانواده‌ای از الگوریتم‌ها و قابل تعویض کردن آن‌ها.' },
  { name: 'روش الگو', nameEn: 'Template Method', description: 'تعریف اسکلت یک الگوریتم و واگذاری برخی مراحل به زیرکلاس‌ها.' },
  { name: 'بازدیدکننده', nameEn: 'Visitor', description: 'تعریف عملیات جدید روی عناصر ساختار شیء بدون تغییر کلاس‌ها.' },
]

const otherPatterns = [
  { name: 'مخزن', nameEn: 'Repository', description: 'میانجیگری بین دامنه و لایه‌های نگاشت داده با رابطی شبیه مجموعه.' },
  { name: 'واحد کار', nameEn: 'Unit of Work', description: 'نگهداری لیستی از اشیاء تحت تأثیر تراکنش تجاری.' },
  { name: 'کارخانه', nameEn: 'Factory', description: 'الگوی عمومی برای ایجاد اشیاء بدون مشخص کردن کلاس دقیق.' },
  { name: 'تزریق وابستگی', nameEn: 'Dependency Injection', description: 'تکنیکی که در آن یک شیء وابستگی‌های شیء دیگر را تأمین می‌کند.' },
  { name: 'مشخصات', nameEn: 'Specification', description: 'ترکیب قوانین تجاری با زنجیره کردن قوانین با منطق بولی.' },
  { name: 'شیء پوچ', nameEn: 'Null Object', description: 'یک شیء با رفتار تعریف شده خنثی به جای null.' },
]
