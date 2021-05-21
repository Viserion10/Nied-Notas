


import { NavBar } from '../components/Navbar'
import { Footer } from '../components/Footer'



import styles from '../styles/home.module.scss'
import { Nota } from '../components/Nota'

export default function Home() {
  return (<>
        <h1 className={styles.tittle}>HomeNotas</h1>

    <div className={styles.containerNotas}>

    <Nota/>
    
      <Nota/>
     
    
    </div>
    </>

  )

}
