let data = require('../json/data.json')
const route = require('express').Router()
const { start } = require('./schedule')
const functions = require('./functions')

route.get("/resultados", (require, response) => {
    console.info(`[${functions.date_hour()}]---------- Requisicao Resultados Mega ----------`)
    let dados = { bool: true, message: "Result ok" }
    dados = JSON.stringify(dados)
    console.info(`[${functions.date_hour()}] ${dados}`)
    console.info(`[${functions.date_hour()}]------------------------------------------------\n`)
    return response.send(data)
})

route.get("/start", async (request, response)=>{
    console.info(`[${functions.date_hour()}]---------- Requisicao get dados caixa ----------`)
    await start()
    let dados = { bool: true, message: "Dados Obtidos" }
    dados = JSON.stringify(dados)
    return response.send(dados)
})

route.get('/', (require, response) => {
    let data = { bool: true, message: "Result ok" }
    data = JSON.stringify(data)
    return response.send(data)
})

module.exports = {
    route
}