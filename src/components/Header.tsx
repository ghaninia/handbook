'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="header sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Handbook
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:inline">
              مرجع توسعه نرم‌افزار
            </span>
          </Link>

          {/* Center - Search */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="جستجو در مستندات..."
                className="w-full py-2 px-4 pr-10 rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <i className="ri-search-line absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <kbd className="absolute left-3 top-1/2 -translate-y-1/2 hidden sm:inline-block px-1.5 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                ⌘K
              </kbd>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-9 h-9 rounded-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
                aria-label="تغییر تم"
              >
                <i className={`text-lg ${theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line'}`}></i>
              </button>
            )}
            <a
              href="https://github.com/ghaninia/handbook"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
              aria-label="GitHub"
            >
              <i className="ri-github-fill text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
