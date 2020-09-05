const express = require('express')
const { route } = require('./src/routes/route.js')
const wokeDyno = require("woke-dyno")
const schedule = require('./src/lostFiles/schedule')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8080
const uri = 'https://api-mega-sena.herokuapp.com/'
app.use(cors())
app.use(route)
app.listen(port, () => {
    schedule.start()
    wokeDyno({
        url: uri,
        interval: 60000
    }).start()
    console.log('Connect in server', port)
})