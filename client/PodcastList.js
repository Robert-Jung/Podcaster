const React = require('react')
const GridList = require('material-ui/GridList').GridList
const GridTile = require('material-ui/GridList').GridTile
const IconButton = require('material-ui/IconButton').default
const Subheader = require('material-ui/Subheader').default
const StarBorder = require('material-ui/svg-icons/toggle/star-border').default
const RaisedButton = require('material-ui/RaisedButton').default
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default

function PodcastList(props) {
  const podcasts = props.list
  const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: 700,
      height: 500,
      overflowY: 'auto',
      paddingTop: '5px',
    },
    gridTile: {
      fontFamily: 'Roboto',
    },
  }

  return (
    <MuiThemeProvider>
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
    </MuiThemeProvider>
  )

}

module.exports = PodcastList
