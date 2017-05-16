const React = require('react')
const store = require('./store')
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
  },
  menu: {
    width: '300px'
  }
}

function handleDetailPage(url) {
  const urlLink = { url }
  fetch('/detailpage', {
    method: 'POST',
    headers: { 'Content-type': 'application/json'},
    body: JSON.stringify(urlLink)
  }).then((res) => {
    return res.json()
  }).then((episodeList) => {
    console.log(episodeList)
  }).then(() => {
    store.dispatch({
      type: 'CLEAR_DISCOVER'
    })
  }).then(() => {
    store.dispatch({
      type: 'SEARCH_FINISHED'
    })
  })
}

const searchResult = (props) => {
  const podcasts = props.searchResult

  return(
    <div>
      <Paper style={style.paper}>
        <Menu autoWidth={false} maxHeight={400}>
          {podcasts.map((podcast, i) => (
            <div key={ i }>
              <MenuItem style={ style.menu }
                primaryText={ podcast.title }
                leftIcon={<img style={style.img} src={podcast.img}/>}
                onClick={ ()=> handleDetailPage(podcast.feedURL) }
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
