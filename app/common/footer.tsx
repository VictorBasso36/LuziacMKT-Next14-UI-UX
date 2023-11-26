"use client"
import Link from 'next/link'
import styles from './footer.module.css'
import Image from 'next/image'
import Divisor from './divisor'

export default function Footer()   {

  return (
    <>
        <footer className={styles.Main}>
            <Divisor colordetail='#fb2576' colorbg='white' side={false}  />
            <div className={styles.Container}>

            

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
