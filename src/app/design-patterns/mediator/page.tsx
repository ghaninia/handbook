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
            Consider this eCommerce situation:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li><code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">PlaceOrderCommand</code> triggers the <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">PlaceOrderHandler</code> to place the order</li>
            <li><code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">PlaceOrderHandler</code> notifies the Mediator to check the inventory</li>
            <li><code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">CheckInventoryHandler</code> checks inventory and then requests to send a notification</li>
            <li><code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">SendNotificationHandler</code> completes the process by sending a confirmation</li>
          </ol>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The Order Service doesn't need to know about the Inventory Service or the Notification Service. Its sole focus is on order-related things. All coordination is handled by the Mediator.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            When to Use Mediator
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>Multiple components need to communicate in complex ways</li>
            <li>Components need to be decoupled to allow easier changes</li>
            <li>You want to encapsulate workflows or orchestrations that would otherwise be spread across multiple classes</li>
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
                Components don't need to know about each other; they only interact through the Mediator.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Improved Readability and Maintenance</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The Mediator centralizes communication logic, simplifying the understanding of interactions.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Easier Debugging and Testing</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You can mock or replace the Mediator in tests, focusing only on specific interactions.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Single Responsibility Principle</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Each class focuses solely on its main function, not on handling notifications or other services.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Drawbacks
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Mediator Complexity:</strong> Can become a "god object" if responsible for too many interactions</li>
            <li><strong>Single Point of Failure:</strong> All interactions go through the Mediator</li>
            <li><strong>Harder to Trace:</strong> Debugging requests across modules can be challenging</li>
            <li><strong>Performance Impact:</strong> Every interaction routed through Mediator adds overhead</li>
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
            <li><Link href="/design-patterns/cqrs" className="text-blue-600 dark:text-blue-400 hover:underline">CQRS Pattern</Link> - often paired with Mediator</li>
            <li><Link href="/design-patterns/observer" className="text-blue-600 dark:text-blue-400 hover:underline">Observer Pattern</Link> - complements Mediator for event subscription</li>
            <li><Link href="/design-patterns/chain-of-responsibility" className="text-blue-600 dark:text-blue-400 hover:underline">Chain of Responsibility</Link> - for delegating across handlers</li>
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
