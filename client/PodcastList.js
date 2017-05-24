const React = require('react')
const GridList = require('material-ui/GridList').GridList
const GridTile = require('material-ui/GridList').GridTile
const Subheader = require('material-ui/Subheader').default

function PodcastList(props) {
  const podcasts = props.list
  const styles = {
    gridList: {
      width: 700,
      height: 500,
      overflowY: 'auto',
      paddingTop: '10px',
      margin: 'auto'
    },
    gridTile: {
      fontFamily: 'Roboto',
    },
  }

  return (
      <div style={styles.root}>
        <GridList
          cols={3}
          cellHeight={230}
          padding={0}
          style={styles.gridList}
        >
          {podcasts.map((podcast) => (
            <GridTile
              key={podcast.image}
              title={podcast.title}
              subtitle={<span>Category: <b>{podcast.category}</b></span>}
              style={styles.gridTile}
            >
              <img src={podcast.image} />
            </GridTile>
          ))}
        </GridList>
      </div>
  )

}

module.exports = PodcastList
