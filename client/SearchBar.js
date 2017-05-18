const React = require('react')
const AppBar = require('material-ui/AppBar').default
const SearchInput = require('./searchInput')
const SearchResult = require('./SearchResult')

const SearchBox = (props) => {
  return(
    <div>
      <SearchInput />
      <SearchResult searchResult={ props.searchResult }/>
    </div>
  )
}

const SearchBar = (props) => (
  <AppBar
    showMenuIconButton={ false }
    title='Podcaster'
    iconElementRight={ <SearchBox searchResult={ props.searchPodcast } /> }
  />
)

module.exports = SearchBar
