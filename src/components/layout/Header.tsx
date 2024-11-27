import React from "react"
import Link from "next/link"
import styles from "../../../css/layout/header.module.css"

const Header = () => {

    return (
        <header className={styles.header}>
            <h1>Runners High</h1>
            <nav>
                <ul className={styles.nav}>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/member/signin"}>Sign in</Link></li>
                    <li><Link href={"/dashboard"}>Board</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
