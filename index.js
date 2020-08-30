const express = require('express')
const { route } = require('./route.js')
const app = express()
const port = process.env.PORT || 8080  
app.use(route)
app.listen(port, () => console.log('Connect in server', port))