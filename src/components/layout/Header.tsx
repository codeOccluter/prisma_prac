"use client"

import React, { useState } from "react"
import Link from "next/link"
import styles from "../../../css/layout/header.module.css"

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Runners High</div>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
                <ul className={styles.menu}>
                    <li><Link href={"/"} className={styles.menuLink}>Home</Link></li>
                    <li><Link href={"/member/signin"} className={styles.menuLink}>Sign in</Link></li>
                    <li><Link href={"/dashboard"} className={styles.menuLink}>Board</Link></li>
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
