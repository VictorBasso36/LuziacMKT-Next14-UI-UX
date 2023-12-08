"use client"
import Link from 'next/link'
import styles from './carrousel.module.css'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, Virtual } from 'swiper/modules';

export default function Carrousel()   {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className:string) {
      return '<span class="' + className + '">' + '</span>';
    },
  };
  return (
    <>
        <div className={styles.main}>
                <Parallax className={styles.itemParallaxWhite} speed={-5} startScroll={15} >
                   <Image  src={"/whiteParrallax.svg"} width={85} height={85} alt="Imagem clientes satisfeitos - Luziac" />     
                </Parallax>
                <Parallax speed={15} className={styles.itemParallaxBlack}>
                    <Image  src={"/blackParallax.svg"} width={85} height={85} alt="Imagem clientes satisfeitos - Luziac" />
                </Parallax>
            <section className={styles.container}>
                <h3>EMPRESAS QUE SE <br />
                <span>CONECTAM<Image className={styles.blogTitleDetail} src="/squashWhite.svg" width={400} height={20} alt="Blog Luziac - Artigos Imobiliarios"></Image></span> COM OS CLIENTES:</h3>
                {/* <p>*<span>Clique</span>* e acesse o case completo !</p> */}
            </section>
            <div className={styles.swiperHere}>
            <Swiper
                spaceBetween={30}
                slidesPerView='auto'
                centeredSlides={true}
                loop={true}
                grabCursor={true}
                modules={[Autoplay, Virtual, Pagination]}
                pagination={pagination}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: true,
                }}
                className={styles.swiperMain}
              >
                  <SwiperSlide key={2} className={styles.Slide}>
                    <div className={styles.MyImage2} style={{backgroundImage: `url('/CLUBE.webp')`}}>
                      <div className={styles.shadow2}>

                      </div>
                      <div className={styles.content}>
                        <Image src="/unita.png" width={200} height={200} alt={''}></Image>
                      </div>
                    </div>
                  
                  </SwiperSlide>
                  <SwiperSlide key={1} className={styles.Slide}>
                    <div className={styles.MyImage} style={{backgroundImage: `url('/CLUBE.webp')`}}>
                      <div className={styles.shadow}>

                      </div>
                      <div className={styles.content}>
                        <Image src="/reallife.png" width={200} height={200} alt={''}></Image>
                      </div>
                    </div>
                  
                  </SwiperSlide>
                  <SwiperSlide key={2} className={styles.Slide}>
                    <div className={styles.MyImage2} style={{backgroundImage: `url('/CLUBE.webp')`}}>
                      <div className={styles.shadow2}>

                      </div>
                      <div className={styles.content}>
                        <Image src="/granvellas.svg" width={200} height={200} alt={''}></Image>
                      </div>
                    </div>
                  
                  </SwiperSlide>
                  <SwiperSlide key={3} className={styles.Slide}>
                    <div className={styles.MyImage} style={{backgroundImage: `url('/CLUBE.webp')`}}>
                      <div className={styles.shadow}>

                      </div>
                      <div className={styles.content}>
                        <Image src="/fd.png" width={200} height={200} alt={''}></Image>
                      </div>
                    </div>
                  
                  </SwiperSlide>
                  <SwiperSlide key={2} className={styles.Slide}>
                    <div className={styles.MyImage2} style={{backgroundImage: `url('/CLUBE.webp')`}}>
                      <div className={styles.shadow2}>

                      </div>
                      <div className={styles.content}>
                        <Image src="/connect.png" width={200} height={200} alt={''}></Image>
                      </div>
                    </div>
                  
                  </SwiperSlide>
            </Swiper>
          </div>
        </div>
    </>
  )
}
