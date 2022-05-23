import common from '../../data/common.json'

function getLanguages() {
    return common.Languages
}

function isUnderConstruction() {
    return common.UnderConstruction
}

function getValue(key) {
    return common[key]
}

const AppData = {
    getLanguages,
    isUnderConstruction,
    getValue,
}

export default AppData
