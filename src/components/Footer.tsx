'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-6 py-12">
          {/* Logo & Description */}
          <div className="col-span-12 md:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">Handbook</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">فارسی</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              مرجع جامع اصول، الگوها و بهترین روش‌های توسعه نرم‌افزار به زبان فارسی.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-6 md:col-span-2">
            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-4">مفاهیم</h4>
            <ul className="space-y-2">
              <li><Link href="/design-patterns" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">الگوهای طراحی</Link></li>
              <li><Link href="/principles" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">اصول</Link></li>
              <li><Link href="/practices" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">روش‌ها</Link></li>
              <li><Link href="/values" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">ارزش‌ها</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div className="col-span-6 md:col-span-2">
            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-4">موضوعات</h4>
            <ul className="space-y-2">
              <li><Link href="/domain-driven-design" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">DDD</Link></li>
              <li><Link href="/architecture" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">معماری</Link></li>
              <li><Link href="/testing" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">تست</Link></li>
              <li><Link href="/tools" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">ابزارها</Link></li>
            </ul>
          </div>

          {/* Problems */}
          <div className="col-span-6 md:col-span-2">
            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-4">مشکلات</h4>
            <ul className="space-y-2">
              <li><Link href="/antipatterns" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">ضدالگوها</Link></li>
              <li><Link href="/code-smells" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">بوی بد کد</Link></li>
            </ul>
          </div>

          {/* Reference */}
          <div className="col-span-6 md:col-span-2">
            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-4">مرجع</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">اصطلاحات</Link></li>
              <li><Link href="/laws" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">قوانین</Link></li>
              <li><Link href="/search" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">جستجو</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © ۱۴۰۴ Handbook فارسی. ترجمه و بومی‌سازی محتوای handbook.com
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/ghaninia/handbook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
              >
                <i className="ri-github-fill text-xl"></i>
              </a>
              <a
                href="https://ghaninia.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
              >
                ghaninia.ir
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
