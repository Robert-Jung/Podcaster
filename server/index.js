const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const respondStatic = express.static('./server/public')
const levelup = require('level')
const db = levelup('../mydb')
const searchPodcast = require('./searchPodcasts')
const returnEpisodeXML = require('./episodeList')

app.use(respondStatic)
app.use(bodyParser.json())

app.get('/podcasts', (req, res) => {
  db.get('podcasts', (err, value) => {
    const podcastList = JSON.parse(value)
    res.json(podcastList)
  })
})

app.post('/search', (req, res) => {
  const searchTerm = req.body
  searchPodcast(searchTerm)
    .then(data => {
      res.status(200).json(data)
    }).catch(error => {
      res.sendStatus(500).json({ error: 'Podcast search error'})
    })
})

app.post('/detailpage', (req, res) => {
  const xmlFile = req.body.url
  returnEpisodeXML(xmlFile)
    .then(channelDetail => {
      res.status(200).json(channelDetail)
    }).catch(error => {
      res.sendStatus(500).json({error: 'Return Episode List error'})
    })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
