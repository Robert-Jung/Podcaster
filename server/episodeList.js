var Feed = require('rss-to-json')

function returnEpisodeXML(xmlLink) {

  return new Promise((resolve, reject) => {
    Feed.load(xmlLink, function(err, rss) {
      if (err) {
        reject(console.error(err))
      }
      else {
        const rssFeedList = rss.items
        const episodeList = []

          rssFeedList.map((episodes) => {
          const episode = {
            title: episodes.title,
            description: episodes.description,
            episodeURL: episodes.enclosures[0].url
          }
          episodeList.push(episode)
          resolve(episodeList)
        })
      }
    })
  })
}

module.exports = returnEpisodeXML
