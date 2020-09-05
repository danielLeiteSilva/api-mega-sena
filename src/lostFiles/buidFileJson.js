const fs = require('fs')

const { buildObjectjson } = require('./buildObjectJson')

function buildFileJson() {
    try {
        const data = buildObjectjson()
        const file = JSON.stringify(data)
        const path = "./json/data.json"
        const buildFile = fs.writeFileSync(path, file)
        return true

    } catch (error) {
        console.error('Erro', error)
        return false
    }
}

module.exports = {
    buildFileJson
}