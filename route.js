let data = require('./json/data.json')
const route = require('express').Router()
const  { start } = require('./schedule')

route.get("/resultados", (req, res) => {
    try {
        res.status(200)
        res.send(data)
    } catch (error) {
        res.status(404)
        res.send('Não foi possível recuperar os dados')
    }
})

route.get('/start', (req, res)=>{
    start()
    res.status(200)
    res.send('Schedule inciado')
})

module.exports = {
    route
}