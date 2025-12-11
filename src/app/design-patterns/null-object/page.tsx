'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NullObjectPage() {
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
        Null Object Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Null Object Pattern چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Null Object برای اولین بار در کتاب Pattern Languages of Program Design توسط James Coplien در سال ۱۹۹۵ توصیف شد. هدف این الگو کاهش نیاز به اضافه کردن check ها و رفتار خاص برای handle کردن null instance های variable های خاصی است که در application ها propagate می‌شوند. در عوض، رفتاری که هنگام encounter شدن null باید رخ دهد را شناسایی کنید، این رفتار را در instance ای از type مورد نظر encapsulate کنید، و این instance را به عنوان یک مقدار خاص و ثابت از آن type تعریف کنید.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال Call Center Application
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            برای instance، یک call center application را در نظر بگیرید که customer ها را بر اساس phone number آنها lookup می‌کند:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public Customer GetByPhoneNumber(string phoneNumber)
{
  return _customerRepository
         .List(c => c.PhoneNumber == phoneNumber)
         .FirstOrDefault();
}`}</pre>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            حالا تصور کنید که در جای دیگری application نیاز به display کردن برخی جزئیات در مورد customer پیدا شده دارد، مانند تعداد کل order ها و مقدار خرج شده. application باید مراقب باشد که برای null check کند:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`var customer = GetByPhoneNumber(phone);

int orderCount = customer != null ? customer.OrderCount : 0;
decimal totalPurchase = customer != null ? customer.TotalPurchase : 0m;`}</pre>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            این نوع کد حتی verbose تر می‌شود اگر full if block ها استفاده شوند، و خیلی آسان است که یک check را miss کنید، در این صورت یک runtime null reference exception محتمل است.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            پیاده‌سازی Null Object Pattern
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            برای implement کردن الگوی Null Object، یک instance از Customer برای represent کردن case "not found" customer ایجاد می‌شود:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class Customer
{
  public static Customer NotFound =
     new Customer() { OrderCount=0, TotalSales=0m };

  // other properties and behavior
}`}</pre>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            روش دیگر implement کردن الگوی Null Object، استفاده از inheritance است:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class NullObjectCustomer : Customer
{
  public NullObjectCustomer(){
    OrderCount=0;
    TotalSales=0m;
  }
  // other properties and behavior
}`}</pre>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            سپس، هر جا که method ای دارید که می‌تواند null Customer return کند، به جای آن static instance را return کنید:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public Customer GetByPhoneNumber(string phoneNumber)
{
 var customer = _customerRepository
                .List(c => c.PhoneNumber == phoneNumber)
                .FirstOrDefault();
  if(customer == null) { return Customer.NotFound; }
  return customer;
}`}</pre>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            اگر از NullObjectCustomer استفاده می‌کنید، کد همان است، به جز:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`return new NullObjectCustomer();`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نتایج پیاده‌سازی
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            یک بار که الگوی Null Object در جایش قرار گرفت، حتی نیازی به داشتن local variable ها (orderCount، totalPurchase) که در مثال بالا نشان داده شد نیست، چون آنها فقط به دلیل اینکه customer instance ممکن بود null باشد وجود داشتند. به همین ترتیب، null check های آنها نیاز نیستند—کلاً کد client ساده‌تر است، و احتمالاً duplicate code کمتری دارد، چون اغلب این نوع null check ها در سراسر code base proliferate می‌شوند (این نشانه این واقعیت است که null ها اصل Liskov Substitution Principle را نقض می‌کنند).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایای Null Object Pattern
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>حذف Null Check ها:</strong> کد client ساده‌تر و خوانا‌تر می‌شود</li>
            <li><strong>جلوگیری از NullReferenceException:</strong> خطر runtime error ها کاهش می‌یابد</li>
            <li><strong>Polymorphism Support:</strong> null object ها مانند real object ها رفتار می‌کنند</li>
            <li><strong>Default Behavior:</strong> رفتار reasonable default برای missing object ها فراهم می‌کند</li>
            <li><strong>کد تمیزتر:</strong> defensive programming کمتر نیاز است</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نکات منفی
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>پیچیدگی اضافی:</strong> کلاس‌های اضافی برای maintain کردن</li>
            <li><strong>مخفی کردن مشکلات:</strong> ممکن است real issue ها را mask کند</li>
            <li><strong>Memory Usage:</strong> instance های اضافی ایجاد می‌شود</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="#" className="hover:underline">
                Nulls Break Polymorphism
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Wikipedia Null Object Pattern
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Null Object Pattern video by Scott Bain with some good examples
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
