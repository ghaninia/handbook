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
            What is Builder?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Builder design pattern is a creational pattern, similar to the Factory pattern. Unlike the Factory pattern, which typically only offers one method for creating an object, the Builder pattern offers <strong>multiple methods</strong> that can be used to gradually define the characteristics of the type to be created.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This provides a more flexible interface than a single method with a large number of parameters or a complex parameter object.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Characteristics of a Typical Builder
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>Named <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">SomeTypeBuilder</code> to communicate the use of the pattern</li>
            <li>Initializes a simple (or default) private instance of SomeType upon construction</li>
            <li>Exposes methods that set properties on the private SomeType instance
              <ul className="list-disc list-inside mr-6 mt-2">
                <li>Each method returns <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">this</code>, the Builder instance (fluent interface)</li>
              </ul>
            </li>
            <li>Exposes a <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">Build()</code> or <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">Create()</code> method that returns the private instance</li>
            <li>Optionally, expose (static) methods for getting known common configurations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            C# Example
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
    
    public AddressBuilder WithCity(string city)
    {
        _address.City = city;
        return this;
    }
    
    public AddressBuilder WithState(string state)
    {
        _address.State = state;
        return this;
    }
    
    public AddressBuilder WithZipCode(string zipCode)
    {
        _address.ZipCode = zipCode;
        return this;
    }
    
    public AddressBuilder WithCountry(string country)
    {
        _address.Country = country;
        return this;
    }
    
    public Address Build()
    {
        return _address;
    }
    
    // Static method for common configuration
    public static AddressBuilder Default()
    {
        return new AddressBuilder()
            .WithCountry("USA")
            .WithState("OH");
    }
}

// Usage
var address = new AddressBuilder()
    .WithStreet("123 Main St")
    .WithCity("Cleveland")
    .WithState("OH")
    .WithZipCode("44101")
    .WithCountry("USA")
    .Build();

// Or using default configuration
var defaultAddress = AddressBuilder.Default()
    .WithStreet("456 Oak Ave")
    .WithCity("Columbus")
    .WithZipCode("43215")
    .Build();`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Builder Pattern for Testing
          </h2>
          <div className="bg-green-50 dark:bg-green-900/20 border-r-4 border-green-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The Builder pattern is especially useful in <strong>unit tests</strong> for creating test fixtures. It makes tests more readable and reduces duplication when creating complex objects with many properties.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Test builder example
public class CustomerBuilder
{
    private Customer _customer = new Customer();
    
    public CustomerBuilder WithId(int id)
    {
        _customer.Id = id;
        return this;
    }
    
    public CustomerBuilder WithName(string name)
    {
        _customer.Name = name;
        return this;
    }
    
    public CustomerBuilder WithEmail(string email)
    {
        _customer.Email = email;
        return this;
    }
    
    public CustomerBuilder WithVipStatus()
    {
        _customer.IsVip = true;
        return this;
    }
    
    public Customer Build() => _customer;
    
    // Test-specific helper
    public static Customer CreateDefaultCustomer()
    {
        return new CustomerBuilder()
            .WithId(1)
            .WithName("Test Customer")
            .WithEmail("test@example.com")
            .Build();
    }
}

// In tests
[Fact]
public void VipCustomers_GetDiscount()
{
    var customer = new CustomerBuilder()
        .WithName("VIP User")
        .WithVipStatus()
        .Build();
    
    var discount = _discountService.CalculateDiscount(customer);
    
    Assert.Equal(0.2m, discount);
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            See Also
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/factory-method" className="text-blue-600 dark:text-blue-400 hover:underline">Factory Method Pattern</Link></li>
            <li><Link href="/design-patterns/object-mother" className="text-blue-600 dark:text-blue-400 hover:underline">Object Mother Pattern</Link></li>
            <li><Link href="/testing" className="text-blue-600 dark:text-blue-400 hover:underline">Testing Overview</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/builder-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Builder Pattern
              </a>
            </li>
            <li>
              <a href="https://www.pluralsight.com/courses/patterns-library" target="_blank" rel="noopener" className="hover:underline">
                Pluralsight - Design Patterns Library
              </a>
            </li>
            <li>
              <a href="https://github.com/ardalis/BuilderTestSample" target="_blank" rel="noopener" className="hover:underline">
                GitHub - Using Builder in C# Unit Tests Kata
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
