import React from 'react'

import style from '../../sass/style'

import * as player from '../libs/player'
import * as config from '../config'

class Histories extends React.Component {
  render(){
    return (
        <div className={ style.histories }>
        {this.props.histories.map( (history, i) => {
          return (
            <div key={i} className={ style.history }>
              {history.x}:{history.y}&nbsp;-&nbsp;{ player.GetPlayer(history.player, config.PLAYERS) }
            </div>
          )
        })}
        </div>
    )
  }
}

export default Histories
