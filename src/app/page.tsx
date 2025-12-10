'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-4"
    >
      {/* Hero Section */}
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          DevIQ
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          مرجع جامع اصول، الگوها و بهترین روش‌های توسعه نرم‌افزار.
          تمام مفاهیمی که یک توسعه‌دهنده حرفه‌ای نیاز دارد.
        </p>
      </div>

      {/* Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="card group hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{section.icon}</span>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {section.title}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {section.description}
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
              <span>مشاهده</span>
              <i className="ri-arrow-left-line"></i>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Links */}
      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          دسترسی سریع
        </h2>
        <div className="flex flex-wrap gap-2">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="tag tag-blue"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const sections = [
  {
    title: 'الگوهای طراحی',
    description: 'راه‌حل‌های اثبات‌شده برای مشکلات رایج در طراحی نرم‌افزار',
    href: '/design-patterns',
    icon: '🧩',
  },
  {
    title: 'اصول',
    description: 'اصول بنیادی مثل SOLID، DRY، KISS و YAGNI',
    href: '/principles',
    icon: '📐',
  },
  {
    title: 'روش‌ها',
    description: 'بهترین روش‌ها برای توسعه نرم‌افزار با کیفیت',
    href: '/practices',
    icon: '⚙️',
  },
  {
    title: 'ضدالگوها',
    description: 'الگوهای رایج اشتباه که باید از آن‌ها اجتناب کنید',
    href: '/antipatterns',
    icon: '⚠️',
  },
  {
    title: 'بوی بد کد',
    description: 'نشانه‌های کد ضعیف و نیازمند بازآرایی',
    href: '/code-smells',
    icon: '🔍',
  },
  {
    title: 'DDD',
    description: 'طراحی دامنه‌محور و مفاهیم مرتبط',
    href: '/domain-driven-design',
    icon: '🏛️',
  },
  {
    title: 'معماری',
    description: 'الگوها و سبک‌های معماری نرم‌افزار',
    href: '/architecture',
    icon: '🏗️',
  },
  {
    title: 'تست',
    description: 'انواع تست و روش‌های تست نرم‌افزار',
    href: '/testing',
    icon: '🧪',
  },
  {
    title: 'ابزارها',
    description: 'ابزارهای ضروری برای توسعه‌دهندگان',
    href: '/tools',
    icon: '🛠️',
  },
  {
    title: 'اصطلاحات',
    description: 'واژه‌نامه اصطلاحات تخصصی',
    href: '/terms',
    icon: '📖',
  },
  {
    title: 'قوانین',
    description: 'قوانین و اصول عمومی مهندسی نرم‌افزار',
    href: '/laws',
    icon: '⚖️',
  },
  {
    title: 'ارزش‌ها',
    description: 'ارزش‌های برنامه‌نویسی مفرط (XP)',
    href: '/values',
    icon: '💎',
  },
]

const quickLinks = [
  { label: 'SOLID', href: '/principles#solid' },
  { label: 'Singleton', href: '/design-patterns#singleton' },
  { label: 'Factory', href: '/design-patterns#factory' },
  { label: 'Repository', href: '/design-patterns#repository' },
  { label: 'TDD', href: '/practices#tdd' },
  { label: 'Clean Code', href: '/practices#clean-code' },
  { label: 'Microservices', href: '/architecture#microservices' },
  { label: 'Event Sourcing', href: '/architecture#event-sourcing' },
]
