const React = require('react')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const List = require('material-ui/List').default
const ListItem = require('material-ui/List').ListItem
const Divider = require('material-ui/Divider').default

const ChannelHeader = (props) => {
  const channel = props.info

  return(
    <div>
      <h1>
        {channel.title}
      </h1>
    </div>
  )
}

const ChannelEpisodeList = (props) => {
  const episodeList = props.info.episode

  return(
    <div>
      <List>
        {episodeList.map((episodes, i) => (
          <div key={ i }>
            <ListItem
            primaryText = { episodes.title }
            />
            <Divider />
          </div>
        ))}
      </List>
    </div>
  )
}

const renderDetailPage = (props) => {
  return (
    <div>
      <ChannelHeader info={props.channelInfo}/>
      <ChannelEpisodeList info={props.channelInfo}/>
    </div>
  )
}

module.exports = renderDetailPage
