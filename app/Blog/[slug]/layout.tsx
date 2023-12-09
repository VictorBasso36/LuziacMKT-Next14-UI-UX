import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'
import '../../../app/globals.css'
import { ParallaxProvider, OpenProvider } from '../providers/providers'


const epilogue = Epilogue({ subsets: ['latin-ext'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], variable: '--Epilogue'})



interface PropsGet {
    slugId: string,
    id: number,
    slug: string,
    description: string,
    image: string
  }
  
  export async function generateStaticParams() {
  
    const request = (await fetch('http://localhost:3000/posts.json')).json() 
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
  
    const slugMetadata = (await fetch('https://www.luziac.com.br/posts.json')).json() 
    const data = await slugMetadata
  
    const slug = decodeURIComponent(params?.slug)
    const content = data.find((objeto: any) => objeto.slug === slug.toString());
    return {
      title: content?.slug ? `Artigo Imobiliário : ${content?.slug}` : 'Luziac Marketing Imobiliário',
      description: content?.description  ? content?.description : 'Luziac Marketing Imobiliário',
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

        <ParallaxProvider key={0}>
          <OpenProvider key={1}>
            {children}
          </OpenProvider>
        </ParallaxProvider> 

  )
}
