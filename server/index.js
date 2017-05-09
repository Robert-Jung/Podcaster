const express = require('express')
const app = express()
const respondStatic = express.static('./server/public')
const levelup = require('level')
const db = levelup('../mydb')
const podcasts = require('./seed.js')

app.use(respondStatic)

db.put('podcasts', JSON.stringify(podcasts), err => {
  if (err) return console.log('Opps!', err)
})

db.get('podcasts', (err, value) => {
  const podcasts = JSON.parse(value)
  podcasts.map((podcast) => {
    console.log(podcast.title)
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
