import '../styles/index.scss'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import '../styles/custom.scss'
import Providers from '../components/Providers'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Providers>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </Providers>
      {/* Header */}
    </>
  )
}

export default MyApp
