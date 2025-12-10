'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-white dark:bg-surface-dark shadow-md sticky top-0 z-50 transition-colors">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 space-x-reverse">
            <span className="text-3xl">💡</span>
            <span className="text-2xl font-bold bg-gradient-to-l from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DevIQ
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
            >
              خانه
            </Link>
            <Link
              href="/search"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors flex items-center"
            >
              <span className="ml-2">🔍</span>
              جستجو
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
            >
              درباره ما
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="تغییر تم"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="منوی موبایل"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              خانه
            </Link>
            <Link
              href="/search"
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              🔍 جستجو
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              درباره ما
            </Link>
            <button
              onClick={toggleTheme}
              className="w-full text-right py-2 text-gray-700 dark:text-gray-300"
            >
              {theme === 'light' ? '🌙 تم تاریک' : '☀️ تم روشن'}
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
