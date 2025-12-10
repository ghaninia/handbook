'use client'

import { useState } from 'react'

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<typeof allContent>([])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === '') {
      setResults([])
      return
    }

    const filtered = allContent.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    )
    setResults(filtered)
  }

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-4">جستجو</h1>
      </div>

      {/* Search Input */}
      <div className="col-span-12">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="جستجوی الگوها، اصول و موضوعات..."
            className="w-full px-4 py-3 pr-12 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark focus:border-primary-light dark:focus:border-primary-dark focus:outline-none"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
            🔍
          </span>
        </div>
      </div>

      {/* Results Count */}
      {searchQuery && (
        <div className="col-span-12 text-gray-600 dark:text-gray-400 text-sm">
          {results.length} نتیجه یافت شد
        </div>
      )}

      {/* Results */}
      {/* Results */}
      {results.map((item) => (
        <a
          key={item.slug}
          href={item.href}
          className="col-span-12 sm:col-span-6 lg:col-span-4 card hover:shadow-xl transition-all"
        >
          <div className="flex items-start">
            <span className="text-2xl ml-3">{item.icon}</span>
            <div className="flex-1">
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                {item.description}
              </p>
              <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                {item.category}
              </span>
            </div>
          </div>
        </a>
      ))}

      {/* No Results */}
      {searchQuery && results.length === 0 && (
        <div className="col-span-12 text-center py-12">
          <span className="text-5xl mb-4 block">🔍</span>
          <p className="text-gray-600 dark:text-gray-400">
            نتیجه‌ای یافت نشد
          </p>
        </div>
      )}
    </div>
  )
}

const allContent = [
  { title: 'الگوی سینگلتون', slug: 'singleton', href: '/design-patterns/singleton', icon: '🎨', description: 'تضمین می‌کند که یک کلاس فقط یک نمونه داشته باشد', category: 'الگوهای طراحی' },
  { title: 'الگوی فکتوری', slug: 'factory', href: '/design-patterns/factory', icon: '🎨', description: 'رابطی برای ساخت اشیاء فراهم می‌کند', category: 'الگوهای طراحی' },
  { title: 'SOLID', slug: 'solid', href: '/principles/solid', icon: '📐', description: 'پنج اصل اساسی طراحی شی‌گرا', category: 'اصول' },
  { title: 'DRY', slug: 'dry', href: '/principles/dry', icon: '📐', description: 'تکرار نکنید - هر دانش باید یک نمایش واحد داشته باشد', category: 'اصول' },
  { title: 'توسعه مبتنی بر تست', slug: 'tdd', href: '/practices/tdd', icon: '⚙️', description: 'ابتدا تست بنویسید، سپس کد را پیاده‌سازی کنید', category: 'روش‌ها' },
  { title: 'God Object', slug: 'god-object', href: '/antipatterns/god-object', icon: '⚠️', description: 'کلاسی با مسئولیت‌های بیش از حد', category: 'ضدالگوها' },
]
