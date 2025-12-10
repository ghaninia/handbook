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
            What is Observer?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Observer pattern defines a one-to-many dependency between objects so that when one object (the subject) changes state, all its dependents (observers) are notified and updated automatically.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This pattern is the foundation of event-driven programming and is used extensively in UI frameworks, reactive programming, and messaging systems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Key Components
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Subject (Observable):</strong> Maintains a list of observers and notifies them of state changes</li>
            <li><strong>Observer:</strong> Defines an interface for objects that should be notified</li>
            <li><strong>ConcreteSubject:</strong> Stores state and sends notifications when state changes</li>
            <li><strong>ConcreteObserver:</strong> Implements the update interface to stay in sync with subject</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            C# Example: Stock Price Monitor
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Observer interface
public interface IStockObserver
{
    void Update(string stockSymbol, decimal price);
}

// Subject interface
public interface IStockSubject
{
    void Attach(IStockObserver observer);
    void Detach(IStockObserver observer);
    void Notify();
}

// Concrete Subject
public class Stock : IStockSubject
{
    private readonly List<IStockObserver> _observers = new();
    private decimal _price;
    
    public string Symbol { get; }
    
    public decimal Price
    {
        get => _price;
        set
        {
            if (_price != value)
            {
                _price = value;
                Notify();
            }
        }
    }
    
    public Stock(string symbol, decimal price)
    {
        Symbol = symbol;
        _price = price;
    }
    
    public void Attach(IStockObserver observer)
    {
        _observers.Add(observer);
    }
    
    public void Detach(IStockObserver observer)
    {
        _observers.Remove(observer);
    }
    
    public void Notify()
    {
        foreach (var observer in _observers)
        {
            observer.Update(Symbol, Price);
        }
    }
}

// Concrete Observers
public class StockDisplay : IStockObserver
{
    public string Name { get; }
    
    public StockDisplay(string name)
    {
        Name = name;
    }
    
    public void Update(string stockSymbol, decimal price)
    {
        Console.WriteLine($"[{Name}] {stockSymbol}: {price:C}");
    }
}

public class StockAlert : IStockObserver
{
    private readonly decimal _threshold;
    
    public StockAlert(decimal threshold)
    {
        _threshold = threshold;
    }
    
    public void Update(string stockSymbol, decimal price)
    {
        if (price > _threshold)
        {
            Console.WriteLine($"⚠️ ALERT: {stockSymbol} exceeded {_threshold:C}!");
        }
    }
}

// Usage
var appleStock = new Stock("AAPL", 150.00m);

var display = new StockDisplay("Main Screen");
var alert = new StockAlert(155.00m);

appleStock.Attach(display);
appleStock.Attach(alert);

appleStock.Price = 152.00m; // Display updates
appleStock.Price = 157.00m; // Display updates + Alert triggered!`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Using C# Events
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            C# has built-in support for the Observer pattern through events:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class StockEventArgs : EventArgs
{
    public string Symbol { get; }
    public decimal Price { get; }
    
    public StockEventArgs(string symbol, decimal price)
    {
        Symbol = symbol;
        Price = price;
    }
}

public class Stock
{
    private decimal _price;
    
    public event EventHandler<StockEventArgs>? PriceChanged;
    
    public string Symbol { get; }
    
    public decimal Price
    {
        get => _price;
        set
        {
            if (_price != value)
            {
                _price = value;
                OnPriceChanged();
            }
        }
    }
    
    public Stock(string symbol, decimal price)
    {
        Symbol = symbol;
        _price = price;
    }
    
    protected virtual void OnPriceChanged()
    {
        PriceChanged?.Invoke(this, new StockEventArgs(Symbol, Price));
    }
}

// Usage with events
var stock = new Stock("AAPL", 150.00m);

stock.PriceChanged += (sender, e) =>
{
    Console.WriteLine($"{e.Symbol} is now {e.Price:C}");
};

stock.Price = 160.00m; // Event is raised`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Using IObservable (Reactive Extensions)
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`using System.Reactive.Subjects;

public class StockPriceService
{
    private readonly Subject<(string Symbol, decimal Price)> _priceSubject = new();
    
    public IObservable<(string Symbol, decimal Price)> PriceStream 
        => _priceSubject;
    
    public void UpdatePrice(string symbol, decimal price)
    {
        _priceSubject.OnNext((symbol, price));
    }
}

// Usage with Rx
var service = new StockPriceService();

service.PriceStream
    .Where(p => p.Price > 100)
    .Subscribe(p => Console.WriteLine($"{p.Symbol}: {p.Price:C}"));

service.UpdatePrice("AAPL", 150.00m);`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Loose Coupling:</strong> Subject and observers are loosely coupled</li>
            <li><strong>Open/Closed:</strong> New observers can be added without modifying subject</li>
            <li><strong>Real-time Updates:</strong> Observers receive updates automatically</li>
            <li><strong>Broadcast:</strong> One-to-many communication is easy</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/domain-events" className="text-blue-600 dark:text-blue-400 hover:underline">Domain Events Pattern</Link></li>
            <li><Link href="/design-patterns/mediator" className="text-blue-600 dark:text-blue-400 hover:underline">Mediator Pattern</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/observer-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Observer Pattern
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
