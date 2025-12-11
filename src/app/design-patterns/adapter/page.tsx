'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AdapterPage() {
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
        Adapter Design Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوی Adapter چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی طراحی Adapter که به Wrapper نیز معروف است، به دو کلاس اجازه می‌دهد با هم کار کنند که در غیر این صورت interface های ناسازگاری داشته باشند. در این حالت، این الگوی طراحی نرم‌افزار به خوبی با مثال دنیای واقعی یک adapter برقی مطابقت دارد، که باید برای اجازه دادن به دستگاه برای استفاده از برق استفاده شود.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            برای مثال، اکثر دستگاه‌های موبایل امروزه می‌توانند از طریق نوعی برق USB یا از طریق جریان AC تغذیه شوند. با این حال، در هر دو حالت هیچ راه مستقیمی برای دستگاه وجود ندارد که مستقیماً به دیوار یا پورت USB وصل شود. راه حل استفاده از adapter است. در واقع، در برخی موارد adapter ها می‌توانند به هم متصل شوند، مانند کابل USB-to-Device که همچنین می‌تواند به دیوار یا پریز الکتریکی ماشین که دارای پورت برق USB است وصل شود.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            اجزای کلیدی الگوی Chain of Responsibility
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Chain of Responsibility دارای سه جزء است - یک درخواست، یک abstract handler، و یک handler.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Request:</strong> شامل اطلاعاتی است که باید توسط زنجیره handler ها پردازش شود. این تا زمانی که handle شود یا به انتهای زنجیره برسد از طریق زنجیره منتقل می‌شود</li>
            <li><strong>Abstract Handler:</strong> معمولاً شامل 2 method است - یکی برای تنظیم handler بعدی در زنجیره و یکی برای پردازش درخواست‌ها</li>
            <li><strong>Handler:</strong> یک پیاده‌سازی مشخص از abstract handler است. می‌تواند نوع خاصی از درخواست را handle کند یا آن را به زنجیره منتقل کند تا توسط handler دیگری پردازش شود</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایای الگوی Chain of Responsibility
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Decoupling:</strong> فرستنده درخواست از handler های مشخصی که آن را پردازش خواهند کرد اطلاعی ندارد، که کد را انعطاف‌پذیرتر و قابل تطبیق با تغییرات در نیازمندی‌ها می‌کند</li>
            <li><strong>Reusability:</strong> handler ها می‌توانند در زنجیره‌های مختلف مسئولیت دوباره استفاده شوند، که باعث ارتقاء استفاده مجدد از کد و کاهش تکرار می‌شود</li>
            <li><strong>Dynamic Handling:</strong> درخواست‌ها می‌توانند بر اساس context زمان اجرا به طور متفاوت handle شوند، که امکان منطق پردازش انعطاف‌پذیر و قابل تطبیق را فراهم می‌کند</li>
            <li><strong>Error Handling:</strong> درخواست‌ها می‌توانند برای error handling به handler های مختلف منتقل شوند، که مکانیزم متمرکزی برای handling خطاها و exception ها فراهم می‌کند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            کاربردهای الگوی Chain of Responsibility
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            این‌ها برخی از کاربردهای رایج الگوی Chain of Responsibility هستند. بسیاری از این کاربردها cross-cutting concern هایی هستند که بر چندین ماژول یا component در یک application تأثیر می‌گذارند.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Authentication:</strong> handler های authentication می‌توانند از الگوی Chain of Responsibility برای اجازه دادن به انواع مختلف credential ها استفاده کنند</li>
            <li><strong>Event Handling:</strong> زنجیره‌ای از event handler ها می‌تواند برای پاسخ به انواع مختلف domain event ها استفاده شود</li>
            <li><strong>Workflow:</strong> زنجیره‌ای از workflow step ها می‌تواند برای اجرای task های یک فرآیند تجاری خودکار در ترتیب خاص استفاده شود</li>
            <li><strong>Authorization:</strong> زنجیره‌ای از authorization handler ها می‌تواند برای بررسی اینکه آیا کاربر مجوز دسترسی به فرآیندی دارد استفاده شود</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Chain of Responsibility در رابطه با Cross-Cutting Concerns
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Chain of Responsibility می‌تواند برای handle کردن cross-cutting concern ها در توسعه نرم‌افزار استفاده شود. Cross-cutting concern ها جنبه‌هایی از برنامه هستند که بر چندین ماژول یا component تأثیر می‌گذارند و به راحتی در هیچ ماژول یا component منفردی encapsulate نمی‌شوند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            الگوی Chain of Responsibility مکانیزمی برای جدا کردن cross-cutting concern ها از منطق اصلی business و handle کردن آنها به شکل متمرکز و سازمان‌یافته فراهم می‌کند.
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
            لایه middleware در ASP.NET Core از handler های بسیاری برای پردازش درخواست‌ها تشکیل شده است. handler هایی که در لایه middleware بارگذاری می‌شوند در Program.cs پیکربندی می‌شوند. ترتیبی که آنها در فایل Program اضافه می‌شوند همان ترتیبی است که درخواست handle می‌شود.
          </p>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">MediatR و Pipeline Behaviors</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            MediatR الگوی Chain of Responsibility را از طریق استفاده از pipeline ها پیاده‌سازی می‌کند. Pipeline ها مجموعه‌ای از behavior ها هستند که قبل و بعد از handle شدن درخواست توسط handler مربوطه اجرا می‌شوند.
          </p>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">ChainedTokenCredential</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            مثالی از استفاده Chain of Responsibility برای authentication، ChainedTokenCredential در .NET است. این به شما اجازه می‌دهد پیکربندی کنید که کدام انواع token credential ها برای دسترسی به منابع بررسی شوند.
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
            <li><Link href="/design-patterns/mediator" className="text-blue-600 dark:text-blue-400 hover:underline">Mediator Pattern</Link> - ارتباط بین اشیاء را کپسوله می‌کند</li>
            <li><Link href="/design-patterns/decorator" className="text-blue-600 dark:text-blue-400 hover:underline">Decorator Pattern</Link> - رفتار اضافی را به اشیاء اضافه می‌کند</li>
            <li><Link href="/design-patterns/command" className="text-blue-600 dark:text-blue-400 hover:underline">Command Pattern</Link> - درخواست‌ها را به عنوان اشیاء encapsulate می‌کند</li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
