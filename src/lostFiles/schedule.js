const schedule = require('node-schedule')
const functions = require('../readFile/functions')
const { createFile } = require('../generateFile/createFile')
let timeSchedule = 60

function start(){
    console.info(`[${functions.date_hour()}][INFO] Schedule iniciado`)

    let job = schedule.scheduleJob(`*/${timeSchedule} * * * *`, async function(){
        console.info(`[${functions.date_hour()}][START] Get jogo da mega sena`)
        await createFile()
        console.info(`[${functions.date_hour()}][END] Dados Obtidos! Esperando... ${timeSchedule} min`)
    })
}

module.exports = {
    start
}