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
          ← Back to Design Patterns
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Specification Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            What is Specification?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Specification pattern encapsulates query logic into reusable, composable objects. A specification is a predicate that determines if an object satisfies certain criteria. This pattern is particularly useful for building complex queries while keeping the repository clean.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Specifications can be combined using logical operators (AND, OR, NOT) to create complex criteria without polluting your repository with numerous query methods.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            The Problem
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              Repositories often end up with many specific query methods, leading to bloated interfaces.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Repository with too many specific methods
public interface IProductRepository
{
    IEnumerable<Product> GetActiveProducts();
    IEnumerable<Product> GetProductsByCategory(int categoryId);
    IEnumerable<Product> GetActiveProductsByCategory(int categoryId);
    IEnumerable<Product> GetProductsWithLowStock();
    IEnumerable<Product> GetActiveProductsWithLowStock();
    IEnumerable<Product> GetProductsByCategoryWithLowStock(int categoryId);
    IEnumerable<Product> GetProductsByPriceRange(decimal min, decimal max);
    // ... combinations explode!
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Specification Implementation
          </h2>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            1. Base Specification Interface
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface ISpecification<T>
{
    bool IsSatisfiedBy(T entity);
    Expression<Func<T, bool>> ToExpression();
}

public abstract class Specification<T> : ISpecification<T>
{
    public abstract Expression<Func<T, bool>> ToExpression();
    
    public bool IsSatisfiedBy(T entity)
    {
        var predicate = ToExpression().Compile();
        return predicate(entity);
    }
    
    // Combine with AND
    public Specification<T> And(Specification<T> other)
    {
        return new AndSpecification<T>(this, other);
    }
    
    // Combine with OR
    public Specification<T> Or(Specification<T> other)
    {
        return new OrSpecification<T>(this, other);
    }
    
    // Negate
    public Specification<T> Not()
    {
        return new NotSpecification<T>(this);
    }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            2. Create Specific Specifications
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class ActiveProductSpec : Specification<Product>
{
    public override Expression<Func<Product, bool>> ToExpression()
    {
        return product => product.IsActive;
    }
}

public class ProductByCategorySpec : Specification<Product>
{
    private readonly int _categoryId;
    
    public ProductByCategorySpec(int categoryId)
    {
        _categoryId = categoryId;
    }
    
    public override Expression<Func<Product, bool>> ToExpression()
    {
        return product => product.CategoryId == _categoryId;
    }
}

public class LowStockSpec : Specification<Product>
{
    private readonly int _threshold;
    
    public LowStockSpec(int threshold = 10)
    {
        _threshold = threshold;
    }
    
    public override Expression<Func<Product, bool>> ToExpression()
    {
        return product => product.StockQuantity < _threshold;
    }
}

public class PriceRangeSpec : Specification<Product>
{
    private readonly decimal _min;
    private readonly decimal _max;
    
    public PriceRangeSpec(decimal min, decimal max)
    {
        _min = min;
        _max = max;
    }
    
    public override Expression<Func<Product, bool>> ToExpression()
    {
        return product => product.Price >= _min && product.Price <= _max;
    }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            3. Clean Repository with Specifications
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface IRepository<T>
{
    IEnumerable<T> Find(ISpecification<T> spec);
    T? FindOne(ISpecification<T> spec);
    int Count(ISpecification<T> spec);
}

public class ProductRepository : IRepository<Product>
{
    private readonly AppDbContext _context;
    
    public IEnumerable<Product> Find(ISpecification<Product> spec)
    {
        return _context.Products
            .Where(spec.ToExpression())
            .ToList();
    }
    
    public Product? FindOne(ISpecification<Product> spec)
    {
        return _context.Products
            .FirstOrDefault(spec.ToExpression());
    }
    
    public int Count(ISpecification<Product> spec)
    {
        return _context.Products.Count(spec.ToExpression());
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Combining Specifications
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Usage - compose specifications!
var activeSpec = new ActiveProductSpec();
var electronicSpec = new ProductByCategorySpec(categoryId: 5);
var lowStockSpec = new LowStockSpec(threshold: 10);
var priceSpec = new PriceRangeSpec(50, 200);

// Active electronics with low stock
var spec1 = activeSpec
    .And(electronicSpec)
    .And(lowStockSpec);

var lowStockElectronics = repository.Find(spec1);

// Active products in price range OR low stock items
var spec2 = activeSpec.And(priceSpec)
    .Or(lowStockSpec);

var priorityProducts = repository.Find(spec2);

// Everything except electronics
var spec3 = electronicSpec.Not();

var nonElectronics = repository.Find(spec3);`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Ardalis.Specification Library
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The <strong>Ardalis.Specification</strong> NuGet package provides a robust implementation with EF Core integration.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Install-Package Ardalis.Specification.EntityFrameworkCore

public class ActiveProductsByCategory : Specification<Product>
{
    public ActiveProductsByCategory(int categoryId)
    {
        Query
            .Where(p => p.IsActive)
            .Where(p => p.CategoryId == categoryId)
            .Include(p => p.Category)
            .OrderBy(p => p.Name)
            .AsNoTracking();
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Reusability:</strong> Specifications can be reused across queries</li>
            <li><strong>Composability:</strong> Complex queries from simple building blocks</li>
            <li><strong>Clean Repository:</strong> Single query method instead of many</li>
            <li><strong>Testability:</strong> Specifications can be unit tested</li>
            <li><strong>DRY:</strong> Query logic defined once</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/repository" className="text-blue-600 dark:text-blue-400 hover:underline">Repository Pattern</Link></li>
            <li><Link href="/design-patterns/rules-engine" className="text-blue-600 dark:text-blue-400 hover:underline">Rules Engine Pattern</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/specification-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Specification Pattern
              </a>
            </li>
            <li>
              <a href="https://github.com/ardalis/Specification" target="_blank" rel="noopener" className="hover:underline">
                Ardalis.Specification GitHub
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
