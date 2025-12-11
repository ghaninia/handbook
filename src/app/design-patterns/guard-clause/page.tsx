'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function GuardClausePage() {
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
        Guard Clause
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            پیچیدگی در کد چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Complexity در کد درک آنچه که کد انجام می‌دهد را سخت‌تر می‌کند. کوچک‌ترین واحد کد ما معمولاً function یا method است. شما باید بتوانید با نگاه کردن به یک function مشخص به سرعت تشخیص دهید که چه کاری انجام می‌دهد. این کار معمولاً اگر function کوچک، نام‌گذاری مناسب داشته، و focused باشد بسیار آسان‌تر است. یک factor که مدام در مقابل simplicity کار می‌کند conditional complexity است، که اغلب به شکل statement های if و switch ظاهر می‌شود. هنگامی که به درستی مدیریت نشود، این دو construct می‌توانند به سرعت function ها را از simple و قابل فهم به long، obtuse، و scary تبدیل کنند. یک راه برای کاهش برخی از complexity ها استفاده از guard clause ها است.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Guard Clauses چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Guard clause به سادگی check ای است که فوراً از function خارج می‌شود، یا با return statement یا با exception. اگر شما عادت دارید function هایی بنویسید که بررسی می‌کنند تا اطمینان حاصل کنند همه چیز برای اجرای function valid است، سپس main function code را می‌نویسید، و بعد else statement های برای handle کردن error case ها می‌نویسید، این شامل invert کردن workflow فعلی شماست. مزیت این است که کد شما معمولاً کوتاه‌تر و ساده‌تر خواهد بود، و کمتر deeply indented است.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال بدون Guard Clauses
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            مثالی از function که از guard clause ها استفاده نمی‌کند:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public void Subscribe(User user, Subscription subscription, Term term)
{
    if (user != null)
    {
        if (subscription != null)
        {
            if (term == Term.Annually)
            {
                // subscribe annually
            }
            else if (term == Term.Monthly)
            {
                // subscribe monthly
            }
            else
            {
                throw new InvalidEnumArgumentException(nameof(term));
            }
        }
        else
        {
            throw new ArgumentNullException(nameof(subscription));
        }
    }
    else
    {
        throw new ArgumentNullException(nameof(user));
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Refactored با Guard Clauses
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            این کد می‌تواند refactor شود تا نیاز به else clause ها را حذف کند. این کار با invert کردن logic if statement ها و قراردادن exception throwing statement ها در داخل این if statement ها انجام می‌شود. نتیجه این‌گونه خواهد بود:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public void Subscribe2(User user, Subscription subscription, Term term)
{
    if (user == null)
    {
        throw new ArgumentNullException(nameof(user));
    }
    if (subscription == null)
    {
        throw new ArgumentNullException(nameof(subscription));
    }
    if (term == Term.Annually)
    {
        // subscribe annually
    }
    else if (term == Term.Monthly)
    {
        // subscribe monthly
    }
    else
    {
        throw new InvalidEnumArgumentException(nameof(term));
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            استفاده از Helper Guard Class
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Check های null و رفتار مشترک throwing یک نوع خاص exception به وضوح نقض اصل DRY است. این کد می‌تواند به یک helper method کشیده شود:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public static class Guard
{
    public static void AgainstNull(object argument, string argumentName)
    {
        if (argument == null)
        {
            throw new ArgumentNullException(argumentName);
        }
    }
    public static void AgainstInvalidTerms(Term term, string argumentName)
    {
        // note: currently there are only two enum options
        if (term != Term.Annually &&
            term != Term.Monthly)
        {
            throw new InvalidEnumArgumentException(argumentName);
        }
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Function نهایی با Guard Methods
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            این helper guard method ها سپس می‌توانند بدون نیاز به include کردن حتی هیچ if statement در calling function فراخوانی شوند، چون اگر exception رخ دهد به سمت بالا bubble خواهد کرد و از original function خارج خواهد شد. حالا original function می‌تواند به این شکل update شود:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public void Subscribe3(User user, Subscription subscription, Term term)
{
    Guard.AgainstNull(user, nameof(user));
    Guard.AgainstNull(subscription, nameof(subscription));
    Guard.AgainstInvalidTerms(term, nameof(term));
    if (term == Term.Annually)
    {
        // subscribe annually
        return;
    }
    // subscribe monthly
}`}</pre>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            در طول زمان می‌توانید به اضافه کردن Guard helper method های اضافی برای هر case مشترک دیگری که نیاز به بررسی دارید ادامه دهید، مانند empty string ها، negative number ها، invalid enum value ها و غیره.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایای Guard Clauses
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Readability:</strong> کد flat تر و راحت‌تر برای follow کردن است</li>
            <li><strong>Early Exit:</strong> validation failure ها زودتر detect می‌شوند</li>
            <li><strong>Reduced Nesting:</strong> کاهش deeply nested conditional structure ها</li>
            <li><strong>DRY Principle:</strong> common validation logic قابل reuse است</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="#" className="hover:underline">
                What are Guard Clauses (YouTube)
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Ardalis.GuardClauses Nuget Package
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Guard Clauses (Podcast Episode) (7 min)
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
