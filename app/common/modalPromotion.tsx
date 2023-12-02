"use client"
import Link from 'next/link'
import styles from './modalPromotion.module.css'
import Image from 'next/image'
import Divisor from './divisor'
import { Parallax } from 'react-scroll-parallax'
import { useEffect, useState } from 'react'

export default function ModalPromotion()   {
    const params = new URLSearchParams(window.location.search);
    const open = params.get('open');
    const [openValue, setOpenValue] = useState<string>(open || 'false');
    const [render, setRender] = useState<boolean>(open !== 'false');

    useEffect(() => {
        const handlePopState = () => {
            const params = new URLSearchParams(window.location.search);
            const open = params.get('open');
            setOpenValue(open || 'false');
            setRender(open !== 'false');
        };

        window.addEventListener('popstate', handlePopState);

        // Limpeza na desmontagem
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    function setClose() {
        setOpenValue('false');
        setRender(false);
        let params = new URLSearchParams(window.location.search);
        params.set('open', 'false');
        window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
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
                    <button className={styles.mainButton}>
                        <p>CLIQUE AQUI E <span>POTENCIALIZE SUAS VENDAS</span>!</p>
                    </button>
                </div>
            </div>
        </section>
    </>
  )
}
