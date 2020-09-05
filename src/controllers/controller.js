const functions = require('../readFile/functions')
const { buildObjectjson } = require('../readFile/buildObjectJson')

module.exports = {
    result: (request, response) => {
        console.info(`[${functions.date_hour()}]---------- Requisicao Resultados Mega ----------`)
        let data = buildObjectjson()
        console.info(`[${functions.date_hour()}] ---------- JSON gerado com sucesso ------------`)
        console.info(`[${functions.date_hour()}]------------------------------------------------\n`)
        return response.send(data)
    },
    default: (request, response) => {
        let data = { bool: true, message: "Result ok" }
        data = JSON.stringify(data)
        return response.send(data)
    }
}