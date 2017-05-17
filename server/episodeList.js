const request = require('request')

function returnEpisodeXML(xmlLink) {
  const pathName =  ('https://api.rss2json.com/v1/api.json?rss_url=' + xmlLink + '&api_key=' + process.env.RSS_KEY)

  return new Promise((resolve, reject) => {
    request(pathName, (error, res, body) => {
      const convertFeed = JSON.parse(body)
      const podcastDetail = convertFeed.feed
      const itemList = convertFeed.items

      if (error) {
        reject(error)
      }
      else {
        const episodeList = itemList.map((episodes) => {
          const episodeDetail = {
            title: episodes.title,
            description: episodes.description,
            date: episodes.pubDate,
            episodeURL: episodes.enclosure.link,
            length: episodes.enclosure.length
          }
          return episodeDetail
        })
        const channelDetail = {
            url: podcastDetail.link,
            title: podcastDetail.title,
            description: podcastDetail.description,
            image: podcastDetail.image,
            episode: episodeList
          }
        resolve(channelDetail)
      }
    })
  })
}

module.exports = returnEpisodeXML
