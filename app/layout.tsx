import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'
import './globals.css'
import { ParallaxProvider, OpenProvider } from '../app/Blog/providers/providers'


const epilogue = Epilogue({ subsets: ['latin-ext'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], variable: '--Epilogue'})


export async function generateMetadata(): Promise<Metadata> { 

  return {
    robots: {
      index: true,
      follow: true,
    },
    
    authors: [{
      name: 'Guilherme Luziac',
      url: 'https://www.linkedin.com/in/guilherme-carvalho-bispo/?originalSubdomain=br'
    },
    {
      name: 'Victor Basso Dev',
      url: 'www.linkedin.com/in/victor-basso-b3090a189'
    }  
    ],
    title: 'LUZIAC - Marketing Imobiliário, criando conexões.',
    description: 'Ajudando imobiliárias e incorporadoras a venderem mais com estratégias inteligentes.',
    keywords: ['marketing imobiliário', 'imobiliárias', 'incorporadoras', 'vendas estratégicas', 'sites imobiliários', 'marketing digital imobiliário', 'identidade visual', 'anúncios imobiliários', 'gestão imobiliária', 'captação imobiliária', 'edição imobiliária'],
    icons: {
      icon: '/faviicon.svg',
    },
  }
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
        <meta name="author" content="Guilherme Luziac, Victor Basso Dev, LUZIAC - CRIANDO CONEXÕES"></meta>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1" />
        <meta name="language" content="pt-br"></meta> 
      <body className={epilogue.className}>
        <ParallaxProvider key={0}>
          <OpenProvider key={0}>
            {children}
          </OpenProvider>
        </ParallaxProvider>
        </body>
    </html>
  )
}