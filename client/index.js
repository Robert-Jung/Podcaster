const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const Theme = require('./Theme')
const PodcastList = require('./PodcastList')
const injectTapEventPlugin = require('react-tap-event-plugin')

injectTapEventPlugin()

function render() {
  const currentState = store.getState()
  const $root = document.querySelector('#app')

  ReactDOM.render(
  <div>
    <Theme/>
    <PodcastList list={ currentState.podcasts }/>
  </div>,
  $root)
}

store.subscribe(render)

render()

fetch('/podcasts')
  .then(res => res.json())
  .then(podcasts => {
    store.dispatch({ type:'PAGE_LOADED', podcasts })
  })
