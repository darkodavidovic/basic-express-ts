export function datetime() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let datetime = `${day}/${month}/${year}-${hour}:${minute}`
    return datetime
}