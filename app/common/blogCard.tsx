"use client"
import Link from 'next/link'
import styles from './blogCard.module.css'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

export interface BlogCard{
    title: string;
    srcImage?: string;
    description: string;
    id: number;

}

export default function BlogCard({ title, srcImage, description, id  } : BlogCard)   {

  return (
    <>
        <article className={styles.main}>
            <div className={styles.imageCard} style={{backgroundImage: `url('${srcImage}')`}}>

            </div>
            <Link href={`/Blog/${title}`} title={`Leia o artigo sobre : ${title}`}>
                <div className={styles.mainContent}>
                    <div className={styles.DetailItem}></div>
                    <h5 className={styles.CardTitle}>{title.split(' ').slice(0, -1).join(' ')} <span>{title.split(' ').slice(-1)}</span></h5>

                    <p className={styles.CardDescription}>
                    {description.length > 235
                        ? `${description.slice(0, 235)}...`
                        : description}
                    </p>

                    
                        <p className={styles.ContinueButton}>CONTINUAR LENDO <Image src="/clickBlog.svg" alt={`Leia o artigo sobre : ${title}`} height={20} width={20}></Image><span>{'>'}</span>
                        </p>
                
                </div> 
            </Link>
        </article>
    </>
  )
}