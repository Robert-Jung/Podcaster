const Redux = require('redux')

const podcasts = function podcastList(state = [], action) {
  switch(action.type) {
    case 'PAGE_LOADED':
      return action.podcasts
    default:
      return state
  }
}

const searchInput = function newSearch(state = '', action) {
  switch(action.type) {
    case 'INPUT_CHANGED':
      return action.text
    case 'SEARCH_CREATED':
      return ''
    default:
      return state
  }
}

const reducer = Redux.combineReducers({ podcasts, searchInput })
const store = Redux.createStore(reducer)

module.exports = store
