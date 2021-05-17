import Link from 'next/link'

import styles from "./styles.module.scss"

import { CgProfile } from "react-icons/cg";



export function NavBar() {

    return (
        <div className={styles.nav}>

            <div>
                <Link href="/">
                    <a className={styles.active}>Nied Notas</a>

                </Link>
                <Link href="/">
                    <a>Home</a>

                </Link>
                <Link href="/about">

                    <a>About</a>
                </Link>
                <Link href="/contact">

                    <a>Contact</a>
                </Link>
                <Link href="/undefinied">
                    <a>Undefinied</a>

                </Link>

            </div>
            <div className={styles.secondContainer}>
                <div className={styles.containerSearch}>
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

