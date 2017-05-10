const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const respondStatic = express.static('./server/public')
const podcasts = require('./seed.js')
const levelup = require('level')
const db = levelup('../mydb')

app.use(respondStatic)

db.put('podcasts', JSON.stringify(podcasts), err => {
  if (err) return console.log('Opps!', err)
})

app.get('/podcasts', (req, res) => {
  db.get('podcasts', (err, value) => {
    const podcastList = JSON.parse(value)
    res.json(podcastList)
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
