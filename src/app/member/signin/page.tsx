// signin 페이지

import React from "react"
import styles from "../../../../css/member/signin.module.css"

const Signin = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Sign in</h1>
            <form className={styles.form}>
                <input 
                    type="text"
                    placeholder="ID"
                    className={styles.input}
                />
                <input 
                    type="password"
                    placeholder="Password"
                    className={styles.input}
                />
                <div className={styles.buttonContainer}>
                    <button
                        type="button"
                        className={styles.button}
                    >Forgot PW</button>
                    <button
                        type="button"
                        className={styles.button}
                    >Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Signin