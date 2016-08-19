import React from 'react'
import { connect } from 'react-redux'

//styles
import style from '../../sass/style'

//components
import Board  from '../components/Board'
import Player from  '../components/Player'
import Histories from '../components/Histories'

//action
import { put } from '../action/gomoku'

class Gomoku extends React.Component{
  render(){
    return (
      <div className={ style.wrap }>
        <h1 className={ style.title }>Gomoku</h1>
        <div className={ style.container }>
          { (this.props.gomoku.win)?
            (() => { return ( <div className={ style.mask }></div> )})() :
            ''
          }
          <div>
            <Board 
              board={this.props.gomoku.board} 
              onPut={this.props.onPut}
             />
           </div>
          <div className={ style.information }>
            <Player player={this.props.gomoku.player } win={this.props.gomoku.win}/>
            <Histories histories={this.props.gomoku.histories} />
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    gomoku: state.gomokuApp
  }
}


export default connect(
    mapStateToProps,
    {
      onPut: put
    }
)(Gomoku)
