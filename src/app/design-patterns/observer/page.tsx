'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ObserverPage() {
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
        Observer Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Observer Pattern چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Observer یک fundamental design pattern در software development است که communication بین object ها را به شکلی تسهیل می‌کند که loose coupling و flexibility را promote می‌کند. در این الگو، یک subject فهرستی از observer ها را maintain می‌کند که به طور خودکار از هر تغییری در state subject اطلاع داده می‌شوند. این به observer ها اجازه می‌دهد که به تغییرات react کنند بدون اینکه subject نیاز داشته باشد جزئیات خاصی در مورد observer ها بداند. معمولاً در event-driven system ها، GUI framework ها، و real-time application ها استفاده می‌شود، الگوی Observer maintainability و scalability را enhance می‌کند در حالی که dynamic relationship ها بین component ها را enable می‌کند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            چگونه کار می‌کند
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Observer دارای component های کلیدی زیر است:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Subject:</strong> component مرکزی که observer ها را hold و manage می‌کند</li>
            <li><strong>Observer:</strong> interface یا abstract class برای implement کردن observer ها</li>
            <li><strong>ConcreteSubject:</strong> implementation خاص subject که شامل state است</li>
            <li><strong>ConcreteObserver:</strong> implementation خاص observer که به state change ها react می‌کند</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            در context یک eCommerce application، این component ها می‌توانند به این شکل represent شوند:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mt-4">
            <li><strong>Subject:</strong> یک Product class که stock information را maintain می‌کند</li>
            <li><strong>Observer:</strong> یک Observer interface با method Update()</li>
            <li><strong>ConcreteSubject:</strong> یک ConcreteProduct class که Product class را implement می‌کند و stock level را track می‌کند</li>
            <li><strong>ConcreteObserver:</strong> یک Customer class که Observer interface را implement می‌کند و stock notification ها را receive می‌کند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال: Product Stock
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            در این مثال، یک customer می‌خواهد بداند که چه زمانی shipment جدیدی از یک product می‌رسد. این چیزی است که به نظر می‌رسد:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li>customer برای stock alert ها از طریق StockService subscribe می‌کند</li>
            <li>StockService، customer را به product attach می‌کند</li>
            <li>وقتی product stock تغییر می‌کند (مثلاً shipment جدیدی می‌رسد)، StockService customer ها را notify می‌کند</li>
            <li>Customer ها notification را receive می‌کنند و سپس می‌توانند انتخاب کنند که product را purchase کنند</li>
          </ol>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            در مثال eCommerce الگوی Observer که بحث کردیم، observer ها customer هایی هستند که برای receive کردن notification هایی در مورد stock status product subscribe کرده‌اند. در اینجا breakdown role ها است:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Subject:</strong> Product که stock status خود را maintain می‌کند و observer ها را وقتی تغییراتی هست notify می‌کند (مثلاً stock available می‌شود)</li>
            <li><strong>Observer:</strong> Customer که برای stock alert ها subscribe می‌کند. آنها می‌خواهند وقتی product دوباره in stock شد notify شوند</li>
            <li><strong>Notification Mechanism:</strong> StockService به عنوان intermediary عمل می‌کند که relationship بین Product و Customer ها را manage می‌کند. subscription process و همچنین notify کردن تمام observer ها (customer ها) وقتی stock product تغییر می‌کند را handle می‌کند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Use Case های الگوی Observer
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            اینها برخی use case های رایج برای الگوی observer هستند:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Event Handling Systems:</strong> GUI framework ها اغلب از الگوی Observer برای handle کردن user interaction ها استفاده می‌کنند</li>
            <li><strong>Data Binding:</strong> در application هایی که data model ها نیاز به synchronized شدن با view ها دارند (مانند در MVC architecture ها)</li>
            <li><strong>Real-Time Notifications:</strong> system هایی که component های متعددی نیاز به notify شدن از state change ها دارند، مانند chat application ها یا stock ticker ها</li>
            <li><strong>Publish-Subscribe Systems:</strong> messaging system هایی که publisher ها message ها را به subscriber های متعدد ارسال می‌کنند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایای الگوی Observer
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            اینها برخی مزایای الگوی Observer هستند.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Loose Coupling:</strong> subject و observer ها loosely coupled هستند، یعنی subject نیازی ندارد جزئیات observer هایش را بداند. این flexibility و maintainability را enhance می‌کند</li>
            <li><strong>Dynamic Relationships:</strong> observer ها می‌توانند در runtime اضافه یا حذف شوند که امکان dynamic relationship ها و قابلیت modify کردن behavior بدون تغییر subject را فراهم می‌کند</li>
            <li><strong>Consistency:</strong> الگوی Observer کمک می‌کند تضمین کند که همه observer ها update ها را receive کنند و با state subject consistent باقی بمانند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نکات منفی الگوی Observer
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            اینها برخی از نکات منفی هستند که با الگوی Observer دیده می‌شوند:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Memory Leaks:</strong> اگر observer ها به درستی remove نشوند، می‌تواند منجر به memory leak شود، خاصه در environment هایی که long-lived subject ها وجود دارند</li>
            <li><strong>Complexity:</strong> می‌تواند complexity اضافی معرفی کند، چون relationship بین subject ها و observer ها ممکن است سخت برای trace و manage شدن باشد همانطور که system رشد می‌کند</li>
            <li><strong>Performance Concerns:</strong> اگر observer های زیادی باشند، notify کردن همه آنها می‌تواند performance overhead داشته باشد، خاصه اگر observer ها زمان زیادی برای process کردن update ها بگیرند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال C# Implementation
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Observer interface
public interface IObserver
{
    void Update(string message);
}

// Subject interface  
public interface ISubject
{
    void Attach(IObserver observer);
    void Detach(IObserver observer);
    void Notify();
}

// Concrete Subject
public class Product : ISubject
{
    private readonly List<IObserver> _observers = new();
    private bool _inStock;
    
    public string Name { get; }
    
    public bool InStock
    {
        get => _inStock;
        set
        {
            if (_inStock != value)
            {
                _inStock = value;
                Notify();
            }
        }
    }
    
    public Product(string name)
    {
        Name = name;
    }
    
    public void Attach(IObserver observer)
    {
        _observers.Add(observer);
    }
    
    public void Detach(IObserver observer)
    {
        _observers.Remove(observer);
    }
    
    public void Notify()
    {
        string message = InStock 
            ? $"{Name} is now in stock!" 
            : $"{Name} is out of stock.";
            
        foreach (var observer in _observers)
        {
            observer.Update(message);
        }
    }
}

// Concrete Observer
public class Customer : IObserver
{
    public string Name { get; }
    
    public Customer(string name)
    {
        Name = name;
    }
    
    public void Update(string message)
    {
        Console.WriteLine($"[{Name}] Notification: {message}");
    }
}

// Usage
var iPhone = new Product("iPhone 15");
var john = new Customer("John");
var sarah = new Customer("Sarah");

iPhone.Attach(john);
iPhone.Attach(sarah);

iPhone.InStock = true;  // Both customers get notified
iPhone.InStock = false; // Both customers get notified again`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوهای مرتبط
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/mediator" className="text-blue-600 dark:text-blue-400 hover:underline">Mediator Pattern</Link> - مکمل Observer برای centralized communication</li>
            <li><Link href="/design-patterns/domain-events" className="text-blue-600 dark:text-blue-400 hover:underline">Domain Events Pattern</Link> - شکل خاصی از Observer در domain</li>
            <li><Link href="/design-patterns/strategy" className="text-blue-600 dark:text-blue-400 hover:underline">Strategy Pattern</Link> - هر دو runtime behavior را enable می‌کنند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="#" className="hover:underline">
                Head First Design Patterns
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
