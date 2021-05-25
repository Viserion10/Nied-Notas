import Link from 'next/link'

import styles from "./styles.module.scss"

import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";


import { useState } from 'react'



export function NavBar() {

    const [responseNav, setResponseNav] = useState(false)

    function toggleResponseNav() {
        setResponseNav(!responseNav)
    }

    return (
        <div className={styles.nav}>

        {/* {responseNav ? (
            <div className={`${styles.containerLinks} ${styles.responsive}`} >
            <Link href="/">
                <a className={styles.active}>Nied Notas</a>

            </Link>
            <Link href="/">
                <a>Home</a>

            </Link>
            <Link href="/about">

                <a>About</a>
            </Link>

            <Link href="/undefinied">
                <a>Undefinied</a>
            </Link>
        </div>
        ): ( */}
            <div className={`${styles.containerLinks}`} >
                <Link href="/">
                    <a className={styles.active}>Nied Notas</a>

                </Link>
                <Link href="/">
                    <a>Home</a>

                </Link>
                <Link href="/about">

                    <a>About</a>
                </Link>

                <Link href="/undefinied">
                    <a>Undefinied</a>
                </Link>
            </div>
        {/* // )} */}
            



            
            <AiOutlineMenu onClick={toggleResponseNav} className={styles.icon} />

        </div>
    )
}

