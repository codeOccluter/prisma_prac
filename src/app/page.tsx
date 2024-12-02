"use client"

import '../i18n'
import { useTranslation } from "react-i18next"

export default function Home() {

    const { t, i18n } = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }

  return (
      <div>
          <h1>{t('welcome')}</h1>
          <p>{t('description')}</p>
      </div>
  )
}