'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProxyPage() {
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
        Proxy Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Proxy Pattern چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Proxy یک placeholder برای object دیگری فراهم می‌کند تا access به آن را control کند. این می‌تواند برای abstracting دسترسی به data object ها مفید باشد و functionality اضافی مانند lazy loading، access control، یا caching فراهم کند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            در سطح بالا، این pattern معمولاً با موارد زیر implement می‌شود:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>یک interface</li>
            <li>یک implementation از interface</li>
            <li>یک proxy برای wrap کردن implementation interface</li>
            <li>یک client برای consume کردن proxy</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            انواع Proxy ها
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            proxy های مختلفی وجود دارند که در کلاس کلی الگوی Proxy قرار می‌گیرند. این انواع شامل:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Virtual Proxy Pattern</strong></li>
            <li><strong>Remote Proxy Pattern</strong></li>
            <li><strong>Cache Proxy Pattern</strong></li>
            <li><strong>Synchronization Proxy Pattern</strong></li>
            <li><strong>Smart Proxy Pattern</strong></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Virtual Proxy Pattern
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            یک virtual proxy می‌تواند creation و initialization یک real resource را تا زمانی که واقعاً نیاز باشد به تعویق بیندازد و با avoid کردن unnecessary overhead و کاهش resource consumption، performance را بهبود بخشد. proxy، creation و management real object را handle می‌کند و به client اجازه می‌دهد روی core functionality خود تمرکز کند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            این pattern برخی drawback ها دارد. implement کردن lazy loading و manage کردن creation real object می‌تواند complexity به codebase اضافه کند. اگر به دقت implement نشود، overhead ایجاد و manage کردن proxy ها می‌تواند از benefit ها بیشتر شود.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            زمانی که creating real object resource-intensive یا time-consuming است، استفاده از virtual proxy منطقی است. هنگام dealing با loading heavy resource هایی مانند large image ها، virtual proxy توصیه می‌شود.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Remote Proxy Pattern
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            یک remote proxy می‌تواند network communication detail ها را encapsulate کند و local representation یک remote object فراهم کند که برای client transparent باشد. این نوع proxy، complexity های remote communication را پنهان می‌کند و local representation remote object فراهم می‌کند. با caching کردن result ها یا batching کردن request ها، remote proxy ها می‌توانند overhead network communication را کاهش دهند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            در حالی که remote proxy می‌تواند network communication ها را encapsulate کند و برای کمک به کاهش overhead network communication استفاده شود، با برخی drawback ها همراه است. Remote proxy ها به دلیل network communication، latency معرفی می‌کنند که می‌تواند application performance را تحت تأثیر قرار دهد. reliability remote proxy ها به network connectivity وابسته است و آنها را در برابر network failure ها آسیب‌پذیر می‌کند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            وقتی صحبت از network-related application ها می‌شود، remote proxy ها می‌توانند هنگام کار با distributed system هایی که object ها روی remote server ها قرار دارند کمک کنند. use case دیگری برای remote proxy ها، هنگام interaction با web API ها یا microservice ها از طریق network است.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Cache Proxy Pattern
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            یک cache proxy به کاهش load expensive query ها با store کردن value ها برای مدت زمان مشخص کمک می‌کند. با caching کردن result ها، caching proxy ها می‌توانند load روی server ها و database ها را کاهش دهند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            اما چیزهایی هست که هنگام implement کردن cache proxy باید در نظر گرفته شود. maintaining cache consistency می‌تواند challenging باشد، خاصه در distributed یا multi-threaded environment ها. تعیین کردن زمان invalidate کردن cached data و up-to-date نگه داشتن cache می‌تواند پیچیده باشد.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            cache proxy می‌تواند در application هایی که data را بیشتر از نوشتن می‌خوانند، مفید باشد. همچنین زمانی مفید است که result یک computation deterministic و expensive to compute باشد، چون caching کردن result می‌تواند performance را بهبود بخشد.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Synchronization Proxy Pattern
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            synchronization proxy در concurrency situation ها استفاده می‌شود تا اطمینان حاصل کند که access به real object در multiple thread ها synchronized است و از data corruption در multi-threaded environment ها جلوگیری کند. با encapsulate کردن synchronization logic، synchronization proxy ها manage کردن concurrency issue ها را آسان‌تر می‌کنند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Synchronization به دلیل locking و context switching، overhead معرفی می‌کند که می‌تواند application performance را تحت تأثیر قرار دهد. استفاده نادرست از lock ها می‌تواند منجر به deadlock شود، جایی که thread ها تا ابد منتظر یکدیگر برای release کردن lock ها هستند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            زمانی که multiple thread ها نیاز دارند به طور همزمان به shared resource ها access پیدا کنند و آنها را modify کنند، synchronization proxy می‌تواند برای اطمینان از thread safety استفاده شود. زمانی که operation های خاصی باید به صورت atomic اجرا شوند تا data consistency حفظ شود، synchronization proxy می‌تواند کمک کند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Smart Proxy Pattern
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Smart proxy ها می‌توانند access control policy ها را enforce کنند و اطمینان حاصل کنند که فقط authorized user ها می‌توانند به operation ها یا data های خاصی access پیدا کنند. آنها می‌توانند method invocation ها را log کنند و auditing انجام دهند تا usage pattern ها را track کنند و anomaly ها را detect کنند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            implement کردن functionality اضافی در proxy ها می‌تواند code complexity و maintenance overhead را افزایش دهد. اضافه کردن logic اضافی به proxy ها می‌تواند performance overhead معرفی کند، خاصه برای frequently accessed operation ها.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            زمانی که security اولویت اصلی است و access control باید در object level enforce شود، smart proxy می‌تواند به شما اجازه دهد آن functionality را بدون تغییر object code اضافه کنید. Smart proxy ها همچنین می‌توانند برای logging user action ها و maintaining audit trail ها برای compliance یا debugging purposes استفاده شوند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال Implementation
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            در اینجا مثال‌هایی از انواع مختلف Proxy Pattern در C# آورده شده است:
          </p>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            Virtual Proxy - Lazy Loading
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface IExpensiveResource
{
    string GetData();
}

public class ExpensiveResource : IExpensiveResource
{
    public ExpensiveResource()
    {
        Console.WriteLine("Creating expensive resource...");
        // Simulate expensive initialization
        Thread.Sleep(2000);
    }
    
    public string GetData()
    {
        return "Expensive data";
    }
}

// Virtual Proxy
public class VirtualProxy : IExpensiveResource
{
    private ExpensiveResource? _realResource;
    
    public string GetData()
    {
        // Create only when needed (lazy loading)
        _realResource ??= new ExpensiveResource();
        return _realResource.GetData();
    }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            Cache Proxy
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface IDataService
{
    string GetExpensiveData(string key);
}

public class DatabaseService : IDataService
{
    public string GetExpensiveData(string key)
    {
        Console.WriteLine($"Fetching data from database for {key}...");
        // Simulate expensive database call
        Thread.Sleep(1000);
        return $"Data for {key}";
    }
}

// Cache Proxy
public class CacheProxy : IDataService
{
    private readonly IDataService _realService;
    private readonly Dictionary<string, (string Data, DateTime Expiry)> _cache = new();
    
    public CacheProxy(IDataService realService)
    {
        _realService = realService;
    }
    
    public string GetExpensiveData(string key)
    {
        if (_cache.TryGetValue(key, out var cached) && 
            cached.Expiry > DateTime.UtcNow)
        {
            Console.WriteLine($"Returning cached data for {key}");
            return cached.Data;
        }
        
        var data = _realService.GetExpensiveData(key);
        _cache[key] = (data, DateTime.UtcNow.AddMinutes(5));
        
        return data;
    }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            Smart Proxy - Access Control & Logging
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface IBankAccount
{
    decimal GetBalance();
    void Withdraw(decimal amount);
}

public class BankAccount : IBankAccount
{
    private decimal _balance = 1000m;
    
    public decimal GetBalance() => _balance;
    
    public void Withdraw(decimal amount)
    {
        if (amount <= _balance)
            _balance -= amount;
        else
            throw new InvalidOperationException("Insufficient funds");
    }
}

// Smart Proxy with access control and logging
public class SecureBankAccountProxy : IBankAccount
{
    private readonly BankAccount _account;
    private readonly string _userId;
    private readonly ILogger _logger;
    
    public SecureBankAccountProxy(BankAccount account, string userId, ILogger logger)
    {
        _account = account;
        _userId = userId;
        _logger = logger;
    }
    
    public decimal GetBalance()
    {
        _logger.Log($"User {_userId} checked balance");
        
        if (!IsAuthorized("read"))
            throw new UnauthorizedAccessException("Access denied");
            
        return _account.GetBalance();
    }
    
    public void Withdraw(decimal amount)
    {
        _logger.Log($"User {_userId} attempted withdrawal of {amount:C}");
        
        if (!IsAuthorized("withdraw"))
            throw new UnauthorizedAccessException("Withdrawal access denied");
            
        _account.Withdraw(amount);
        _logger.Log($"Withdrawal successful: {amount:C}");
    }
    
    private bool IsAuthorized(string operation)
    {
        // Check user permissions
        return true; // Simplified
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نتیجه‌گیری
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            هر proxy pattern benefit های متمایزی ارائه می‌دهد و برای scenario های مختلف مناسب است. انتخاب pattern مناسب به requirement های خاص application شما بستگی دارد، مانند performance consideration ها، concurrency requirement ها، و security concern ها.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایا
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Control Access:</strong> دسترسی به object را control می‌کند</li>
            <li><strong>Lazy Loading:</strong> expensive object creation را defer می‌کند</li>
            <li><strong>Caching:</strong> performance را با cache کردن result ها بهبود می‌بخشد</li>
            <li><strong>Security:</strong> authorization و authentication اضافه می‌کند</li>
            <li><strong>Logging:</strong> access و operation ها را track می‌کند</li>
            <li><strong>Remote Access:</strong> remote object ها را transparent می‌کند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نکات منفی
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Complexity:</strong> layer اضافی از abstraction اضافه می‌کند</li>
            <li><strong>Performance Overhead:</strong> proxy layer می‌تواند overhead اضافه کند</li>
            <li><strong>Memory Usage:</strong> proxy object ها memory اضافی مصرف می‌کنند</li>
            <li><strong>Debugging:</strong> debug کردن interaction ها پیچیده‌تر می‌شود</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوهای مرتبط
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/decorator" className="text-blue-600 dark:text-blue-400 hover:underline">Decorator Pattern</Link> - هر دو object ها را wrap می‌کنند اما اهداف متفاوتی دارند</li>
            <li><Link href="/design-patterns/adapter" className="text-blue-600 dark:text-blue-400 hover:underline">Adapter Pattern</Link> - interface conversion در مقابل access control</li>
            <li><Link href="/design-patterns/facade" className="text-blue-600 dark:text-blue-400 hover:underline">Facade Pattern</Link> - simplified interface در مقابل controlled access</li>
            <li><strong>Strategy Pattern</strong> - می‌تواند برای implement کردن different proxy behaviors استفاده شود</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="#" className="hover:underline">
                C# Design Patterns: Proxy (Pluralsight)
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
