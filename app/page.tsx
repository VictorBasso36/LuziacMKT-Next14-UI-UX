"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './common/navbar'
import Divisor from './common/divisor'
import MainBanner from './common/main'
import { ParallaxProvider } from 'react-scroll-parallax'
import Footer from './common/footer'
import Diff from './common/diff'
import Carrousel from './common/carrousel'
import WhatWedo from './common/whatwedo'
import Blog from './common/blog'
import ModalPromotion from './common/modalPromotion'
import ModalLead from './common/modalLead'
import { OpenProvider } from './common/providerModal'

export default function Home() {

  return (
    <>   
      <ParallaxProvider>
      <OpenProvider>
        <Navbar />
        <MainBanner  />
        <Divisor id="DIFERENCIAIS" colorbg="#161616" side={false} colordetail='white' />
        <Diff />
        <Divisor id="CASES" colorbg="white" side={true} colordetail='#fb2576' />
        <Carrousel />
        <Divisor id="SOBRE" colorbg="#fb2576" side={true} colordetail='#161616' />
        <WhatWedo />
        <Divisor id="BLOG" colorbg="#161616" side={true} colordetail='white' />
        <Blog />
        <Footer/>
        <ModalPromotion />
        <ModalLead />
      </OpenProvider>
      </ParallaxProvider>
    </>
  )
}
