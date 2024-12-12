// signin 페이지
"use client"

import React from "react"
import { useState, useEffect } from "react"
import styles from "../../../../css/member/signin.module.css"
import "../../../i18n"
import { useTranslation } from "react-i18next"

const Signin = () => {

    const { t } = useTranslation()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.spinner}></div>
                <p>Loading...</p>
            </div>
        )
    }

    const handleSignin = (): void => {

        console.log("=== 로그인 로직 구현 대기 ===")
    }

    const handleForgotPw = (): void => {

        console.log("=== PW 찾기 로직 구현 대기 ===")
    }

    const handleSignup = (): void => {

        console.log("=== 회원가입 로직 구현 대기 ===")
    }
 
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{t('signin')}</h1>
            <form className={styles.form}>
                <div className={styles.inputGroup}>
                    <input 
                        type="text"
                        placeholder={t('id')}
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <input 
                        type="password"
                        placeholder={t('pw')}
                        className={styles.input}
                    />
                </div>
                <button
                    type="button"
                    className={styles.loginButton}
                >{t('signin')}</button>
                <div className={styles.linkGroup}>
                    <button
                        type="button"
                        className={styles.linkButton}
                        onClick={handleForgotPw}
                    >{t('forgotpw')}</button>
                    <button
                        type="button"
                        className={styles.linkButton}
                        onClick={handleSignup}
                    >{t('signup')}</button>
                </div>
            </form>
        </div>
    )
}

export default Signin