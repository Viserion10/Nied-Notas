
import styles from "./styles.module.scss"

import { CgProfile } from "react-icons/cg";



export function NavBar() {

    return (
        <div className={styles.nav}>

            <div>
                <a className={styles.active} href="#home">Nied Notas</a>
                <a href="#news">Home</a>
                <a href="#notas">Notas</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>

            </div>
            <div  className={styles.secondContainer}>
                <div>
                        <input className={styles.searchInput} placeholder="Search" />
                        <button className={styles.buttonSearch}>Search</button>
                </div>

                <div className={styles.profile}>
                    <CgProfile className={styles.iconProfile} />

                </div>
            </div>


        </div>
    )
}