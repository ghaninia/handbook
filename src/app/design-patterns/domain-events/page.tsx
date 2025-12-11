'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

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
          ← Back to Design Patterns
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Domain Events Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Domain Events چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Domain event ها event هایی هستند که تغییر state در domain را نشان می‌دهند. آنها به عنوان مکانیزمی برای برقراری ارتباط بین بخش‌های مختلف domain بدون tightly coupling آنها عمل می‌کنند. علاوه بر decoupling نواحی مختلف domain model، domain event ها می‌توانند (در ترکیب با integration event ها) برای برقراری ارتباط با بخش‌های دیگر application (مانند UI) یا حتی system های دیگر استفاده شوند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Pre-Persistence در مقابل Post-Persistence Events
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            قبل از ورود به کد، درک تفاوت بین pre-persistence و post-persistence domain event ها بسیار مهم است.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Pre-Persistence Events:</strong> قبل از persist شدن state change به database trigger می‌شوند</li>
            <li><strong>Post-Persistence Events:</strong> پس از save شدن state change به database trigger می‌شوند</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Pre-persistence event ها معمولاً trigger شده و فوری resolve می‌شوند. Post-persistence event ها معمولاً بر triggering entity queue می‌شوند، و سپس یک بار که entity save شد، event ها dispatch می‌شوند. این تضمین می‌کند که event ها فقط یک بار handle شوند که state change persist شده باشد.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال‌های کد
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Mediator معمولاً هنگام کار با domain event ها استفاده می‌شود. بیایید از طریق برخی مثال‌های کد بفهمیم که چگونه Domain Events را با استفاده از MediatR در یک application C#/.NET پیاده‌سازی کنیم.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            ابتدا، package NuGet MediatR را نصب کنید:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">Install-Package MediatR</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">تعریف یک Domain Event</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            بیایید یک domain event ساده تعریف کنیم. برخلاف command ها، event ها می‌توانند 0 تا چندین handler داشته باشند، و نباید result برگردانند. نوع INotification از MediatR مناسب‌ترین است:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class NewOrderPlacedEvent : INotification
{
    public int OrderId { get; }

    public NewOrderPlacedEvent(int orderId)
    {
        OrderId = orderId;
    }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Publishing یک Domain Event</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            این‌گونه می‌توانید این event را با استفاده از MediatR publish کنید:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto" dir="ltr">
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

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Handle کردن یک Domain Event</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            در نهایت، بیایید domain event را handle کنیم:
          </p>
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
            مزایای Domain Events
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Decoupling:</strong> بخش‌های مختلف domain logic را از هم جدا می‌کند</li>
            <li><strong>Single Responsibility:</strong> هر handler مسئولیت مشخصی دارد</li>
            <li><strong>Extensibility:</strong> handler های جدید بدون تغییر کد موجود اضافه می‌شوند</li>
            <li><strong>Testability:</strong> هر handler را می‌توان به طور مستقل تست کرد</li>
            <li><strong>Audit Trail:</strong> تمام تغییرات domain قابل پیگیری هستند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نتیجه‌گیری
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            الگوی Domain Events ابزاری قدرتمند برای decoupling جنبه‌های مختلف domain logic شماست. استفاده از کتابخانه‌هایی مانند MediatR پیاده‌سازی را در C#/.NET ساده و تمیز می‌کند. با استفاده از Domain Events، behavior اضافی می‌تواند در پاسخ به تغییرات state domain اضافه شود، بدون اینکه نیاز به اضافه کردن پیچیدگی به triggering entity یا service باشد.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوهای مرتبط
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/mediator" className="text-blue-600 dark:text-blue-400 hover:underline">Mediator Pattern</Link> - برای dispatch کردن event ها</li>
            <li><Link href="/design-patterns/cqrs" className="text-blue-600 dark:text-blue-400 hover:underline">CQRS Pattern</Link> - اغلب با Domain Events ترکیب می‌شود</li>
            <li><Link href="/design-patterns/observer" className="text-blue-600 dark:text-blue-400 hover:underline">Observer Pattern</Link> - الگوی پایه برای event handling</li>
            <li><Link href="/design-patterns/outbox" className="text-blue-600 dark:text-blue-400 hover:underline">Outbox Pattern</Link> - برای reliable event publishing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://handbook.com/design-patterns/domain-events-pattern" target="_blank" rel="noopener" className="hover:underline">
                Handbook - Domain Events Pattern
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
