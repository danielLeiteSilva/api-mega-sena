const request = require('request')
const config = require('./config.json')

function getData() {
    const url = `${config.url}${config.endpoint}loteria=${config.loteria}&token=${config.token}`
    try {
        return new Promise(function (resolve, reject) {
            request.get(url, function (error, response, data) {
                if (error) {
                    if (response.statusCode !== 200) {
                        return reject(false)
                    }
                }
                return resolve(data)
            })
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getData
}