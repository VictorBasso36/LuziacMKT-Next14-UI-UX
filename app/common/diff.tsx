"use client"
import Link from 'next/link'
import styles from './diff.module.css'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

export default function Diff()   {

  return (
    <>
        <Parallax speed={-10}  >
            <Image className={styles.itemParallax} src={"/parallaxDiff.svg"} width={280} height={280} alt="Imagem clientes satisfeitos - Luziac" />     
        </Parallax>
        <div className={styles.main}>
            
            <section className={styles.container}>
                <div className={styles.itemChico}>
                    <Image src={"/sadChico.svg"} width={350} height={350} alt={''}  >

                    </Image>
                    <div className={styles.diagonalDiv}>
                        <h2> 
                         <span>OUTRAS AGÊNCIAS</span> <br /> DE MARKETING DIGITAL
                            
                        </h2>

                    </div>
                    <ul>
                        <li>
                            <div className={styles.square}>
                            </div>
                            <p><span>Não sabe</span> sobre tendências de vendas de imóveis;</p>
                        </li>

                        <li><div className={styles.square}>
                            </div>
                            <p><span>Não está por dentro</span> das movimentações do mercado imobiliário.
                            .</p>
                        </li>
                        <li>
                            <div className={styles.square}>
                            </div>
                            <p><span>Estratégias pouco adaptadas</span> para a venda de imóvel</p>

                        </li>

                        <li><div className={styles.square}>
                            </div>
                            <p><span>Não conhece a jornada</span>  de compra do mercado imobiliário.
                            </p>
                        </li>

                        <li><div className={styles.square}>
                            </div>
                            <p>
                            <span>Não potencializa</span> suas vendas ao máximo.</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.itemChico}>
                    <Image src={"/happyChico.svg"} width={350} height={350} alt={''}  >

                    </Image>
                    <div className={styles.diagonalDiv2}>
                        <h2> 
                            <span>LUZIAC</span> - ESPECIALISTA <br />
                            EM MKT IMOBILIÁRIO 
                        </h2>
                    </div>
                    <p className={styles.diagonalDiv2text}>
                        <span>*</span><strong>Conecta</strong><span>*</span> você ao seu cliente de forma assertiva, rápida e otimizada, <strong>potencializando suas vendas.</strong>
                    </p>
                   
                        <button className={styles.convertButton}>   
                            <p>Quero me <span>conectar <br /> com meus clientes!</span></p>
                        </button>
                        <Image className={styles.covertArrow} src={"/arrowDiff.svg"} width={80} height={80} alt={"Clique para conhecer a LUZIAC - Criando Conexões"}></Image>
                           
                  
                </div>  
              
            </section>  
        </div>
    </>
  )
}
