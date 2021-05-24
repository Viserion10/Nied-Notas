import styles from "./styles.module.scss"

export function Nota() {
    return (



        <div className={styles.cascaNota} >
            <h3 className={styles.tittleNota}>Nome nota</h3>
            <div className={styles.contentNota}>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        
            </p>

            </div>
            <div className={styles.rodapeNota}>
            <span>categoria</span><span>14/08/2017</span>
            </div>
        </div>


    )
}