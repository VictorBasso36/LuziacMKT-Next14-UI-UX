"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './common/navbar'
import Divisor from './common/divisor'
import MainBanner from './common/main'
import { ParallaxProvider } from 'react-scroll-parallax'
import Footer from './common/footer'
import Diff from './common/diff'

export default function Home() {
  return (
    <>   
      <ParallaxProvider>
        <Navbar />
        <MainBanner  />
        <Divisor colorbg="#161616" side={false} colordetail='white' />
        <Diff />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Divisor colorbg="white" side={true} colordetail='#fb2576' />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer/>
      </ParallaxProvider>
    </>
  )
}
