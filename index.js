const express = require('express')
const { route } = require('./route.js')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8080  
app.use(cors())
app.use(route)
app.listen(port, () => console.log('Connect in server', port))