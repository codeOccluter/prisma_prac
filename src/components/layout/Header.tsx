"use client"

import React, { useState } from "react"
import Link from "next/link"
import styles from "../../../css/layout/header.module.css"
import "../../i18n"
import { useTranslation } from "react-i18next"

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { t, i18n } = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <header className={styles.header}>
            <div className={styles.logo}>{t('logo')}</div>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
                <div className={styles.languageSelector}>
                    <select
                        id="language"
                        onChange={(e) => changeLanguage(e.target.value)}
                        defaultValue={i18n.language}
                    >
                        <option value={"ko"}>Korean</option>
                        <option value={"en"}>English</option>
                    </select>
                </div>
                <ul className={styles.menu}>
                    <li><Link href={"/"} className={styles.menuLink}>{t('home')}</Link></li>
                    <li><Link href={"/member/signin"} className={styles.menuLink}>{t('signin')}</Link></li>
                    <li><Link href={"/dashboard"} className={styles.menuLink}>{t('board')}</Link></li>
                </ul>
            </nav>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Header