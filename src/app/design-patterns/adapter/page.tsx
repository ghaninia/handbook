'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AdapterPage() {
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
        Adapter Design Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Intent
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic mb-4">
            "رابط یک کلاس را به رابط دیگری تبدیل کن که کلاینت‌ها انتظار دارند. Adapter به کلاس‌هایی اجازه می‌دهد با هم کار کنند که در غیر این صورت به دلیل ناسازگاری رابطها نمی‌توانند." [GoF]
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            What is Adapter?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Adapter Design Pattern که به Wrapper نیز معروف است، به دو کلاس اجازه می‌دهد با هم کار کنند که در غیر این صورت رابط‌های ناسازگاری داشته باشند. این به خوبی با مثال دنیای واقعی یک adapter برقی مطابقت دارد.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            الگوی Adapter بر یک abstraction مشترک متکی است که رابطی را تعریف می‌کند که کد کلاینت استفاده خواهد کرد. سپس پیاده‌سازی‌های مختلف این رابط برای پشتیبانی از روش‌های مختلف و در غیر این صورت ناسازگار برای دستیابی به هدف abstraction ایجاد می‌شوند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            C# Example: Notification System
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            به عنوان مثال، یک اپلیکیشن ممکن است بخواهد اعلان‌هایی ارسال کند. با این حال، چندین رویکرد با رابط‌های متفاوت وجود دارد:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Different external interfaces
SendEmail(string toEmail, string fromEmail, string subject, string body)
SendText(string toNumber, string message)
SendToastNotification(string username, string message)

// Adapter interface - our abstraction
public interface INotificationAdapter
{
    void Notify(User user, Message message);
}

// Email adapter implementation
public class EmailNotificationAdapter : INotificationAdapter
{
    private readonly IEmailSender _emailSender;
    private readonly EmailSettings _settings;
    
    public EmailNotificationAdapter(IEmailSender emailSender, 
        EmailSettings settings)
    {
        _emailSender = emailSender;
        _settings = settings;
    }
    
    public void Notify(User user, Message message)
    {
        if (!user.AllowEmailNotifications) return;
        
        string fromEmail = _settings.DefaultFromAddress;
        _emailSender.Send(user.EmailAddress, fromEmail, 
            message.Title, message.Details);
    }
}

// SMS adapter implementation
public class SmsNotificationAdapter : INotificationAdapter
{
    private readonly ISmsSender _smsSender;
    
    public SmsNotificationAdapter(ISmsSender smsSender)
    {
        _smsSender = smsSender;
    }
    
    public void Notify(User user, Message message)
    {
        if (!user.AllowSmsNotifications) return;
        
        _smsSender.SendText(user.PhoneNumber, message.Details);
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Key Points
          </h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>مهم:</strong> abstraction معرفی <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">INotificationAdapter</code> هیچ جزئیاتی درباره نحوه ارسال اعلان فاش نمی‌کند. یک Adapter به طور ایده‌آل باید با استفاده از abstractionهای اپلیکیشن نوشته شود و از فاش کردن جزئیات پیاده‌سازی به صورت ضمنی یا صریح پرهیز کند.
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            به یاد داشته باشید که <strong>Dependency Inversion Principle</strong> ایجاب می‌کند که abstractionها نباید به جزئیات وابسته باشند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>امکان <strong>Open-Closed Principle</strong> را فراهم می‌کند - عملکرد جدید بدون تغییر کد موجود اضافه می‌شود</li>
            <li>به خوبی با <strong>Dependency Injection</strong> کار می‌کند</li>
            <li>به عنوان بخشی از Anti-Corruption Layerها در <strong>Domain-Driven Design</strong> به کرات استفاده می‌شود</li>
            <li>کد شما را از کتابخانه‌های شخص ثالث جدا می‌کند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/facade" className="text-blue-600 dark:text-blue-400 hover:underline">Facade Pattern</Link> - رابط ساده‌ای برای یک زیرسیستم پیچیده فراهم می‌کند</li>
            <li><Link href="/design-patterns/proxy" className="text-blue-600 dark:text-blue-400 hover:underline">Proxy Pattern</Link> - جانشینی برای شی دیگر فراهم می‌کند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/adapter-design-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Adapter Design Pattern
              </a>
            </li>
            <li>
              <a href="https://www.pluralsight.com/courses/c-sharp-design-patterns-adapter" target="_blank" rel="noopener" className="hover:underline">
                Pluralsight - C# Design Patterns: Adapter
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
