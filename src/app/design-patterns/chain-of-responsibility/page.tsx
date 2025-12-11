'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ChainOfResponsibilityPage() {
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
        Chain of Responsibility Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوی Chain of Responsibility چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Chain of Responsibility یک الگوی طراحی رفتاری است که به شما اجازه می‌دهد request ها را از طریق زنجیره‌ای از handler ها عبور دهید. پس از دریافت request، هر handler تصمیم می‌گیرد که یا request را پردازش کند یا آن را به handler بعدی در زنجیره منتقل کند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            اجزای کلیدی الگوی Chain of Responsibility
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Chain of Responsibility دارای سه جزء است - یک request، یک abstract handler، و یک handler.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Request Components:</strong> request شامل اطلاعاتی است که باید توسط زنجیره handler ها پردازش شود. این تا زمانی که handle شود یا به انتهای زنجیره برسد از طریق زنجیره منتقل می‌شود</li>
            <li><strong>Abstract Handler Components:</strong> abstract handler معمولاً شامل 2 method است - یکی برای تنظیم handler بعدی در زنجیره و یکی برای پردازش request ها</li>
            <li><strong>Handler Components:</strong> handler یک پیاده‌سازی مشخص از abstract handler است. می‌تواند نوع خاصی از request را handle کند یا آن را به زنجیره منتقل کند تا توسط handler دیگری پردازش شود</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایای الگوی Chain of Responsibility
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Decoupling:</strong> فرستنده request از handler های مشخصی که آن را پردازش خواهند کرد اطلاعی ندارد، که کد را انعطاف‌پذیرتر و قابل تطبیق با تغییرات در نیازمندی‌ها می‌کند</li>
            <li><strong>Reusability:</strong> handler ها می‌توانند در زنجیره‌های مختلف مسئولیت دوباره استفاده شوند، که باعث ارتقاء استفاده مجدد از کد و کاهش تکرار می‌شود</li>
            <li><strong>Dynamic Handling:</strong> request ها می‌توانند بر اساس context زمان اجرا به طور متفاوت handle شوند، که امکان منطق پردازش انعطاف‌پذیر و قابل تطبیق را فراهم می‌کند</li>
            <li><strong>Error Handling:</strong> request ها می‌توانند برای error handling به handler های مختلف منتقل شوند، که مکانیزم متمرکزی برای handling خطاها و exception ها فراهم می‌کند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            کاربردهای الگوی Chain of Responsibility
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            این‌ها برخی از کاربردهای رایج الگوی Chain of Responsibility هستند. بسیاری از این کاربردها cross-cutting concern هایی هستند که بر چندین module یا component در یک application تأثیر می‌گذارند.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Authentication Applications:</strong> handler های authentication می‌توانند از الگوی Chain of Responsibility برای اجازه دادن به انواع مختلف credential ها استفاده کنند</li>
            <li><strong>Event Handling Applications:</strong> زنجیره‌ای از event handler ها می‌تواند برای پاسخ به انواع مختلف domain event ها استفاده شود. این practice ای است که در Domain-Driven Design دیده می‌شود</li>
            <li><strong>Workflow Applications:</strong> زنجیره‌ای از workflow step ها می‌تواند برای اجرای task های یک فرآیند business خودکار در ترتیب خاص استفاده شود</li>
            <li><strong>Authorization Applications:</strong> زنجیره‌ای از authorization handler ها می‌تواند برای بررسی اینکه آیا کاربر permission هایی برای دسترسی به فرآیندی دارد استفاده شود. این می‌تواند برای granular access control policy ها استفاده شود</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Chain of Responsibility در رابطه با Cross-Cutting Concerns
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Chain of Responsibility می‌تواند برای handle کردن cross-cutting concern ها در توسعه نرم‌افزار استفاده شود. Cross-cutting concern ها جنبه‌هایی از برنامه هستند که بر چندین module یا component تأثیر می‌گذارند و به راحتی در هیچ module یا component منفردی encapsulate نمی‌شوند. مثال‌هایی از cross-cutting concern ها شامل logging، authentication، authorization، caching، و transaction management هستند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Chain of Responsibility مکانیزمی برای جدا کردن cross-cutting concern ها از منطق اصلی business و handle کردن آنها به شکل متمرکز و سازمان‌یافته فراهم می‌کند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            رویکرد کلی برای پیاده‌سازی cross-cutting concern ها با استفاده از الگوی Chain of Responsibility شامل تعریف abstraction ها، ایجاد handler های concrete، chain کردن handler ها، initiate کردن request، و handle کردن request یا انتقال آن به handler بعدی می‌باشد.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوی Chain of Responsibility در .NET
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            سوالاتی درباره اینکه کجا می‌توانید Chain of Responsibility را در .NET ببینید مطرح شده است. ما 3 مورد را پوشش خواهیم داد - ASP.NET Core middleware، MediatR و pipeline هایش، و ChainedTokenCredential.
          </p>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">ASP.NET Core Middleware</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            لایه middleware در ASP.NET Core از handler های بسیاری برای پردازش request ها تشکیل شده است. handler هایی که در لایه middleware بارگذاری می‌شوند در Program.cs پیکربندی می‌شوند. ترتیبی که آنها در فایل Program اضافه می‌شوند همان ترتیبی است که request handle می‌شود. این شکلی است که chain of responsibility ساخته می‌شود.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            ترتیب تعریف شده‌ای برای برخی از middleware ها وجود دارد که در documentation مربوط به middleware fundamentals برای ASP.NET Core مشاهده می‌شود.
          </p>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">MediatR و Pipeline Behaviors</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            MediatR الگوی Chain of Responsibility را از طریق استفاده از pipeline ها پیاده‌سازی می‌کند. Pipeline ها مجموعه‌ای از behavior ها هستند که قبل و بعد از handle شدن request توسط handler مربوطه اجرا می‌شوند. هر behavior در pipeline فرصت intercept کردن request، modify کردن آن، یا حتی جلوگیری از رسیدن آن به handler را دارد.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            وقتی request ای به MediatR ارسال می‌شود، ابتدا از طریق pipeline برای نوع request مشخص عبور می‌کند. هر behavior در pipeline فرصت intercept کردن request و انجام action های مورد نظرش را دارد. اگر behavior تصمیم بگیرد request را handle کند، می‌تواند response برگرداند و pipeline خاتمه می‌یابد. در غیر این صورت، behavior می‌تواند HandleNext() را فراخوانی کند تا request را به behavior بعدی در زنجیره منتقل کند.
          </p>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">ChainedTokenCredential</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            مثالی از استفاده Chain of Responsibility برای authentication، ChainedTokenCredential در .NET است. این به شما اجازه می‌دهد پیکربندی کنید که کدام انواع token credential ها به ترتیب برای دسترسی به منابع بررسی شوند. کلاس DefaultAzureCredential از قبل یک زنجیره پیش‌پیکربندی شده است. ChainedTokenCredential رویکرد granular مشخص کردن کدام یک از این TokenCredential ها (یا پیاده‌سازی‌های سفارشی کلاس TokenCredential) باید بررسی شوند را به شما می‌دهد. شما ترتیب زنجیره را به عنوان بخشی از constructor مشخص می‌کنید.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            این مثالی از استفاده ChainedTokenCredential است:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public CosmosHelper()
{
    ChainedTokenCredential credential = new ChainedTokenCredential(
        new AzureCliCredential(),
        new ManagedIdentityCredential());

    client = new(
        accountEndpoint: CosmosUri,
        tokenCredential: credential);
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>Mediator pattern</li>
            <li>Use the Decorator, Mediator, and Chain of Responsibility Patterns in C#</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوهای مرتبط
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/mediator" className="text-blue-600 dark:text-blue-400 hover:underline">Mediator Pattern</Link> - ارتباط بین اشیاء را encapsulate می‌کند</li>
            <li><Link href="/design-patterns/decorator" className="text-blue-600 dark:text-blue-400 hover:underline">Decorator Pattern</Link> - رفتار اضافی را به اشیاء اضافه می‌کند</li>
            <li><Link href="/design-patterns/command" className="text-blue-600 dark:text-blue-400 hover:underline">Command Pattern</Link> - request ها را به عنوان اشیاء encapsulate می‌کند</li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
