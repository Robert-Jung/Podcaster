const Redux = require('redux')

const podcasts = function podcastList(state = [], action) {
  switch(action.type) {
    case 'PAGE_LOADED':
      return action.podcasts
    default:
      return state
  }
}

const reducer = Redux.combineReducers({ podcasts })
const store = Redux.createStore(reducer)

module.exports = store
