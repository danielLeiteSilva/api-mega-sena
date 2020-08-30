const convert = require('convert-excel-to-json')

function convertToJson() {

    try {
        const result = convert({
            sourceFile: './file/arquivo.xlsx'
        })
        return result
    } catch (error) {
        console.error('Error', error)
        return false
    }

}


module.exports = {
    convertToJson
}