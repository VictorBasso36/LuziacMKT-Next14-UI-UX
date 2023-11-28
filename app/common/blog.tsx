"use client"
import Link from 'next/link'
import styles from './blog.module.css'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

export default function Blog()   {

  return (
    <>
        <div className={styles.main}>
            <section className={styles.container}>
                <h5>MAIS ACESSADOS NO NOSSO <span>BLOG</span></h5>
            </section>
        </div>
    </>
  )
}
