const divisor = require('../application/divisor')
const prime = require('../application/prime')
const bodyParser = require("body-parser")
const express = require('express');

const app = express()
let div = []
app.use(bodyParser.urlencoded({extended:true}))

app.get('', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
  const num = Number(req.body.num)
  div = divisor(num)
  console.log('div')
  const pri = prime(num)
  res.send(`Os divisores de ${num} são ${div}, e os números primos divisiveis por ele são ${pri}`)
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})


module.exports = app