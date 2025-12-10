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
          ← بازگشت به الگوهای طراحی
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        الگوی Facade (نما)
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Facade چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Facade زمانی استفاده می‌شود که برای زیرسیستمی از یک سیستم پیچیده رابط ساده‌تری می‌خواهید. سیستم پیچیده معمولاً حاوی code smell شناخته شده‌ای به نام "big ball of mud" است که معمولاً از "the blob" تکامل یافته است. با استفاده از facade، رابطی ایجاد می‌کنید که فقط endpoint های ضروری برای زیرمجموعه‌ای از سیستم را نشان می‌دهد، نه کل سیستم پیچیده را.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>نکته:</strong> زیرسیستم از وجود facade آگاه نیست. ارتباطاتی از facade به زیرسیستم وجود دارد، اما از زیرسیستم به facade نه.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Example: eCommerce API
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            فرض کنید یک سیستم eCommerce با API یکپارچه دارید. این API دارای endpoint هایی برای سفارشات، فاکتورها، پروفایل مشتریان، محصولات، دسته‌بندی محصولات، مکان فروشگاه‌ها و موارد دیگر است.
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
            این‌ها زیرسیستم‌های زیادی هستند. داشتن همه آن‌ها در یک API اصول KISS و Separation of Concerns را نقض می‌کند. Facade ها سادگی را در آغوش می‌گیرند.
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
            با ایجاد این facade، کلاینت نیازی به نگرانی درباره IDهای مشتری، IDهای سفارش یا IDهای فاکتور ندارد. کلاینت فقط با عملیات مربوط به محصولات تعامل می‌کند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Facade Pattern in terms of DDD
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            وقتی صحبت از توسعه domain-driven می‌شود، به الگوی Facade به این صورت فکر کنید:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Domain</strong> - eCommerce - آنقدر بزرگ است که نمی‌توان همه چیز را در یک API جمع کرد</li>
            <li><strong>Subdomainها</strong> - مانند Orders، Invoices و Products - گروه‌بندی‌های منطقی فراهم می‌کنند که نشان می‌دهند facadeها در کجا مفید هستند</li>
            <li><strong>Bounded contextها</strong> مرزها و محدودیت‌های آن facadeها را فراهم می‌کنند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>سادگی:</strong> رابط ساده‌ای برای سیستم‌های پیچیده فراهم می‌کند</li>
            <li><strong>جداسازی:</strong> کلاینت‌ها از زیرسیستم پیچیده جدا می‌شوند</li>
            <li><strong>اصل KISS:</strong> Keep It Simple, Stupid</li>
            <li><strong>جداسازی نگرانی‌ها:</strong> هر facade نگرانی‌های مخصوص حوزه را مدیریت می‌کند</li>
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
