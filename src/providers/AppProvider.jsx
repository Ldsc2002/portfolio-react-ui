/* eslint-disable react/jsx-no-constructed-context-values */

import React, {
    createContext, useEffect, useState,
} from 'react'
import PropTypes from 'prop-types'

import es from '../data/es.json'
import en from '../data/en.json'
import common from '../data/common.json'

const AppContext = createContext()

const langOptions = {
    es,
    en,
}

function AppProvider({ children }) {
    const [lang, setLang] = useState('es')
    const [langData, setLangData] = useState(langOptions[lang])
    const [
        underConstructionMessage,
        setUnderConstructionMessage] = useState(langData.UnderConstruction)

    const [about, setAbout] = useState(langData.About)
    const [landing, setLanding] = useState(langData.Landing)
    const [projects, setProjects] = useState(langData.Projects)
    const [skills, setSkills] = useState({ title: langData.Skills, content: common.SkillsContent })

    const underConstruction = common.UnderConstruction
    const name = common.Name
    const languageOptions = common.Languages
    const gitLink = common.GitButton
    const footer = common.Footer

    useEffect(() => {
        if (localStorage.getItem('lang') !== null) {
            setLang(localStorage.getItem('lang'))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('lang', lang)
        setLangData(langOptions[lang])
    }, [lang])

    useEffect(() => {
        setUnderConstructionMessage(langData.UnderConstruction)
        setAbout(langData.About)
        setLanding(langData.Landing)
        setProjects(langData.Projects)
        setSkills({ title: langData.Skills, content: common.SkillsContent })
    }, [langData])

    const setLangHandler = (event) => {
        setLang(event.target.value)
    }

    const state = {
        lang,
        setLangHandler,
        underConstruction,
        underConstructionMessage,
        name,
        languageOptions,
        gitLink,
        footer,
        about,
        landing,
        projects,
        skills,
    }

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}

AppProvider.propTypes = {
    children: PropTypes.element,
}

export { AppProvider }
export default AppContext
