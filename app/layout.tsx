import Header from '@/components/ui/Header'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'In - Blog',
  description: 'Your favorite blog!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
