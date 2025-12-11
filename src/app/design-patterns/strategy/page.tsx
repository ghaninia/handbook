'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function StrategyPage() {
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
        Strategy Design Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوی Strategy چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی طراحی Strategy به یک شیء اجازه می‌دهد برخی یا تمام رفتارهای خود را بر اساس شیء دیگری که از یک interface خاص پیروی می‌کند، تعریف کند. یک نمونه خاص از این interface هنگام ایجاد یا فراخوانی کلاینت به آن ارائه می‌شود و رفتار واقعی مورد استفاده را مشخص می‌کند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            الگوی Strategy به طور گسترده برای دستیابی به اصول Single Responsibility، Explicit Dependencies و Dependency Inversion استفاده می‌شود و کلید Dependency Injection و استفاده از Inversion of Control Container ها است.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            هدف (Intent)
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm italic">
              "تعریف خانواده‌ای از الگوریتم‌ها، کپسوله کردن هر یک، و قابل تعویض کردن آن‌ها. Strategy به الگوریتم اجازه می‌دهد مستقل از کلاینت‌هایی که از آن استفاده می‌کنند تغییر کند." [GoF]
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            ساختار
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            از لحاظ ساختاری، الگوی Strategy معمولاً به شکل داشتن یک interface یا کلاس پایه انتزاعی است که "الگوریتم" مورد نظر را تعریف و کپسوله می‌کند. سپس، پیاده‌سازی‌های خاصی از این interface ایجاد می‌شوند. اگر به عنوان بخشی از refactoring انجام شود، اغلب کد tightly coupled از یک کلاس یا متد موجود استخراج شده و با یک interface جایگزین می‌شود.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال عملی
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Strategy اغلب به عنوان وسیله‌ای برای Dependency Injection به کار می‌رود. در این مثال، ارجاعات hard-coded به local entity framework dbcontext با یک interface جایگزین شده‌اند که در این مورد از الگوی Repository استفاده می‌کند.
          </p>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Controller با Dependency Injection</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class MoviesController : Controller
{
    private readonly IMovieRepository _movieRepository;
    
    public MoviesController(IMovieRepository movieRepository)
    {
        _movieRepository = movieRepository;
    }

    // "Poor man's dependency injection" - only for fallback
    public MoviesController() : this(new EfMovieRepository())
    {}

    // GET: /Movies/
    public ActionResult Index(string movieGenre, string searchString)
    {
        ViewBag.movieGenre = new SelectList(_movieRepository.ListGenres());
        return View(_movieRepository.ListMovies(movieGenre, searchString));
    }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Strategy Interface</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface IMovieRepository
{
    IEnumerable<string> ListGenres();
    IEnumerable<Movie> ListMovies(string movieGenre, string searchString);
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Concrete Strategy Implementation</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class EfMovieRepository : IMovieRepository
{
    private readonly MovieDbContext db = new MovieDbContext();
    
    public IEnumerable<string> ListGenres()
    {
        var genreLst = new List<string>();

        var genreQry = from d in db.Movies
                       orderby d.Genre
                       select d.Genre;

        genreLst.AddRange(genreQry.Distinct());

        return genreLst.AsEnumerable();
    }

    public IEnumerable<Movie> ListMovies(string movieGenre, string searchString)
    {
        var movies = from m in db.Movies
                     select m;

        if (!String.IsNullOrEmpty(searchString))
        {
            movies = movies.Where(s => s.Title.Contains(searchString));
        }

        if (!string.IsNullOrEmpty(movieGenre))
        {
            movies = movies.Where(x => x.Genre == movieGenre);
        }
        
        return movies.AsEnumerable();
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نکات کلیدی
          </h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              <strong>"New is Glue":</strong> توجه کنید که کلیدواژه new تقریباً کاملاً غایب است - فقط در "poor man's dependency injection" که توسط constructor پیش‌فرض استفاده می‌شود، به کار رفته است. حتی این هم می‌تواند حذف شود هنگامی که یک IOC container به پروژه اضافه شود.
            </p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>از ایجاد مستقیم dependencies اجتناب کنید</li>
            <li>dependencies را به کلاس خود منتقل کنید</li>
            <li>از اصل Explicit Dependencies پیروی کنید</li>
            <li>اغلب از الگوی Strategy برای این کار استفاده کنید</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال دیگر: Payment Processing
          </h2>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Payment Strategy Interface</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface IPaymentStrategy
{
    Task<PaymentResult> ProcessPaymentAsync(decimal amount, PaymentInfo info);
    bool CanProcess(PaymentMethod method);
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Concrete Strategies</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class CreditCardPaymentStrategy : IPaymentStrategy
{
    public async Task<PaymentResult> ProcessPaymentAsync(decimal amount, PaymentInfo info)
    {
        // Credit card processing logic
        return new PaymentResult { Success = true };
    }

    public bool CanProcess(PaymentMethod method) => method == PaymentMethod.CreditCard;
}

public class PayPalPaymentStrategy : IPaymentStrategy
{
    public async Task<PaymentResult> ProcessPaymentAsync(decimal amount, PaymentInfo info)
    {
        // PayPal processing logic
        return new PaymentResult { Success = true };
    }

    public bool CanProcess(PaymentMethod method) => method == PaymentMethod.PayPal;
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Payment Processor Context</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class PaymentProcessor
{
    private readonly IEnumerable<IPaymentStrategy> _paymentStrategies;

    public PaymentProcessor(IEnumerable<IPaymentStrategy> paymentStrategies)
    {
        _paymentStrategies = paymentStrategies;
    }

    public async Task<PaymentResult> ProcessPaymentAsync(
        decimal amount, 
        PaymentInfo info, 
        PaymentMethod method)
    {
        var strategy = _paymentStrategies.FirstOrDefault(s => s.CanProcess(method));
        
        if (strategy == null)
            throw new NotSupportedException($"Payment method {method} is not supported");
            
        return await strategy.ProcessPaymentAsync(amount, info);
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایا
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>جایگزینی آسان الگوریتم‌ها:</strong> می‌توانید الگوریتم‌ها را در runtime تغییر دهید</li>
            <li><strong>اصل Open/Closed:</strong> کلاس‌های جدید بدون تغییر کد موجود اضافه می‌شوند</li>
            <li><strong>حذف conditional statements:</strong> جایگزین if/else یا switch statements پیچیده</li>
            <li><strong>Testability:</strong> هر strategy را می‌توان به طور مجزا تست کرد</li>
            <li><strong>Dependency Injection:</strong> پشتیبانی از IoC containers</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            معایب
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>افزایش تعداد کلاس‌ها:</strong> هر strategy نیاز به کلاس جداگانه دارد</li>
            <li><strong>پیچیدگی اضافی:</strong> برای مسائل ساده ممکن است over-engineering باشد</li>
            <li><strong>آگاهی از strategies:</strong> کلاینت باید از تمام strategies مطلع باشد</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوهای مرتبط
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/state" className="text-blue-600 dark:text-blue-400 hover:underline">State Pattern</Link> - ساختار مشابه اما هدف متفاوت</li>
            <li><Link href="/design-patterns/factory-method" className="text-blue-600 dark:text-blue-400 hover:underline">Factory Method</Link> - برای ایجاد strategies</li>
            <li><Link href="/design-patterns/decorator" className="text-blue-600 dark:text-blue-400 hover:underline">Decorator Pattern</Link> - برای ترکیب رفتارها</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612" target="_blank" rel="noopener" className="hover:underline">
                Design Patterns: Elements of Reusable Object-Oriented Software [GoF]
              </a>
            </li>
            <li>
              <a href="https://www.pluralsight.com/courses/patterns-library" target="_blank" rel="noopener" className="hover:underline">
                Design Patterns Library @ Pluralsight
              </a>
            </li>
            <li>
              <a href="https://ardalis.com/new-is-glue/" target="_blank" rel="noopener" className="hover:underline">
                New is Glue - Ardalis
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
