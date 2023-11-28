"use client"
import Link from 'next/link'
import styles from './carrousel.module.css'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

export default function Carrousel()   {

  return (
    <>
        <div className={styles.main}>
            <section className={styles.container}>
                <h3>EMPRESAS QUE SE <br />
                <span>CONECTAM</span> COM OS CLIENTES:</h3>
                <p>*<span>Clique</span>* e acesse o case completo !</p>
            </section>
            Carrousel Here.
        </div>
    </>
  )
}
