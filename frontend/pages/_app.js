import '../styles/globals.css'
import HeadSection from '../components/HeadSection'
import Footer from '../components/Footer.js'
import { AuthProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
     <AuthProvider>
      <HeadSection />
      <Component {...pageProps} />
      <Footer />
 
    </AuthProvider>
    </>
  )
}

export default MyApp
