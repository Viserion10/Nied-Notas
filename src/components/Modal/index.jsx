import styles from "./styles.module.scss"

export function Modal() {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>

                <div className={styles.modalHeader}>

                </div>

                <div className={styles.modalContent}>

                </div>

                <div className={styles.modalFooter}>
                    <div className={styles.boxCategoria}>

                    </div>
                    <div className={styles.containerButtons}>
                        <button>Deletar</button>
                        <button>Salvar</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

















