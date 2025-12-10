'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="glass-header sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-4 items-center h-16">
          {/* Logo - 3 columns */}
          <div className="col-span-6 md:col-span-3 xl:col-span-2">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-900 text-xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #ffc107 0%, #ff9800 100%)' }}>
                <i className="ri-lightbulb-flash-line"></i>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-l from-amber-500 to-yellow-500 dark:from-amber-400 dark:to-yellow-400 bg-clip-text text-transparent">
                DevIQ
              </span>
            </Link>
          </div>

          {/* Navigation - middle columns */}
          <nav className="hidden md:flex md:col-span-7 xl:col-span-8 items-center justify-center gap-2">
            <Link
              href="/"
              className="flex items-center px-4 py-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-300"
            >
              <i className="ri-home-5-line ml-2"></i>
              خانه
            </Link>
            <Link
              href="/search"
              className="flex items-center px-4 py-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-300"
            >
              <i className="ri-search-line ml-2"></i>
              جستجو
            </Link>
            <Link
              href="/about"
              className="flex items-center px-4 py-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-300"
            >
              <i className="ri-information-line ml-2"></i>
              درباره ما
            </Link>
          </nav>

          {/* Theme Toggle & Mobile Menu - 2 columns */}
          <div className="col-span-6 md:col-span-2 flex items-center justify-end gap-2">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/30 dark:bg-white/10 hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300 text-gray-700 dark:text-gray-200"
              aria-label="تغییر تم"
            >
              <i className={`ri-${theme === 'light' ? 'moon' : 'sun'}-line text-xl`}></i>
            </button>
            <button
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center bg-white/30 dark:bg-white/10 text-gray-700 dark:text-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="منوی موبایل"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 grid grid-cols-1 gap-2">
            <Link
              href="/"
              className="flex items-center py-3 px-4 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-white/10 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="ri-home-5-line ml-3"></i>
              خانه
            </Link>
            <Link
              href="/search"
              className="flex items-center py-3 px-4 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-white/10 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="ri-search-line ml-3"></i>
              جستجو
            </Link>
            <Link
              href="/about"
              className="flex items-center py-3 px-4 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-white/10 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="ri-information-line ml-3"></i>
              درباره ما
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
