import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import HttpBackend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "ko",
        debug: true,
        interpolation: {
            escapeValue: false, // React에서 escape 불필요
        },
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json"
        },
        detection: {
            order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
            caches: ["cookie"],
        },
        react: {
            useSuspense: false // Suspense 활성화
        }
    })

export default i18n