const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store.js')
const PodcastList = require('./PodcastList.js')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const injectTapEventPlugin = require('react-tap-event-plugin')

injectTapEventPlugin()

const App = () => (
  <MuiThemeProvider>
    <PodcastList />
  </MuiThemeProvider>
)

ReactDOM.render(
  <App />,
  document.querySelector('#app')
)
