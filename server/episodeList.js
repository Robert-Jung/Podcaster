var Feed = require('rss-to-json')

function returnEpisodeXML(xmlLink) {
  Feed.load(xmlLink, function(err, rss) {
    if (err) {
      console.error(err)
    }
    else {
      console.log(rss.items[0].enclosures)
    }
  })
}

module.exports = returnEpisodeXML
