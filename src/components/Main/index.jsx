import styles from "./styles.module.scss"

export function Main({children}){
    return(
        <main className={styles.container}>
                {children}
        </main>
    );
}

