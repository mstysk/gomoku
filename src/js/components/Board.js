import React from 'react'

//components
import Row from './Row'

class Board extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props);
    return (
        <div>
        {this.props.board.map(function(x, i){
          return (
            <div>
              <Row key={i} row={x} />
            </div>
            )
        })}
        </div>
    )
  }
}

export default Board
