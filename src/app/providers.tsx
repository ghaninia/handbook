'use client'

import { ThemeProvider } from 'next-themes'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Header />
        
        {/* Desktop Layout */}
        <div className="hidden lg:flex">
          <main className="flex-1 min-w-0">
            {children}
          </main>
          <div className="w-64 flex-shrink-0">
            <Sidebar />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <main className="min-h-[calc(100vh-3.5rem)]">
            {children}
          </main>
          <Sidebar mobile />
        </div>
      </div>
    </ThemeProvider>
  )
}
