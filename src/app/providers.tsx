'use client'

import { ThemeProvider } from '@/contexts/ThemeContext'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 lg:mr-64">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
