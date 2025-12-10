export default function Footer() {
  return (
    <footer className="bg-white dark:bg-surface-dark border-t border-gray-200 dark:border-gray-700 mt-12 transition-colors">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">درباره DevIQ</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              مرجع کامل برای یادگیری الگوهای طراحی، اصول و روش‌های توسعه نرم‌افزار
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">لینک‌های مفید</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://nimblepros.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  NimblePros
                </a>
              </li>
              <li>
                <a
                  href="https://pluralsight.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  Pluralsight
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">تماس با ما</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              برای دریافت دوره‌های آموزشی و مشاوره تخصصی با ما در تماس باشید
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} DevIQ. تمامی حقوق محفوظ است.</p>
          <p className="mt-2">نسخه فارسی و راست‌چین شده با ❤️</p>
        </div>
      </div>
    </footer>
  )
}
