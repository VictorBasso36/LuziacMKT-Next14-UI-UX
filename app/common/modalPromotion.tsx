"use client"
import Link from 'next/link'
import styles from './modalPromotion.module.css'
import Image from 'next/image'
import Divisor from './divisor'
import { Parallax } from 'react-scroll-parallax'
import { useEffect, useState } from 'react'
import { useOpen } from './providerModal'
import { useSearchParams } from 'next/navigation'

export default function ModalPromotion()   {
    const { open, setOpen } = useOpen()
    const [render, setRender] = useState<boolean>(false);
    useEffect(() => {
        if(open === 'true'){
            setRender(true)
        } else if(open === 'whatsapp'){
            setRender(false)
        }
        else{
            setRender(false)
        }
    }, [open])

    function setClose() {
        setOpen('false')
    }

    if (!render) {
        return null;
    }
    return (
    <>  
        <section className={styles.main}>
            <div className={styles.container} >
                <div className={styles.modal}>
                    <p className={styles.Close} onClick={setClose}><strong>X</strong></p>
                    <h1>EI, &nbsp;<span><Image className={styles.blogTitleDetail} src="/squashBlack.svg" width={400} height={20} alt="Blog Luziac - Artigos Imobiliarios"></Image> PARABÉNS!</span></h1>
                    <p className={styles.itemP}>Tenho uma notícia boa para você que estava no evento <br />
                    <span>*</span><strong>Segredo dos Tubarões</strong><span>*</span><strong>!</strong>
                    </p><br />
                    <p className={styles.itemPMain}>
                    Se você está vendo isso você já sabe da importância do Mkt. digital dentro do mercado imobiliário, e por isso, você acaba de ganhar 
                    <br />
                    <br />
                    <span>50% DE DESCONTO NO PRIMEIRO MÊS DE INVESTIMENTO!  </span>
                    </p>
                    <br />
                    <button onClick={() => setOpen('whatsapp')} className={styles.mainButton} >
                        <p>CLIQUE AQUI E <span>POTENCIALIZE SUAS VENDAS</span>!</p>
                    </button>
                    <Image src="/GIFT.svg" alt='Promoção LUZIAC' height={120} width={120} className={styles.gift}></Image>
                </div>
            </div>
        </section>
    </>
  )
}
