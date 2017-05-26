const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const SearchBar = require('./SearchBar')
const PodcastList = require('./PodcastList')
const DetailPage = require('./DetailPage')
const injectTapEventPlugin = require('react-tap-event-plugin')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const getMuiTheme = require('material-ui/styles/getMuiTheme').default
const colors = require('material-ui/styles/colors')
const MediaPlayer = require('./MediaPlayer')
const Profile = require('./Profile')

injectTapEventPlugin()

function App(props) {
  const styles = {
    profile: {
      position: 'relative',
      display: 'inline-block',
      float: 'left',
      padding: '10px',
      width: '20%'
    },
    app: {
      position: 'relative',
      display: 'inline-block',
      float: 'right',
      width: '75%'
    }
  }

  return (
    <div style={styles.main}>
      {
        props.view === 'discover' || 'detail' || 'player'
        ? <SearchBar searchPodcast={ props.searchPodcast }/>
        : null
      }
      <div style={styles.profile} >
        <Profile style={ styles.profile} subscribe={ props.subscribePodcast }/>
      </div>
      <div style={ styles.app }>
      {
        props.view === 'detail'
        ? <DetailPage channelInfo={ props.channelDetail }/>
        : null
      }
      {
        props.view === 'player'
        ? <div>
            <MediaPlayer podcastURL={ props.podcastPath } />
            <DetailPage channelInfo={ props.channelDetail }/>
        </div>
        : null
      }
      <PodcastList list={ props.podcasts }/>
      </div>
    </div>
  )
}

function render() {
  const currentState = store.getState()
  const $root = document.querySelector('#app')
  const muiTheme = getMuiTheme({
    appBar: {
      height: 80,
      color: colors.grey800,
      textColor: colors.darkWhite,
    }
  })

  ReactDOM.render(
      <MuiThemeProvider muiTheme={ muiTheme }>
        <App {...currentState}/>
      </MuiThemeProvider>,
  $root)
}

store.subscribe(render)

render()

fetch('/podcasts')
  .then(res => res.json())
  .then(podcasts => {
    store.dispatch({ type:'LOAD_DISCOVER', podcasts, view:'discover' })
    store.dispatch({ type:''})
  })
