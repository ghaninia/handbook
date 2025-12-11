'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SpecificationPage() {
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
        Specification Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Specification Pattern چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            یکی از Domain-Driven-Design solution ها برای مشکل اینکه کجا querying، sorting، و paging logic را بگذاریم، استفاده از Specification است. Specification design pattern یک query را در یک object describe می‌کند. پس برای encapsulate کردن paged query ای که به دنبال product هایی می‌گردد، می‌توان PagedProduct specification ایجاد کرد که parameter های ضروری (pageSize، pageNumber، filter) را بگیرد.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            آنگاه یکی از repository method های شما (معمولاً List() overload) ISpecification را accept می‌کند و می‌تواند result مورد انتظار را given specification produce کند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            چندین benefit برای این approach وجود دارد. Specification یک نام دارد (بر خلاف یک مشت LINQ expression ها) که می‌توانید درباره‌اش reasoning و discuss کنید. می‌تواند به صورت جداگانه unit test شود تا correctness اطمینان حاصل شود. و اگر به همان behavior نیاز داشته باشید می‌تواند به آسانی reuse شود (مثلاً روی MVC View action و Web API action، و همچنین در service های مختلف).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایای بیشتر Specification Pattern
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            علاوه بر این، specification همچنین می‌تواند برای describe کردن shape از data ای که باید return شود استفاده شود، تا query ها فقط data ای که نیاز دارند return کنند. این نیاز به lazy loading در web application ها را حذف می‌کند (bad idea) و کمک می‌کند repository implementation ها از cluttered شدن با این detail ها نگه داریم.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Ardalis.Specification
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            اگر در نظر دارید Specification pattern را در .NET application خود implementing کنید، به ویژه اگر از EF استفاده می‌کنید، به Ardalis.Specification repository و NuGet Package من نگاهی بیندازید. احتمالاً هر چیزی که برای get started نیاز دارید را فراهم می‌کند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Generic Specification Interface
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// https://github.com/dotnet-architecture/eShopOnWeb
public interface ISpecification<T>
{
    Expression<Func<T, bool>> Criteria { get; }
    List<Expression<Func<T, object>>> Includes { get; }
    List<string> IncludeStrings { get; }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Generic Specification Implementation (Base Class)
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// https://github.com/dotnet-architecture/eShopOnWeb
public abstract class BaseSpecification<T> : ISpecification<T>
{
    public BaseSpecification(Expression<Func<T, bool>> criteria)
    {
        Criteria = criteria;
    }
    public Expression<Func<T, bool>> Criteria { get; }
    public List<Expression<Func<T, object>>> Includes { get; } = new List<Expression<Func<T, object>>>();
    public List<string> IncludeStrings { get; } = new List<string>();

    protected virtual void AddInclude(Expression<Func<T, object>> includeExpression)
    {
        Includes.Add(includeExpression);
    }
    // string-based includes allow for including children of children, e.g. Basket.Items.Product
    protected virtual void AddInclude(string includeString)
    {
        IncludeStrings.Add(includeString);
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Simple Specification مثال
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Specification زیر یک basket entity را given basket's ID یا ID از buyer ای که basket به او تعلق دارد load می‌کند. basket's Items collection را eager load می‌کند.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class BasketWithItemsSpecification : BaseSpecification<Basket>
{
    public BasketWithItemsSpecification(int basketId)
        : base(b => b.Id == basketId)
    {
        AddInclude(b => b.Items);
    }
    public BasketWithItemsSpecification(string buyerId)
        : base(b => b.BuyerId == buyerId)
    {
        AddInclude(b => b.Items);
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Generic EF Repository با Specification
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            زیر مثالی از repository method است که از specification برای filter و eager load data مربوط به generic entity type داده شده T استفاده می‌کند.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// https://github.com/dotnet-architecture/eShopOnWeb
public IEnumerable<T> List(ISpecification<T> spec)
{
    // fetch a Queryable that includes all expression-based includes
    var queryableResultWithIncludes = spec.Includes
        .Aggregate(_dbContext.Set<T>().AsQueryable(),
            (current, include) => current.Include(include));

    // modify the IQueryable to include any string-based include statements
    var secondaryResult = spec.IncludeStrings
        .Aggregate(queryableResultWithIncludes,
            (current, include) => current.Include(include));

    // return the result of the query using the specification's criteria expression
    return secondaryResult
                    .Where(spec.Criteria)
                    .AsEnumerable();
}`}</pre>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-500 p-4 mb-4">
            <p className="text-yellow-700 dark:text-yellow-300 text-sm leading-relaxed">
              <strong>نکته مهم:</strong> اگرچه return کردن IQueryable از repository پیشنهاد نمی‌شود، اما استفاده از آنها درون repository برای build up کردن set از result ها کاملاً مناسب است.
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            می‌توانید این approach را در List method بالا مشاهده کنید، که از intermediate IQueryable expression ها برای build up کردن query's list از includes قبل از executing query با specification's criteria در خط آخر استفاده می‌کند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایای این Approach
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            چندین benefit برای این approach وجود دارد:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li><strong>Named queries:</strong> Specification یک نام دارد (بر خلاف یک مشت LINQ expression ها) که می‌توانید درباره‌اش reasoning و discuss کنید</li>
            <li><strong>Unit testable:</strong> می‌تواند به صورت جداگانه unit test شود تا correctness اطمینان حاصل شود</li>
            <li><strong>Reusable:</strong> اگر به همان behavior نیاز داشته باشید می‌تواند به آسانی reuse شود (مثل MVC View action، Web API action، و service های مختلف)</li>
            <li><strong>Shape control:</strong> می‌تواند shape data ای که باید return شود را describe کند، تا query ها فقط data مورد نیاز return کنند</li>
            <li><strong>No lazy loading:</strong> نیاز به lazy loading در web application ها را حذف می‌کند</li>
            <li><strong>Clean repositories:</strong> repository implementation ها را از cluttered شدن با query detail ها نگه می‌دارد</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوهای مرتبط
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/repository" className="text-blue-600 dark:text-blue-400 hover:underline">Repository Pattern</Link> - برای data access abstraction</li>
            <li><Link href="/design-patterns/rules-engine" className="text-blue-600 dark:text-blue-400 hover:underline">Rules Engine Pattern</Link> - برای complex business logic</li>
            <li><strong>Query Object Pattern</strong> - encapsulate query logic در object ها</li>
            <li><strong>Domain-Driven Design</strong> - domain model و business logic organization</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://github.com/dotnet-architecture/eShopOnWeb" target="_blank" rel="noopener" className="hover:underline">
                Microsoft eShopOnWeb - Specification Implementation
              </a>
            </li>
            <li>
              <a href="https://github.com/ardalis/Specification" target="_blank" rel="noopener" className="hover:underline">
                Ardalis.Specification GitHub Repository
              </a>
            </li>
            <li>
              <a href="https://deviq.com/design-patterns/specification-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Specification Pattern
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
