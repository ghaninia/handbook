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
            Rules Engine Pattern چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Rules Engine به عنوان یک behavioral design pattern طبقه‌بندی می‌شود، همانطور که در کتاب Design Patterns توسط Gang of Four ذکر شده است. این pattern، design pattern ای است که به developer ها اجازه می‌دهد complex business rule ها را خارج از main application code تعریف و manage کنند. logic ارزیابی این rule ها و apply کردن آنها به data را encapsulate می‌کند، که modify و maintain کردن rule ها را بدون تأثیر روی underlying code آسان‌تر می‌کند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Rules Engine سه component دارد - rules engine، collection از rule ها، و input ای که rule ها باید روی آن اعمال شوند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            یک rules engine مجموعه‌ای از rule ها را process می‌کند و rule ها را برای generate کردن result اعمال می‌کند. یک rule، condition را describe می‌کند و ممکن است value محاسبه کند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال‌های کاربردی
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            مثالی از چیزی که از rules engine استفاده می‌کند، email client شما می‌تواند باشد. اگر email client شما اجازه setup کردن automatic handling email را می‌دهد - مانند filtering email ها تا بتوانید message هایی با subject یا sender خاص را به folder منتقل کنید، به احتمال زیاد از rules engine استفاده می‌کند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            مثال دیگری از rules engine زمانی است که online خرید می‌کنید. به فروشگاه‌هایی فکر کنید که 25% تخفیف روی محصولات category خاصی، item های individual در حراج، و همچنین تخفیف برای free shipping اگر سفارش به value خاصی برسد دارند. 25% تخفیف روی محصولات category خاص یک rule است. Item های individual در حراج rule های جداگانه هستند. تخفیف برای free shipping rule دیگری است. rules engine می‌داند چگونه rule ها را handle کند، prioritizing rule ها، و generate کردن cart total ها برای online shopping transaction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایای استفاده از Rules Engine
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            اینها برخی از مزایای استفاده از این approach هستند:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li><strong>Improved maintainability:</strong> Rule ها می‌توانند به راحتی اضافه، modify، یا remove شوند بدون تغییر core application code.</li>
            <li><strong>Increased flexibility:</strong> Business rule ها می‌توانند به changing requirement ها adapt شوند بدون نیاز به redeployment کل application.</li>
            <li><strong>Enhanced reusability:</strong> Rule ها می‌توانند across different application ها و domain ها shared و reused شوند.</li>
            <li><strong>Clearer separation of concerns:</strong> Business logic از application code جدا است، که code را maintainable تر و easier to understand می‌کند.</li>
            <li><strong>Centralized management:</strong> Rule ها در مکان centralized manage می‌شوند، که better control و visibility روی business logic فراهم می‌کند.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Class های الگوی Rules Engine
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 mb-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 text-sm">
              <li><strong>RulesEngine</strong> - RulesCollection</li>
              <li><strong>Rule</strong> - +Evaluate(), +IsMatch(Context context) : // optional</li>
              <li><strong>AbstractRule</strong> - «interface»</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Sample Logic که از Rules Engine Pattern بهره می‌برد
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            این sample logic برای rules engine pattern با استفاده از online shop است:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li>تمام کتاب‌های Technology category، 25% تخفیف دارند.</li>
            <li>تمام کتاب‌های Publisher A همچنین deal 20% تخفیف دارند.</li>
            <li>تمام کتاب‌های released این ماه و این سال با 15% تخفیف در حراج هستند.</li>
            <li>مشتریانی که به newsletter ما subscribe شده‌اند ممکن است special custom discount count برای loyalty خود 30% تخفیف داشته باشند.</li>
            <li>اگر cart دارای discount code FREESHIP باشد، آنگاه shipping رایگان است.</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            اگر فکر می‌کنید می‌خواهید این را به عنوان یک سری از if statement ها process کنید، این یک option است. اما الگوی Rules Engine ممکن است منطقی‌تر باشد.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Refactoring Guidance برای این Pattern
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            اگر logic مشابه بالا با یک سری از if statement ها برای processing دارید، می‌توانید code خود را به سمت Rule Engine pattern refactor کنید با استفاده از این step ها:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li>Individual if condition ها را به method ها extract کنید.</li>
            <li>Method ها را به rule ها convert کنید.</li>
            <li>Rules Engine را برای evaluate کردن rule ها ایجاد کنید.</li>
            <li>Old if stack را با call به Rules Engine replace کنید.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Guidance برای Rules در Rules Engine
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            اینها برخی نکات کلیدی در مورد rule ها هستند:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li>هر rule باید از Single Responsibility Principle پیروی کند.</li>
            <li>برای اطمینان از اینکه rule از Single Responsibility Principle پیروی می‌کند، KISS Principle را در نظر داشته باشید. Keep it simple!</li>
            <li>Rule ها ممکن است ordered، filtered، یا aggregated شوند به as necessary.</li>
            <li>Rules engine تعیین می‌کند چگونه rule ها را process کند.</li>
            <li>Logic برای تعیین priority های rule ها درون rules engine زندگی می‌کند.</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            هنگام implementing rules engine:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>Rules collection را در engine constructor accept کنید.</li>
            <li>Rule ها را به given input اعمال کنید - یک context یا system state.</li>
            <li>Rule ها را در order مناسب برای business logic apply، aggregate، و filter کنید.</li>
            <li>اجازه دهید rule ها و set های rule ها از طریق method ها swapped شوند.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال Implementation
          </h2>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            تعریف Rule Interface
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface IRule<T>
{
    bool IsMatch(T context);
    void Execute(T context);
    string RuleName { get; }
    int Priority { get; }
}

public abstract class AbstractRule<T> : IRule<T>
{
    public abstract bool IsMatch(T context);
    public abstract void Execute(T context);
    public abstract string RuleName { get; }
    public virtual int Priority => 0;
}

public class ShoppingContext
{
    public List<Product> Cart { get; set; } = new();
    public Customer Customer { get; set; }
    public decimal TotalDiscount { get; set; }
    public bool FreeShipping { get; set; }
    public List<string> AppliedRules { get; set; } = new();
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            Individual Rule های Implementation
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Technology books 25% off rule
public class TechnologyBookDiscountRule : AbstractRule<ShoppingContext>
{
    public override string RuleName => "Technology Books 25% Off";
    public override int Priority => 1;
    
    public override bool IsMatch(ShoppingContext context)
    {
        return context.Cart.Any(p => p.Category == "Technology" && p.Type == "Book");
    }
    
    public override void Execute(ShoppingContext context)
    {
        var techBooks = context.Cart.Where(p => p.Category == "Technology" && p.Type == "Book");
        var discount = techBooks.Sum(b => b.Price * 0.25m);
        context.TotalDiscount += discount;
        context.AppliedRules.Add(RuleName);
    }
}

// Newsletter subscriber loyalty discount rule
public class NewsletterLoyaltyRule : AbstractRule<ShoppingContext>
{
    public override string RuleName => "Newsletter Subscriber 30% Off";
    public override int Priority => 3;
    
    public override bool IsMatch(ShoppingContext context)
    {
        return context.Customer.IsNewsletterSubscriber && context.Customer.LoyaltyDiscount > 0;
    }
    
    public override void Execute(ShoppingContext context)
    {
        context.TotalDiscount += context.Customer.LoyaltyDiscount;
        context.AppliedRules.Add(RuleName);
    }
}

// Free shipping rule
public class FreeShippingRule : AbstractRule<ShoppingContext>
{
    public override string RuleName => "Free Shipping";
    public override int Priority => 2;
    
    public override bool IsMatch(ShoppingContext context)
    {
        return context.Cart.Any(p => p.DiscountCode == "FREESHIP");
    }
    
    public override void Execute(ShoppingContext context)
    {
        context.FreeShipping = true;
        context.AppliedRules.Add(RuleName);
    }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            Rules Engine ایجاد کنید
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class RulesEngine<T>
{
    private readonly List<IRule<T>> _rules;
    
    public RulesEngine(IEnumerable<IRule<T>> rules)
    {
        _rules = rules.OrderBy(r => r.Priority).ToList();
    }
    
    public void ProcessRules(T context)
    {
        foreach (var rule in _rules)
        {
            if (rule.IsMatch(context))
            {
                rule.Execute(context);
            }
        }
    }
    
    public void AddRule(IRule<T> rule)
    {
        _rules.Add(rule);
        _rules.Sort((x, y) => x.Priority.CompareTo(y.Priority));
    }
    
    public void RemoveRule(string ruleName)
    {
        _rules.RemoveAll(r => r.RuleName == ruleName);
    }
}

// Usage
var shoppingRules = new List<IRule<ShoppingContext>>
{
    new TechnologyBookDiscountRule(),
    new NewsletterLoyaltyRule(),
    new FreeShippingRule()
};

var engine = new RulesEngine<ShoppingContext>(shoppingRules);
var context = new ShoppingContext
{
    Cart = customerCart,
    Customer = currentCustomer
};

engine.ProcessRules(context);

// Results available in context
Console.WriteLine($"Total Discount: {context.TotalDiscount:C}");
Console.WriteLine($"Free Shipping: {context.FreeShipping}");
Console.WriteLine($"Applied Rules: {string.Join(", ", context.AppliedRules)}");`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوهای مرتبط
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Specification Pattern</strong> - separate query logic از application شما</li>
            <li><Link href="/design-patterns/chain-of-responsibility" className="text-blue-600 dark:text-blue-400 hover:underline">Chain of Responsibility</Link> - برای sequencing rule ها برای processing استفاده می‌شود</li>
            <li><Link href="/design-patterns/strategy" className="text-blue-600 dark:text-blue-400 hover:underline">Strategy Pattern</Link> - rule execution strategy ها را encapsulate می‌کند</li>
            <li><strong>Command</strong> - rule action ها را به عنوان discrete command ها برای testability و separation of concerns encapsulate می‌کند</li>
            <li><Link href="/design-patterns/mediator" className="text-blue-600 dark:text-blue-400 hover:underline">Mediator Pattern</Link> - به عنوان orchestrator بین Rules Engine و dependent component هایش عمل می‌کند</li>
            <li><Link href="/design-patterns/observer" className="text-blue-600 dark:text-blue-400 hover:underline">Observer Pattern</Link> - می‌تواند برای notify کردن parties زمانی که rule ها triggered یا applied می‌شوند استفاده شود</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            سوالات متداول
          </h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              <strong>❓ آیا Open Closed principle را نقض می‌کند اگر rule، value ای return کند که شامل extra information باشد؟ من combination از First match و aggregation دارم.</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm mt-2">
              نه احتمالاً خوب است. اگر engine code شما خیلی complex شد شاید type هایی representing different kind های rule ها و/یا result هایشان ایجاد کنید که به شما اجازه Replace Conditional with Polymorphism دهند.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              <strong>❓ در case ordered rule ها، آیا اشتباه است که contextual information را از یک rule به بعدی pass (و تغییر) دهیم؟</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm mt-2">
              این اشتباه نیست، اما Chain of Responsibility ممکن است better fit باشد.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="#" className="hover:underline">
                C# Design Patterns: Rules Engine Pattern (Pluralsight)
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Use the Decorator, Mediator, and Chain of Responsibility Patterns in C#
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
