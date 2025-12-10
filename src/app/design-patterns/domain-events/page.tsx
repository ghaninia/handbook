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
          ← Back to Design Patterns
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Domain Events Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            What are Domain Events?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Domain events are events that signify a state change in the domain. They serve as a mechanism to communicate between different parts of the domain without tightly coupling them. In addition to decoupling different areas of the domain model, domain events can also be used (in concert with integration events) to communicate with other parts of the application (such as the UI) or even other systems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Pre-Persistence vs Post-Persistence Events
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Before diving into code, it's crucial to understand the difference:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Pre-Persistence Events:</strong> Triggered before the state change is persisted to the database. Typically triggered and resolved immediately.</li>
            <li><strong>Post-Persistence Events:</strong> Triggered after the state change is saved. Typically queued up on the triggering entity, and then dispatched once saved.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Implementation with MediatR
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Mediator pattern is commonly used when working with domain events. Here's how to implement using MediatR in a C#/.NET application:
          </p>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            1. Defining a Domain Event
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Unlike commands, events can have 0 to many handlers, and should not return a result. The MediatR <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">INotification</code> type is most appropriate:
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
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Decoupling:</strong> Different parts of the domain don't need to know about each other</li>
            <li><strong>Extensibility:</strong> New handlers can be added without modifying the triggering entity</li>
            <li><strong>Testability:</strong> Events can be tested in isolation</li>
            <li><strong>Single Responsibility:</strong> Each handler does one thing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Conclusion
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The Domain Events pattern is a powerful tool for decoupling different aspects of your domain logic. Using libraries like MediatR makes the implementation in C#/.NET straightforward and clean. Using Domain Events, additional behavior can be added in response to domain state changes, without having to add complexity to the triggering entity or service.
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
