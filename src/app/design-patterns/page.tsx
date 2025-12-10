'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DesignPatternsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-4"
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
            <Link 
              key={pattern.name} 
              href={pattern.link || '#'}
              className="block card hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">{pattern.name}</h3>
                  {pattern.tag && (
                    <span className="text-xs px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded">
                      {pattern.tag}
                    </span>
                  )}
                </div>
                <span className="tag tag-blue">{pattern.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{pattern.description}</p>
            </Link>
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
            <Link 
              key={pattern.name} 
              href={pattern.link || '#'}
              className="block card hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{pattern.name}</h3>
                <span className="tag tag-green">{pattern.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{pattern.description}</p>
            </Link>
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
            <Link 
              key={pattern.name} 
              href={pattern.link || '#'}
              className="block card hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{pattern.name}</h3>
                <span className="tag tag-purple">{pattern.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{pattern.description}</p>
            </Link>
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
            <Link 
              key={pattern.name} 
              href={pattern.link || '#'}
              className="block card hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{pattern.name}</h3>
                <span className="tag tag-amber">{pattern.nameEn}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{pattern.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

const creationalPatterns = [
  { name: 'تک‌نمونه', nameEn: 'Singleton', description: 'اطمینان از وجود تنها یک نمونه از کلاس - توجه: معمولاً یک Antipattern است!', link: '/design-patterns/singleton', tag: 'Antipattern' },
  { name: 'کارخانه', nameEn: 'Factory Method', description: 'تعریف رابط برای ایجاد اشیاء - زیرکلاس‌ها نوع اشیاء را تعیین می‌کنند', link: '/design-patterns/factory-method' },
  { name: 'کارخانه انتزاعی', nameEn: 'Abstract Factory', description: 'ایجاد خانواده‌های اشیاء مرتبط بدون مشخص کردن کلاس‌های واقعی', link: '/design-patterns/abstract-factory' },
  { name: 'سازنده', nameEn: 'Builder', description: 'ساخت تدریجی یک شیء پیچیده - مفید برای تست‌ها', link: '/design-patterns/builder' },
]

const structuralPatterns = [
  { name: 'آداپتور', nameEn: 'Adapter', description: 'تبدیل رابط برای سازگاری - جلوگیری از افشای جزئیات پیاده‌سازی', link: '/design-patterns/adapter' },
  { name: 'تزئین‌کننده', nameEn: 'Decorator', description: 'افزودن مسئولیت‌های جدید به صورت پویا - عالی برای logging و validation', link: '/design-patterns/decorator' },
  { name: 'نما', nameEn: 'Facade', description: 'رابط ساده برای زیرسیستم پیچیده - مفید برای bounded contexts', link: '/design-patterns/facade' },
  { name: 'پروکسی', nameEn: 'Proxy', description: 'کنترل دسترسی به شیء - Virtual, Remote, Cache, Synchronization', link: '/design-patterns/proxy' },
]

const behavioralPatterns = [
  { name: 'زنجیره مسئولیت', nameEn: 'Chain of Responsibility', description: 'عبور درخواست در زنجیره handler ها - مثال: ASP.NET Middleware', link: '/design-patterns/chain-of-responsibility' },
  { name: 'CQRS', nameEn: 'CQRS', description: 'جداسازی Command و Query - مدل‌های خواندن/نوشتن مجزا', link: '/design-patterns/cqrs' },
  { name: 'میانجی', nameEn: 'Mediator', description: 'هماهنگی بین اجزا - کاهش وابستگی مستقیم (مثال: MediatR)', link: '/design-patterns/mediator' },
  { name: 'ناظر', nameEn: 'Observer', description: 'اطلاع‌رسانی خودکار تغییرات - مفید برای event-driven systems', link: '/design-patterns/observer' },
  { name: 'وضعیت', nameEn: 'State', description: 'تغییر رفتار با تغییر وضعیت - مدل‌سازی Finite State Machine', link: '/design-patterns/state' },
  { name: 'استراتژی', nameEn: 'Strategy', description: 'خانواده الگوریتم‌های قابل تعویض - پایه Dependency Injection', link: '/design-patterns/strategy' },
  { name: 'یادبود', nameEn: 'Memento', description: 'ذخیره و بازیابی وضعیت - Undo/Redo در برنامه‌ها', link: '/design-patterns/memento' },
]

const otherPatterns = [
  { name: 'مخزن', nameEn: 'Repository', description: 'انتزاع لایه داده - interface شبیه مجموعه برای دسترسی به اشیاء', link: '/design-patterns/repository' },
  { name: 'واحد کار', nameEn: 'Unit of Work', description: 'مدیریت تراکنش‌ها - commit اتمی تغییرات چندگانه', link: '/design-patterns/unit-of-work' },
  { name: 'مشخصات', nameEn: 'Specification', description: 'کپسوله کردن قوانین query - قابل استفاده مجدد و قابل تست', link: '/design-patterns/specification' },
  { name: 'شیء پوچ', nameEn: 'Null Object', description: 'رفتار خنثی به جای null - حذف null check های تکراری', link: '/design-patterns/null-object' },
  { name: 'Guard Clause', nameEn: 'Guard Clause', description: 'کاهش پیچیدگی شرطی - بررسی‌های اولیه در توابع', link: '/design-patterns/guard-clause' },
  { name: 'رویدادهای دامنه', nameEn: 'Domain Events', description: 'ارتباط بین اجزای دامنه - decoupling با رویدادها', link: '/design-patterns/domain-events' },
  { name: 'موتور قوانین', nameEn: 'Rules Engine', description: 'مدیریت قوانین تجاری - جداسازی منطق از کد اصلی', link: '/design-patterns/rules-engine' },
  { name: 'Outbox', nameEn: 'Outbox Pattern', description: 'تضمین تحویل پیام - حل مشکل dual-write', link: '/design-patterns/outbox' },
  { name: 'Strangler Fig', nameEn: 'Strangler Fig', description: 'مهاجرت تدریجی سیستم قدیمی - جایگزینی با Facade', link: '/design-patterns/strangler-fig' },
  { name: 'REPR', nameEn: 'REPR', description: 'Request-Endpoint-Response - جایگزین ساده‌تر برای MVC', link: '/design-patterns/repr' },
  { name: 'Object Mother', nameEn: 'Object Mother', description: 'ایجاد fixture های استاندارد - مفید برای تست‌ها', link: '/design-patterns/object-mother' },
]
