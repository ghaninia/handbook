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
            Outbox Pattern چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Outbox یک messaging pattern است که معمولاً در distributed system ها استفاده می‌شود تا consistency بین database و message broker را تضمین کند. این pattern زمانی مفید است که نیاز دارید message هایی به سایر system ها یا service ها بفرستید و می‌خواهید consistency بین message و state سیستم را تضمین کنید. یک approach به الگوی Outbox اینگونه کار می‌کند که message را به یک "outbox" table در database می‌نویسد به عنوان بخشی از همان transaction ای که database state را update می‌کند. سپس یک separate process از outbox table می‌خواند و message ها را به message broker می‌فرستد. این می‌تواند برای integration های مختلف با external dependency ها در کنار business application مفید باشد، مانند ارسال email ها، event ها، و notification ها.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مسئله
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            در یک distributed system، تضمین اینکه message ها به طور reliable و consistent تحویل داده شوند می‌تواند challenging باشد. اگر سیستم crash شود یا network failure رخ دهد، message ها ممکن است lost شوند یا به درستی process نشوند. این می‌تواند منجر به inconsistency بین database state و message هایی که به سایر system ها یا service ها فرستاده شده‌اند بشود. مثلاً یک order ممکن است در database ایجاد شود، اما message مربوط به notify کردن سایر service ها ممکن است ارسال نشود.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            این یک dual-write problem ایجاد می‌کند که در آن نیاز دارید دو operation را به صورت atomic انجام دهید:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li>Update کردن domain data در application database (state)</li>
            <li>Send کردن message/notification به external system ها</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            بدون راهی برای mitigate کردن risk fail شدن هر یک از operation ها، با احتمال "zombie records" و "ghost messages" مواجه می‌شوید.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li>اگر database update موفق شود اما message sending fail شود، state inconsistency خواهید داشت (zombie record 🧟)</li>
            <li>اگر message sending موفق شود اما database update fail شود، incorrect data propagate خواهد شد (ghost message 👻)</li>
            <li>Network failure ها، service outage ها، یا message broker issue ها می‌توانند باعث message loss شوند 💥</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            راه حل
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Outbox مسئله dual-write را با store کردن هم business data change ها و هم outgoing message ها در یک single database transaction حل می‌کند. یک dedicated outbox table معرفی می‌کند تا pending message ها را hold کند و تضمین می‌کند که آنها فقط در صورتی ایجاد شوند که associated business operation موفق باشد. یک separate background processor به طور منظم outbox table را scan می‌کند و این message ها را به external system ها deliver می‌کند. برای improve کردن reliability بیشتر، message delivery طوری طراحی شده که idempotent باشد، به طوری که هر duplicate ناشی از retry ها یا failure ها باعث unintended side effect نشوند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            این approach تضمین می‌کند که اگر business operation موفق باشد، message نهایتاً deliver خواهد شد.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال Implementation
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            اینجا یک مثال ساده با استفاده از C# و Entity Framework آمده است:
          </p>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            Order و OutboxMessage Entity ها
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class Order
{
  public int Id { get; set; }
  public string CustomerId { get; set; }
  public decimal Total { get; set; }
  public DateTime CreatedOn { get; set; }
}

public class OutboxMessage
{
  public int Id { get; set; }
  public string Type { get; set; }
  public string Data { get; set; }
  public DateTime CreatedOn { get; set; }
  public bool IsProcessed { get; set; }
  public DateTime? ProcessedOn { get; set; }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            OrderService با Outbox Pattern
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class OrderService
{
  private readonly ApplicationDbContext _context;
  
  public OrderService(ApplicationDbContext context)
  {
    _context = context;
  }

  public async Task CreateOrderAsync(CreateOrderRequest request)
  {
    using var transaction = await _context.Database.BeginTransactionAsync();

    try
    {
      // 1. Create the order
      var order = new Order
      {
          CustomerId = request.CustomerId,
          Total = request.Total,
          CreatedOn = DateTime.UtcNow
      };
      
      _context.Orders.Add(order);
      await _context.SaveChangesAsync();

      // 2. Add message to outbox (same transaction)
      var outboxMessage = new OutboxMessage
      {
          Type = "OrderCreated",
          Data = JsonSerializer.Serialize(new 
          {
            OrderId = order.Id,
            CustomerId = order.CustomerId,
            Total = order.Total
          }),
          CreatedOn = DateTime.UtcNow,
          IsProcessed = false
      };

      _context.OutboxMessages.Add(outboxMessage);
      await _context.SaveChangesAsync();
      
      // 3. Commit both operations atomically
      await transaction.CommitAsync();
    }
    catch
    {
      await transaction.RollbackAsync();
      throw;
    }
  }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            Background Process برای Publish کردن Message ها
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class OutboxMessageProcessor : BackgroundService
{
  private readonly IServiceProvider _serviceProvider;
  private readonly IMessagePublisher _messagePublisher;
  private readonly ILogger<OutboxMessageProcessor> _logger;

  public OutboxMessageProcessor(
    IServiceProvider serviceProvider,
    IMessagePublisher messagePublisher,
    ILogger<OutboxMessageProcessor> logger)
  {
    _serviceProvider = serviceProvider;
    _messagePublisher = messagePublisher;
    _logger = logger;
  }

  protected override async Task ExecuteAsync(CancellationToken stoppingToken)
  {
    while (!stoppingToken.IsCancellationRequested)
    {
      try
      {
        await ProcessPendingMessagesAsync();
        await Task.Delay(TimeSpan.FromSeconds(5), stoppingToken);
      }
      catch (Exception ex)
      {
        _logger.LogError($"Error processing outbox messages: {ex.Message}");
      }
    }
  }

  private async Task ProcessPendingMessagesAsync()
  {
    using var scope = _serviceProvider.CreateScope();
    var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

    var pendingMessages = await context.OutboxMessages
      .Where(m => !m.IsProcessed)
      .OrderBy(m => m.CreatedOn)
      .Take(100)
      .ToListAsync();

    foreach (var message in pendingMessages)
    {
      try
      {
        await _messagePublisher.PublishAsync(message.Type, message.Data);
        message.IsProcessed = true;
        message.ProcessedOn = DateTime.UtcNow;
        await context.SaveChangesAsync();
      }
      catch (Exception ex)
      {
        // Handle error (e.g. log it, retries, dead-lettering, etc)
      }
    }
  }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایا
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Guaranteed Delivery:</strong> message ها eventually deliver خواهند شد</li>
            <li><strong>Atomicity:</strong> database operation و message atomic هستند</li>
            <li><strong>Retry Support:</strong> failed message ها می‌توانند retry شوند</li>
            <li><strong>Auditability:</strong> message history ذخیره می‌شود</li>
            <li><strong>Decoupling:</strong> business logic از messaging infrastructure جدا است</li>
            <li><strong>Reliability:</strong> network failure ها یا service outage ها message delivery را تحت تأثیر قرار نمی‌دهند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نکات منفی
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Complexity:</strong> اضافه کردن complexity به architecture</li>
            <li><strong>Storage Overhead:</strong> نیاز به storage اضافی برای outbox table</li>
            <li><strong>Processing Delay:</strong> message delivery ممکن است با delay همراه باشد</li>
            <li><strong>Duplicate Messages:</strong> ممکن است duplicate message ها deliver شوند (نیاز به idempotent handling)</li>
            <li><strong>Monitoring:</strong> نیاز به monitor کردن outbox processor برای اطمینان از عملکرد صحیح</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Libraries و Tools
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>MassTransit:</strong> built-in outbox support با Entity Framework Core</li>
            <li><strong>NServiceBus:</strong> outbox feature برای message deduplication</li>
            <li><strong>CAP:</strong> distributed transaction solution با outbox pattern</li>
            <li><strong>Wolverine:</strong> message handling با durable outbox</li>
            <li><strong>Rebus:</strong> lightweight service bus با outbox capabilities</li>
            <li><strong>MediatR:</strong> می‌تواند با custom outbox implementation استفاده شود</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوهای مرتبط
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/domain-events" className="text-blue-600 dark:text-blue-400 hover:underline">Domain Events Pattern</Link> - اغلب با Outbox برای reliable domain event processing استفاده می‌شود</li>
            <li><Link href="/design-patterns/cqrs" className="text-blue-600 dark:text-blue-400 hover:underline">CQRS Pattern</Link> - Outbox برای sync کردن read و write model ها کاربرد دارد</li>
            <li><strong>Saga Pattern</strong> - برای manage کردن distributed transaction ها</li>
            <li><strong>Event Sourcing</strong> - Outbox می‌تواند برای publish کردن event ها استفاده شود</li>
            <li><strong>Two-Phase Commit</strong> - alternative approach برای distributed transactions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="#" className="hover:underline">
                Building a Resilient Email Sending Method in .NET with SmtpClient, Retry Support, and the Outbox Pattern
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Send Email in dotnet with Mimekit, Retry, and Outbox Pattern
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Two-Phase Commit
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
