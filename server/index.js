const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const respondStatic = express.static('./server/public')
const levelup = require('level')
const db = levelup('../mydb')

app.use(respondStatic)
app.use(bodyParser.json())

app.get('/podcasts', (req, res) => {
  db.get('podcasts', (err, value) => {
    const podcastList = JSON.parse(value)
    res.json(podcastList)
  })
})

app.post('/search', (req, res) =>{
  const data = req.body
  console.log(data)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
