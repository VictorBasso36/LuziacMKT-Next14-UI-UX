"use client"
import Link from 'next/link'
import styles from './blog.module.css'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import BlogCard from './blogCard'
import { useOpen } from './providerModal'

export default function Blog()   {
  const { open, setOpen } = useOpen()
  return (
    <>
        <div className={styles.main}>
            <section className={styles.container}>
                <h5>MAIS ACESSADOS NO <span>NOSSO <Image className={styles.blogTitleDetail} src="/squashBlack.svg" width={400} height={20} alt="Blog Luziac - Artigos Imobiliarios"></Image>BLOG</span></h5>
                <div className={styles.containerCards}>
                  <BlogCard 
                    title='Como a Realidade Virtual Impacta na Venda de Imóveis na Planta.'
                    id={1}
                    key={1}
                    srcImage='/blogImage.svg'
                    description='A experiência de comprar um imóvel na planta pode ser desafiadora para os clientes, pois muitas vezes eles precisam visualizar algo que ainda não existe fisicamente. É aqui que a Realidade Virtual ( RV ) se torna uma ferramenta valiosa. Ao proporcionar uma experiência imersiva, a RV transforma a maneira como os compradores interagem com propriedades que ainda estão em fase de construção, influenciando diretamente no processo de venda. Vamos explorar o porquê:'
                  />
                  <BlogCard 
                    title='Como as fotos dos seus imóveis impactam no engajamento das suas redes.'
                    id={2}
                    key={2}
                    srcImage='/blogImage.svg'
                    description='As fotos do imóvel geralmente representam o primeiro contato do seu cliente com a sua propriedade, e muitas delas acabam sendo compartilhadas em suas redes sociais. No entanto, se não forem bem capturadas, o Facebook e o Instagram podem penalizar você com alcance e engajamento limitados. Sabe por quê? Siga o fio:'
                  />
                  <BlogCard 
                    title='Como a Queda da Taxa Selic Interfere nas Suas Vendas de Imóveis?'
                    id={3}
                    key={3}
                    srcImage='/blogImage.svg'
                    description='A variação da taxa Selic, além de impactar a economia como um todo, exerce um papel significativo no mercado imobiliário. Para imobiliárias e incorporadoras, entender como a queda da taxa Selic influencia as vendas de imóveis é crucial para ajustar estratégias e aproveitar oportunidades. Vamos explorar de que maneira essas mudanças podem afetar o setor:'
                  />
                </div>
                
                  <button className={styles.MainButton} onClick={() => setOpen('whatsapp')}>
                    <p>Quero me <span>conectar <br /> com meus clientes!</span></p>
                  </button>
               
            </section>
        </div>
    </>
  )
}
