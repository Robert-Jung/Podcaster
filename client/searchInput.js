const React = require('react')
const TextField = require('material-ui/TextField').default
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const colors = require('material-ui/styles/colors')

const SearchInput = () => {
  return (
    <form>
      <TextField floatingLabelText='Search for Podcast'/>
    </form>
  )
}

module.exports = SearchInput
