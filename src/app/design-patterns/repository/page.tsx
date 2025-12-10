'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function RepositoryPage() {
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
        الگوی Repository (مخزن)
      </h1>

      <div className="prose prose-sm max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Repository چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Repository میانجی‌گری بین لایه دامنه و لایه نگاشت داده است. این الگو یک رابط شبیه مجموعه برای دسترسی به اشیاء دامنه فراهم می‌کند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Repository جزئیات دسترسی به داده را کپسوله می‌کند و یک API تمیزتر و object-oriented برای لایه دامنه فراهم می‌کند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایا
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>جداسازی منطق کسب‌وکار از منطق دسترسی به داده</li>
            <li>تست‌پذیری بهتر (می‌توان repository را mock کرد)</li>
            <li>مدیریت متمرکز منطق دسترسی به داده</li>
            <li>کاهش تکرار کد query</li>
            <li>انعطاف‌پذیری در تغییر منبع داده</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            پیاده‌سازی Generic Repository
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            رابط Generic Repository:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface IRepository<T> where T : class
{
    Task<T> GetByIdAsync(int id);
    Task<IEnumerable<T>> ListAsync();
    Task<IEnumerable<T>> ListAsync(ISpecification<T> spec);
    Task<T> AddAsync(T entity);
    Task UpdateAsync(T entity);
    Task DeleteAsync(T entity);
    Task<int> CountAsync(ISpecification<T> spec);
}`}</pre>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            پیاده‌سازی با Entity Framework Core:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class EfRepository<T> : IRepository<T> where T : class
{
    protected readonly DbContext _dbContext;

    public EfRepository(DbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public virtual async Task<T> GetByIdAsync(int id)
    {
        return await _dbContext.Set<T>().FindAsync(id);
    }

    public async Task<IEnumerable<T>> ListAsync()
    {
        return await _dbContext.Set<T>().ToListAsync();
    }

    public async Task<T> AddAsync(T entity)
    {
        await _dbContext.Set<T>().AddAsync(entity);
        await _dbContext.SaveChangesAsync();
        return entity;
    }

    public async Task UpdateAsync(T entity)
    {
        _dbContext.Entry(entity).State = EntityState.Modified;
        await _dbContext.SaveChangesAsync();
    }

    public async Task DeleteAsync(T entity)
    {
        _dbContext.Set<T>().Remove(entity);
        await _dbContext.SaveChangesAsync();
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            استفاده با Specification Pattern
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Repository معمولاً با Specification Pattern ترکیب می‌شود برای query های پیچیده:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Specification برای محصولات فعال
public class ActiveProductsSpec : Specification<Product>
{
    public ActiveProductsSpec()
        : base(p => p.IsActive && !p.IsDeleted)
    {
    }
}

// استفاده در سرویس
var activeProducts = await _productRepository
    .ListAsync(new ActiveProductsSpec());`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نکات مهم
          </h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>توجه:</strong> از برگرداندن IQueryable در repository خودداری کنید. این کار جزئیات پیاده‌سازی را leak می‌کند و lazy loading را فعال می‌کند که در وب اپلیکیشن‌ها مشکل‌ساز است.
            </p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>نکته:</strong> برای query های پیچیده، می‌توانید از Specification Pattern یا CQRS استفاده کنید.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوهای مرتبط
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/unit-of-work" className="text-blue-600 dark:text-blue-400 hover:underline">Unit of Work Pattern</Link></li>
            <li><Link href="/design-patterns/specification" className="text-blue-600 dark:text-blue-400 hover:underline">Specification Pattern</Link></li>
            <li>CQRS Pattern</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/repository-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Repository Pattern
              </a>
            </li>
            <li>
              <a href="https://www.pluralsight.com/courses/domain-driven-design-fundamentals" target="_blank" rel="noopener" className="hover:underline">
                Pluralsight - Domain-Driven Design Fundamentals
              </a>
            </li>
            <li>
              <a href="https://github.com/ardalis/Specification" target="_blank" rel="noopener" className="hover:underline">
                Ardalis.Specification (NuGet Package)
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
