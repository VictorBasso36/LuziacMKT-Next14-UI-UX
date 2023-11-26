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

export default function Home() {
  return (
    <>   
      <ParallaxProvider>
        <Navbar />
        <MainBanner  />
        <Divisor colorbg="#161616" side={false} colordetail='white' />
        <Diff />
        <Divisor colorbg="white" side={true} colordetail='#fb2576' />
        <Carrousel />
        <Divisor colorbg="#fb2576" side={true} colordetail='#161616' />
        <WhatWedo />
        <Divisor colorbg="#161616" side={true} colordetail='white' />
        <Blog />
        <Footer/>
      </ParallaxProvider>
    </>
  )
}
