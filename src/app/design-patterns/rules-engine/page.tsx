'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function RulesEnginePage() {
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
        Rules Engine Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            What is a Rules Engine?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Rules Engine الگویی است که قواعد تجاری را از منطق برنامه جدا می‌کند. به جای hard-code کردن منطق تجاری با conditionalها در سراسر کد، قواعد به عنوان کامپوننت‌های جداگانه و قابل استفاده مجدد تعریف می‌شوند که می‌توانند در runtime ارزیابی شوند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            این الگو به ویژه وقتی قواعد تجاری پیچیده، مکرراً تغییر می‌کنند یا نیاز به تنظیم توسط افراد غیربرنامه‌نویس دارند مفید است.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            The Problem
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              منطق تجاری پیچیده اغلب به کد spaghetti با conditionalهای تودرتو زیاد منجر می‌شود که تست و نگهداری‌شان سخت است.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Without Rules Engine - complex nested conditionals
public decimal CalculateDiscount(Order order, Customer customer)
{
    decimal discount = 0;
    
    if (customer.Type == CustomerType.Premium)
    {
        discount += 0.10m;
    }
    
    if (order.Total > 100)
    {
        discount += 0.05m;
    }
    
    if (customer.MemberSince < DateTime.Now.AddYears(-2))
    {
        discount += 0.02m;
    }
    
    if (order.Items.Count > 5)
    {
        discount += 0.03m;
    }
    
    // More and more rules...
    
    return Math.Min(discount, 0.25m);
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Rules Engine Implementation
          </h2>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            1. Define the Rule Interface
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface IDiscountRule
{
    bool IsApplicable(Order order, Customer customer);
    decimal GetDiscount(Order order, Customer customer);
    string RuleName { get; }
}

public class DiscountContext
{
    public Order Order { get; set; }
    public Customer Customer { get; set; }
    public decimal TotalDiscount { get; set; }
    public List<string> AppliedRules { get; set; } = new();
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            2. Implement Individual Rules
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class PremiumCustomerRule : IDiscountRule
{
    public string RuleName => "Premium Customer Discount";
    
    public bool IsApplicable(Order order, Customer customer)
        => customer.Type == CustomerType.Premium;
    
    public decimal GetDiscount(Order order, Customer customer)
        => 0.10m;
}

public class LargeOrderRule : IDiscountRule
{
    public string RuleName => "Large Order Discount";
    
    public bool IsApplicable(Order order, Customer customer)
        => order.Total > 100;
    
    public decimal GetDiscount(Order order, Customer customer)
        => 0.05m;
}

public class LoyalCustomerRule : IDiscountRule
{
    public string RuleName => "Loyal Customer Discount";
    
    public bool IsApplicable(Order order, Customer customer)
        => customer.MemberSince < DateTime.Now.AddYears(-2);
    
    public decimal GetDiscount(Order order, Customer customer)
        => 0.02m;
}

public class BulkItemsRule : IDiscountRule
{
    public string RuleName => "Bulk Items Discount";
    
    public bool IsApplicable(Order order, Customer customer)
        => order.Items.Count > 5;
    
    public decimal GetDiscount(Order order, Customer customer)
        => 0.03m;
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            3. Create the Rules Engine
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class DiscountRulesEngine
{
    private readonly IEnumerable<IDiscountRule> _rules;
    private readonly decimal _maxDiscount = 0.25m;
    
    public DiscountRulesEngine(IEnumerable<IDiscountRule> rules)
    {
        _rules = rules;
    }
    
    public DiscountContext Evaluate(Order order, Customer customer)
    {
        var context = new DiscountContext
        {
            Order = order,
            Customer = customer
        };
        
        foreach (var rule in _rules)
        {
            if (rule.IsApplicable(order, customer))
            {
                context.TotalDiscount += rule.GetDiscount(order, customer);
                context.AppliedRules.Add(rule.RuleName);
            }
        }
        
        context.TotalDiscount = Math.Min(context.TotalDiscount, _maxDiscount);
        
        return context;
    }
}

// Usage with DI
services.AddTransient<IDiscountRule, PremiumCustomerRule>();
services.AddTransient<IDiscountRule, LargeOrderRule>();
services.AddTransient<IDiscountRule, LoyalCustomerRule>();
services.AddTransient<IDiscountRule, BulkItemsRule>();
services.AddTransient<DiscountRulesEngine>();`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Single Responsibility:</strong> هر قاعده یک کلاس جداگانه و متمرکز است</li>
            <li><strong>Testability:</strong> قوانین می‌توانند به صورت جداگانه تست شوند</li>
            <li><strong>Extensibility:</strong> قوانین جدید بدون تغییر کد موجود قابل اضافه‌اند</li>
            <li><strong>Configurability:</strong> قوانین در runtime قابل فعال/غیرفعال کردن هستند</li>
            <li><strong>Readability:</strong> منطق تجاری صریح و با نام‌گذاری مناسب است</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/strategy" className="text-blue-600 dark:text-blue-400 hover:underline">Strategy Pattern</Link></li>
            <li><Link href="/design-patterns/specification" className="text-blue-600 dark:text-blue-400 hover:underline">Specification Pattern</Link></li>
            <li><Link href="/design-patterns/chain-of-responsibility" className="text-blue-600 dark:text-blue-400 hover:underline">Chain of Responsibility</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/rules-engine-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Rules Engine Pattern
              </a>
            </li>
            <li>
              <a href="https://martinfowler.com/bliki/RulesEngine.html" target="_blank" rel="noopener" className="hover:underline">
                Martin Fowler - Rules Engine
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
