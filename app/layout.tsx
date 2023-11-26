import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'
import './globals.css'

const epilogue = Epilogue({ subsets: ['latin-ext'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], variable: '--Epilogue'})
const metadata: Metadata = {
  title: 'Guilherme',
  description: 'Descrição',
  keywords: 'key words here',
  icons: {
    icon: '/Logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="pt-br">
        <meta name="robots" content="index, follow"></meta>
        <meta name="revisit-after" content="5 days"></meta>
        <meta name="author" content="Guilherme"></meta>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1" />
        <meta name="language" content="pt-br"></meta>
        <meta name="keywords" content="keywords here"></meta>
        <meta name="description" content="description"></meta>
      <body className={epilogue.className}>{children}</body>
    </html>
  )
}
