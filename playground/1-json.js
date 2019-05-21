const fs = require('fs')

//const book={
  //  title:'Ego is the enemy',
  //  author:'Ryan Holiday'
//}
//const bookJson = JSON.stringify(book)
//console.log(bookJson)
//const parseData = JSON.parse(bookJson)
//console.log(parseData.author)
//fs.writeFileSync('1-json.json',bookJson)
const dataBuffer = fs.readFileSync('1-json.json')
//console.log(dataBuffer.toString())
const dataJson = dataBuffer.toString()
const user = JSON.parse(dataJson)
user.name = 'Gunther'
user.age = 54
const userJson = JSON.stringify(user)
fs.writeFileSync('1-json.json',userJson)
