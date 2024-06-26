import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '../components/Sidebar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Tailwind Next',
  description: 'Fundamentals Tailwind',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={inter.className} lang="pt">
      <body className="min-h-screen text-zinc-700 antialiased lg:grid lg:grid-cols-app dark:bg-zinc-900">
        <Sidebar />

        <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pb-12 lg:pt-8">
          {children}
        </main>
      </body>
    </html>
  )
}
