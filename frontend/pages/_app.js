import '../styles/globals.css'
import HeadSection from '../components/HeadSection'
import Footer from '../components/Footer.js'
import { AuthProvider } from '../context/AuthContext'
import {FormProvider } from '../context/AuthForm'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <FormProvider>
          <HeadSection />
          <Component {...pageProps} />
        </FormProvider>
        <Footer />

      </AuthProvider>
    </>
  )
}

export default MyApp
