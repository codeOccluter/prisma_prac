"use client"

import '../i18n'
import { useTranslation } from "react-i18next"
import styles from "../../css/layout/page.module.css"

export default function Home() {

    const { t } = useTranslation()

  return (
      <div>
            <div className={styles.introduce}>
                <h1>{t('welcome')}</h1>
                <p>{t('description')}</p>
            </div>
      </div>
  )
}