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
    title: 'Introduction',
    icon: '🏠',
    href: '/',
  },
  {
    title: '🔍 Search',
    href: '/search',
  },
  {
    title: 'Design Patterns',
    items: [
      { label: 'Overview', href: '/design-patterns' },
      { label: 'Abstract Factory', href: '/design-patterns/abstract-factory' },
      { label: 'Adapter', href: '/design-patterns/adapter' },
      { label: 'Builder', href: '/design-patterns/builder' },
      { label: 'Chain of Responsibility', href: '/design-patterns/chain-of-responsibility' },
      { label: 'CQRS', href: '/design-patterns/cqrs' },
      { label: 'Decorator', href: '/design-patterns/decorator' },
      { label: 'Domain Events', href: '/design-patterns/domain-events' },
      { label: 'Facade', href: '/design-patterns/facade' },
      { label: 'Factory Method', href: '/design-patterns/factory-method' },
      { label: 'Guard Clause', href: '/design-patterns/guard-clause' },
      { label: 'Mediator', href: '/design-patterns/mediator' },
      { label: 'Memento', href: '/design-patterns/memento' },
      { label: 'Null Object', href: '/design-patterns/null-object' },
      { label: 'Object Mother', href: '/design-patterns/object-mother' },
      { label: 'Observer', href: '/design-patterns/observer' },
      { label: 'Outbox', href: '/design-patterns/outbox' },
      { label: 'Proxy', href: '/design-patterns/proxy' },
      { label: 'Repository', href: '/design-patterns/repository' },
      { label: 'REPR', href: '/design-patterns/repr' },
      { label: 'Rules Engine', href: '/design-patterns/rules-engine' },
      { label: 'Singleton', href: '/design-patterns/singleton' },
      { label: 'Specification', href: '/design-patterns/specification' },
      { label: 'State', href: '/design-patterns/state' },
      { label: 'Strangler Fig', href: '/design-patterns/strangler-fig' },
      { label: 'Strategy', href: '/design-patterns/strategy' },
      { label: 'Unit of Work', href: '/design-patterns/unit-of-work' },
    ],
  },
  {
    title: 'Principles',
    items: [
      { label: 'Overview', href: '/principles' },
      { label: 'DRY', href: '/principles/dry' },
      { label: 'KISS', href: '/principles/kiss' },
      { label: 'YAGNI', href: '/principles/yagni' },
      { label: 'SOLID', href: '/principles/solid' },
      { label: 'Separation of Concerns', href: '/principles/separation-of-concerns' },
      { label: 'Composition over Inheritance', href: '/principles/composition-over-inheritance' },
      { label: 'Encapsulation', href: '/principles/encapsulation' },
    ],
  },
  {
    title: 'Practices',
    items: [
      { label: 'Overview', href: '/practices' },
      { label: 'Test-Driven Development', href: '/practices/tdd' },
      { label: 'Pair Programming', href: '/practices/pair-programming' },
      { label: 'Refactoring', href: '/practices/refactoring' },
      { label: 'Code Review', href: '/practices/code-review' },
      { label: 'Continuous Integration', href: '/practices/continuous-integration' },
    ],
  },
  {
    title: 'Values',
    items: [
      { label: 'Overview', href: '/values' },
      { label: 'Communication', href: '/values/communication' },
      { label: 'Simplicity', href: '/values/simplicity' },
      { label: 'Feedback', href: '/values/feedback' },
      { label: 'Courage', href: '/values/courage' },
      { label: 'Respect', href: '/values/respect' },
    ],
  },
  {
    title: 'Antipatterns',
    items: [
      { label: 'Overview', href: '/antipatterns' },
      { label: 'Spaghetti Code', href: '/antipatterns/spaghetti-code' },
      { label: 'God Object', href: '/antipatterns/god-object' },
      { label: 'Big Ball of Mud', href: '/antipatterns/big-ball-of-mud' },
      { label: 'Dead Code', href: '/antipatterns/dead-code' },
    ],
  },
  {
    title: 'Code Smells',
    items: [
      { label: 'Overview', href: '/code-smells' },
      { label: 'Long Method', href: '/code-smells/long-method' },
      { label: 'Large Class', href: '/code-smells/large-class' },
      { label: 'Feature Envy', href: '/code-smells/feature-envy' },
    ],
  },
  {
    title: 'Domain-Driven Design',
    items: [
      { label: 'Overview', href: '/domain-driven-design' },
      { label: 'Entity', href: '/domain-driven-design/entity' },
      { label: 'Value Object', href: '/domain-driven-design/value-object' },
      { label: 'Aggregate', href: '/domain-driven-design/aggregate' },
      { label: 'Repository', href: '/domain-driven-design/repository' },
      { label: 'Bounded Context', href: '/domain-driven-design/bounded-context' },
    ],
  },
  {
    title: 'Architecture',
    items: [
      { label: 'Overview', href: '/architecture' },
      { label: 'Microservices', href: '/architecture/microservices' },
      { label: 'Clean Architecture', href: '/architecture/clean-architecture' },
      { label: 'CQRS', href: '/architecture/cqrs' },
      { label: 'Event Sourcing', href: '/architecture/event-sourcing' },
    ],
  },
  {
    title: 'Testing',
    items: [
      { label: 'Overview', href: '/testing' },
      { label: 'Unit Testing', href: '/testing/unit-testing' },
      { label: 'Integration Testing', href: '/testing/integration-testing' },
      { label: 'E2E Testing', href: '/testing/e2e-testing' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { label: 'Overview', href: '/tools' },
      { label: 'Git', href: '/tools/git' },
      { label: 'Docker', href: '/tools/docker' },
    ],
  },
  {
    title: 'Terms',
    href: '/terms',
  },
  {
    title: 'Laws',
    items: [
      { label: 'Overview', href: '/laws' },
      { label: "Brook's Law", href: '/laws/brooks-law' },
      { label: "Conway's Law", href: '/laws/conways-law' },
      { label: 'Law of Demeter', href: '/laws/law-of-demeter' },
    ],
  },
]
