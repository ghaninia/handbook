'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FactoryMethodPage() {
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
        Factory Method Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Factory Method Pattern چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Factory Method یک object creation pattern از کتاب Design Patterns، توسط اصطلاحاً Gang of Four (GoF) است. این الگو به ما اجازه می‌دهد که interface یا abstract class برای ایجاد object تعریف کنیم و جزئیات خاص را به implementation ها واگذار کنیم. الگوی Factory Method امکان loose coupling و افزایش flexibility در ایجاد object ها در کد را فراهم می‌کند. همچنین به شما اجازه می‌دهد که پیچیدگی بالقوه object creation را encapsulate کنید.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            این الگو این‌گونه کار می‌کند:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mt-4">
            <li>یک interface یا abstract base class با method ایجاد object ایجاد کنید</li>
            <li>interface را implement کنید یا از abstract base class inherit کنید و abstract method ها را تعریف کنید</li>
            <li>implementation ها را در صورت نیاز swap کنید</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال Setup کردن Interface ها و Class ها
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            در اینجا مثالی از setup کردن interface ها و class ها با الگوی Factory Method است:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`using System;

interface IProductFactory 
{
    IProduct CreateProduct();
}

class MentoringFactory : IProductFactory 
{
    public IProduct CreateProduct()
    {
        return new MentoringOpportunity();
    }
}

class TrainingFactory : IProductFactory 
{
    public IProduct CreateProduct()
    {
        return new TrainingOffering();
    }
}

interface IProduct 
{
    void DisplayDetails();
}

class MentoringOpportunity : IProduct 
{
    public void DisplayDetails()
    {
        Console.WriteLine("This is a mentoring opportunity.");
    }
}

class TrainingOffering : IProduct 
{
    public void DisplayDetails()
    {
        Console.WriteLine("This is a training offering.");
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            استفاده از Factory ها
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            حالا با این کد، چگونه factory ها استفاده می‌شوند؟ توجه کنید که تنها چیزی که در اینجا در حال تغییر است، implementation خاص factory است.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`class Program 
{
    static void Main()
    {
        IProductFactory productFactory = new MentoringFactory();
        IProduct productItem = productFactory.CreateProduct();
        productItem.DisplayDetails();

        IProductFactory productFactory2 = new TrainingFactory();
        IProduct productItem2 = productFactory2.CreateProduct();
        productItem2.DisplayDetails();
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            استفاده با Dependency Injection
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            می‌توانید از dependency injection برای استفاده از factory interface ها در جاهای مورد نیاز استفاده کنید و سپس implementation های خاص factory ها را در صورت نیاز pass کنید.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            به عنوان مثال، فرض کنیم مجموعه‌ای از web page ها داریم که collection هایی از product ها را نمایش می‌دهند. base web page برای نمایش product ها - BaseProductDisplay - می‌تواند یک IProductFactory در آن inject شده باشد. تمام product display page ها از این page inherit می‌کنند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            برای page ای که mentoring opportunity ها را نمایش می‌دهد، MentoringFactory می‌تواند inject شود. برای page جداگانه‌ای که training offering ها را نمایش می‌دهد، TrainingFactory می‌تواند inject شود.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایای Factory Method
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Loose Coupling:</strong> کد client به concrete class های خاص وابسته نیست</li>
            <li><strong>Encapsulation:</strong> پیچیدگی object creation مخفی می‌شود</li>
            <li><strong>Flexibility:</strong> implementation های جدید بدون تغییر کد موجود اضافه می‌شوند</li>
            <li><strong>Single Responsibility:</strong> کد object creation از business logic جدا است</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوهای مرتبط
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/abstract-factory" className="text-blue-600 dark:text-blue-400 hover:underline">Abstract Factory Pattern</Link></li>
            <li><Link href="/design-patterns/builder" className="text-blue-600 dark:text-blue-400 hover:underline">Builder Pattern</Link></li>
            <li><Link href="/design-patterns/singleton" className="text-blue-600 dark:text-blue-400 hover:underline">Singleton Pattern</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Learn More
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="#" className="hover:underline">
                On-Demand Webinar: Exploring Design Patterns for Testing
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
