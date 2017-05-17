const React = require('react')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const List = require('material-ui/List').default
const ListItem = require('material-ui/List').ListItem
const Divider = require('material-ui/Divider').default
const Card = require('material-ui/Card').default
const CardActions = require('material-ui/Card').CardActions
const CardHeader = require('material-ui/Card').CardHeader
const CardMedia = require('material-ui/Card').CardMedia
const CardTitle = require('material-ui/Card').CardTitle
const CardText = require('material-ui/Card').CardText

const ChannelHeader = (props) => {
  const channel = props.info

  const styles = {
    image: {
      width: '180px',
      height: '180px',
      padding: '10px'
    }
  }

  return(
    <Card>
      <CardTitle
        title={channel.title}
        subtitle={channel.url}
        children={<img style={styles.image} src={channel.image}/>}
      />
        <CardText>
          {channel.description}
        </CardText>
    </Card>
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
