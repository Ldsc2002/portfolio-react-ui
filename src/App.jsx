import React, { useState } from 'react'
import Landing from './components/Landing'
import GitHubButton from './components/GitHubButton'
import es from './data/es.json'
import en from './data/en.json'
import languages from './data/languages.json'
import About from './components/About'
import PopUp from './components/common/PopUp'
import Projects from './components/Projects'

const langOptions = {
    es,
    en,
}

function App() {
    const [lang, setLang] = useState(es)
    const [showPopUp, setShowPopUp] = useState(false)
    const [popUpContent, setPopUpContent] = useState()

    const languageChange = (event) => {
        setLang(langOptions[event.target.value])
    }

    const popUpHandler = (event) => {
        setPopUpContent(event.target.value)
        setShowPopUp(true)
    }

    return (
        <div className="app-container">
            <PopUp trigger={showPopUp} setTrigger={setShowPopUp}>
                {popUpContent}
            </PopUp>

            <GitHubButton data={lang.GitButton} />
            <Landing data={lang.Landing} lang={languages} langChange={languageChange} />
            <About data={lang.About} />
            <Projects />
        </div>
    )
}

export default App
