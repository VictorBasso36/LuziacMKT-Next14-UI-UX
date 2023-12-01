"use client"
import Link from 'next/link'
import styles from './carrousel.module.css'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Virtual } from 'swiper/modules';


export default function Carrousel()   {

  return (
    <>
        <div className={styles.main}>
            <section className={styles.container}>
                <h3>EMPRESAS QUE SE <br />
                <span>CONECTAM<Image className={styles.blogTitleDetail} src="/squashWhite.svg" width={400} height={20} alt="Blog Luziac - Artigos Imobiliarios"></Image></span> COM OS CLIENTES:</h3>
                <p>*<span>Clique</span>* e acesse o case completo !</p>
            </section>
            <div className={styles.swiperHere}>
            <Swiper
                spaceBetween={30}
                slidesPerView={'auto'}
                centeredSlides={false}
                loop={true}
                grabCursor={true}
                modules={[Autoplay, Virtual]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: true,
                }}
                className={styles.swiperMain}
              >
                  <SwiperSlide key={1} className={styles.Slide}>
                    <div className={styles.MyImage} style={{backgroundImage: `url('/CLUBE.webp')`}}>
                      item
                    </div>
                  
                  </SwiperSlide>
                  <SwiperSlide key={2} className={styles.Slide}>
                    <div className={styles.MyImage} style={{backgroundImage: `url('/CENTRAL0003.webp')`}}>
                      item
                    </div>
                  
                  </SwiperSlide>
                  <SwiperSlide key={3} className={styles.Slide}>
                    <div className={styles.MyImage} style={{backgroundImage: `url('/CLUBE.webp')`}}>
                      item
                    </div>
                  
                  </SwiperSlide>
            </Swiper>
          </div>
        </div>
    </>
  )
}
