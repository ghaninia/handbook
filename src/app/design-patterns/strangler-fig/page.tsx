'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function StranglerFigPage() {
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
        Strangler Fig Design Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوی Strangler Fig چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            چه در حال refactoring از monolith به microservices باشید یا در حال مهاجرت از یک فناوری به فناوری دیگر - مانند ASP.NET WebForms به Blazor، این تغییر می‌تواند پروژه بزرگی باشد. الگوی Strangler Fig به شما امکان انجام این مهاجرت‌ها با سرعت کمتر را می‌دهد و از یک سیستم به سیستم دیگر بر اساس ماژول و نه در کل مهاجرت کنید.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            چه زمانی استفاده کنیم؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            زمانی که نیاز دارید معماری backend legacy را در مدت زمان طولانی به معماری جدیدتری منتقل کنید، الگوی Strangler Fig این امکان را فراهم می‌کند که بتوانید با حداقل اختلال در سیستم موجود، به سیستم جدیدتری مهاجرت کنید.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            چه زمانی استفاده نکنیم؟
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>سیستم کوچک:</strong> اگر جایگزینی سیستم، سیستم کوچکی باشد، ممکن است استفاده از الگوی Strangler Fig منطقی نباشد. اگر می‌توانید سیستم را در مدت زمان کوتاه‌تری مهاجرت دهید، آن را طولانی نکشید</li>
            <li><strong>عدم امکان رهگیری:</strong> اگر فراخوانی‌های backend قابل رهگیری نیستند، آنگاه چیزی نیست که استفاده از facade ها را الزامی کند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            چگونه کار می‌کند؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Strangler Fig نام و الگوی کلی خود را از درخت strangler fig گرفته است. درختان Strangler Fig در یک درخت میزبان جوانه می‌زنند. همانطور که گیاهان رشد می‌کنند، ریشه‌ها از بالای درخت میزبان به سمت زمین رشد می‌کنند. هنگامی که ریشه‌ها تثبیت شدند، درخت انجیر رشد کرده و کنترل را به دست می‌گیرد - میزبان خود را خفه می‌کند.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 mb-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              در رابطه با توسعه نرم‌افزار، الگوی Strangler Fig از الگوی Facade استفاده می‌کند تا ریشه‌های سیستم نرم‌افزاری را از سیستم قدیمی به سیستم جدید منتقل کند. درست مثل یک strangler fig، زمانی که تمام ریشه‌ها جایگزین شده‌اند، سیستم جدید زندگی مستقل خود را آغاز می‌کند و سیستم قدیمی را خفه می‌کند.
            </p>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">مراحل پیاده‌سازی</h3>
          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">مرحله ۱: درخواست مستقیم</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">کلاینت مستقیماً درخواست را به سیستم قدیمی ارسال می‌کند</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">مرحله ۲: معرفی Facade</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">کلاینت درخواست را به facade ارسال می‌کند، سیستم قدیمی پاسخ می‌دهد</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">مرحله ۳: مهاجرت تدریجی</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">کلاینت درخواست را به facade ارسال می‌کند، سیستم جدید پاسخ می‌دهد</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">مرحله ۴: تکمیل مهاجرت</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">کلاینت مستقیماً به سیستم جدید درخواست ارسال می‌کند، سیستم قدیمی خفه شده (دیگر استفاده نمی‌شود)</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نمونه پیاده‌سازی
          </h2>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">API Gateway به عنوان Facade</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// API Gateway routing configuration
public class StranglerFacade
{
    private readonly LegacyService _legacyService;
    private readonly NewService _newService;
    private readonly IFeatureToggleService _featureToggle;

    public async Task<IActionResult> HandleRequest(string endpoint, object request)
    {
        // Gradually route requests to new system
        if (await _featureToggle.IsEnabledAsync($"NewSystem_{endpoint}"))
        {
            return await _newService.HandleAsync(endpoint, request);
        }
        else
        {
            return await _legacyService.HandleAsync(endpoint, request);
        }
    }
}

// Feature toggle configuration example
{
    "FeatureToggles": {
        "NewSystem_UserService": true,
        "NewSystem_OrderService": false,
        "NewSystem_PaymentService": false
    }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Database Migration Pattern</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class UserRepository : IUserRepository
{
    private readonly LegacyUserRepository _legacyRepo;
    private readonly NewUserRepository _newRepo;
    private readonly IMigrationTracker _migrationTracker;

    public async Task<User> GetByIdAsync(int userId)
    {
        // Check if user has been migrated
        if (await _migrationTracker.IsMigratedAsync("User", userId))
        {
            return await _newRepo.GetByIdAsync(userId);
        }
        else
        {
            var user = await _legacyRepo.GetByIdAsync(userId);
            // Optionally trigger background migration
            _ = Task.Run(() => MigrateUserAsync(user));
            return user;
        }
    }

    private async Task MigrateUserAsync(User user)
    {
        await _newRepo.CreateAsync(user);
        await _migrationTracker.MarkAsMigratedAsync("User", user.Id);
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایا
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>دسترسی به سرویس‌های قدیمی:</strong> می‌توانید در حین انتقال به توسعه جدیدتر، به سرویس‌های قدیمی دسترسی داشته باشید</li>
            <li><strong>اضافه کردن سرویس‌های جدید:</strong> می‌توانید سرویس‌های جدید را به facade و پلتفرم جدیدتر اضافه کنید در حالی که همچنان قادر به استفاده از سرویس‌های قدیمی هستید</li>
            <li><strong>کاهش ریسک:</strong> این می‌تواند ریسک در تبدیل سیستم را با انجام مهاجرت‌های تدریجی با سرعت کمتر کاهش دهد. همچنین می‌توانید مهاجرت را متوقف کرده و از هر دو سرویس قدیمی و جدید از طریق facade ها یا proxy های الگوی Strangler Fig استفاده کنید</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            معایب
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            هنگامی که صحبت از مهاجرت سیستم‌های legacy به سیستم‌های جدیدتر با استفاده از الگوی Strangler Fig می‌شود، هنوز مسائلی هست که باید مراقب آن‌ها بود:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>نیاز به Rollback سریع:</strong> باید بتوانید به سرعت و به راحتی به روش قدیمی برگردید در صورتی که مشکلی پیش آید</li>
            <li><strong>توقف توسعه:</strong> توسعه ممکن است متوقف شود زیرا این الگو امکان کار با هر دو سیستم قدیمی و جدید را فراهم می‌کند. اگر این اتفاق بیفتد، تیم‌های توسعه ممکن است خودشان را مدیریت چندین سیستم برای مدت طولانی‌تر از آنچه در ابتدا مطلوب بود پیدا کنند</li>
            <li><strong>پیچیدگی مسیریابی:</strong> مسیریابی بین دو سیستم می‌تواند نیاز به تلاش نگهداری گسترده داشته باشد</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوهای مرتبط
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/facade" className="text-blue-600 dark:text-blue-400 hover:underline">Facade Pattern</Link> - الگوی اصلی که Strangler Fig بر آن استوار است</li>
            <li><Link href="/design-patterns/proxy" className="text-blue-600 dark:text-blue-400 hover:underline">Proxy Pattern</Link> - برای رهگیری و هدایت درخواست‌ها</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/strangler-fig" target="_blank" rel="noopener" className="hover:underline">
                Microsoft Azure - Strangler Fig Pattern
              </a>
            </li>
            <li>
              <a href="https://martinfowler.com/bliki/StranglerFigApplication.html" target="_blank" rel="noopener" className="hover:underline">
                Martin Fowler - Strangler Fig Application
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}