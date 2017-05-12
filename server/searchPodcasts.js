const request = require('request')

function searchPodcast(term) {
  const fullPath = ('https://itunes.apple.com/search?term=' + term.searchInput + '&media=podcast')

  return new Promise((resolve, reject) => {
    request(fullPath, (error, res, body) => {
      const searchResults = JSON.parse(body).results

      if (error) {
        reject(error)
      }
      else {
        const data = []
        const name = searchResults.map((result) =>{
          const properties = {
            title: result.collectionName,
            img: result.artworkUrl600,
            feedURL: result.feedUrl
          }
          data.push(properties)
          resolve(data)
        })
      }
    })
  })

}

module.exports = searchPodcast
