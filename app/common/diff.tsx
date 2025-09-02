"use client";
import Link from "next/link";
import styles from "./diff.module.css";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { useOpen } from "./providerModal";

export default function Diff() {
  const { setOpen } = useOpen();
  return (
    <>
      <Parallax speed={-10}>
        <Image
          className={styles.itemParallax}
          src={"/parallaxDiff.svg"}
          width={280}
          height={280}
          alt="Imagem clientes satisfeitos - Luziac"
        />
      </Parallax>
      <div className={styles.main}>
        <section className={styles.container}>
          <div className={styles.itemChico}>
            <Image
              src={"/CONTRATO1.png"}
              width={350}
              className={styles.donoImg}
              height={350}
              alt={""}
            ></Image>
            <div className={styles.diagonalDiv}>
              <h2>
                SOLUÇÕES COMUNS QUE <br /> <span>NÃO SÃO</span> ESPECIALIZADAS{" "}
                <br /> NO MERCADO IMOBILIÁRIO:
              </h2>
            </div>
            <ul>
              <li>
                <div className={styles.square}></div>
                <p>
                  Não contemplam as <span>particularidades</span> da venda de
                  imóveis;
                </p>
              </li>

              <li>
                <div className={styles.square}></div>
                <p>
                  Não estão por dentro das <span>movimentações</span> e{" "}
                  <span>tendências</span> do setor;
                </p>
              </li>
              <li>
                <div className={styles.square}></div>
                <p>
                  Usam estratégias genéricas, <span>pouco adaptadas</span> ao
                  mercado imobiliário;
                </p>
              </li>

              <li>
                <div className={styles.square}></div>
                <p>
                  Não entendem a <span>jornada de compra</span> do cliente de
                  imóveis;
                </p>
              </li>

              <li>
                <div className={styles.square}></div>
                <p>
                  Não conseguem <span>gerar demanda</span> qualificada.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.itemChico}>
            <Image
              src={"/CONTRATO.png"}
              width={350}
              className={styles.donoImg}
              height={350}
              alt={""}
            ></Image>
            <div className={styles.diagonalDiv2}>
              <h2>
                <span>LUZIAC</span> - ESPECIALISTA <br />
                EM MKT IMOBILIÁRIO
              </h2>
            </div>
            <p className={styles.diagonalDiv2text}>
              Estratégias exclusivas para o <span>Real State</span>, <br />{" "}
              análises constantes do setor e uma metodologia assertiva para
              maximizar para resultados em vendas.
            </p>

            <button
              onClick={() => setOpen("whatsapp")}
              className={styles.convertButton}
            >
              <p>
                Quero me{" "}
                <span>
                  conectar <br /> com meus clientes!
                </span>
              </p>
            </button>
            <Image
              className={styles.covertArrow}
              src={"/arrowDiff.svg"}
              width={80}
              height={80}
              alt={"Clique para conhecer a LUZIAC - Criando Conexões"}
            ></Image>
          </div>
        </section>
      </div>
    </>
  );
}
