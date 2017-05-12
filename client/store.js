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

const searchPodcast = function searchedPodcast(state = [], action) {
  switch(action.type) {
    case 'SEARCH_LOADED':
      state.push(action.searchedPodcast)
      return state
    default:
      return state
  }
}

const reducer = Redux.combineReducers({ podcasts, searchInput, searchPodcast })
const store = Redux.createStore(reducer)

module.exports = store
