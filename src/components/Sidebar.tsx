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

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  // Mobile Sidebar
  if (mobile) {
    return (
      <>
        <button
          className="fixed bottom-4 left-4 z-50 w-12 h-12 rounded-lg flex items-center justify-center bg-blue-600 text-white shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="منو"
        >
          <i className={`ri-${isOpen ? 'close' : 'menu'}-line text-xl`}></i>
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/20 z-40"
              onClick={() => setIsOpen(false)}
            />
            <aside className="fixed right-0 top-14 bottom-0 w-64 bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-gray-800 overflow-y-auto z-50">
              <nav className="p-4">
                {menuSections.map((section) => (
                  <div key={section.title} className="mb-6">
                    <h3 className="section-title">{section.title}</h3>
                    <ul className="space-y-0.5">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`nav-item ${isActive(item.href) ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
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
    <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-8">
      <nav className="pr-2 pl-4 border-r border-gray-200 dark:border-gray-800">
        {menuSections.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="section-title">{section.title}</h3>
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-item ${isActive(item.href) ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  )
}

const menuSections = [
  {
    title: 'شروع',
    items: [
      { label: 'معرفی', href: '/' },
      { label: 'جستجو', href: '/search' },
    ],
  },
  {
    title: 'مفاهیم',
    items: [
      { label: 'الگوهای طراحی', href: '/design-patterns' },
      { label: 'اصول', href: '/principles' },
      { label: 'روش‌ها', href: '/practices' },
      { label: 'ارزش‌ها', href: '/values' },
    ],
  },
  {
    title: 'مشکلات',
    items: [
      { label: 'ضدالگوها', href: '/antipatterns' },
      { label: 'بوی بد کد', href: '/code-smells' },
    ],
  },
  {
    title: 'موضوعات',
    items: [
      { label: 'DDD', href: '/domain-driven-design' },
      { label: 'معماری', href: '/architecture' },
      { label: 'تست', href: '/testing' },
      { label: 'ابزارها', href: '/tools' },
    ],
  },
  {
    title: 'مرجع',
    items: [
      { label: 'اصطلاحات', href: '/terms' },
      { label: 'قوانین', href: '/laws' },
    ],
  },
]
