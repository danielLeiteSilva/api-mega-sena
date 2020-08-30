mili = '2020-08-29T00:00:00-03:00'

function formatDate(date){
    let data = date.indexOf('T')
    data = date.slice(0, data)
    data = data.split('-').reverse().join('/')

    return data
}

console.log(formatDate(mili))
