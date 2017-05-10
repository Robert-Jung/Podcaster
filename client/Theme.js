const React = require('react')
const darkBaseTheme = require('material-ui/styles/baseThemes/darkBaseTheme').default
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const getMuiTheme = require('material-ui/styles/getMuiTheme').default
const AppBar = require('material-ui/AppBar').default
const colors = require('material-ui/styles/colors')

const muiTheme = getMuiTheme({
  appBar: {
    height: 40,
    color: colors.grey800,
    textColor: colors.darkWhite
  }
})

const Theme = () => (
  <MuiThemeProvider muiTheme={ muiTheme }>
    <AppBar title="Podcaster" />
  </MuiThemeProvider>
)

module.exports = Theme
