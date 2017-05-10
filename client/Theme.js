const React = require('react')
const darkBaseTheme = require('material-ui/styles/baseThemes/darkBaseTheme').default
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const getMuiTheme = require('material-ui/styles/getMuiTheme').default
const AppBar = require('material-ui/AppBar').default
const grey800 = require('material-ui/styles/colors').grey800
const darkWhite = require('material-ui/styles/colors').darkWhite

const muiTheme = getMuiTheme({
  appBar: {
    height: 40,
    color: grey800,
    textColor: darkWhite
  }
})

const Theme = () => (
  <MuiThemeProvider muiTheme={ muiTheme }>
    <AppBar title="Podcaster" />
  </MuiThemeProvider>
)

module.exports = Theme
