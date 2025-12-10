'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MediatorPage() {
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
        الگوی Mediator (میانجی)
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Mediator چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Mediator یک الگوی طراحی است که ارتباط بین جزء های مختلف سیستم را بدون نیاز به آگاهی مستقیم آن‌ها از یکدیگر تسهیل می‌کند. به جای تعامل مستقیم جزء ها، آن‌ها از طریق یک mediator مرکزی ارتباط برقرار می‌کنند، که تعاملات و هماهنگی را مدیریت می‌کند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            این به کاهش وابستگی‌ها، ترویج کوپلینگ شل و ماژولار و انعطاف‌پذیرتر کردن سیستم کمک می‌کند. به طور معمول در برنامه‌های پیچیده که در آن اشیاء زیادی با یکدیگر تعامل دارند استفاده می‌شود، مانند رابط‌های کاربری، سیستم‌های پیام‌رسانی یا برنامه‌های eCommerce.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            eCommerce Example
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            این وضعیت eCommerce را در نظر بگیرید:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li><code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">PlaceOrderCommand</code> باعث <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">PlaceOrderHandler</code> می‌شود تا سفارش را ثبت کند</li>
            <li><code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">PlaceOrderHandler</code> به Mediator اطلاع می‌دهد تا موجودی را بررسی کند</li>
            <li><code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">CheckInventoryHandler</code> موجودی را بررسی و سپس درخواست ارسال اطلاعیه می‌کند</li>
            <li><code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">SendNotificationHandler</code> فرآیند را با ارسال تایید کامل می‌کند</li>
          </ol>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Order Service نیازی به آگاهی از Inventory Service یا Notification Service ندارد. تمرکز آن فقط بر موضوعات مربوط به سفارش است. تمام هماهنگی توسط Mediator مدیریت می‌شود.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            When to Use Mediator
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>چندین کامپوننت نیاز به ارتباط پیچیده دارند</li>
            <li>کامپوننت‌ها برای تغییرات آسان‌تر باید جدا شوند</li>
            <li>می‌خواهید workflows یا orchestrations را کپسوله کنید که ورنه در چند کلاس پراکنده می‌شوند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Benefits
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Loose Coupling</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                کامپوننت‌ها نیازی به آگاهی از یکدیگر ندارند؛ فقط از طریق Mediator تعامل می‌کنند.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">بهبود خوانایی و نگهداری</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Mediator منطق ارتباط را متمرکز می‌کند و درک تعاملات را ساده می‌کند.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">دیباگ و تست آسان‌تر</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                می‌توانید Mediator را در تست‌ها mock یا جایگزین کنید و فقط بر تعاملات خاص تمرکز کنید.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Single Responsibility Principle</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                هر کلاس فقط بر عملکرد اصلی خود تمرکز می‌کند، نه بر مدیریت اعلان‌ها یا سرویس‌های دیگر.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Drawbacks
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>پیچیدگی Mediator:</strong> اگر مسئول تعاملات زیادی باشد می‌تواند تبدیل به "god object" شود</li>
            <li><strong>نقطه واحد شکست:</strong> همه تعاملات از طریق Mediator عبور می‌کنند</li>
            <li><strong>ردیابی سخت‌تر:</strong> دیباگ درخواست‌ها در ماژول‌ها می‌تواند چالش‌برانگیز باشد</li>
            <li><strong>تاثیر عملکرد:</strong> هر تعامل که از طریق Mediator مسیریابی می‌شود overhead اضافه می‌کند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            MediatR Library Example
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Command
public record PlaceOrderCommand(string CustomerId, List<OrderItem> Items) 
    : IRequest<OrderResult>;

// Handler
public class PlaceOrderHandler : IRequestHandler<PlaceOrderCommand, OrderResult>
{
    private readonly IOrderRepository _repository;
    private readonly IMediator _mediator;
    
    public PlaceOrderHandler(IOrderRepository repository, IMediator mediator)
    {
        _repository = repository;
        _mediator = mediator;
    }
    
    public async Task<OrderResult> Handle(PlaceOrderCommand request, 
        CancellationToken cancellationToken)
    {
        // Create and save order
        var order = new Order(request.CustomerId, request.Items);
        await _repository.AddAsync(order);
        
        // Notify other parts of the system via mediator
        await _mediator.Publish(new OrderPlacedNotification(order.Id));
        
        return new OrderResult(order.Id, true);
    }
}

// Notification handlers (can have multiple)
public class CheckInventoryHandler : INotificationHandler<OrderPlacedNotification>
{
    public async Task Handle(OrderPlacedNotification notification, 
        CancellationToken cancellationToken)
    {
        // Check inventory...
    }
}

public class SendEmailHandler : INotificationHandler<OrderPlacedNotification>
{
    public async Task Handle(OrderPlacedNotification notification, 
        CancellationToken cancellationToken)
    {
        // Send confirmation email...
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/cqrs" className="text-blue-600 dark:text-blue-400 hover:underline">CQRS Pattern</Link> - اغلب با Mediator جفت می‌شود</li>
            <li><Link href="/design-patterns/observer" className="text-blue-600 dark:text-blue-400 hover:underline">Observer Pattern</Link> - مکمل Mediator برای subscription رویدادها</li>
            <li><Link href="/design-patterns/chain-of-responsibility" className="text-blue-600 dark:text-blue-400 hover:underline">Chain of Responsibility</Link> - برای واگذاری در handler ها</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/mediator-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Mediator Pattern
              </a>
            </li>
            <li>
              <a href="https://github.com/jbogard/MediatR" target="_blank" rel="noopener" className="hover:underline">
                MediatR GitHub Repository
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
