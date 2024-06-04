import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Aside from '../components/Sidebar'

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
      <body className="grid min-h-screen grid-cols-app text-zinc-700 antialiased selection:bg-white">
        <Aside />

        <main className="px-8 pb-12 pt-8">{children}</main>
      </body>
    </html>
  )
}
