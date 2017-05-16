const request = require('request')

function returnEpisodeXML(xmlLink) {
  const pathName =  ('https://api.rss2json.com/v1/api.json?rss_url=' + xmlLink)

  return new Promise((resolve, reject) => {
    request(pathName, (error, res, body) => {
      const convertFeed = JSON.parse(body)
      const podcastDetail = convertFeed.feed
      const itemList = convertFeed.items
      const episodeList = []

      if (error) {
        reject(error)
      }
      else {
        itemList.map((episodes) => {
          const episode = {
            detail: {
              url: podcastDetail.link,
              title: podcastDetail.title,
              description: podcastDetail.description,
              image: podcastDetail.image
            },
            episode: {
              title: episodes.title,
              description: episodes.description,
              episodeURL: episodes.enclosure.link
            }
          }
          episodeList.push(episode)
          resolve(episodeList)
        })
      }
    })
  })
}

module.exports = returnEpisodeXML
