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
          ← بازگشت به الگوهای طراحی
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Guard Clause (بند نگهبان)
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Guard Clause چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            پیچیدگی در کد درک آنچه که کد انجام می‌دهد را دشوار می‌کند. کوچک‌ترین واحد کد ما معمولاً تابع یا متد است. شما باید بتوانید با نگاه به یک تابع مشخص به سرعت تشخیص دهید که چه کاری انجام می‌دهد. این کار اگر تابع کوچک، خوب نامگذاری شده و متمرکز باشد آسان‌تر است.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            یکی از عواملی که به طور مداوم علیه سادگی کار می‌کند پیچیدگی شرطی است، که اغلب به شکل دستورات <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">if</code> و <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">switch</code> ظاهر می‌شود. <strong>guard clause</strong> به سادگی بررسی‌ای است که فوراً از تابع خروج می‌کند، یا با دستور return یا با exception.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Before: Without Guard Clauses
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm mb-2">
              <strong>مشکل:</strong> کد عمیقاً تودرتو خواندن و نگهداری آن دشوار است.
            </p>
          </div>
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
            After: With Guard Clauses
          </h2>
          <div className="bg-green-50 dark:bg-green-900/20 border-r-4 border-green-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm mb-2">
              <strong>Solution:</strong> Invert the logic and exit early. The code is flatter and easier to read.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public void Subscribe(User user, Subscription subscription, Term term)
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
        return;
    }
    if (term == Term.Monthly)
    {
        // subscribe monthly
        return;
    }
    throw new InvalidEnumArgumentException(nameof(term));
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Using Guard Helper Class (DRY)
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The checks for null and the behavior of throwing exceptions is a violation of the DRY principle. Pull this code into a helper class:
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
    
    public static void AgainstNullOrEmpty(string argument, string argumentName)
    {
        if (string.IsNullOrEmpty(argument))
        {
            throw new ArgumentException(
                "Value cannot be null or empty.", argumentName);
        }
    }
    
    public static void AgainstNegative(int argument, string argumentName)
    {
        if (argument < 0)
        {
            throw new ArgumentOutOfRangeException(
                argumentName, "Value cannot be negative.");
        }
    }
    
    public static void AgainstInvalidTerms(Term term, string argumentName)
    {
        if (term != Term.Annually && term != Term.Monthly)
        {
            throw new InvalidEnumArgumentException(argumentName);
        }
    }
}

// Now the original function is clean:
public void Subscribe(User user, Subscription subscription, Term term)
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
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Ardalis.GuardClauses NuGet Package
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Don't reinvent the wheel! Use the <strong>Ardalis.GuardClauses</strong> NuGet package which provides many common guard clauses out of the box and is easily extensible.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Install: Install-Package Ardalis.GuardClauses

using Ardalis.GuardClauses;

public void ProcessOrder(Order order, Customer customer)
{
    Guard.Against.Null(order, nameof(order));
    Guard.Against.Null(customer, nameof(customer));
    Guard.Against.NullOrEmpty(order.Items, nameof(order.Items));
    Guard.Against.NegativeOrZero(order.Total, nameof(order.Total));
    
    // Process the order...
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Readability:</strong> Code is flatter and easier to follow</li>
            <li><strong>Fail Fast:</strong> Invalid input is caught early</li>
            <li><strong>Single Responsibility:</strong> Validation is separated from business logic</li>
            <li><strong>DRY:</strong> Guard methods can be reused across the codebase</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/guard-clause" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Guard Clause
              </a>
            </li>
            <li>
              <a href="https://www.nuget.org/packages/Ardalis.GuardClauses" target="_blank" rel="noopener" className="hover:underline">
                Ardalis.GuardClauses NuGet Package
              </a>
            </li>
            <li>
              <a href="https://youtu.be/0ATjSblw9dY" target="_blank" rel="noopener" className="hover:underline">
                YouTube - What are Guard Clauses
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
