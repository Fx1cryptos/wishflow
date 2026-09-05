import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WISHFLOW - Make a wish. Let possibility find you.',
  description: 'A next-generation Web4 platform where people share their wildest wishes and people with the ability to help discover and make them happen.',
  openGraph: {
    title: 'WISHFLOW',
    description: 'Make a wish. Let possibility find you.',
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
