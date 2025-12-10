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
            What is Factory Method?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Factory Method pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This pattern is useful when you need to create objects without specifying the exact class of object that will be created. It promotes loose coupling by eliminating the need to bind application-specific classes into your code.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            When to Use Factory Method
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>A class can't anticipate the class of objects it must create</li>
            <li>A class wants its subclasses to specify the objects it creates</li>
            <li>You want to localize the knowledge of which class gets created</li>
            <li>You want to provide a library of objects without exposing implementation</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            C# Example
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Product interface
public interface INotification
{
    void Send(string message);
}

// Concrete products
public class EmailNotification : INotification
{
    public void Send(string message)
    {
        Console.WriteLine($"Sending Email: {message}");
    }
}

public class SmsNotification : INotification
{
    public void Send(string message)
    {
        Console.WriteLine($"Sending SMS: {message}");
    }
}

public class PushNotification : INotification
{
    public void Send(string message)
    {
        Console.WriteLine($"Sending Push: {message}");
    }
}

// Creator abstract class with factory method
public abstract class NotificationFactory
{
    // Factory method
    public abstract INotification CreateNotification();
    
    // Business logic that uses the factory method
    public void Notify(string message)
    {
        var notification = CreateNotification();
        notification.Send(message);
    }
}

// Concrete creators
public class EmailNotificationFactory : NotificationFactory
{
    public override INotification CreateNotification()
    {
        return new EmailNotification();
    }
}

public class SmsNotificationFactory : NotificationFactory
{
    public override INotification CreateNotification()
    {
        return new SmsNotification();
    }
}

// Usage
public class Application
{
    public void SendNotification(string type, string message)
    {
        NotificationFactory factory = type switch
        {
            "email" => new EmailNotificationFactory(),
            "sms" => new SmsNotificationFactory(),
            _ => throw new ArgumentException("Unknown notification type")
        };
        
        factory.Notify(message);
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Static Factory Method
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            A common variation is the static factory method, which is a static method that returns an instance:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class Money
{
    public decimal Amount { get; }
    public string Currency { get; }
    
    private Money(decimal amount, string currency)
    {
        Amount = amount;
        Currency = currency;
    }
    
    // Static factory methods
    public static Money Dollars(decimal amount) 
        => new Money(amount, "USD");
    
    public static Money Euros(decimal amount) 
        => new Money(amount, "EUR");
    
    public static Money FromCurrency(decimal amount, string currency) 
        => new Money(amount, currency);
}

// Usage - more readable than constructors
var price = Money.Dollars(99.99m);
var shipping = Money.Euros(15.00m);`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Single Responsibility:</strong> Creation code is separated from business logic</li>
            <li><strong>Open/Closed Principle:</strong> New types can be added without changing existing code</li>
            <li><strong>Loose Coupling:</strong> Client code doesn't depend on concrete classes</li>
            <li><strong>Testability:</strong> Easy to mock and test</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/abstract-factory" className="text-blue-600 dark:text-blue-400 hover:underline">Abstract Factory Pattern</Link></li>
            <li><Link href="/design-patterns/builder" className="text-blue-600 dark:text-blue-400 hover:underline">Builder Pattern</Link></li>
            <li><Link href="/design-patterns/strategy" className="text-blue-600 dark:text-blue-400 hover:underline">Strategy Pattern</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/factory-method-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Factory Method Pattern
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
