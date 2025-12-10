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
            What is Proxy?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Proxy یک جانشین یا placeholder برای شی دیگر فراهم می‌کند تا دسترسی به آن را کنترل کند. Proxy دسترسی به شی اصلی را کنترل می‌کند و به شما اجازه می‌دهد قبل یا بعد از رسیدن درخواست به شی اصلی کاری انجام دهید.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Proxy همان رابط را پیاده‌سازی می‌کند که real subject دارد، بنابراین می‌توان در هر جایی که real subject مورد انتظار است از آن استفاده کرد.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Types of Proxies
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Virtual Proxy:</strong> دسترسی به اشیاء گران‌ایجاد را کنترل می‌کند (lazy initialization)</li>
            <li><strong>Remote Proxy:</strong> شی در فضای آدرس متفاوت را نمایندگی می‌کند</li>
            <li><strong>Protection Proxy:</strong> دسترسی را بر اساس مجوزها کنترل می‌کند</li>
            <li><strong>Caching Proxy:</strong> نتایج عملیات هزینه‌بر را cache می‌کند</li>
            <li><strong>Smart Reference:</strong> هنگام دسترسی به شی عملیات اضافی انجام می‌دهد</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Virtual Proxy Example
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface IImage
{
    void Display();
}

// Real subject - expensive to create
public class HighResolutionImage : IImage
{
    private readonly string _filename;
    private byte[] _imageData;
    
    public HighResolutionImage(string filename)
    {
        _filename = filename;
        LoadFromDisk(); // Expensive operation
    }
    
    private void LoadFromDisk()
    {
        Console.WriteLine($"Loading {_filename} from disk...");
        // Simulate loading large image
        Thread.Sleep(2000);
        _imageData = File.ReadAllBytes(_filename);
    }
    
    public void Display()
    {
        Console.WriteLine($"Displaying {_filename}");
    }
}

// Virtual Proxy - lazy loading
public class ImageProxy : IImage
{
    private readonly string _filename;
    private HighResolutionImage? _realImage;
    
    public ImageProxy(string filename)
    {
        _filename = filename;
        // Don't load yet!
    }
    
    public void Display()
    {
        // Load only when needed
        _realImage ??= new HighResolutionImage(_filename);
        _realImage.Display();
    }
}

// Usage
var images = new List<IImage>
{
    new ImageProxy("photo1.jpg"),
    new ImageProxy("photo2.jpg"),
    new ImageProxy("photo3.jpg")
};

// Images are NOT loaded yet

images[0].Display(); // Only now photo1.jpg is loaded`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Caching Proxy Example
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface IWeatherService
{
    WeatherData GetWeather(string city);
}

public class WeatherApiService : IWeatherService
{
    public WeatherData GetWeather(string city)
    {
        Console.WriteLine($"Calling external API for {city}...");
        // Expensive API call
        return new WeatherData(city, 22.5m);
    }
}

// Caching Proxy
public class CachedWeatherService : IWeatherService
{
    private readonly IWeatherService _realService;
    private readonly Dictionary<string, (WeatherData Data, DateTime Expiry)> _cache = new();
    private readonly TimeSpan _cacheDuration = TimeSpan.FromMinutes(5);
    
    public CachedWeatherService(IWeatherService realService)
    {
        _realService = realService;
    }
    
    public WeatherData GetWeather(string city)
    {
        var key = city.ToLowerInvariant();
        
        if (_cache.TryGetValue(key, out var cached) && 
            cached.Expiry > DateTime.UtcNow)
        {
            Console.WriteLine($"Returning cached data for {city}");
            return cached.Data;
        }
        
        var data = _realService.GetWeather(city);
        _cache[key] = (data, DateTime.UtcNow.Add(_cacheDuration));
        
        return data;
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Protection Proxy Example
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface IDocument
{
    string GetContent();
    void SetContent(string content);
}

public class SensitiveDocument : IDocument
{
    private string _content = "";
    
    public string GetContent() => _content;
    public void SetContent(string content) => _content = content;
}

// Protection Proxy
public class DocumentProxy : IDocument
{
    private readonly SensitiveDocument _document;
    private readonly User _user;
    
    public DocumentProxy(SensitiveDocument document, User user)
    {
        _document = document;
        _user = user;
    }
    
    public string GetContent()
    {
        if (!_user.HasPermission("read"))
            throw new UnauthorizedAccessException("Read access denied");
            
        return _document.GetContent();
    }
    
    public void SetContent(string content)
    {
        if (!_user.HasPermission("write"))
            throw new UnauthorizedAccessException("Write access denied");
            
        _document.SetContent(content);
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Proxy vs Decorator
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 mb-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 text-sm">
              <li><strong>Proxy:</strong> دسترسی به شی را کنترل می‌کند. معمولاً lifecycle شی را مدیریت می‌کند.</li>
              <li><strong>Decorator:</strong> قابلیت جدید اضافه می‌کند. معمولاً شیئی که wrap می‌کند را دریافت می‌کند.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Lazy Initialization:</strong> ایجاد اشیاء گران را به تعویق می‌اندازد</li>
            <li><strong>Access Control:</strong> بدون تغییر شی واقعی بررسی‌های امنیتی اضافه می‌کند</li>
            <li><strong>Caching:</strong> با cache کردن نتایج عملکرد را بهبود می‌دهد</li>
            <li><strong>Logging:</strong> دسترسی به شی واقعی را ردیابی می‌کند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/decorator" className="text-blue-600 dark:text-blue-400 hover:underline">Decorator Pattern</Link></li>
            <li><Link href="/design-patterns/adapter" className="text-blue-600 dark:text-blue-400 hover:underline">Adapter Pattern</Link></li>
            <li><Link href="/design-patterns/facade" className="text-blue-600 dark:text-blue-400 hover:underline">Facade Pattern</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/proxy-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Proxy Pattern
              </a>
            </li>
            <li>
              <a href="http://bit.ly/DesignPatternsLibrary" target="_blank" rel="noopener" className="hover:underline">
                Pluralsight - Design Patterns Library
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
