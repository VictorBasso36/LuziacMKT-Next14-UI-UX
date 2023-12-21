import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'
import './globals.css'
import { ParallaxProvider, OpenProvider } from '../app/Blog/providers/providers'
import Script from 'next/script'


const epilogue = Epilogue({ subsets: ['latin-ext'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], variable: '--Epilogue'})


export async function generateMetadata(): Promise<Metadata> { 

  return {
    
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
    robots: {
      index: true,
      googleBot: 'index, follow',
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    
    <html lang="pt-br">
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id='GTM-TS6PB2TC'`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', 'GTM-TS6PB2TC');
  `,
        }}
      />
        <meta name="robots" content="index, follow"></meta>
        <meta name="revisit-after" content="5 days"></meta>
        <meta name="author" content="Guilherme Luziac, Victor Basso Dev, LUZIAC - CRIANDO CONEXÕES"></meta>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1" />
        <meta name="language" content="pt-br"></meta> 
      <body className={epilogue.className}>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TS6PB2TC"
      height="0" width="0" style={{display:"none", visibility:"hidden"}}></iframe></noscript>
       <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', 'GTM-TS6PB2TC');
  `,
        }}
      />
        <ParallaxProvider key={0}>
          <OpenProvider key={0}>
            {children}
          </OpenProvider>
        </ParallaxProvider>
        
        </body>
    </html>
  )
}