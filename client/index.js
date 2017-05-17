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

injectTapEventPlugin()

const muiTheme = getMuiTheme({
  appBar: {
    height: 80,
    color: colors.grey800,
    textColor: colors.darkWhite,
  }
})

function App(props) {
  return (
    <div>
      <SearchBar searchPodcast={ props.searchPodcast }/>
      <DetailPage channelInfo= { props.channelDetail }/>
      <PodcastList list={ props.podcasts }/>
    </div>
  )
}

function render() {
  const currentState = store.getState()
  const $root = document.querySelector('#app')

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
    store.dispatch({ type:'LOAD_DISCOVER', podcasts })
    store.dispatch({ type:''})
  })
