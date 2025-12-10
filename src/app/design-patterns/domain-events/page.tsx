'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DomainEventsPage() {
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
        الگوی Domain Events (رویدادهای حوزه)
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Domain Events چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Domain Events رویدادهایی هستند که تغییر وضعیت در حوزه را نشان می‌دهند. آن‌ها به عنوان مکانیزمی برای ارتباط بین بخش‌های مختلف حوزه بدون کوپل کردن محکم آن‌ها عمل می‌کنند. علاوه بر جداکردن نواحی مختلف مدل حوزه، domain events می‌توانند (در ترکیب با integration events) برای ارتباط با بخش‌های دیگر برنامه (مانند UI) یا حتی سیستم‌های دیگر استفاده شوند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            رویدادهای Pre-Persistence در مقابل Post-Persistence
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            قبل از ورود به کد، درک تفاوت بسیار مهم است:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>رویدادهای Pre-Persistence:</strong> قبل از ذخیره‌سازی تغییر وضعیت در پایگاه داده فعال می‌شوند. معمولاً فوری فعال و حل می‌شوند.</li>
            <li><strong>رویدادهای Post-Persistence:</strong> پس از ذخیره تغییر وضعیت فعال می‌شوند. معمولاً بر روی entity فعالکننده صف شده و سپس پس از ذخیره ارسال می‌شوند.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            پیاده‌سازی با MediatR
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Mediator به طور معمول هنگام کار با domain events استفاده می‌شود. اینجا نحوه پیاده‌سازی با استفاده از MediatR در برنامه C#/.NET آورده شده است:
          </p>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            1. تعریف یک Domain Event
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            برخلاف command ها، event ها می‌توانند 0 تا چند handler داشته باشند و نباید نتیجه برگردانند. نوع <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">INotification</code> MediatR مناسب‌ترین انتخاب است:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class NewOrderPlacedEvent : INotification
{
    public int OrderId { get; }
    
    public NewOrderPlacedEvent(int orderId)
    {
        OrderId = orderId;
    }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            2. Publishing a Domain Event
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class OrderService
{
    private readonly IMediator _mediator;
    
    public OrderService(IMediator mediator)
    {
        _mediator = mediator;
    }
    
    public async Task PlaceOrderAsync(Order order)
    {
        // Logic to place order and save changes
        
        await _mediator.Publish(new NewOrderPlacedEvent(order.Id));
    }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            3. Handling a Domain Event
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class SendEmailHandler : INotificationHandler<NewOrderPlacedEvent>
{
    private readonly IEmailSender _emailSender;
    
    public SendEmailHandler(IEmailSender emailSender)
    {
        _emailSender = emailSender;
    }
    
    public async Task Handle(NewOrderPlacedEvent notification, 
        CancellationToken cancellationToken)
    {
        // Logic to send email about the new order
        await _emailSender.SendOrderConfirmationAsync(notification.OrderId);
    }
}

// NOTE: Additional handlers for the same event may be added
public class UpdateInventoryHandler : INotificationHandler<NewOrderPlacedEvent>
{
    public async Task Handle(NewOrderPlacedEvent notification, 
        CancellationToken cancellationToken)
    {
        // Update inventory when order is placed
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایا
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>جداسازی:</strong> بخش‌های مختلف حوزه نیازی به آگاهی از یکدیگر ندارند</li>
            <li><strong>قابلیت توسعه:</strong> handler های جدید می‌توانند بدون تغییر entity فعالکننده اضافه شوند</li>
            <li><strong>تست‌پذیری:</strong> رویدادها می‌توانند به صورت مجزا تست شوند</li>
            <li><strong>مسئولیت واحد:</strong> هر handler یک کار انجام می‌دهد</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نتیجه‌گیری
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            الگوی Domain Events ابزار قدرتمندی برای جداسازی جنبه‌های مختلف منطق domain شما است. استفاده از کتابخانه‌هایی مانند MediatR پیاده‌سازی را در C#/.NET ساده و تمیز می‌کند. با استفاده از Domain Events، رفتار اضافی می‌تواند در پاسخ به تغییرات وضعیت domain اضافه شود، بدون اینکه نیاز به اضافه کردن پیچیدگی به entity یا service فعالکننده باشد.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/mediator" className="text-blue-600 dark:text-blue-400 hover:underline">Mediator Pattern</Link></li>
            <li><Link href="/design-patterns/observer" className="text-blue-600 dark:text-blue-400 hover:underline">Observer Pattern</Link></li>
            <li><Link href="/design-patterns/outbox" className="text-blue-600 dark:text-blue-400 hover:underline">Outbox Pattern</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/domain-events-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Domain Events Pattern
              </a>
            </li>
            <li>
              <a href="https://martinfowler.com/eaaDev/DomainEvent.html" target="_blank" rel="noopener" className="hover:underline">
                Martin Fowler - Domain Event
              </a>
            </li>
            <li>
              <a href="https://github.com/ardalis/cleanarchitecture/" target="_blank" rel="noopener" className="hover:underline">
                Sample dotnet Solution with Domain Event Support
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
