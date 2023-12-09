"use client"
import Link from 'next/link'
import styles from './main.module.css'
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';
import { useOpen } from './providerModal';
import { usePathname } from 'next/navigation';
export default function MainBanner()   {
    const pathname = usePathname()
    const { open, setOpen } = useOpen()
    return (
        <main className={styles.main}>
          <div className={styles.whatsapp} onClick={() => setOpen('whatsapp')}>
            <Image onClick={() => setOpen('whatsapp')} src='/whatsapp.svg' alt='whatsapp gran vellas' width={45} height={45}>

            </Image>
          </div>
            <div className={styles.container}>  
                <div className={styles.content}>
                    {pathname === '/' ?
                    <>
                    <p className={styles.mainTitle}>
                        VENDAS<strong>,</strong><br />
                        VENDAS<strong>,</strong><br />
                        E <strong>VENDAS</strong>
                    </p>
                    <br />
                    <h1>Se <span>conecte com</span> os compradores dos<br />
                    seus imóveis através de <strong>estratégias<br />
                    digitais que funcionam</strong>.</h1>
                    </>
                    :
                    <p className={styles.mainTitle}>PORTAL DE <br /><strong>NOTICÍAS</strong></p>
                    }
                    <br />
                    <br />
                    
                        <button onClick={() => setOpen('whatsapp')} className={styles.mainButton}>
                            <div className={styles.clipbg}>
                                <p>QUERO <strong>POTENCIALIZAR</strong> MINHAS VENDAS!</p>
                            </div>
                        </button>
                    
                 
                </div>  
         
                <Image className={styles.handsbg} src={"/bannerLogoBg.svg"} width={530} height={530} alt="Imagem clientes satisfeitos - Luziac" />
              
                <Parallax speed={pathname === '/' ? 15 : -15} startScroll={15} >
                   <Image className={styles.itemParallax} src={"/bannerDetail.svg"} width={85} height={85} alt="Imagem clientes satisfeitos - Luziac" />     
                </Parallax>
                <Parallax speed={pathname === '/' ? -15 : 15}>
                    <Image className={styles.handsParallax} src={pathname === '/' ? "/bannersHands.svg" : "/listening.svg"} width={pathname === '/' ? 530 : 330} height={pathname === '/' ? 530 : 330} alt="Imagem clientes satisfeitos - Luziac" />
                </Parallax>
              
              
            </div>
        </main>
    
  )
}