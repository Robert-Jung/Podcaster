const React = require('react')
const Paper = require('material-ui/Paper').default
const Menu = require('material-ui/Menu').default
const MenuItem = require('material-ui/MenuItem').default
const RemoveRedEye = require('material-ui/svg-icons/image/remove-red-eye').default
const PersonAdd = require('material-ui/svg-icons/social/person-add').default
const ContentLink = require('material-ui/svg-icons/content/link').default
const Divider = require('material-ui/Divider').default
const ContentCopy = require('material-ui/svg-icons/content/content-copy').default
const Download = require('material-ui/svg-icons/file/file-download').default
const Delete = require('material-ui/svg-icons/action/delete').default
const FontIcon = require('material-ui/FontIcon').default

const style = {
  paper: {
    position: 'absolute',
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
    top: '65px'
  },
  img: {
    textAlign: 'center',
    lineHeight: '28px'
  }
}

const searchResult = (props) => {
  const podcasts = props.searchResult
  return(
    <div>
      <Paper style={style.paper}>
        <Menu autoWidth={false} maxHeight={200}>
          {podcasts.map((podcast, i) => (
            <div key={ i }>
              <MenuItem
                primaryText={ podcast.title }
                rightIcon={<img style={style.img} src={podcast.img}/>}
              />
              <Divider/>
            </div>
          ))}
        </Menu>
      </Paper>
    </div>
  )
}

module.exports = searchResult
