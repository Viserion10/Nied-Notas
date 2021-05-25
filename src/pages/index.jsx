import styles from '../styles/home.module.scss'

import { Button } from '../components/Button'
import { Nota } from '../components/Nota'
import { Modal } from '../components/Modal'

export default function Home() {
  return (<>

    <h1 className={styles.tittle}>Notas</h1>


    <div className={styles.containerNotas}>
      <Modal/>
      <Nota />
      <Nota />
      <Nota />
      <Nota />
      <Nota />
      <Nota />
      <Nota />
      <Nota />
      <Nota />
      <Nota />
      <Nota />
      <Nota />
      <Nota />

      <Nota />

      <Button icon="add" bottom="0.625rem"/>
      <Button icon="search" bottom="5rem"/>

      
    </div>
  </>

  )

}
