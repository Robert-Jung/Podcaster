const React = require('react')
const GridList = require('material-ui/GridList').GridList
const GridTile = require('material-ui/GridList').GridTile
const IconButton = require('material-ui/IconButton').default
const Subheader = require('material-ui/Subheader').default
const StarBorder = require('material-ui/svg-icons/toggle/star-border').default
const RaisedButton = require('material-ui/RaisedButton').default

function PodcastList(props) {
  const podcasts = props.list
  const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: 500,
      height: 450,
      overflowY: 'auto',
    },
  }

  return (
    <div style={styles.root}>
      <GridList
        cellHeight={120}
        style={styles.gridList}
      >
        <Subheader>Podcast Channels</Subheader>
        {podcasts.map((podcast) => (
          <GridTile
            key={podcast.image}
            title={podcast.title}
            subtitle={<span>Category: <b>{podcast.category}</b></span>}
          >
            <img src={podcast.image} />
          </GridTile>
        ))}
      </GridList>
    </div>
  )

}

module.exports = PodcastList
