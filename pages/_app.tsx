import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return(
  <div>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </div>
  )
 
}
