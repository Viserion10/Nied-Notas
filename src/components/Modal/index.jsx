import styles from "./styles.module.scss"
import { AiOutlineClose } from 'react-icons/ai';

export function Modal() {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>

                <div className={styles.modalHeader}>
                    <input type="text" placeholder="Título" />
                </div>
                
                <AiOutlineClose className={styles.icon}/>

                <div className={styles.modalContent}>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Suas anotações aqui"></textarea>
                </div>

                <div className={styles.modalFooter}>
                    <div className={styles.containerButtons}>
                    <button className={styles.delete}>Deletar</button>
                    <button className={styles.save}>Salvar</button>
                    </div>
                </div>
            </div>  
        </div>

    );
}   

















