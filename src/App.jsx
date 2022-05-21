import React, { useState } from 'react'
import Landing from './components/Landing'
import GitHubButton from './components/common/GitHubButton'
import es from './data/es.json'
import en from './data/en.json'
import languages from './data/languages.json'
import About from './components/About'
import PopUp from './components/common/PopUp'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Skills from './components/Skills'

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

    function popUpHandler(data) {
        const content = (
            <div>{data.title}</div>
        )

        setPopUpContent(content)
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
            <Projects data={lang.Projects} action={popUpHandler} />
            <Skills />
            <Footer data={lang.Footer} />
        </div>
    )
}

export default App
