const React = require('react')
const List = require('material-ui/List').default
const ListItem = require('material-ui/List').ListItem
const Divider = require('material-ui/Divider').default
const Card = require('material-ui/Card').default
const {CardActions, CardHeader, CardMedia, CardTitle, CardText} = require('material-ui/Card')
const AvPlayCircleOutline = require('material-ui/svg-icons/av/play-circle-outline').default
const RaisedButton = require('material-ui/RaisedButton').default
const Paper = require('material-ui/Paper').default
const MediaPlayer = require('./MediaPlayer')

function handlePlayEpisode(event) {
  const currentState = store.getState()
  const episodes = currentState.channelDetail.episode
  const i = event.currentTarget.id
  const podcastURL = episodes[i].episodeURL

  store.dispatch({
    type: 'GET_PATH',
    podcastURL
  })
  store.dispatch({
    type: 'LOAD_PLAYER',
    view: 'player'
  })
}

function handleSubscribe(event) {
  const currentState = store.getState()
  const addPodcast = currentState.channelDetail.image

  store.dispatch({
    type: 'ADD_PODCAST',
    addPodcast
  })
}

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
        <CardText>
          <RaisedButton
            label = 'Subscribe'
            secondary={ true }
            onTouchTap= { handleSubscribe }
          />
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
            hoverColor={'grey'}
            disableTouchRipple={true}
            primaryText={ episodes.title }
            rightIcon={
              <RaisedButton
              id={ i }
              icon={ <AvPlayCircleOutline /> }
              primary={ true }
              onTouchTap={ handlePlayEpisode }
              />
            }
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
