import React from 'react'

//styles
import style from '../../sass/style'

//components
import Mass from './Mass'


class Row extends React.Component{

  render(){
    return (
        <div className={ style.board }>
        {this.props.row.map((mass, x) => {
          return (
            <Mass key={x} x={x} y={this.props.y} mass={mass} />
            )
        })}
        </div>
    )
  }
}

export default Row
