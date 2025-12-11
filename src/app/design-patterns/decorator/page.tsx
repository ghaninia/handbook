'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DecoratorPage() {
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
        Decorator Design Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوی Decorator چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی طراحی Decorator یک الگوی structural است که برای افزودن functionalities جدید به object ها به طور dynamic بدون تغییر structure آنها استفاده می‌شود. این الگو بر یک کلاس decorator متکی است که کلاس اصلی را wrap می‌کند و با interface آن match می‌کند، در حالی که behavior اضافی قبل یا بعد از delegate call به method کلاس اصلی فراهم می‌کند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            این الگو راهی عالی برای پیروی از Single Responsibility Principle است، زیرا cross-cutting concern هایی مانند Logging، Validation، Authorization check ها، و موارد دیگر را می‌توان از یک کلاس خارج کرد و به یک کلاس decorator با مسئولیت واحد منتقل کرد. این همچنین به دستیابی به Open-Closed Principle کمک می‌کند، زیرا functionality جدید می‌تواند به کلاس‌های موجود (بدون modify کردن آنها) از طریق استفاده از decorator ها اضافه شود.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            چه زمانی از آن استفاده کنیم
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی طراحی Decorator یک ابزار همه‌کاره در توسعه نرم‌افزار است که امکان extension dynamic رفتار object بدون تغییر structure آن را فراهم می‌کند. این‌ها سناریوهای کلیدی هستند که به ویژه مفید است:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Adding Responsibilities Dynamically:</strong> زمانی که نیاز دارید responsibility های اضافی را به object ها در runtime بدون تأثیر بر object های دیگر اضافه کنید</li>
            <li><strong>Modular and Reusable Extensions:</strong> زمانی که می‌خواهید functionality هایی ایجاد کنید که می‌توانند بدون تغییر کلاس‌های آن object ها به object ها اعمال شوند و extension ها را modular و reusable در سناریوهای مختلف کنند</li>
            <li><strong>Avoiding Subclass Explosion:</strong> اگر extending functionality از طریق subclassing منجر به تعداد بیش از حد کلاس‌ها شود، الگوی Decorator می‌تواند با اجازه دادن به ترکیب behavior ها این پیچیدگی را مدیریت کند</li>
            <li><strong>Extension Without Modification:</strong> در موقعیت‌هایی که modify کردن کلاس اصلی به دلیل محدودیت‌هایی مانند access level ها یا زمانی که کلاس بخشی از کتابخانه‌ای است که کنترل ندارید، امکان‌پذیر نیست</li>
            <li><strong>Conditional Behavior Addition:</strong> زمانی که behavior نیاز به اضافه شدن به object ها فقط تحت شرایط یا context های خاصی دارد</li>
            <li><strong>Enhancing Legacy Code:</strong> برای تقویت یا اصلاح legacy code که تغییر codebase اصلی پرخطر یا غیرعملی است</li>
            <li><strong>Compliance and Logging:</strong> در سناریوهایی که نیاز به compliance، logging، یا audit trail دارند</li>
            <li><strong>Validation and Security:</strong> برای اضافه کردن validation، authentication، یا لایه‌های امنیتی دیگر</li>
            <li><strong>Flexible Alternative to Inheritance:</strong> زمانی که inheritance خیلی rigid است یا برای اضافه کردن functionality ها مناسب نیست</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال C#: Book Service با Logging و Validation
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            <strong>سرویس اصلی:</strong>
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface IBookService
{
    void AddBook(Book book);
}

public class BookService : IBookService
{
    private readonly IBookRepository _repository;
    
    public BookService(IBookRepository repository)
    {
        _repository = repository;
    }
    
    public void AddBook(Book book)
    {
        _repository.Add(book);
    }
}`}</pre>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            <strong>Logging Decorator:</strong>
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`using System.Diagnostics;

public class LoggingBookServiceDecorator : IBookService
{
    private readonly IBookService _decoratedBookService;
    private readonly ILogger<LoggingBookServiceDecorator> _logger;
    
    public LoggingBookServiceDecorator(
        IBookService decoratedBookService, 
        ILogger<LoggingBookServiceDecorator> logger)
    {
        _decoratedBookService = decoratedBookService;
        _logger = logger;
    }
    
    public void AddBook(Book book)
    {
        _logger.LogInformation($"Adding a book: {book}");
        var stopwatch = Stopwatch.StartNew();
        
        _decoratedBookService.AddBook(book);
        
        stopwatch.Stop();
        _logger.LogInformation(
            $"Book {book} added in {stopwatch.ElapsedMilliseconds} ms.");
    }
}`}</pre>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            <strong>Validation Decorator با FluentValidation:</strong>
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`using FluentValidation;

public class ValidationBookServiceDecorator : IBookService
{
    private readonly IBookService _decoratedBookService;
    private readonly IEnumerable<IValidator<Book>> _validators;
    
    public ValidationBookServiceDecorator(
        IBookService decoratedBookService, 
        IEnumerable<IValidator<Book>> validators)
    {
        _decoratedBookService = decoratedBookService;
        _validators = validators;
    }
    
    public void AddBook(Book book)
    {
        var context = new ValidationContext<Book>(book);
        var failures = _validators
            .Select(v => v.Validate(context))
            .SelectMany(result => result.Errors)
            .Where(f => f != null)
            .ToList();
        
        if (failures.Any())
        {
            throw new ValidationException(failures);
        }
        
        _decoratedBookService.AddBook(book);
    }
}`}</pre>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            <strong>ثبت سرویس‌ها در DI Container:</strong>
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// In Program.cs
services.AddScoped<IBookRepository, BookRepository>();
services.AddSingleton<IValidator<Book>, BookValidator>();
services.AddScoped<BookService>();

services.AddScoped<IBookService>(provider => 
{
    var baseService = provider.GetRequiredService<BookService>();
    var validators = provider.GetRequiredService<IEnumerable<IValidator<Book>>>();
    
    // First wrap with validation
    var validationDecorator = new ValidationBookServiceDecorator(
        baseService, validators);
    
    // Then wrap with logging
    var logger = provider.GetRequiredService<ILogger<LoggingBookServiceDecorator>>();
    return new LoggingBookServiceDecorator(validationDecorator, logger);
});`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال C#
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Decorator را در یک application .NET پیاده‌سازی می‌کنیم. با یک BookService پایه شروع می‌کنیم که کتابی را به repository اضافه می‌کند. سپس decorator هایی برای logging با stopwatch/timer و برای validate کردن کتاب با FluentValidation اضافه می‌کنیم.
          </p>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Underlying Service</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface IBookService
{
    void AddBook(Book book);
}

public class BookService : IBookService
{
    private readonly IBookRepository _repository;

    public BookService(IBookRepository repository)
    {
        _repository = repository;
    }

    public void AddBook(Book book)
    {
        _repository.Add(book);
    }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Logging Decorator را پیاده‌سازی کنیم</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`using System.Diagnostics;

public class LoggingBookServiceDecorator : IBookService
{
    private readonly IBookService _decoratedBookService;
    private readonly ILogger<LoggingBookServiceDecorator> _logger;

    public LoggingBookServiceDecorator(IBookService decoratedBookService, 
        ILogger<LoggingBookServiceDecorator> logger)
    {
        _decoratedBookService = decoratedBookService;
        _logger = logger;
    }

    public void AddBook(Book book)
    {
        _logger.LogInformation($"Adding a book: {book}", book);
        var stopwatch = Stopwatch.StartNew();
        _decoratedBookService.AddBook(book);
        stopwatch.Stop();
        _logger.LogInformation($"Book {book} added in {stopwatch.ElapsedMilliseconds} ms.", book);
    }
}

public class Book
{
    public string Title {get; set;} = string.Empty;
    public string Author {get; set;} = string.Empty;
    public decimal Price {get; set;}

    public override string ToString()
    {
        return $"{Title} by {Author} for $\{Price.ToString("F2")}";
    }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Validation Decorator</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`using FluentValidation;
using System.Collections.Generic;
using System.Linq;

public class ValidationBookServiceDecorator : IBookService
{
    private readonly IBookService _decoratedBookService;
    private readonly IEnumerable<IValidator<Book>> _validators;

    public ValidationBookServiceDecorator(IBookService decoratedBookService, 
        IEnumerable<IValidator<Book>> validators)
    {
        _decoratedBookService = decoratedBookService;
        _validators = validators;
    }

    public void AddBook(Book book)
    {
        var context = new ValidationContext<Book>(book);
        var failures = _validators
            .Select(v => v.Validate(context))
            .SelectMany(result => result.Errors)
            .Where(f => f != null)
            .ToList();

        if (failures.Any())
        {
            throw new ValidationException(failures);
        }

        _decoratedBookService.AddBook(book);
    }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Service Registration</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Register the base service and dependencies
services.AddScoped<IBookRepository, BookRepository>();
services.AddSingleton<IValidator<Book>, BookValidator>();
services.AddScoped<BookService>();

// Register the decorators
services.AddScoped<IBookService>(provider => {
    var baseService = provider.GetRequiredService<BookService>();
    var validators = provider.GetRequiredService<IEnumerable<IValidator<Book>>>();
    
    // First wrap the base service with the Validation decorator
    var validationDecorator = new ValidationBookServiceDecorator(baseService, validators);

    // Then wrap the validation decorator with the Logging decorator
    return new LoggingBookServiceDecorator(validationDecorator);
});`}</pre>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            حالا وقتی call ای برای اضافه کردن کتاب انجام شود، logging decorator log خواهد کرد که کتابی اضافه می‌کند. validator اجرا خواهد شد، و اگر validation fail شود، exception پرتاب خواهد شد. در غیر این صورت، BookService کتاب را save خواهد کرد، و سپس logging decorator کل زمانی که طول کشیده را log خواهد کرد. توجه کنید که هر کلاس فقط یک responsibility دارد، اما آنها قادر هستند به شکلی ترکیب شوند که behavior غنی‌تری ایجاد شود.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوهای مرتبط
          </h2>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Proxy</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Decorator بیشتر از همه به الگوی طراحی Proxy مربوط است، که structure یکسان اما intent متفاوتی دارد. در حالی که proxy همچنین wrapper است، intent proxy کنترل access به کلاس underlying است. intent الگوی Decorator افزودن behavior است.
          </p>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Chain of Responsibility</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            الگوی Chain of Responsibility همچنین راهی برای تقسیم responsibility ها به کلاس‌های فردی فراهم می‌کند، که هر کدام بعدی را wrap می‌کند. با این حال، نیاز به interface مشخصی برای service wrapped شدن دارد. الگوی Decorator می‌تواند به هر کلاسی اعمال شود، پس از یک جهت انعطاف‌پذیرتر است. با این حال، اگر بتوانید application خود را طوری طراحی کنید که اکثر service های شما method Handle داشته باشند، ممکن است بتوانید Chain of Responsibility wrapper ها (که اغلب middleware یا behavior نامیده می‌شوند) را برای service های مختلف زیادی دوباره استفاده کنید.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نتیجه‌گیری
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            الگوی Decorator رویکردی flexible برای extend کردن object behavior به طور dynamic ارائه می‌دهد. در حالی که DI container پیش‌فرض .NET فاقد پشتیبانی built-in برای decorator ها است، می‌توانید نتایج مشابهی با extension method های سفارشی یا کتابخانه‌های third-party بدست آورید. این الگو به ویژه برای اضافه کردن cross-cutting concern هایی مانند logging، validation، یا caching بدون modify کردن کد موجود مفید است، و به Open/Closed Principle پایبند است.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>Amazon - Design Patterns: Elements of Reusable Object-Oriented Software - Gang of Four</li>
            <li>Pluralsight - Design Patterns Library</li>
            <li>Pluralsight - Proxy Design Pattern</li>
            <li>YouTube - Using the Decorator, Mediator, and Chain of Responsibility Patterns in C#</li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
