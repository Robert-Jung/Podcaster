const React = require('react')
const AppBar = require('material-ui/AppBar').default
const SearchInput = require('./searchInput')
const SearchResult = require('./SearchResult')
const IconButton = require('material-ui/IconButton')

const SearchBox = (props) => {
  return(
    <div>
      <SearchInput />
      <SearchResult searchResult={ props.searchResult }/>
    </div>
  )
}

function handleHome() {
  fetch('/podcasts')
    .then(res => res.json())
    .then(podcasts => {
      store.dispatch({ type:'LOAD_DISCOVER', podcasts, view: 'discover' })
    })
}

const styles = {
 title: {
   cursor: 'pointer',
 }
}

const SearchBar = (props) => (
  <AppBar
    showMenuIconButton={ false }
    title={<span style={styles.title}>Podcaster</span>}
    onTitleTouchTap={handleHome}
    iconElementRight={ <SearchBox searchResult={ props.searchPodcast } /> }
  />
)

module.exports = SearchBar
