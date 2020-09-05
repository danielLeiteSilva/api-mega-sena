const route = require('express').Router()
const controller = require('../controllers/controller')
route.get('/', controller.default)
route.get("/resultados", controller.result)
module.exports = {
    route
}