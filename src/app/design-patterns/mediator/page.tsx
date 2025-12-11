'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MediatorPage() {
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
        Mediator Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Mediator Pattern چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Mediator یک design pattern است که communication بین component های مختلف در یک system را بدون اینکه آنها نیاز داشته باشند مستقیماً از یکدیگر اطلاع داشته باشند، تسهیل می‌کند. به جای اینکه component ها مستقیماً با یکدیگر interact کنند، آنها از طریق یک central mediator ارتباط برقرار می‌کنند که interaction ها و orchestration را مدیریت می‌کند. این کمک می‌کند که dependency ها کاهش یابد، loose coupling را promote کند، و system را modular و flexible تر کند. معمولاً در application های complex که object های زیادی با یکدیگر interact می‌کنند—مانند user interface ها، messaging system ها، یا eCommerce application ها—استفاده می‌شود، الگوی Mediator منطق communication را centralize می‌کند و component ها را برای manage، extend، و test کردن آسان‌تر می‌کند. این الگو به خصوص در system های large-scale مفید است، جایی که کاهش direct dependency ها برای maintainability و scalability ضروری است.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال eCommerce از Mediator
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            این وضعیت eCommerce را در نظر بگیرید:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li>PlaceOrderCommand، PlaceOrderHandler را trigger می‌کند تا order را place کند</li>
            <li>PlaceOrderHandler به Mediator اطلاع می‌دهد تا inventory را check کند</li>
            <li>CheckInventoryHandler inventory را check می‌کند و سپس از Mediator می‌خواهد notification ارسال کند</li>
            <li>SendNotificationHandler فرآیند را با ارسال confirmation notification کامل می‌کند</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            در این مثال:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>Mediator بین module ها coordinate می‌کند</li>
            <li>وقتی order place می‌شود، Order Service به Mediator اطلاع می‌دهد</li>
            <li>Mediator سپس به Inventory Service اطلاع می‌دهد تا stock را check کند</li>
            <li>پس از stock verification، Mediator از Notification Service می‌خواهد confirmation ارسال کند</li>
          </ul>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Order Service نیازی ندارد از Inventory Service یا Notification Service اطلاع داشته باشد. تمرکز تنها آن بر چیزهای مربوط به order است. یک بار که Order Service کار placing order را تمام کرد، می‌تواند به دیگران اطلاع دهد "سلام! من این کار را تمام کردم!" و سپس هر کس که نیاز داشت می‌تواند step in کند. اما Order Service به Inventory Service یا Notification Service call نمی‌کند. همه اینها توسط conductor وسط—Mediator—handle می‌شود.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Scenario های مناسب برای Mediator Pattern
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Mediator زمانی مفید است که:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>component های متعددی هستند که نیاز به communicate کردن به روش‌های complex دارند، خاصه وقتی اضافه کردن component های بیشتر انتظار می‌رود</li>
            <li>component ها نیاز به decouple شدن دارند تا تغییرات آسان‌تری در module های individual بدون اثرگذاری بر دیگران امکان‌پذیر باشد</li>
            <li>می‌خواهید workflow ها یا orchestration هایی که در غیر این صورت در چندین class پراکنده می‌شوند را encapsulate کنید</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایای Mediator Pattern
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            مزایای زیادی از استفاده از الگوی Mediator حاصل می‌شود.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Loose Coupling</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Component ها نیازی ندارند از یکدیگر اطلاع داشته باشند؛ فقط از طریق Mediator interact می‌کنند. این modularity را promote می‌کند و system را آسان‌تر برای manage کردن می‌کند، خاصه هنگام اضافه کردن یا modify کردن component ها.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">بهبود Readability و Maintenance</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Mediator منطق communication را centralize می‌کند و درک interaction ها را ساده می‌کند. با flow های complex، داشتن یک جا که تمام interaction ها manage می‌شوند می‌تواند system را maintainable تر کند.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">آسان‌تر Debugging و Testing</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                از آنجایی که Mediator communication بین object ها را encapsulate می‌کند، testing interaction ها ساده‌تر می‌شود. می‌توانید Mediator را در test ها mock یا replace کنید و فقط بر interaction های خاص تمرکز کنید بدون نیاز به initialize کردن dependency ها برای هر component.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">تشویق Single Responsibility Principle</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                با حذف مسئولیت‌های communication از component های individual، هر class فقط بر function اصلی خود تمرکز می‌کند و به SRP عمل می‌کند. در مثال eCommerce، OrderService فقط بر logic مربوط به order تمرکز دارد، نه بر handle کردن notification ها یا inventory check ها.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Scalability</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                همانطور که تعداد component های interacting افزایش می‌یابد، الگوی Mediator از رشد exponential dependency ها با centralize کردن connection ها جلوگیری می‌کند. این خاصه در system های complex مانند ERP یا eCommerce platform ها که module های زیادی نیاز به interact کردن دارند، مفید است.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نکات منفی Mediator Pattern
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            در حالی که مزایای زیادی برای استفاده از الگوی Mediator وجود دارد، نکات منفی نیز هست که باید از آنها آگاه باشید.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Mediator Complexity</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                اگر Mediator مسئول interaction های بیش از حد زیادی باشد، می‌تواند بیش از حد complex و monolithic شود و منجر به "god object" شود که خود Mediator manage کردنش سخت می‌شود. این می‌تواند برخی از مزایای maintainability و readability را خنثی کند.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Single Point of Failure</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                از آنجایی که تمام interaction ها از طریق Mediator عبور می‌کنند، آن به یک component critical تبدیل می‌شود. اگر Mediator fail شود، کل interaction flow می‌شکند. همچنین layer دیگری از potential performance bottleneck ها اضافه می‌کند، چون هر request از طریق آن pass می‌شود.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">سخت‌تر Tracing Distributed Systems</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                در system های بزرگ یا microservice ها، tracing یا debugging request ها در module ها می‌تواند چالش‌برانگیز شود، چون هر service از دیگران abstract شده است. این می‌تواند diagnose کردن issue ها را سخت‌تر کند اگر Mediator interaction ها به درستی log یا monitor نشوند.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">محدودیت Flexibility برای Direct Interactions</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                الگوی Mediator ممکن است overhead غیرضروری معرفی کند اگر برخی component ها طبیعتاً نیاز به interact کردن مستقیم داشته باشند. برای interaction های ساده‌تر، داشتن هر communication mediated می‌تواند inefficient باشد.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">تاثیر احتمالی Performance</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                با route شدن هر interaction از طریق Mediator، الگو می‌تواند cost performance اضافه کند، خاصه در application های latency-sensitive. الگو ممکن است overkill باشد اگر interaction ها simple یا infrequent باشند.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوهای مرتبط
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            اینها برخی از الگوهای دیگری هستند که ممکن است با الگوی Mediator ببینید.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Command Pattern</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                الگوی Command اغلب با Mediator در system هایی که action ها یا command های discrete را execute می‌کنند، مانند CQRS، pair می‌شود. Command ها request ها را به عنوان object ها encapsulate می‌کنند که Mediator می‌تواند آنها را به handler های مناسب route کند. این خاصه هنگام استفاده از library هایی مانند MediatR مفید است، جایی که command ها و handler ها foundation هستند.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                در CQRS، الگوی Mediator برای route کردن command ها (write operation ها) به handler های خاص و query ها (read operation ها) به دیگران مفید است. این امکان independent scaling read و write model ها را فراهم می‌کند و آن را combination مشترکی در architecture های distributed یا microservice می‌کند.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Observer Pattern</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                الگوی Observer با اجازه دادن به component ها برای subscribe کردن به event ها یا update های از Mediator، آن را complement می‌کند. وقتی event رخ می‌دهد، Mediator می‌تواند subscriber ها را بدون direct dependency chain ها notify کند و decoupling را بیشتر enhance کند.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Chain of Responsibility</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                این الگو زمانی مفید است که Mediator نیاز به delegate کردن request ها در یک سری از handler ها دارد، هر کدام قادر به handle کردن بخشی از workflow یا pass کردن request به جلو. Chain of Responsibility مسئولیت‌های handler های individual را clear نگه می‌دارد در حالی که به Mediator اجازه orchestrate کردن processing complex می‌دهد.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع اضافی
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="#" className="hover:underline">
                MediatR
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Ardalis' Clean Architecture template sample - uses MediatR as its Mediator
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Immediate Domain Event Salvation with MediatR
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                dotnetFlix: Use the Decorator, Mediator and Chain of Responsibility pattern in C#
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                MediatR Validation and the Chain of Responsibility Pattern
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Fluent Validation in MediatR with Results
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
