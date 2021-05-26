import styles from "./styles.module.scss"
import { AiOutlineClose } from 'react-icons/ai';


export function SearchModal() {
    return (
        <div>
            <div className={styles.modalOverlay}>
                <div className={styles.modal}>
                <input type="text" placeholder="Digite aqui" />
                    <button>Procurar</button>
                    <AiOutlineClose className={styles.icon}/>

                </div>
            </div>
        </div>
    );
}

