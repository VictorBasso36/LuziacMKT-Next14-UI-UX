"use client";
import Link from "next/link";
import styles from "./whatwedo.module.css";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { useOpen } from "./providerModal";

export default function WhatWedo() {
  const { setOpen } = useOpen();
  return (
    <>
      <div className={styles.main}>
        <section className={styles.container}>
          <h4>
            O QUE FAZEMOS DE{" "}
            <span>
              <Image
                className={styles.blogTitleDetail}
                src="/squashWhite.svg"
                width={400}
                height={20}
                alt="Blog Luziac - Artigos Imobiliarios"
              ></Image>
              MELHOR
            </span>
            ?
          </h4>
          <div className={styles.cardsHere}>
            <div className={styles.MainCardParallax}>
              <div className={styles.MainCard}>
                <Parallax className={styles.ParallaxImage1} speed={3}>
                  <Image
                    src="/1.svg"
                    alt={"Luziac - Marketing Imobiliario CRIAÇÃO DE ID. VISUAL"}
                    width={120}
                    height={120}
                  ></Image>
                </Parallax>
                <h4>
                  INTELIGÊNCIA <br /> <span>COMERCIAL</span>
                </h4>
                <p>
                  <span>Estratégias digitais</span> guiadas por{" "}
                  <span>dados</span> de mercado e (muita) experiência.
                </p>
              </div>
            </div>
            <div className={styles.MainCardParallax}>
              <div className={styles.MainCard}>
                <h4>
                  ENGAJAMENTO <br /> E{" "}
                  <span>
                    RELACIONA-
                    <br />
                    MENTO
                  </span>{" "}
                </h4>
                <p>
                  Produção de conteúdos que <span>aproximam clientes</span> e{" "}
                  <span>aceleram</span> decisões.
                </p>
                {/* <Image className={styles.clickCard} src="/clickBlog.svg" alt={`O que a Luziac faz ? : CRIAÇÃO DE ID.VISUAL`} height={20} width={20}></Image>
                 */}
              </div>
            </div>
            <div className={styles.MainCardParallax}>
              <div className={styles.MainCard}>
                <Parallax className={styles.ParallaxImage2} speed={-3}>
                  <Image
                    src="/2.svg"
                    alt={"Luziac - Marketing Imobiliario CRIAÇÃO DE ID. VISUAL"}
                    width={120}
                    height={120}
                  ></Image>
                </Parallax>
                <h4>
                  EXPERIÊNCIA <br /> <span>IMERSIVA</span>
                </h4>
                <p>
                  Sites, tours 360° e recursos digitais{" "}
                  <span>que convertem</span>
                  <br /> (de verdade!).
                </p>
              </div>
            </div>
            <div className={styles.MainCardParallax}>
              <div className={styles.MainCard}>
                <Parallax className={styles.ParallaxImage3} speed={-3}>
                  <Image
                    src="/3.svg"
                    alt={"Luziac - Marketing Imobiliario CRIAÇÃO DE ID. VISUAL"}
                    width={220}
                    height={220}
                  ></Image>
                </Parallax>
                <h4>
                  <span>BRANDING</span>
                </h4>
                <p>
                  Construímos marcas para sua empresa ou produto que se destacam
                  e <span>geram conexão real com o público.</span>
                </p>
              </div>
            </div>
            <div className={styles.MainCardParallax}>
              <div className={styles.MainCard}>
                <Parallax
                  className={styles.ParallaxImage4}
                  speed={3}
                  startScroll={15}
                >
                  <Image
                    src="/4.svg"
                    alt={"Luziac - Marketing Imobiliario CRIAÇÃO DE ID. VISUAL"}
                    width={180}
                    height={180}
                  ></Image>
                </Parallax>
                <h4>
                  TRÁFEGO <br />
                  <span>ESTRATÉGICO</span>
                </h4>
                <p>
                  Gestão de campanhas digitais com{" "}
                  <span>foco em alta conversão.</span>
                </p>
              </div>
            </div>
            <div className={styles.MainCardParallax}>
              <div className={styles.MainCard}>
                <Parallax
                  className={styles.ParallaxImage5}
                  speed={3}
                  startScroll={15}
                >
                  <Image
                    src="/5.svg"
                    alt={"Luziac - Marketing Imobiliario CRIAÇÃO DE ID. VISUAL"}
                    width={180}
                    height={180}
                  ></Image>
                </Parallax>
                <h4>
                  CONSULTORIA
                  <br />
                  <span>COMERCIAL</span>
                </h4>
                <p>
                  Mapeamento de rotas para transformar leads em{" "}
                  <span>negócios reais.</span>
                </p>
              </div>
            </div>
            <div className={styles.MainCardParallax}>
              <div className={styles.MainCard}>
                <Parallax
                  className={styles.ParallaxImage6}
                  speed={3}
                  startScroll={15}
                >
                  <Image
                    src="/6.svg"
                    alt={"Luziac - Marketing Imobiliario CRIAÇÃO DE ID. VISUAL"}
                    width={180}
                    height={180}
                  ></Image>
                </Parallax>
                <h4>
                  AUTOMAÇÃO, <br />
                  ATENDIMENTO <br />& <span>IA</span>
                </h4>
                <p>
                  Fluxos inteligentes que <span>agilizam respostas</span> e
                  nutrem <span>oportunidades.</span>
                </p>
              </div>
            </div>
            <div className={styles.MainCardParallax}>
              <div className={styles.MainCard}>
                <Parallax
                  className={styles.ParallaxImage7}
                  speed={-3}
                  startScroll={15}
                >
                  <Image
                    src="/7.svg"
                    alt={"Luziac - Marketing Imobiliario CRIAÇÃO DE ID. VISUAL"}
                    width={180}
                    height={180}
                  ></Image>
                </Parallax>
                <h4>
                  DADOS <br />
                  QUE{" "}
                  <span>
                    VIRAM <br /> RESULTADOS
                  </span>
                </h4>
                <p>
                  Relatórios claros para{" "}
                  <span>decisões mais rápidas e seguras.</span>
                </p>
              </div>
            </div>
            <div className={styles.MainCardLast}>
              <h4>
                QUER CONHECER <br /> AS{" "}
                <span>
                  MELHORES <br /> SOLUÇÕES
                </span>{" "}
                PARA <br /> SEU NEGÓCIO ?
              </h4>
              <Image
                className={styles.arrow}
                src="/8.svg"
                width={80}
                height={80}
                alt="Contato"
              ></Image>
              <div
                className={styles.sendButton}
                onClick={() => setOpen("whatsapp")}
              >
                <p>
                  CHEGA <span>MAIS!</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
