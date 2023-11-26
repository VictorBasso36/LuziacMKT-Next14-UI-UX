"use client"
import Link from 'next/link'
import styles from './footer.module.css'
import Image from 'next/image'
import Divisor from './divisor'

export default function Footer()   {

  return (
    <>
        <footer id={"CONTATO"} className={styles.Main}>

            <div className={styles.Container}>
              <div className={styles.contentContact}>
                <h6><Image width={35} height={35} src={"footerDarkLogo.svg"} alt='Luziac marketing imobiliário - Logo dark'></Image> LUZIAC <br /> MARKETING <br /> <span>IMOBILIÁRIO</span></h6>
                <p className={styles.contentContactDesc}>
                O mercado imobiliário está mudando,<br />
                e se você não mudar junto, fica pra trás.<br />
                *<span>Vem com a gente e potencialize suas <br />
                vendas através do digital!</span>*</p>
                <div className={styles.whatsappButton}>
                  <Link href="" target='_blank'>     
                    <p><Image src="/footerWhatsapp.svg" width={25} height={25} alt='Whatsapp de contato para marketing imobiliário - Luziac. '></Image> CHAMA A GENTE NO <span>&nbsp;ZAP</span></p>
                  </Link>
                </div>
                
                <br />
                <div className={styles.emailButton}>
                  <Link href="" target='_blank'>     
                    <p><Image src="/emailFooter.svg" width={25} height={25} alt='Email de contato para marketing imobiliário - Luziac. '></Image>ENVIE UM <span>&nbsp;E-MAIL</span></p>
                  </Link>
                </div>
                <p className={styles.convertItemDesc}>
                  Ou então, preencha seus <br /> dados e *<span>nós te chamamos</span>*
                </p>
              </div>
              <div className={styles.contentForm}>
                <form action="">
                  <h6>formHere</h6>
                </form>
              </div>

            </div>            
            <div className={styles.lastItem}>
                <Link href="/">
                    <Image src="/mainLogo.svg" alt='Luziac - Criando Conexões - Logo' width={280} height={60}>

                    </Image>
                </Link>
            </div>
        </footer>
    </>
  )
}
