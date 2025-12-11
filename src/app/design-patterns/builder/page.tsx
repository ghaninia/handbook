'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BuilderPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-4"
    >
      <div className="mb-6">
        <Link href="/design-patterns" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
          ← Back to Design Patterns
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Builder Design Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوی Builder چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی طراحی Builder یک الگوی creational است، مشابه الگوی Factory (Factory Method، Abstract Factory). برخلاف الگوی Factory که معمولاً فقط یک method برای ایجاد object ارائه می‌دهد، الگوی Builder چندین method ارائه می‌دهد که می‌توانند برای تعریف تدریجی ویژگی‌های type مورد نظر برای ایجاد استفاده شوند. این یک interface انعطاف‌پذیرتر نسبت به یک method واحد با تعداد زیادی parameter یا یک object parameter پیچیده فراهم می‌کند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            ویژگی‌های یک طراحی Builder معمولی
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            یک طراحی builder معمولی (برای ایجاد SomeType) دارای ویژگی‌های زیر است:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Naming Convention:</strong> نام‌گذاری SomeTypeBuilder برای ارتباط استفاده از الگو</li>
            <li><strong>Initialization:</strong> مقداردهی اولیه یک instance private ساده (یا پیش‌فرض) از SomeType هنگام construction</li>
            <li><strong>Property Setting Methods:</strong> expose کردن method هایی که property های instance private SomeType را تنظیم می‌کنند</li>
            <li><strong>Fluent Interface:</strong> هر method مقدار this، یعنی instance SomeTypeBuilder را برمی‌گرداند</li>
            <li><strong>Build Method:</strong> expose کردن method Build (یا Create) که به سادگی instance private SomeType را برمی‌گرداند</li>
            <li><strong>Deferred Construction:</strong> در برخی موارد که ایجاد SomeType گران است، construction ممکن است به این مرحله موکول شود</li>
            <li><strong>Common Configurations:</strong> اختیاری، expose کردن method های (static) برای دریافت configuration های مشترک شناخته شده SomeType</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال ساده در C#
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class AddressBuilder
{
  private Address _address = new Address();

  public AddressBuilder WithStreet(string street)
  {
    _address.Street = street;
    return this;
  }
  
  public AddressBuilder WithState(string state)
  {
    _address.State = state;
    return this;
  }

  // additional WithWhatever methods

  public Address Build()
  {
    return _address;
  }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایای الگوی Builder
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Flexibility:</strong> امکان ایجاد object های مختلف با configuration های مختلف</li>
            <li><strong>Readability:</strong> کد خواناتر و قابل فهم‌تر نسبت به constructor های با parameter های زیاد</li>
            <li><strong>Immutability:</strong> امکان ایجاد object های immutable</li>
            <li><strong>Step-by-Step Construction:</strong> ساخت مرحله به مرحله object های پیچیده</li>
            <li><strong>Default Values:</strong> امکان ارائه مقادیر پیش‌فرض برای property ها</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            کاربرد در Testing
          </h2>
          <div className="bg-green-50 dark:bg-green-900/20 border-r-4 border-green-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              الگوی Builder به‌ویژه در <strong>unit testing</strong> برای ایجاد test fixture ها مفید است. این الگو test ها را خواناتر می‌کند و تکرار را هنگام ایجاد object های پیچیده با property های زیاد کاهش می‌دهد.
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Builder pattern در testing برای ایجاد test data با configuration های مختلف بسیار مفید است و کد test را تمیزتر و قابل نگهداری‌تر می‌کند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            همچنین ببینید
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/testing" className="text-blue-600 dark:text-blue-400 hover:underline">Testing - Overview</Link></li>
            <li><Link href="/design-patterns/factory-method" className="text-blue-600 dark:text-blue-400 hover:underline">Factory Method Pattern</Link></li>
            <li><Link href="/design-patterns/abstract-factory" className="text-blue-600 dark:text-blue-400 hover:underline">Abstract Factory Pattern</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>Design Patterns Library (Pluralsight)</li>
            <li>Applying the Builder Pattern to an Angular Service (Typescript)</li>
            <li>Using Builder in C# Unit Tests Kata</li>
            <li>Flexible and Expressive Unit Tests with the Builder Pattern</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            بیشتر بدانید
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>On-Demand Webinar: Exploring Design Patterns for Testing</li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
