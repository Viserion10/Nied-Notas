import styles from "./styles.module.scss"
import { GrAdd } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";




export function Button({icon, bottom}) {
    return (
        <div style={{bottom: `${bottom}`}} className={styles.fab}>

            <button className={styles.main}>
                    {icon === "add" && <GrAdd className={styles.icon}/>}
                    {icon === "search" && <BsSearch className={styles.icon}/>}

            </button>
        </div>
    );
}

