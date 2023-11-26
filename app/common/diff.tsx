"use client"
import Link from 'next/link'
import styles from './diff.module.css'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

export default function Diff()   {

  return (
    <>
        <div className={styles.main}>
            <section className={styles.container}>
                <div className={styles.itemChico}>
                    <Image src={"/sadChico.svg"} width={350} height={350} alt={''}  >

                    </Image>
                    <div className={styles.diagonalDiv}>
                        <h2> 
                        Agência de mkt que 
                        <span>não é especializada</span> 
                        no ramo imobiliário: 
                        </h2>
                    </div>
                    <ul>
                        <li>Não sabe sobre tendências de vendas de imóveis;</li>

                        <li>Não está por dentro das movimentações do mercado imobiliário.
                        Estratégias pouco adaptadas para a venda de imóvel.</li>

                        <li>Não conhece a jornada de compra do mercado imobiliário.</li>

                        <li>Não potencializa suas vendas ao máximo.</li>
                    </ul>
                </div>
                <div className={styles.itemChico}>
                    <Image src={"/happyChico.svg"} width={350} height={350} alt={''}  >

                    </Image>
                    <div className={styles.diagonalDiv2}>
                        <h2> 
                            <span>LUZIAC</span> - ESPECIALISTA
                            EM MKT IMOBILIÁRIO 
                        </h2>
                    </div>
                    <p>
                        <span>*</span><strong>Conecta</strong><span>*</span> você ao seu cliente de forma assertiva, rápida e otimizada, <strong>potencializando suas vendas.</strong>
                    </p>
                    <Link href="">
                        <button>
                            <div>
                                <p>Quero me <span>conectar com meus clientes!</span></p>
                            </div>
                        </button>
                    </Link>
                    <Parallax speed={25} startScroll={25} >
                        <Image className={styles.itemParallax} src={"/parallaxDiff.svg"} width={125} height={125} alt="Imagem clientes satisfeitos - Luziac" />     
                    </Parallax>
                </div>
            </section>
        </div>
    </>
  )
}
