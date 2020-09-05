const express = require('express')
const { route } = require('./src/route.js')
const wokeDyno = require("woke-dyno")
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8080
const uri = 'https://api-mega-sena.herokuapp.com/'
app.use(cors())
app.use(route)
app.listen(port, () => {
    wokeDyno(uri).start()
    console.log('Connect in server', port)
})