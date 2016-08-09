import React from 'react'

//components
import Mass from './Mass'


class Row extends React.Component{

  render(){
    console.log(this.props);
    return (
        <div>
        {this.props.row.map(function(x, i){
          return (
            <Mass key={i} />
            )
        })}
        </div>
    )
  }
}

export default Row
