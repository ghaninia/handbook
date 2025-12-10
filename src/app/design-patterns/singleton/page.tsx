'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SingletonPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-4"
    >
      <div className="mb-6">
        <Link href="/design-patterns" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
          ← بازگشت به الگوهای طراحی
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        الگوی Singleton (تک‌نمونه)
      </h1>
      
      <div className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-sm mb-6">
        ⚠️ Antipattern
      </div>

      <div className="prose prose-sm max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            هشدار: Singleton یک Antipattern است
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Singleton اغلب به عنوان یک antipattern در نظر گرفته می‌شود زیرا:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>اصل Single Responsibility را نقض می‌کند (هم منطق کسب‌وکار دارد هم چرخه عمر خود را مدیریت می‌کند)</li>
            <li>وابستگی‌های پنهان ایجاد می‌کند</li>
            <li>تست واحد را دشوار می‌کند</li>
            <li>وضعیت سراسری ایجاد می‌کند که در برنامه‌های چندنخی مشکل‌ساز است</li>
            <li>اصل Open/Closed را نقض می‌کند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            راه‌حل بهتر: Dependency Injection
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            به جای استفاده از Singleton، از Dependency Injection استفاده کنید. در ASP.NET Core:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// در Program.cs یا Startup.cs
services.AddSingleton<IMyService, MyService>();

// در کلاس شما
public class MyController : Controller
{
    private readonly IMyService _myService;
    
    public MyController(IMyService myService)
    {
        _myService = myService;
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            پیاده‌سازی Singleton (برای اهداف آموزشی)
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            اگر واقعاً نیاز به پیاده‌سازی Singleton دارید (که احتمالاً ندارید)، این یک نمونه thread-safe است:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public sealed class Singleton
{
    private static readonly Lazy<Singleton> lazy = 
        new Lazy<Singleton>(() => new Singleton());
    
    public static Singleton Instance 
    { 
        get { return lazy.Value; } 
    }

    private Singleton()
    {
        // سازنده خصوصی
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            چرا Singleton مشکل‌ساز است؟
          </h2>
          <div className="space-y-4">
            <div className="border-r-4 border-red-500 pr-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                نقض Single Responsibility Principle
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                کلاس Singleton دو مسئولیت دارد: انجام کار اصلی خود و مدیریت چرخه عمر خود.
              </p>
            </div>
            
            <div className="border-r-4 border-red-500 pr-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                وابستگی‌های پنهان
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                استفاده از Singleton.Instance در کد، وابستگی را پنهان می‌کند و اصل Explicit Dependencies را نقض می‌کند.
              </p>
            </div>
            
            <div className="border-r-4 border-red-500 pr-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                دشواری در تست
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                نمی‌توانید Singleton را با mock جایگزین کنید، مگر اینکه پیچیدگی‌های اضافی اضافه کنید.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/singleton" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Singleton Pattern
              </a>
            </li>
            <li>
              <a href="https://www.pluralsight.com/courses/c-sharp-design-patterns-singleton" target="_blank" rel="noopener" className="hover:underline">
                Pluralsight - C# Design Patterns: Singleton
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
