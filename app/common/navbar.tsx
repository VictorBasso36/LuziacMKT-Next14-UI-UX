"use client"
import Image from 'next/image'
import styles from './navbar.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function Navbar() {
    
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (menu) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [menu]);


  const [larguraDaJanela, setLarguraDaJanela] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setLarguraDaJanela(window.innerWidth);
    };

    // Captura a largura da janela quando o componente é montado
    handleResize();

    // Adiciona um ouvinte de redimensionamento para atualizar a largura da janela quando ela muda
    window.addEventListener('resize', handleResize);

    // Remove o ouvinte de redimensionamento quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
    { menu && 
        <div onClick={() => setMenu(!menu)}>
            Menu
        </div>
    }
    <nav className={styles.main}>
        <div className={styles.container}>
            {larguraDaJanela > 550
            ?
            <Link href="/">
                <Image src="/mainLogo.svg" alt='Luziac - Criando Conexões - Logo' width={280} height={60}>

                </Image>
            </Link>
            :
            <Link href="/">
            <Image src="/faviicon.svg" alt='Luziac - Criando Conexões - Logo' width={60} height={60}>

            </Image>
        </Link>
            }
            <ul>
                <li>
                    <Link href="#DIFERENCIAIS">
                       <p>DIFERENCIAIS</p> 
                    </Link>
                </li>
                <li>
                    <Link href="#CASES">
                        <p>CASES</p>
                    </Link>
                </li>
                <li>
                    <Link href="#SOBRE">
                        <p>O QUE FAZEMOS?</p>
                    </Link>
                </li>
                <li>
                    <Link href="#BLOG">
                        <p>BLOG</p>
                    </Link>
                </li>
                <li>
                    <Link href="CONTATO">
                        <p>CONTATO</p>    
                    </Link>
                </li>
            </ul>
            <div className={`${styles.hambmenu}`}>
                <div 
                className={`${styles.hambmenuContainer} ${menu ? styles.menuExistis : ''}`} 
                onClick={() => setMenu(!menu)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}
