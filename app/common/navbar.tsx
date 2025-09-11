"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (menu) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [menu]);

  const [larguraDaJanela, setLarguraDaJanela] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setLarguraDaJanela(window.innerWidth);
    };

    // Captura a largura da janela quando o componente é montado
    handleResize();

    // Adiciona um ouvinte de redimensionamento para atualizar a largura da janela quando ela muda
    window.addEventListener("resize", handleResize);

    // Remove o ouvinte de redimensionamento quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isDesktop = larguraDaJanela > 1280;
  const isMobile = larguraDaJanela <= 1280;

  // Show list menu only when: scroll < 10 AND desktop
  const shouldShowListMenu = scrollY < 15 && isDesktop;

  // Show hamburger menu when: (scroll < 10 AND mobile) OR (scroll > 10 AND any size)
  const shouldShowHamburger = (scrollY < 15 && isMobile) || scrollY >= 15;

  return (
    <>
      {menu && (
        <div className={styles.mainMenuHere} onClick={() => setMenu(!menu)}>
          <div className={styles.ModalHere}>
            <ul className={styles.mainListNavBar}>
              <li className={styles.mainImageCommon}>
                <Link href="/#DIFERENCIAIS">
                  <p>DIFERENCIAIS</p>
                </Link>
              </li>
              <li className={styles.mainImageCommon}>
                <Link href="/#CASES">
                  <p>CASES</p>
                </Link>
              </li>
              {pathname === "/" ? (
                <li className={styles.mainImageCommon}>
                  <Link href={"/#SOBRE"}>
                    <p>O QUE FAZEMOS?</p>
                  </Link>
                </li>
              ) : (
                <></>
              )}
              <li className={styles.mainImageCommon}>
                <Link href="/#BLOG">
                  <p>BLOG</p>
                </Link>
              </li>
              <li className={styles.mainImageCommon}>
                <Link href="/#CONTATO">
                  <p>CONTATO</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <nav className={styles.main} style={{ height: scrollY > 15 ? 60 : 120 }}>
        <div className={styles.container}>
          {larguraDaJanela > 550 ? (
            <Link href="/" className={styles.logomainlink}>
              <Image
                src="/mainLogo.png"
                className={styles.imglogomain}
                alt="Luziac - Criando Conexões - Logo"
                width={160}
                height={30}
              ></Image>
            </Link>
          ) : (
            <Link href="/">
              <Image
                src="/faviicon.svg"
                alt="Luziac - Criando Conexões - Logo"
                width={50}
                height={50}
              ></Image>
            </Link>
          )}
          {shouldShowListMenu && (
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
              {pathname === "/" ? (
                <li>
                  <Link href="#SOBRE">
                    <p>O QUE FAZEMOS?</p>
                  </Link>
                </li>
              ) : (
                <></>
              )}
              <li>
                <Link href="#BLOG">
                  <p>BLOG</p>
                </Link>
              </li>
              <li>
                <Link href="#CONTATO">
                  <p>CONTATO</p>
                </Link>
              </li>
            </ul>
          )}
          {shouldShowHamburger && (
            <div className={`${styles.hambmenu}`}>
              <div
                className={`${styles.hambmenuContainer} ${
                  menu ? styles.menuExistis : ""
                }`}
                onClick={() => setMenu(!menu)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
