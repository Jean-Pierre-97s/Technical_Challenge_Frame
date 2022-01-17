const bodyParser = require("body-parser")
const express = require('express')

const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.get('', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
  const num = req.body.num
  console.log(num)
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})

module.exports = app