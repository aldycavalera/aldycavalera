import '../styles/index.scss'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import '../styles/custom.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Header */}
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}

export default MyApp
