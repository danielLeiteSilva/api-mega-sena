function date_hour(){
    let date = new Date()
    let day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay() 
    let month = (date.getMonth() + 1) < 10 ? `0${(date.getMonth() + 1)}`: (date.getMonth() + 1) 
    let year =  date.getFullYear() 
    return `${day}-${month}-${year}:${get_hour()}`
}

function get_hour(){
    let date = new Date()
    let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours() 
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes() 
    let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()  
    return `${hour}:${minutes}:${seconds}`
}

module.exports = {
    date_hour
}