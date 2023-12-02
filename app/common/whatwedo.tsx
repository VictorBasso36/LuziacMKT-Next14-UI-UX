"use client"
import Link from 'next/link'
import styles from './whatwedo.module.css'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import { useOpen } from './providerModal'

export default function WhatWedo()   {
  const { setOpen } = useOpen()
  return (
    <>
        <div className={styles.main}>
            <section className={styles.container}>
              <h4>O QUE FAZEMOS DE <span><Image className={styles.blogTitleDetail} src="/squashWhite.svg" width={400} height={20} alt="Blog Luziac - Artigos Imobiliarios"></Image>MELHOR</span>?</h4>
              <div className={styles.cardsHere}>
                <div className={styles.MainCardParallax}>
                  <div className={styles.MainCard}>
                    <h4>CRIAÇÃO <br /> DE <span>ID. VISUAL</span></h4>
                    <p>para sua <span>marca</span> ou <span>empreendimento</span></p>
                    <Image className={styles.clickCard} src="/clickBlog.svg" alt={`O que a Luziac faz ? : CRIAÇÃO DE ID.VISUAL`} height={20} width={20}></Image>
                  </div>
                </div>
                <div className={styles.MainCardParallax}>
                  <div className={styles.MainCard}>
                    <h4>GESTÃO <br /> DE <span>REDES <br /> SOCIAIS</span>  </h4>
                    <p>para <span>aproximar</span> você de seus clientes</p>
                    <Image className={styles.clickCard} src="/clickBlog.svg" alt={`O que a Luziac faz ? : CRIAÇÃO DE ID.VISUAL`} height={20} width={20}></Image>
                  </div>
                </div>
                <div className={styles.MainCardParallax}>
                  <div className={styles.MainCard}>
                    <h4>REALIDADE <br /> <span>VIRTUAL</span></h4>
                    <p>para seus <span>empreendimentos</span></p>
                    <Image className={styles.clickCard} src="/clickBlog.svg" alt={`O que a Luziac faz ? : CRIAÇÃO DE ID.VISUAL`} height={20} width={20}></Image>
                  </div>
                </div>
                <div className={styles.MainCardParallax}>
                  <div className={styles.MainCard}>
                    <h4>DESENHO DE <br /> <span>ESTRATÉGIAS <br />DIGITAIS </span></h4>
                    <p>que <span>funcionam</span></p>
                    <Image className={styles.clickCard} src="/clickBlog.svg" alt={`O que a Luziac faz ? : CRIAÇÃO DE ID.VISUAL`} height={20} width={20}></Image>
                  </div>
                </div>
                <div className={styles.MainCardParallax}>
                  <div className={styles.MainCard}>
                    <h4><span>ADS</span></h4>
                    <p>Tiktok for Business, Meta Ads, Google e Youtube Ads</p>
                    <Image className={styles.clickCard} src="/clickBlog.svg" alt={`O que a Luziac faz ? : CRIAÇÃO DE ID.VISUAL`} height={20} width={20}></Image>
                  </div>
                </div>
                <div className={styles.MainCardParallax}>
                  <div className={styles.MainCard}>
                    <h4><span>GESTÃO</span> E ACOMPA-<br />NHAMENTO</h4>
                    <p>de Leads através de <span>CRMs</span></p>
                    <Image className={styles.clickCard} src="/clickBlog.svg" alt={`O que a Luziac faz ? : CRIAÇÃO DE ID.VISUAL`} height={20} width={20}></Image>
                  </div>
                </div>
                <div className={styles.MainCardParallax}>
                  <div className={styles.MainCard}>
                    <h4>CAPTAÇÃO <br />E <span>EDIÇÃO</span></h4>
                    <p>para <span>criativos online</span></p>
                    <Image className={styles.clickCard} src="/clickBlog.svg" alt={`O que a Luziac faz ? : CRIAÇÃO DE ID.VISUAL`} height={20} width={20}></Image>
                  </div>
                </div>
                <div className={styles.MainCardParallax}>
                  <div className={styles.MainCard}>
                    <h4>CRIAÇÃO <br />DE <span>SITES</span></h4>
                    <p>institucionais para <span>empresas</span> e <span>empreendimentos</span></p>
                    <Image className={styles.clickCard} src="/clickBlog.svg" alt={`O que a Luziac faz ? : CRIAÇÃO DE ID.VISUAL`} height={20} width={20}></Image>
                  </div>
                </div>
                <div className={styles.MainCardLast}>
                  <h4>QUER CONHECER <br /> AS <span>MELHORES <br /> SOLUÇÕES?</span> PARA <br /> SEU NEGÓCIO </h4>
          
                  <div className={styles.sendButton} onClick={() => setOpen('whatsapp')}>
                    <p>CHEGA <span>MAIS!</span></p>
                  </div>
                </div>
              </div>
            </section>
        </div>
    </>
  )
}
