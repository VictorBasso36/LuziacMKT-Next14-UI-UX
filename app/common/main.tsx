"use client"
import Link from 'next/link'
import styles from './main.module.css'
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';
export default function MainBanner()   {

  return (
    
        <main className={styles.main}>
            <div className={styles.container}>  
                <div className={styles.content}>
                    <p className={styles.mainTitle}>
                        VENDAS<strong>,</strong><br />
                        VENDAS<strong>,</strong><br />
                        E <strong>VENDAS</strong>
                    </p>
                    <br />
                    <h1>Se <span>conecte com</span> os compradores dos<br />
                    seus imóveis através de <strong>estratégias<br />
                    digitais que funcionam</strong>.</h1>
                    <br />
                    <br />
                    <Link href="/">
                        <button className={styles.mainButton}>
                            <div className={styles.clipbg}>
                                <p>QUERO <strong>POTENCIALIZAR</strong> MINHAS VENDAS!</p>
                            </div>
                        </button>
                    </Link>
                 
                </div>  
         
                <Image className={styles.handsbg} src={"/bannerLogoBg.svg"} width={530} height={530} alt="Imagem clientes satisfeitos - Luziac" />
              
                <Parallax speed={15} startScroll={15} >
                   <Image className={styles.itemParallax} src={"/bannerDetail.svg"} width={85} height={85} alt="Imagem clientes satisfeitos - Luziac" />     
                </Parallax>
                <Parallax speed={-15}>
                    <Image className={styles.handsParallax} src={"/bannersHands.svg"} width={530} height={530} alt="Imagem clientes satisfeitos - Luziac" />
                </Parallax>
              
              
            </div>
        </main>
    
  )
}
