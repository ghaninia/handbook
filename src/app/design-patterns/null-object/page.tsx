'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NullObjectPage() {
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
        Null Object Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            What is Null Object?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Null Object pattern provides an object as a surrogate for the lack of an object of a given type. It provides intelligent do-nothing behavior, hiding the details from its collaborators.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Instead of using <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">null</code> references to represent the absence of an object, you use a special null object that implements the expected interface but does nothing or provides default values.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            The Problem with Null
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              Null references cause NullReferenceExceptions and require defensive null checks scattered throughout your code.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Without Null Object - defensive checks everywhere
public void ProcessCustomer(Customer customer)
{
    if (customer != null)
    {
        if (customer.Name != null)
        {
            Console.WriteLine($"Processing {customer.Name}");
        }
        if (customer.Address != null)
        {
            // Process address...
        }
    }
}

// This is error-prone and clutters the code`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            C# Example: Customer Null Object
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface ICustomer
{
    string Name { get; }
    bool IsNull { get; }
    void Pay(decimal amount);
}

public class Customer : ICustomer
{
    public string Name { get; }
    public bool IsNull => false;
    
    public Customer(string name)
    {
        Name = name;
    }
    
    public void Pay(decimal amount)
    {
        Console.WriteLine($"{Name} paid {amount:C}");
    }
}

// Null Object - implements same interface
public class NullCustomer : ICustomer
{
    // Static instance - flyweight pattern
    public static readonly NullCustomer Instance = new();
    
    private NullCustomer() { }
    
    public string Name => "Unknown Customer";
    public bool IsNull => true;
    
    public void Pay(decimal amount)
    {
        // Do nothing - intentionally empty
    }
}

// Alternative: static property on Customer class
public class Customer : ICustomer
{
    public static ICustomer NotFound => NullCustomer.Instance;
    
    // ... rest of implementation
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Usage Example
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class CustomerRepository
{
    private readonly Dictionary<int, ICustomer> _customers = new();
    
    // Never returns null - returns NullCustomer instead
    public ICustomer GetById(int id)
    {
        return _customers.TryGetValue(id, out var customer) 
            ? customer 
            : NullCustomer.Instance;
    }
}

// Clean client code - no null checks needed
public class OrderService
{
    private readonly CustomerRepository _repository;
    
    public void ProcessOrder(int customerId, decimal amount)
    {
        var customer = _repository.GetById(customerId);
        
        // No null check needed!
        Console.WriteLine($"Processing order for {customer.Name}");
        customer.Pay(amount);
        
        // Optional: check if we need special handling
        if (customer.IsNull)
        {
            LogWarning("Order processed for unknown customer");
        }
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Logger Example
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface ILogger
{
    void Log(string message);
    void LogError(Exception ex);
}

public class ConsoleLogger : ILogger
{
    public void Log(string message) 
        => Console.WriteLine($"[LOG] {message}");
    
    public void LogError(Exception ex) 
        => Console.WriteLine($"[ERROR] {ex.Message}");
}

public class NullLogger : ILogger
{
    public static readonly NullLogger Instance = new();
    
    private NullLogger() { }
    
    public void Log(string message) { }
    public void LogError(Exception ex) { }
}

// Usage - inject NullLogger when logging should be disabled
public class PaymentProcessor
{
    private readonly ILogger _logger;
    
    // Default to NullLogger if none provided
    public PaymentProcessor(ILogger? logger = null)
    {
        _logger = logger ?? NullLogger.Instance;
    }
    
    public void ProcessPayment(decimal amount)
    {
        _logger.Log($"Processing payment of {amount:C}");
        // Process payment...
        _logger.Log("Payment processed successfully");
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Eliminates null checks:</strong> Client code is cleaner and simpler</li>
            <li><strong>Prevents NullReferenceException:</strong> Methods can always be called safely</li>
            <li><strong>Polymorphism:</strong> Null objects work seamlessly with other implementations</li>
            <li><strong>Optional behavior:</strong> Easy to disable features without conditionals</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/null-object-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Null Object Pattern
              </a>
            </li>
            <li>
              <a href="https://app.pluralsight.com/library/courses/c-sharp-design-patterns-null-object" target="_blank" rel="noopener" className="hover:underline">
                Pluralsight - C# Design Patterns: Null Object
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
