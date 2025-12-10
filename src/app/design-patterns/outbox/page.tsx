'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function OutboxPage() {
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
        Outbox Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            What is the Outbox Pattern?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Outbox پیام‌رسانی قابل اعتماد را در سیستم‌های توزیع‌شده با ذخیره میز‌کردن پیام‌های خروجی در همان transaction دیتابیس به عنوان عملیات تجاری تضمین می‌کند. این "مسئله dual-write" را حل می‌کند که در آن نیاز دارید دیتابیس را به‌روزرسانی و پیام بفرستید، اما نمی‌توانید هر دو را به شکل atomic انجام دهید.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            The Dual-Write Problem
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              <strong>مسئله:</strong> اگر ذخیره دیتابیس موفق باشد اما ارسال پیام ناموفق باشد چه اتفاقی می‌افتد؟ یا برعکس؟
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// PROBLEMATIC: Dual-write without Outbox
public async Task PlaceOrder(Order order)
{
    // Step 1: Save to database
    await _dbContext.Orders.AddAsync(order);
    await _dbContext.SaveChangesAsync();
    
    // Step 2: Send message
    // What if this fails after the order was saved?
    await _messageBus.PublishAsync(new OrderPlacedEvent(order.Id));
    
    // Inconsistency: Order saved but event never sent!
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            How Outbox Pattern Works
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li>Save the domain entity to the database</li>
            <li>Save the outgoing message to an <strong>Outbox</strong> table in the <strong>same transaction</strong></li>
            <li>A background process reads the Outbox and publishes messages</li>
            <li>After successful publish, mark the message as processed</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Implementation
          </h2>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            1. Outbox Message Entity
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class OutboxMessage
{
    public Guid Id { get; set; }
    public string Type { get; set; } = string.Empty;
    public string Payload { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime? ProcessedAt { get; set; }
    public string? Error { get; set; }
    public int RetryCount { get; set; }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            2. Saving with Outbox
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class OrderService
{
    private readonly AppDbContext _context;
    
    public async Task PlaceOrderAsync(Order order)
    {
        // Create order
        _context.Orders.Add(order);
        
        // Create outbox message in SAME transaction
        var outboxMessage = new OutboxMessage
        {
            Id = Guid.NewGuid(),
            Type = nameof(OrderPlacedEvent),
            Payload = JsonSerializer.Serialize(new OrderPlacedEvent(order.Id)),
            CreatedAt = DateTime.UtcNow
        };
        _context.OutboxMessages.Add(outboxMessage);
        
        // Both saved atomically
        await _context.SaveChangesAsync();
    }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            3. Background Processor
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class OutboxProcessor : BackgroundService
{
    private readonly IServiceProvider _services;
    private readonly IMessageBus _messageBus;
    
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            await ProcessOutboxAsync(stoppingToken);
            await Task.Delay(TimeSpan.FromSeconds(5), stoppingToken);
        }
    }
    
    private async Task ProcessOutboxAsync(CancellationToken ct)
    {
        using var scope = _services.CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        
        var messages = await context.OutboxMessages
            .Where(m => m.ProcessedAt == null)
            .OrderBy(m => m.CreatedAt)
            .Take(100)
            .ToListAsync(ct);
        
        foreach (var message in messages)
        {
            try
            {
                // Publish to message bus
                await _messageBus.PublishAsync(message.Type, message.Payload);
                
                // Mark as processed
                message.ProcessedAt = DateTime.UtcNow;
            }
            catch (Exception ex)
            {
                message.Error = ex.Message;
                message.RetryCount++;
            }
        }
        
        await context.SaveChangesAsync(ct);
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>تحویل تضمینی:</strong> پیام‌ها نهایتاً ارسال خواهند شد</li>
            <li><strong>Atomicity:</strong> عملیات دیتابیس و پیام atomic هستند</li>
            <li><strong>پشتیبانی مجدد:</strong> پیام‌های ناموفق می‌توانند مجدداً تلاش شوند</li>
            <li><strong>قابلیت حسابرسی:</strong> تاریخچه پیام‌ها ذخیره می‌شود</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Libraries & Tools
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>MassTransit:</strong> پشتیبانی داخلی Outbox با EF Core</li>
            <li><strong>NServiceBus:</strong> قابلیت Outbox برای حذف تکرار پیام</li>
            <li><strong>CAP:</strong> راه‌حل distributed transaction با Outbox</li>
            <li><strong>Wolverine:</strong> هندلینگ پیام با Outbox بادوام</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/domain-events" className="text-blue-600 dark:text-blue-400 hover:underline">Domain Events Pattern</Link></li>
            <li><Link href="/design-patterns/cqrs" className="text-blue-600 dark:text-blue-400 hover:underline">CQRS Pattern</Link></li>
            <li><Link href="/design-patterns/unit-of-work" className="text-blue-600 dark:text-blue-400 hover:underline">Unit of Work Pattern</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/outbox-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Outbox Pattern
              </a>
            </li>
            <li>
              <a href="https://microservices.io/patterns/data/transactional-outbox.html" target="_blank" rel="noopener" className="hover:underline">
                microservices.io - Transactional Outbox
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
