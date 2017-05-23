const React = require('react')
const colors = require('material-ui/styles/colors')

const MediaPlayer = (props) => {
  console.log(props)
  const style={
    audio: {
      width: '100%',
      position: 'fixed',
      top: 'auto',
      bottom: 'auto'
    },
    player: {
      position: 'fixed',
      height: '30px',
      width: '100%',
      bottom: 0,
      backgroundColor: colors.grey800,
    }
  }

  return (
    <div className='player' style={style.player}>
      <audio controls style={style.audio} src={props.podcastURL}>
      </audio>
    </div>
  )
}

module.exports = MediaPlayer
