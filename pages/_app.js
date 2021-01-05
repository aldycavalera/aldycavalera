import '../styles/index.scss'
import Navbar from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Header */}
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
