const { getData } = require('./getData')
const fs = require('fs')

async function createFile(){
    try {
        let binary = await getData() 
        fs.writeFileSync('./file/arquivo.xlsx', binary, 'binary')
        return true
    } catch (error) {
        console.info(`[ERROR] <Error create to file>`, error)
        return false
    }
}

module.exports = {
    createFile
}