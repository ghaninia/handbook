'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className="lg:hidden fixed bottom-4 left-4 z-50 bg-primary-light dark:bg-primary-dark text-white p-4 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="منو"
      >
        📚
      </button>

      <aside
        className={`
          fixed right-0 top-16 h-[calc(100vh-4rem)] w-64 
          bg-white dark:bg-surface-dark shadow-lg
          transform transition-transform duration-300 ease-in-out
          overflow-y-auto z-40
          ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        `}
      >
        <nav className="p-6 space-y-6">
          {menuSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-3 uppercase">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`
                        block py-2 px-3 rounded-lg transition-colors
                        ${
                          pathname === item.href
                            ? 'bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark font-semibold'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }
                      `}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="ml-2">{item.icon}</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30 top-16"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

const menuSections = [
  {
    title: 'اصلی',
    items: [
      { label: 'خانه', href: '/', icon: '🏠' },
      { label: 'جستجو', href: '/search', icon: '🔍' },
    ],
  },
  {
    title: 'موضوعات',
    items: [
      { label: 'الگوهای طراحی', href: '/design-patterns', icon: '🎨' },
      { label: 'اصول', href: '/principles', icon: '📐' },
      { label: 'روش‌ها', href: '/practices', icon: '⚙️' },
      { label: 'ارزش‌ها', href: '/values', icon: '💎' },
      { label: 'ضدالگوها', href: '/antipatterns', icon: '⚠️' },
      { label: 'DDD', href: '/domain-driven-design', icon: '🏗️' },
      { label: 'ابزارها', href: '/tools', icon: '🔧' },
      { label: 'اصطلاحات', href: '/terms', icon: '📖' },
      { label: 'تست', href: '/testing', icon: '🧪' },
      { label: 'قوانین', href: '/laws', icon: '⚖️' },
      { label: 'معماری', href: '/architecture', icon: '🏛️' },
    ],
  },
]
