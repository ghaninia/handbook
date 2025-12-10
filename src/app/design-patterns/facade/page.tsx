'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FacadePage() {
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
        Facade Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            What is Facade?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Facade Pattern is used when you want a simpler interface for a subsystem of a complex system. The complex system typically contains a code smell known as the "big ball of mud" that typically evolves from "the blob". By using a facade, you create an interface that only shows the necessary endpoints for a subset of a system rather than the entire complex system.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Note:</strong> The subsystem does not know that the facade exists. There are ties from the facade to the subsystem, but not from the subsystem to the facade.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Example: eCommerce API
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Suppose you have an eCommerce system with a monolithic API. The API has endpoints for orders, invoices, customer profiles, products, product categories, store locations, and more.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Monolithic API - too many responsibilities
public class eCommerceAPI
{
    GetAllOrders()
    GetOrdersByCustomer(customerId)
    GetOrder(orderId)
    GetAllInvoices()
    GetInvoicesByCustomer(customerId)
    GetInvoice(invoiceId)
    GetCustomerProfile(customerId)
    GetAllProducts()
    GetProduct(productId)
    GetAllProductCategories()
    GetProductCategory(categoryId)
    GetAllStores()
    GetStoreLocations()
    GetStoreLocation(storeId)
}`}</pre>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Those are many subsystems. Having them all in one API violates the KISS and Separation of Concerns principles. Facades embrace simplicity.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Creating a Product Facade
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Suppose you have a client that needs to maintain the products on the site. Create a facade that only deals with products and product categories:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Product Facade - simplified interface
public class ProductFacade
{
    private readonly IProductRepository _productRepository;
    private readonly ICategoryRepository _categoryRepository;
    
    public ProductFacade(
        IProductRepository productRepository,
        ICategoryRepository categoryRepository)
    {
        _productRepository = productRepository;
        _categoryRepository = categoryRepository;
    }
    
    public IEnumerable<Product> GetAllProducts() 
        => _productRepository.GetAll();
    
    public Product GetProduct(int productId) 
        => _productRepository.GetById(productId);
    
    public IEnumerable<Category> GetAllProductCategories() 
        => _categoryRepository.GetAll();
    
    public Category GetProductCategory(int categoryId) 
        => _categoryRepository.GetById(categoryId);
    
    public void AddProduct(ProductDto dto)
    {
        var category = _categoryRepository.GetById(dto.CategoryId);
        var product = new Product(dto.Name, dto.Price, category);
        _productRepository.Add(product);
    }
}`}</pre>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            By creating this facade, the client does not need to be concerned with customer IDs, order IDs, or invoice IDs. The client only interacts with product-related operations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Facade Pattern in terms of DDD
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            When it comes to domain-driven development, think of the Facade Pattern like this:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>The domain</strong> - eCommerce - is too large to group all things into one API</li>
            <li><strong>Subdomains</strong> - such as Orders, Invoices, and Products - provide logical groupings that may indicate where facades may be helpful</li>
            <li><strong>Bounded contexts</strong> provide the boundaries - the limitations - of those facades</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Simplicity:</strong> Provides a simple interface to complex systems</li>
            <li><strong>Decoupling:</strong> Clients are decoupled from the complex subsystem</li>
            <li><strong>KISS Principle:</strong> Keep It Simple, Stupid</li>
            <li><strong>Separation of Concerns:</strong> Each facade handles specific domain concerns</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/adapter" className="text-blue-600 dark:text-blue-400 hover:underline">Adapter Pattern</Link></li>
            <li><Link href="/design-patterns/strangler-fig" className="text-blue-600 dark:text-blue-400 hover:underline">Strangler Fig Pattern</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/facade-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Facade Pattern
              </a>
            </li>
            <li>
              <a href="https://app.pluralsight.com/library/courses/csharp-design-patterns-facade" target="_blank" rel="noopener" className="hover:underline">
                Pluralsight - C# Design Patterns: Facade
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
