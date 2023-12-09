import styles from './blogPost.module.css'

export interface BlogCard{
    title: string;
    srcImage?: string;
    description: string;
    id: number;

}

export default function BlogPost({ title, srcImage, description, id  } : BlogCard)   {
    
    return (
      <>
          <article className={styles.main}>
                content Here
          </article>
      </>
    )
  }
  