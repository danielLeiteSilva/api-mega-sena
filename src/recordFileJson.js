const fs = require('fs')
const path = "../json/data.json"

function recordFileJson(dados){
    try {
        let result = fs.writeFileSync(path, dados)
        return true 
    } catch (error) {
        return false
    }
}

module.exports = {
    recordFileJson
}