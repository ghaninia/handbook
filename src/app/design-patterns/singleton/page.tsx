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

      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Singleton Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <div className="bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 p-4 mb-6">
          <div className="flex items-center mb-2">
            <span className="text-red-600 text-2xl mr-2">⚠️</span>
            <h2 className="text-xl font-semibold text-red-800 dark:text-red-300 mb-0">
              هشدار: Singleton Pattern یک Antipattern است!
            </h2>
          </div>
          <p className="text-red-700 dark:text-red-300 text-sm mb-0">
            این pattern اغلب به عنوان antipattern در نظر گرفته می‌شود. بهتر است از dependency injection استفاده کنید.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Singleton Pattern چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Singleton design pattern برای اطمینان از این استفاده می‌شود که application هرگز بیش از یک instance از type مشخصی نداشته باشد. اغلب به عنوان antipattern در نظر گرفته می‌شود، زیرا implementation این pattern مسئولیت enforce کردن single instance behavior را روی خود type قرار می‌دهد. این کار Single Responsibility Principle را نقض می‌کند و reference به static Instance property این type اغلب منجر به tight coupling می‌شود (Static Cling را ببینید).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال Implementation
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 p-4 mb-4">
            <p className="text-red-700 dark:text-red-300 text-sm mb-0">
              <strong>کد بد! استفاده نکنید!</strong><br/>
              <a href="http://csharpindepth.com/Articles/General/Singleton.aspx" className="text-red-600 dark:text-red-400 hover:underline" target="_blank" rel="noopener">
                http://csharpindepth.com/Articles/General/Singleton.aspx را ببینید
              </a>
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Bad code! Do not use!
// See http://csharpindepth.com/Articles/General/Singleton.aspx
public sealed class Singleton
{
    private static Singleton instance=null;

    private Singleton()
    {
    }

    public static Singleton Instance
    {
        get
        {
            if (instance==null)
            {
                instance = new Singleton();
            }
            return instance;
        }
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Approach بهتر
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Approach بهتر از Singleton pattern این است که از Explicit Dependencies Principle برای class هایی که به singleton type وابسته هستند پیروی کنید. از dependency injection برای pass کردن object به type که به آن نیاز دارد استفاده کنید، و services/IOC container را configure کنید تا singleton lifetime behavior object را enforce کند.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border-r-4 border-green-500 p-4 mb-4">
            <h3 className="text-lg font-medium text-green-800 dark:text-green-300 mb-2">
              ✅ راه‌حل پیشنهادی: Dependency Injection
            </h3>
            <p className="text-green-700 dark:text-green-300 text-sm">
              از dependency injection container استفاده کنید تا singleton lifetime را مدیریت کند.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Instead of Singleton pattern, use DI
// In Program.cs or Startup.cs
services.AddSingleton<IMyService, MyService>();

// In your class - explicit dependency
public class OrderService
{
    private readonly IMyService _myService;
    
    public OrderService(IMyService myService)
    {
        _myService = myService; // Dependency is explicit
    }
    
    public void ProcessOrder(Order order)
    {
        _myService.DoSomething(); // No static reference
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            چرا Singleton Pattern مشکل‌ساز است؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Singleton pattern چندین مشکل اساسی دارد که آن را به antipattern تبدیل می‌کند:
          </p>
          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                ❌ نقض Single Responsibility Principle
              </h3>
              <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
                Class دو مسئولیت دارد: کار اصلی خود و مدیریت instance. این دو مسئولیت باید جدا باشند.
              </p>
            </div>
            
            <div className="bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                ❌ Tight Coupling (Static Cling)
              </h3>
              <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
                Reference به static Instance property منجر به tight coupling می‌شود و code را غیرقابل انعطاف می‌کند.
              </p>
            </div>
            
            <div className="bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                ❌ Hidden Dependencies
              </h3>
              <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
                وابستگی‌ها در constructor مشخص نیستند، Explicit Dependencies Principle را نقض می‌کند.
              </p>
            </div>
            
            <div className="bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                ❌ Testing مشکلات
              </h3>
              <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
                نمی‌توان به راحتی mock کرد، unit test ها به هم وابسته می‌شوند، و global state ایجاد می‌کند.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مقایسه: Singleton vs Dependency Injection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2 text-center">
                ❌ Singleton Pattern
              </h3>
              <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                <li>• Hidden dependencies</li>
                <li>• Hard to test</li>
                <li>• Tight coupling</li>
                <li>• Global state</li>
                <li>• SRP violation</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2 text-center">
                ✅ Dependency Injection
              </h3>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>• Explicit dependencies</li>
                <li>• Easy to test</li>
                <li>• Loose coupling</li>
                <li>• No global state</li>
                <li>• Single responsibility</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            اصول مرتبط
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Single Responsibility Principle</strong> - هر class باید یک دلیل برای تغییر داشته باشد</li>
            <li><strong>Explicit Dependencies Principle</strong> - dependencies باید در constructor مشخص باشند</li>
            <li><strong>Static Cling</strong> - وابستگی بیش از حد به static member ها</li>
            <li><strong>Dependency Injection</strong> - تزریق وابستگی‌ها از بیرون</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="http://csharpindepth.com/Articles/General/Singleton.aspx" target="_blank" rel="noopener" className="hover:underline">
                C# in Depth - Implementing the Singleton Pattern in C#
              </a>
            </li>
            <li>
              <a href="https://handbook.com/design-patterns/singleton" target="_blank" rel="noopener" className="hover:underline">
                Handbook - Singleton Pattern
              </a>
            </li>
            <li>
              <a href="https://handbook.com/principles/explicit-dependencies-principle" target="_blank" rel="noopener" className="hover:underline">
                Handbook - Explicit Dependencies Principle
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
