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
          ← بازگشت به الگوهای طراحی
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        الگوی Decorator (تزئین‌کننده)
      </h1>

      <div className="prose prose-sm max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Decorator چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Decorator یک الگوی ساختاری است که برای افزودن قابلیت‌های جدید به اشیاء به صورت پویا بدون تغییر ساختار آن‌ها استفاده می‌شود. این الگو بر یک کلاس decorator متکی است که کلاس اصلی را wrap می‌کند و با interface آن مطابقت دارد، در حالی که رفتار اضافی قبل یا بعد از فراخوانی متد کلاس اصلی فراهم می‌کند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            این الگو راهی عالی برای پیروی از اصل Single Responsibility است، زیرا cross-cutting concern هایی مانند Logging، Validation، Authorization و غیره را می‌توان از یک کلاس خارج کرد و به یک کلاس decorator با مسئولیت واحد منتقل کرد.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            چه زمانی استفاده کنیم؟
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>افزودن مسئولیت‌ها به صورت پویا: زمانی که نیاز دارید مسئولیت‌های اضافی را در زمان اجرا بدون تأثیر بر سایر اشیاء اضافه کنید</li>
            <li>توسعه‌های ماژولار و قابل استفاده مجدد: زمانی که می‌خواهید قابلیت‌هایی ایجاد کنید که بدون تغییر کلاس‌های اشیاء قابل اعمال باشند</li>
            <li>جلوگیری از انفجار زیرکلاس: اگر توسعه با زیرکلاس منجر به تعداد زیادی کلاس شود، Decorator می‌تواند این پیچیدگی را مدیریت کند</li>
            <li>توسعه بدون تغییر: در شرایطی که تغییر کلاس اصلی به دلیل محدودیت‌ها امکان‌پذیر نیست</li>
            <li>Compliance و Logging: برای تزریق logging، audit trail یا سایر cross-cutting concern ها</li>
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
            <pre className="text-gray-800 dark:text-gray-200">{`// در Program.cs
services.AddScoped<IBookRepository, BookRepository>();
services.AddSingleton<IValidator<Book>, BookValidator>();
services.AddScoped<BookService>();

services.AddScoped<IBookService>(provider => 
{
    var baseService = provider.GetRequiredService<BookService>();
    var validators = provider.GetRequiredService<IEnumerable<IValidator<Book>>>();
    
    // ابتدا validation را wrap می‌کنیم
    var validationDecorator = new ValidationBookServiceDecorator(
        baseService, validators);
    
    // سپس logging را wrap می‌کنیم
    var logger = provider.GetRequiredService<ILogger<LoggingBookServiceDecorator>>();
    return new LoggingBookServiceDecorator(validationDecorator, logger);
});`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوهای مرتبط
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Proxy</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                ساختار یکسان دارد اما هدف متفاوت است. Proxy برای کنترل دسترسی استفاده می‌شود، در حالی که Decorator برای افزودن رفتار است.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Chain of Responsibility</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                هر دو مسئولیت‌ها را به کلاس‌های جداگانه تقسیم می‌کنند. اما Chain of Responsibility نیاز به interface خاصی دارد در حالی که Decorator انعطاف‌پذیرتر است.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نتیجه‌گیری
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            الگوی Decorator رویکردی انعطاف‌پذیر برای توسعه رفتار اشیاء به صورت پویا ارائه می‌دهد. این الگو به ویژه برای افزودن cross-cutting concern هایی مانند logging، validation یا caching بدون تغییر کد موجود مفید است و به اصل Open/Closed پایبند است.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/decorator-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Decorator Pattern
              </a>
            </li>
            <li>
              <a href="https://www.pluralsight.com/courses/c-sharp-design-patterns-proxy" target="_blank" rel="noopener" className="hover:underline">
                Pluralsight - Proxy Design Pattern
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=eSQHpfaYspw" target="_blank" rel="noopener" className="hover:underline">
                YouTube - Using Decorator, Mediator, and Chain of Responsibility in C#
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
