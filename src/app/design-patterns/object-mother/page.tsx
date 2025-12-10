'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ObjectMotherPage() {
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
        Object Mother Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            What is Object Mother?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Object Mother یک factory pattern است که عمدتاً در تست‌نویسی استفاده می‌شود. اشیاء تست آماده برای استفاده فراهم می‌کند که باعث تمیزتر شدن تست‌ها و کاهش تکرار کد ایجاد اشیاء در تست‌ها می‌شود.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Object Mother کلاسی است که متدهای static factory برای ایجاد اشیاء در حالت معتبر برای تست فراهم می‌کند. ایجاد اشیاء تست را متمرکز می‌کند و تست‌ها را قابل نگهداری‌تر و خواناتر می‌سازد.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            The Problem
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              تست‌ها اغلب به اشیاء پیچیده با خصوصیات متعدد نیاز دارند. بدون Object Mother، کد راه‌اندازی تست تکراری و سخت برای نگهداری می‌شود.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Without Object Mother - duplicated setup in every test
[Test]
public void ShouldApplyDiscount_ForPremiumCustomer()
{
    var customer = new Customer
    {
        Id = 1,
        Name = "John Doe",
        Email = "john@example.com",
        Type = CustomerType.Premium,
        JoinDate = DateTime.Now.AddYears(-2),
        Address = new Address
        {
            Street = "123 Main St",
            City = "New York",
            PostalCode = "10001"
        }
    };
    
    // ... test code
}

// Same setup repeated in dozens of tests!`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Object Mother Implementation
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public static class CustomerMother
{
    public static Customer Default()
    {
        return new Customer
        {
            Id = 1,
            Name = "Test Customer",
            Email = "test@example.com",
            Type = CustomerType.Regular,
            JoinDate = DateTime.Now.AddMonths(-6),
            Address = AddressMother.Default()
        };
    }
    
    public static Customer Premium()
    {
        var customer = Default();
        customer.Type = CustomerType.Premium;
        customer.JoinDate = DateTime.Now.AddYears(-2);
        return customer;
    }
    
    public static Customer New()
    {
        var customer = Default();
        customer.JoinDate = DateTime.Now;
        return customer;
    }
    
    public static Customer WithName(string name)
    {
        var customer = Default();
        customer.Name = name;
        return customer;
    }
    
    public static Customer FromCity(string city)
    {
        var customer = Default();
        customer.Address = AddressMother.InCity(city);
        return customer;
    }
}

public static class AddressMother
{
    public static Address Default()
    {
        return new Address
        {
            Street = "123 Test Street",
            City = "Test City",
            PostalCode = "12345"
        };
    }
    
    public static Address InCity(string city)
    {
        var address = Default();
        address.City = city;
        return address;
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Clean Tests with Object Mother
          </h2>
          <div className="bg-green-50 dark:bg-green-900/20 border-r-4 border-green-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              تست‌ها خواناتر و متمرکز بر رفتار تحت تست می‌شوند.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`[Test]
public void ShouldApplyDiscount_ForPremiumCustomer()
{
    var customer = CustomerMother.Premium();
    var discount = _discountService.Calculate(customer);
    
    Assert.That(discount, Is.EqualTo(0.10m));
}

[Test]
public void ShouldNotApplyDiscount_ForNewCustomer()
{
    var customer = CustomerMother.New();
    var discount = _discountService.Calculate(customer);
    
    Assert.That(discount, Is.EqualTo(0));
}

[Test]
public void ShouldApplyLocalDelivery_ForLocalCustomers()
{
    var customer = CustomerMother.FromCity("New York");
    var delivery = _deliveryService.CalculateOptions(customer);
    
    Assert.That(delivery.HasLocalDelivery, Is.True);
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Combining with Builder Pattern
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Object Mother can be combined with the Builder pattern for more flexibility:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public static class CustomerMother
{
    public static CustomerBuilder Build() => new CustomerBuilder();
    
    public static Customer Default() => Build().Build();
    public static Customer Premium() => Build().AsPremium().Build();
}

public class CustomerBuilder
{
    private Customer _customer = new()
    {
        Id = 1,
        Name = "Test Customer",
        Email = "test@example.com",
        Type = CustomerType.Regular
    };
    
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
    
    public CustomerBuilder AsPremium()
    {
        _customer.Type = CustomerType.Premium;
        return this;
    }
    
    public Customer Build() => _customer;
}

// Usage - fluent and flexible
var customer = CustomerMother.Build()
    .WithName("Jane Doe")
    .AsPremium()
    .Build();`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>DRY:</strong> کد ایجاد object متمرکز شده است</li>
            <li><strong>Readability:</strong> هدف تست واضح‌تر است</li>
            <li><strong>Maintainability:</strong> تغییرات ساختار object فقط در یک جا نیاز به اعمال دارد</li>
            <li><strong>Consistency:</strong> همه تست‌ها از حالت‌های object معتبر یکسان استفاده می‌کنند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/builder" className="text-blue-600 dark:text-blue-400 hover:underline">Builder Pattern</Link></li>
            <li><Link href="/design-patterns/factory-method" className="text-blue-600 dark:text-blue-400 hover:underline">Factory Method Pattern</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/object-mother-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Object Mother Pattern
              </a>
            </li>
            <li>
              <a href="https://martinfowler.com/bliki/ObjectMother.html" target="_blank" rel="noopener" className="hover:underline">
                Martin Fowler - ObjectMother
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
