'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface SidebarProps {
  mobile?: boolean
}

export default function Sidebar({ mobile = false }: SidebarProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Mobile Sidebar
  if (mobile) {
    return (
      <>
        <button
          className="fixed bottom-4 left-4 z-50 w-14 h-14 rounded-full flex items-center justify-center text-gray-900 text-xl shadow-lg transition-all duration-300 hover:scale-110"
          style={{
            background: 'linear-gradient(135deg, #ffc107 0%, #ff9800 100%)',
            boxShadow: '0 4px 20px rgba(255, 193, 7, 0.5)',
          }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="منو"
        >
          <i className={`ri-${isOpen ? 'close' : 'menu-4'}-line`}></i>
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <aside className="fixed right-4 top-20 bottom-4 w-72 glass-sidebar rounded-2xl overflow-y-auto z-50">
              <nav className="p-4">
                {menuSections.map((section) => (
                  <div key={section.title} className="mb-6">
                    <h3 className="text-xs font-bold text-gray-500 dark:text-white/40 mb-3 uppercase tracking-wider px-3">
                      {section.title}
                    </h3>
                    <ul className="grid grid-cols-1 gap-1">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`
                              flex items-center py-2.5 px-3 rounded-xl transition-all duration-300
                              ${
                                pathname === item.href
                                  ? 'bg-gradient-to-l from-yellow-400 to-amber-500 text-gray-900 font-semibold shadow-lg'
                                  : 'text-gray-700 dark:text-white/70 hover:bg-amber-50 dark:hover:bg-white/5 hover:text-amber-600 dark:hover:text-amber-400'
                              }
                            `}
                            onClick={() => setIsOpen(false)}
                          >
                            <i className={`${item.icon} text-lg ml-3`}></i>
                            <span className="text-sm">{item.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </aside>
          </>
        )}
      </>
    )
  }

  // Desktop Sidebar
  return (
    <div className="sticky top-20 h-[calc(100vh-6rem)]">
      <div className="glass-sidebar rounded-2xl h-full overflow-y-auto">
        <nav className="p-4">
          {menuSections.map((section) => (
            <div key={section.title} className="mb-6">
              <h3 className="text-xs font-bold text-gray-500 dark:text-white/40 mb-3 uppercase tracking-wider px-3">
                {section.title}
              </h3>
              <ul className="grid grid-cols-1 gap-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`
                        flex items-center py-2.5 px-3 rounded-xl transition-all duration-300
                        ${
                          pathname === item.href
                            ? 'bg-gradient-to-l from-yellow-400 to-amber-500 text-gray-900 font-semibold shadow-lg'
                            : 'text-gray-700 dark:text-white/70 hover:bg-amber-50 dark:hover:bg-white/5 hover:text-amber-600 dark:hover:text-amber-400'
                        }
                      `}
                    >
                      <i className={`${item.icon} text-lg ml-3`}></i>
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

const menuSections = [
  {
    title: 'اصلی',
    items: [
      { label: 'خانه', href: '/', icon: 'ri-home-5-line' },
      { label: 'جستجو', href: '/search', icon: 'ri-search-line' },
    ],
  },
  {
    title: 'موضوعات',
    items: [
      { label: 'الگوهای طراحی', href: '/design-patterns', icon: 'ri-palette-line' },
      { label: 'اصول', href: '/principles', icon: 'ri-compass-3-line' },
      { label: 'روش‌ها', href: '/practices', icon: 'ri-settings-4-line' },
      { label: 'ارزش‌ها', href: '/values', icon: 'ri-diamond-line' },
      { label: 'ضدالگوها', href: '/antipatterns', icon: 'ri-alert-line' },
      { label: 'DDD', href: '/domain-driven-design', icon: 'ri-building-2-line' },
      { label: 'ابزارها', href: '/tools', icon: 'ri-tools-line' },
      { label: 'اصطلاحات', href: '/terms', icon: 'ri-book-open-line' },
      { label: 'تست', href: '/testing', icon: 'ri-flask-line' },
      { label: 'قوانین', href: '/laws', icon: 'ri-scales-3-line' },
      { label: 'معماری', href: '/architecture', icon: 'ri-building-line' },
    ],
  },
]
