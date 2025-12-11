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
            الگوی Unit of Work چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Unit of Work (UoW) فهرستی از تغییرات (درج، به‌روزرسانی، حذف) بر اشیاء domain نگهداری می‌کند و نوشتن این تغییرات را به عنوان یک عملیات atomic واحد (معمولاً یک transaction دیتابیس) هماهنگ می‌کند. به تضمین یکپارچگی، کاهش round-tripها و فراهم کردن یک نقطه commit (یا rollback) واحد کمک می‌کند.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 mb-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              <strong>Martin Fowler آن را اینطور توصیف می‌کند:</strong> الگویی که "پیگیری همه کارهایی که حین یک تراکنش تجاری انجام می‌دهید و می‌تواند بر دیتابیس تاثیر بگذارد. وقتی کارتان تمام شد، همه کارهایی که برای تغییر دیتابیس بر اساس کارتان لازم است را مشخص می‌کند."
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border-r-4 border-green-500 p-4 mb-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              <strong>نکته برای توسعه‌دهندگان .NET:</strong> اکثر ORMها (مثل Entity Framework Core) قبلاً الگوی Unit of Work را از طریق اشیاء context/session اصلی پیاده‌سازی کرده‌اند. اضافه کردن انتزاع شما اختیاری است اما بسته به برنامه و مسائلی مثل تست، رفتارهای cross-cutting، مرزهای transactional در چند repository، ارسال domain events و غیره ممکن است توجیه‌پذیر باشد.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مشکل
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            بدون Unit of Work، کد برنامه ممکن است:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li><strong>عملیات مستقل دیتابیس:</strong> چندین عملیات دیتابیس را به صورت مستقل انجام دهد (ریسک شکست جزئی)</li>
            <li><strong>تراکنش‌های غیرضروری:</strong> چندین تراکنش را بدون ضرورت باز/بسته کند (ضرر به عملکرد)</li>
            <li><strong>فقدان مرز معنایی:</strong> فاقد یک مرز معنایی واحد برای توصیف یک عملیات سطح تجاری باشد (مثل "ثبت سفارش")</li>
            <li><strong>دشواری batch کردن side-effectها:</strong> مشکل در batch کردن یا به تعویق انداختن side-effectها تا persistence موفق شود (مثل انتشار domain events، ارسال ایمیل، نوشتن پیام‌ها در جدول outbox)</li>
          </ul>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            این می‌تواند منجر به ناسازگاری‌های داده، منطق تکراری برای مدیریت تراکنش، و نشت مسائل persistence به لایه‌های application یا domain شود.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            راه‌حل
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Unit of Work مجموعه‌ای از عملیات را در یک مرز transactional واحد گروه‌بندی می‌کند:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li><strong>شروع پیگیری تغییرات</strong> (شروع یک تراکنش)</li>
            <li><strong>اجرای منطق domain/application</strong> که entity های domain را تغییر می‌دهد</li>
            <li><strong>ذخیره تمام تغییرات انباشته</strong> در یک commit atomic</li>
          </ol>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            اگر از معماری مبتنی بر messaging نیز استفاده می‌کنید، ممکن است Unit of Work را با الگوی Outbox ترکیب کنید تا تحویل قابل اعتماد پیام را تضمین کنید. پیام‌ها در جدول outbox ذخیره می‌شوند و فقط پس از commit موفق تراکنش اصلی که توسط Unit of Work مدیریت می‌شود، ارسال می‌شوند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            رابطه با الگوی Repository
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            این الگوها اغلب با هم استفاده می‌شوند:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li><strong>Repository:</strong> دسترسی به داده برای entity های domain را انتزاع می‌کند</li>
            <li><strong>Unit of Work:</strong> persistence تغییرات را در یک یا چند repository در یک تراکنش واحد هماهنگ می‌کند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال پیاده‌سازی
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            یکی از راه‌های پیاده‌سازی الگوی Unit of Work ایجاد interface IUnitOfWork است که قرارداد برای شروع، commit و rollback تراکنش‌ها را تعریف می‌کند.
          </p>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Unit of Work Interface</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto" dir="ltr">
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

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">استفاده در Application Code</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto" dir="ltr">
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
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نکته درباره این مثال
          </h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              توجه کنید که interface IRepository&lt;T&gt; در مثال فاقد متد CommitAsync یا SaveChangesAsync است. این عمدی است زیرا می‌توان نتیجه گرفت که پیاده‌سازی repository مسئول مدیریت تراکنش‌ها نیست. در عوض، این مسئولیت با Unit of Work است زمانی که این دو الگو با هم ترکیب می‌شوند.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            پیاده‌سازی با Entity Framework
          </h2>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">EF Core Unit of Work</h3>
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
        _transaction = await _context.Database.BeginTransactionAsync(cancellationToken);
    }

    public async Task CommitTransactionAsync(CancellationToken cancellationToken)
    {
        try
        {
            await _context.SaveChangesAsync(cancellationToken);
            await _transaction?.CommitAsync(cancellationToken);
        }
        catch
        {
            await _transaction?.RollbackAsync(cancellationToken);
            throw;
        }
        finally
        {
            _transaction?.Dispose();
        }
    }

    public async Task RollbackTransactionAsync(CancellationToken cancellationToken)
    {
        await _transaction?.RollbackAsync(cancellationToken);
        _transaction?.Dispose();
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایا
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>یکپارچگی داده:</strong> تضمین atomicity تمام عملیات</li>
            <li><strong>کاهش Round-trips:</strong> batch کردن تغییرات در یک عملیات</li>
            <li><strong>مرز transactional واضح:</strong> تعریف مشخص شروع و پایان تراکنش</li>
            <li><strong>مدیریت side-effects:</strong> کنترل زمان انجام عملیات جانبی</li>
            <li><strong>Rollback آسان:</strong> امکان برگشت تمام تغییرات در صورت خطا</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            معایب
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>پیچیدگی اضافی:</strong> ممکن است برای سناریوهای ساده over-engineering باشد</li>
            <li><strong>Lock طولانی:</strong> نگه داشتن تراکنش برای مدت طولانی</li>
            <li><strong>مصرف حافظه:</strong> track کردن تغییرات تا زمان commit</li>
            <li><strong>وابستگی به ORM:</strong> پیاده‌سازی وابسته به ORM مورد استفاده</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوهای مرتبط
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/repository" className="text-blue-600 dark:text-blue-400 hover:underline">Repository Pattern</Link> - اغلب با Unit of Work ترکیب می‌شود</li>
            <li><Link href="/design-patterns/outbox" className="text-blue-600 dark:text-blue-400 hover:underline">Outbox Pattern</Link> - برای reliable message delivery</li>
            <li><Link href="/design-patterns/domain-events" className="text-blue-600 dark:text-blue-400 hover:underline">Domain Events</Link> - برای side-effects پس از commit</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://martinfowler.com/eaaCatalog/unitOfWork.html" target="_blank" rel="noopener" className="hover:underline">
                Unit of Work by Martin Fowler
              </a>
            </li>
            <li>
              <a href="https://docs.microsoft.com/en-us/ef/core/saving/transactions" target="_blank" rel="noopener" className="hover:underline">
                Microsoft Docs – EF Core Transactions
              </a>
            </li>
            <li>
              <a href="https://www.pluralsight.com/courses/domain-driven-design-fundamentals" target="_blank" rel="noopener" className="hover:underline">
                Pluralsight - Domain-Driven Design Fundamentals
              </a>
            </li>
            <li>
              <a href="https://udidahan.com/2009/06/29/dont-create-aggregate-roots/" target="_blank" rel="noopener" className="hover:underline">
                Entities, Transactions, and Broken Boundaries by Udi Dahan
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}