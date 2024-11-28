import React from "react"
import styles from "../../../css/layout/footer.module.css"

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h3>Runners High</h3>
                    <p>
                        <span>Authorize : kihunism</span><br/>
                        <span>Copyright 2024. kihunism. All Rights Reserved.</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
