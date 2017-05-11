const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const Theme = require('./Theme')
const PodcastList = require('./PodcastList')
const injectTapEventPlugin = require('react-tap-event-plugin')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default

injectTapEventPlugin()

function App(props) {
  return (
    <div>
      <Theme/>
      <PodcastList list={ props.podcasts }/>
    </div>
  )
}

function render() {
  const currentState = store.getState()
  const $root = document.querySelector('#app')

  ReactDOM.render(
      <MuiThemeProvider>
        <App {...currentState}/>
      </MuiThemeProvider>,
  $root)
}

store.subscribe(render)

render()

fetch('/podcasts')
  .then(res => res.json())
  .then(podcasts => {
    store.dispatch({ type:'PAGE_LOADED', podcasts })
  })
