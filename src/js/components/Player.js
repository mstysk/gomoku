import React from 'react'

import style from '../../sass/style'

import * as config from '../config/'

import * as player from '../libs/player'

class Player extends React.Component{
  render(){
    return (
        <div>
          {(this.props.win)? 
            (() => {return (<div>{ player.GetPlayer( this.props.win, config.PLAYERS )}の勝ちです</div>)} )():
            (() => {return ( <span>{ player.GetPlayer(this.props.player, config.PLAYERS ) }の番です</span> )})()}
        </div>
    )
  }
}

export default Player
