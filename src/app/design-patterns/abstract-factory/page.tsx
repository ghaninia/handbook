'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AbstractFactoryPage() {
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
        Abstract Factory Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            What is Abstract Factory Pattern?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Abstract Factory رابطی برای ایجاد خانواده‌های اشیاء مرتبط یا وابسته فراهم می‌کند بدون اینکه انواع مشخص آنها را مشخص کند. این الگو به client اجازه می‌دهد از کلاس‌های abstract به جای کلاس‌های concrete برای ایجاد خانواده‌های اشیاء استفاده کند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            When to Use It
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>استقلال سیستم:</strong> وقتی می‌خواهید سیستم از نحوه ایجاد، ترکیب و نمایش اشیاءش مستقل باشد</li>
            <li><strong>خانواده‌های قابل تعویض محصولات:</strong> وقتی خانواده‌ای از محصولات برای استفاده همزمان در نظر گرفته شده‌اند و باید این محدودیت را اعمال کنید</li>
            <li><strong>ایزولاسیون کلاس‌های Concrete:</strong> وقتی می‌خواهید کتابخانه‌ای از محصولات ارائه دهید و فقط interfaces آنها را نمایش دهید، نه implementations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            C# Example
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Abstract Product
public interface IDatabase
{
    void Connect();
}

// Concrete Products
public class SQLDatabase : IDatabase
{
    public void Connect() => Console.WriteLine("Connecting to SQL Database...");
}

public class NoSQLDatabase : IDatabase
{
    public void Connect() => Console.WriteLine("Connecting to NoSQL Database...");
}

// Abstract Factory
public interface IDatabaseFactory
{
    IDatabase CreateDatabase();
}

// Concrete Factories
public class SQLDatabaseFactory : IDatabaseFactory
{
    public IDatabase CreateDatabase() => new SQLDatabase();
}

public class NoSQLDatabaseFactory : IDatabaseFactory
{
    public IDatabase CreateDatabase() => new NoSQLDatabase();
}

// Client
class Program
{
    static void Main(string[] args)
    {
        IDatabaseFactory factory = new SQLDatabaseFactory();
        IDatabase sqlDatabase = factory.CreateDatabase();
        sqlDatabase.Connect();
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Advantages
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>سازگاری:</strong> تضمین می‌کند که اشیاءی که استفاده می‌کنید به همان خانواده محصولات تعلق دارند و بدین وسیله سازگاری را بهبود می‌بخشد</li>
            <li><strong>Loose Coupling:</strong> به کاهش coupling بین کد client و کلاس‌های concrete کمک می‌کند</li>
            <li><strong>سهولت توسعه:</strong> افزودن انواع جدید محصولات به سیستم را آسان‌تر می‌کند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            What about DI/IOC Containers
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            هم الگوی Abstract Factory و هم Dependency Injection (DI) برای مدیریت وابستگی‌ها در برنامه‌ی نرم‌افزاری استفاده می‌شوند، اما این هدف را به روش‌های متفاوت و برای سناریوهای مختلف دنبال می‌کنند.
          </p>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">ارتباط آنها:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li><strong>جداسازی:</strong> هر دو هدف کاهش coupling بین کلاس‌ها یا ماژول‌ها را دنبال می‌کنند</li>
            <li><strong>قابلیت نگهداری کد:</strong> هر دو تکنیک با ایزوله کردن کد ساخت، قابلیت نگهداری کد را بهبود می‌بخشند</li>
            <li><strong>ایجاد Object:</strong> Abstract factories اغلب از DI برای inject کردن وابستگی‌های مختلف به اشیاءی که ایجاد می‌کنند استفاده می‌کنند</li>
          </ul>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">تفاوت‌های Abstract Factory و DI Containers:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>محدوده:</strong> DI containers معمولاً در سطح کل برنامه عمل می‌کنند، در حالی که Abstract Factory می‌تواند محدود به بخش‌های خاص برنامه باشد</li>
            <li><strong>انعطاف‌پذیری:</strong> DI containers عموماً انعطاف‌پذیرتر هستند و سناریوهای پیچیده‌تری مانند مدیریت lifetime اشیاء، lazy instantiation و غیره را مدیریت می‌کنند</li>
            <li><strong>خودکار در مقابل دستی:</strong> IoC containers اغلب از کل object graph مراقبت می‌کنند، در حالی که Abstract factories معمولاً باید به صورت دستی برای ایجاد اشیاء فراخوانی شوند</li>
            <li><strong>پیچیدگی:</strong> استفاده از IoC container معمولاً نیاز به وابستگی اضافی دارد، در حالی که Abstract Factory اغلب با کد C# ساده و بدون کتابخانه اضافی قابل پیاده‌سازی است</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نتیجه‌گیری
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            الگوی Abstract Factory راهی کارآمد برای مدیریت و ایجاد خانواده‌های محصولات مرتبط فراهم می‌کند. این الگو loose coupling و high cohesion را امکان‌پذیر می‌سازد و کد را قابل نگهداری‌تر و توسعه‌پذیرتر می‌کند. این الگو برای سیستم‌ها و کتابخانه‌های بزرگی که هدف حفظ سازگاری و ماژولار بودن را دارند، ضروری است.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوهای مرتبط
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/factory-method" className="text-blue-600 dark:text-blue-400 hover:underline">Factory Method Pattern</Link> - الگوی پایه‌ای که Abstract Factory آن را گسترش می‌دهد</li>
            <li><Link href="/design-patterns/builder" className="text-blue-600 dark:text-blue-400 hover:underline">Builder Pattern</Link> - برای ایجاد اشیاء پیچیده</li>
            <li><Link href="/design-patterns/singleton" className="text-blue-600 dark:text-blue-400 hover:underline">Singleton Pattern</Link> - معمولاً factories به صورت singleton پیاده‌سازی می‌شوند</li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
