const { convertToJson } = require('./convertToJson')

function buildObjectjson() {
    try {
        const objectJson = convertToJson()
        const dataJson = objectJson['mega_sena_www.asloterias.com.br']
        const data = dataJson.filter(element => typeof (element.A) === 'number')

        const dados = []

        for (d of data) {
            let dadosNovos = {}
            dadosNovos['Concurso'] = d['A']
            dadosNovos['Data'] = d['B']
            dadosNovos['bola_1'] = d['C']
            dadosNovos['bola_2'] = d['D']
            dadosNovos['bola_3'] = d['E']
            dadosNovos['bola_4'] = d['F']
            dadosNovos['bola_5'] = d['G']
            dadosNovos['bola_6'] = d['H']
            dados.push(dadosNovos)
        }

        return dados

    } catch (error) {
        console.error('ERRO', dadosNovos)

        return false
    }
}

module.exports = {
    buildObjectjson
}