
"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '../../common/navbar'
import Divisor from '../../common/divisor'
import Footer from '../../common/footer'
import Blog from '../../common/blog'
import ModalLead from '../../common/modalLead'
import MainBanner from '@/app/common/main'
import '../../globals.css'
import FormBlog from './form'
import { Metadata } from 'next'
import { useEffect, useState } from 'react'


interface PropsGet {
  slugId: string,
  id: number,
  slug: string,
  description: string,
  image: string
}

async function getData(): Promise<PropsGet[]> {
  const slugMetadata = await (await fetch('https://www.luziac.com.br/posts.json')).json();
  const data: PropsGet[] = slugMetadata;
  return data;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [finalData, setFinalData] = useState<PropsGet[]>([]);
  const search = decodeURIComponent(params.slug || `&quot;`);

  useEffect(() => {
    getData().then((data) => {
      setFinalData(data);
    });
  }, []);

  const content = finalData.find((objeto: any) => objeto.slug === search.toString());

  return (
    <>   

          <Navbar />
          <MainBanner />
          <Divisor id="DIFERENCIAIS" colorbg="#161616" side={false} colordetail='#fb2576' />
          <div className={styles.containerTitle}>
            <div className={styles.titleHere}>
              <h1>{content?.slug?.split(' ').slice(0, -1).join(' ')} <span>{content?.slug?.split(' ').slice(-1)}</span></h1>
            </div>
          </div>
          <Divisor id="DIFERENCIAIS" colorbg="#fb2576" side={true} colordetail='white' />
          <article className={styles.titleHereMain}>
            <div className={styles.container}>
              
             <pre className={styles.textContent} dangerouslySetInnerHTML={{ __html: content?.description || '' }} >

                  {/* <p>A experiência de comprar um imóvel na planta pode ser desafiadora para os clientes, pois muitas vezes eles precisam visualizar algo que ainda não existe fisicamente. É aqui que a Realidade Virtual (RV) se torna uma ferramenta valiosa. Ao proporcionar uma experiência imersiva, a RV transforma a maneira como os compradores interagem com propriedades que ainda estão em fase de construção, influenciando diretamente no processo de venda. Vamos explorar o porquê:</p>
                  <br />
                  <br />
                  <p>A RV permite que os clientes explorem os imóveis na planta de maneira realista, como se estivessem fisicamente presentes no local. Detalhes arquitetônicos, design de interiores e até mesmo a vizinhança podem ser visualizados em tempo real, proporcionando uma compreensão mais profunda e precisa do que está por vir.</p>
                  <br />
                  <br />
                  <p>Desta forma, os compradores podem ter uma compreensão mais clara do layout e do espaço, reduzindo a incerteza em torno do investimento. A capacidade de explorar cada canto do imóvel virtualmente ajuda a dissipar dúvidas e a construir confiança no processo de compra.</p>
                  <br />
                  <br />
                  <p>"Acompanhar as tendências tecnológicas demonstra um compromisso com a inovação e a busca pela melhor experiência do cliente. Ao integrar a Realidade Virtual na venda de imóveis na planta, você não apenas oferece uma vantagem competitiva, mas também transforma o processo de compra em uma experiência envolvente e acessível. A inovação tecnológica torna-se, assim, uma aliada poderosa na condução de negócios imobiliários bem-sucedidos. Explore as possibilidades da RV e leve sua estratégia de vendas para novos patamares de eficiência e satisfação do cliente, com a Luziac."</p>


                  <p>As fotos do imóvel geralmente representam o primeiro contato do seu cliente com a sua propriedade, e muitas delas acabam sendo compartilhadas em suas redes sociais. No entanto, se não forem bem capturadas, o Facebook e o Instagram podem penalizar você com alcance e engajamento limitados. Sabe por quê? Siga o fio:</p>
                  <br />
                  <br />
                  <p>Fotos de qualidade e bem compostas imediatamente atraem a atenção e criam uma impressão positiva, despertando o interesse do comprador. Se as suas fotos não forem boas, seu possível cliente pode ter a impressão de que o imóvel é pequeno, sujo e até mesmo que sua integridade está em jogo.</p>
                  <br />
                  <br />
                  <p>Fotos profissionais transmitem profissionalismo e credibilidade. Os compradores confiam mais em imóveis que são apresentados de maneira profissional, pois isso demonstra atenção e cuidado com os pequenos detalhes, podendo ser um fator decisivo na hora da venda.</p>
                  <br />
                  <br />
                  <p>Mas e as redes sociais, o que têm a ver com isso? Instagram, Facebook e portais de imóveis valorizam muito a satisfação e o conforto de seus usuários, afinal, eles são os ativos mais preciosos dessas empresas. Os algoritmos dessas plataformas estão se tornando cada vez mais poderosos e conseguem identificar, por meio da leitura de imagens e da análise da interação com o seu conteúdo, se a sua foto é boa ou não. Baixa resolução, desorganização, fotos tortas... O algoritmo identifica tudo isso antes de mostrar suas fotos para os outros.</p>
                  <br />
                  <br />
                  <p>Agora que você já sabe disso, capriche mais nessas fotos, e os resultados aparecerão com o tempo! A Luziac pode te ajudar com isso! Entre em contato hoje mesmo e conte com a melhor agência de marketing imobiliário do Brasil!"</p>
                  <br />
                  <br />




                  <p>A variação da taxa Selic, além de impactar a economia como um todo, exerce um papel significativo no mercado imobiliário. Para imobiliárias e incorporadoras, entender como a queda da taxa Selic influencia as vendas de imóveis é crucial para ajustar estratégias e aproveitar oportunidades. Vamos explorar de que maneira essas mudanças podem afetar o setor:</p>
                  <br />
                  <br />
                  <p>Com a redução da taxa Selic, as condições de financiamento tornam-se mais favoráveis, proporcionando taxas de juros mais baixas. Isso pode estimular a procura por crédito imobiliário, tornando a aquisição de imóveis mais acessível para os compradores e impulsionando as vendas.</p>
                  <br />
                  <br />
                  <p>A queda da taxa de juros pode tornar os investimentos tradicionais menos atrativos, incentivando investidores a direcionar recursos para o mercado imobiliário.
                  O aumento da demanda por propriedades pode beneficiar imobiliárias e incorporadoras, especialmente em regiões com potencial de valorização.</p>
                  <br />
                  <br />
                  <p>Com a busca por alternativas de investimento em um cenário de juros baixos, propriedades imobiliárias podem se valorizar. Imobiliárias que possuem um portfólio diversificado e bem localizado podem se beneficiar da crescente demanda por imóveis como ativos seguros.</p>
                  <br />
                  <br />
                  <p>Imobiliárias e incorporadoras podem ajustar suas estratégias de marketing para destacar os benefícios das condições favoráveis de financiamento. Destacar a relação custo-benefício e a viabilidade de investimentos imobiliários em comparação com outras opções de mercado pode atrair potenciais compradores.</p>
                  <br />
                  <br />
                  <p>Manter-se atualizado sobre as tendências do mercado imobiliário em resposta às mudanças na taxa Selic é essencial. A análise contínua do cenário econômico permite a adaptação ágil às condições do mercado, maximizando as oportunidades de vendas.</p>*/}
              </pre>
              <div className={styles.FormContainer}>
                <FormBlog slug={`${content?.slug} - Artigo Marketing Imobiliário da agência LUZIAC.`}  url={content?.image || '/blogImage.svg'}  />
              </div>
      
     
            </div>
          </article>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <div id="BLOG"></div>
          <Blog />
          <Footer/>
          <ModalLead />

    </>
  )
}
