const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/post-test', (req, res) => {
  console.log(req.body);
  res.send('Hello World!');
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})