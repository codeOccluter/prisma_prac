"use client"

import React from "react"
import styles from "../../../css/layout/footer.module.css"
import "../../i18n"
import { useTranslation } from "react-i18next"

const Footer = () => {

    const { t } = useTranslation()

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <p>
                        <span>{t('authorize')}</span><br/>
                        <span>{t('copyright')}</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
