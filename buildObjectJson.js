const { convertToJson } = require('./convertToJson')

function buildObjectjson() {
    try {
        const objectJson = convertToJson()
        const dataJson = objectJson['mega_sena_www.asloterias.com.br']
        const data = dataJson.filter(element => typeof (element.A) === 'number')

        const dados = []
        
        for (d of data) {
            let dadosNovos = {}
            let numeros = []
            numeros = [
                d['C'],
                d['D'],
                d['E'],
                d['F'],
                d['G'],
                d['H']
            ]

            numeros = numeros.sort(function(a, b){return a-b})

            dadosNovos['Concurso'] = d['A']
            dadosNovos['Data'] = d['B']
            dadosNovos['bola_1'] = numeros[0]
            dadosNovos['bola_2'] = numeros[1]
            dadosNovos['bola_3'] = numeros[2]
            dadosNovos['bola_4'] = numeros[3]
            dadosNovos['bola_5'] = numeros[4]
            dadosNovos['bola_6'] = numeros[5]
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