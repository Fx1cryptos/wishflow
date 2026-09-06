import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WISHFLOW — Where Wishes Become Reality.',
  description: 'WISHFLOW is where genuine wishes meet the people who can help make them real.',
  openGraph: {
    title: 'WISHFLOW',
    description: 'Where Wishes Become Reality.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  )
}
