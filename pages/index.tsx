import Head from 'next/head'
import Image from 'next/image'
import { Inter } from "next/font/google"
import Layout from '../components/Layout'
import Navbar from '../components/general/Navbar'
import Download from '../components/home/Downlaod'
import Team from '../components/home/Team'
import Footer from '../components/general/Footer'
import Contact from '../components/home/Contact'
import FAQ from '../components/home/FAQ'
import HowItWorks from '../components/home/HowItWorks'

const inter = Inter({ subsets: ['latin'] })

export default function Landing() {
  return (
    <Layout >
      <Navbar/>
      <Download/>
      <HowItWorks/>
      <FAQ/>
      <Team/>
      <Footer/>
    </Layout>
  )
}
