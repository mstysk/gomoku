import React from 'react'
import { connect } from 'react-redux'

//styles
import style from '../../sass/style'

//components
import Board from '../components/Board'

//action
import { put } from '../action/gomoku'

class Gomoku extends React.Component{
  render(){
    return (
      <div className={ style.wrap }>
        <h1 className={ style.title }>Gomoku</h1>
        <Board 
          board={this.props.gomoku.board} 
          onPut={this.props.onPut}
         />
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
