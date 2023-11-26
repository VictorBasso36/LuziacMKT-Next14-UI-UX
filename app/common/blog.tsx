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
                <p>Blog</p>
            </section>
        </div>
    </>
  )
}
