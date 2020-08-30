const { getData } = require('./getData')
const { recordFileJson } = require('./recordFileJson')

async function addDataJson() {

    try {
        let data = require('./json/data.json')
        let result = JSON.parse(await getData())
        let json = data.find(element => element.Concurso === result.numero_concurso)

        if (json) {
            console.log('[INFO] Concurso já existe!')
            return true
            
        } else {
            console.log('[INFO] Concurso não existe. Gravando...')
            dados = {}

            dados['Concurso'] = result.numero_concurso
            dados['Data'] = formatDate(result.data_concurso)
            result.dezenas.map((element, index) => {
                dados[`bola_${index + 1}`] = parseInt(element, 10)
            })
            data.unshift(dados)
            let dt = JSON.stringify(data)
            recordFileJson(dt) 
            console.log('[INFO] Gravado!')

            return true
        }

    } catch (error) {
        console.log(error)
        return false
    }

}

function formatDate(date) {
    let data = date.indexOf('T')
    data = date.slice(0, data)
    data = data.split('-').reverse().join('/')

    return data
}

module.exports = {
    addDataJson
}