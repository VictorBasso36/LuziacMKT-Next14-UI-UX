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
                <p>Carrousel</p>
            </section>
        </div>
    </>
  )
}
