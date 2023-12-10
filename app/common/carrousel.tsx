"use client"
import Link from 'next/link'
import styles from './carrousel.module.css'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, Virtual } from 'swiper/modules';
import { useEffect, useState } from 'react'
import { useOpen } from './providerModal'





export default function Carrousel()   {
  const projetosImobiliarios = [
    {
      titulo: 'Gran Vellas',
      descricao: 'Para este lançamento de lotes nós cuidamos de tudo: Site, redes sociais, criamos um tour de realidade virtual e gerenciamos as campanhas de tráfego.',
      fotos: ['/granvellas1.png']
    },
    {
      titulo: 'Connect Penha',
      descricao: 'Desde logo até a entrega dos Leads fresquinhos. Para este projeto, pensamos em uma tipologia e identidade visual que enfatize sua proximidade ao metrô penha: Conectar você, ao melhor de São Paulo.',
      fotos: ['/connect1.png']
    },
    {
      titulo: 'Unità Penha',
      descricao: 'Aqui cada detalhe foi pensado cuidadosamente para atrair e conectar os clientes deste lançamento: Desde logotipo, site e redes sociais até campanhas de tráfego pago para Google e Meta Ads.',
      fotos: ['/unita1.jpg','/unita2.png']
    },
    {
      titulo: 'Laços Vila Guilhermina',
      descricao: 'Laços é um projeto que encanta pela conexão e empatia. Com uma tipografia aconchegante e despojada, a ideia foi aproximar famílias em ascensão para o coração da Zona Leste.',
      fotos: ['/lacos1.png','/lacos2.png']
    },
    {
      titulo: 'Real Life',
      descricao: 'A imobiliária Real Life tinha dificuldade em ser vista e conhecida pelos seus clientes. Hoje, através de nossas estratégias, apostamos numa identidade visual bem estabelecida, reels humanizados e campanhas de reconhecimento.',
      fotos: ['/reallife1.png','/reallife2.png','/reallife3.png']
    },
    {
      titulo: 'CASAVE',
      descricao: 'Uma imobiliária consolidada, mas que possuía pouca visibilidade nos canais digitais. Hoje, investe em tráfego pago de forma inteligente e cria conteúdos com objetivo de engajar e expandir o conhecimento da imobiliária de forma orgânica.',
      fotos: ['/casave1.png','/casave2.png','/casave3.png']
    },
    {
      titulo: 'F&D',
      descricao: 'Hoje grande parte dos Leads da imobiliária F&D vem das estratégias de marketing digital da Luziac, desde campanhas pagas até conteúdos que engajam e alcançam potenciais clientes de forma orgânica.',
      fotos: ['/fd1.png','/fd2.png','/fd3.png']
    }
  ];
  const [mainMenuPortfolio, setMenuPortfolio] = useState(false)
  useEffect(() => {
    if (mainMenuPortfolio) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [mainMenuPortfolio]);

  const [goIndex, setGoIndex] = useState(0);
  const [photosModal, setPhotosModal] = useState([''])
  console.log(goIndex)
  useEffect(() => {
    if (goIndex >= 0 && goIndex < projetosImobiliarios.length) {
      const fotosDoProjeto = projetosImobiliarios[goIndex].fotos;
      setPhotosModal(fotosDoProjeto);
    } 
  }, [goIndex])

  const fotosSwiperSlides = photosModal.map((foto, index) => (
    <SwiperSlide key={index} className={styles.SlideMain}>
      <Image src={`${foto}`} width={420} height={420} alt='Foto do portfolio da Luziac Marketing Imobiliário'>

      </Image>
    </SwiperSlide>
  ));

  const { open, setOpen } = useOpen()

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className:string) {
      return '<span class="' + className + '">' + '</span>';
    },
  };

  return (
    <>
        <div className={styles.main}>
            {mainMenuPortfolio &&
              <div className={styles.containerModal}>
                <div className={styles.Modal}>
                    <p className={styles.Close} onClick={() => setMenuPortfolio(false)}>X</p>
                    <div className={styles.ContentClient}>
                      <h1><span>{projetosImobiliarios[goIndex]?.titulo.split(' ').slice(0, -1).join(' ')}</span> {projetosImobiliarios[goIndex]?.titulo.split(' ').slice(-1)}</h1>
                    
                      
                      <pre>
                        <p> 
                        {projetosImobiliarios[goIndex]?.descricao}
                        </p>
                      </pre>
                      <button className={styles.mainButton} onClick={() => setOpen('whatsapp')}>
                        <p>CURTIU? <span>SE CONECTE TAMBÉM!</span></p>
                      </button>
                    </div>
                    <div className={styles.swiperModal}>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={false}
                        grabCursor={true}
                        modules={[Autoplay, Virtual, Pagination]}
                        pagination={pagination}
                        autoplay={false}
                        className={styles.swiperModal}
                      >
                       {fotosSwiperSlides}
                      </Swiper>
                    </div>    
                    <button className={styles.mainButton2} onClick={() => setOpen('whatsapp')}>
                        <p>CURTIU? <span>SE CONECTE TAMBÉM!</span></p>
                    </button>                
                </div>
              </div>
            }
            <Parallax className={styles.itemParallaxWhite} speed={-5} startScroll={15} >
              <Image  src={"/whiteParrallax.svg"} width={85} height={85} alt="Imagem clientes satisfeitos - Luziac" />     
            </Parallax>
            <Parallax speed={15} className={styles.itemParallaxBlack}>
              <Image  src={"/blackParallax.svg"} width={85} height={85} alt="Imagem clientes satisfeitos - Luziac" />
            </Parallax>
            <section className={styles.container}>
                <h3>EMPRESAS QUE SE <br />
                <span>CONECTAM<Image className={styles.blogTitleDetail} src="/squashWhite.svg" width={400} height={20} alt="Blog Luziac - Artigos Imobiliarios"></Image></span> COM OS CLIENTES:</h3>
                <p>*<span>Clique</span>* e acesse o case completo !</p>
            </section>
            <div className={styles.swiperHere}>
            <Swiper
                spaceBetween={30}
                slidesPerView='auto'
                centeredSlides={true}
                loop={false}
                grabCursor={true}
                modules={[Autoplay, Virtual, Pagination]}
                pagination={pagination}
                onSlideChange={(swiper) => setGoIndex(swiper.activeIndex)}
                slideToClickedSlide={true}
                autoplay={false}
                className={styles.swiperMain}
              >
                    <SwiperSlide key={0} className={styles.Slide} onClick={() => setMenuPortfolio(!mainMenuPortfolio)}>
                      <div className={styles.MyImage}>
                        <div className={styles.shadow}>

                        </div>
                        <div className={styles.content}>
                          <Image src="/granvellas.svg" width={200} height={200} alt={'Cliente da Luziac Marketing : Gran Vellas'}></Image>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide key={1} className={styles.Slide} onClick={() => setMenuPortfolio(!mainMenuPortfolio)}>
                      <div className={styles.MyImage2}>
                        <div className={styles.shadow2}>

                        </div>
                        <div className={styles.content}>
                          <Image src="/connect.png" width={200} height={200} alt={'Cliente da Luziac Marketing : Connect Penha'}></Image>
                        </div>
                      </div>                 
                    </SwiperSlide>
                  
            
                  <SwiperSlide key={2} className={styles.Slide} onClick={() => setMenuPortfolio(!mainMenuPortfolio)}>
                    <div className={styles.MyImage}>
                      <div className={styles.shadow}>

                      </div>
                      <div className={styles.content}>
                        <Image src="/unita.png" width={200} height={200} alt={'Cliente da Luziac Marketing : Unitá'}></Image>
                      </div>
                    </div>
                  
                  </SwiperSlide>
                  <SwiperSlide key={3} className={styles.Slide} onClick={() => setMenuPortfolio(!mainMenuPortfolio)}>
                    <div className={styles.MyImage2}>
                      <div className={styles.shadow2}>

                      </div>
                      <div className={styles.content}>
                        <Image src="/lacoslogo.png" width={200} height={200} alt={'Cliente da Luziac Marketing : Laços Vila Guilhermina'}></Image>
                      </div>
                    </div>
                  
                  </SwiperSlide>
                  <SwiperSlide key={4} className={styles.Slide} onClick={() => setMenuPortfolio(!mainMenuPortfolio)}>
                    <div className={styles.MyImage}>
                      <div className={styles.shadow}>

                      </div>
                      <div className={styles.content}>
                        <Image src="/reallife.png" width={200} height={200} alt={'Cliente da Luziac Marketing : Real Life Imobiliária'}></Image>
                      </div>
                    </div>
                  
                  </SwiperSlide>
                  <SwiperSlide key={5} className={styles.Slide} onClick={() => setMenuPortfolio(!mainMenuPortfolio)}>
                    <div className={styles.MyImage2}>
                      <div className={styles.shadow2}>

                      </div>
                      <div className={styles.content}>
                        <Image src="/casavelogo.svg" width={200} height={200} alt={'Cliente da Luziac Marketing : Casave'}></Image>
                      </div>
                    </div>
                  
                  </SwiperSlide>
                  <SwiperSlide key={6} className={styles.Slide} onClick={() => setMenuPortfolio(!mainMenuPortfolio)}>
                    <div className={styles.MyImage}>
                      <div className={styles.shadow}>

                      </div>
                      <div className={styles.content}>
                        <Image src="/fd.png" width={200} height={200} alt={'Cliente da Luziac Marketing : F&d'}></Image>
                      </div>
                    </div>
                  
                  </SwiperSlide>
                
            </Swiper>
          </div>
        </div>
    </>
  )
}