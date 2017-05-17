const Redux = require('redux')

const podcasts = function podcastList(state = [], action) {
  switch(action.type) {
    case 'LOAD_DISCOVER':
      return action.podcasts
    case 'CLEAR_DISCOVER':
      return []
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
      return [...action.searchedPodcast]
    case 'SEARCH_FINISHED':
      return []
    default:
      return state
  }
}

const channelDetail = function searchFeed(state = { episode: [] }, action) {
  switch(action.type) {
    case 'LOAD_EPISODES':
      return action.channelDetail
    default:
      return state
  }
}

const view = function changeView(state = '', action) {
  switch(action.type) {
    case 'LOAD_EPISODES':
      return action.view
  default:
    return state
  }
}

const reducer = Redux.combineReducers(
  {
  podcasts,
  searchInput,
  searchPodcast,
  channelDetail,
  view
  })
const store = Redux.createStore(reducer)

window.store = store

module.exports = store
