const schedule = require('node-schedule')
const request = require('request')

let time = 10

let url = 'https://api-mega-sena.herokuapp.com/'

async function start() {
    console.log('Schedule url iniciado')
    let job = schedule.scheduleJob(`*/${time} * * * * *`, async function () {
        await getUrl()
    })
}

function getUrl() {
    return new Promise((resolve, reject) => {
        request.get(url, function (error, response, data) {
            if (error) {
                console.log('Error', error)
                return reject(false)

            }
            console.log('URL ok')
            return resolve(true)
        })
    })
}

module.exports = {
    start
}