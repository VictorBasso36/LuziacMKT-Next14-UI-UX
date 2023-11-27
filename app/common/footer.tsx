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
                  <Image className={styles.arrowIcon} width={70} height={20} alt={"Contatos da Luziac."} src="/arrowFooter.svg"></Image>
                </p>
              </div>
              <div className={styles.contentForm}>
                <form className={styles.FormMain} action="">
                  <label htmlFor="">
                    <p>Como você <span>gostaria de ser chamado?</span></p>
                    <input type="text" />
                  </label>
                  <label htmlFor="">
                    <p>Qual o nome da <span>sua empresa?</span></p>
                    <input type="text" />
                  </label>
                  <label htmlFor="">
                    <p>Qual seu <span>tipo de atuação?</span></p>
                    <input type="text" />
                  </label>
                  <label htmlFor="">
                    <p>Seu <span>zap</span> ou <span>telefone</span>:</p>
                    <input type="tel" />
                  </label>
                  <label htmlFor="">
                    <p>E por último, <span>seu melhor e-mail:</span></p>
                    <input type="email" />
                  </label>

                </form>                  
                <button className={styles.submitButton}>
                  <p>Enviar (Estou pronto <br />
                  para potencializar <br />
                  minhas vendas.) {'>'}</p>
                </button>
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
