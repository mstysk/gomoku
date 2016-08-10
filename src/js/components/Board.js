import React from 'react'

//styles
import style from '../../sass/style'

//components
import Row from './Row'

class Board extends React.Component{

  render(){
    console.log(this.props);
    return (
        <div>
        {this.props.board.map((row, y) => {
          return (
            <div key={y} className={ style.board }>
              <Row row={row} y={y} />
            </div>
            )
        })}
        </div>
    )
  }
}

export default Board
