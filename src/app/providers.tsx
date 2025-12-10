'use client'

import { ThemeProvider } from 'next-themes'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
        <Header />
        
        {/* Main Container with Grid */}
        <div className="flex-1 container mx-auto px-4">
          <div className="grid grid-cols-12 gap-6">
            {/* Sidebar - 3 columns on desktop */}
            <aside className="hidden lg:block lg:col-span-3">
              <Sidebar />
            </aside>
            
            {/* Content Area - 9 columns on desktop */}
            <main className="col-span-12 lg:col-span-9 py-8">
              {children}
            </main>
          </div>
        </div>

        {/* Footer */}
        <Footer />

        {/* Mobile Sidebar */}
        <div className="lg:hidden">
          <Sidebar mobile />
        </div>
      </div>
    </ThemeProvider>
  )
}
