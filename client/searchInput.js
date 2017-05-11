const React = require('react')
const store = require('./store')
const TextField = require('material-ui/TextField').default
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const colors = require('material-ui/styles/colors')
const RaisedButton = require('material-ui/RaisedButton').default
const FontIcon = require('material-ui/FontIcon').default
const ActionSearch = require('material-ui/svg-icons/action/search').default

const style = {
  margin: '20px',
}

function handleChange(event) {
  store.dispatch({
    type: 'INPUT_CHANGED',
    text: event.target.value
  })
}

const SearchInput = () => {
  return (
    <form>
      <TextField
      floatingLabelText='Search for Podcast'
      onChange={ handleChange }
      />
      <RaisedButton
      icon={<ActionSearch />}
      style={style}
      />
    </form>
  )
}

module.exports = SearchInput
