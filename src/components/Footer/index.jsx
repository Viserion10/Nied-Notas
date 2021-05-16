import styles from "./styles.module.scss"

export function Footer(){
    return(
        <footer className={styles.footerStyle}>
            <p className={styles.description}>
            ©  2021, Nied
            </p>
        </footer>
    );
}

