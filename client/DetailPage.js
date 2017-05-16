const React = require('react')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const List = require('material-ui/List').default
const ListItem = require('material-ui/List').ListItem
const Divider = require('material-ui/Divider').default

const renderDetailPage = (props) => {
  const episodes = props.list

  return(
    <div>
      <List>
        {episodes.map((episode, i) => (
          <div key={ i }>
            <ListItem
            primaryText = { episode.episode.title }
            />
            <Divider />
          </div>
        ))}
      </List>
    </div>
  )
}

module.exports = renderDetailPage
