const React = require('react')
const GridList = require('material-ui/GridList').GridList
const GridTile = require('material-ui/GridList').GridTile
const Subheader = require('material-ui/Subheader').default

function Profile(props) {

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
    }
  }

const podcasts = [
  {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
]

  return (
    <div id={'profile'}>
      <span>Profile Page</span>
      <div>
        <GridList
          cols={3}
          cellHeight={100}
          padding={0}
          style={styles.gridList}
        >
          {podcasts.map((podcast) => (
            <GridTile
              key={podcast.title}
            >
              <text style={styles.gridTile} src={''} />
            </GridTile>
          ))}
        </GridList>
      </div>
    </div>
  )

}

module.exports = Profile
