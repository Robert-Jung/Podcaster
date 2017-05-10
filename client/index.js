const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const PodcastList = require('./PodcastList')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const injectTapEventPlugin = require('react-tap-event-plugin')

injectTapEventPlugin()

function render() {
  const currentState = store.getState()
  const $root = document.querySelector('#app')

  const App = () => (
    <MuiThemeProvider>
      <PodcastList list={ currentState.podcasts }/>
    </MuiThemeProvider>
  )

  ReactDOM.render(<App />, $root)
}

store.subscribe(render)

render()

fetch('/podcasts')
  .then(res => res.json())
  .then(podcasts => {
    store.dispatch({ type:'PAGE_LOADED', podcasts })
  })
