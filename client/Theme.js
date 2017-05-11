const React = require('react')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const getMuiTheme = require('material-ui/styles/getMuiTheme').default
const AppBar = require('material-ui/AppBar').default
const colors = require('material-ui/styles/colors')
const SearchInput = require('./searchInput')

const muiTheme = getMuiTheme({
  appBar: {
    height: 80,
    color: colors.grey800,
    textColor: colors.darkWhite,
  }
})

const Theme = () => (
  <MuiThemeProvider muiTheme={ muiTheme }>
    <AppBar
      showMenuIconButton={ false }
      title='Podcaster'
      iconElementRight={
        <SearchInput/>
      }
    />
  </MuiThemeProvider>
)

module.exports = Theme
