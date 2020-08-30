const schedule = require('node-schedule')
const { addDataJson } = require('./addDataJson')

let timeSchedule = 60

function start(){
    console.info('[INFO] Schedule iniciado')
    let job = schedule.scheduleJob(`*/${timeSchedule} * * * *`, async function(){
        console.info('[START] Schedule iniciou')
        await addDataJson()
        console.info('[END] Schedule finalizado esperando...', timeSchedule, ' min')
    })
}

module.exports = {
    start
}