'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

interface SidebarProps {
  mobile?: boolean
}

export default function Sidebar({ mobile = false }: SidebarProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  // Auto-expand section based on current path
  useEffect(() => {
    const section = menuSections.find((s) =>
      s.items?.some((item) => pathname.startsWith(item.href))
    )
    if (section && !expandedSections.includes(section.title)) {
      setExpandedSections((prev) => [...prev, section.title])
    }
  }, [pathname])

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    )
  }

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  const isSectionActive = (section: MenuSection) => {
    if (section.href) return pathname === section.href
    return section.items?.some((item) => isActive(item.href))
  }

  const renderMenu = () => (
    <nav>
      {menuSections.map((section) => (
        <div key={section.title} className="border-b border-gray-200 dark:border-gray-800">
          {section.items ? (
            <>
              <button
                onClick={() => toggleSection(section.title)}
                className={`w-full flex items-center justify-between py-3 px-4 text-sm font-medium transition-colors ${
                  isSectionActive(section)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                <span>{section.title}</span>
                <i
                  className={`ri-arrow-down-s-line transition-transform duration-200 ${
                    expandedSections.includes(section.title) ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  expandedSections.includes(section.title)
                    ? 'max-h-[1000px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="pb-2">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block py-1.5 px-6 text-sm transition-colors ${
                          isActive(item.href)
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-r-2 border-blue-600 dark:border-blue-400'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900'
                        }`}
                        onClick={() => mobile && setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <Link
              href={section.href!}
              className={`block py-3 px-4 text-sm font-medium transition-colors ${
                isActive(section.href!)
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
              onClick={() => mobile && setIsOpen(false)}
            >
              {section.icon && <span className="ml-2">{section.icon}</span>}
              {section.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )

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
            <aside className="fixed right-0 top-14 bottom-0 w-72 bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-gray-800 overflow-y-auto z-50">
              {renderMenu()}
            </aside>
          </>
        )}
      </>
    )
  }

  // Desktop Sidebar
  return (
    <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-gray-200 dark:border-gray-800">
      {renderMenu()}
    </div>
  )
}

interface MenuItem {
  label: string
  href: string
}

interface MenuSection {
  title: string
  icon?: string
  href?: string
  items?: MenuItem[]
}

const menuSections: MenuSection[] = [
  {
    title: 'معرفی',
    icon: '🏠',
    href: '/',
  },
  {
    title: '🔍 جستجو',
    href: '/search',
  },
  {
    title: 'الگوهای طراحی',
    items: [
      { label: 'نمای کلی', href: '/design-patterns' },
      { label: 'کارخانه انتزاعی', href: '/design-patterns/abstract-factory' },
      { label: 'آداپتور', href: '/design-patterns/adapter' },
      { label: 'سازنده', href: '/design-patterns/builder' },
      { label: 'زنجیره مسئولیت', href: '/design-patterns/chain-of-responsibility' },
      { label: 'تزئین‌کننده', href: '/design-patterns/decorator' },
      { label: 'نما', href: '/design-patterns/facade' },
      { label: 'کارخانه', href: '/design-patterns/factory-method' },
      { label: 'میانجی', href: '/design-patterns/mediator' },
      { label: 'یادبود', href: '/design-patterns/memento' },
      { label: 'شیء پوچ', href: '/design-patterns/null-object' },
      { label: 'ناظر', href: '/design-patterns/observer' },
      { label: 'پروکسی', href: '/design-patterns/proxy' },
      { label: 'مخزن', href: '/design-patterns/repository' },
      { label: 'تک‌نمونه', href: '/design-patterns/singleton' },
      { label: 'مشخصات', href: '/design-patterns/specification' },
      { label: 'استراتژی', href: '/design-patterns/strategy' },
      { label: 'واحد کار', href: '/design-patterns/unit-of-work' },
    ],
  },
  {
    title: 'اصول',
    items: [
      { label: 'نمای کلی', href: '/principles' },
      { label: 'DRY', href: '/principles/dry' },
      { label: 'KISS', href: '/principles/kiss' },
      { label: 'YAGNI', href: '/principles/yagni' },
      { label: 'SOLID', href: '/principles/solid' },
      { label: 'جداسازی نگرانی‌ها', href: '/principles/separation-of-concerns' },
      { label: 'ترکیب بر ارث‌بری', href: '/principles/composition-over-inheritance' },
      { label: 'کپسوله‌سازی', href: '/principles/encapsulation' },
    ],
  },
  {
    title: 'روش‌ها',
    items: [
      { label: 'نمای کلی', href: '/practices' },
      { label: 'توسعه تست‌محور', href: '/practices/tdd' },
      { label: 'برنامه‌نویسی جفتی', href: '/practices/pair-programming' },
      { label: 'بازآرایی', href: '/practices/refactoring' },
      { label: 'بازبینی کد', href: '/practices/code-review' },
      { label: 'یکپارچه‌سازی مداوم', href: '/practices/continuous-integration' },
    ],
  },
  {
    title: 'ارزش‌ها',
    items: [
      { label: 'نمای کلی', href: '/values' },
      { label: 'ارتباط', href: '/values/communication' },
      { label: 'سادگی', href: '/values/simplicity' },
      { label: 'بازخورد', href: '/values/feedback' },
      { label: 'شجاعت', href: '/values/courage' },
      { label: 'احترام', href: '/values/respect' },
    ],
  },
  {
    title: 'ضدالگوها',
    items: [
      { label: 'نمای کلی', href: '/antipatterns' },
      { label: 'کد اسپاگتی', href: '/antipatterns/spaghetti-code' },
      { label: 'شیء خدا', href: '/antipatterns/god-object' },
      { label: 'توپ بزرگ گل', href: '/antipatterns/big-ball-of-mud' },
      { label: 'کد مرده', href: '/antipatterns/dead-code' },
    ],
  },
  {
    title: 'بوی بد کد',
    items: [
      { label: 'نمای کلی', href: '/code-smells' },
      { label: 'متد طولانی', href: '/code-smells/long-method' },
      { label: 'کلاس بزرگ', href: '/code-smells/large-class' },
      { label: 'حسادت ویژگی', href: '/code-smells/feature-envy' },
    ],
  },
  {
    title: 'DDD',
    items: [
      { label: 'نمای کلی', href: '/domain-driven-design' },
      { label: 'موجودیت', href: '/domain-driven-design/entity' },
      { label: 'شیء ارزشی', href: '/domain-driven-design/value-object' },
      { label: 'تجمیع', href: '/domain-driven-design/aggregate' },
      { label: 'مخزن', href: '/domain-driven-design/repository' },
      { label: 'زمینه محدود', href: '/domain-driven-design/bounded-context' },
    ],
  },
  {
    title: 'معماری',
    items: [
      { label: 'نمای کلی', href: '/architecture' },
      { label: 'میکروسرویس‌ها', href: '/architecture/microservices' },
      { label: 'معماری تمیز', href: '/architecture/clean-architecture' },
      { label: 'CQRS', href: '/architecture/cqrs' },
      { label: 'منبع‌یابی رویداد', href: '/architecture/event-sourcing' },
    ],
  },
  {
    title: 'تست',
    items: [
      { label: 'نمای کلی', href: '/testing' },
      { label: 'تست واحد', href: '/testing/unit-testing' },
      { label: 'تست یکپارچگی', href: '/testing/integration-testing' },
      { label: 'تست سراسری', href: '/testing/e2e-testing' },
    ],
  },
  {
    title: 'ابزارها',
    items: [
      { label: 'نمای کلی', href: '/tools' },
      { label: 'Git', href: '/tools/git' },
      { label: 'Docker', href: '/tools/docker' },
    ],
  },
  {
    title: 'اصطلاحات',
    href: '/terms',
  },
  {
    title: 'قوانین',
    items: [
      { label: 'نمای کلی', href: '/laws' },
      { label: 'قانون بروکس', href: '/laws/brooks-law' },
      { label: 'قانون کانوی', href: '/laws/conways-law' },
      { label: 'قانون دمتر', href: '/laws/law-of-demeter' },
    ],
  },
]
