'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function UnitOfWorkPage() {
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
        Unit of Work Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            What is Unit of Work?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Unit of Work (UoW) فهرستی از تغییرات (درج، به‌روزرسانی، حذف) بر اشیاء domain نگهداری می‌کند و نوشتن این تغییرات را به عنوان یک عملیات atomic واحد (معمولاً یک transaction دیتابیس) هماهنگ می‌کند. به تضمین یکپارچگی، کاهش round-tripها و فراهم کردن یک نقطه commit (یا rollback) واحد کمک می‌کند.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              <strong>Martin Fowler آن را اینطور توصیف می‌کند:</strong> الگویی که "پیگیری همه کارهایی که حین یک تراکنش تجاری انجام می‌دهید و می‌تواند بر دیتابیس تاثیر بگذارد. وقتی کارتان تمام شد، همه کارهایی که برای تغییر دیتابیس بر اساس کارتان لازم است را مشخص می‌کند."
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 border-r-4 border-green-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              <strong>نکته برای توسعه‌دهندگان .NET:</strong> اکثر ORMها (مثل Entity Framework Core) قبلاً الگوی Unit of Work را از طریق اشیاء context/session اصلی پیاده‌سازی کرده‌اند. اضافه کردن انتزاع شما اختیاری است اما بسته به برنامه و مسائلی مثل تست، رفتارهای cross-cutting، مرزهای transactional در چند repository، ارسال domain events و غیره ممکن است توجیه‌پذیر باشد.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            The Problem
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            بدون Unit of Work، کد برنامه ممکن است:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li>Perform multiple database operations independently (risking partial failure)</li>
            <li>Open/close multiple transactions unnecessarily (hurting performance)</li>
            <li>Lack a single semantic boundary describing a business-level operation (e.g., "Place Order")</li>
            <li>Have difficulty batching or deferring side-effects until persistence succeeds (e.g., publishing domain events, sending emails, writing messages to an outbox table)</li>
          </ol>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This can lead to data inconsistencies, duplicated logic for transaction management, and leaky persistence concerns creeping into application or domain layers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            The Solution
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Unit of Work groups a set of operations into a single transactional boundary:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li>Start tracking changes (begin a transaction)</li>
            <li>Execute domain/application logic that mutates domain entities</li>
            <li>Persist all accumulated changes in one atomic commit</li>
          </ol>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            If you're utilizing a messaging based architecture, you may pair the Unit of Work with an <Link href="/design-patterns/outbox" className="text-blue-600 dark:text-blue-400 hover:underline">Outbox Pattern</Link> to ensure reliable message delivery. The messages are stored in an outbox table and only dispatched after the main transaction managed by the Unit of Work commits successfully.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Relationship to Repository Pattern
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            این الگوها اغلب با هم استفاده می‌شوند:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Repository</strong> دسترسی به دیتا برای انتیتی‌های domain را انتزاع می‌کند</li>
            <li><strong>Unit of Work</strong> ماندگاری تغییرات را در یک یا چند repository در یک transaction واحد هماهنگ می‌کند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Implementation Example
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            یکی از راه‌های پیاده‌سازی الگوی Unit of Work ایجاد رابط <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">IUnitOfWork</code> است که قرارداد شروع، commit و rollback کردن transactionها را تعریف می‌کند.
          </p>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            Unit of Work Interface
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface IUnitOfWork
{
    Task BeginTransactionAsync(CancellationToken cancellationToken);
    Task CommitTransactionAsync(CancellationToken cancellationToken);
    Task RollbackTransactionAsync(CancellationToken cancellationToken);
}

public interface IRepository<T> where T : EntityBase
{
    Task<T?> GetByIdAsync(int id, CancellationToken cancellationToken);
    Task AddAsync(T entity, CancellationToken cancellationToken);
    Task UpdateAsync(T entity);
    Task RemoveAsync(T entity);
    // No CommitAsync/SaveChangesAsync here
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            Using Unit of Work in Application Code
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class OrderService
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IRepository<Order> _orderRepository;
    private readonly IRepository<OrderItem> _orderItemRepository;

    public OrderService(
        IUnitOfWork unitOfWork,
        IRepository<Order> orderRepository,
        IRepository<OrderItem> orderItemRepository)
    {
        _unitOfWork = unitOfWork;
        _orderRepository = orderRepository;
        _orderItemRepository = orderItemRepository;
    }

    public async Task PlaceOrderAsync(Order order, CancellationToken cancellationToken)
    {
        await _unitOfWork.BeginTransactionAsync(cancellationToken);
        try
        {
            await _orderRepository.AddAsync(order, cancellationToken);

            foreach (var item in order.Items)
            {
                await _orderItemRepository.AddAsync(item, cancellationToken);
            }

            await _unitOfWork.CommitTransactionAsync(cancellationToken);
        }
        catch
        {
            await _unitOfWork.RollbackTransactionAsync(cancellationToken);
            throw;
        }
    }
}`}</pre>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              <strong>Note about this example:</strong> Notice the example <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-xs">IRepository&lt;T&gt;</code> interface lacks a <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-xs">CommitAsync</code> or <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-xs">SaveChangesAsync</code> method. This is intentional as the repository implementation is not responsible for managing transactions. Instead, that responsibility lies with the Unit of Work when these two patterns are paired together.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Entity Framework Core Implementation
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Entity Framework Core already implements Unit of Work through DbContext. Here's how you can wrap it:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class EfUnitOfWork : IUnitOfWork
{
    private readonly AppDbContext _context;
    private IDbContextTransaction? _transaction;

    public EfUnitOfWork(AppDbContext context)
    {
        _context = context;
    }

    public async Task BeginTransactionAsync(CancellationToken cancellationToken)
    {
        _transaction = await _context.Database
            .BeginTransactionAsync(cancellationToken);
    }

    public async Task CommitTransactionAsync(CancellationToken cancellationToken)
    {
        try
        {
            await _context.SaveChangesAsync(cancellationToken);
            
            if (_transaction != null)
            {
                await _transaction.CommitAsync(cancellationToken);
            }
        }
        finally
        {
            await DisposeTransactionAsync();
        }
    }

    public async Task RollbackTransactionAsync(CancellationToken cancellationToken)
    {
        try
        {
            if (_transaction != null)
            {
                await _transaction.RollbackAsync(cancellationToken);
            }
        }
        finally
        {
            await DisposeTransactionAsync();
        }
    }

    private async Task DisposeTransactionAsync()
    {
        if (_transaction != null)
        {
            await _transaction.DisposeAsync();
            _transaction = null;
        }
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Atomicity:</strong> All changes succeed or fail together</li>
            <li><strong>Performance:</strong> Reduces database round-trips</li>
            <li><strong>Consistency:</strong> Maintains data integrity across multiple operations</li>
            <li><strong>Testability:</strong> Can be mocked for unit testing</li>
            <li><strong>Cross-cutting concerns:</strong> Perfect place for logging, caching, events</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/repository" className="text-blue-600 dark:text-blue-400 hover:underline">Repository Pattern</Link></li>
            <li><Link href="/design-patterns/outbox" className="text-blue-600 dark:text-blue-400 hover:underline">Outbox Pattern</Link></li>
            <li><Link href="/design-patterns/domain-events" className="text-blue-600 dark:text-blue-400 hover:underline">Domain Events</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/unit-of-work-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Unit of Work Pattern
              </a>
            </li>
            <li>
              <a href="https://martinfowler.com/eaaCatalog/unitOfWork.html" target="_blank" rel="noopener" className="hover:underline">
                Unit of Work by Martin Fowler
              </a>
            </li>
            <li>
              <a href="https://learn.microsoft.com/en-us/ef/core/saving/transactions" target="_blank" rel="noopener" className="hover:underline">
                Microsoft Docs – EF Core Transactions
              </a>
            </li>
            <li>
              <a href="https://www.pluralsight.com/courses/fundamentals-domain-driven-design" target="_blank" rel="noopener" className="hover:underline">
                Pluralsight - Domain-Driven Design Fundamentals
              </a>
            </li>
            <li>
              <a href="https://udidahan.com/2011/03/05/entities-transactions-and-broken-boundaries/" target="_blank" rel="noopener" className="hover:underline">
                Entities, Transactions, and Broken Boundaries by Udi Dahan
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}