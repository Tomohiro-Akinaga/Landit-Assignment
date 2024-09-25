import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: 'Landit',
  description: 'App for visualizing real estate transactions using graphs',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='ja'>
      <body className={`${notoSansJP.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
