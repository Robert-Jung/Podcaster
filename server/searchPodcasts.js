const request = require('request')

function searchPodcast(term) {
  const fullPath = ('https://itunes.apple.com/search?term=' + term.searchInput + '&media=podcast')

  request(fullPath, (error, res, body) => {
    const searchResults = JSON.parse(body).results
    const name = searchResults.map((result) =>{
      console.log(result.collectionName)
    })
  })

}

module.exports = searchPodcast
