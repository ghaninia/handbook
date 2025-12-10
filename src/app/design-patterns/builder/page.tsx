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
          ← بازگشت به الگوهای طراحی
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        الگوی Builder (سازنده)
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Builder چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Builder یک الگوی creational است، مشابه الگوی Factory. برخلاف الگوی Factory که معمولاً فقط یک متد برای ایجاد شیء ارائه می‌دهد، الگوی Builder <strong>چندین متد</strong> ارائه می‌دهد که می‌توان از آن‌ها برای تعریف تدریجی ویژگی‌های نوع مورد نظر استفاده کرد.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            این الگو رابط انعطاف‌پذیرتری نسبت به یک متد واحد با تعداد زیادی پارامتر یا یک شیء پارامتر پیچیده فراهم می‌کند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            ویژگی‌های یک Builder معمولی
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>نام‌گذاری به صورت <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">SomeTypeBuilder</code> برای نشان دادن استفاده از این الگو</li>
            <li>مقداردهی اولیه یک نمونه خصوصی ساده (یا پیش‌فرض) از SomeType هنگام ایجاد</li>
            <li>ارائه متدهایی که ویژگی‌های نمونه خصوصی SomeType را تنظیم می‌کنند
              <ul className="list-disc list-inside mr-6 mt-2">
                <li>هر متد <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">this</code>، یعنی نمونه Builder را برمی‌گرداند (رابط روان)</li>
              </ul>
            </li>
            <li>ارائه متد <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">Build()</code> یا <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">Create()</code> که نمونه خصوصی را برمی‌گرداند</li>
            <li>اختیاری: ارائه متدهای (static) برای دریافت پیکربندی‌های مشترک شناخته شده</li>
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
            الگوی Builder برای تست
          </h2>
          <div className="bg-green-50 dark:bg-green-900/20 border-r-4 border-green-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              الگوی Builder به‌ویژه در <strong>تست‌های واحد</strong> برای ایجاد test fixture ها مفید است. این الگو تست‌ها را خواناتر می‌کند و تکرار را هنگام ایجاد اشیاء پیچیده با خصوصیات زیاد کاهش می‌دهد.
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
            مطالب مرتبط
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/factory-method" className="text-blue-600 dark:text-blue-400 hover:underline">Factory Method Pattern</Link></li>
            <li><Link href="/design-patterns/object-mother" className="text-blue-600 dark:text-blue-400 hover:underline">Object Mother Pattern</Link></li>
            <li><Link href="/testing" className="text-blue-600 dark:text-blue-400 hover:underline">Testing Overview</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
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
