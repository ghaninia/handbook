'use client'

import { ThemeProvider } from '@/contexts/ThemeContext'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import PageTransition from '@/components/PageTransition'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-6">
            {/* Sidebar - 3 columns on lg */}
            <aside className="hidden lg:block lg:col-span-3 xl:col-span-2">
              <Sidebar />
            </aside>
            {/* Main Content - 9 columns on lg */}
            <main className="col-span-12 lg:col-span-9 xl:col-span-10 min-h-[calc(100vh-5rem)] py-6">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
          </div>
        </div>
        {/* Mobile Sidebar */}
        <div className="lg:hidden">
          <Sidebar mobile />
        </div>
      </div>
    </ThemeProvider>
  )
}
