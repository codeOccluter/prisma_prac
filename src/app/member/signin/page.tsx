// signin 페이지
"use client"

import React from "react"
import styles from "../../../../css/member/signin.module.css"
import "../../../i18n"
import { useTranslation } from "react-i18next"

const Signin = () => {

    const { t } = useTranslation()

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{t('signin')}</h1>
            <form className={styles.form}>
                <div className={styles.inputGroup}>
                    <input 
                        type="text"
                        placeholder={t('id')}
                        className={styles.input}
                    />
                    <button
                        type="button"
                        className={styles.loginButton}
                    >{t('signin')}</button>
                </div>
                <div className={styles.inputGroup}>
                    <input 
                        type="password"
                        placeholder={t('pw')}
                        className={styles.input}
                    />
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        type="button"
                        className={styles.button}
                    >{t('forgotpw')}</button>
                    <button
                        type="button"
                        className={styles.button}
                    >{t('signup')}</button>
                </div>
            </form>
        </div>
    )
}

export default Signin