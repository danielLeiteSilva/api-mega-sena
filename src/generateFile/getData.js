const request = require('request')
const config = require('./config.json')

const options = {

    form: {
        l: "ms",
        t: "t",
        o: "s",
        f1: "",
        f2: ""
    },
    encoding: 'binary',
    headers: {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
    }

}
// Get binary file.xlsx
function getData() {
    return new Promise((resolve, reject) => {
        request.post(config.url, options, (error, response, data) => {
            if (!error) {
                if (response.statusCode === 200) {
                    return resolve(data)
                } else {
                    console.info('[ERROR]<Error of statusCode>', response.statusCode)
                    return reject(false)
                }
            } else {
                console.info('[ERROR]<Error of error>', error)
                return reject(false)
            }
        })
    })
}

module.exports = {
    getData
}


