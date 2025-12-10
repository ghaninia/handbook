'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ChainOfResponsibilityPage() {
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
        الگوی Chain of Responsibility (زنجیره مسئولیت)
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Chain of Responsibility چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Chain of Responsibility یک الگوی طراحی رفتاری است که به شما اجازه می‌دهد درخواست‌ها را در طول زنجیره‌ای از پردازشکننده‌ها منتقل کنید. هنگام دریافت درخواست، هر پردازشکننده تصمیم می‌گیرد که یا درخواست را پردازش کند یا آن را به پردازشکننده بعدی در زنجیره منتقل کند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            جزء های کلیدی
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Request:</strong> حاوی اطلاعاتی است که باید توسط زنجیره پردازشکننده‌ها پردازش شود</li>
            <li><strong>Abstract Handler:</strong> شامل دو متد است - یکی برای تنظیم پردازشکننده بعدی و دیگری برای پردازش درخواست</li>
            <li><strong>Concrete Handler:</strong> پیاده‌سازی خاصی که نوع خاصی از درخواست را مدیریت می‌کند یا آن را به بعدی منتقل می‌کند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایا
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>جداسازی:</strong> فرستنده از پردازشکننده‌های خاصی که آن را پردازش می‌کنند آگاه نیست</li>
            <li><strong>قابلیت استفاده مجدد:</strong> پردازشکننده‌ها می‌توانند در زنجیره‌های مختلف استفاده شوند</li>
            <li><strong>پردازش پویا:</strong> درخواست‌ها بر اساس زمینه زمان اجرا می‌توانند متفاوت پردازش شوند</li>
            <li><strong>مدیریت خطا:</strong> مکانیزم متمرکز برای مدیریت خطاها و استثناها</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            کاربردها
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Authentication:</strong> انواع مختلف اعتبارنامه می‌توانند پذیرفته شوند</li>
            <li><strong>Event Handling:</strong> پاسخ به انواع مختلف رویدادهای domain</li>
            <li><strong>Workflow:</strong> اجرای وظایف فرآیند خودکار کسب‌وکار به ترتیب</li>
            <li><strong>Authorization:</strong> بررسی اینکه کاربر مجوز انجام فرآیندی را دارد یا نه</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Chain of Responsibility در .NET
          </h2>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            ASP.NET Core Middleware
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            لایه middleware ASP.NET Core از پردازشکننده‌های زیادی برای پردازش درخواست‌ها تشکیل شده است. این پردازشکننده‌ها در <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">Program.cs</code> پیکربندی می‌شوند. ترتیب اضافه‌شان همان ترتیبی است که درخواست پردازش می‌شود - به این شکل زنجیره ساخته می‌شود.
          </p>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            MediatR Pipeline Behaviors
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            MediatR الگوی Chain of Responsibility را از طریق استفاده از pipeline ها پیاده‌سازی می‌کند. Pipeline ها رفتارهایی هستند که قبل و بعد از پردازش درخواست اجرا می‌شوند. هر رفتار می‌تواند درخواست را رهگیری، تغییر یا مانع رسیدن آن به پردازشکننده شود.
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// MediatR Pipeline Behavior example
public class ValidationBehavior<TRequest, TResponse> 
    : IPipelineBehavior<TRequest, TResponse>
    where TRequest : IRequest<TResponse>
{
    private readonly IEnumerable<IValidator<TRequest>> _validators;
    
    public ValidationBehavior(IEnumerable<IValidator<TRequest>> validators)
    {
        _validators = validators;
    }
    
    public async Task<TResponse> Handle(
        TRequest request,
        RequestHandlerDelegate<TResponse> next,
        CancellationToken cancellationToken)
    {
        // Validate before processing
        var context = new ValidationContext<TRequest>(request);
        var failures = _validators
            .Select(v => v.Validate(context))
            .SelectMany(result => result.Errors)
            .Where(f => f != null)
            .ToList();
        
        if (failures.Any())
        {
            throw new ValidationException(failures);
        }
        
        // Pass to next handler in chain
        return await next();
    }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            ChainedTokenCredential
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            An example of using Chain of Responsibility for authentication is the <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">ChainedTokenCredential</code> in Azure.Identity:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public CosmosHelper()
{
    ChainedTokenCredential credential = new ChainedTokenCredential(
        new AzureCliCredential(),
        new ManagedIdentityCredential()
    );
    
    client = new CosmosClient(
        accountEndpoint: CosmosUri,
        tokenCredential: credential
    );
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/mediator" className="text-blue-600 dark:text-blue-400 hover:underline">Mediator Pattern</Link></li>
            <li><Link href="/design-patterns/decorator" className="text-blue-600 dark:text-blue-400 hover:underline">Decorator Pattern</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/chain-of-responsibility-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Chain of Responsibility Pattern
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=eSQHpfaYspw" target="_blank" rel="noopener" className="hover:underline">
                YouTube - Decorator, Mediator, and Chain of Responsibility in C#
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
