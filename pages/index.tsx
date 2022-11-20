import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Buying_Industry from '../components/Buying_Industry'
import Industry_purpose from '../components/Industry_purpose'
import Selling_HypeIndustry from '../components/Selling_HypeIndustry'
import Shipping from '../components/Shipping'

export default function Home() {
  return (
    <>
         <Banner />
         <Industry_purpose />
         <Selling_HypeIndustry />
         <Buying_Industry />
         <Shipping />
    </>
  )
}
