import { createContext, useEffect, useState } from "react"

import es from '../../data/es.json'
import en from '../../data/en.json'
import common from '../../data/common.json'

const AppContext = createContext()

const langOptions = {
    es,
    en,
}

const AppProvider = ({ children }) => {
    const [lang, setLang] = useState('es')
    const [langData, setLangData] = useState(langOptions[lang])
    const [about, setAbout] = useState(langData.About)

    useEffect(() => {
        if (localStorage.getItem("lang") !== null) {
            setLang(localStorage.getItem("lang"))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("lang", lang)
        setLangData(langOptions[lang])
    }, [lang])

    useEffect(() => {
        setAbout(langData.About)
    }, [langData])

    const setLangHandler = (event) => {
        setLang(event.target.value)
    }

    const state = {
        lang,
        setLangHandler,
        about,
    }

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider }
export default AppContext