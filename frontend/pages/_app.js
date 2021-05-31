import '../styles/globals.css'
import HeadSection from '../components/HeadSection'
// import Header from '../components/Header'
import Footer from '../components/Footer.js'
// import { AuthProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadSection />
      <Component {...pageProps} />
      <Footer/>
    </>

  )
}

export default MyApp
