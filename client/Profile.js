const React = require('react')
const GridList = require('material-ui/GridList').GridList
const GridTile = require('material-ui/GridList').GridTile
const Subheader = require('material-ui/Subheader').default
const {List, ListItem} = require('material-ui/List')
const Divider = require('material-ui/Divider')
const colors = require('material-ui/styles/colors')

function Profile(props) {
  console.log(props)
  let podcasts = (props.subscribe) ?props.subscribe :[]

  const styles = {
    gridList: {
      width: 300,
      overflowY: 'auto',
    },
    gridTile: {
      fontFamily: 'Roboto',
      border: 'solid black 1px'
    },
    image: {
      width: '100%',
      height: '100%'
    },
    menu: {
      fontFamily: 'Roboto',
    }
  }

  return (
    <div id={'profile'}>
      <div>
        <List>
          <ListItem
          style={styles.menu}
          primaryText='PODCAST SUBSCRIPTIONS'
          />
        </List>
        <GridList
          cols={3}
          cellHeight={100}
          padding={0}
          style={styles.gridList}
        >
          {podcasts.map((podcast, i) => (
            <GridTile
              key={i}
              onClick={ ()=>
                    store.dispatch({
                    type: 'LOAD_EPISODE',
                    view: 'detail',
                    channelDetail: podcast
                  })}
            >
              <img src={podcast.image} />
            </GridTile>
          ))}
        </GridList>
      </div>
    </div>
  )

}

module.exports = Profile
