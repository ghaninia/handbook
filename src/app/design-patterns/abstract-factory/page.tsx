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
            The Abstract Factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes. It's a creational pattern that extends the Factory Method pattern.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            When to Use Abstract Factory
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>A system should be independent of how its products are created, composed, and represented</li>
            <li>A system should be configured with one of multiple families of products</li>
            <li>A family of related product objects is designed to be used together, and you need to enforce this constraint</li>
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
              In modern .NET applications, you often don't need Abstract Factory because <strong>Dependency Injection containers</strong> handle object creation and lifetime management. The DI container acts as a universal factory. However, Abstract Factory is still useful when you need to create families of related objects at runtime based on configuration or user input.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/factory-method" className="text-blue-600 dark:text-blue-400 hover:underline">Factory Method Pattern</Link> - Abstract Factory is often implemented using Factory Methods</li>
            <li><Link href="/design-patterns/singleton" className="text-blue-600 dark:text-blue-400 hover:underline">Singleton Pattern</Link> - Factory classes are often singletons</li>
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
