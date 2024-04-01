import i18n from "i18next"
import detector from "i18next-browser-languagedetector"
import {initReactI18next} from "react-i18next"

import translationENG from "./locales/en/translation.json"
import translationTR from "./locales/tr/translation.json"
import translationAz from "./locales/az/translation.json"
import {getCookie, setCookie} from "helpers/cookie_helper"

// the translations
const resources = {
    en: {
        translation: translationENG,
    },
    tr: {
        translation: translationTR,
    },
    az:{
        translation: translationAz,
    }
}

const language = getCookie("I18N_LANGUAGE")
if (!language) {
    setCookie("I18N_LANGUAGE", "en")
}

i18n
    .use(detector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: getCookie("I18N_LANGUAGE") || "en",
        fallbackLng: "en", // use en if detected lng is not available

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    })

export default i18n
