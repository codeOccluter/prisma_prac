import React from "react"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import styles from "../../css/layout/layout.module.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={styles.body}>

          <div className={styles.wrapper}>
            <Header />
            <main className={styles.wrapmain}>{children}</main>
          </div>
          <Footer />

      </body>
    </html>
  );
}
