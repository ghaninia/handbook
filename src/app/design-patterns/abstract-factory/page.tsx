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
            What is Abstract Factory?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Abstract Factory رابطی برای ایجاد خانواده‌های اشیاء مرتبط یا وابسته فراهم می‌کند بدون اینکه کلاس‌های مشخص آنها را تعریف کند. این یک الگوی ایجادی است که الگوی Factory Method را گسترش می‌دهد.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            When to Use Abstract Factory
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>سیستم باید از نحوه ایجاد، ترکیب و نمایش محصولاتش مستقل باشد</li>
            <li>سیستم باید با یکی از چندین خانواده محصول پیکربندی شود</li>
            <li>خانواده‌ای از اشیاء محصول مرتبط برای استفاده همزمان طراحی شده‌اند و نیاز دارید این محدودیت را اعمال کنید</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            C# Example
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Abstract products
public interface IDatabase
{
    void Connect();
    void Execute(string query);
}

public interface ILogger
{
    void Log(string message);
}

// Abstract factory
public interface IDatabaseFactory
{
    IDatabase CreateDatabase();
    ILogger CreateLogger();
}

// Concrete products for SQL Server
public class SqlServerDatabase : IDatabase
{
    public void Connect() => Console.WriteLine("Connected to SQL Server");
    public void Execute(string query) => Console.WriteLine($"SQL Server: {query}");
}

public class SqlServerLogger : ILogger
{
    public void Log(string message) => Console.WriteLine($"SQL Log: {message}");
}

// Concrete factory for SQL Server
public class SqlServerFactory : IDatabaseFactory
{
    public IDatabase CreateDatabase() => new SqlServerDatabase();
    public ILogger CreateLogger() => new SqlServerLogger();
}

// Concrete products for PostgreSQL
public class PostgreSqlDatabase : IDatabase
{
    public void Connect() => Console.WriteLine("Connected to PostgreSQL");
    public void Execute(string query) => Console.WriteLine($"PostgreSQL: {query}");
}

public class PostgreSqlLogger : ILogger
{
    public void Log(string message) => Console.WriteLine($"Postgres Log: {message}");
}

// Concrete factory for PostgreSQL
public class PostgreSqlFactory : IDatabaseFactory
{
    public IDatabase CreateDatabase() => new PostgreSqlDatabase();
    public ILogger CreateLogger() => new PostgreSqlLogger();
}

// Usage
public class Application
{
    private readonly IDatabase _database;
    private readonly ILogger _logger;
    
    public Application(IDatabaseFactory factory)
    {
        _database = factory.CreateDatabase();
        _logger = factory.CreateLogger();
    }
    
    public void Run()
    {
        _logger.Log("Starting application...");
        _database.Connect();
        _database.Execute("SELECT * FROM Users");
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Abstract Factory vs. Dependency Injection
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              در اپلیکیشن‌های مدرن .NET، اغلب نیازی به Abstract Factory ندارید چون <strong>کانتینرهای Dependency Injection</strong> ایجاد اشیاء و مدیریت چرخه حیات آنها را انجام می‌دهند. کانتینر DI به عنوان یک factory جهانی عمل می‌کند. با این حال، Abstract Factory همچنان زمانی مفید است که نیاز به ایجاد خانواده‌های اشیاء مرتبط در زمان اجرا بر اساس پیکربندی یا ورودی کاربر دارید.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/factory-method" className="text-blue-600 dark:text-blue-400 hover:underline">Factory Method Pattern</Link> - Abstract Factory اغلب با استفاده از Factory Method پیاده‌سازی می‌شود</li>
            <li><Link href="/design-patterns/singleton" className="text-blue-600 dark:text-blue-400 hover:underline">Singleton Pattern</Link> - کلاس‌های Factory اغلب singleton هستند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/abstract-factory-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Abstract Factory Pattern
              </a>
            </li>
            <li>
              <a href="http://bit.ly/DesignPatternsLibrary" target="_blank" rel="noopener" className="hover:underline">
                Pluralsight - Design Patterns Library
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
