const React = require('react')
const colors = require('material-ui/styles/colors')

const MediaPlayer = (props) => {
  console.log(props)
  const style={
    audio: {
      width: '100%',
      position: 'relative',
      top: 'auto',
      bottom: 'auto'
    },
    player: {
      position: 'relative',
      height: '50px',
      width: '100%',
      bottom: 0,
      backgroundColor: colors.grey800
    }
  }

  return (
    <div style={style.player}>
      <audio controls style={style.audio} src={props.podcastURL}>
      </audio>
    </div>
  )
}

module.exports = MediaPlayer
