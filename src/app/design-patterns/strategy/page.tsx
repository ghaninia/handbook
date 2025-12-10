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
          ← بازگشت به الگوهای طراحی
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        الگوی Strategy (استراتژی)
      </h1>

      <div className="prose prose-sm max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            هدف (Intent)
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic mb-4">
            "تعریف خانواده‌ای از الگوریتم‌ها، کپسوله کردن هر یک، و قابل تعویض کردن آن‌ها. Strategy به الگوریتم اجازه می‌دهد مستقل از کلاینت‌هایی که از آن استفاده می‌کنند تغییر کند." [GoF]
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Strategy چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Strategy به یک شیء اجازه می‌دهد برخی یا تمام رفتارهای خود را بر اساس شیء دیگری که از یک interface خاص پیروی می‌کند، تعریف کند. یک نمونه خاص از این interface هنگام ایجاد یا فراخوانی کلاینت به آن ارائه می‌شود و رفتار واقعی مورد استفاده را مشخص می‌کند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            الگوی Strategy به طور گسترده برای دستیابی به اصول Single Responsibility، Explicit Dependencies و Dependency Inversion استفاده می‌شود و کلید Dependency Injection و استفاده از Inversion of Control Container ها است.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            ساختار
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            از نظر ساختاری، الگوی Strategy معمولاً شامل یک interface یا کلاس پایه انتزاعی است که "الگوریتم" مورد نظر را تعریف و کپسوله می‌کند. سپس پیاده‌سازی‌های خاص این interface ایجاد می‌شوند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            اگر به عنوان بخشی از refactoring انجام شود، اغلب کد strongly coupled از یک کلاس یا متد موجود استخراج می‌شود و با یک interface جایگزین می‌شود. کد مربوط به پیاده‌سازی خاص سپس به یک پیاده‌سازی از این interface منتقل می‌شود.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال: Dependency Injection
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Strategy اغلب به عنوان ابزاری برای Dependency Injection استفاده می‌شود. در این مثال، ارجاعات hard-coded به Entity Framework DbContext محلی با یک interface جایگزین شده است که از Repository Pattern استفاده می‌کند:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class MoviesController : Controller
{
    private readonly IMovieRepository _movieRepository;
    
    public MoviesController(IMovieRepository movieRepository)
    {
        _movieRepository = movieRepository;
    }
    
    // Poor man's dependency injection برای سازنده پیش‌فرض
    public MoviesController() : this(new EfMovieRepository())
    {}
    
    // GET: /Movies/
    public ActionResult Index(string movieGenre, string searchString)
    {
        ViewBag.movieGenre = new SelectList(_movieRepository.ListGenres());
        return View(_movieRepository.ListMovies(movieGenre, searchString));
    }
}

// استراتژی - رابط Repository
public interface IMovieRepository
{
    IEnumerable<string> ListGenres();
    IEnumerable<Movie> ListMovies(string movieGenre, string searchString);
}

// پیاده‌سازی خاص - EF
public class EfMovieRepository : IMovieRepository
{
    private readonly MovieDbContext db = new MovieDbContext();
    
    public IEnumerable<string> ListGenres()
    {
        var genreQry = from d in db.Movies
                       orderby d.Genre
                       select d.Genre;
        
        return genreQry.Distinct().ToList();
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
        
        return movies.ToList();
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نکات کلیدی
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              <strong>توجه:</strong> توجه کنید که کلمه کلیدی <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">new</code> تقریباً کاملاً حذف شده است - فقط در "poor man's dependency injection" استفاده شده که توسط سازنده پیش‌فرض انجام می‌شود.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              به یاد داشته باشید: <strong>"new is glue"</strong> - اگر می‌توانید از ایجاد مستقیم وابستگی‌ها خودداری کنید. ترجیحاً این وابستگی‌ها را به کلاس خود تزریق کنید و از اصل Explicit Dependencies پیروی کنید (و اغلب از الگوی Strategy برای این کار استفاده کنید).
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            ارتباط با اصول SOLID
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Single Responsibility:</strong> هر استراتژی مسئولیت واحدی دارد</li>
            <li><strong>Open/Closed:</strong> می‌توانید استراتژی‌های جدید اضافه کنید بدون تغییر کد موجود</li>
            <li><strong>Dependency Inversion:</strong> کد وابسته به abstraction است نه implementation</li>
            <li><strong>Explicit Dependencies:</strong> وابستگی‌ها از طریق constructor تزریق می‌شوند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/strategy-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Strategy Pattern
              </a>
            </li>
            <li>
              <a href="http://bit.ly/DesignPatternsLibrary" target="_blank" rel="noopener" className="hover:underline">
                Pluralsight - Design Patterns Library
              </a>
            </li>
            <li>
              <a href="http://amzn.to/vep3BT" target="_blank" rel="noopener" className="hover:underline">
                Amazon - Design Patterns: Elements of Reusable Object-Oriented Software (GoF)
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
