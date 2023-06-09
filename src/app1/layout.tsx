import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Athletes Nepal</title>
        <meta name="keywords" content="athletes Nepal, Nepalese sports stars, sporting achievements, sports excellence, Nepali athletes, sports personalities, success stories, Nepal's sports icons"/>
        <meta name="description" content="Discover the incredible athletes from Nepal, their achievements, and inspiring success stories. Explore the sporting excellence and talent that has emerged from Nepal's athletic community."/>
        <meta name="author" content="Your Name"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
