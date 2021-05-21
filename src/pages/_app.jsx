
import { NavBar } from '../components/Navbar'
import { Footer } from '../components/Footer'

import '../styles/globals.scss'
import { Main } from '../components/Main'

function MyApp({ Component, pageProps }) {
  return (

    <div>
      <NavBar />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </div>


  )
}

export default MyApp
