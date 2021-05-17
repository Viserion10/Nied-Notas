
import { NavBar } from '../components/Navbar'
import { Footer } from '../components/Footer'

import '../styles/globals.scss'
import { Main } from '../components/Main'

function MyApp({ Component, pageProps }) {
  return (

    <>
      <NavBar />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>


  )
}

export default MyApp
