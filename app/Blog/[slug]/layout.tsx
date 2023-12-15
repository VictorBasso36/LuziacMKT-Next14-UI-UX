import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'
import '../../../app/globals.css'
import { ParallaxProvider, OpenProvider } from '../providers/providers'
import Script from 'next/script'


interface PropsGet {
    slugId: string,
    id: number,
    slug: string,
    description: string,
    image: string
  }
  
  export async function generateStaticParams() {
  
    const request = (await fetch('https://www.luziac.com.br/pages/api/blog')).json() 
    if(!request) return {}
    const posts = await request
    return posts.map((post: any) => ({
      id: post.id,
      slugId: post.slugId,
      slug: post.slug,
      description: post.description,
      image: post.image,
    }))
  }
  
  export async function generateMetadata({ params }: any): Promise<Metadata> { 
  
    const slugMetadata = (await fetch('https://www.luziac.com.br/pages/api/blog')).json() 
    if(!slugMetadata) return {}
    const data = await slugMetadata
  
    const slug = decodeURIComponent(params?.slug)
    const content = data.find((objeto: any) => objeto.slug === slug.toString());
    return {
      title: content?.slug ? `Artigo Imobiliário : ${content?.slug}` : 'Luziac Marketing Imobiliário',
      description: content?.description  ? content?.description : 'Luziac Marketing Imobiliário',
      robots: {
        index: true,
        follow: true,
      },
      metadataBase: new URL('https://www.luziac.com.br/'),
      
      authors: [{
        name: 'Guilherme Luziac',
        url: 'https://www.linkedin.com/in/guilherme-carvalho-bispo/?originalSubdomain=br'
      },
      {
        name: 'Victor Basso Dev',
        url: 'www.linkedin.com/in/victor-basso-b3090a189'
      }  
      ],
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
    <><Script
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
      }} /><ParallaxProvider key={0}>
        <OpenProvider key={1}>
          {children}
        </OpenProvider>
      </ParallaxProvider>
      </> 

 )
}