"use client"
import Link from 'next/link'
import styles from './blog.module.css'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import BlogCard from './blogCard'

export default function Blog()   {

  return (
    <>
        <div className={styles.main}>
            <section className={styles.container}>
                <h5>MAIS ACESSADOS NO <span>NOSSO <Image className={styles.blogTitleDetail} src="/squashBlack.svg" width={400} height={20} alt="Blog Luziac - Artigos Imobiliarios"></Image>BLOG</span></h5>
                <div className={styles.containerCards}>
                  <BlogCard 
                    title='LOREM IPSUM'
                    id={1}
                    key={1}
                    srcImage='/blogImage.svg'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                  />
                  <BlogCard 
                    title='LOREM IPSUM'
                    id={2}
                    key={2}
                    srcImage='/blogImage.svg'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                  />
                  <BlogCard 
                    title='LOREM IPSUM'
                    id={3}
                    key={3}
                    srcImage='/blogImage.svg'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                  />
                </div>
                
                  <button className={styles.MainButton}>
                    <p>CURTIU? <span>VEJA MAIS ARTIGOS AQUI!</span></p> 
                  </button>
               
            </section>
        </div>
    </>
  )
}
