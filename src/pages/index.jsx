import { Footer } from '../components/Footer'
import { NavBar } from '../components/Navbar'

import styles from "./home.module.scss"

export default function Home() {
  return (
    <>
      <NavBar />
      <main className={styles.container}>
        <div className={styles.experimental}>

          <h1>Welcome</h1>
        </div>

      </main>
      <Footer />
    </>
  )

}
