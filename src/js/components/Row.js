import React from 'react'

//components
import Mass from './Mass'


class Row extends React.Component{

  render(){
    return (
        <div>
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
